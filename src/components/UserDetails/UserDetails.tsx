import { USER_TYPES_LABEL_MAPPING } from "../../constants";
import type { User } from "../../common/types";

type UserDetailsType = {
    user: User;
}
export const UserDetails = ({ user }: UserDetailsType) => {
  const initial = user.name.trim().charAt(0).toUpperCase();

  return (
    <div className="flex gap-4 py-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-primary text-tertiary" data-testid="user-initial" aria-hidden>{initial}</div>
      <div className="flex flex-col justify-between">
        <div>{user.name}</div>
        <div className="text-quaternary text-sm">{USER_TYPES_LABEL_MAPPING[user.role]}</div>
      </div>
    </div>
  );
};