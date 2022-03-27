export interface IUser {
    name: string;
    avatar_url: string;
    twitter_username: string;
    public_repos: number;
    location: string;
    company: string;
    followers: number;
    following: number;
}

export interface IRepository {
    name: string;
    description: string;
    stars: number;
    forks: number;
    stargazers_count: number;
    language: string;
    updated_at: string;
}

export interface IStarred {
    id: number,
    node_id: string
    name: string
    full_name: string
    private: boolean,
}

