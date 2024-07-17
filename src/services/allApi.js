import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverUrl"

//api to upload
export const allvideoApi = async (reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/allVideos`,reqBody)
}

//api to get video
export const getAllVideoApi = async ()=>{
    return await commonAPI('GET',`${serverUrl}/allVideos`)
}

//api to delete a vedio
export const deletVideoApi = async (id)=>{
    return await commonAPI('DELETE',`${serverUrl}/allVideos/${id}`)
}

//api to add to history
export const addVideoHistoryApi = async(reqbody) =>{
    return await commonAPI('POST',`${serverUrl}/history`,reqbody)
} 

//api to get video history

export const getVideoHistoryApi = async()=>{
    return await commonAPI('GET',`${serverUrl}/history`)
}

//api to delet video history

export const deletVideoHistoryApi = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/history/${id}`)
}

//api to add to category
export const addCategoryApi = async(reqbody) =>{
    return await commonAPI('POST',`${serverUrl}/category`,reqbody)
} 

//api to get category
export const getCategoryApi =async()=>{
    return await commonAPI('GET',`${serverUrl}/category`)
}

//api to delete category
export const deleteCategoryApi = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/category/${id}`)
}

//api to update category

export const UpdateCategoryApi = async(id,reqbody)=>{
    return await commonAPI('PUT',`${serverUrl}/category/${id}`,reqbody)
}

