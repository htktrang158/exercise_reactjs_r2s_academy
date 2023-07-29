import "./style.css"
import Logo from "./image/logo.png"
import avt from "./image/avt.jpg"
import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
    return ( <div className='container'>
        <div className="nav-post">
            <img src={Logo} alt="" className="logo_zing" />
            <ul className="nav">
                <li><a href="https://zingnews.vn/">Xuat ban</a></li>
                <li><a href="https://zingnews.vn/">Kinh doanh</a></li>
                <li><a href="https://zingnews.vn/">Cong Nghe</a></li>
                <li><a href="https://zingnews.vn/">The Thao</a></li>
                <li><a href="https://zingnews.vn/">Giai Tri</a></li>
                <li><a href="https://zingnews.vn/">Doi Song</a></li>
                <li><a href="https://zingnews.vn/">Lifestyle</a></li>
                <li><a href="https://zingnews.vn/">...</a></li>
            </ul>
            {/* <div className="icon-search">
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div> */}


            <img src={avt} alt="" className="avt_zing" />
        </div>
        </div>
    )
}

export default Header;
