import React from 'react';
import Table from './Table'; 
import axios from 'axios'; 

export default function TeamPage(){

    const options = {
    method: 'GET',
    url: 'https://api-baseball.p.rapidapi.com/games',
    params: {id: '1', league: '1', season: '2021', team: '5'},
    headers: {
        'x-rapidapi-key': '4aee90be7fmsh9202d58924972e2p165ac7jsnf291319cbd26',
        'x-rapidapi-host': 'api-baseball.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
        
    return(
        <div>
            <h1>Team Page</h1>
            <Table/>
        </div>
    )
}