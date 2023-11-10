import { Component, Input } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-pylint-output',
  templateUrl: './pylint-output.component.html',
  styleUrls: ['./pylint-output.component.css']
})
export class PylintOutputComponent {
  @Input() response:any

  displayedColumns: string[] = ['message-id', 'message', 'type', 'line', 'column', 'endLine', 'endColumn']
}
