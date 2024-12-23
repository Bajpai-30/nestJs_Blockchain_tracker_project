import { ApiProperty } from '@nestjs/swagger';

export class Alert {
  @ApiProperty({ example: 'ethereum' })
  chain: string;

  @ApiProperty({ example: 2500 })
  targetPrice: number;

  @ApiProperty({ example: 'user@example.com' })
  email: string;
}
