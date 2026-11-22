---
sidebar_position: 1
title: 选择入口
---

# 选择入口

| 你想要…… | 从这里开始 | 需要的硬件 |
|---|---|---|
| 看看机械臂和它的坐标系 | [查看模型](view-the-model.md) | 不需要 |
| 制作控制器 | [控制底板](../hardware/controller-board.md)，包括打印外壳 | 核心板、屏幕、PCB 打样和贴片；打印外壳需要 3D 打印机 |
| 了解控制器的行为 | [控制模式](../firmware/control-modes.md)和[安全](../safety.md) | 不需要 |
| 编译并烧录固件 | [infrabot-firmware](https://github.com/YaolinDong/infrabot-firmware) · [编译](https://github.com/YaolinDong/infrabot-firmware/blob/main/docs/build.md) · [烧录](https://github.com/YaolinDong/infrabot-firmware/blob/main/docs/flashing.md) | 控制底板；首次烧录需要 CMSIS-DAP 调试器 |
| 编程控制机械臂 | [SDK](../software/sdk.md) · [infrabot-sdk](https://github.com/YaolinDong/infrabot-sdk) | 装好的机械臂和控制器 |

:::info 固件发布包
签名的固件发布包还没有提供。请按固件仓库的说明从源码编译，新板子先通过 SWD 烧录。
:::
