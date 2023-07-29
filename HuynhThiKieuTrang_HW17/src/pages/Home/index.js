import { Link,useNavigate} from "react-router-dom";
import listNote from "../../listNote.json";
const Home = () => {
    const navigate=useNavigate()
    const isFlag=true;
    const checkMap=()=>{
        if(isFlag)
        {
            navigate('/contact')
        }else{
            navigate('/about')
        }
    }
    console.log(listNote)
    return <div>
        This is my Home
        <ul>
            {listNote.map((item, index) => <li key={index}><Link to={`/product/${item.id}`}> {item.content}</Link></li>)}
        </ul>
        <button onClick={()=>checkMap()}>Huỳnh Trang</button>
    </div>
}
export default Home