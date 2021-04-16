const initialState = {
  list: [],
  detail: {},
  isLoading: false,
  isError: false
}

const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA_USERS_PENDING":
      return {...state, list: action.payload, isLoading: true}
    case "GET_ALL_DATA_USERS_FULFILLED":
      return {...state, list: action.payload, isLoading: false}
    case "GET_ALL_DATA_USERS_REJECTED":
      return {...state, list: action.payload, isLoading: true, isError: true}
    case "GET_DETAIL_USER_PENDING":
      return {...state, detail: action.payload, isLoading: true}
    case "GET_DETAIL_USER_FULFILLED":
      return {...state, detail: action.payload, isLoading: false}
    case "GET_DETAIL_USER_REJECTED":
      return {...state, detail: action.payload, isLoading: true, isError: true}
    default:
      return state
  }
}

export default userReducer