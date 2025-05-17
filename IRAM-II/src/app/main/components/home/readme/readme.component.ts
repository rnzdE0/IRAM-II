import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../module/material/material.module';

@Component({
  selector: 'app-readme',
  imports: [MaterialModule],
  standalone: true,
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss']
})
export class ReadmeComponent {


  constructor (
    public dialogRef: MatDialogRef<ReadmeComponent>,
  ) {}

   closeDialog(): void {
    this.dialogRef.close();
  }

}
