import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
import { Store } from './store/entities/store.entity';
import { PricingsModule } from './pricings/pricings.module';
import { Pricing } from './pricings/entities/pricing.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'pricing',
      entities: [User, Store, Pricing],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    AuthModule,
    StoreModule,
    PricingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
