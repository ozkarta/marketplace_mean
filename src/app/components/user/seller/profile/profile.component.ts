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
  public registrationDateModel: any = {};
  public business: any = {
    businessCategories: []
  };
  public steps: any = {
    first: {
      active: true,
      next: 'second',
      previous: null,
      isValid: () => {
        return !this.business['businessCategories'].length;
      }
    },
    second: {
      active: false,
      next: 'third',
      previous: 'first',
      isValid: () => {
        return false;
      }
    },
    third: {
      active: false,
      previous: 'second',
      isValid: () => {
        return false;
      }
    }
  };

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

  moveToNext(current) {
    console.dir(this.business);
    if (this.steps[current].active) {
      this.steps[current].active = false;
    }

    if (this.steps[current].next) {
      this.steps[this.steps[current].next].active = true;
    }
  }

  moveToPrevious(current) {
    if (this.steps[current].active) {
      this.steps[current].active = false;
    }

    if (this.steps[current].previous) {
      this.steps[this.steps[current].previous].active = true;
    }
  }


}
