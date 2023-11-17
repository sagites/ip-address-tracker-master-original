import { GraphQLClient, gql } from "graphql-request";

export const query = gql`
    query($ip: String!) {
        ipGeolocation(ip: $ip) {
          ip
          city
          country
          isp
          timezone
          location {
            lon
            lat
            }
        }
    }
`;

const endpoint = `https://ipgeolocation.abstractapi.com/v1/?api_key=bce1fb2ec45a47baa45360efdb3d0228&`;

export const client = new GraphQLClient(endpoint, {
    method: 'GET',
    jsonSerializer: {
        parse: JSON.parse,
        stringify: JSON.stringify,
      }
});


