---
id: clue
title: Adafruit Clue
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview
We think the Clue is pretty neat! It's got all sorts of embedded sensors, Bluetooth, and CircuitPython capabilities. It gives you a lot of freedom to choose how you make your projects. The below guide is a really great resource for getting started with the Clue, but if you're looking for some more specific resources, we've catalogued some underneath as well. 
https://learn.adafruit.com/adafruit-clue/overview

## Reference

<img
alt="Clue pinouts"
src={useBaseUrl('img/adafruit_products_PinoutDraft-2.png')}
class="component-image"
/>

# CircuitPython with the Clue
[Setting up CircuitPython on the Clue](https://learn.adafruit.com/adafruit-clue/circuitpython)

API documentation with all of the sensors documented in CircuitPython [here](https://circuitpython.readthedocs.io/projects/clue/en/latest/api.html). This shows how to access any and all components and sensors embedded in the Clue, with code snippets in CircuitPython.

[Digital IO in CircuitPython](https://learn.adafruit.com/circuitpython-essentials/circuitpython-digital-in-out)

# Bluetooth resources

[Making a HID device](https://learn.adafruit.com/introducing-the-adafruit-nrf52840-feather/blehidadafruit) (recognized as a mouse/keyboard/gamepad by your phone/computer)

[Connecting to the Bluefruit LE Connect app](https://learn.adafruit.com/circuitpython-nrf52840/bluefruit-le-connect-basics) control the Clue from your phone! UART control as well as some other cool utilities.

[More nrf52840 examples](https://learn.adafruit.com/bluefruit-nrf52-feather-learning-guide/examples) all of these sketches, with some modification, should be compatible with the Clue.
