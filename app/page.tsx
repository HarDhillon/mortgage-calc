
import MortgageForm from "./components/MortgageForm";


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <section className="bg-black flex p-14">
        <MortgageForm></MortgageForm>

        <section>
          <h2>Your results</h2>

          <p>Your results are shown below based on the information your provided. To adjust the resulsts, edit the from and click &quot;calculate repayments&quot; again</p>

          <section>
            <p>Your monthly repayment</p>
            <h2> INFO HERE </h2>

            <hr></hr>

            <p>Total you&apos;ll repay over the term</p>

            <p> INFO HERE </p>
          </section>
        </section>

      </section>

    </main>
  );
}
