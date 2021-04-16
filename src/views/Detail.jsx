import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GET_DETAIL_DATA } from '../redux/actions/actionUsers'

const Detail = () => {
  const params = useParams();
  const id = params.id
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(GET_DETAIL_DATA(id))
  }, [])
  return(
    <div>
      Detail
      <hr/>  
      {JSON.stringify(user.detail)}
    </div>
  )
}

export default Detail