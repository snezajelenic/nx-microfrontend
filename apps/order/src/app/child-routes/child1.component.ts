import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'ns-microfrontend-child1',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    template: `
        <div>Child1!!!</div>
        <p *ngIf="message">
            <a (click)="clicked.emit(message)">{{ message }}</a>
        </p>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1Component implements OnInit {
    @Input() message!: string
    @Output() clicked = new EventEmitter<string>()

    ngOnInit(): void {
        console.log(this.message)
        setTimeout(() => {
            this.clicked.emit('test')
        }, 3000)
    }
}
