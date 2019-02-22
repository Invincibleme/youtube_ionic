import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public id:any;

  constructor(private http: HttpClient) { }

  url = "https://www.googleapis.com/youtube/v3/videos?part=id,snippet&chart=mostPopular&regionCode=IN&maxResults=15&key=AIzaSyCfarzsxyil-y4ZFOO0xql-uOiwnIj4N9Q";

  urlCat = "https://www.googleapis.com/youtube/v3/videoCategories?part=id,snippet&regionCode=IN&key=AIzaSyCfarzsxyil-y4ZFOO0xql-uOiwnIj4N9Q"

  // urlCatVideos = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId="+ id+"&key=AIzaSyCfarzsxyil-y4ZFOO0xql-uOiwnIj4N9Q";

  getVideos(): Observable<any> {
    return this.http.get(this.url);
  }

  getCat(): Observable<any> {
    return this.http.get(this.urlCat);
  }

  categoryList(id): Observable<any> {
    return this.http.get(
   "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId="+ id+ "&maxResults=15&key=AIzaSyCfarzsxyil-y4ZFOO0xql-uOiwnIj4N9Q"
    );
  }
}
