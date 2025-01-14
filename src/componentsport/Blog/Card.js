import React, { useState } from 'react';

function Card(props) {
    const [Modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!Modal)
    }

    return (
        <>
            <div className="box btn-shadow">
                <div className="image">
                    <img src={props.image} alt="" onClick={toggleModal} />
                </div>
                <div className="category d-flex">
                    <span onClick={toggleModal} >{props.date}</span>

                </div>
                <div className="title">
                    <h2 onClick={toggleModal} >{props.title_one}</h2>
                    <a href="#popup" className='arrow' onClick={toggleModal} >
                        <i className='fas fa-arrow-right'></i>
                    </a>
                </div>
            </div>
            {/* =============popup Modal=============== */}
            {Modal && (
                <div className="modal modal-blog">
                    <div onClick={toggleModal} className='overlay'>
                        <div className="modal-content">
                            <div className="modal-img left">
                                <img src={props.image} alt="" />
                            </div>
                            <div className="modal-text right">
                                <span>{props.date}</span>

                                <h1>{props.title_one}</h1>
                                <p>{props.desc_one} </p>

                                <h1>{props.title_two} </h1>
                                <p>{props.desc_two} </p>

                                <h1>{props.title_three} </h1>
                                <p>{props.desc_three} </p>

                                <button className="close-modal btn-shadow" onClick={toggleModal} >
                                    <i className='fas fa-times'></i>
                                </button>
                                <div className="contact mtop">
                                    <h1>Leave a Reply</h1>
                                    <form className='blog-contact d-flex'>
                                        <div className="left">
                                            <input type="text" placeholder='Name' />
                                            <input type="text" placeholder='Email' />
                                            <input type="text" placeholder='Website' />
                                            <button className='btn-shadow'>SUBMIT NOW</button>
                                        </div>
                                        <div className="right">
                                            <textarea cols="30" rows="12" placeholder='comment'></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card;
