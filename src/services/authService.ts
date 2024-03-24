import {IAuth, ITokens, IUser} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {regData} from "../constants/regData";

const accessTokenKey = 'access';

const authService = {
    register(user: IAuth): void {
    // register(user: IAuth): IRes<IUser> {
    //     return apiService.post(urls.auth.register, user)
    // },

        localStorage.setItem('userRegister', JSON.stringify(user))
    },

    async login(user:IAuth):Promise<void>{
        // const {data} = await apiService.post(urls.auth.login,regData);
        // console.log("Login AuthService")
        // console.log(regData);
        const {data} = await apiService.post(urls.auth.login,user);
        this.setTokens(data)
    },

    me(account_id: number): IRes<IUser> {
        return apiService.get(urls.auth.me(account_id))
    },

    setTokens({access}: ITokens): void {
        localStorage.setItem(accessTokenKey, access)

    },
    getAccessToken(): string {
        return localStorage.getItem(accessTokenKey)
    },

    deleteTokens(): void {
        localStorage.removeItem(accessTokenKey)
    }
}

export {
    authService
}