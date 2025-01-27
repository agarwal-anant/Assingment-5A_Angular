import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    return response.ok ? await response.json() : []; // Ensure response is valid before parsing
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    return response.ok ? await response.json() : undefined; // Ensure response is valid before parsing
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
