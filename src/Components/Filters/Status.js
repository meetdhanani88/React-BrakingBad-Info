import React, { useEffect } from 'react'

const Status = ({ setUishowdata, fullChardata, setpagination, addToRefs }) => {


    function getstatusdata(e) {

        let clickedVal = e.target.nextSibling.innerHTML;


        let filterstatusdata = fullChardata.filter(val => {
            return val.status === clickedVal;
        });

        console.log(filterstatusdata);
        setUishowdata(filterstatusdata);
        setpagination(false)

    }



    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Status
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="d-flex justify-content-start flex-wrap " role="group" aria-label="Basic radio toggle button group">
                        <div className='m-1 form-check' >
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" ref={addToRefs} autoComplete="off" onClick={getstatusdata} />
                            <label className="btn btn-outline-primary" htmlFor="btnradio1" >Alive</label>
                        </div>

                        <div className='m-1 form-check' >
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" ref={addToRefs} autoComplete="off" onClick={getstatusdata} />
                            <label className="btn btn-outline-primary" htmlFor="btnradio2" >Deceased</label>
                        </div>

                        <div className='m-1 form-check' >
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" ref={addToRefs} autoComplete="off" onClick={getstatusdata} />
                            <label className="btn btn-outline-primary" htmlFor="btnradio3" >Presumed dead</label>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Status;