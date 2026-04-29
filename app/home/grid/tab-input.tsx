import React, { useState } from 'react'

const TabInput = () => {

    const [income, setIncome] = useState('')

    const handleChange = (e) => {
        setIncome(e.target.value)
        console.log(new Intl.NumberFormat("en-US", { style: "currency", currency: "PLN" }).format(Number(income)))
    }


    return (
        <div>
            <span contentEditable={true} inputMode='decimal'  className='min-w-[1ch] p-0'>124124</span>
            <input value={income} maxLength={8}  tabIndex={-1} onChange={handleChange} type="number" />
        </div>
    )
}

export default TabInput

//https://hello-mat.com/design-engineering/component/number-flow-input