---
id: awesome-wearable
title: Awesome Wearable
---

<img src="https://www.extremetech.com/wp-content/uploads/2018/05/Google-Glass-768x424.jpg"
     alt="Awesome Wearable"  />

I made this really cool wearable! It's super useful.

Here's how it is constructed and wired.

Here is the code that goes with it:

```arduino
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}
     
// the loop function runs over and over again forever
void loop() {
  digitalToggle(LED_BUILTIN); // turn the LED on (HIGH is the voltage level)
  delay(500);                // wait for half a second
}
```