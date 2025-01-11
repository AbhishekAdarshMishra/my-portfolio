import { Button } from "@components/ui/tailwindcss-buttons";
import { CompetitiveCodingProfiles, Educations } from "@shared/model";
import education from "/assets/images/education.svg";

const EducationPage = () => {

    const visitWebsite = (link: string) => {
        window.open(link, "_blank");
    }

  return (
    <div className="md:px-20 xl:px-40 p-5">

        <div className='lg:flex justify-between'>
        <img src={education} className='lg:w-1/2 lg:h-1/2 p-10'/>
        <div className='flex flex-col gap-5 p-10 justify-center'>
          <span className='text-3xl text-accent text-center'>Coding Profiles</span>
           <div className="flex justify-center gap-5">
            {CompetitiveCodingProfiles.map((profile) => (
                <div onClick={()=>visitWebsite(profile.link)} className="cursor-pointer">
                    <img src={profile.logo} className="w-10 h-10 mx-auto mt-5" />
                    <span>{profile.name}</span>
                </div>
            ))}
        </div>
        </div>
      </div>
        
      { Educations.map((edu) => (
        <div className="bg-gray-700 w-fit mt-10 xl:px-28 px-5 py-10 md:px-20 rounded-lg">
            <div className="text-2xl text-center mb-5"> {edu.title} </div>
            <div className="text-lg text-center text-accent"> {edu.institute} </div>
            <div className="text-lg text-center"> {edu.course} </div>
            <div className="text-lg text-center"> {edu.duration} </div>
            <img src={edu.logo} className="w-20 h-20 mx-auto mt-5" />
            <div className="mt-5 text-white/80"> 
                <ul>
                    {edu.description.map((detail) => (
                        <li> 
                            <span className="text-accent">&gt;&gt;&nbsp;&nbsp;</span> 
                            <span>{detail} </span> 
                        </li>
                    ))}
                </ul>
            </div>
                
            <div className="flex justify-center mt-5">    
                <Button onClick={()=>visitWebsite(edu.link)}> Visit Website </Button>
            </div>
            
        </div>
      ))}
    </div>
  )
}

export default EducationPage
