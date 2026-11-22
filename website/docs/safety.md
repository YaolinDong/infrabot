---
sidebar_position: 2
title: Safety
---

# Safety

InfraBot is a research arm. It is not a certified industrial or collaborative robot. Assess the risks of your own setup before you use it.

:::danger Hardware emergency stop
The touchscreen STOP, the panel keys, an SDK `stop()` and the controller's software timeouts **do not remove drive power**, and they cannot stop a failed drive. Wire an independent emergency stop that disconnects motor power.
:::

## Before the first power-up

- Bolt the base to a rigid surface that can take the reaction torque of the arm.
- Check the joint zero positions, joint directions and motor mode on the touchscreen before you enable the arm. The firmware starts with the drives disabled and never sets the zero position by itself.
- Clear the reach of the arm, including the gripper and any tool, and keep people outside it while the arm is enabled.

## Stopping

| Action | Result |
|---|---|
| STOP on the touchscreen, KEY1 on the carrier board, or SDK `stop()` | Brakes the arm and keeps it **enabled in an IDLE hold** |
| A required PC command stream stops | Same controlled stop |
| Disable the drives | Removes drive torque, so support the arm first |
| Hardware emergency stop | Removes drive power; this is the only action that does |

Gravity compensation, impedance and admittance run on the controller and **continue after the PC disconnects**. Press STOP before you end such a session.

## Limits

Joint, speed and torque limits are software supervision inside the controller. The drives also apply their own PD terms. Treat these limits as a backstop, not as a safety function. Reported motor torque includes gravity, acceleration and friction; it is not a contact-force measurement.

## Maintenance and updates

Support the arm, disable the drives and disconnect motor power before updating firmware or working on the wiring. Keep the controller powered for communication. Install only firmware signed by the publisher that your board's loader trusts.
