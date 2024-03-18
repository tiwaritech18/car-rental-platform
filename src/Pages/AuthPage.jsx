import { Link } from "react-router-dom";
import Brand from "../UI/Brand";
import "../styles/auth.css";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import Form from "../UI/Form";
import { useAuthContext } from "../context/AuthContext";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";


const AuthPage = () => {
  const { isRegister } = useAuthContext();
  return (
    <>
    <div className="login-container">
      <div className="form-container">
        <div className="form-logo">
          <Brand />
        </div>
        <div className="form-heading">
          {isRegister ? (
            <>
              <h4>Register or Login Now</h4>
              <p>Stay updated with new products.</p>
            </>
          ) : (
            <h4>Welcome Back </h4>
            )}
        </div>
        <div className="google-btn">
          Sign in with Google
          <IconBrandGoogleFilled width={20} style={{ color: "#fd0061" }} />
        </div>
        <hr />
        <Form />
        {isRegister ? (<div className="additional-link">
          Already have an account?<Link to="/">Login Here</Link>
        </div>) : <div className="download-btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
        }
      </div>
      <div className="img-container"></div>
    </div>
    <Banner/>
    <Footer/>
            </>
  );
};

export default AuthPage;
