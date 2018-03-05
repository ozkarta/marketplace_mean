import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(options): Observable<any> {
    return this.http.get(`api/v1/shared/categories`, {params: options})
      .map((res: any) => {
        return res;
      })
      .catch((error: Response|any) => {
        return Observable.throw(error);
      });
  }
}
