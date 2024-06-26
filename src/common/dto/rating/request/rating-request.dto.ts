import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ratingDto } from '../rating.dto';

export class RatingRequestDto extends ratingDto {
	@ApiProperty()
	@Expose()
	rating: number;
}
