import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Oscar" lastName="Gonzalez" age={45} hairColor="Blue"/>
      <PersonCard firstName="Levi" lastName="Gutierrez" age={25} hairColor="Brown"/>
      <PersonCard firstName="Eren" lastName="Garcia" age={18} hairColor="White"/>
      <PersonCard firstName="Mikasa" lastName="Gimenez" age={19} hairColor="Purple"/>
    </div>
  );
}

export default App;
