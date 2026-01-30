import { useQuery } from "graphql-hooks";
import LIST_ZELLER_CUSTOMERS from "../../queries/listZellerCustomers";
import { useMemo, useState } from "react";
import type { ListZellerCustomersResponse, User, RoleType } from "../../common/types";
import { DEFAULT_ROLE } from "../../constants";
import UsersList from "../UsersList/UsersList";
import RoleSelector from "../RoleSelector/RoleSelector";
import PageSkeletonLoader from "../PageSkeletonLoader/PageSkeletonLoader";
import ErrorContainer from "../ErrorContainer/ErrorContainer";

const ZellerCustomers = () => {
  const { data, loading, error, refetch } = useQuery<ListZellerCustomersResponse>(LIST_ZELLER_CUSTOMERS);
  const [selectedRole, setSelectedRole] = useState<RoleType>(DEFAULT_ROLE);
  const filteredUsers: User[] = useMemo(() => {
    return data?.listZellerCustomers?.items?.filter((user) => user.role === selectedRole) || [];
  }, [data, selectedRole]);

  if (loading) {
    return <PageSkeletonLoader />;
  }

  if (error) {
    return <ErrorContainer handleRetry={refetch} />;
  }

  return (
    <>
      <RoleSelector setSelectedRole={setSelectedRole} selectedRole={selectedRole} />
      <UsersList users={filteredUsers} role={selectedRole} />
    </>
  )
}

export default ZellerCustomers;