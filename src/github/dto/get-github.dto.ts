import { IsNotEmpty, IsString } from "class-validator";



export class GetGithubDto {

    @IsNotEmpty()
    @IsString()
    repo_name: string;

    @IsNotEmpty()
    @IsString()
    sha: string;

}
