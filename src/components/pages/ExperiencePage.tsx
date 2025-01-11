import { Button } from '@components/ui/tailwindcss-buttons';
import work from '/assets/images/work.svg';
import { Achievements, Experience } from '@shared/model';

const ExperiencePage = () => {

  const visitWebsite = (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <div>
      <div className='lg:flex justify-between'>
        <img src={work} className='lg:w-1/2 lg:h-1/2 p-10'/>
        <div className='flex flex-col gap-5 p-10'>
          <span className='text-3xl text-accent text-center'>Achievements</span>
          {Achievements.map((achievement, index) => (
            <>
              <div className='flex gap-2' key={index}>
                <span className="text-accent">&gt;&gt;&nbsp;&nbsp;</span> 
                <span>{achievement.info}</span>
              </div>
              <div className='ml-10'>
                <Button onClick={()=> visitWebsite(achievement.link)}> Reference Link </Button>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className='py-10'>
        <span className='flex justify-center items-center text-3xl text-accent'>Experience</span>

        <div className='flex flex-col justify-center gap-5 p-10'>
          {Experience.map((exp, index) => (
            <div key={index} className="bg-gray-700 w-full px-5 py-10 rounded-lg">
              <div className="text-2xl text-center mb-2"> {exp.company} </div>
              <div className="text-lg text-center"> {exp.location} </div>
              <img src={exp.logo} className="w-40 h-15 mx-auto mt-5" />
              <div className="mt-5 text-white/80"> 
                <ul>
                  {exp.roles.map((detail) => (
                    <div className='mb-10'>
                      <div className='text-accent'>{detail.title}</div>
                      <u><div className='mb-5'>{detail.duration}</div></u>

                      {detail.details.map((detail, i) => (
                        <li key={i} className='flex gap-2'> 
                          <span className="text-accent">&gt;&gt;&nbsp;&nbsp;</span> 
                          <span>{detail} </span> 
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ExperiencePage
