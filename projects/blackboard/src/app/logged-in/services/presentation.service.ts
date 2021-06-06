import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  presentor!: string;
  date!: string;
  youtubeLink!: string;

  constructor() {}

  setValues(values: any) {
    this.presentor = values.presentor;
    this.date = values.date;
    this.youtubeLink = values.youtubeLink;
  }
}
