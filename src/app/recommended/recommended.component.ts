import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../model/player';
import { UnrecommendService } from '../services/unrecommend.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  result: any;
  player: Player = new Player();
  constructor(private httpClient: HttpClient, private unrecommendService: UnrecommendService) { }
  id = localStorage.getItem("id");
  ngOnInit() {
    this.httpClient.get('http://localhost:8000/cricapi/displayRecommend/'+this.id)
      .subscribe(data => {
        // this.country=data as object[];
        this.result = data;
        console.log(this.result);
      })
  }
  unrecommend(id) {
    this.unrecommendService.deleteUser(id).subscribe(data => {
      alert("recommendation deleted successfully");
      console.log(data);
    })
  }


}
