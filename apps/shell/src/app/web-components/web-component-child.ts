import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebComponentService } from './web-component.service'
import { FormsModule } from '@angular/forms'
@Component({
    standalone: true,
    providers: [WebComponentService],
    imports: [CommonModule, RouterModule, FormsModule],
    selector: 'ns-microfrontend-shell-web-child',
    template: `
        <div>
            <input [(ngModel)]="userInput" placeholder="Enter text" />
            <button (click)="saveString()">Save</button>
        </div>

        <div>
            <h1>Saved String:</h1>
            <p>{{ savedString }}</p>
        </div>
    `,
})
export class WebChildComponent{
    userInput = ''

    constructor(private dataService: WebComponentService) {
    }

    saveString(): void {
        console.log(this.userInput)
        this.dataService.savedString = this.userInput
        this.userInput = ''
    }

    get savedString(): string {
        return this.dataService.savedString
    }
}
