import React from 'react'
import CurrencyCalc from './CurrencyCalc'

function Currency({ country }) {
    const [output, setOutput] = React.useState('');

    function showInput2(event) {
        setOutput(event.target.value)
    }

    return (
        <div className="currency__calc">
            <div className="flex-container">
                <div className="info">
                    <div className="info__img">
                        <img src="http://www.geonames.org/flags/l/us.gif" alt="flag" />
                        <span className="currency__symbol">$</span>
                    </div>
                    <div className="info__text">
                        <input placeholder='0.0000' name="count-currency" type="number" onInput={showInput2} />
                        <p className="base__currency-rate">Базовая валюта - доллар</p>
                    </div>
                </div>
            </div>
            <CurrencyCalc country={country} output={output} />
        </div>
    )
}

export default Currency
