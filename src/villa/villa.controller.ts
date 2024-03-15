import {
	Controller,
	Post,
	Delete,
	Param,
	Body,
	Get,
	HttpCode,
	HttpStatus,
} from '@nestjs/common';
import { VillaService } from './villa.service';
import { VillaParamsDto } from './dto/viila-paramss.dto';
import { VillaDocument } from './villa.schema';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NoteResponseDto } from 'src/common/dto/notes/response/note-response.dto';
import { VillaResponseDto } from 'src/common/dto/villa/response/villa-response.dto';
import { VillaDto } from 'src/common/dto/villa/villa.dto';

@Controller('villa')
@ApiTags('Villa')
@ApiBearerAuth()
@Controller('villa')
export class VillaController {
	constructor(private readonly villaService: VillaService) {}

	@Post('/api/createVilla')
	@ApiOperation({ description: 'CreateVilla' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: VillaResponseDto })
	async createVilla(@Body() villaParams: VillaDto) {
		return this.villaService.createVilla(villaParams);
	}
	@Post('/api/updateVilla/:id')
	@ApiOperation({ description: 'UpdateNote' })
	@HttpCode(HttpStatus.OK)
	@ApiBearerAuth()
	async updateNote(@Param('id') id: string, @Body() villaParams: VillaDto) {
		// Combine id with noteParams
		villaParams.id = id;
		return this.villaService.updateVilla(villaParams);
	}
	@Get('/api/getAllVilla')
	@ApiOperation({ description: 'Get all villa' })
	@HttpCode(HttpStatus.OK)
	@ApiBearerAuth()
	async getAllVilla(): Promise<VillaDocument[]> {
		return this.villaService.getAllVilla();
	}

	@Delete('/api/deleteVilla/:id')
	@ApiOperation({ description: 'DeleteVilla' })
	@HttpCode(HttpStatus.OK)
	@ApiBearerAuth()
	deleteVilla(@Param('id') id: string) {
		this.villaService.deleteVilla(id);
	}
}
