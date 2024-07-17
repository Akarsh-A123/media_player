import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoHistoryApi, deletVideoApi} from '../services/allApi';


function VideoCard({ video, setDeletVideoStatus,isPresent  }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const caption=video?.caption
    const url =video?.embedLink 
    
    const time =new Date()
    //For time formating
    const timeStamp= new Intl.DateTimeFormat("en-GB", {year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    

    const reqbody={
      caption:caption,
      url:url,
      timeStamp:timeStamp
    }
    const result=await addVideoHistoryApi(reqbody)
    console.log(result)

  };

  const handelDelete = async (id) => {
    const result = await deletVideoApi(id)
    setDeletVideoStatus(result.data)
  }
  const videoDrag =(e,video)=>{
    e.dataTransfer.setData('videoId',JSON.stringify(video))
  }
  return (
    <>
      <Card className='mt-2'  draggable onDragStart={(e)=>{videoDrag(e,video)}}>
        {!isPresent&&<Card.Img variant="top" onClick={handleShow} src={video?.imageUrl} height={'250px'} />}
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title  style={{textAlign:'justify',fontSize:'15px'}}>{video.caption}</Card.Title>
            {!isPresent&&<Button variant="danger" onClick={() => { handelDelete(video?.id) }}><FontAwesomeIcon icon={faTrashCan} /></Button>}
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="383" src={video?.embedLink + '?autoplay=1'} title={video?.caption} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard
