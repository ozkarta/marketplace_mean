import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {AppService} from '../../../service/app.service';
import {Router} from '@angular/router';
@Component({
	selector: 'app-user-navbar',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.style.css']
})

export class UserNavComponent implements OnInit {
	public user: any = null;
	constructor(private userService: UserService,
							private appService: AppService,
							private router: Router) {
	}

	ngOnInit() {
		this.appService.user.subscribe(
			user => {
				this.user = user;
			}
		);
	}
}