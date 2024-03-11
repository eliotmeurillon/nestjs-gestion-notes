import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
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
