
function CarBox({activeCar}) {

  return (
    <>

        <div className="box-cars">
          {/* car */}
          <div className="pick-car">
            <img
              src={activeCar.img}
              alt="car_img"

            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${activeCar.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{activeCar.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Mark</span>
                <span>{activeCar.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Year</span>
                <span>{activeCar.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Doors</span>
                <span>{activeCar.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>AC</span>
                <span>{activeCar.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Transmission</span>
                <span>{activeCar.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Fuel</span>
                <span>{activeCar.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>

    </>
  );
}

export default CarBox;
