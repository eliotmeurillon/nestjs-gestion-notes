import { Module, DynamicModule } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { MockNotesService } from './mock-notes.service';

@Module({})
export class NotesModule {
  static register(config: { useMock: boolean }): DynamicModule {
    return {
      module: NotesModule,
      controllers: [NotesController],
      providers: [
        {
          provide: NotesService,
          useClass: config.useMock ? MockNotesService : NotesService,
        },
      ],
    };
  }
}
