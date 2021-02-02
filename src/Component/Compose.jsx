import React,{useState} from 'react';
import axios from 'axios';
import "./Compose.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Compose() {
    const [input, setInput] = useState(" ");
    const [tittle, setTittle] = useState(" ");

    function handleSubmit(e){
        
        const registered ={
            khabT:tittle,
            khab:input
        }
        axios.post("http://localhost:3000/app/compose",registered).then(alert("Done"));     
    }
    function handleChange(e){
        setInput(e.target.value);
    }
    function handleChangeT(e){
        setTittle(e.target.value);
    }

    return (
        <div>

            <form className="jumbotron jumbotron-fluid con1">
                <input placeholder="Tittle" name="khabarT" className="contentT" onChange={handleChangeT}></input>
                <input placeholder="Your news"  className="content" name="khabar" onChange={handleChange}>
                </input>
                <button type="submit" className="sr btn btn-warning" onClick={handleSubmit}>Submit</button>               
            </form>

        </div>
    )
}
export default Compose;

