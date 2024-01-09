import { Component, OnInit, OnDestroy } from '@angular/core';
import { HabitService } from '../habit.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css'],
})
export class HabitsComponent implements OnInit, OnDestroy {
  habitsFromApi: any[] = [];
  private newHabitSubscription: Subscription = new Subscription();

  constructor(private habitService: HabitService, private router: Router) {}

  ngOnInit() {
    this.fetchHabitsFromApi();
    this.newHabitSubscription = this.habitService.newHabitAdded$.subscribe(() => {
      this.fetchHabitsFromApi();
    });
  }

  ngOnDestroy() {
    this.newHabitSubscription.unsubscribe();
  }

  private fetchHabitsFromApi() {
    this.habitService.getHabits().subscribe(
      (habits) => {
        this.habitsFromApi = habits;
      },
      (error) => {
        console.error('Error fetching habits from API:', error);
      }
    );
  }

  
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
