import './App.css';
import Schedule from './components/Schedule'; 
import Stats from './components/Stats'; 
import BoxScores from './components/BoxScores'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          StatsEngine
        </p>
      </header>
      <Schedule/>
      {/* <BoxScores/> */}
      <Stats/>
    </div>
  );
}

export default App;
