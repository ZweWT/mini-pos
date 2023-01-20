import './App.css';
import Bio from './components/Bio';
import Login from './components/Login'

const App = () => {
  return (
    <div className="h-screen md:flex">
      <Bio />
      <Login />
    </div>
  );
}

export default App;
