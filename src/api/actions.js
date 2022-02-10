import axios from 'axios'

export const API_ACTION_START = "API_ACTION_START"
export const API_ACTION_FAIL = "API_ACTION_FAIL"
export const BLOGS_GET_SUCCESS = "BLOGS_GET_SUCCESS"

export const getBlogs = () => dispatch => {
    dispatch({type: API_ACTION_START})
    axios.get(`${process.env.REACT_APP_CONTENT_MANAGER_URL}${process.env.REACT_APP_BLOG_ENDPOINT}`)
        .then(response => dispatch({type: BLOGS_GET_SUCCESS, payload: response.data}))
        .catch(error => dispatch({type: API_ACTION_FAIL, payload: error}))
}       