import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query Query {
  allUsers {
    id
    email
  }
}
`;

export const LOAD_NOTES = gql`
  query Query {
  getNotes {
    id
    todo
    status
  }
}
`;

export const FIND_NOTES = gql`
query Query($getNoteTodo: String) {
  getNote(todo: $getNoteTodo) {
    id
    todo
    status
  }
}
`;
