import { Injectable, NotFoundException } from '@nestjs/common';
import { Note } from './notes.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  findAll(): Note[] {
    return this.notes;
  }

  create(note: Note): Note {
    note.id = uuidv4();
    this.notes.push(note);
    return note;
  }

  update(id: string, updatedNote: Note): Note {
    const noteIndex = this.notes.findIndex((note) => note.id === id);

    if (noteIndex === -1) {
      throw new NotFoundException(`Note with id ${id} not found`);
    }

    this.notes[noteIndex] = { ...this.notes[noteIndex], ...updatedNote };
    return this.notes[noteIndex];
  }

  delete(id: string): boolean {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    if (noteIndex > -1) {
      this.notes.splice(noteIndex, 1);
      return true;
    }
    return false;
  }
}
