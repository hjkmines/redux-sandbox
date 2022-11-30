import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice/counterSlice'

function App() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div >
      <header className="App-header">
      <button
          onClick={() => dispatch(increment())}
        >
        Increment
       </button>
       <h2>{counter}</h2>
      </header>
    </div>
  );
}

export default App;
