//App.js
import './App.css';
import Header1 from './components/Header1';
import AddStudent from './components/AddStudent';

import Firstbar from './components/Firstbar';
import Middle from './components/Middle';
import Location from './components/location';
import Footer from './components/Footer';

import Jaffna from './components/Jaffna'; // Ensure this is default export
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AddSignup from './components/AddSignup';
import AddLogin from './components/AddLogin';

function Layout() {
  const location = useLocation();

  // Define routes where the main layout components should not appear
  const standaloneRoutes = ["/log", "/si"];

  return (
    <>
      <Header1 />
      {!standaloneRoutes.includes(location.pathname) && (
        <>
          <Firstbar />
          <Middle />
          <Location />
        </>
      )}
      <main>
        <Routes>
          <Route path="/Jaffna" element={<Jaffna />} />
          <Route path="/add" exact element={<AddStudent />} />
          <Route path="/sign" exact element={<AddSignup/>}/>
          <Route path="/log" exact element={<AddLogin/>}/>
          
          
          
        </Routes>
      </main>
      {!standaloneRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
