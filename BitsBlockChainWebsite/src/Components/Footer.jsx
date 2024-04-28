import { Link } from "react-router-dom";



const footer=()=>{
  const smoothScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
const smoothScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
};
   return <>
   <div className="grid grid-cols-5  align-center pt-10 border-2 px-20 h-80 leading-8 pb-7">
        <div className="flex flex-col">
            <h2 className="text-3xl">Bits Blockchain</h2>
            
        </div>
      <div className="flex flex-col ">
       <h2 className="text-xl font-semibold">Quick Nav</h2>
       <ul>
       <li><a href="#home" onClick={(e)=>smoothScrollToTop(e)}>Home</a></li>
                        <li><a href="#about-us" onClick={(e) => smoothScrollToSection(e, 'about-us')}>About Us</a></li>
                        <li><a href="#info"  onClick={(e) => smoothScrollToSection(e, 'info')}>Info</a></li>
                        <li><a href="#our-team" onClick={(e) => smoothScrollToSection(e, 'our-team')}>Our Team</a></li>
                        <li><a href="#contact-us"  onClick={(e) => smoothScrollToSection(e, 'contact-us')}>Contact Us</a></li>
                        </ul>
      </div>
      <div className="flex flex-col ">
       <h2 className="text-xl font-semibold">Resources</h2>
       <ul>
        <li><a href="https://bitsblockchain.notion.site/Resources-for-blockchain-enthusiasts-d69a20cf5402406cb709dfabe4150c87" target="_blank">Learning Resources</a></li>
        <li><a href="https://chat.whatsapp.com/EjGBBpK0cAhBrI7jvPTxWh" target="_blank">Discord Link</a></li>
        <li><a href="https://discord.gg/AXscq35N" target="_blank">Unidao Discord</a></li>
        <li><a href="https://ethglobal.com/" target="_blank">Hackathons</a></li>
        <li><a href="https://immunefi.com/boost/" target="_blank">Bug Bounties</a></li>
        <li><a href="https://web3.career/" target="_blank">Web3 Careers</a></li>
       </ul>
      </div>
      <div className="flex flex-col justify-start col-span-2">
        <h2 className="text-xl font-semibold">Feedback</h2>
        <h4>Your valuable suggestions are highly appreciated</h4>
        <label>Message</label>
        <input type="text" className="h-5/6 p-3 rounded-lg border-2 border-black text-sm" placeholder="Enter your msg..."></input>
        <button type="submit" className="bg-white mt-2 w-2/5 border-2 border-black rounded-lg self0-center">SUBMIT</button>
      </div>
   </div>
   </>
}

export default footer;
