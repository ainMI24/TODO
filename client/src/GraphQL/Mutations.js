import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation UserLoginMutation($userLoginEmail: String!) {
  userLogin(email: $userLoginEmail) {
    id
    email
  }
}
`;
