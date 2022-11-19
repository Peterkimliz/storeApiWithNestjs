import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ShopModule } from './shop/shop.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    AuthModule,UserModule,ProductModule,ShopModule,PrismaModule
  ],
})
export class AppModule {}
