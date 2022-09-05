import React from "react";
import useSWR from 'swr';
import Button from 'react-bootstrap/Button';

const fetcher = (...args) => fetch(...args).then(res => res.json())

function CatFacts() {
    const { data, error, mutate } = useSWR('https://catfact.ninja/fact', fetcher)

    function handleClick() {
        mutate('https://catfact.ninja/fact')
    }

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
            <div className='pt-5 row pb-3'>
                <div className="col-12 d-flex justify-content-center ">
                    <Button className='' onClick={handleClick} variant="primary">New cat fact</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <span className="fact_text">{data?.fact}</span>

                </div>
            </div>
        </>
    );
}




export default CatFacts;