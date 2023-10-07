import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { GithubModule } from './github/github.module';

@Module({
  imports: [CommonModule, GithubModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
