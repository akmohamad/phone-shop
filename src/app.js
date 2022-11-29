import React,{Component} from "react";
import Navbar from "./component/navbar";
import Banner from "./component/Banner";
import Cards from "./component/cards";
import Search from "./component/Search";
import Footer from "./component/footer";
import AboutCards from "./component/About.Cards";
import SeaM from "./component/SeaM";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <AboutCards />
                <Cards />
                <SeaM />
                <Search />
                <Footer />
            </div>
        )
    }
}

export default App ;