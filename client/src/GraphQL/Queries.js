import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query Query($oneNoteTodo: String) {
  allNotes {
    id
    todo
    status
  }
  allUsers {
    id
    email
  }
  oneNote(todo: $oneNoteTodo) {
    id
    todo
    status
  }
}
`;
