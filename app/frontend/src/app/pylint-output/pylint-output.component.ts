import { Component, Input } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pylint-output',
  templateUrl: './pylint-output.component.html',
  styleUrls: ['./pylint-output.component.css']
})
export class PylintOutputComponent {
  @Input() response:any

  displayedColumns: string[] = ['message-id', 'message', 'type', 'line', 'column', 'endLine', 'endColumn']

  
}
