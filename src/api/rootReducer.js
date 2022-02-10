import * as actions from './actions'

export const initState = {
    blogs : [],
    isLoading : false,
    error : '',
    changes : false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.API_ACTION_START:
            return {
                ...state,
                isLoading : true,
                error : ''
            }
        case actions.API_ACTION_FAIL:
            return {
                ...state,
                isLoading : false,
                error : action.payload
            }
        case actions.BLOGS_GET_SUCCESS:
            return {
                ...state,
                isLoading : false,
                error: '',
                blogs : action.payload,
                changes : false
            }
        default:
            return state
    }
}

export default reducer