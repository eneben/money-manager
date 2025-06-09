import styled from "styled-components";
import transactions from "@/assets/transactions.json";
import Transaction from "@/components/Transaction/Transaction";

export default function HomePage() {
  return (
    <>
      <StyledHeadline>Your Transactions</StyledHeadline>
      <StyledTransactionList>
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </StyledTransactionList>
    </>
  );
}

const StyledHeadline = styled.h2`
  text-align: center;
  padding: 30px 0;
`;
const StyledTransactionList = styled.ul`
  list-style: none;
`;
