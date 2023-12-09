import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CurrentUserModel } from '../models/current-user.model';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) { }

  public async generateToken(payload: CurrentUserModel): Promise<string> {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
