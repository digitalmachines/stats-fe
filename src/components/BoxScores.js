

import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 

export default function Schedule(){
    
    const teamStats = []; 
    const [check, setCheck] = useState(false); 
    const [teams, setTeams] = useState([{
        id: '',
        name: '' , 
        evGGARatio: '',
        faceOffWinPercentage: '',
        faceOffsLost: '',
        faceOffsTaken: '',
        faceOffsWon: '',
        gamesPlayed: '',
        goalsAgainstPerGame: '',
        goalsPerGame: '',
        losses: '',
        ot: '',
        penaltyKillPercentage: '',
        powerPlayGoals: '',
        powerPlayGoalsAgainst: '',
        powerPlayOpportunities: '',
        powerPlayPercentage: '',
        ptPctg: '',
        pts: '',
        savePctg: '',
        shootingPctg: '',
        shotsAllowed: '',
        shotsPerGame: '',
        winLeadFirstPer: '',
        winLeadSecondPer: '',
        winOppScoreFirst: '',
        winOutshootOpp: '',
        winOutshotByOpp: '',
        winScoreFirst: '',
        wins: '',
    }])

    useEffect(()=>{
          axios.get('https://statsapi.web.nhl.com/api/v1/teams/1/stats')
            .then(function (response) {
                console.log(response);
                
                const id = response.data.stats[0].splits[0].team.id;
                const name = response.data.stats[0].splits[0].team.name;
                const type = response.data.stats[0].type.gameType;
                
                const stats = {
                    id, 
                    name, 
                    singleSeason: {
                        stats: response.data.stats[0].splits[0].stat,
                        description: type.description,
                        id: type.id,
                        postseason: type.postseason,
                    }
                }

                console.log(stats); 
                teamStats[id] = {stats}; 
            })
            .catch(function (error) {
                console.error(error);
            });

    }, [check])

    function getSchedule(){
        console.log('Check is set to ', check)
        setCheck(!check); 
        console.log(teamStats)
    }
    
    return(
        <div>
            <h1>
                Schedule
            </h1>
            <button onClick={()=>getSchedule()}>Get Schedule</button>

            <form>
                <label>Select A League:</label>
                <select>
                    <option value="nhl">NHL</option>
                    <option value="premier">Premier League</option>
                    <option value="europa">Europa</option>
                    <option value="laliga">La Liga</option>
                    <option value="nba">NBA</option>
                    <option selected value="mlb">MLB</option>
                    <option value="mls">MLS</option>
                </select>
                
                <label>Team:</label>
                    {/* <input name='team' value={team.name}/> */}
                <label>Season:</label>
                    {/* <input name='team' value={team.name}/> */}
                
                <button onClick={()=>getSchedule()}>Get Box Scores</button>
            </form>

        </div>
    )
}