import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideoApi, UpdateCategoryApi } from '../services/allApi'
function View({videoStatus,setCategoryStatus}) {
  const [allVideo, setAllVideo] = useState([])
  //To alert view when video is deleted
  const [deletVideoStatus,setDeletVideoStatus] =useState([])
  
  const getAllVideo = async () => {
    const result = await getAllVideoApi()
    setAllVideo(result.data)

  }
  const dragOver=(e)=>{
    e.preventDefault()
  }
  const videoDrop = async(e)=>{
    const result =JSON.parse(e.dataTransfer.getData("dataShare"))
    

    const selectedCategory = result.categoryDetails
    const newDetails = selectedCategory.allVideos.filter((item)=>item.id!=result.videoId)

    console.log(newDetails)
    //console.log(selectedCategory.id)

    const reqBody ={
      category:selectedCategory.category,
      allVideos:newDetails,
      id:selectedCategory.id
    }
    //console.log(reqBody)
    const response =await UpdateCategoryApi(selectedCategory.id,reqBody)
    //console.log(response)
    setCategoryStatus(response.data)
    
  }
 // console.log(allVideo)
  useEffect(() => { getAllVideo() }, [videoStatus,deletVideoStatus])
  return (
    <>
      <div className='row w-100 p-4' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
        <h4>All Videos</h4>
        {allVideo ?
        //? is to display only when data is present
          allVideo?.map((item)=>(<div className="col-md-3 mt-3"><VideoCard video={item} setDeletVideoStatus={setDeletVideoStatus}/></div>))
          :
          <p className='text-danger fs-4'>Nothing to display</p>}

      </div>
    </>
  )
}

export default View
