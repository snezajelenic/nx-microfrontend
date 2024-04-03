import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ModuleFederationToolsModule, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ModuleFederationToolsModule],
  selector: 'ns-microfrontend-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'shell';
  item: WebComponentWrapperOptions = {
    type: 'module',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    exposedModule: './mfe1',
    elementName: 'ns-microfrontend-order-child1'
  }

  props = {
    "message": "Hello from Shell"
  }

  events = {
    "clicked": (event: any) => {
      console.debug('clicked!', event);
    }
  }
}
