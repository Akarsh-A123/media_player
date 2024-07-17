import axios from 'axios'
//creating the api calling fn
export const commonAPI=async (httpRequest, url,reqbody)=>{
    //Api configuration data
    const reqConfig={
        method:httpRequest,
        url:url,
        data: reqbody,
        headers:{"Content-Type":"application/json"}
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}