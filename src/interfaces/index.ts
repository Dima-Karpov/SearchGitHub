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

export interface IStarredRepository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
}

export interface IHeaders {
    cache_control: string;
    content_length: string;
    content_type: string;
    etag: string;
    link: string;
    x_github_media_type: string;
    x_github_request_id: string;
    x_ratelimit_limit: string;
    x_ratelimit_remaining: string;
    x_ratelimit_reset: string;
    x_ratelimit_resource: string;
    x_ratelimit_used: string;
}

