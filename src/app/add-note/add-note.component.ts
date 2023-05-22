import { Component } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  note: Note = { id: 0, title: '', content: '' };

  addNote(): void {
    const nextId = NOTES.length + 1;
    this.note.id = nextId;
    NOTES.push(this.note);
    this.note = { id: 0, title: '', content: '' };
  }
}
