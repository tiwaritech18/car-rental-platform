import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Testimonials/>
      <Banner />
      <ChooseUs />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
