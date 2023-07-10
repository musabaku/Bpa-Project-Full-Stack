import React,{Fragment} from 'react'
import "./CountStats.css"

const CountStats = () => {
  return (<Fragment>
    <div className="container-stats">
      <div className="stats">
      <p className="stats-number">1900+</p>
      <p className="stats-text">UNITS</p>
      </div>
      <div className="stats">
      <p className="stats-number">27000+</p>
      <p className="stats-text">INTERVIEWS</p>
      </div>
      <div className="stats">
      <p className="stats-number margin-r">290+</p>
      <p className="stats-text">PROJECTS</p>
      </div>
      <div className="stats">
      <p className="stats-number margin-r">950+</p>
      <p className="stats-text">MILLION TURNOVER</p>
      </div>
      
    </div>
    </Fragment>
  )
}

export default CountStats