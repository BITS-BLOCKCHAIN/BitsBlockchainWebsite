import TeamMembers from "../Data";
import CardComponent from "./TeamMemberCard";

const TeamComponent=()=>{
    return (
        <div className="grid md:grid-cols-3 align-center sm:px-20 mt-20 gap-8 mb-10 ">
            {TeamMembers.map((member, index) => (
                <div key={index}  className="rounded-xl grid grid-cols-5 border-black border-2 px-5 py-5 h-6/6">
                    <CardComponent {...member} />
                </div>
            ))}
        </div>
    );

}
export default TeamComponent;