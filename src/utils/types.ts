export type StepsTypes = {
    name: string;
    component: JSX.Element;
}[];

export type UserTypes = {
    email: string;
    password: string;
    confirmPassword?: string
    userID: string
};

export type UserInput = {
    user: UserTypes;
    setUser: React.Dispatch<
        React.SetStateAction<UserTypes>
    >;
    setPosition: React.Dispatch<React.SetStateAction<number>>;
    position: number;
};
export type PinType = string