// import { Header } from './components/Header'
// import { Footer } from './components/Footer'
import { useState } from 'react';
import './App.css'

export default function App() {
 const [tasks, setTasks] = useState([
  {id: 4363, name: "Study", completed: true},
  {id: 4622, name: "Cook", completed: false}, 
  {id: 5632, name: "Code", completed: false}
]);

const [show, setShow] = useState(true);


  function hanldeDelete(id){
    setTasks(tasks.filter(task => id !== task.id))
  }

  return (
    <div className='App'>
      <h1>Task List</h1>
      <ul>
        <button className='trigger' onClick={()=> setShow(!show)}>Toggle</button>
        { show && 
          tasks.map((task)=>(

          <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
            <span>{task.id} - {task.name}</span>
            <button onClick={()=>hanldeDelete(task.id)} className='delete'>Delete</button>
          </li>
        )) 
        }
      </ul>
    </div>
  )
}

