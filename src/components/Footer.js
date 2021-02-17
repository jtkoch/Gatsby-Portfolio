import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
      <div className="footer-container mt-5">
            <div className="website">
              This website was designed and developed by Jensen Koch.
            </div>
            <div>
              <a className="footer-link" href="https://www.instagram.com/djentsen/" target=" _blank" rel="noopener noreferrer" aria-label="button" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
              <a className="footer-link" href="https://www.linkedin.com/in/jensen-koch-a85956196/" target=" _blank" rel="noopener noreferrer" aria-label="button"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
              <a className="footer-link" href="https://github.com/jtkoch" target=" _blank" rel="noopener noreferrer" aria-label="button"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            </div>
      </div>
    )
  }
   
  export default Footer