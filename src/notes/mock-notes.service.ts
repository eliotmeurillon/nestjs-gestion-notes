import { Injectable } from '@nestjs/common';
import { Note } from './notes.model';

@Injectable()
export class MockNotesService {
  private notes: Note[] = [
    {
      id: '1',
      title: 'Mock Note 1',
      content: 'This is a mock note',
    },
    {
      id: '2',
      title: 'Mock Note 2',
      content: 'This is another mock note',
    },
  ];

  findAll(): Note[] {
    return this.notes;
  }

  findOne(id: string): Note {
    return this.notes.find((note) => note.id === id);
  }

  create(note: Note): Note {
    this.notes.push(note);
    return note;
  }

  update(id: string, updatedNote: Note): Note {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    this.notes[noteIndex] = { ...this.notes[noteIndex], ...updatedNote };
    return this.notes[noteIndex];
  }

  delete(id: string): void {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
