import styled from "styled-components";
import transactions from "@/assets/transactions.json";
import Transaction from "@/components/Transaction/Transaction";
import Link from "next/link";
import AddIcon from "@/public/icons/Add.svg";

export default function HomePage() {
  return (
    <>
      <StyledHeadline>Your Transactions</StyledHeadline>
      <StyledTransactionList>
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </StyledTransactionList>
      <StyledAddLink href="/">
        <StyledAddIcon />
      </StyledAddLink>
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

const StyledAddLink = styled(Link)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 70px;
  height: 70px;
  background-color: var(--primary-light);
  color: var(--background-color);
  border: 1px solid var(--background-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover,
  :active {
    background-color: var(--highlight-light);
    border: 1px solid var(--highlight-dark);
    color: var(--highlight-dark);
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;

const StyledAddIcon = styled(AddIcon)`
  width: 36px;
  height: 36px;
  fill: currentColor;
`;
