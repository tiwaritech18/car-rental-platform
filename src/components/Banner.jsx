import gsap from "gsap";
import "../styles/banner.css"
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const banner = useRef();
  useGSAP(() => {
  const bannerContent = gsap.utils.toArray(banner.current.children);
  console.log(bannerContent);


    gsap.fromTo( bannerContent,{ x: -1000,
    }, { x: 0,scrollTrigger:{
        trigger:bannerContent,
        start: "bottom 100%",
        toggleActions: "play none none reset"
      }, });

  },[])

  return (
    <>
      <section className="banner-section" ref={banner}>
        <div className="container">
          <div className="banner-content">
            <div className="banner-content__text">
              <h2>Save big with our cheap car rental!</h2>
              <p>
                Top Airports. Local Suppliers. <span>24/7</span> Support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
