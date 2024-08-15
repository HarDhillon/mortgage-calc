'use client'

import { useState } from "react";
import MortgageForm from "./components/MortgageForm";


export default function Home() {

  const [mortgageType, setMortgageType] = useState<"Repayment" | "Interest-only" | null>(null);
  const [formState, setFormState] = useState({
      mortgageAmmount: '',
      mortgageTerm: '',
      interestRate: ''
  })
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

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

  const calculateRepayments = (event: React.FormEvent) => {
    event.preventDefault()
    if (mortgageType === null) {
      return
    }
    const monthlyInterestRate = Number(formState.interestRate) / 12 / 100;
    const numberOfPayments = Number(formState.mortgageTerm) * 12;
    const principal = Number(formState.mortgageAmmount);
    let calculatedMonthlyPayment = 0;
    let calculatedTotalPayment = 0;


    if (mortgageType === 'Repayment') {
      if (monthlyInterestRate === 0) {
          // Edge case: If interest rate is 0, simply divide principal by number of payments
          calculatedMonthlyPayment = principal / numberOfPayments;
      } else {
          // Standard amortization formula for fixed-rate repayment mortgage
          calculatedMonthlyPayment = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      }
      calculatedTotalPayment = calculatedMonthlyPayment * numberOfPayments;
  } else {
      // Interest-only mortgage calculation
      calculatedMonthlyPayment = principal * monthlyInterestRate;
      calculatedTotalPayment = (calculatedMonthlyPayment * numberOfPayments) + principal;
  }

    // Ensure consistency in state updates
    setMonthlyPayment(parseFloat(calculatedMonthlyPayment.toFixed(2)));
    setTotalPayment(parseFloat(calculatedTotalPayment.toFixed(2)));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <section className="bg-black flex p-14">
        <MortgageForm
          calculateRepayments={calculateRepayments}
          handleFormChange={handleFormChange}
          clearForms={clearForms}
          formState={formState}
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}>
        </MortgageForm>

        <section>
          <h2>Your results</h2>

          <p>Your results are shown below based on the information your provided. To adjust the resulsts, edit the from and click &quot;calculate repayments&quot; again</p>

          <section>
            <p>Your monthly repayment</p>
            <h2> {monthlyPayment} </h2>

            <hr></hr>

            <p>Total you&apos;ll repay over the term</p>

            <p> {totalPayment} </p>
          </section>
        </section>

      </section>

    </main>
  );
}
