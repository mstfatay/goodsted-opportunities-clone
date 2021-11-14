import { gql } from '@apollo/client';


const ALL_PROJECTS = gql`
    query allProjects($first: Int, $skip: Int, $filter: ProjectFilter, $orderBy: ProjectOrderBy) {
        allProjects(first: $first, skip: $skip, filter: $filter, orderBy: $orderBy) {
            id
            status
            expectedTimeForSupport
            skills {
                id
                name
            }
            requests{
                name
            }
            community {
                name
                profileImage
            }

            isDateFlexible
            isLocationRemote
            image
            name
            typeOfChallenge {
                name
                mainType {
                    name
                }
            }
            address
        }
        projectCount: _allProjectsMeta(filter: $filter) {
            count
        }
    }
`;


export default ALL_PROJECTS;