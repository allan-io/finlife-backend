

import NewInvestmentForm from '../../../components/NewInvestmentForm/NewInvestmentForm'
import InvestmentDetails from '../../../components/InvestmentDetails'
import { useEffect, useState } from 'react'

const Fiis = () => {
    const [investments, setInvestments] = useState('')

    useEffect(() => {
        const getInvestments = async () => {
            const result = await fetch('/api/investments')
            const json = await result.json()

            if (result.ok) {
                setInvestments(json)
            }
        }
        getInvestments()
    },[])

    return (
        <div className="container">
            <div>Fiis</div>
            {investments && investments.filter((el) => el.defaultValue === 'FII').map((el) => {
                return <InvestmentDetails key={el._id} investment={el}/>
            })}
            <NewInvestmentForm defaultValue={'FII'} />
        </div>

    )
}

export default Fiis
