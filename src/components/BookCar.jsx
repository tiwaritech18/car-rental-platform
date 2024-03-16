
import { useEffect, useState } from "react";

import { IconCar, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import BookingModel from "./BookingModel";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal
  // booking car
  const [bookingSelection, setBookingSelection] = useState({
    carType:'',
    pickUp:'',
    dropOff:'',
    pickTime:'',
    dropTime:''
  })

  const handleBooking = (e) => {
    const {name, value} = e.target;
      setBookingSelection((prevState) => {
        return (
          {...prevState, [name]:value}
        )
      })
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
      console.log('model opened');
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

  // confirm modal booking
 

  // taking value of booking inputs
 

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

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
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select name="carType" value={bookingSelection.carType} onChange={handleBooking}>
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select name="pickUp" value={bookingSelection.pickUp} onChange={handleBooking}>
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <select name="dropOff" value={bookingSelection.dropOff} onChange={handleBooking}>
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div  className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <input
                  name="pickTime"
                    id="picktime"
                    value={bookingSelection.pickTime}
                    onChange={handleBooking}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
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
      {modal && <BookingModel bookingData={bookingSelection} />}
    </>
  );
}

export default BookCar;