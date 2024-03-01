import { AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, DoCheck {
  title = 'CompleteUnderStandingOfAngular';
  private timer: any;
  data: any;

  constructor()
  {
    console.log("App Component Constructor Called");
  }

  ngOnInit()
  {
    console.log("App Component ngOnInit Called");
  }

  ngOnChanges()
  {
    console.log("App Component ngOnChanges Called");
    if(this.data)
    {
      console.log("Data is changed",this.data);
    }
  }

  ngDoCheck()
  {
    console.log("App Component ngDoCheck Called");
    if(typeof this.data === 'string')
    {
      console.log("Data is string",this.data);
    }
  }

  ngAfterContentInit()
  {
    console.log("App Component ngAfterContentInit Called");

  }

  ngAfterContentChecked()
  {
    console.log("App Component ngAfterContentChecked Called");
  }

  ngAfterViewInit()
  {
    console.log("App Component ngAfterViewInit Called");
  }

  ngAfterViewChecked()
  {
    console.log("App Component ngAfterViewChecked Called");
  }

  ngOnDestroy()
  {
    console.log("App Component ngOnDestroy Called");
  }

  // Start timer logic
  startTimer(): void {
    console.log('Timer started');
    this.timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
  }

  // Stop timer logic
  stopTimer(): void {
    console.log('Timer stopped');
    clearInterval(this.timer); // Stop the timer
  }
}
