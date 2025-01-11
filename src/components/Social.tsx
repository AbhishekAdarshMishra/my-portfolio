import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Socials } from '@shared/model';

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social = ({containerStyles, iconStyles}: SocialProps) => {
  return (
    <div className={containerStyles}>
        {Socials.map((social, index) => (
            <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={iconStyles}
            >
                <FontAwesomeIcon className='fa-xl' icon={social.icon}></FontAwesomeIcon>
            </a>
        ))}
      
    </div>
  )
}

export default Social
