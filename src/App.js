import './App.css';
import AlertSuccessful from './components/Alerts/AlertSuccessful.js';
import Content from './components/Content.js';
import TopBar from './components/TopBar.js';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Content />
      <AlertSuccessful />
    </div>
  );
}

export default App;
