import { useEffect, useState } from "react";
import { IconCar, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import BookingModel from "./BookingModel";
import { OptionsData } from "./OptionsData";
import Label from "../UI/Label";
import Golf6 from "../images/cars-big/golf6.jpg";
import AudiA1 from "../images/cars-big/audia1.jpg";
import Toyota from "../images/cars-big/toyotacamry.jpg";
import Bmw320 from "../images/cars-big/bmw320.jpg";
import Benz from "../images/cars-big/benz.jpg";
import Passat from "../images/cars-big/passatcc.jpg";

function BookCar() {
  const [modal, setModal] = useState(false);
  const [bookingSelection, setBookingSelection] = useState({
    carType: "",
    pickUp: "",
    dropOff: "",
    pickTime: "",
    dropTime: "",
  });

  const handleBooking = (e) => {
    const { name, value } = e.target;
    setBookingSelection((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const carImages = {
    "VW Passat CC": Passat,
    "Mercedes-Benz GLK": Benz,
    "VW Golf 6": Golf6,
    "Audi A1 S-Line": AudiA1,
    "Toyota Camry": Toyota,
    "BMW 320 ModernLine": Bmw320,
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const { carType, pickUp, dropOff, pickTime, dropTime } = bookingSelection;
    if (!carType || !pickUp || !dropOff || !pickTime || !dropTime) {
      // Show error message if any field is empty
      const errorMsg = document.querySelector(".error-message");
      errorMsg.style.display = "flex";
    } else {
      setModal(true);
      const errorMsg = document.querySelector(".error-message");
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div className={`modal-overlay ${modal ? "active-modal" : ""}`}></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>
              <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>
              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>
              <form className="box-form">
                <div className="box-form__car-type">
                  <Label icon={<IconCar />} text="Select Your Car" />
                  <select
                    name="carType"
                    value={bookingSelection.carType}
                    onChange={handleBooking}
                  >
                    <option>Select your car type</option>
                    {OptionsData.map((option) => (
                      <option key={option.id} value={option.carType}>
                        {option.carType}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="box-form__car-type">
                  <Label icon={<IconMapPinFilled />} text="Pick-up" />
                  <select
                    name="pickUp"
                    value={bookingSelection.pickUp}
                    onChange={handleBooking}
                  >
                    <option>Select pick up location</option>
                    {OptionsData.map((option) => (
                      <option key={option.id} value={option.pickUp}>
                        {option.pickUp}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="box-form__car-type">
                  <Label icon={<IconMapPinFilled />} text="Drop-off" />
                  <select
                    name="dropOff"
                    value={bookingSelection.dropOff}
                    onChange={handleBooking}
                  >
                    <option>Select drop off location</option>
                    {OptionsData.map((option) => (
                      <option key={option.id} value={option.dropOff}>
                        {option.dropOff}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="box-form__car-time">
                  <Label icon={<IconCalendarEvent />} text="Pick-Time" />
                  <input
                    name="pickTime"
                    id="picktime"
                    value={bookingSelection.pickTime}
                    onChange={handleBooking}
                    type="date"
                  ></input>
                </div>
                <div className="box-form__car-time">
                  <Label icon={<IconCalendarEvent />} text="Drop-Time" />
                  <input
                    name="dropTime"
                    id="droptime"
                    value={bookingSelection.dropTime}
                    onChange={handleBooking}
                    type="date"
                  ></input>
                </div>
                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* modal ------------------------------------ */}
      {modal && (
        <BookingModel
          bookingData={bookingSelection}
          carImages={carImages}
          modal={modal}
          setModal={setModal}
        />
      )}
    </>
  );
}

export default BookCar;
