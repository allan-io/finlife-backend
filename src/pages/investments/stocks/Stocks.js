import { useEffect, useState } from 'react'

import InvestmentDetails from '../../../components/InvestmentDetails'
import NewInvestmentForm from '../../../components/NewInvestmentForm'

const Stocks = () => {

const [investments, setInvestments] = useState(null)

    useEffect(() => {
        const fetchInvestment = async () => {
            const response = await fetch('/api/investments')
            const json = await response.json()

            if (response.ok) {
                setInvestments(json)
            }
        }
        fetchInvestment()
    }, [])

    return (

        <div className="investments">
            <h2>Stocks</h2>
                {investments && investments.filter((el) => el.defaultValue === 'Stock').map((el) => {
                    return <InvestmentDetails key={el._id} investment={el}/>
                })}
                 <NewInvestmentForm defaultValue={'Stock'} />
            </div>

    )
}

export default Stocks
