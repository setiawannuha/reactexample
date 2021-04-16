import React, { useState, useEffect } from 'react'
import ChildA from '../components/childA'
import HomeContext from './context'
import { Link } from 'react-router-dom'
// REDUX
import { useSelector, useDispatch } from 'react-redux'
import { actionCountTambah, actionCountKurang } from '../redux/actions/actionCount'
import { GET_ALL_DATA, INSERT_DATA } from '../redux/actions/actionUsers'

const Home = () => {

  const [nama, setNama] = useState("Fazztrack")

  const changeNama = () => {
    setNama("Setiawan")
  }

  const [count, setCount] = useState({
    number: 0
  })

  // REDUX
  const dispatch = useDispatch()
  const reduxCount = useSelector((state) => state.countReducer)
  const tambahReduxCount = () => {
    dispatch(actionCountTambah())
  }
  const kurangReduxCount = () => {
    dispatch(actionCountKurang())
  }

  const users = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(GET_ALL_DATA())
  }, [])

  const [form, setForm] = useState(
    {
      name: ''
    }
  )
  const submitForm = () => {
    INSERT_DATA(form)
  }
  
  return (
    <div>
      Home {nama}
      <br/>
      <button onClick={changeNama}>Ganti Nama</button>
      <hr/>
      <h1>{count.number}</h1>
      <button onClick={() => setCount({ number: count.number+1 })}>+</button>
      <button onClick={() => setCount({ number: count.number-1 })}>-</button>
      <hr/>
      <HomeContext.Provider value={{ data1: "user", data2: "product" }}>
        <ChildA/>
      </HomeContext.Provider>
      <hr/> <hr/>
      {JSON.stringify(reduxCount)}
      <button onClick={tambahReduxCount}>Tambah</button>
      <button onClick={kurangReduxCount}>Kurang</button>
      <hr/><hr/> 
      <h1>Data Users</h1>
      {
        users.isLoading?(
          <h1>Loading</h1>
        ):(
          users.list.map((item, i) => {
            return(
              <div key={i}>{item.name} <Link to={`/${item.id}`}>Detail</Link></div>
            )
          })
        )
      }
      <Link to="/about">About</Link>
      <input type="text" onChange={(e) => setForm(e.target.value)}/>
      <button onClick={submitForm}>Submit</button>
    </div>
  )
}

export default Home