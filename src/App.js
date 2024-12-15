import './App.css';
import CareerOpportunities from './components/career/CareerOpportunities';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CareerOpportunities />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
