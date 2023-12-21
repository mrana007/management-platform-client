import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav>
    <div className="grid grid-flow-col gap-4">
    <Link
              to="https://github.com/mrana007"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="text-black text-2xl"></FaGithub>
            </Link>
            <Link
              to="https://web.facebook.com/rana.iubat"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebookF className="text-blue-500 text-2xl"></FaFacebookF>
            </Link>
            <Link
              to="https://www.instagram.com/sm_rana007"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-red-500 text-2xl"></FaInstagram>
            </Link>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by SCC Technovision Inc.</p>
  </aside>
</footer>
    );
};

export default Footer;