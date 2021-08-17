import React from 'react';
import Printbook from './printbook';

function Getbooks(){
    return(
        <><div className="container">
            <div style={{margin:"20px", fontSize:"30px" }}><strong>Getting Books</strong></div>
                <Printbook/>
        </div>
        </>
    )
}

export default Getbooks;