import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'mountain.jpeg',
      username: 'mountainLover',
      content: 'Here is a picture of a snowy mountain'
    },
    {
      title: 'Mounting Biking',
      imageUrl: 'biking.jpeg',
      username: 'bikingGeeks',
      content: 'I did some biking today'
    }
  ]

}
