const LIST_ZELLER_CUSTOMERS = `query ListZellerCustomers {
  listZellerCustomers {
    items {
      email
      id
      name
      role
    }
  }
}
`

export default LIST_ZELLER_CUSTOMERS;