import type {AccessTokenResponse} from "@/models/response/AccessTokenResponse.ts";
import type {RoleType} from "@/enums";

export interface AuthenticationResponse extends AccessTokenResponse {
    fullName: string;
    firstName: string;
    lastName: string;
    role: RoleType
}