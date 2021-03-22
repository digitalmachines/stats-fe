import React from 'react'; 
import './components.css'; 

export default function Over(){
    return(
        <div className='Over'>
            <h1>Over</h1>
            <h2>Selectors:</h2>
                <h3>
                <p>Team name selector dropdown</p>
                <p>date range selector</p>
            </h3>
            <p>line chart showing game totals over time</p>
            <p>slicer to change from game total to team total</p>
        </div>
    )
}