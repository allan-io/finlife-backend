const InvestmentDetails = ( {investment} ) => {

    const {name, ticker, broker, stockPrice, transactionTotal, divident, _id} = investment

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
            <p>{stockPrice}</p>
            <p>{transactionTotal}</p>
            <p>{broker}</p>
            <p>{divident}</p>
            <button className="deleteBtn" onClick={handleClick}>delete</button>
        </div>
    )


}



export default InvestmentDetails
