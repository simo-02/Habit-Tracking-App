import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabitService } from '../habit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  habitForm: FormGroup;

  constructor(private fb: FormBuilder, private habitService: HabitService, private router: Router) {
    this.habitForm = this.fb.group({
      habitName: ['', Validators.required],
      habitDescription: ['', Validators.required],
    });
  }

  createHabit() {
    if (this.habitForm.valid) {
      const habitData = {
        name: this.habitForm.value.habitName,
        description: this.habitForm.value.habitDescription,
      };

      this.habitService.createHabit(habitData).subscribe(
        (response) => {
          console.log('Habit created successfully:', response);
          this.habitForm.reset();
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
