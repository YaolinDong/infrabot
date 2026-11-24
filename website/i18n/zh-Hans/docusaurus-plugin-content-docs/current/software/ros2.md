---
sidebar_position: 2
title: ROS 2
---

# ROS 2

[机器人描述包](https://github.com/YaolinDong/infrabot-description)是 ROS 2 Jazzy 功能包，带 RViz 启动文件，见[查看模型](../get-started/view-the-model.md)。

[ROS 2 驱动](https://github.com/YaolinDong/infrabot-ros2)是基于 C++ SDK 的 ros2_control 硬件接口，控制 J1–J7。控制循环 1 kHz，带关节轨迹控制器。加 `use_mock_hardware:=true` 可以不接机械臂运行。

```bash
ros2 launch infrabot_bringup infrabot.launch.py robot_ip:=192.168.0.50
```

启动 launch 会使能机械臂。退出时控制器受控停止，机械臂保持使能并抱住当前位置。运行前请清空工作空间，并接好独立的急停。
