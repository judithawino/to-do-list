import React from 'react';

export default function Task(){
    return(
        <div>
            <form>
                <input type="tex" name = "task" label="Task" placeholder='Task'/>
                <input type="checkbox" name ="complete"/>
                <button>Delete</button>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}