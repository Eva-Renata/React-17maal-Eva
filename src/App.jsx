import './App.scss';    //importing the general styles that are used through the whole page
import {Header} from './components/partials/Header/Header'  //importing the component
import {Main} from './components/partials/Main/Main'
import {Footer} from './components/partials/Footer/Footer'



//calling, displaying actually the components
function App() {
  const navlinks = ['VERDENSMÅLENE','DELMÅLENE','UDFORDRINGER','KONTAKT']
 
  return (
    <div className="pagewrapper">
  
      <Header data={navlinks}/>
      <Main>
      </Main>
      <Footer />
      
    </div>
  );
}

export default App;
