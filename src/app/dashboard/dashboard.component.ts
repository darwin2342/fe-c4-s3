import { Component } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  searchText: string = '';
  notes: Note[] = NOTES;
  filteredNotes: Note[] = NOTES;

  searchNote() {
    if (this.searchText.trim() !== '') {
      this.filteredNotes = this.notes.filter(note =>
        note.title.toLowerCase().includes(this.searchText.trim().toLowerCase())
      );
    } else {
      this.filteredNotes = this.notes;
    }
  }
}
