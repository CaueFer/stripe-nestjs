import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class StripeItemDto {
  @IsNotEmpty()
  @IsString()
  price: string; 

  @IsNotEmpty()
  @IsNumber()
  quantity: number; 
}
