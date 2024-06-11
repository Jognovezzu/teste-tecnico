import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/config/jwt-token-secret-key.config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy/jwt.strategy';
import { LocalStrategy } from './local-auth/local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10h' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}
