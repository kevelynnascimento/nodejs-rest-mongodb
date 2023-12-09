import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserFindAllResponse } from '../dtos/responses/user-account-find-all.response';
import { JwtAuthGuard } from 'src/shared/auth/guards/jwt-auth.guard';
import { CurrentUserModel } from 'src/shared/auth/models/current-user.model';
import { CurrentUser } from 'src/shared/auth/decorators/current-user.decorator';
import { UserLoginRequest } from '../dtos/requests/access-user-login.request';
import { UserCreateRequest } from '../dtos/requests/access-user-create.request';

@Controller('access-users')
@ApiTags('access-users')
@ApiBearerAuth()
export class AccessUserController {
  constructor(private readonly accessUserService: UserService) { }

  @Post()
  public async create(@Body() request: UserCreateRequest): Promise<void> {
    await this.accessUserService.create(request);
  }

  @Post('login')
  public async login(@Body() request: UserLoginRequest): Promise<string> {
    const response = await this.accessUserService.login(request);
    return response;
  }

  @UseGuards(JwtAuthGuard)
  @Get('summary')
  public async getSummary(@CurrentUser() currentUser: CurrentUserModel): Promise<CurrentUserModel> {
    const summary = await this.accessUserService.getSummary(currentUser);
    return summary;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async findAll(): Promise<UserFindAllResponse[]> {
    const response = await this.accessUserService.findAll();
    return response;
  }
}