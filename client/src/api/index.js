import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertTweet = data => api.post(`/tweet`, data)
export const getAllTweets = () => api.get(`/tweets`)
export const updateTweetById = (id, data) => api.put(`/tweet/${id}`, data)
export const deleteTweetById = id => api.delete(`/tweet/${id}`)
export const getTweetById = id => api.get(`/tweet/${id}`)

const apis = {
    insertTweet,
    getAllTweets,
    updateTweetById,
    deleteTweetById,
    getTweetById,
}

export default apis;