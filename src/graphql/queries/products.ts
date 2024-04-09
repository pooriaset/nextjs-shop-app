import { gql } from '@apollo/client';

/**
 * Fetch Woocommerce products from GraphQL
 */
export const GET_ALL_VARIABLE_PRODUCTS_QUERY = gql`
  query GetAllVariableProducts(
    $stockStatus: [StockStatusEnum]
    $field: ProductsOrderByEnum!
    $order: OrderEnum
  ) {
    products(
      first: 10
      where: {
        stockStatus: $stockStatus
        orderby: { field: $field, order: $order }
      }
    ) {
      pageInfo {
        total
        hasNextPage
        hasPreviousPage
      }
      nodes {
        __typename
        ... on VariableProduct {
          databaseId
          name
          onSale
          type
          averageRating
          slug
          image {
            sourceUrl
          }
          price
          regularPrice
          salePrice
          variations {
            nodes {
              price
              regularPrice
              salePrice
            }
          }
        }
      }
    }
  }
`;