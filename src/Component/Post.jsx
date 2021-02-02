import React,{useState} from 'react';
import axios from 'axios';
import Layout from "./Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

function Post() {
    const [post, setPost]= useState([]);
       console.log("Entered getnews");
        axios.get("http://localhost:3000/app").then((response)=>{
           const data = response.data;
           setPost(data);
        })
        .catch(()=>{
            console.log("error");
        })
    return (
              <div>
                {post.map((postItem, index)=>{
                    return(
                         <Layout 
                         newT={postItem.khabT}
                         news={postItem.khab}
                         key={index}
                          />
                    );
                })
                }
            </div>
    )
}
export default Post;
