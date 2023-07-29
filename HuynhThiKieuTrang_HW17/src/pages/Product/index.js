import { useParams } from "react-router-dom";
import listNote from "../../listNote.json"

const Product=()=>{
    let {id}=useParams()
    console.log(id)
    const note= listNote.find(item=>item.id===+id)
    console.log(note)
  
return<div>
    This is product
    
    <h1>{note.content}</h1>
    <h1>{note.time}</h1>
    </div>
}
export default Product;