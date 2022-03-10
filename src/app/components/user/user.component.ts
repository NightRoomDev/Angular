import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    users: any[] = [];

    constructor(public userService: UserService) {
        
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe((res: any) => {
            this.users = res;
        })
    }

}