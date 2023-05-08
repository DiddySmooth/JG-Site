import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'jg-site';
    tab
    constructor(private router: Router) { }
    async navigate(event) {
        await this.router.navigateByUrl("/", { skipLocationChange: true }).then(async t => await this.router.navigate([event]))

    }

}
