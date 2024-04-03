import { Injectable } from '@angular/core'

@Injectable()
export class WebComponentService {
    private _savedString = ''

    set savedString(value: string) {
        this._savedString = value
    }

    get savedString(): string {
        return this._savedString
    }
}

