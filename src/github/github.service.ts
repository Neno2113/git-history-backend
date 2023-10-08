import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { BranchesResponse } from './interfaces/github-branches.interface';
import { CommitsResponse } from './interfaces/github-commit.interface';

@Injectable()
export class GithubService {


  constructor( 
    private readonly http: AxiosAdapter
  ){}



  async findAllBranches(repo_name: string) {
    const data = await this.http.get<BranchesResponse>(`https://api.github.com/repos/Neno2113/${repo_name}/branches`);
    return data;
  }

  async findAllCommits(repo_name: string, sha: string) {
    const data =  await this.http.get<CommitsResponse[]>(`https://api.github.com/repos/Neno2113/${repo_name}/commits?per_page=100&sha=${sha}`);
    if( data.length === 1 )
      return data

    return data.slice(0, -1);
  }



}
