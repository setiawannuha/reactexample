import React from 'react'
import ChildB from './childB'
import ChildC from './childC'

import HomeContext from '../views/context'

const ChildA = () => {
  return(
    <div>
      Child A
      <ChildB/>
      <HomeContext.Provider value={{data1: "product", data2: "user"}}>
        <ChildC/>
      </HomeContext.Provider>
    </div>
  )
}

export default ChildA