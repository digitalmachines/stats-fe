import React, { useState } from 'react'; 

export default function NHLGame({ props }){

    // console.log(props); 
    const [game, setGame] = useState(props)

    let { wins: awayWins, losses: awayLosses, ot: awayOt } = game.teams.away.leagueRecord; 
    let { wins: homeWins, losses: homeLosses, ot: homeOt } = game.teams.home.leagueRecord; 

    return(
        <div>
                <p>Game Date: {game.gameDate}</p>
                <p><b>AWAY:</b> {game.teams.away.team.name} ({awayWins}-{awayLosses}-{awayOt}) <b>Score:</b> {game.teams.away.score}</p>
                <p><b>HOME:</b> {game.teams.home.team.name} ({homeWins}-{homeLosses}-{homeOt}) <b>Score: </b> {game.teams.home.score}</p>
        </div>
    )
}
