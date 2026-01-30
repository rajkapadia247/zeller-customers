const LIST_ZELLER_CUSTOMERS = `query ListZellerCustomers {
  listZellerCustomers {
    items {
      email
      ids
      name
      role
    }
  }
}
`

export default LIST_ZELLER_CUSTOMERS;