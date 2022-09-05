import { React, useState } from "react";


function ZodiacSign() {



    const zodiacSigns = {
        Aries: 'March 21 - April 19',
        Taurus: 'April 20 - May 20',
        Gemini: 'May 21 - June 20',
        Cancer: 'June 21 - July 22',
        Leo: 'July 23 - August 22',
        Virgo: 'August 23 - September 22',
        Libra: 'September 23 - October 22',
        Scorpio: 'October 23 - November 21',
        Sagittarius: 'November 22 - December 21',
        Capricorn: 'December 22 - January 19',
        Aquarius: 'January 20 - February 18',
        Pisces: 'February 19 - March 20',
    }



    const [dates, setDates] = useState('March 21 - April 19');
    const [sign, setSign] = useState('Aries');




    const handleChange = (e) => {
        let _selectedSign = e.target.value
        setSign(_selectedSign)
        setDates(zodiacSigns[_selectedSign]);
    }



    return (
        <div className='row py-5'>
            <div className="col">
                <div className="row">
                    <h2 className="col text-center">Zodiac Signs</h2>
                </div>
                <div className="row pb-3">
                    <div className="col text-center"> People under the sign of</div>
                </div>
                <div className="row d-flex justify-content-center pb-3">
                    <div className="col-4">
                        <select className="form-select" onChange={handleChange}>
                            {Object.keys(zodiacSigns).map(key => {
                                return (<option key={key} value={key}>{key}</option>)
                            })}
                        </select>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-4 text-center">
                        <p> The selected sign is {sign}</p>
                        <p> People of this sign were born between</p>
                        <h4>{dates}</h4>
                    </div>
                </div>

            </div>






        </div>
    );
}

export default ZodiacSign;