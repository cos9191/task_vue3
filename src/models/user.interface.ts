export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
}

export interface State {
    users: User[];
    searchedUsers: User[];
    isUsersLoading: boolean;
    searchQuery: string[];
}
