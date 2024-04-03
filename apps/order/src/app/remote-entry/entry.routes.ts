import { Route } from "@angular/router";
import { Child1Component } from "../child-routes/child1.component";
import { Child2Component } from "../child-routes/child2.component";
import { RemoteEntryComponent } from "./entry.component";

export const remoteRoutes: Route[] = [
    {
        path: '',
        component: RemoteEntryComponent,
        children: [
            { path: 'child1', component: Child1Component},
            { path: 'child2', component: Child2Component},
        ],
    },
]
