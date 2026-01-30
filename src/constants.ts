import type { RoleType } from "./common/types";

export const ROLES: Record<RoleType, RoleType> = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
}

export const USER_TYPES_LABEL_MAPPING = {
  [ROLES.ADMIN]: 'Admin',
  [ROLES.MANAGER]: 'Manager'
}

export const LABELS = {
  USER_TYPES: 'User Types',
  USERS: 'Users',
  ERROR_MESSAGE: 'Failed to load customers.',
  RETRY_BUTTON_TEXT: 'Try again'
}

export const DEFAULT_ROLE: RoleType = ROLES.ADMIN;