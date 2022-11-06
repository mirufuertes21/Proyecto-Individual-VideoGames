import React from "react";
import style from './CreateVideogame.module.css'
import { Link } from 'react-router-dom'
//en el let va el estado inicial
export default function CreateVideogame(){
    let [input, setInput]= React.useState({
        name: "",
        description: "",
        released: "",
        background_image: "",
        rating: "",
        genres: [],
        platforms: [],
  });

  //seteo la info de los inputs, uso el target para que todos los inputs utilizen la misma funcion handleChange
  // el prev es para agarrar el estado anterior, osea el estado inicial y cambiarlo con la info del input
  let handleChange= (e)=>{
    setInput((prev)=> ({...prev, [e.target.name]:e.target.value}))
  };

  let handleSubmit=(e)=>{
    e.preventDefault();
  };

    return(
        
            <div className = {style.background}>

    
            <Link to = '/home'>
                <button className={style.button}>HOME</button>
            </Link>
            

            <div className={style.form} >
            <form onSubmit={e =>handleSubmit(e)}>

                <div className={style.text} >
                    <label> Name </label>
                    <input type={'text'} name ={'name'} value= {input.name} onChange={(e) => handleChange(e)}/>
               

                
                    <label> Description </label>
                    <input type={'text'} name ={'description'} value= {input.description} onChange={(e) => handleChange(e)}/>
                

                
                    <label> Released </label>
                    <input type={'text'} name ={'released'} value= {input.released} onChange={(e) => handleChange(e)}/>
                

               
                    <label> Rating</label>
                    <input type={'text'} name ={'rating'} value= {input.rating} onChange={(e) => handleChange(e)}/>
                

                
                    <label> Image </label>
                    <input type={'text'} name ={'background_image'} value= {input.background_image} onChange={(e) => handleChange(e)}/>
                </div>
                </form> 
            </div>

        </div>
        
    )
}