import clsx from "clsx";
import type { RoleType } from "../../common/types";
import {
  LABELS,
  ROLES,
  USER_TYPES_LABEL_MAPPING,
} from "../../constants";

const ROLE_VALUES: RoleType[] = Object.values(ROLES);

type RoleSelectorProps = {
  selectedRole: RoleType;
  setSelectedRole: (role: RoleType) => void;
};

const RoleSelector = ({ selectedRole, setSelectedRole }: RoleSelectorProps) => {
  return (
    <fieldset>
      <legend id="role-legend" className="section-heading">{LABELS.USER_TYPES}</legend>
      {ROLE_VALUES.map((value) => {
        const id = `role-${value}`;
        const isChecked = selectedRole === value;
        return (
          <label
            htmlFor={id}
            key={id}
            className={clsx("rounded-md p-3 flex gap-2 cursor-pointer", isChecked && "bg-primary")}
          >
            <input type="radio" name="role" id={id} value={value} checked={isChecked} onChange={() => setSelectedRole(value)} />
            <span>{USER_TYPES_LABEL_MAPPING[value]}</span>
          </label>
        );
      })}
    </fieldset>
  );
};

export default RoleSelector;