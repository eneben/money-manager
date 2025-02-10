import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <MainContainer>{children}</MainContainer>

      <StyledHeader>
        <StyledTopHeadline>Money Manager</StyledTopHeadline>
      </StyledHeader>
    </>
  );
}

const MainContainer = styled.main`
  margin: 0 auto;
  padding: 100px 1rem 3rem;
  background-color: var(--background-color);
  min-height: 100vh;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100px;
  background-color: var(--primary-dark);
`;

const StyledTopHeadline = styled.h1`
  color: var(--background-color);
`;
