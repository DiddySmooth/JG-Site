import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'jg-site';
    tab
    users
    constructor(private router: Router, private userService: UserService) { }
    async navigate(event) {
        await this.router.navigateByUrl("/", { skipLocationChange: true }).then(async t => await this.router.navigate([event]))

    }

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe((s => {
            console.log(s.users)
            this.users = s.users
        }))
    }
    handleUserSelect(user){
        localStorage.setItem("user", user.id);
    }
}
