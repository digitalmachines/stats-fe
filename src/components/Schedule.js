import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 

export default function Schedule(){

    const [schedule, setSchedule] = useState({}); 


    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://soccer-data.p.rapidapi.com/tournament/list',
            headers: {
              'x-rapidapi-key': '4aee90be7fmsh9202d58924972e2p165ac7jsnf291319cbd26',
              'x-rapidapi-host': 'soccer-data.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setSchedule(response.data); 
          }).catch(function (error) {
              console.error(error);
          });

    }, [])
    

    return(
        <div>
            <h1>
                Schedule
            </h1>
            {schedule}
        </div>
    )
}