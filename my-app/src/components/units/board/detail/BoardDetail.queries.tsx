import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        _id
        writer
        title
        contents
    }
`;

export const DELETE_BOARD = gql`
    mutation DelteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId)
    }
`;
