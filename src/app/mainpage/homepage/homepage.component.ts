import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  images: String[];
  clients: String[];

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '90%',
      'z-index': '5', 
      'top': '5em',
      'left': 0,
      'right': 0,
      'bottom': 0
    };

    
        this.images = [1, 2, 3].map(() => `https://picsum.photos/1900/500?random&t=${Math.random()}`);  
    
        this.clients = [0,1,2,3,4,5,6,7,8,9].map(() => `https://picsum.photos/150/150?random&t=${Math.random()}`);

  }
}