import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from '../../../../service/shared/category.service';
import {AppService} from '../../../../service/app.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-seller-business-profle',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.style.css']
})

export class ProfileComponent implements OnInit, OnDestroy {
  public test = 'test';
  public business: any = {
    businessCategories: []
  }
  constructor(private appService: AppService,
              public categoryService: CategoryService,
              private http: HttpClient) {

  }

  ngOnInit() {
    // this.searchCategories('');
  }

  ngOnDestroy() {
    this.appService.busyIndicatorSubscription.unsubscribe();
  }

  public searchCategories = (text: string): Observable<any> => {
    return this.categoryService.getCategories({categoryName: text, page: 0, size: 10})
      .map(res => {
        if (res && res.categories && res.categories.length) {
          console.log(res.categories.length);
          return res.categories.map(category => {
            return {
              value: category['_id'],
              display: category['categoryName']['en']
            };
          });
          // return res.categories;
        } else {
          return [];
        }
      });
  }

  // loadCategories(text: string, page?: number) {
  //   this.appService.busyIndicatorSubscription = this.categoryService.getCategories(null)
  //     .subscribe(
  //       success => {
  //         console.dir(success);
  //       },
  //       error => {
  //         console.dir(error);
  //       }
  //     );
  // }
}
