export const Role = {
    ADMIN: "ADMIN",
    USER: "USER",
} as const;

export type RoleType = typeof Role[keyof typeof Role];