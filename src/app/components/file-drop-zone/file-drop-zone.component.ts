import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-drop-zone',
  templateUrl: './file-drop-zone.component.html',
  styleUrls: ['./file-drop-zone.component.css']
})
export class FileDropZoneComponent implements OnInit {
  @Input() maxFiles: number;
  @Input() mimeType: string;
  @Input() prompt: string = 'Add a file';
  @Output() fileAdded: EventEmitter<FileList> = new EventEmitter<FileList>();

  constructor() { }

  ngOnInit(): void {
  }

  isValid(files: FileList): Boolean {
    try {
      if (this.maxFiles) this.validNumFiles(files);
      if (this.mimeType) this.validMimeType(files);
    } catch (err) {
      // TODO: Fire an alert.
      console.log(err.message);
      return false;
    }
    return true;
  }

  onDropFile(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files) {
      if (this.isValid(event.dataTransfer.files)) {
        this.fileAdded.emit(event.dataTransfer.files);
      }
    }
  }

  onFileUpload(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    const files = element.files;
    if (files) {
      if (this.isValid(files)) {
        this.fileAdded.emit(files);
      }
    }
  }

  validMimeType(files: FileList): void {
    const pattern = new RegExp(this.mimeType);
    for (let i = 0; i < files.length; i++) {
      const matches = files[i].type.match(pattern);
      if (!matches) {
        throw new Error(`Error:\tMime Type(s): ${this.mimeType}\tFile Type: ${files[i].type}`);
      }
    }
  }

  validNumFiles(files: FileList): void {
    if (files.length > this.maxFiles) {
      throw new Error(`Error:\tMax files: ${this.maxFiles}\tNum files: ${files.length}`);
    }
  }
}
