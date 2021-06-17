import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  presentor!: string;
  date!: string;
  youtubeLink!: string | null;

  constructor() {}

  setValues(values: Prenentation) {
    this.presentor = values.presentor;
    this.date = values.date;
    this.youtubeLink = values.youtubeLink || null;
  }
}

export interface Prenentation {
  presentor: string;
  date: string;
  youtubeLink?: string;
}
