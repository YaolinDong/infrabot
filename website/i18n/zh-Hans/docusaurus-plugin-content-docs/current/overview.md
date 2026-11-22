---
sidebar_position: 1
title: 概览
slug: /overview
---

# InfraBot H7C

InfraBot H7C 是一台开源七轴机械臂，关节使用达妙 CAN FD 电机，由 STM32H743 控制板控制。控制器以 1 kHz 闭合关节控制环，同时负责运动学、重力补偿、阻抗和导纳控制。PC 通过以太网用 C++ 或 Python SDK 连接；控制器上的触摸屏不需要 PC 也能使用。

![InfraBot H7C 零位渲染图](/img/h7c.png)

## 参数

| | |
|---|---|
| 关节 | 7 个转动关节 J1–J7，另有可选夹爪 J8 |
| 电机 | J1–J2 DM8009P，J3–J4 DM4340P，J5–J7 DM4310，夹爪 DM4310 |
| 本体质量 | 4.627 kg（含底座，不含夹爪和工具） |
| 控制器 | 野火 STM32H743 挑战者 V2 核心板，带以太网、SDRAM 和 RGB 触摸屏 |
| 关节总线 | CAN FD，仲裁段 1 Mbit/s，数据段 5 Mbit/s |
| 上位机连接 | 以太网 UDP |
| 控制环 | 控制器上 1 kHz |
| 屏幕 | 4.3 寸 480×272（中英文）或 5 寸 800×480（英文） |

工作半径、负载和重复定位精度还没有实测。关节限位、坐标系和辨识得到的动力学参数见[机器人描述包](https://github.com/YaolinDong/infrabot-description/blob/main/docs/model.md)。

## 控制器能做什么

- **PC 驱动的运动。** 最高 1 kHz 的实时关节或笛卡尔目标，或者由控制器插值执行的 `movej`、`movep` 目标。
- **本地柔顺控制。** 重力补偿（自由拖动或锁定）、关节和笛卡尔阻抗、关节和笛卡尔导纳。这些模式不需要 PC 持续发指令。
- **监控。** 监控指令流、反馈时效、驱动器故障、温度、速度和关节范围；停止时制动并保持使能。
- **维护。** 通过以太网进行签名 A/B 固件升级（需在触摸屏上确认），SDK 可以下载板上日志，使能前自检驱动器参数。

## 项目状态

InfraBot 目前由一个人维护。[机器人描述包](https://github.com/YaolinDong/infrabot-description)和 [4.3 寸控制底板](https://github.com/YaolinDong/infrabot-pcb-4p3)已经发布，固件和 SDK 仓库正在整理。ROS 2 驱动、LeRobot 插件和机械 CAD 在计划中，见[路线图](roadmap.md)。
