'use client'

import { useState } from "react"
import { RadioGroup } from "./RadioGroup"
import Input from "./Input"

const radioItems: { value: string, label: string }[] = [
    { value: 'Repayment', label: 'Repayment' },
    { value: 'Interest', label: 'Interest Only' },
]

interface MortgageFormProps {
    handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    clearForms: () => void;
    setMortgageType: (t: "Repayment" | "Interest-only" | null) => void;
    formState: {
        [key: string]: string; // Adjust based on your actual form state structure
    };
    mortgageType: "Repayment" | "Interest-only" | null
    calculateRepayments: (e: React.FormEvent) => void;
}

  
const MortgageForm: React.FC<MortgageFormProps> = ({handleFormChange, clearForms, setMortgageType, formState, mortgageType, calculateRepayments}) => {
    

    return (
        <section className="mr-12">
            <header className="flex justify-between">
            <h2 className="mr-3">Mortgage Calculator</h2>
            <button onClick={clearForms}>Clear All</button>
            </header>
            <form>

                <Input onChange={handleFormChange} label="Mortgage Ammount" value={formState.mortgageAmmount} name="mortgageAmmount" type="text" placeholder="5000" ></Input>
                <Input onChange={handleFormChange} label="Mortgage Term" value={formState.mortgageTerm} name="mortgageTerm" type="text" placeholder="25"></Input>
                <Input onChange={handleFormChange} label="Interest Rate" value={formState.interestRate} name="interestRate" type="text" placeholder="5.25" ></Input>
                
                <RadioGroup name="mortgage-type" items={radioItems} value={mortgageType} onChange={setMortgageType} legend="Mortgage Type"></RadioGroup>

                <button onClick={calculateRepayments} className="bg-[#d7da2f] px-4 py-2 rounded-full">Calculate Repaymnets</button>

            </form>
        </section>
    )
}

export default MortgageForm