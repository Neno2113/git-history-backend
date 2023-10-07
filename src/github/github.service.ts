import { Injectable } from '@nestjs/common';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { BranchesResponse } from './interfaces/github-branches.interface';

@Injectable()
export class GithubService {

  constructor( 
    private readonly http: AxiosAdapter
  ){

  }



  create(createGithubDto: CreateGithubDto) {
    return 'This action adds a new github';
  }

  async findAll() {
    const data = await this.http.get<BranchesResponse>('https://api.github.com/repos/Neno2113/git-history/branches');

    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} github`;
  }

  update(id: number, updateGithubDto: UpdateGithubDto) {
    return `This action updates a #${id} github`;
  }

  remove(id: number) {
    return `This action removes a #${id} github`;
  }
}
