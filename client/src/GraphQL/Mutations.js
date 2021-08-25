import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation Mutation($userLoginEMail: String!) {
  userLogin(eMail: $userLoginEMail) {
    id
    email
  }
}
`;
