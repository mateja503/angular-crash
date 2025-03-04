import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/pages/about/about.component';

export const routes: Routes = [
    {path: '',component: TasksComponent},//lazy loading
    // {path: '', loadChildren:()=> import('./components/tasks/tasks.component').then((u)=>u.TasksComponent)},//lazy loading but i have to have TasksModule not component
    {path: 'about',component: AboutComponent},//eager loading

];
