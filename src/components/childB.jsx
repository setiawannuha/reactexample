import React, { useContext } from 'react'
import HomeContext from '../views/context'


const ChildB = () => {
  const context = useContext(HomeContext)
  return(
    <div>
      Child B {context.data1}
    </div>
  )
}

export default ChildB