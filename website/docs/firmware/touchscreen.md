---
sidebar_position: 2
title: Touchscreen
---

# Touchscreen

The controller supports the Fire 4.3-inch 480×272 and 5-inch 800×480 RGB capacitive panels and detects which is connected at start-up.

<div className="lcd-gallery">
  <figure>
    <img src={require('@site/static/img/lcd/en/menu.png').default} alt="Main menu" />
    <figcaption>Main menu</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/arm.png').default} alt="Arm and joints" />
    <figcaption>Arm and joints</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/3d-view.png').default} alt="3D view" />
    <figcaption>3D view</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/gravity.png').default} alt="Gravity compensation" />
    <figcaption>Gravity compensation</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/joint-impedance.png').default} alt="Joint impedance" />
    <figcaption>Joint impedance</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/cartesian-impedance.png').default} alt="Cartesian impedance" />
    <figcaption>Cartesian impedance</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/joint-admittance.png').default} alt="Joint admittance" />
    <figcaption>Joint admittance</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/cartesian-admittance.png').default} alt="Cartesian admittance" />
    <figcaption>Cartesian admittance</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/network.png').default} alt="Network settings" />
    <figcaption>Network settings</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/diagnostics.png').default} alt="Diagnostics" />
    <figcaption>Diagnostics</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/language.png').default} alt="Display language" />
    <figcaption>Display language</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/en/motors.png').default} alt="Motor table" />
    <figcaption>Motor table</figcaption>
  </figure>
</div>

The screenshots come from the firmware host tests, which run the controller's UI code with simulated joint data. The 3D view is drawn by the controller's own renderer.

## 4.3-inch layout

- **Main menu** with ten tiles: Arm & Joints, 3D View, Gravity Compensation, Network, Joint Impedance, Cartesian Impedance, Joint Admittance, Cartesian Admittance, Diagnostics and Settings. Each tile shows live status, turns green when its mode is active and orange when something needs attention.
- **The same top bar on every page**: back button, page title, controller state, a health word and **STOP** in the top-right corner.
- **Compliance pages** list the mode's parameters. Select a row and adjust it with the slider. The ENTER button shows the controller's actual state: blue when the mode is off, amber while it is ramping, green when it is active.
- **Settings** selects English or Simplified Chinese for the whole 4.3-inch interface. The choice is saved to the controller's flash only while all drives are disabled.

The 5-inch panel keeps its English, tab-based layout.

## Panel keys and status LED

On the carrier board, **KEY1** is STOP and holding **KEY2** for one second is RESUME. They follow the same rules as the touchscreen buttons. Enabling and disabling are only available on the touchscreen and from the PC. The RGB LED shows the most severe state, for example a slow red blink when the arm has no power and solid green in a PC motion mode.
