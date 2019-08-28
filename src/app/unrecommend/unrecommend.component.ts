import { Component, OnInit } from '@angular/core';
import { UnrecommendService } from '../services/unrecommend.service';

@Component({
  selector: 'app-unrecommend',
  templateUrl: './unrecommend.component.html',
  styleUrls: ['./unrecommend.component.css']
})
export class UnrecommendComponent implements OnInit {

  constructor(private unrecommendService:UnrecommendService) { }

  ngOnInit() {
  }
  // unrecommend(id){
  //   this.unrecommendService.deleteUser(id).subscribe(data => {
  //     alert("recommendation deleted successfully");
  //   console.log(data);
  //   })
  //  }

}
