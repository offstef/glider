import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StartGraphComponent } from './graphs/start-graph/start-graph.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {
        path:'cartera',
        component: MainComponent
    },
    {
        path: 'graficas',
        component: StartGraphComponent,
    },
    {
        path: '',
        component: StartPageComponent
    },
    {
        path: 'perfiles',
        component: ProfileComponent,
        // cambiar los children por los componentes de los perfiles
        children: [
            {
                path: 'crear-perfil',
                component: ProfileComponent
            },
            {
                path: 'borrar-perfil',
                component: ProfileComponent
            },
            {
                path: 'perfiles',
                component: ProfileComponent
            }
        ]
    },
    {
        path: '**',
        component: ErrorComponent
    },
];
