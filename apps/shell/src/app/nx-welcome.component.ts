import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core'
import { CommonModule } from '@angular/common'
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapperOptions, ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
@Component({
    selector: 'ns-microfrontend-nx-welcome',
    standalone: true,
    imports: [CommonModule, ModuleFederationToolsModule],
    template: `
        <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
        <style>
            .wrapper {
                width: 100%;
            }
            .container {
                margin-left: auto;
                margin-right: auto;
                max-width: 768px;
                padding-bottom: 3rem;
                padding-left: 1rem;
                padding-right: 1rem;
                color: rgba(55, 65, 81, 1);
                width: 100%;
            }
            #welcome {
                margin-top: 2.5rem;
            }
            #welcome h1 {
                font-size: 3rem;
                font-weight: 500;
                letter-spacing: -0.025em;
                line-height: 1;
            }
            #welcome span {
                display: block;
                font-size: 1.875rem;
                font-weight: 300;
                line-height: 2.25rem;
                margin-bottom: 0.5rem;
            }
            #welcome p {
                display: block;
                font-size: 1.125rem;
                font-weight: 300;
                line-height: 2.25rem;
                margin-bottom: 0.5rem;
                letter-spacing: 0.063rem;
            }
        </style>
        <div class="wrapper">
            <div class="container">
                <div id="welcome">
                    <h1>
                        <span>Hello there,</span>
                        Welcome to shell 👋
                        <p>[ This is <b>host</b> application ]</p>
                    </h1>
                </div>
            </div>
            <div #placeHolder></div>
        </div>
    `,
    styles: [],
    encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
    // @ViewChild('placeHolder', { read: ViewContainerRef })
    // viewContainer!: ViewContainerRef;
  
    // async ngOnInit(): Promise<void> {
    //   const m = await import('react/Loading');
    //   console.log(m)
    //   this.viewContainer.createComponent(m.Loading);
    // }
}
