import { useEffect, useState } from 'react'
import NewInvestmentForm from '../../../components/NewInvestmentForm/NewInvestmentForm'
import InvestmentDetails from '../../../components/InvestmentDetails'

const RendaFixa = () => {
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
    }, [])

    return (
        <div className="container">
            <div>Renda Fixa</div>
            {investments && investments.filter(el => el.defaultValue === 'Renda Fixa').map((el) => {
                return <InvestmentDetails key={el._id} investment={el}/>
            })}
            <NewInvestmentForm defaultValue={'Renda Fixa'} />
        </div>


    )
}

export default RendaFixa
