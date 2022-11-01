const InvestmentDetails = ( {investment} ) => {

    const {name, ticker, purchasePrice, purchaseValue, broker, _id} = investment

    const handleClick = async () => {
        const response = await fetch(`/api/investments/${_id}`, {
            method:'DELETE'
        })

        const json = await response.json()

        console.log(json)

    }

    return (
        <div className="investmentDetails">
            <h2>{name}</h2>
            <p>{ticker}</p>
            <p>{purchasePrice}</p>
            <p>{purchaseValue}</p>
            <p>{broker}</p>
            <button className="deleteBtn" onClick={handleClick}>delete</button>
        </div>
    )


}



export default InvestmentDetails
