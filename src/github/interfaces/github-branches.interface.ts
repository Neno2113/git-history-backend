// Generated by https://quicktype.io

export interface BranchesResponse {
    name:      string;
    commit:    Commit;
    protected: boolean;
}

export interface Commit {
    sha: string;
    url: string;
}
