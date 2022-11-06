//import React, { useState } from "react";
import style from "./Pagination.module.css";

const Pagination = ({page, setPage}) => {

const handlerNext = () =>{
    setPage(page + 1)
}

const handlerPreview = () =>{
    if(page > 1) setPage(page - 1)
}

  return (

    <div className={style.pagination}>

      <button onClick={()=>{handlerPreview()}} className={style.pageButton}>Preview </button>

      <button onClick={()=>{handlerNext()}} className={style.pageButton}>Next</button>

      <h1 className={style.pageNumber}>{page}</h1>

    </div>
  );
};

export default Pagination;