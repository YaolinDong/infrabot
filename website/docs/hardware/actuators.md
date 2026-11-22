---
sidebar_position: 3
title: Actuators
---

# Actuators

| Joint | Motor | CAN ID / master ID | Encoding range: position · velocity · torque |
|---|---|---|---|
| J1 | DM8009P | 0x01 / 0x11 | ±12.5 rad · ±45 rad/s · ±54 N·m |
| J2 | DM8009P | 0x02 / 0x12 | ±12.5 rad · ±45 rad/s · ±54 N·m |
| J3 | DM4340P | 0x03 / 0x13 | ±12.5 rad · ±10 rad/s · ±28 N·m |
| J4 | DM4340P | 0x04 / 0x14 | ±12.5 rad · ±10 rad/s · ±28 N·m |
| J5 | DM4310 | 0x05 / 0x15 | ±12.5 rad · ±30 rad/s · ±10 N·m |
| J6 | DM4310 | 0x06 / 0x16 | ±12.5 rad · ±30 rad/s · ±10 N·m |
| J7 | DM4310 | 0x07 / 0x17 | ±12.5 rad · ±30 rad/s · ±10 N·m |
| J8 gripper | DM4310 | 0x08 / 0x18 | ±12.5 rad · ±30 rad/s · ±10 N·m |

The encoding ranges are the MIT protocol scaling. **They are not safety limits.** The firmware applies its own joint, speed and torque limits.

- The bus runs CAN FD at 1 Mbit/s arbitration and 5 Mbit/s data.
- J1–J7 run in MIT mode or position-velocity mode, selected while all drives are disabled. The gripper always runs in position-current mode.
- J2 and J4 are mounted opposite to their encoder direction, and the gripper motor is reversed. The firmware converts directions once, so the SDK and the touchscreen use joint-frame signs.
- Before enabling, the firmware checks each drive's control parameters against the expected profile.
