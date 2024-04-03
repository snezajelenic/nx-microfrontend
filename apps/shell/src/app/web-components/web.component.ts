import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebChildComponent } from './web-component-child'
@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, WebChildComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    selector: 'ns-microfrontend-shell-web',
    template: `
        <div>Angular Host Web component works!!!</div>
        This is child: <ns-microfrontend-shell-web-child></ns-microfrontend-shell-web-child>
    `,
})
export class WebComponent  {

}
