export type Data = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export type Action =
  { type: "UPDATE_FIRST_NAME", value: string }
  | { type: "UPDATE_LAST_NAME", value: string }
  | { type: "UPDATE_EMAIL", value: string }
  | { type: "UPDATE_PHONE", value: string }

export const handleFormInputChange = (state: Data, action: Action) => {
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