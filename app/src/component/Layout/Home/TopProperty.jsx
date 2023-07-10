import React,{Fragment} from 'react'
import "./TopProperty.css"
import PropertyDetails from "./PropertyDetails"
const TopProperty = () => {
  return (<Fragment>
    <div className="container-tp">
      <h1>Popular Properties</h1>
     <PropertyDetails/>
    </div>
    </Fragment>
  )
}

export default TopProperty