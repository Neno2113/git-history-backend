import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [GithubController],
  providers: [GithubService],
  imports: [ 
    CommonModule
  ]
})
export class GithubModule {}
