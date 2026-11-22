---
sidebar_position: 2
title: Controller board
---

# Controller board

The controller is a **Fire STM32H743 Challenger V2** core module. The [InfraBot 4.3 carrier board](https://github.com/YaolinDong/infrabot-pcb-4p3) adds Ethernet, CAN, USB-to-UART, SWD, front-panel keys and a status LED, and holds a 4.3-inch 480×272 touch panel.

![InfraBot R8 carrier board, CAD preview](/img/pcb-4p3.png)

| | |
|---|---|
| Revision | R8 engineering reference design |
| Size | 100 × 130 mm, four layers (signal, ground, power, signal) |
| Interfaces | Ethernet (RMII), CAN, USB-to-UART, SWD, 40-pin FPC to the core module |
| Controls | POWER, RESET, STOP (KEY1) and RESUME (KEY2) buttons, RGB status LED |
| Input | 6–12 V DC. Do not connect the arm's 24 V supply |
| Files | EasyEDA Pro project, schematics PDF, Gerbers, 105-part BOM and CPL |

The firmware also supports the 5-inch 800×480 panel on the core module without this carrier board. The 5-inch layout is English only.

The board's STOP and RESUME keys are ordinary inputs that the firmware reads. **The board has no independent emergency-stop circuit.** See [Safety](../safety.md).

Ordering, assembly and interface details: [assembly guide](https://github.com/YaolinDong/infrabot-pcb-4p3/blob/main/docs/assembly.md) · [interfaces](https://github.com/YaolinDong/infrabot-pcb-4p3/blob/main/docs/interfaces.md) · [manufacturing files](https://github.com/YaolinDong/infrabot-pcb-4p3/tree/main/manufacturing/R8).
