import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import { GetGithubDto } from './dto/get-github.dto';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}


  @Get(':repo_name?')
  findAllBranches(@Param('repo_name') repo_name: string = 'git-history') {
    
    return this.githubService.findAllBranches( repo_name );
  }

  @Get('/commits/:repo_name/:sha')
  findAllCommits(@Param() params:GetGithubDto ) {
    
    if (!params.repo_name || !params.sha) {
      throw new BadRequestException('Both params "repo_name" and "sha" are required.');
    }

    return this.githubService.findAllCommits(params.repo_name, params.sha);
  }

 

}
