from string import Template
from names import component_names

template_string = Template('''
---
### $name

This is a description about what the module is/does so that people will know what they can use it for!

<img
  alt="$name"
  src={useBaseUrl('img/components/$short_name.jpeg')}
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
</Tabs>\
''')

for component_name in component_names:
    short_name = component_name.lower().replace(' ', '_')
    print(template_string.substitute(name=component_name, short_name=short_name))