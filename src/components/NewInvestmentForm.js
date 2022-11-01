import { useState } from "react"

const NewInvestmentForm = ({defaultValue}) => {




    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [ticker, setTicker] = useState('')
    const [purchasePrice, setPurchasePrice] = useState(0)
    const [purchaseValue, setPurchaseValue] = useState(0)
    const [broker, setBroker] = useState('')
    const [error, setError] = useState(undefined)

    const selectDropdown = () => {
        if (defaultValue === 'Ação') {
            return (
                <>
                <option value="DEFAULT" disabled hidden>Select Type</option>
                <option value="large cap">large cap</option>
                <option value="small cap">small cap</option>
                </>
            )
        } else if (defaultValue === 'FII') {
            return (
                <>
                <option value="DEFAULT" disabled hidden>Select Type</option>
                <option value="tijolo">tijolo</option>
                <option value="fundo de fundos">fundo de fundos</option>
                <option value="papel">papel</option>
                </>
            )
        } else if (defaultValue === 'Stock') {
            return (
                <>
                <option value="DEFAULT" disabled hidden>Select Type</option>
                <option value="large cap">large cap</option>
                <option value="small cap">small cap</option>
                <option value="crypto">crypto</option>
                </>
            )
        } else {
            return (
                <>
                <option value="DEFAULT" disabled hidden>Select Type</option>
                <option value="cdi">cdi</option>
                <option value="emergency funds">emergency funds</option>
                <option value="tesouro">tesouro</option>
                </>
            )

        }
    }

    const handleChange = (e) => {
        setType(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

            const newStock = {name, type, ticker, purchasePrice, purchaseValue, broker, defaultValue}

            const response = await fetch('/api/investments', {
                method: 'POST',
                body: JSON.stringify(newStock),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await response.json()

            if (!response.ok) {
                setError(json.error)
            }
            if (response.ok) {
                setError(null)
                setName('')
                setPurchasePrice(0)
                setPurchaseValue(0)
                setTicker('')
                setType('')
                setBroker('')
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
                {selectDropdown()}
            </select>

             <label>{defaultValue} Ticker</label>
            <input
            type="text"
            onChange={(e) => setTicker(e.target.value)}
            value={ticker}
             />

             <label>Purchase Price</label>
            <input
            type="number"
            onChange={(e) => setPurchasePrice(e.target.value)}
            value={purchasePrice}
             />

             <label>Purchase Value</label>
            <input
            type="text"
            onChange={(e) => setPurchaseValue(e.target.value)}
            value={purchaseValue}
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
