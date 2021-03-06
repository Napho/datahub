import gql from 'graphql-tag';

export const GVNMT_QUERY = gql`
query GvmtFinance($id: String!) {
  governmentFinance(id: $id) {
    startYear,
    currencyCode,
    currencyUSD,
    expenditure {
      uid,
      year,
      levels,
      color,
      budget_type,
      value,
      value_ncu
    },
    revenueAndGrants {
      uid,
      year,
      levels,
      color,
      budget_type,
      value,
      value_ncu
    },
    finance {
      uid,
      color,
      year,
      levels,
      budget_type,
      value,
      value_ncu
    },
  }
}`;
