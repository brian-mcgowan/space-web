import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageRenderService {

  constructor() { }

  read(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      }

      reader.readAsDataURL(file);
    });
  }
}
