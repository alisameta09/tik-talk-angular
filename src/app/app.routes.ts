import { SearchPage } from './pages/search-page/search-page';
import { LoginPage } from './pages/login-page/login-page';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', component: SearchPage},
    {path: 'login', component: LoginPage}
];
