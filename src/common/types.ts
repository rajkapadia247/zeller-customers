export type RoleType = 'ADMIN' | 'MANAGER';

export type User = {
  email: string;
  id: string;
  name: string;
  role: RoleType;
}

export type ListZellerCustomersResponse = {
  listZellerCustomers: {
    items: User[];
  }
}