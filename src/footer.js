import React from 'react';
import logo from './componentsport/logo2.jpg';

function footer() {
    return (
        <>
            <footer>
                <div className="container text-center top">
                    <div className="img">
                        <img src={logo} alt="" />
                        <h1>UMAIR</h1>
                    </div>
                    <p>© 2023. All right reserved by CODE DEV</p>
                </div>

            </footer>
        </>
    )
}

export default footer