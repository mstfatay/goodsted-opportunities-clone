import { gql } from '@apollo/client';


const GET_PROJECT = gql`
    query getProject($id: ID!) {
        Project(id: $id) {
            name
        }
    }
`;


export default GET_PROJECT;