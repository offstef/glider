import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaticModule } from './static/static.module';
import { MainModule } from './main/main.module';
import { StartPageComponent } from './start-page/start-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StaticModule, MainModule, StartPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
