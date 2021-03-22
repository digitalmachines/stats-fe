import React, { useState, useEffect } from 'react'; 
import { nanoid } from 'nanoid'; 
import axios from 'axios'; 
import NHLGame from './NHLGame'; 
import './components.css';

export default function BoxScores(){

    const [schedule, setSchedule] = useState({
        date: '2021-03-18',
        totalEvents: '', 
        totalGames: '', 
        totalMatches: '', 
        totalItems: '',
        games: []
    }); 
    const [check, setCheck] = useState(false); 

    useEffect(()=>{
          axios.get(`https://statsapi.web.nhl.com/api/v1/schedule?date=${schedule.date}`)
            .then(function (response) {
                console.log('Got New Schedule!: ', response.data); 
                setSchedule(response.data.dates[0]); 
            })
            .catch(function (error) {
                console.error(error);
            });

            console.log('New Schedule!: ', schedule);

    }, [check])

    function changeDate(e){
        setSchedule({ ...schedule, date: e.target.value })
        // setDate({[e.target.name]: e.target.value}); 
        console.log(e.target.value); 
        console.log(schedule.date); 
    }
    
    function getSchedule(){
        console.log('Getting new schedule...')
        setCheck(!check); 
    }
    
    return(
        <div className='Schedule'>
            <h1>
                Schedule
            </h1>
            <input type='date' name='date' value={schedule.date} onChange={changeDate}></input>
            <button onClick={()=>getSchedule()}>Get Schedule</button>
            <h2><p>Date: {schedule.date}</p></h2>
            <p>Total Games: {schedule.totalGames}</p>
            <p>Total Items: {schedule.totalItems}</p>
            {
                schedule.games.map((game) => (
                        <NHLGame key={nanoid()} props={game}/>
                ))
            }
        </div>
    )
}