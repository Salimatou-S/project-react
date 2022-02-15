import React from 'react';
import { useNavigate} from "react-router-dom"


function Home() {
  let navigate = useNavigate();
  return (
    <div>
        This is the home page {" "}
        <button onClick={() => {
            navigate("/about");
    }}
    >
     {" "}   
    change to about page</button>    
    </div>
  )
}

export default Home