import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {AppService} from '../../../service/app.service';
@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.style.css']
})

export class RegisterComponent implements OnInit {

    constructor(private userService: UserService,
                public appService: AppService,
                private router: Router) {

    }

    ngOnInit() {

    }

    register() {

    }
}