import { useReducer } from "react";

import avatar from "assets/bean.jpeg";
import { Container } from "components/container";
import { UserDetailsForm } from "components/user-details-form";
import { Avatar } from "components/avatar";
import { FormGroup } from "components/form-group";
import { Input } from "components/input";
import { Button } from "components/button";
import { ProfileCard } from "components/profile-card";
import { Data, handleFormInputChange } from "handlers/handle-form-input-change";

const initialState: Data = { firstName: "", lastName: "", email: "", phone: "" };

export const App = () => {
  const [state, dispatch] = useReducer(handleFormInputChange, initialState);

  return (
    <Container>
      <ProfileCard>
        <UserDetailsForm>
          <Avatar src={avatar} alt="the users avatar" />
          <FormGroup>
            <Input placeholder="First Name"
                   onChange={(e) => dispatch({ type: "UPDATE_FIRST_NAME", value: e.target.value })} />
            <Input placeholder="Last Name"
                   onChange={(e) => dispatch({ type: "UPDATE_LAST_NAME", value: e.target.value })} />
            <Input placeholder="Email" onChange={(e) => dispatch({ type: "UPDATE_EMAIL", value: e.target.value })} />
            <Input placeholder="Phone" onChange={(e) => dispatch({ type: "UPDATE_PHONE", value: e.target.value })} />
          </FormGroup>
          <Button type="button" onClick={() => console.log(state)}>Save</Button>
        </UserDetailsForm>
      </ProfileCard>
    </Container>
  );
};
