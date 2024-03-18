import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";
import { IconCar, IconPhone, IconStar } from "@tabler/icons-react";
import Banner from "../components/Banner";
import { CAR_DATA } from "../components/CarData";
import SingleCarModel from "../components/SingleCarModel";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            {CAR_DATA.map((car) => {
              console.log(car);
              return (
                <SingleCarModel
                  key={car.name}
                  image={car.img}
                  price={car.price}
                  model={car.model}
                  transmission={car.transmission}
                  fuel={car.fuel}

                />
              );
            })}
          </div>
        </div>
        <Banner />
        <Footer />
      </section>
    </>
  );
}

export default Models;
