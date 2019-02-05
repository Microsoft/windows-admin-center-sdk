import { Component } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AppContextService } from '@msft-sme/angular';

@Component({
    selector: 'sme-ng2-pipes',
    templateUrl: './dev-pipes.component.html'
})
export class DevPipesComponent {

    public links = [
        { href: 'boolean-converter', text: 'boolean-converter' },
        { href: 'byte-unit-converter', text: 'byte-unit-converter' },
        { href: 'enum-converter', text: 'enum-converter' },
        { href: 'format', text: 'format' },
        { href: 'highlight', text: 'highlight' },
        { href: 'yesno-converter', text: 'yesno-converter' }
    ];

    public static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string {
        return 'Pipes';
    }
}
