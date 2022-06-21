import { Business } from './business';

export interface User{
    username: string,
    password: string,
    typeOfUser: string,
    AttachedBusiness?: Business
}