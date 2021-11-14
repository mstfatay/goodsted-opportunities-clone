import { InMemoryCache } from "@apollo/client";


const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allProjects: { //handles pagination of cards
            keyArgs: false,
            merge(existing = [], incoming){
              let projects = [];
              if(existing){
                projects = projects.concat(existing);
              }
              if(incoming){
                projects = projects.concat(incoming);
              }
              return projects;
            },
          }
        }
      }
    }
  });


export default cache;