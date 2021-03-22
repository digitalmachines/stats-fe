import './App.css';
import Schedule from './components/Schedule'; 
import Stats from './components/Stats'; 
import PrimarySearchAppBar from './components/PrimarySearchAppBar'; 
import Over from './components/Over'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          StatsEngine
        </p>
      </header>
      <PrimarySearchAppBar/>
      <Over/>
      <Schedule/>
      {/* <BoxScores/> */}
      <Stats/>
    </div>
  );
}

export default App;
