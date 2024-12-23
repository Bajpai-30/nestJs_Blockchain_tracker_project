import { ApiProperty } from '@nestjs/swagger';

export class Price {
  @ApiProperty({ example: 'ethereum' })
  chain: string;

  @ApiProperty({ example: 3000.5 })
  price: number;

  @ApiProperty({ example: '2024-01-01T00:00:00Z', format: 'date-time' })
  createdAt: string;
}
