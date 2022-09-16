import styled from "styled-components";
// @ts-ignore
import avatar from "./bean.jpeg";

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

const UserDetailsForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Avatar = styled.img`
  width: 125px;
  height: 125px;
  margin: 0 auto;
  border: 2px solid #14b8a6;
  border-radius: 50%;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`;

const FormGroup = styled.div`
  width: 100%;
  height: 100%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Input = styled.input`
  padding: 5px 0;
  color: #475569;
  border: none;
  border-bottom: 2px solid #64748b;

  &:active, &:focus {
    border: none;
    border-bottom: 2px solid #14b8a6;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 10px;
  margin: 0 auto;
  color: #ffffff;
  background: #14b8a6;
  border: 2px solid #14b8a6;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transition: 250ms ease-in-out;
  
  &:hover, &:active, &:focus {
    transition: 250ms ease-in-out;
    transform: scale(1.1);
    outline: none;
  }
`;

export const App = () => {
  return (
    <Container>
      <ProfileCard>
        <UserDetailsForm>
          <Avatar src={avatar} alt="the users avatar" />
          <FormGroup>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
          </FormGroup>
          <Button type="button">Save</Button>
        </UserDetailsForm>
      </ProfileCard>
    </Container>
  );
};
