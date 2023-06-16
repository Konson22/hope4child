import axiosInstance from "hooks/useAxios"
// import children from '../assets/childrenJson.json'

export const getChildren = async () => {
    return axiosInstance('/children')
}



export const getChild = async (id) => {
    return axiosInstance(`/children?query=${id}`)
}