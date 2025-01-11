import { Skills } from "@shared/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsPage = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Skills.map((skill, index) => (
        <div key={index} className="bg-gray-700 sm:w-fit xl:px-28 py-10 sm:px-20 px-5 w-3/4 rounded-lg mb-10 mx-2">
          <div className="flex items-center">
            <FontAwesomeIcon className="sm:w-8 sm:h-8 mr-5 -mt-5 w-5 h-5" icon={skill.icon} />
            <h1 className="sm:text-3xl text-xl text-center mb-6 text-accent">{skill.title}</h1>
          </div>
          <div>
            {skill.skills.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-accent"> &gt;&gt;&nbsp;&nbsp; </span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {skill.skills.map((s, i) => (
              s?.icon && (
                <div key={i}>
                  <img src={s.icon} className="w-8 h-8" />
                </div>
           ) 
            ))}
          </div>

        </div>
      ))}
    </div>
  )
}

export default SkillsPage
