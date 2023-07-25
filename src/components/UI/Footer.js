import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a className="footer_icon" href="https://www.linkedin.com/in/jamilletni/" target="_blank" rel="noreferrer">
        <FaLinkedin size={36} />
      </a>
      <a className="footer_icon" href="https://github.com/JamilleN" target="_blank" rel="noreferrer">
        <FaGithub size={36} />
      </a>
      <p className="footer_text">
        © 2023 built by Jamille Ni. All rights reserved
      </p>

    </div>
  );
}
