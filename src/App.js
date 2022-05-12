import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Cards from './Components/Cards/Cards';
import Filters from './Components/Filters/Filters';
import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [limit, setlimit] = useState(9);
  const [offset, setoffset] = useState(0);
  const [fetcheddata, setfetcheddata] = useState([]);
  let api = `https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`

  useEffect(() => {

    (async function getpro() {
      const res = await fetch(api)
      const data = await res.json();
      console.log(data);
      setfetcheddata(data);
    })();

  }, [api])




  return (

    <div className="App">
      <h1 className='text-center ubuntu my-3'>Breaking Bad <span className="text-primary">Info</span></h1>

      <div className="container">

        <div className="row">

          <div className="col-3">
            <Filters></Filters>
          </div>

          <div className="col-8">
            <div className="row">
              <Cards fetcheddata={fetcheddata}></Cards>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
