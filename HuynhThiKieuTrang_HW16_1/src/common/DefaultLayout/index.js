
import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from './../../Components/Home/index';
import Society from './../../Components/Society/index';

const DefaultLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (!token) {
            navigate('/login')
        }
    }, [])
    return <div className="container">

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/xuatban" element={<Society />} />
        </Routes>

    </div>

}
export default DefaultLayout