import React from "react";


const StaticPage = ()=>{
    return(
        <React.Fragment>
            <div >
                <h1>Mobile Operating System</h1>
                <ul>
                    <li>Android</li>
                    <li>Blackberry</li>
                    <li>iPhone</li>
                    <li>Windows Phone</li>
                </ul>
            </div>
            <div style={{textAlign:"left"}}>
                <h1>Mobile Manufacturers</h1>
                <ul>
                    <li type="square">Samsung</li>
                    <li type="square">HTC</li>
                    <li>Micromax</li>
                    <li type="circle">Apple</li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default StaticPage;