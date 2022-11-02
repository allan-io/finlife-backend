const selectDropdown = (defaultValue) => {
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



 export {
    selectDropdown
 }
