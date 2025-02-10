import styled from "styled-components";

export default function Transaction({ transaction }) {
  if (!transaction) {
    return null;
  }

  const { date, type, category, amount, description } = transaction;

  return (
    <StyledTransaction>
      <StyledTransactionDetails>
        <StyledDate>{date}</StyledDate>
        <StyledCategory>{category}</StyledCategory>
        <StyledAmount>
          {type === "income" && "+"}
          {amount}
        </StyledAmount>
      </StyledTransactionDetails>
      {description && <StyledDescription>{description}</StyledDescription>}
    </StyledTransaction>
  );
}

const StyledTransaction = styled.li``;
const StyledTransactionDetails = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
const StyledDate = styled.li``;
const StyledCategory = styled.li``;
const StyledAmount = styled.li``;
const StyledDescription = styled.p``;
