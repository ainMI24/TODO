import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query Query {
  allUsers {
    id
    email
  }
}
`;

export const FIND_NOTES = gql`
query Query($oneNoteTodo: String) {
  allNotes {
    id
    todo
    status
  }
  oneNote(todo: $oneNoteTodo) {
    id
    todo
    status
  }
}
`;
