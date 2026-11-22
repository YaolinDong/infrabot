# Versions and compatibility

English · [简体中文](#版本兼容)

InfraBot releases are versioned per repository. This page lists which versions work together. The controller and the SDK share one wire protocol. The firmware repository owns the canonical `protocol.h`, and the SDK carries a byte-identical copy that its tests compare.

## Release set

| Release set | Arm | Firmware | SDK | Protocol | Description | Controller |
|---|---|---|---|---|---|---|
| 2026.1 (preparing) | H7C | 0.1.0 | 0.1.0 | 1.0 | 0.1.0 | Fire H743 Challenger V2 core module; 4.3-inch carrier board R8 |

## Protocol rules

- When the SDK connects, it asks the controller for its protocol version before it starts the heartbeat or sends any command.
- **Major** versions must match. If they differ, `connect` fails and reports both versions.
- **Minor** versions only add features. Use the capability bits reported by the controller to detect optional features.
- Firmware that only answers the older V1 information request is treated as protocol 1.0 with an unknown firmware version.

## Robot model

The firmware's gravity model and the [robot description](https://github.com/YaolinDong/infrabot-description) use the same H7C bare-arm parameters: masses, centres of mass, inertia, joint origins and limits. The gripper and any tool are not part of the model. Joint friction is identified separately.

---

## 版本兼容

InfraBot 每个仓库各自发布版本，这里列出哪些版本可以一起使用。控制器和 SDK 使用同一套通信协议：权威的 `protocol.h` 在固件仓库，SDK 里有一份逐字节相同的副本，SDK 的测试会比对两者。

### 发布组合

| 发布组合 | 机械臂 | 固件 | SDK | 协议 | 描述包 | 控制器 |
|---|---|---|---|---|---|---|
| 2026.1（整理中） | H7C | 0.1.0 | 0.1.0 | 1.0 | 0.1.0 | 野火 H743 挑战者 V2 核心板；4.3 寸底板 R8 |

### 协议规则

- SDK 连接时先向控制器查询协议版本，然后才启动心跳、发送指令。
- **主版本**必须一致；不一致时 `connect` 失败，并报告两边的版本。
- **次版本**只增加功能。可选功能按控制器报告的能力位判断。
- 只支持旧 V1 信息请求的固件，按协议 1.0 处理，固件版本显示为未知。

### 机器人模型

固件的重力模型和[机器人描述包](https://github.com/YaolinDong/infrabot-description)使用同一套 H7C 裸臂参数：质量、质心、惯量、关节原点和限位。夹爪和工具不在模型里。关节摩擦参数单独辨识。
