import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001'
});

const getSongs = async () => await axiosInstance.get(`/songs`);
const getSong = async id => await axiosInstance.get(`/songs/:id`, { params: { id: id } });
const addSong = async data => await axiosInstance.post(`/songs`, data);
const editSong = async data => await axiosInstance.put(`/songs/${data.id}`, data);
// const deletePost = async id => await axios.delete('/delete', { params : { id: id } });
// axiosInstance.interceptors.request.use(
//     response => successHandler(response),
//     error => errorHandler(error)
// )

// const successHandler = (request) => {
//     alert('request')

//     return request
// }

// const errorHandler = (error) => {
//     alert('error')
//     return Promise.reject({ ...error })
// }

export default { getSongs, addSong, getSong, editSong };