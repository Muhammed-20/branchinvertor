import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getPexelsVideo() {
  return  this.http.get('https://api.pexels.com/videos/videos/2908575', {
    headers: {
      Authorization: '563492ad6f917000010000015bb4fb7514524507b2a217cd0d1f9f6c',
      
    }
  })
  }
}
