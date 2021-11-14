import { gql } from "@apollo/client";

const FILTER_OPTIONS = gql`
query allFilterOptions($filter: SkillFilter) {
  allTypeOfChallenges {
    id
    name
  }
  allSkillLevels {
    id
    name
  }
  allCategories(orderBy: order_ASC) {
    id
    name: label
    color
    icon
    textColor
  }
  allSkills(orderBy: name_ASC, filter: $filter) {
    id: name
    name
  }
}
`;





export default FILTER_OPTIONS;