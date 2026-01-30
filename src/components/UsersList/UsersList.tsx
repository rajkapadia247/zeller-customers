import { USER_TYPES_LABEL_MAPPING } from "../../constants";
import type { User, RoleType } from "../../common/types";
import { UserDetails } from "../UserDetails/UserDetails";

interface UsersListProps {
    users: User[];
    role: RoleType;
}

const UsersList = ({users, role}: UsersListProps) => {
  return (
    <div>
      <h2 className="section-heading">{USER_TYPES_LABEL_MAPPING[role]} Users</h2>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UsersList;