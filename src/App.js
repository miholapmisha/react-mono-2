import './App.css';
import MainContainer from './card/MainContainer';

function App() {
  
  let storedValue = localStorage.getItem("storedMoney");
  if (storedValue == null) {
    localStorage.setItem("storedMoney", 0);
  }

  return (
    <div style={{
      fontFamily: "'Inter', 'LatoWeb', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(136.56deg, #8a53b6 0%, #cea2d0 97.42%) no-repeat',
      height: '100vh',
      width: '100vw',
    }}>
      <MainContainer />
    </div>
  );
}

export default App;