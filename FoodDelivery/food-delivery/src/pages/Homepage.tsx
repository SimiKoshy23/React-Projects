import Categories from "../components/Categories";
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
        </div>
    );
}

export default Homepage;