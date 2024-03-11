import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { Note } from './notes.model';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  findAll(): Note[] {
    return this.notesService.findAll();
  }

  @Post()
  create(@Body() note: Note): Note {
    const errorMessage = [];

    if (!note.title) {
      errorMessage.push('title is required');
    }

    if (!note.content) {
      errorMessage.push('content is required');
    }

    if (errorMessage.length > 0) {
      throw new BadRequestException(errorMessage.join(', '));
    }

    return this.notesService.create(note);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedNote: Note): Note {
    return this.notesService.update(id, updatedNote);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.notesService.delete(id);
  }
}
