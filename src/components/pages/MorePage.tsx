import { Button } from "@components/ui/tailwindcss-buttons";
import { BlogListLink, LibaryLink, Publications } from "@shared/model";
import Blog from '/assets/images/blog.svg';
import Library from '/assets/images/library.svg';

const MorePage = () => {
  return (
    <div>
        <div>
            <div className="text-3xl text-accent flex justify-center">Publications</div>
            <div className="text-white/80 flex justify-center mt-2 text-center">I have worked on and published a research papers.</div>
            <div className="flex flex-col gap-5 p-10">
                {Publications.map((publication, index) => (
                    <div key={index} className="bg-gray-700 w-full px-5 py-10 rounded-lg mt-5">
                        <div className="text-xl text-center mb-2 text-accent"> {publication.title} </div>
                        <div className=" text-center"> - {publication.date} </div>
                        <div className="mt-5 text-white/80"> 
                            <ul>
                                <div className='mb-10'>
                                    <div className='text-white text-center text-sm'>{publication.description}</div>
                                </div>
                            </ul>
                        </div>
                        <div className="flex justify-center mt-5">
                            <Button onClick={()=> window.open(publication.link, "_blank")}> Reference </Button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
        
        <div className="flex flex-row justify-center gap-5 p-10">
            <div className="py-10 px-5 lg:w-2/3 flex flex-col justify-center">
                <div className="text-3xl text-accent flex justify-center mb-5">Blogs</div>
                <div className="text-white/80 flex justify-center mt-2 text-center">For Technical concepts and Explanation I write some blogs and Article.</div>
                <div className="flex justify-center mt-5">
                    <Button onClick={()=> window.open(BlogListLink, "_blank")}>Visit My Bloglist</Button>
                </div>
            </div>
            <div className="justify-center hidden lg:block">
                <img src={Blog} className="w-3/4 p-10"/>
            </div>
        </div>
            
        <div className="flex flex-row justify-center gap-5 p-10">
            <div className="justify-center hidden lg:block">
                <img src={Library} className="w-3/4 p-10"/>
            </div>
            <div className="py-10 px-5 lg:w-2/3 flex flex-col justify-center">
                <div className="text-3xl text-accent flex justify-center mb-5">Library</div>
                <div className="text-white/80 flex justify-center mt-2">I have developed and published npm libraries to solve specific challenges and improve developer productivity. Explore my contributions to the open-source ecosystem.</div>
                <div className="flex justify-center mt-5">
                    <Button onClick={()=> window.open(LibaryLink, "_blank")}>Visit My Libraries</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MorePage
