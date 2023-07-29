
import "./navStyle.css"
const Nav = () => {
    return <div className='container'>
        <div className='weather'>
            <ul className='ul' type="none">
                <div className="logo">
                    <img src="https://static-znews.zingcdn.me/images/stat.svg" alt="logo" />
                </div>

                <li>
                    # Bầu cử Thái Lan
                </li>
                <li className='weather1'>
                    <span style={{ fontWeight: 'bold' }}>TP. Hồ Chí Minh</span>  28°C/ 26-30°C
                    <img src="	https://static-znews.zingcdn.me/images/icons/weather/v2/hazy.png" alt="" />
                </li>
            </ul>
        </div>
    </div>
}
export default Nav