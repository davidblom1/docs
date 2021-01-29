---
id: dope-robot
title: Dope Robot
---

<img src="https://spectrum.ieee.org/image/MzM4MTIwOA.jpeg"
     alt="Dope Robot"  />

Check out this awesome robot! It can do so many cool things.

Here is how it is wired and put together

Here is the code that runs it:

```py
# Import all of the necessary modules.
import board
import digitalio
import time

# Initialize digital pin 17 as an output.
led = digitalio.DigitalInOut(board.D17)
led.direction = digitalio.Direction.OUTPUT

# Loop forever
while True:
    led.value = True    # Turn LED on
    time.sleep(0.5)     # Wait half a second
    led.value = False   # Turn LED off
    time.sleep(0.5)     # Wait half a second
```