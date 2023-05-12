import React from "react";

function Counter ({numClicks}){
    return(
        <div className='number'>
            {numClicks}
        </div>
    );
}

export default Counter;