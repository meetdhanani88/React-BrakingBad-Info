import React, { useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ fetcheddata, setUishowdata, setfetcheddata }) => {
    const firsttime = useRef(true);

    // let api = `https://breakingbadapi.com/api/characters?limit=9&offset=${offset}`;

    // function pre() {

    //     if (offset === 0) return;

    //     const curentOffset = offset;
    //     console.log("curentOffset", curentOffset);

    //     // const predata =fetcheddata.filter((item,index)=>{

    //     //     return index<curentOffset 
    //     // })

    //     const predata = fetcheddata.slice(curentOffset - 9, curentOffset);

    //     setUishowdata(predata)
    //     setoffset(pre => pre - 9);

    //     // console.log(predata);

    // }
    // function next() {
    //     if (Uishowdata.length < 9) {
    //         console.log("jdksjk");
    //         return
    //     }


    //     setoffset(pre => pre + 9);

    //     // console.log("offset, fetcheddata.length", offset + 9, fetcheddata.length);



    //     if (offset + 9 >= fetcheddata.length) {
    //         (async function getpro() {

    //             const res = await fetch(`https://breakingbadapi.com/api/characters?limit=9&offset=${offset + 9}`)
    //             const data = await res.json();

    //             setfetcheddata((pre) => {
    //                 let arr = [...pre, ...data]
    //                 return arr.filter((v, i, a) => a.findIndex(v2 => (v2.char_id === v.char_id)) === i)
    //             });

    //             setUishowdata(data);
    //         })();
    //     }
    //     else {
    //         // console.log("hi");
    //         let data = fetcheddata.slice(offset + 9, offset + 18)
    //         setUishowdata(data);

    //     }

    // }


    function pagechange(params) {

        if (firsttime.current) {
            firsttime.current = false;
            return
        }


        let selectedPage = params.selected;
        // console.log(selectedPage);
        let pageoffset = (9) * (selectedPage);
        // console.log("fetcheddata", fetcheddata);
        // console.log(fetcheddata.length)

        if (pageoffset >= fetcheddata.length) {
            (async () => {
                const res = await fetch(`https://breakingbadapi.com/api/characters?limit=9&offset=${pageoffset}`);
                const data = await res.json();

                setfetcheddata((pre) => {
                    let arr = [...pre, ...data]
                    return arr.filter((v, i, a) => a.findIndex(v2 => (v2.char_id === v.char_id)) === i)
                });

                setUishowdata(data);
            })();

            // console.log(fetcheddata);

        }
        else {
            let data = fetcheddata.slice(pageoffset, pageoffset + 9)
            setUishowdata(data);
        }

    }

    return (
        <div>

            <ReactPaginate
                className='pagination justify-content-center gap-3 my-3 d-flex flex-wrap'
                pageCount={7}
                initialPage={0}
                previousLabel="prev"
                nextLabel={"next"}
                previousClassName={"btn btn-primary"}
                nextClassName={"btn btn-primary"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"text-decoration-none text-light"}
                nextLinkClassName={"text-decoration-none text-light"}
                onPageChange={pagechange}
            />

        </div>
    )
}

export default Pagination;