// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// // state have some specilities  & chnageable  things / updated values is called state
// // State  variable  ko    manage karne  k ley hame usestate ka  karty hn 
// // React ma state value hoti ha change ho sakti ha  or jab state change hoti ha  tou components render hota ha  

// // function App() {
// //   let a = 0
// //   const[Num,setNum] = useState(0)

// //   return (
// //     <>
// //       <button onClick={() =>{setNum (Num + 1)}} >
// //      Count: {Num}
// //      </button>
// //     </>
// //   )
// // }

// // Todo Application 
// // craete one function 
// //  
// function App(){
//   // useState  take two  things one is  value other is functionValue

//   const [value,setValue] = useState('')  //usestate for  input feild
//     const [todos,setTodos] = useState([])  //useState for todos
//     const[edit,setEdit] = useState(null) // useStae for edittodo

//     // delete function
// const deletTodo=(index) =>{
//  const setupdatd = todos.filter((__, i) => i !== index);
//   setTodos(setupdatd)
// }



//     const add =()=>{
//       // edit todo process
//       if(value.trim() === "" ) return  // empty prevent
//       if(edit !== null){
//         const newtodo = [...todos];
//         newtodo[edit] = value
//         setTodos(newtodo)
//       setEdit(null)
//       }
//       else{
//         // Use ... spreadOperater pehly wala b haye jo linkhn gay wo haye 

//         setTodos([...todos,value])
//       }
//       setValue('')


//     };

//     const changeval = (e)=>{
//       // console.log(e.target.value)
//       setValue(e.target.value)
//     }

//   return(
//     <>
//     {/* take one input feild for  input  */}
//     {/* onchange is event handler  */}
//     <input type='text' value={value} onChange={(e)=>changeval(e)}></input>   

//     {/* add button for add todo */}
//     <button onClick={add}>Add ToDo</button>
//     <ul>

//       {/* map take do parameter one is index and other is element */}
// {/*// key use as a props  and props also attributes  */}
//       {todos.map((el,i)=>(
//         <li key={i}>{el} 
//         <button onClick={() => deletTodo(i)}>Delete</button>
//        </li>    
//       ))}
//     </ul>
//     </>


//   )
// }



// export default App
import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  const deletTodo = (index) => {
    const setupdatd = todos.filter((__, i) => i !== index);
    setTodos(setupdatd);
  };

  const add = () => {
    if (value.trim() === "") return;
    if (edit !== null) {
      const newtodo = [...todos];
      newtodo[edit] = value;
      setTodos(newtodo);
      setEdit(null);
    } else {
      setTodos([...todos, value]);
    }
    setValue('');
  };

  return (
    <div className="app-wrapper">
      <div className="main-card">
        <h2 className="title">My Todo </h2>
        
        {/* Input Area */}
        <div className="input-container">
          <input 
            type='text' 
            placeholder="Add a new task..."
            value={value} 
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="add-btn" onClick={add}>
            {edit !== null ? 'Save' : '+'}
          </button>
        </div>

        {/* Card Grid */}
        <div className="todo-grid">
          {todos.map((el, i) => (
            <div key={i} className="task-card">
              <div className="task-info">
                <span className="task-id">Task #{i + 1}</span>
                <p className="task-text">{el}</p>
              </div>
              
              <div className="task-footer">
                <button className="btn-edit" onClick={() => { setEdit(i); setValue(el); }}>
                  Edit
                </button>
                <button className="btn-delete" onClick={() => deletTodo(i)}>
                  Done
                </button>
              </div>
            </div>
          ))}
        </div>

        {todos.length === 0 && <p className="empty-msg">No tasks yet. Start being productive!</p>}
      </div>
    </div>
  );
}

export default App;