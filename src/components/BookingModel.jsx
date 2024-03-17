import { useState } from "react";
import {
  IconInfoCircleFilled,
  IconX,
} from "@tabler/icons-react";
import CarInfo from "./CarInfo";
import PersonalInfo from "./PersonalInfo";

const BookingModel = ({ bookingData, carImages, modal, setModal}) => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    phone: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  });

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const confirmBooking = (e) => {
    e.preventDefault();
    const { name, lastName, phone, age, email, address, city, zipcode } =
      userData;
    if (
      !name ||
      !lastName ||
      !phone ||
      !age ||
      !email ||
      !address ||
      !city ||
      !zipcode
    ) {
      console.log("error");
    } else {
      const doneMsg = document.querySelector(".booking-done");
      doneMsg.style.display = "flex";
    }
  };

  return (
    <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
      {/* title */}
      <div className="booking-modal__title">
        <h2>Complete Reservation</h2>
        <IconX onClick={() => setModal(false)} />
      </div> 
      {/* message */}
      <div className="booking-modal__message">
        <h4>
          <IconInfoCircleFilled /> Upon completing this reservation enquiry, you
          will receive:
        </h4>
        <p>
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>
      {/* car info */}
      <CarInfo bookingData={bookingData} carImages={carImages} />
      {/* personal info */}
      <PersonalInfo
        confirmBooking={confirmBooking}
        userData={userData}
        handleUserData={handleUserData}
      />
    </div>
  );
};

export default BookingModel;
