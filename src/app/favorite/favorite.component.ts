import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  total: object[];
  tracks: object[];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=10&api_key=e5c5108c0bc37d122700aa9b91a6e7fb&format=json').subscribe(data => {
      this.total = data as object[];
      this.tracks = this.total["tracks"]["track"] as object[];
    })
  }

}
