import { createApplication } from '@angular/platform-browser'
import { createCustomElement } from '@angular/elements'
import { ApplicationRef } from '@angular/core'
import { appConfig } from './app/app.config'
import { WebComponent } from './app/web-components/web.component'

createApplication(appConfig).then((app: ApplicationRef) => {
  const myWebComponent1 = createCustomElement(WebComponent, { injector: app.injector })
  customElements.define('ns-microfrontend-fe', myWebComponent1)
})