import './App.css';
import Schedule from './components/Schedule'; 
import Stats from './components/Stats'; 
import PrimarySearchAppBar from './components/PrimarySearchAppBar'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          StatsEngine
        </p>
      </header>
      <PrimarySearchAppBar/>
      <Schedule/>
      {/* <BoxScores/> */}
      <Stats/>
    </div>
  );
}

export default App;
