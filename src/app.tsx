import { useReducer } from "react";
import styled from "styled-components";

// @ts-ignore
import avatar from "./bean.jpeg";

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

type Action =
  { type: "UPDATE_FIRST_NAME", value: string }
  | { type: "UPDATE_LAST_NAME", value: string }
  | { type: "UPDATE_EMAIL", value: string }
  | { type: "UPDATE_PHONE", value: string }

const initialState: Data = { firstName: "", lastName: "", email: "", phone: "" };

const handleFormInputChange = (state: Data, action: Action) => {
  switch (action.type) {
    case "UPDATE_FIRST_NAME":
      return { ...state, firstName: action.value };
    case "UPDATE_LAST_NAME":
      return { ...state, lastName: action.value };
    case "UPDATE_EMAIL":
      return { ...state, email: action.value };
    case "UPDATE_PHONE":
      return { ...state, phone: action.value };
    default:
      throw new Error("Unhandled form input action");
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(handleFormInputChange, initialState);

  return (
    <Container>
      <ProfileCard>
        <UserDetailsForm>
          <Avatar src={avatar} alt="the users avatar" />
          <FormGroup>
            <Input placeholder="First Name" onChange={(e) => dispatch({ type: "UPDATE_FIRST_NAME", value: e.target.value })} />
            <Input placeholder="Last Name" onChange={(e) => dispatch({ type: "UPDATE_LAST_NAME", value: e.target.value })} />
            <Input placeholder="Email" onChange={(e) => dispatch({ type: "UPDATE_EMAIL", value: e.target.value })} />
            <Input placeholder="Phone" onChange={(e) => dispatch({ type: "UPDATE_PHONE", value: e.target.value })} />
          </FormGroup>
          <Button type="button" onClick={() => console.log(state)}>Save</Button>
        </UserDetailsForm>
      </ProfileCard>
    </Container>
  );
};

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
