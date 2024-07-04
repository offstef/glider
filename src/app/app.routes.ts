import { Routes } from '@angular/router';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { MainComponent } from './main/main.component';
import { StartGraphComponent } from './graphs/start-graph/start-graph.component';
import { StartPageComponent } from './start-page/start-page.component';

export const routes: Routes = [
    {
        path:'cartera',
        component: MainComponent
    },
    {
        path: 'graficas',
        component: StartGraphComponent
    },
    {
        path: '',
        component: StartPageComponent
    },
];
