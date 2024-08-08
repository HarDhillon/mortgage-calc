'use client'

import { useState } from "react"
import { RadioGroup } from "./RadioGroup"
import Input from "./Input"

const radioItems: { value: string, label: string }[] = [
    { value: 'Repayment', label: 'Repayment' },
    { value: 'Interest', label: 'Interest Only' },
]
  
const MortgageForm = () => {

    const [mortgageType, setMortgageType] = useState<string | null>(null)
    const [formState, setFormState] = useState({
        mortgageAmmount: '',
        mortgageTerm: '',
        interestRate: ''
    })

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const clearForms = () => {
        setFormState({
            mortgageAmmount: '',
            mortgageTerm: '',
            interestRate: ''
        })
        setMortgageType(null)
    }
    

    return (
        <section className="mr-12">
            <header className="flex justify-between">
            <h2 className="mr-3">Mortgage Calculator</h2>
            <button onClick={clearForms}>Clear All</button>
            </header>
            <form>

                <Input onChange={handleFormChange} label="Mortgage Ammount" value={formState.mortgageAmmount} name="mortgageAmmount" type="number" placeholder="5000" ></Input>
                <Input onChange={handleFormChange} label="Mortgage Term" value={formState.mortgageTerm} name="mortgageTerm" type="number" placeholder="25"></Input>
                <Input onChange={handleFormChange} label="Interest Rate" value={formState.interestRate} name="interestRate" type="number" placeholder="5.25" ></Input>
                

                {/* <label>Mortgage Amount</label>
                <input className="text-black" type="number"></input>

                <fieldset className="flex">
                    <label>Mortgage Term</label>
                    <input className="text-black" type="number"></input>
                    <label>Interest Rate</label>
                    <input className="text-black" type="number" min="1" max="100"></input>
                </fieldset> */}
                
                <RadioGroup name="mortgage-type" items={radioItems} value={mortgageType} onChange={setMortgageType} legend="Mortgage Type"></RadioGroup>

                <button className="bg-[#d7da2f] px-4 py-2 rounded-full">Calculate Repaymnets</button>

            </form>
        </section>
    )
}

export default MortgageForm