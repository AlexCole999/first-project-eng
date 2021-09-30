import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
