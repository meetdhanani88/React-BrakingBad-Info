import React from 'react'
import style from "./Cards.module.scss"

const Cards = ({ Uishowdata }) => {

    function badgeColor(status) {
        if (status === "Presumed dead") {
            return <div className={`${style.badge}  badge bg-secondary position-absolute`}>{status}</div>
        }
        if (status === "Deceased") {
            return <div className={`${style.badge}  badge bg-danger position-absolute`}>{status}</div>
        }
        if (status === "Alive") {
            return <div className={`${style.badge}  badge bg-success position-absolute`}>{status}</div>
        }
    }

    return (<>

        {
            Uishowdata?.map(item => {
                let { char_id, img, name, nickname, status, portrayed } = item
                return (
                    <div className={`col-lg-4 mb-4 position-relative `} key={char_id}>

                        <div className={`${style.card}`}>

                            {img ?
                                <img src={img} alt="" className={`${style.img} img-fluid`} onError={(e) => e.target.src = "https://dummyimage.com/700x1000/dbdbdb/42445c.png"} />
                                :
                                <img src={"https://via.placeholder.com/150"} alt="" className="img-fluid img-thumbnail" />
                            }
                            <div className="content text-wrap " style={{ padding: "10px" }}>
                                <div className="fs-4 fw-bold mb-4 text-wrap text-break">{name}</div>
                                <div className="mb-4">
                                    <div className="fs-6 text-wrap text-break">Nick Name</div>
                                    <div className="fs-5 text-wrap text-break">{nickname}</div>
                                </div>
                                <div className="">
                                    <div className="fs-6 text-wrap text-break">Portrayed</div>
                                    <div className="fs-5 text-wrap text-break">{portrayed}</div>
                                </div>
                            </div>
                        </div>
                        {badgeColor(status)}
                        {/*==> <div></div> */}


                    </div>)
            })
        }
    </>


    )
}

export default Cards