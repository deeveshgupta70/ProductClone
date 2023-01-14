import './App.css';
import Customer from './components/Customer';
import Header from './components/Header';
import Item from './components/Item';
import Manufacture from './components/Manufactur';
import Offer from './components/Offer';
import Query from './components/Query';

function App() {
  return (
    <>
    <Header/>
    <Item/>
    <Offer/>
    <Manufacture/>
    <hr style = {{width:"95vw" , marginLeft : "10px"}}></hr>
    <Query/>
    <Customer/>
    </>
  );
}

export default App;
