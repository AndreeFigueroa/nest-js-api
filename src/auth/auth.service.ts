import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async SignIn(
    email: string,
    passwordUser: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }
    if (user?.password !== passwordUser) {
      throw new UnauthorizedException();
    }
    if (user.role !== 'admin' && user.role !== 'client') {
      throw new UnauthorizedException('Role not valid');
    }

    const payload = {
      sub: user.id,
      username: user.email,
      name: user.name,
      role: user.role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
