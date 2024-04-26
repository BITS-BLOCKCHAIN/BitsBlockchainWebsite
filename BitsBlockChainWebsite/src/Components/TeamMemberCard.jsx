import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
const cardComponent=(props)=>{
    return <>
    <div className="flex flex-col col-span-3">
    <img className="h-5/6 w-5/6  rounded-xl justify-center mt-5 object-cover" src={props.image}></img>
        <div className="flex flex-row justify-left px-10">
               <a href={props.LinkedIn} className="text-4xl mr-4 mt-2"><FaLinkedin/></a>
               <a href={props.Github} className="text-4xl mr-4 mt-2"><FaGithub /></a>
           </div>
    </div>
        <div className="flex flex-col justify-top align-center col-span-2 pt-5 leading-5">
           <h2 className="text-xl font-semibold">{props.name}</h2>
           <h4 className="text-lg font-semibold">{props.position}</h4>
           <h4 className="text-md">{props.description}</h4>
           
        </div>
    </>
}

export default cardComponent;