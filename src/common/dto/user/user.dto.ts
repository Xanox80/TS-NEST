import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
	@ApiProperty({ example: 'Bogdan' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	username: string;

	@ApiProperty({ example: '11111111' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	password: string;

	@ApiProperty()
	@Expose()
	access_token: string;

	@ApiProperty()
	@Expose()
	refresh_token: string;

	@ApiPropertyOptional()
	@Expose()
	g_id?: string;
}
