import TeamMembers from "../Data";
import CardComponent from "./TeamMemberCard";

const TeamComponent=()=>{
    return (
        <div className="mx-5 space-y-4 my-10 px-5 xs:grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:mx-8">
            {TeamMembers.map((member, index) => (
                <div key={index}  className="border-2 border-black rounded-lg p-3 xs:mt-4 xs:mx-3">
                    <CardComponent {...member} />
                </div>
            ))}
        </div>
    );

}
export default TeamComponent;