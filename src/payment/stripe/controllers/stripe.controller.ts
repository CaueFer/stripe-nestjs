import { Body, Controller, Post } from '@nestjs/common';
import { StripeService } from '../services/stripe.service';
import { StripeItemDto } from '../dto/stripe-item.dto';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('checkout')
  async createCheckoutSession(@Body() body: { items: StripeItemDto[] }) {
    try {
      const line_items = body.items.map((item) => ({
        price: item.price,
        quantity: item.quantity,
      }));

      const session =
        await this.stripeService.createCheckoutSession(line_items);
      return { id: session.id };
    } catch (error) {
      console.error('Error creating checkout session:', error);
      throw new Error('Failed to create checkout session');
    }
  }
}
