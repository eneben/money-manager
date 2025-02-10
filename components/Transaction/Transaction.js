import styled from "styled-components";

export default function Transaction({ transaction }) {
  if (!transaction) {
    return null;
  }

  const { date, type, category, amount, description } = transaction;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <TransactionWrapper>
      <TransactionDetails>
        <TransactionDate>{formattedDate}</TransactionDate>
        <TransactionCategory>{category}</TransactionCategory>
        <TransactionAmount $type={type}>
          {type === "income" && "+"}
          {amount}
        </TransactionAmount>
      </TransactionDetails>
      {description && (
        <TransactionDescription>{description}</TransactionDescription>
      )}
    </TransactionWrapper>
  );
}

const TransactionWrapper = styled.li`
  width: 100%;
  box-shadow: 0 3px 3px -3px var(--primary-dark);
`;

const TransactionDetails = styled.article`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  width: 100%;
`;

const TransactionDate = styled.time`
  text-align: left;
`;

const TransactionCategory = styled.h3`
  text-align: left;
  font-size: 1rem;
  font-weight: normal;
`;

const TransactionAmount = styled.span`
  text-align: right;
  font-weight: bold;
  color: ${({ $type }) =>
    $type === "income" ? "var(--color-income)" : "var(--color-expense)"};
`;

const TransactionDescription = styled.p`
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
  color: var(--primary-dark);
`;
