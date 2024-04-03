/* eslint-disable @nx/enforce-module-boundaries */
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import {
  WebComponentWrapper, WebComponentWrapperOptions, startsWith
} from '@angular-architects/module-federation-tools';


export const appRoutes: Route[] = [
  // Loading one component from mfe
  // {
  //   path: 'order',
  //   loadComponent: () => import('order/Component').then((m) => {
  //     console.log(m)
  //     return m.Child1Component
  //   }),
  // },
  {
    path: 'order',
    loadChildren: () => import('order/Routes').then((m) => {
      return m.remoteRoutes
    }),
  },
  // {
  //   path: 'order',
  //   loadComponent: () => import('react/Loading').then((m) => {
  //     console.log(m.default)
  //     return m.Loading
  //   }),
  // },
  // {
  //   matcher: startsWith('order'),
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'module',
  //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //     exposedModule: './mfe1',
  //     elementName: 'ns-microfrontend-order'
  //   } as WebComponentWrapperOptions
  // }, 
  {
    path: 'web-component',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './mfe1',
      elementName: 'ns-microfrontend-order-child1'
    } as WebComponentWrapperOptions
  }, 
  {
    path: 'web-component2',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './mfe1',
      elementName: 'ns-microfrontend-order-child2'
    } as WebComponentWrapperOptions
  },  
  {
    path: 'react-component-first',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './react-component-first',
      elementName: 'react-component-first'
    } as WebComponentWrapperOptions
  }, 
  {
    path: 'react-component-second',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './react-component-second',
      elementName: 'react-component-second'
    } as WebComponentWrapperOptions
  },  
  {
    path: '',
    component: NxWelcomeComponent,
  }
];
