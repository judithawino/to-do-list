import React, {useState}  from 'react';

export default function Task(){
    const [task, setTask]= useState(" ")
    const [addedTask, setAddedTask]= useState([])
    const [status, setStatus]= useState(false)

    function handleTaskInput(e){
        setTask(e.target.value)
    }

    function handleTaskCompletion(e){
        setStatus(e.target.checked)
    }

    function handleSubmitTask(e){
        e.preventDefault();
        const formData = {task:task, status:status};
        const dataArray = [...addedTask, formData];
        setAddedTask(dataArray);
        setTask(" ")
        setStatus();
    }
       const submittedTasks = addedTask.map((data, index) => {
        return (
          <div key={index}>
            <li> {data.task}
            <input  type ="checkbox"
                        onChange = {handleTaskCompletion}
                        checked = {data.status}
                        
                />  
            </li>
          </div>
        );
      });
    return(
        <div>
           <form onSubmit={handleSubmitTask}>
            
                <input  type = 'text'
                        required = {true}
                        onChange={handleTaskInput}
                        value = {task}
                />                
                <button type='submit'>Add</button>
                               
            </form>
            <h1>Task List</h1>
            <div>{submittedTasks}</div>
        </div>
    )
}