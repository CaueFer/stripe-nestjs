import { Module } from '@nestjs/common';
import { StripeModule } from './payment/stripe/stripe.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StripeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
