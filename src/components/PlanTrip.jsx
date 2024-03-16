import Plan from "../UI/Plan";
import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy car rental</h2>
            </div>

            <div className="plan-container__boxes">
              <Plan
                imgSrc={SelectCar}
                text=" We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs"
                headingText="Select Car"

              />
              <Plan
                imgSrc={Contact}
                text=" Whether you're hitting the open road, we've got you covered
                with our wide range of cars"
                headingText="Let's Drive"
             
              />
              <Plan
                imgSrc={Drive}
                text=" Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns"
                headingText="Contact Operator"
          
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
