import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  showFeatureTeacher = false;
  receivedTime: any;
  receiver: any;
  message: any;

  constructor() {}

  ngOnInit() {
  	this.receiver = (message) => {
  		console.log(message);
 			this.message = message;
	    let trusteddomain = "http://localhost:4200";

	    var currenttime = new Date();
	    this.receivedTime = currenttime.getHours() + ":" + currenttime.getMinutes() + ":" + currenttime.getSeconds();
	    
	    if (message.origin == trusteddomain) {
	        const messageData = message.data;
	        if (messageData === 'show feature teacher!') {
	        	this.showFeatureTeacher = true;
	        }
	    }
		}

  	window.addEventListener('message', this.receiver, false);
  }

	ngOnDestroy() {
    window.removeEventListener('message', this.receiver, false);
  }

}
