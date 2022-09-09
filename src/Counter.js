import { React, useState } from "react";
import Button from 'react-bootstrap/Button';


function CounterProject() {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    };

    const decrease = () => {
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(0);
    };


    return (
        <div className='row pt-5'>
            <div className="col">
                <div className="row pb-4">
                    <h3 className="text-center">
                        Counter App
                    </h3>
                </div>
                <div className="row pb-2">
                    <div className="col-6 d-flex justify-content-end">
                        <Button onClick={decrease}>-</Button>
                    </div>
                    <div className="col-6 d-flex justify-content-start">
                        <Button onClick={increase}>+</Button>
                    </div>
                </div>
                <div className="row pb-2">
                    <h3 className="col text-center">{counter}</h3>
                </div>
                <div className="row pb-2 d-flex justify-content-center ">

                    <Button className="col-md-3 col-12" onClick={reset}>Reset</Button>
                </div>
            </div>
        </div>
    );
}

export default CounterProject;