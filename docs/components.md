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

Part: HW-483

<img
  alt="Button"
  src={useBaseUrl('img/components/buttonAlone.jpg')}
  class="component-image"
/>

The pushbutton is pretty straightforward: you can use it as an input, and check whether is pushing the button or not. As you can see in the diagram above, left == gnd, center == vdd, and right == data.
Note: A low input indicates that the button is pressed.


<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

```arduino
const int buttonPin = 2; //set these as constants
int buttonState = 0; 

void setup() {
  pinMode(LED_BUILTIN, OUTPUT); //using the inbuilt LED on the back of the clue!
  pinMode(buttonPin, INPUT); //set the pushbutton sensor as an input
}
 
void loop() {
  buttonState = digitalRead(buttonPin);//read the state of the button

  if (buttonState == HIGH) { //if the button is NOT pressed
    //turn LED on
    digitalWrite(LED_BUILTIN, HIGH);
  } else { //if the button is pressed
    // turn LED off:
    digitalWrite(LED_BUILTIN, LOW);
  }
}
```

</TabItem>
<TabItem value="py">

```py
import board
import digitalio
import time
#here I decide to use an LED to check the status of the button
led = digitalio.DigitalInOut(board.D7) #set led pin
button = digitalio.DigitalInOut(board.D1) #set button pin
led.direction = digitalio.Direction.OUTPUT
button.direction = digitalio.Direction.INPUT

while True:
  if button.value: #if the button is off
    led.value = False #led is off
  else: #if the button is on
    led.value = True #led is on
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

This microphone can detect sound level. 
Part: HW-485

<img
  alt="Large Microphone"
  src={useBaseUrl('img/components/large_microphone.jpg')}
  class="component-image"
/>

This microphone can work with both analog and digital inputs, but I strongly recommend that you use the analog input pin. The sample code below is done with analog input as well. In the arduino ide, open serial plotter to see the graph of outputs. With circuit python, the printing is done on the lcd. Please see the above image in order to see the pin labels.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

```arduino
int soundPin = A2; // select the input pin for the microphone
int val = 0; // variable to store the value coming from the sensor
 
void setup () 
{
  pinMode (soundPin, INPUT);
  Serial.begin (115200); //begin the serial
}
 
void loop () 
{
  val = analogRead (soundPin);//read input
  delay (300);
  Serial.println (val, DEC);
}
```

</TabItem>
<TabItem value="py">

```py
import board
import time
from analogio import AnalogIn
 
microphone = AnalogIn(board.A2)
 
while True:
    print(get_voltage(photo)) #check what the voltage is and print
    time.sleep(0.1) #sleep for a 1/10th of a second
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

Part: HW-486
This is a photoresistor sensor, which means that it can measure the amount of ambient light! 

<img
  alt="Photo Resistor"
  src={useBaseUrl('img/components/photo_resistor.jpg')}
  class="component-image"
/>

See the image above to see the gnd, vdd, and data pins. You need to declare this as an input, and please note that you have to select an ANALOG pin and make an ANALOG measurement. 
Note: The sensor is not very accurate, but should be good enough to distinguish between night and day. 

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

```arduino
const int photoPin = A2; //set these as constants
int val = 0; 

void setup() {
  pinMode(photoPin, INPUT); //set the photoresistor sensor as an input
  Serial.begin(9600);
}
 
void loop() {
  val = analogRead(photoPin);//read the value of the photoresistor
  delay(1000);
  Serial.println(val, DEC); //print on the serial monitor
}
```

</TabItem>
<TabItem value="py">

```py
import board
import time
from analogio import AnalogIn
 
photo = AnalogIn(board.A2)

def convertToVoltage(pin):
    return (pin.value * 3) / 65536 #convert it to a voltage value between 0-3V
 
 
while True:
    print((get_voltage(photo),)) #check what the voltage is- if the voltage is higher, it is brighter
    time.sleep(1) #sleep for a second
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

Part Number: HW-513

<img
  alt="Shock Sensor"
  src={useBaseUrl('img/components/shock_sensor.jpg')}
  class="component-image"
/>

As you can see in the above image, the left-most pin is gnd, the center pin is power, and the right pin is data. This sensor is an input, and can detect "shocks". You can apply shock to this sensor by dropping it or hitting the blue part lightly with your finger. 
Note: A low read from the sensor means it detected a shock.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

```arduino
const int shockPin = 1; //set these as constants
int val = 0; 

void setup() {
  pinMode(LED_BUILTIN, OUTPUT); //using the inbuilt LED on the back of the clue!
  pinMode(shockPin, INPUT); //set the shock sensor as an input
}
 
void loop() {
  val = digitalRead(shockPin);//read the state of the button

  if (val == LOW) { //if a shock is detected
    //turn LED on
    digitalWrite(LED_BUILTIN, HIGH);
    delay(1000); //delay
  } else { //if the shock is not detected
    // turn LED off:
    digitalWrite(LED_BUILTIN, LOW);
  }
}
```

</TabItem>
<TabItem value="py">

```py
import board
import digitalio
import time
 
led = digitalio.DigitalInOut(board.D7) #set led pin
shock = digitalio.DigitalInOut(board.D1) #set shock pin
led.direction = digitalio.Direction.OUTPUT
shock.direction = digitalio.Direction.INPUT

while True:
  if shock.value: #if the shock is not detected
    led.value = False; #led is off
  else: #if the shock is detected
    led.value = True; #led is on
    time.sleep(1); #delay so you can see the led light 
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

This tilt switch will be able to detect whether is tilting to the right or the left.
Part: HW-505

<img
  alt="Tilt Switch"
  src={useBaseUrl('img/components/tilt_switch.jpeg')}
  class="component-image"
/>

Please see the above image to see where the vdd, gnd, and data pins are. The tilt sensor is used as a digital input, and if the bead of mercury is tilted towards the base, then the led on the sensor will flash. If the bead of mercury is tilted away from the base, then the led on the sensor will turn off.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

```arduino
const int tiltPin = 2; //set these as constants
int val = 0;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT); //using the inbuilt LED on the back of the clue!
  pinMode(tiltPin, INPUT); //set the shock sensor as an input
}

void loop() {
  val = digitalRead (tiltPin) ;// read the values assigned to the digital interface 3 val
  if (val == HIGH) // When the mercury tilt switch sensor detects a signal, LED flashes
  {
    digitalWrite (LED_BUILTIN, HIGH);
  }
  else
  {
    digitalWrite (LED_BUILTIN, LOW);
  }
}
```

</TabItem>
<TabItem value="py">

```py
import board
import digitalio
import time
 
tilt = digitalio.DigitalInOut(board.D2) #set tilt sensor pin
tilt.direction = digitalio.Direction.INPUT

led = digitalio.DigitalInOut(board.D7) #set led pin
led.direction = digitalio.Direction.OUTPUT

while True:
  if tilt.value: #if the tilt sensor is tilted towards the base
    led.value = True; #led is off
  else: #if the tilt sensor is tilted away from the base
    led.value = False; #led is on
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

This is a sensor that can detect if the object in front of the white circle is black or white. You can use this to make a robot car follow a straight line!
Part: HW-511

<img
  alt="Tracking Sensor"
  src={useBaseUrl('img/components/tracking_sensor.jpg')}
  class="component-image"
/>

Please see the above image to see where the data, gnd, and vdd pins are. If you are testing this code using the arduino IDE, open the serial monitor to see if it is correctly detecting whether the object in front of it is black or white. If you are using circuit python, make sure to look at the lcd display.

<Tabs
  defaultValue="arduino"
  values={[
    { label: 'Arduino', value: 'arduino', },
    { label: 'CircuitPython', value: 'py', },
  ]
}>
<TabItem value="arduino">

```arduino
const int trackPin = 2; //set these as constants
int val = 0;

void setup() {
  Serial.begin(9600); //start serial
  pinMode(trackPin, INPUT); //set the tracking sensor as an input
}

void loop() {
  val = digitalRead (trackPin) ;// read the values of the tracking sensor
  Serial.println(val);
  delay(500); //delay so you don't spam the serial console
}


```

</TabItem>
<TabItem value="py">

```py
import board
import digitalio
import time
 
track = digitalio.DigitalInOut(board.D2) #set track sensor pin
track.direction = digitalio.Direction.INPUT

while True:
  print(track.value); #print either a 0 or 1
  sleep(1); # delay for a second

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
