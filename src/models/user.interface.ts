export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface State {
    users: User[];
    searchedUsers: User[];
    isUsersLoading: boolean;
    searchQuery: string[];
}
