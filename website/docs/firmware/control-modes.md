---
sidebar_position: 1
title: Control modes
---

# Control modes

The firmware separates **drive configuration** from **execution**. Select a motor profile while all drives are disabled, enable the arm, then choose an execution mode from IDLE.

```text
Motor profile (all drives disabled)
├─ J1–J7 MIT
└─ J1–J7 position-velocity          J8 gripper: always position-current

Execution (after enabling, from IDLE)
├─ IDLE                  holds the current position, accepts no motion targets
├─ RT joint / Cartesian  PC streams targets, normally at 1 kHz
├─ NRT joint / Cartesian controller interpolates movej / movep goals
├─ Gravity FREE / LOCK   local gravity compensation
├─ Joint / Cartesian impedance    local spring and damper
└─ Joint / Cartesian admittance   local virtual mass
```

| Mode | Where the loop runs | What the PC sends while active |
|---|---|---|
| IDLE | Controller holds enabled drives | Heartbeat, 100 Hz by default |
| RT joint | PC targets, 1 kHz drive loop on the controller | Joint targets, normally 1 kHz |
| RT Cartesian | PC tool pose, controller runs inverse kinematics | Tool poses, normally 1 kHz |
| NRT joint, NRT Cartesian | Controller plans and executes `movej` / `movep` | A goal, then a 100 Hz session keep-alive |
| Gravity FREE, LOCK | Controller, 1 kHz | Nothing after entering the mode |
| Joint, Cartesian impedance | Controller, 1 kHz | Nothing after entering the mode |
| Joint, Cartesian admittance | Controller, 1 kHz | Nothing after entering the mode |

## Rules

- RT and NRT modes switch through IDLE. Changing the motor profile requires disabling all drives.
- Enabling only enters an IDLE hold. The firmware never moves to zero, starts a stream or submits a move on its own.
- The firmware refuses to start a local mode when the arm is not enabled, the zero position is not set, feedback is stale, the motor profile is wrong or a drive is too hot.
- If a required stream stops for 100 ms, the controller brakes to an enabled hold. RESUME re-enters the interrupted mode from the held position when the stop allows it.

## Local compliance

- **Gravity compensation** uses the H7C bare-arm model with identified masses, centres of mass and joint offsets. FREE lets the arm be guided by hand with joint damping. LOCK holds the pose with a stiffness that you can adjust.
- **Impedance** holds a fixed equilibrium with a spring and damper in joint space or at the tool, on top of the gravity feedforward. It uses the drive's MIT torque interface; it does not measure contact force.
- **Admittance** moves a virtual mass in response to estimated external torque, in joint space or at the tool.

The handover into and out of each local mode ramps gains and torques so that the load is never dropped. STOP returns to the hold gains over 0.5 s.
