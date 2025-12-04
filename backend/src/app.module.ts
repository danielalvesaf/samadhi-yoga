import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClassesModule } from './classes/classes.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, ClassesModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
