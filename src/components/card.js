import React from "react";

const Card = ({ data }) => {
    
   
    return (
        
        <div className="card">
           
            <h2>{data.map((v , i)=>v.id)}</h2>
            <p className="title" >{data.map((v , i)=>v.title)}</p>
            <p className="body" >{data.map((v , i)=>v.body)}</p>
        </div>
    );
}
export default Card