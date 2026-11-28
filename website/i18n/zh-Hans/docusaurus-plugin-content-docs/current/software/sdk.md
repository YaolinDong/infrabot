---
sidebar_position: 1
title: C++ / Python SDK
---

# C++ / Python SDK

源码、安装和示例：[infrabot-sdk](https://github.com/YaolinDong/infrabot-sdk) · [API 参考](https://yaolindong.github.io/infrabot-sdk/) · [实时循环](https://github.com/YaolinDong/infrabot-sdk/blob/main/docs/realtime.md) · [C++ 示例](https://github.com/YaolinDong/infrabot-sdk/tree/main/examples/cpp) · [Python 示例](https://github.com/YaolinDong/infrabot-sdk/tree/main/examples/python)

SDK 是 Linux 上的 C++17 库，带 Python 绑定。一个 `Robot` 对象负责握手、遥测和指令。Qt 控制界面也使用这套库。

## 读取控制器状态

下面的只读示例关闭心跳，打印固件版本，并最多等待半秒读取一次关节数据。关节位置的单位是弧度。

```python
import time
import infrabot

robot = infrabot.Robot("192.168.0.50")
robot.set_heartbeat(False)
robot.connect()
try:
    print("固件", robot.info().firmware)
    for _ in range(50):
        state = robot.state()
        if state.joints.host_time_us:
            print("J1", state.joints.position[0], "rad")
            break
        time.sleep(0.01)
    else:
        raise TimeoutError("未收到遥测")
finally:
    robot.disconnect()
```

## 时序分类

头文件里每个公开函数都标明了类别：

| 类别 | 例子 | 用在哪里 |
|---|---|---|
| 实时（RT） | `state`、`servej`、`servep` | 1 kHz 循环里，不等待控制器回复 |
| 非阻塞 | `info`、`submit_movej`、`hold_command` | 监控和调度代码 |
| 阻塞 | `connect`、`servo_on`、`switch_mode`、`movej` | 初始化、操作员操作和收尾 |

1 kHz 循环里只调用实时函数。要降低上位机延迟，可以使用 PREEMPT_RT 内核，并把控制线程绑定到固定 CPU。

## 兼容性

SDK 0.2.1 使用协议 1.1：参数服务和诊断查询需要固件 0.2.0，协议 1.0 的固件仍可连接。见[版本兼容](../compatibility.md)。
