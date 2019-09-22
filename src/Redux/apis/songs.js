import axios from 'axios';

const baseURL = 'http://localhost:3001'
// axios.create({
// });

const getSongs = async () => await axios.get(`${baseURL}/songs`);
const getSong = async id => await axios.get(`${baseURL}/songs/:id`, { params: { id: id } });
const addSong = async data => await axios.post(`${baseURL}/songs`, data);
const editSong = async data => await axios.put(`${baseURL}/songs/${data.id}`, data);
// const deletePost = async id => await axios.delete('/delete', { params : { id: id } });

export default { getSongs, addSong, getSong, editSong };