import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload,faFilm } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { allvideoApi } from '../services/allApi';
function Add({setVideoStatus}) {
  const [show, setShow] = useState(false);
  const[videoDetails,setVideoDetails] =useState({
    caption:"",
    imageUrl:"",
    embedLink:""
  })
  console.log(videoDetails)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLink=(e)=>{
    const link=e.target.value
    console.log(link)
    if(link.startsWith('https://youtu.be/')){
      setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${link.slice(17,28)}`})
    }
    else{
      console.log(link.slice(-11))
      setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${link.slice(-11)}`})
    }
   
  }

  const handleUpload =async(e)=>{
    e.preventDefault()

    const result= await allvideoApi(videoDetails)
  

    if(result.status>=200 && result.status<300){
      alert('video added succesfully')
      setVideoStatus(result.data)
      handleClose()
    }
    else{
      alert('someting went wrong');
      console.log(result);
    }
  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <span className='hide'><h5 >Upolad new Video </h5></span>
        <button className='btn fs-5 ' onClick={handleShow}><FontAwesomeIcon icon={faUpload} /></button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} /> Upload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill the following details</p>
          <form className='border p-3 rounded'>
            <div className='mb-3'>
              <input type='text' className='form-control ' placeholder='Video caption' onChange={(e)=>{setVideoDetails({...videoDetails,caption:e.target.value})}}></input>
            </div>
            <div className='mb-3'>
              <input type='text' className='form-control ' placeholder='Video image' onChange={(e)=>{setVideoDetails({...videoDetails,imageUrl:e.target.value})}}></input>
            </div>
            <div className='mb-3'>
              <input type='text' className='form-control ' placeholder='Video Url' onChange={(e)=>{getLink(e)}}></input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={(e)=>{handleUpload(e)}}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
