import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CounterApp from './pages/CounterApp';
import TodoApp from './pages/TodoApp';
import Completed from './pages/Completed';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<CounterApp/>}/>
            <Route path="/todoapp" element={<TodoApp/>}/>
            <Route path='/complete' element={<Completed/>}/>
        </Routes>
    </div>
  );
}

export default App;
