---
sidebar_position: 1
title: Overview
slug: /overview
---

# InfraBot H7C

InfraBot H7C is an open-source seven-axis arm built from Damiao CAN FD joint motors and controlled by an STM32H743 board. The controller closes the joint loop at 1 kHz. It also runs kinematics, gravity compensation, impedance and admittance. A PC connects over Ethernet through a C++ or Python SDK, and the touchscreen on the controller works without a PC.

![The InfraBot H7C arm](/img/h7c-photo.jpg)

See the arm in gravity compensation, impedance and admittance on the [demos page](demos.mdx).

## Specifications

| | |
|---|---|
| Joints | 7 revolute joints, J1–J7, plus an optional gripper J8 |
| Actuators | J1–J2 DM8009P, J3–J4 DM4340P, J5–J7 DM4310, gripper DM4310 |
| Arm mass | 4.627 kg including the base, without gripper or tool |
| Controller | Fire STM32H743 Challenger V2 core module with Ethernet, SDRAM and an RGB touch panel |
| Joint bus | CAN FD, 1 Mbit/s arbitration and 5 Mbit/s data |
| Host link | Ethernet, UDP |
| Control loop | 1 kHz on the controller |
| Panels | 4.3-inch 480×272 (English and Chinese) or 5-inch 800×480 (English) |

Reach, payload and repeatability have not been measured yet. Joint limits, frames and identified dynamics are in the [robot description](https://github.com/YaolinDong/infrabot-description/blob/main/docs/model.md).

## What the controller does

- **Host-driven motion.** Real-time joint or Cartesian targets at up to 1 kHz, or `movej` and `movep` goals that the controller interpolates.
- **Local compliance.** Gravity compensation (free or lock), joint and Cartesian impedance, and joint and Cartesian admittance. These modes run without a PC stream.
- **Supervision.** Command streams, feedback age, drive faults, temperature, speed and joint ranges are monitored. A stop brakes the arm to an enabled hold.
- **Maintenance.** Signed A/B firmware updates over Ethernet with approval on the touchscreen, an on-board log that the SDK can download, and drive parameter self-checks.

## Project status

InfraBot is maintained by one person. The [robot description](https://github.com/YaolinDong/infrabot-description) and the [4.3-inch carrier board](https://github.com/YaolinDong/infrabot-pcb-4p3) are published, and so are the [firmware](https://github.com/YaolinDong/infrabot-firmware) and the [SDK](https://github.com/YaolinDong/infrabot-sdk). Signed firmware release packages are not published yet. A ROS 2 driver, a LeRobot plugin and the mechanical CAD are planned. See the [roadmap](roadmap.md).
