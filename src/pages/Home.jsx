import React, { useState } from 'react'
import Add from '../components/Add.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View.jsx'
import Category from '../components/Category.jsx'
import { Link } from 'react-router-dom'
function Home() {
  const [videoStatus,setVideoStatus] = useState()
  const [categoryStatus,setCategoryStatus]=useState()
  return (
    <>
      <div className='d-flex p-5'>
        <Add setVideoStatus={setVideoStatus}/>
        <h5 className='ms-auto'><Link to={'/Watchhistory'} style={{textDecoration:'none',color:'white'}}><span className='hide'>Watch History</span></Link> <FontAwesomeIcon icon={faClockRotateLeft} /></h5>
      </div>

      <div className='row w-100 p-4'>
        <div className="col-md-9">
          <View videoStatus={videoStatus} setCategoryStatus={setCategoryStatus}/>
        </div>
        <div className="col-md-3 ">
          <Category categoryStatus={categoryStatus}/>
        </div>
      </div>
    </>
  )
}

export default Home


