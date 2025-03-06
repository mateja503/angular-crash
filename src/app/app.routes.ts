import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/pages/about/about.component';

export const routes: Routes = [
    {path: '',component: TasksComponent},//eager loading
    {path: 'about',loadComponent:()=>import('./components/pages/about/about.component').then((c)=>c.AboutComponent)},//lazy loading
    // {path: 'about',component: AboutComponent},//eager loading




];
