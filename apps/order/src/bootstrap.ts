import { createApplication } from '@angular/platform-browser'
import { createCustomElement } from '@angular/elements'
import { ApplicationRef } from '@angular/core'
import { appConfig } from './app/app.config'
import { Child2Component } from './app/child-routes/child2.component'
import { Child1Component } from './app/child-routes/child1.component'

createApplication(appConfig).then((app: ApplicationRef) => {
  const myWebComponent2 = createCustomElement(Child1Component, { injector: app.injector })
  customElements.define('ns-microfrontend-order-child1', myWebComponent2)

  const myWebComponent = createCustomElement(Child2Component, { injector: app.injector })
  customElements.define('ns-microfrontend-order-child2', myWebComponent)
})