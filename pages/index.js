import styled from "styled-components";
import transactions from "@/assets/transactions.json";
import Transaction from "@/components/Transaction/Transaction";

export default function HomePage() {
  return (
    <>
      <header>Money Manager</header>
      <main>
        <h1>Your Transactions</h1>
        <ul>
          {transactions.map((transaction) => {
            return (
              <Transaction key={transaction.id} transaction={transaction} />
            );
          })}
        </ul>
      </main>
    </>
  );
}
