import { Injectable } from '@nestjs/common';
import { Note } from './notes.model';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  findAll(): Note[] {
    return this.notes;
  }

  create(note: Note): Note {
    this.notes.push(note);
    return note;
  }

  update(id: string, updatedNote: Note): Note {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    if (noteIndex > -1) {
      this.notes[noteIndex] = updatedNote;
      return this.notes[noteIndex];
    }
    return null;
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
