import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deleteCategoryApi, getCategoryApi, UpdateCategoryApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
function Category({categoryStatus}) {
  const [category,setCategory] =useState("")
  const [show, setShow] = useState(false);
  const [allCategory,setAllCategory] =useState([])
  const [status,setStatus] =useState(false)
  const [updateStatus,setUpdateStatus] =useState(false)
  const handleClose = () => {setShow(false),setCategory("")};
  const handleShow = () => setShow(true);
  

  const handelAddcategory = async ()=>{
    if(category){
      const reqBody ={
        category:category,
        allVideos:[]
      }
      const result=await addCategoryApi(reqBody)
      console.log(result)
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategory("")
        alert('category  added successfully')
        setStatus(true)
      }
    }
    else{
      alert('add category')
    }
    
  }


  const getCategory =async()=>{
    const result=await getCategoryApi()
    setAllCategory(result.data)
  }
  //console.log(allCategory)

  const handelDelete =async(id)=>{
    await deleteCategoryApi(id)
    setStatus(true)
  }

  useEffect(()=>{
    setStatus(false)
    setUpdateStatus(false)
    getCategory()},[status,updateStatus,categoryStatus])

//Drag and drop
const dragOver =(e)=>{
  e.preventDefault()
}

const ondrag =(e,videoId,categoryDetails)=>{
  //console.log(videoId,categoryDetails)
  const dataShare={videoId,categoryDetails}
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
}

const videoDrop=async (e,categoryid)=>{
  //console.log(categoryid.allVideos)
  const videodetails =JSON.parse(e.dataTransfer.getData("videoId"))
  //console.log('video is ',video)

  if(categoryid.allVideos.find(item=>item.id==videodetails.id)){
    alert('video already added')
  }
  else{
    categoryid.allVideos.push(videodetails)
    const result = await UpdateCategoryApi(categoryid.id,categoryid)
    console.log(result)
    setUpdateStatus(true)
    alert('video added successfuly')
  }
  //console.log(categoryid)

  
}

  return (
    <>
      <h4 className='mt-5 mt-md-0'>Category</h4>
      <button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>

     {allCategory?.length >0? 
     allCategory?.map((item)=>(
        <div className='p-3 border rounded mt-4' droppable onDragOver={(e)=>{dragOver(e)}} onDrop={(e)=>{videoDrop(e,item)}}>
          <div className='p-3 border rounded mt-4 d-flex justify-content-between'>
            <p className='mb-4'>{item.category}</p>
            <button className='btn btn-danger' onClick={()=>{handelDelete(item.id)}}><FontAwesomeIcon icon={faTrashCan} /></button>
          </div>
          {item?.allVideos?.length>0?
          item?.allVideos.map((video)=>(
          <div draggable onDragStart={(e)=>ondrag(e,video.id,item )} ><VideoCard video={video} isPresent={true}/></div>
          )):null}
        </div>))
          :
          <p className='text-danger'>No category Added Yet</p>
     }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border rounded'>
            <input type='text' className='form-control' placeholder='category name' onChange={(e)=>{setCategory(e.target.value)}}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handelAddcategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category
