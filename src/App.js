
// import './App.css';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Book from './Components/Book';
import Doctor from './Components/Doctor';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Icon from './Components/Icon';
import Navbar from './Components/Navbar';
import Review from './Components/Review';
import Service from './Components/Service';
// import Login from './Components/Login';

function App() {
  return (
   <div>
   {/* <Login/> */}
   <Navbar/>
   <Home/>
   <Icon/>
   <Service/>
   <About/>
   <Doctor/>
   <Book/>
   <Review/>
   <Blogs/>
   <Footer/>
   </div>
  );
}

export default App;
