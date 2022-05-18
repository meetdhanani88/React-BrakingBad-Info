import React from 'react'

const Appearance = ({ setUishowdata, fullChardata, setpagination, addToRefs }) => {

    function filterseason(item) {
        // console.log();
        let season = +(item.split("-")[1])
        // console.log(fullChardata);
        // console.log(season);
        const seasonfilter = fullChardata.filter(val => val.appearance.includes(season));
        console.log(seasonfilter);
        setUishowdata(seasonfilter);
        setpagination(false);



    }
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Season Appearance
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">


                    <div className="d-flex justify-content-center flex-wrap m-0" role="group" aria-label="Basic radio toggle button group">

                        {
                            ["Season-1", "Season-2", "Season-3", "Season-4", "Season-5"].map((item, i) => {
                                return <div className='m-2 form-check ps-0' key={i}>
                                    <input type="radio" className="btn-check" name="btnradio" id={item} autoComplete="off" onClick={filterseason.bind(null, item)} ref={addToRefs} />
                                    <label className="btn btn-outline-primary" htmlFor={item}>{item}</label>
                                </div>
                            })
                        }


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Appearance