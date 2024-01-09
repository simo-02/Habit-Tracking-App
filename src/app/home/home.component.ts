import { Component } from '@angular/core';
import { HabitService } from '../habit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  newHabitName: string = '';
  newHabitDescription: string = '';

  constructor(private habitService: HabitService, private router: Router) {}

  createHabit() {
    if (this.newHabitName && this.newHabitDescription) {
      const habitData = {
        name: this.newHabitName,
        description: this.newHabitDescription,
      };

      this.habitService.createHabit(habitData).subscribe(
        (response) => {
          console.log('Habit created successfully:', response);
          this.newHabitName = '';
          this.newHabitDescription = '';
        },
        (error) => {
          console.error('Error creating habit:', error);
        }
      );
    } else {
      console.warn('Please enter both name and description for the habit.');
    }
  }

  
  navigateToHabits() {
    this.router.navigate(['/habits']);
  }
}
