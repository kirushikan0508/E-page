import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Signup from './Page/Signup';
import Login from './Page/login';
import About from './Page/About'
import NotFound from './Component/NotFound/NotFound';


function App() {

  return (
    <>
 
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
