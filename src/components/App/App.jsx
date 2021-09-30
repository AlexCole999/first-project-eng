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
      <button onClick={() => {
        console.log(props.store);
        console.log(props.store.getState());
        props.store.dispatch({ type: "ACTION1" })
      }}>123</button>
    </div>
  );
}

export default App;
