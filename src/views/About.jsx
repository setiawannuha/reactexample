import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const About = () => {

  const [name, setName] = useState("Arkademy")
  const [data, setData] = useState([0,1,2,3])

  // component didmount
  // useEffect(() => {
  //   console.log("hello DidMount")
  // }, [])

  const tambahData = () => {
    setData([...data, 10])
  }
  // componentDidUpdate
  useEffect(() => {
    console.log("data dirubah")
  }, [data])

  useEffect(() => {
    return function cleanup() {
      console.log("will unmount")
    };
  })

  // REDUX
  const users = useSelector((state) => state.users)

  return(
    <div>
      About {name} <Link to="/">Home</Link>
      <br/>
      <button onClick={() => setName(name==="Arkademy"? "Setiawan": "Arkademy")}>Change</button>
      <hr/>
      {JSON.stringify(data)}
      <br/>
      <button onClick={tambahData}>Tambah Data</button>
      <hr/><hr/>  
      {JSON.stringify(users)}
    </div>
  )
}

export default About