import { gql } from "@apollo/client";

export const SELLER_LIST = gql(`query {
   sellers {
      data {
        id,
        attributes {
          name,
          address,
          contactNumber,
          TINNo,
          details
        }
      }
    }
}`);
