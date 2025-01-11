import Photo from "@components/Photo"
import Social from "@components/Social"
import { CvButton } from "@ui/tailwindcss-buttons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import home from "/assets/images/homeImg.svg";
import { ResumeLink } from "@shared/model";
const HomePage = () => {
  return (
    <div className="h-full">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-5 pt-5 pb-24 ">
              <div className="text-center xl:text-left order-2 xl:order-none flex flex-col justify-center">
                <div className="mb-10">
                  <Photo/>
                </div>
                <div className="pl-10">
                  <span className="text-2xl xl:text-xl">Software Developer (FullStack)</span>
                  <h1 className="text-3xl xl:text-5xl font-bold my-5">
                    Hello I'm <br/> <span className="text-accent">Abhishek Adarsh Mishra</span>
                  </h1>
                  <p className="max-w-[500px] mb-9 text-white/80">
                    I specialize in <span className="text-green-600">Developing</span>, <span className="text-green-600">Designing</span> architecture, <span className="text-green-600">Optimizing</span> and <span className="text-green-600">Maintaining</span> complex software solutions, with expertise in a diverse range of programming languages and technologies.
                  </p>
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                      <CvButton onClick={()=>window.open(ResumeLink, "_blank")}> 
                        <span className="flex gap-4">
                          <span>Download CV</span>
                          <FontAwesomeIcon className="fa-lg" icon={faDownload}></FontAwesomeIcon>

                        </span>
                      </CvButton>

                      <div>
                        <Social containerStyles='flex justify-center xl:justify-start gap-6' iconStyles="w-9 h-9 pt-1 hover:border-2 hover:border-white hover:bg-white text-white hover:text-black rounded-full flex justify-center item-center text-accent hover:transition-all duration-500"></Social>
                      </div>
                  </div>
                </div>
              </div>
              <div className="hidden xl:block m-auto">
                <img src={home} className="w-96 h-96"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage

