---
sidebar_position: 1
title: Choose your path
---

# Choose your path

| You want to… | Start with | Hardware needed |
|---|---|---|
| Look at the arm and its frames | [View the model](view-the-model.md) | None |
| Build the controller | [Controller board](../hardware/controller-board.md) | Core module, panel, PCB assembly |
| Learn how the controller behaves | [Control modes](../firmware/control-modes.md) and [Safety](../safety.md) | None |
| Build and flash the firmware | [infrabot-firmware](https://github.com/YaolinDong/infrabot-firmware) · [build](https://github.com/YaolinDong/infrabot-firmware/blob/main/docs/build.md) · [flashing](https://github.com/YaolinDong/infrabot-firmware/blob/main/docs/flashing.md) | Controller board; CMSIS-DAP probe for the first installation |
| Program the arm | [SDK](../software/sdk.md) · [infrabot-sdk](https://github.com/YaolinDong/infrabot-sdk) | Assembled arm and controller |

:::info Firmware packages
Signed firmware release packages are not published yet. Build the firmware from source and provision a new board over SWD, as described in the firmware repository.
:::
