import React,{Fragment} from 'react'
import logo from "../../../images/logo.png";
import "./Footer.css"
const MyComponent = () => {
  return (<Fragment>
    <div className="bpa-footer">
      <div className="header-image">
          <img src={logo} alt="Logo" />
        </div>
      <div className="footer-text">
        <p>Copyright &copy; 2019 - BIG Property Agency - Ataköy D-100 Güney Yanyolu Nef Ataköy 22 B blok Kat:14 Ataköy İstanbul</p>
      </div>
    </div>
    </Fragment>
  )
}

export default MyComponent