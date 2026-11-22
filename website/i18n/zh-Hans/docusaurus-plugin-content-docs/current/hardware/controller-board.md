---
sidebar_position: 2
title: 控制底板
---

# 控制底板

控制器使用**野火 STM32H743 挑战者 V2** 核心板。[InfraBot 4.3 底板](https://github.com/YaolinDong/infrabot-pcb-4p3)提供以太网、CAN、USB 转串口、SWD、前面板按键和状态灯，并安装一块 4.3 寸 480×272 触摸屏。

![InfraBot R8 底板 CAD 预览](/img/pcb-4p3.png)

| | |
|---|---|
| 版本 | R8 工程参考设计 |
| 尺寸 | 100 × 130 mm，四层（信号、地、电源、信号） |
| 接口 | 以太网（RMII）、CAN、USB 转串口、SWD、连接核心板的 40 Pin FPC |
| 按键和指示 | POWER、RESET、STOP（KEY1）、RESUME（KEY2）按键，RGB 状态灯 |
| 输入电源 | 6–12 V 直流，不要接机械臂的 24 V 电源 |
| 文件 | 嘉立创 EDA 专业版工程、原理图 PDF、Gerber、105 个器件的 BOM 和坐标文件 |

固件也支持不用这块底板、直接接在核心板上的 5 寸 800×480 屏幕，5 寸界面只有英文。

底板上的 STOP 和 RESUME 是由固件读取的普通按键。**底板没有独立的急停电路。** 见[安全](../safety.md)。

下单、装配和接口细节：[装配指南](https://github.com/YaolinDong/infrabot-pcb-4p3/blob/main/docs/assembly.md) · [接口说明](https://github.com/YaolinDong/infrabot-pcb-4p3/blob/main/docs/interfaces.md) · [制造文件](https://github.com/YaolinDong/infrabot-pcb-4p3/tree/main/manufacturing/R8)。
