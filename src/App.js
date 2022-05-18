import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Cards from './Components/Cards/Cards';
import Filters from './Components/Filters/Filters';
import React, { useState, useEffect } from 'react';
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';

function App() {
  const [limit, setlimit] = useState(9);
  const [offset, setoffset] = useState(0);
  const [fetcheddata, setfetcheddata] = useState([]);
  const [Uishowdata, setUishowdata] = useState([]);
  const [fullChardata, setfullChardata] = useState([]);
  const [search, setsearch] = useState('');
  const [pagination, setpagination] = useState(true);
  let api = `https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`
  let searchApi = `https://breakingbadapi.com/api/characters?name=${search}`

  useEffect(() => {

    (async function () {


      const res = await fetch(api)
      const data = await res.json();
      setfetcheddata((pre) => {
        return [...pre, ...data]
      });

      setUishowdata(data);
    })();


    (async function () {


      const res = await fetch("https://breakingbadapi.com/api/characters")
      const data = await res.json();

      setfullChardata((pre) => {
        return [...pre, ...data]
      });

    })();

  }, [])
  // console.log("fetcheddata", fetcheddata);
  // console.log("uishowdata", Uishowdata);



  return (

    <div className="app">
      <h1 className='text-center ubuntu my-3'>Breaking Bad <span className="">Info</span></h1>
      <Search setsearch={setsearch} search={search} setUishowdata={setUishowdata} setfetcheddata={setfetcheddata} Uishowdata={Uishowdata}></Search>
      <div className="container  ">

        <div className="row d-lg-flex justify-content-center">


          <Filters setUishowdata={setUishowdata} fullChardata={fullChardata} setpagination={setpagination} setfetcheddata={setfetcheddata}></Filters>

          <div className="col-8">
            <div className="row ">
              <Cards Uishowdata={Uishowdata}></Cards>
            </div>
          </div>

        </div>

      </div>

      {pagination && <Pagination
        setoffset={setoffset} offset={offset}
        fetcheddata={fetcheddata} Uishowdata={Uishowdata}
        setUishowdata={setUishowdata}
        setfetcheddata={setfetcheddata}
      >
      </Pagination>}

    </div>

  );
}

export default App;
