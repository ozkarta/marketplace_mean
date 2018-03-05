import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../service/shared/category.service';
import {AppService} from '../../../../service/app.service';
@Component({
  selector: 'app-seller-business-profle',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.style.css']
})

export class ProfileComponent implements OnInit {
  constructor(private appService: AppService,
              private categoryService: CategoryService) {

  }

  ngOnInit() {
    this.appService.busyIndicatorSubscription = this.categoryService.getCategories(null)
      .subscribe(
        success => {
          console.dir(success);
        },
        error => {
          console.dir(error);
        }
      );
  }
}
