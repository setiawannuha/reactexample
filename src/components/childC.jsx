import React, { useContext } from 'react'
import HomeContext from '../views/context'


const ChildC = () => {
  const context = useContext(HomeContext)
  return(
    <div>
      Child C {context.data1}
    </div>
  )
}

export default ChildC