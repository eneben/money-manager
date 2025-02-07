import styled from "styled-components";

export default function Transaction({ transaction }) {
  if (!transaction) {
    return null;
  }

  const { date, type, category, amount, description } = transaction;

  return (
    <StyledTransaction>
      <StyledTransactionDetailsList>
        <StyledTransactionDetailsWrapper>
          <StyledDate>{date}</StyledDate>
          <StyledCategory>{category}</StyledCategory>
          <StyledAmount>
            {type === "income" && "+"}
            {amount}
          </StyledAmount>
        </StyledTransactionDetailsWrapper>
        {description && <StyledDescription>{description}</StyledDescription>}
      </StyledTransactionDetailsList>
    </StyledTransaction>
  );
}

//hallo hallo

const StyledTransaction = styled.li``;
const StyledTransactionDetailsList = styled.ul``;
const StyledTransactionDetailsWrapper = styled.div``;
const StyledDate = styled.li``;
const StyledCategory = styled.li``;
const StyledAmount = styled.li``;
const StyledDescription = styled.li``;
