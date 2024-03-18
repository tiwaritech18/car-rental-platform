import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
 
  const [activeCar, setActiveCar] = useState(CAR_DATA[0]);
  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">

                {CAR_DATA.map((car) => {
                  return (
                    <button key={car.model} onClick={() => setActiveCar(car)}>{car.name}</button>
                  )
                })}
              </div>

             <CarBox activeCar={activeCar}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
