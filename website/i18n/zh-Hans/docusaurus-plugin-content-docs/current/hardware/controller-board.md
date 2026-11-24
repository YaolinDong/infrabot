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

## 外壳

[infrabot-pcb-4p3-enclosure](https://github.com/YaolinDong/infrabot-pcb-4p3-enclosure) 提供 R8 底板、核心板和 4.3 寸屏的 3D 打印外壳，有 STL 和 STEP 文件：

- **简单版 S8**：上下壳两件，直接使用板上的按键和指示灯。
- **精装版 C3**：9 个打印件，带 4 个键帽和 2 根透明导光柱，另有 2 个选用的试装件。

两版目前都是试装模型。合壳前请用实物核对玻璃高度、铜柱螺纹深度和配对插头。
