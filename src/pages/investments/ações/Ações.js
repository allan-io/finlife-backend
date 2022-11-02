import { useEffect, useState } from 'react'

import NewInvestmentForm from '../../../components/NewInvestmentForm/NewInvestmentForm'
import InvestmentDetails from '../../../components/InvestmentDetails'


const Ações = () => {
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
            <h2>Ações</h2>
                {investments && investments.filter((el) => el.defaultValue === 'Ação').map((investment) => {
                    return <InvestmentDetails key={investment._id} investment={investment}/>
                })}
                 <NewInvestmentForm defaultValue={'Ação'} />
            </div>

    )
}

export default Ações
