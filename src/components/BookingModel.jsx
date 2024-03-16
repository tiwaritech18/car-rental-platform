import { useState } from "react";
// import CarAudi from "../images/cars-big/audia1.jpg";
// import CarGolf from "../images/cars-big/golf6.jpg";
// import CarToyota from "../images/cars-big/toyotacamry.jpg";
// import CarBmw from "../images/cars-big/bmw320.jpg";
// import CarMercedes from "../images/cars-big/benz.jpg";
// import CarPassat from "../images/cars-big/passatcc.jpg";
import {IconInfoCircleFilled, IconMapPinFilled, IconX} from "@tabler/icons-react";

  
const BookingModel = ({ bookingData}) => {
  const [modal, setModal] = useState(false); //  class - active-modal
  // booking car
    const [userData, setUserData] = useState({
      name:'',
      lastName:'',
      phone:'',
      age:'',
      email:'',
      address:'',
      city:'',
      zipcode:'',
    })

    const handleUserData = (e) => {
      const {name, value} = e.target;
      setUserData(prevState => (
        {
          ...prevState,
          [name]:value
        }
      ))
    }

  const confirmBooking = (e) => {
    console.log(bookingData);
   e.preventDefault();
   setModal(true);
   const doneMsg = document.querySelector(".booking-done");
   doneMsg.style.display = "flex";
 };
 

  return (
    <div className='booking-modal '>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <IconX onClick={() => setModal(false)} />
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <IconInfoCircleFilled /> Upon completing this reservation enquiry,
            you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {bookingData.pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {bookingData.dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{bookingData.pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{bookingData.dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            {/* <h5>
              <span>Car -</span> {bookingData.carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />} */}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={userData.name}
                  onChange={handleUserData}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={userData.lastName}
                  onChange={handleUserData}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={userData.phone}
                  onChange={handleUserData}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={userData.age}
                  onChange={handleUserData}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={userData.email}
                  onChange={handleUserData}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={userData.address}
                  onChange={handleUserData}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={userData.city}
                  onChange={handleUserData}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={userData.zipcode}
                  onChange={handleUserData}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
        </div>
  )
}

export default BookingModel
