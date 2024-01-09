import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private apiUrl = 'http://localhost:8080/api/v1/habit';

  // Add a Subject to emit events when a new habit is added
  private newHabitSubject: Subject<void> = new Subject<void>();
  
  // Expose the Subject as an observable
  newHabitAdded$: Observable<void> = this.newHabitSubject.asObservable();

  constructor(private http: HttpClient) {}

  getHabits(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createHabit(habitData: any): Observable<any> {
    // Call the API to create a habit
    const createHabitObservable = this.http.post(this.apiUrl, habitData);

    // After creating the habit, notify observers about the new habit
    createHabitObservable.subscribe(() => {
      this.newHabitSubject.next();
    });

    return createHabitObservable;
  }

  // Your existing methods...

  updateHabit(id: number, updatedHabitData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, updatedHabitData);
  }

  deleteHabit(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  trackHabit(id: number, trackingData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}/track`;
    return this.http.post(url, trackingData);
  }
}
