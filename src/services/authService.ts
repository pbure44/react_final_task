import {IAuth, ITokens, IUser} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {
    register(user: IAuth): IRes<IUser> {
        return apiService.post(urls.auth.register, user)
    },
    me(account_id: number): IRes<IUser> {
        return apiService.get(urls.auth.me(account_id))
    },

    setTokens({access, refresh}: ITokens): void {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },
    getAccessToken(): string {
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken(): string {
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens(): void {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
}