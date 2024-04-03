import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ns-microfrontend-child2',
  template: `<div>Child2!!!</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Child2Component {}