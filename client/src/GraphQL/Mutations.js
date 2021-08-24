import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation Mutation($userLoginEmail: String!) {
  userLogin(email: $userLoginEmail) {
    id
    email
  }
}
`;
