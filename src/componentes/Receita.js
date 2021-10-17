import React, { useState } from "react";
import Detalhes from "./Detalhes";
const Receita = ({recipe}) =>{
    const [show,setShow] = useState(false);
    const {label,image,url,ingredients} = recipe.recipe;
    return(
        <div className='recipe'>
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <a href={url} target='_blank' rel='noopener noreferrer'>LINK</a>
            <button onClick={()=>setShow(!show)}>Ingredientes</button>
            {show && <Detalhes ingredients={ingredients}/>}
        </div>
    );
}
export default Receita;