---
sidebar_position: 2
title: ROS 2
---

# ROS 2

The [robot description](https://github.com/YaolinDong/infrabot-description) is a ROS 2 Jazzy package with an RViz launch file. See [View the model](../get-started/view-the-model.md).

The [ROS 2 driver](https://github.com/YaolinDong/infrabot-ros2) is a ros2_control hardware interface for J1–J7 built on the C++ SDK. The controller manager runs at 1 kHz with a joint trajectory controller. `use_mock_hardware:=true` runs it without the arm.

```bash
ros2 launch infrabot_bringup infrabot.launch.py robot_ip:=192.168.0.50
```

Starting the launch file enables the arm. Stopping it makes a controlled stop; the arm stays enabled and holds. Clear the workspace and wire an independent emergency stop first.
