import Categories from "../components/Categories";
import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import Navbar from "../components/Navbar";

function Homepage() {
    return (
        <div style={{padding:"40px",backgroundColor:"#f0a8a8",paddingLeft:"80px",paddingRight:"80px"}}>
            <Navbar/>
            <Hero/>
            <InfoCard/>
            <Categories/>
        </div>
    );
}

export default Homepage;