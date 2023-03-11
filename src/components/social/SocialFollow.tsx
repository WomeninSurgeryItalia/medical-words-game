
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export const SocialFollow = () => {

    return (
      <div className="social-container text-blue">
        <a href={process.env.REACT_APP_SOCIAL_FACEBOOK}
          className="inline cursor-pointer facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="h-6 w-6 mr-3 dark:text-white" />
        </a>
        <a href={process.env.REACT_APP_SOCIAL_LINKEDIN}
          className="inline cursor-pointer linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="h-6 w-6 mr-3 dark:text-white" />
        </a>
        <a href={process.env.REACT_APP_SOCIAL_TWITTER}
          className="inline cursor-pointer twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="h-6 w-6 mr-3 dark:text-white" />
        </a>
        <a href={process.env.REACT_APP_SOCIAL_INSTAGRAM}
          className="inline cursor-pointer instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="h-6 w-6 mr-2 dark:text-white" />
        </a>
      </div>
    )
}
