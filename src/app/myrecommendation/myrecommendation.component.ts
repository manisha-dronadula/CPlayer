import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { HttpClient } from '@angular/common/http';
import { Player } from '../model/player';
import { RecommendService } from '../services/recommend.service';
import { FavouriteService } from '../services/favorite.service';


@Component({
  selector: 'app-myrecommendation',
  templateUrl: './myrecommendation.component.html',
  styleUrls: ['./myrecommendation.component.css']
})


export class MyrecommendationComponent implements OnInit {
  constructor(private searchservice: SearchService, private service: RecommendService, private favouriteService: FavouriteService) { }

  player: Player = new Player();

  ngOnInit() { }
  searchForm = new FormGroup({
    searchbox: new FormControl('')
  })
  q: any;
  res: object[];

  search() {
    this.q = this.searchForm.get("searchbox").value;
    this.searchservice.getall(this.q).subscribe(data => {
      console.log(data);

      this.res = data["data"];
      // console.log(this.res)
    })
  }
  addRecommended(data): void {
    this.player.pid = data["pid"];
    this.player.fullName = data["fullName"];
    this.player.name = data["name"];
    this.player.userName = localStorage.getItem('id');

    console.log()
    // this.player.imageURL=data["imageURL"];
    // this.player.country=data["country"];
    this.service.addRecommended(this.player)
      .subscribe(data => console.log(data), error => console.log(error));
    this.player = new Player();
  }
  addFavourite(data): void {
    this.player.fullName = data["fullName"];
    this.player.name = data["name"];
    console.log()
    // this.player.imageURL=data["imageURL"];
    // this.player.country=data["country"];
    this.favouriteService.addFavourite(this.player)
      .subscribe(data => console.log(data), error => console.log(error));
    this.player = new Player();
  }


}



