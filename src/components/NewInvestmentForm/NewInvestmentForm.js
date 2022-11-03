import { useState } from "react"
import { selectDropdown } from './helperFuncs'

const NewInvestmentForm = ({defaultValue}) => {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [ticker, setTicker] = useState('')
    const [stockPrice, setStockPrice] = useState(0)
    const [transactionTotal, setTransactionTotal] = useState(0)
    const [broker, setBroker] = useState('')
    const [error, setError] = useState(undefined)

    const handleChange = (e) => {
        setType(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

            const newStock = {name, type, ticker, stockPrice, broker, defaultValue, transactionTotal}

            const response = await fetch('/api/investments', {
                method: 'POST',
                body: JSON.stringify(newStock),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await response.json()


            console.log(typeof(transactionTotal))
            if (!response.ok) {
                setError(json.error)
            }
            if (response.ok) {
                setError(null)
                setName('')
                setStockPrice(0)
                setTransactionTotal(0)
                setTicker('')
                setType('')
                setBroker('')
                e.target.type.selectedIndex = 0
                console.log('new stock added', json)
            }
        }

    return (
       <form className="NewInvestmentForm" onSubmit={handleSubmit}>
            <h3>Add New {defaultValue}</h3>

            <label>{defaultValue} Name</label>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
             />

            <label>{defaultValue} Type</label>
            <select name="type" id="type" defaultValue="DEFAULT" onChange={handleChange}>
                {selectDropdown(defaultValue)}
            </select>

             <label>{defaultValue} Ticker</label>
            <input
            type="text"
            onChange={(e) => setTicker(e.target.value)}
            value={ticker}
             />

             <label>Stock Price</label>
            <input
            type="number"
            onChange={(e) => setStockPrice(e.target.value)}
            value={stockPrice}
             />

             <label>Total Transaction</label>
            <input
            type="number"
            onChange={(e) => setTransactionTotal(parseFloat(e.target.value))}
            value={transactionTotal}
             />

             <label>Broker</label>
            <input
            type="text"
            onChange={(e) => setBroker(e.target.value)}
            value={broker}
             />

            <button className="newInvestmentButton">Create</button>
            {error && <div className="error">{error}</div>}
       </form>
    )
}

export default NewInvestmentForm
