import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { ConfirmationMode } from '../../models/shared';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  files: any[] = [];
  showError = false;
  @ViewChild('fileDropRef', { static: false }) fileDropEl!: ElementRef;
  enumConfirmationMode = ConfirmationMode;

  protected unsubscribe = new Subject();

  constructor(
    public dialogRef: MatDialogRef<FileUploadComponent>,
    public dialog: MatDialog,

  ) { }

  formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  onFileDropped(files: any) {
    this.confirmation(files);
  }

  fileBrowseHandler(event: any) {
    this.confirmation(event.files[0]);
  }

  confirmation(file: File) {
    console.log(file);
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '550px';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    dialogRef.componentInstance.title = 'Confirm';
    dialogRef.componentInstance.mode = this.enumConfirmationMode.UPLOAD;
    dialogRef.componentInstance.message = `
    <p>Are you sure you want to upload the file ?
     </p>`;

    dialogRef.afterClosed().subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        this.dialogRef.close(file);
      }
    });

  }


  handleError(error: HttpErrorResponse) {
    console.log(error);
  }

}
