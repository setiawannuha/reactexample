const initialState = {
  count: 0,
  nama: 'Iwan',
  umur: ''
}

const countReducer = (state=initialState, action) => {
  switch (action.type) {
    case "TAMBAH":
      return { ...state, count: state.count + action.payload }
    case "KURANG":
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}
export default countReducer