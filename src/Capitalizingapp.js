import { React, useState } from "react";


function CapitalizingApp() {

    const [capitalizedinput, setCapitalizedinput] = useState()

    const handleChange = (event) => {
        let inputValue = event.target.value
        setCapitalizedinput(inputValue.toUpperCase())
    }


    return (
        <div className='row pt-5'>
            <div className="col">
                <div className="row pb-3">
                    <h3 className="text-center">
                        Capitalize a string
                    </h3>
                </div>
                <div className="row d-flex justify-content-center pb-3">
                    <div className="col-4">
                        <input className="form-control" onChange={handleChange} />

                    </div>
                </div>
                <div className="row">
                    <h4 className="col text-center">
                        {capitalizedinput}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default CapitalizingApp;