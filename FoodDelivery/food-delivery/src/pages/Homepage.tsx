import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import Navbar from "../components/Navbar";

function Homepage() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <InfoCard/>
            <Categories/>
            <Footer/>
        </div>
    );
}

export default Homepage;