import { Routes } from '@angular/router';
import { Login } from './login/login';
import { OmrSettings } from './omr-settings/omr-settings';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'createomr', component: OmrSettings},
];
