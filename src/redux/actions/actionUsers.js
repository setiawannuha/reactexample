import axios from 'axios'

export const GET_ALL_DATA = () => {
  return {
    type: "GET_ALL_DATA_USERS",
    payload: new Promise((resolve, reject) => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        resolve(response.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export const GET_DETAIL_DATA = (id) => {
  return {
    type: "GET_DETAIL_USER",
    payload: new Promise((resolve, reject) => {
      axios.get("https://jsonplaceholder.typicode.com/users/"+id)
      .then((response) => {
        resolve(response.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export const INSERT_DATA = (form) => {
  console.log(form)
}