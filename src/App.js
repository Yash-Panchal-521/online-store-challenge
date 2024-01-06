import './App.css';
import Taskbar from './components/Taskbar';
import Items from './components/Items';

function App() {
  return (
    <div className='p-0 m-0 bg-gray-700 min-h-screen text-white'>
        <Taskbar />
        <Items />
    </div>
  );
}

export default App;
