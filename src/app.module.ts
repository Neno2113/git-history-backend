import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GithubModule } from './github/github.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CommonModule, 
    GithubModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
