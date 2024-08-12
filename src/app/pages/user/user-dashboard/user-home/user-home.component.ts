import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {
  studentName!: string;
  todayDate!: Date;

  upcomingDeadlines = [
    { name: 'Assignment 1', dueDate: new Date('2024-08-15'), progress: 70 },
    { name: 'Quiz 3', dueDate: new Date('2024-08-18'), progress: 40 },
    { name: 'Project Submission', dueDate: new Date('2024-08-25'), progress: 50 },
  ];

  recentActivities = [
    { description: 'Submitted Quiz 2', date: new Date('2024-08-10T10:30:00') },
    { description: 'Viewed Lecture 5: Data Structures', date: new Date('2024-08-09T16:45:00') },
    { description: 'Downloaded Resource: Algorithms Notes', date: new Date('2024-08-08T14:20:00') },
  ];

  announcements = [
    { title: 'New Assignment Released', content: 'Check out the new assignment on algorithms.', date: new Date('2024-08-12') },
    { title: 'Quiz 3 on August 18', content: 'Prepare for the upcoming quiz on Data Structures.', date: new Date('2024-08-10') },
    { title: 'Project Submission Deadline', content: 'Don\'t forget to submit your project by August 25.', date: new Date('2024-08-09') },
  ];

  courses = [
    { name: 'Data Structures', progress: 75 },
    { name: 'Algorithms', progress: 50 },
    { name: 'Database Systems', progress: 85 },
  ];

  constructor() { }

  ngOnInit(): void {
    this.studentName = 'John Doe';
    this.todayDate = new Date();
  }

  print(): void {
    window.print();
  }
}
