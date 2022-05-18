import React, { useLayoutEffect, useCallback, useRef } from 'react';
import debounce from 'lodash.debounce';

const Search = ({ setsearch, search, setUishowdata, setfetcheddata, Uishowdata }) => {
    const firstUpdate = useRef(true);

    //this will delay every call of updatequery for 500ms;
    const delayedQuery = useCallback(debounce(updateQuery, 500), [search]);

    function updateQuery() {
        if (!search && Uishowdata.length != 9) {
            (async function getpro() {

                console.log('Uishowdata', Uishowdata);
                const res = await fetch(`https://breakingbadapi.com/api/characters?limit=9&offset=${0}`)
                const data = await res.json();
                setUishowdata(data);
            })();

        }
        else {
            (async () => {
                const res = await fetch(`https://breakingbadapi.com/api/characters?name=${search}`);
                const data = await res.json();
                setUishowdata(data);

            })();
        }
    }

    useLayoutEffect(() => {
        console.log(search);

        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        delayedQuery();

        //this return stataement will cancel delayedQuery if 500ms not completed & new serch-term typed
        //(basically this return statement firstly run before everything when useEffect run again)
        //(that's why it's called cleanup function to clean prev tasks)
        return delayedQuery.cancel;

    }, [search, delayedQuery])

    function searchthechar(e) {

        console.log(e.target.value);
        let seachterm = e.target.value;

        setsearch(seachterm);
    }

    return (
        <div className='container d-flex justify-content-center gap-4 mb-5'>
            <input type="text" placeholder='Search Character' className='shadow  w-50 p-2 rounded-2 border border-primary fs-5'
                onChange={searchthechar} value={search}
            />

            {/* <button className="btn btn-primary shadow " onClick={searchthechar}>
                Search
            </button> */}
        </div>

    )
}


export default Search;