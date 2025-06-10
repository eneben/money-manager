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
      <StyledLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 -960 960 960"
          width="36px"
          fill="var(--background-color)"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </StyledLink>
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

const StyledLink = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: var(--primary-light);
  color: var(--background-color);
  border: 1px solid var(--background-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
