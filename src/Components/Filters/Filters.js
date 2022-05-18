import React, { useRef } from 'react'
import Appearance from './Appearance';
import Category from './Category';
import Status from './Status';

const Filters = ({ setUishowdata, fullChardata, setpagination, setfetcheddata }) => {

    const refs = useRef();
    refs.current = [];



    const addToRefs = (el) => {

        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    }

    function uncheck() {
        console.log(refs.current)
        refs.current.forEach(element => {
            element.checked = false;
        });

    }


    function clear() {

        (async function () {
            const res = await fetch(`https://breakingbadapi.com/api/characters?limit=${9}&offset=${0}`)
            const data = await res.json();
            setfetcheddata((pre) => {

                let arr = [...pre, ...data]
                return arr.filter((v, i, a) => a.findIndex(v2 => (v2.char_id === v.char_id)) === i)
            });

            setUishowdata(data);
            setpagination(true);
        })();

        uncheck();

    }

    return (
        <div className="col-lg-3 mb-3 border border rounded-3 border-primary h-25 p-4 ">

            <div className="fw-bold fs-4 text-center" >
                Filter
            </div>

            <div style={{ cursor: 'pointer' }} className="text-decoration-underline text-primary my-3 text-center " onClick={clear}>
                Clear Filter
            </div>
            <div className="accordion" id="accordionExample">

                <Status setUishowdata={setUishowdata} fullChardata={fullChardata} setpagination={setpagination} addToRefs={addToRefs}></Status>
                <Appearance setUishowdata={setUishowdata} fullChardata={fullChardata} setpagination={setpagination} addToRefs={addToRefs}></Appearance>
                <Category setUishowdata={setUishowdata} fullChardata={fullChardata} setpagination={setpagination} addToRefs={addToRefs}> </Category>

            </div>

        </div>
    )
}

export default Filters;