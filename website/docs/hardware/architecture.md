---
sidebar_position: 1
title: System architecture
---

# System architecture

```text
PC: C++ / Python SDK, Qt GUI
 ▲
 │  Ethernet UDP: commands down, telemetry and replies up
 ▼
Controller: STM32H743 on the carrier board, with a touch panel
            1 kHz joint loop · kinematics · gravity · impedance · admittance
 ▲
 │  CAN FD: drive commands down, motor feedback up
 ▼
Joint motors: J1–J2 DM8009P · J3–J4 DM4340P · J5–J7 DM4310 · J8 gripper
```

- **The controller owns the drives.** Only the STM32H743 talks to the motors. PCs send targets or mode requests over UDP.
- **One PC controls at a time.** A valid motion or configuration request binds a control lease to its source address. While the arm is enabled or moving, other sources are refused. STOP and DISABLE are always accepted.
- **The touchscreen is local.** It can enable the drives, change modes, tune compliance and stop the arm without a PC.
- **Two enable groups.** J1–J7 form the arm group. The gripper J8 is enabled separately and can be absent.

## UDP ports

| Port | Purpose |
|---|---|
| 5000 | Telemetry registration, telemetry, replies and clock synchronisation |
| 5001 | Information requests, commands and motion sessions |
| 5002 | Firmware updates |
| 5003 | On-board log download |
