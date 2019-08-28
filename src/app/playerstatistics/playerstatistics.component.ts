import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../model/player';
import { playerStatsService } from '../services/playerStats.service';

@Component({
  selector: 'app-playerstatistics',
  templateUrl: './playerstatistics.component.html',
  styleUrls: ['./playerstatistics.component.css']
})
export class PlayerstatisticsComponent implements OnInit {

  result: any;
  player:Player = new Player();


  constructor(private httpClient:HttpClient,private service :playerStatsService) {

   }

  ngOnInit() {
    this.httpClient.get('https://cricapi.com/api/playerStats?apikey=NmrikVuzYChb3nOBM5gFJbDS7os1&pid=35320').subscribe(data=>{
     // this.country=data as object[];
     this.result = data;
      console.log(this.result);
    })
  }
  addRecommended(data): void {
    this.player.fullName=data["fullName"];
    this.player.majorTeams=data["majorTeams"];
    this.player.imageURL=data["imageURL"];
    this.player.country=data["country"];

    this.service.addRecommended(this.player)
         .subscribe(data => console.log(data), error => console.log(error));
        this.player = new Player();
        }

}
