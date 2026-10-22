import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('demo');

  test(value: number) {
  if (value > 10) {
    console.log("A");
  }

  if (value > 10) {
    console.log("B");
  }
}

  testBadCode(password: string) {
  const hardcodedPassword = "admin123";

  if (password == "test") {
    console.log("Password is " + hardcodedPassword);
    
  }

  
}
}
