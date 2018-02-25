import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../../service/user.service';
import {AppService} from '../../../../service/app.service';
@Component({
	selector: 'app-seller-navbar',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.style.css']
})

export class SellerNavComponent implements OnInit {
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

	logOut() {
		this.userService.logOut()
			.subscribe(
				success => {
					this.user = null;
					this.router.navigate(['/login']);
				},
				error => {
					console.dir(error);
				}
			);
	}
}