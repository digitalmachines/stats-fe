import './App.css';
import TeamPage from './components/TeamPage'; 
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
      <TeamPage/>
      <Schedule/>
      {/* <BoxScores/> */}
      <Stats/>
    </div>
  );
}

export default App;
