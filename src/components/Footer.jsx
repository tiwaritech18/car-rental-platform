import { IconMail, IconPhoneCall, IconBrandFacebook, IconBrandPinterest, IconBrandLinkedin, IconBrandTwitter,IconBrandCarbon, IconCopyright } from "@tabler/icons-react";
import "../styles/footer.css"

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:123456789">
                  <IconPhoneCall /> &nbsp; (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <IconMail />
                  &nbsp; carrental@gmail.com
                </a>
              </li>
            </ul>

            <div className="footer__center">
            <h2 className="footer__brand__heading">
                R<span className="alternate__heading__text">E</span>N
                <span className="alternate__heading__text">T</span>
              </h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates illo sed eius, reiciendis nemo cum dolore ad accusant</p>
              <div className="footer__social__icons">
                <IconBrandFacebook className="footer__social__icon"/>
                <IconBrandCarbon className="footer__social__icon"/>
                <IconBrandTwitter className="footer__social__icon"/>
                <IconBrandLinkedin className="footer__social__icon"/>
                <IconBrandPinterest className="footer__social__icon"/>
              </div>
            </div>
            
            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
        <div className="copyright">
          <h5>
            {" "}
            <IconCopyright /> <span>{year} Rohit Tiwari</span> 
          </h5>
        </div>
    </>
  );
}

export default Footer;
