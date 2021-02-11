---
id: components
title: Component Kit
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Check out all of these components that can do so many things!

---
### 7-color Flash LED

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="7-color Flash LED"
  src={useBaseUrl('img/components/7-color_flash_led.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Analog Hall Effect Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Analog Hall Effect Sensor"
  src={useBaseUrl('img/components/analog_hall_effect_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Analog Temperature Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Analog Temperature Sensor"
  src={useBaseUrl('img/components/analog_temperature_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

```arduino
#include <math.h> //needed to calculate th

double ConvertTemp(int RawTemp) { //convert raw sensor data to a useable temperature, lots of math

  double Temp;
  Temp = log(10000.0*((1024.0/RawTemp-1))); 
  Temp = 1 / (0.001129148 + (0.000234125 + (0.0000000876741 * Temp * Temp ))* Temp );
  Temp=Temp-273.15;
  Temp = (Temp * 9.0)/ 5.0 + 32.0; // Convert Celcius to Fahrenheit
  return Temp;
}

int sensorPin = A2; // select the input pin for the potentiometer, can change this to any pin 
                    // with a triangle next to it on the dragontail 

void setup() {
  Serial.begin(9600); //serial monitor, available on ArduinoIDE
}

void loop() {
  int readVal=analogRead(sensorPin); //read sensor data 
  double temp =  ConvertTemp(readVal); //convert temperature data 
 
 Serial.println(temp);  // display tempature on the serial monitor  
 delay(500);
}
```

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Avoidance Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Avoidance Sensor"
  src={useBaseUrl('img/components/avoidance_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Ball Switch

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Ball Switch"
  src={useBaseUrl('img/components/ball_switch.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Button

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Button"
  src={useBaseUrl('img/components/button.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Buzzer

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Buzzer"
  src={useBaseUrl('img/components/buzzer.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Digital Temperature Sensor

This sensor monitors temperature and, if the temperature is above a specific threshold, outputs a logical 1. If the temp is below the threshold, it outputs a 0. How do you set this threshold? Why, by adjusting the trim pot! using a small flathead screwdriver, you can increase (clockwise) or decrease (counter-clockwise) the threshold temperature. 
Note: Ben and Baran could not get this thing to work properly. If you manage to get it functioning properly you will get a special prize.

<img
  alt="Digital Temperature Sensor"
  src={useBaseUrl('img/components/digital_temperature_sensor.jpeg')}
  class="component-image"
/>



<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

```arduino
#define LED_PIN 13
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_PIN, OUTPUT);
  pinMode(6, INPUT);
}
     
// the loop function runs over and over again forever
void loop() {
  if(digitalRead(6) == HIGH) {
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }
  
}
```

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Flame Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Flame Sensor"
  src={useBaseUrl('img/components/flame_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Hall Effect Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Hall Effect Sensor"
  src={useBaseUrl('img/components/hall_effect_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Heartbeat Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Heartbeat Sensor"
  src={useBaseUrl('img/components/heartbeat_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### IR Emitter

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="IR Emitter"
  src={useBaseUrl('img/components/ir_emitter.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### IR Reciever

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="IR Reciever"
  src={useBaseUrl('img/components/ir_reciever.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Joystick

This is a description of how to use this analog joystick!

<img
  alt="Joystick"
  src={useBaseUrl('img/components/joystick.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

```py

# This joystick has 3 values - 1 digital for the button, and 2 analogs for the x and y directions!

import digitalio
import analogio
import board

# Set the pin number
button = digitalio.DigitalInOut(board.D6)
# Input/output
button.direction = digitalio.Direction.INPUT
# Pullup resistor
button.pull = digitalio.Pull.UP

x = analogio.AnalogIn(board.A4)
y = analogio.AnalogIn(board.A0)



while True:
  # Access the pin values with .value tag!
  
  print("Button value: " + button.value)
  #print(x.value)
  #print(y.value)
```

</TabItem>
</Tabs>

---
### Large Microphone

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Large Microphone"
  src={useBaseUrl('img/components/large_microphone.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Laser

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Laser"
  src={useBaseUrl('img/components/laser.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Light Blocking Module

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Light Blocking Module"
  src={useBaseUrl('img/components/light_blocking_module.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Light Cup

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Light Cup"
  src={useBaseUrl('img/components/light_cup.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Linear Hall Effect Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Linear Hall Effect Sensor"
  src={useBaseUrl('img/components/linear_hall_effect_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Mini Reed Switch

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Mini Reed Switch"
  src={useBaseUrl('img/components/mini_reed_switch.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Passive Buzzer

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Passive Buzzer"
  src={useBaseUrl('img/components/passive_buzzer.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Photo Resistor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Photo Resistor"
  src={useBaseUrl('img/components/photo_resistor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### RGB LED

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="RGB LED"
  src={useBaseUrl('img/components/rgb_led.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Reed Switch

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Reed Switch"
  src={useBaseUrl('img/components/reed_switch.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Relay

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Relay"
  src={useBaseUrl('img/components/relay.jpeg')}
  class="component-image"
/>

The relay module is an effective way to convert existing appliances into smart-objects. The relay is a heavy-duty, digitally controlled switch that can handle anything from battery power to wall current. The relay has 3 control pins (+V, Gnd, and Signal) and three screw terminals (NC, common, NO). When no voltage is applied to the relay, the NC (Normally Closed) terminal and the common (middle) terminals are connected. When a logical high voltage is applied to the signal pin, an electromagnet removes the NC-Common connection and connects the common and NO (normally open) terminals. You could, for example, splice the the power cord running to your toaster -- BOOM SMART TOASTER!
DISCLAIMER: do NOT splice any power cords running high voltage or current!! Getting zapped by an improperly shielded power cable can KILL you. It can also start fires. Consult with an expert before modifying any existing power cords. This module can be used effectively in low-power applications as well!

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

```arduino
void setup() {
  // put your setup code here, to run once:
  pinMode(2, OUTPUT); // pin 2 is connected to the signal pin of the relay
  digitalWrite(2, LOW);
  pinMode(5, INPUT_PULLUP); // pin 5 is the left-hand Clue button
}

short relay_state = 0;
void loop() {
  // put your main code here, to run repeatedly:
  if(!digitalRead(5)) {
    if(!relay_state) relay_state = 1;
    else relay_state = 0;
    delay(200); //EZ debounce
  }
  if(relay_state) digitalWrite(2, HIGH);
  else digitalWrite(2, LOW);
}
```

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Rotary Encoder

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Rotary Encoder"
  src={useBaseUrl('img/components/rotary_encoder.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### SMD RGB

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="SMD RGB"
  src={useBaseUrl('img/components/smd_rgb.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Shock Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Shock Sensor"
  src={useBaseUrl('img/components/shock_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Small Microphone

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Small Microphone"
  src={useBaseUrl('img/components/small_microphone.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### TEMP 18B20 Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="TEMP 18B20 Sensor"
  src={useBaseUrl('img/components/temp_18b20_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Tap Module

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Tap Module"
  src={useBaseUrl('img/components/tap_module.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Temperature and Humidity Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Temperature and Humidity Sensor"
  src={useBaseUrl('img/components/temperature_and_humidity_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Tilt Switch

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Tilt Switch"
  src={useBaseUrl('img/components/tilt_switch.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Touch Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Touch Sensor"
  src={useBaseUrl('img/components/touch_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Tracking Sensor

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Tracking Sensor"
  src={useBaseUrl('img/components/tracking_sensor.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Two-color LED

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Two-color LED"
  src={useBaseUrl('img/components/two-color_led.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>

---
### Two-color LED 2

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="Two-color LED 2"
  src={useBaseUrl('img/components/two-color_led_2.jpeg')}
  class="component-image"
/>

Now explain everything about how to use the module. This will include how the pins should be connected, 
whether the microcontroller should be treating this an output or input, digital or analog, or if it should be something else entirely.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

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

</TabItem>
<TabItem value="py">

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

</TabItem>
</Tabs>
