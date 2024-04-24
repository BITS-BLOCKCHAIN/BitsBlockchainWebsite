import { Link } from "react-router-dom";



const footer=()=>{
   return <>
   <div className="grid grid-cols-5  align-center pt-10 border-2 px-20 h-80 leading-8 pb-7">
        <div className="flex flex-col">
            <h2 className="text-3xl">Bits Blockchain</h2>
            
        </div>
      <div className="flex flex-col ">
       <h2 className="text-xl font-semibold">Quick Nav</h2>
       <ul>
        <li>About Us</li>
        <li>Projects</li>
        <li>Our Team</li>
        <li>Upcoming Events</li>
        <li>Contact us</li>
       </ul>
      </div>
      <div className="flex flex-col ">
       <h2 className="text-xl font-semibold">Resources</h2>
       <ul>
        <li>Learning Resources</li>
        <li>Discord Link</li>
        <li>Hackathons</li>
        <li>Web3 Careers</li>
       </ul>
      </div>
      <div className="flex flex-col justify-start col-span-2">
        <h2 className="text-xl font-semibold">Feedback</h2>
        <h4>Post-ironic portland shabby chic</h4>
        <label>Message</label>
        <input type="text" className="h-5/6 p-3 rounded-lg border-2 border-black text-sm" placeholder="Enter your msg..."></input>
        <button type="submit" className="bg-white mt-2 w-2/5 border-2 border-black rounded-lg self0-center">SUBMIT</button>
      </div>
   </div>
   </>
}

export default footer;