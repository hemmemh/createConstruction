import Construction from "./components/Construction";
import Core from "./components/Core";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Know from "./components/Know";
import Main from "./components/Main";
import News from "./components/News";
import Services from "./components/Services";

import './styles/style.scss';

function App() {
  
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Construction/>
        <Core/>
        <Know/>
        <Services/>
        <News/>
        <Details/>
        <Footer/>
    </div>
  );
}

export default App;
