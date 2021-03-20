import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colpos';
  admin = false;

  constructor( private route: ActivatedRoute ) { 
    //this.route.params.subscribe( res =>console.log(res.id)); 
    var id = this.route.snapshot.queryParamMap.get('id')
    console.log(
     id
    );
    if (id=='82860')
    {
      this.admin = true;
    }

  }

}
