import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
@Component({
    standalone: true,
    imports: [CommonModule, RouterModule],
    selector: 'ns-microfrontend-order-entry',
    template: `
        <div>
            <a routerLink="child1">Child 1</a>
            <a routerLink="child2">Child 2</a>
        </div>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
})
export class RemoteEntryComponent {}
