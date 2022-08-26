import React, { useState, useEffect } from 'react';

import { getStops } from '../api';

function Stops(props) {
  const {routeId, directionId} = props;
  const [stops, setStops] = useState([]);

  
  const loadStops = () => {
    getStops(routeId, directionId)
    .then((data) => {
      setStops(data);
    })
    .catch((error) => {
      //would also want to actually display error/something useful for user
      console.log(error);
    });
  }

  useEffect(loadStops, [routeId, directionId]);

  return(
    <table style={{paddingLeft: 440, textAlign: 'left', paddingTop: 10}}>
      <thead>
        <tr>
          <th>Stops along route</th>
        </tr>
      </thead>
      <tbody>
        {stops.map(stop => 
          {
            return <tr key={stop.place_code}>
                      <td>{stop.description}</td>
                    </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default Stops;