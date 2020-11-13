import React from 'react'

function CurrencyCalc({ country, output }) {
    const [currency, setCurrency] = React.useState([]);
    const currencyName = Object.keys(currency);
    const currencyValue = Object.values(currency);

    React.useEffect(() =>
        fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=GBP,RUB,EUR,CHF,CNY')
            .then(data => {
                return data.json()
            })
            .then(data =>
                setCurrency(data.rates))
        , [])

    return (
        <div className="currency__calc">
            {currencyName.map((elem, indexName) => {
                return <div
                    key={indexName}>
                    <div className="flex-container">
                        <div className="info">
                            <div className="info__img-other">
                                <img src={country[indexName].flagURL} alt="flag" />
                                <span className="currency__symbol-other"> {country[indexName].symbol} </span>
                            </div>
                            <div className="info__text">
                                <p className="currency__name-other"> {(output * currencyValue[indexName]).toFixed(2)} {elem} </p>
                                <p className="base__currency-rate">1 USD = {currencyValue.map((elemValue, indexValue) => { return indexName === indexValue ? elemValue.toFixed(2) : '' })} {elem}</p>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default CurrencyCalc
