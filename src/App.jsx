import Navbar from "./components/Navbar";
import SeccondaryMenu from "./components/SeccondaryMenu";
import FilterBar from "./components/FilterBar";
import FirstContainer from "./components/FirstContainer.jsx";
import CreativeCloud from "./components/CreativeCloud.jsx";
import SecondContainer from "./components/SecondContainer.jsx";
import ThirdContainer from "./components/ThirdContainer.jsx";
import ForthContainer from "./components/ForthContainer.jsx";
import FifthContainer from "./components/FifthContainer.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
  return (
   <main>
    <Navbar />
    <SeccondaryMenu />
    <FilterBar />
    <FirstContainer />
    <CreativeCloud />
    <SecondContainer />
    <ThirdContainer />
    <ForthContainer />  
    <FifthContainer />
    <Footer />


   </main>

      
    
  );
};

export default App;