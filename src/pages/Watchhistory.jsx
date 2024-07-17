import { faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletVideoHistoryApi, getVideoHistoryApi } from '../services/allApi'

function Watchhistory() {
  const [videoHistory, setVideoHistory] = useState([])

  const getVideoHistory = async () => {
    const result = await getVideoHistoryApi()
    if (result.status >= 200 && result.status < 300) {
      setVideoHistory(result.data);
    }
    else {
      console.log('error')
    }

  }

  const handelDeletVideo = async(id) =>{
    await deletVideoHistoryApi(id)
    getVideoHistory()
  }

  console.log(videoHistory)
  useEffect(() => { getVideoHistory() }, [])
  return (
    <>
      <div className='d-flex justify-content-between p-3'>
        <h5 className='text-center'>Watch History</h5>
        <h5><Link to={'/Home'} style={{ textDecoration: 'none', color: 'white' }}><FontAwesomeIcon icon={faHouse} /> <span className='hide'>Back Home</span></Link></h5>
      </div>
      <div className='row w-100 my-5'>
        <div className="col-md-2"></div>
        <div className="col-md-8">

          {videoHistory.length > 0 ?
            <table className='table mt-4 w-md-25 '>
              <thead >
                <tr>
                  <th>SI.No</th>
                  <th>Caption</th>
                  <th>URL</th>
                  <th>Timestamp</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {videoHistory && videoHistory?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.caption}</td>
                    <td><Link to={item.url}>{item.url}</Link></td>
                    <td>{item.timeStamp}</td>
                    <td><button className='btn btn-danger' onClick={()=>{handelDeletVideo(item.id)}}><FontAwesomeIcon icon={faTrashCan} /></button></td>
                  </tr>))
                }
              </tbody>
            </table>
            :
            <p className='text-danger'>NO history</p>
          }
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  )
}

export default Watchhistory
