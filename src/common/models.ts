export type PaginationQuery = {
    page?: number;
    limit?: number;
    keyword?: string;
};

export type LoginData = {
    username: string;
    password: string;
};

export type RestResponse = {
    status: 'success' | 'fail';
    data?: any;
    message?: string;
};

export type ImageFileType = {
    file?: any;
    url?: any;
    name?: string;
};

export type Category = {
    _id: string;
    name: string;
    created_at: Date;
};

export type Mode = {
    _id: string;
    name: string;
    created_at: Date;
};

export type Photo = {
    id: string;
    url: string;
};

export type Post = {
    _id: string;
    title: string;
    author?: string;
    photos?: Photo[];
    content: string;
    category: string;
    mode: string;
    views: number;
    created_at: Date;
};

export type UserData = {
    _id: string;
    name: string;
    avatar?: Photo;
    email?: string;
    username: string;
    cv: string;
};

export type Subscriber = {
    _id: string;
    email: string;
    created_at: Date;
};
