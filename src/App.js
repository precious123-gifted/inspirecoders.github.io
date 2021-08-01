
import './App.css';
import {Navigation} from  './Home-Page.js'



import {CareerBrief} from  './Home-Page.js'
import {Forum} from  './Home-Page.js'
import {HowItWorksDiv} from  './Home-Page.js'
import {Footer} from  './Home-Page.js'



function App() {
  return (
    <div className="App">
      <Navigation/>
     
    
     
      <CareerBrief/>
      <Forum/>
      <HowItWorksDiv/>
      <Footer/>
    </div>
  );
}

export default App;
