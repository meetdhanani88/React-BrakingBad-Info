import React, { useRef } from 'react'

const Category = ({ setUishowdata, fullChardata, setpagination, addToRefs }) => {

    function fitercategory(e) {

        let clickedVal = e.target.nextSibling.innerHTML;


        let filterstatusdata = fullChardata.filter(val => {
            return val.category === clickedVal;
        });

        console.log(filterstatusdata);
        setUishowdata(filterstatusdata);
        setpagination(false)

    }


    return (
        <div className="accordion-item">

            <h2 className="accordion-header" id="headingThree">

                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Category
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">


                    <div className="d-flex justify-content-center flex-wrap m-0" role="group" aria-label="Basic radio toggle button group">

                        <div className='m-2 form-check ps-0'>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradi1" autoComplete="off" onClick={fitercategory} ref={addToRefs} />
                            <label className="btn btn-outline-primary" htmlFor="btnradi1">Breaking Bad</label>
                        </div>
                        <div className='m-2 form-check ps-0'>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradi2" autoComplete="off" onClick={fitercategory} ref={addToRefs} />
                            <label className="btn btn-outline-primary" htmlFor="btnradi2">Better Call Saul</label>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Category

