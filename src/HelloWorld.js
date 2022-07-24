import React, { useState } from "react";

function HelloWorld({name}) {

    const [stateName, setStateName] = useState('');

    return(
        <div>
            Nama : {stateName}
            <button onClick={() => setStateName(name)}>Pencet</button>
        </div>
    );
}

export default HelloWorld;