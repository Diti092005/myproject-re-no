import logo from './logo.svg';
import './App.css';
import { startTransition } from 'react';
import CmpAllToDos from './Components/hw4/CmpAllToDos';
import CmpSchool from './Components/hw3/CmpSchool';



function App() {
  return (
    <div className="App">
     {/* <CmpAllToDos></CmpAllToDos> */}
     <CmpSchool/>
    </div>
  );
}

export default App;
