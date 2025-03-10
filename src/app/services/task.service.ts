import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';


  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{ // how to use observable
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<void> {
      const url = `${this.apiUrl}/${task.id}`;
      return this.http.delete<void>(url);

  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions)

  }
}
