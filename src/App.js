import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Navbar from './component/common/Navbar';
import Home from './pages/Home';
import Navbar from './component/common/Navbar';
import Footer from './component/common/Footer';
import './index.css'

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
       </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
