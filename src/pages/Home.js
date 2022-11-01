
import { Link } from "react-router-dom"

const Home = () => {



    return (
        <div className="home">
            <div className="chart">
                this is a pie chart

            </div>
            <div className="container">
                <Link to='/stocks'>
                    <h2>Stocks</h2>
                </Link>
                <Link to='/fiis'>
                    <h2>FIIs</h2>
                </Link>
                <Link to='/acoes'>
                    <h2>Ações</h2>
                </Link>
                <Link to='/renda-fixa'>
                    <h2>Renda Fixa</h2>
                </Link>
            </div>
        </div>
    )
}

export default Home
