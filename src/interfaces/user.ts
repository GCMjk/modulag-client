export interface IUser {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
}

export interface ILogIn {
    identifier: IUser['email'];
    password: IUser['password'];
}