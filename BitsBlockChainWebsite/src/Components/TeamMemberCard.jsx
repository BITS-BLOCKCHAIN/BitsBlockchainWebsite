import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
const cardComponent=(props)=>{
    return <>
   
    <img className="size-65 xs:size-75 md:size-70 xl:size-60 xs:aspect-square ml-auto mr-auto object-cover rounded-xl" src={props.image}></img>
    <div className="flex flex-col justify-top align-center col-span-2 pt-2 leading-5">
           <h2 className="text-2xl font-semibold self-center">{props.name}</h2>
           <h4 className="text-md self-center">{props.position}</h4>
           {/* <h4 className="text-md">{props.description}</h4> */}
           
    </div>
        <div className=" flex flex-row justify-center align-middle">
               <a href={props.LinkedIn} className="text-4xl mr-4 mt-2 "><FaLinkedin/></a>
               <a href={props.Github} className="text-4xl mr-4 mt-2"><FaGithub /></a>
           </div>
    
    
    </>
}

export default cardComponent;