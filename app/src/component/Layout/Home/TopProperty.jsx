import React,{Fragment} from 'react'
import "./TopProperty.css"
import PropertyCard from "./PropertyCard"
const TopProperty = () => {
  return (<Fragment>
    <div className="container-tp">
      <h1>Popular Properties</h1>
     <PropertyCard/>
    </div>
    </Fragment>
  )
}

export default TopProperty