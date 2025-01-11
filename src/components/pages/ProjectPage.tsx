import { Projects } from '@shared/model';
import Programmer from '/assets/images/programmer.svg';
import { Button } from '@components/ui/tailwindcss-buttons';
const ProjectPage = () => {
  return (
    <div>
      <div className='lg:flex justify-evenly'>
        <img src={Programmer} className='lg:w-1/2 lg:h-1/2 p-10'/>
        <div className='flex flex-col gap-5 p-10 justify-center'>
          <span className='text-3xl text-accent text-center'>Projects</span>
          <span className='text-gray-200 text-center' >My projects makes use of vast variety of latest technology tools.</span>
        </div>
      </div>

      <div className='flex flex-col gap-5 p-10'>
        {Projects.map((project) => (  
          <div className="bg-gray-700 w-full px-5 py-10 rounded-lg">
            <div>
              <div className="text-2xl text-center text-accent mb-2"> {project.title} </div>
              <div className='flex justify-center flex-wrap gap-5'>
                {project.tech.map((tech) => (
                  <div className="text-white text-sm text-center bg-gray-500 px-2 py-1 rounded-xl">{tech}</div>
                ))}
              </div>
              <div className="my-10 text-white/80"> 
                <ul>
                  {project.details.map((detail) => (
                    <li className='flex gap-2'> 
                      <span className="text-accent">&gt;&gt;&nbsp;&nbsp;</span> 
                      <span>{detail} </span> 
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-5 flex justify-center gap-5'>
                <div>
                  {project.demo && (
                    <Button onClick={()=> window.open(project.demo, "_blank")}>Demo</Button>
                  )}
                </div>
                <div>
                  {project.code && (
                    <Button onClick={()=> window.open(project.code, "_blank")}>Code</Button>
                  )}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ProjectPage
