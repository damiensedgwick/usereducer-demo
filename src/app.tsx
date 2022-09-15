import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProfileCard = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 500px;
  padding: 1rem;
  margin: auto;
  border: 2px solid #14b8a6;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.5);
`;

export const App = () => {
  return (
    <Container>
      <ProfileCard>
        <h1 style={{ textAlign: "center" }}>Hello World</h1>
      </ProfileCard>
    </Container>
  );
};
