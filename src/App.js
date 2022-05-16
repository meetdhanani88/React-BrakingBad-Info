import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Cards from './Components/Cards/Cards';
import Filters from './Components/Filters/Filters';
import React, { useState, useEffect, useMemo } from 'react';
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';

function App() {
  const [limit, setlimit] = useState(9);
  const [offset, setoffset] = useState(0);
  const [fetcheddata, setfetcheddata] = useState([]);
  const [Uishowdata, setUishowdata] = useState([]);
  const [search, setsearch] = useState('');
  let api = `https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`
  let searchApi = `https://breakingbadapi.com/api/characters?name=${search}`

  useEffect(() => {

    (async function getpro() {


      const res = await fetch(api)
      const data = await res.json();
      setfetcheddata((pre) => {
        return [...pre, ...data]
      });

      setUishowdata(data);




    })();

  }, [])
  console.log("fetcheddata", fetcheddata);
  console.log("uishowdata", Uishowdata);



  return (

    <div className="app">
      <h1 className='text-center ubuntu my-3'>Breaking Bad <span className="">Info</span></h1>
      <Search setsearch={setsearch} search={search} setUishowdata={setUishowdata} setfetcheddata={setfetcheddata} Uishowdata={Uishowdata}></Search>
      <div className="container  ">

        <div className="row">

          <div className="col-3">
            <Filters></Filters>
          </div>

          <div className="col-8">
            <div className="row">
              <Cards Uishowdata={Uishowdata}></Cards>
            </div>
          </div>

        </div>

      </div>

      <Pagination
        setoffset={setoffset} offset={offset}
        fetcheddata={fetcheddata} Uishowdata={Uishowdata}
        setUishowdata={setUishowdata}
        setfetcheddata={setfetcheddata}
      >
      </Pagination>

    </div>

  );
}

export default App;
