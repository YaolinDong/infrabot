---
sidebar_position: 2
title: 查看模型
---

# 查看模型

[机器人描述包](https://github.com/YaolinDong/infrabot-description)包含 H7C 的 URDF、8 个 STL 网格，以及辨识得到的惯量和摩擦参数，不需要任何硬件。

## 在 RViz 中查看（ROS 2 Jazzy）

```bash
source /opt/ros/jazzy/setup.bash
mkdir -p ~/infrabot_ws/src && cd ~/infrabot_ws/src
git clone https://github.com/YaolinDong/infrabot-description.git
cd ~/infrabot_ws
rosdep install --from-paths src --ignore-src -r -y
colcon build --packages-select infrabot_description
source install/setup.bash
ros2 launch infrabot_description display.launch.py
```

## 不用 ROS

导出一份用文件路径代替 `package://` 的 URDF，就能在任何 URDF 查看器中加载。两个脚本只用 Python 标准库。

```bash
git clone https://github.com/YaolinDong/infrabot-description.git
cd infrabot-description
python3 tools/export_urdf.py --output infrabot_h7c.urdf
python3 examples/forward_kinematics.py --positions 0 1.2 0 1.5 0 0.4 0
```

URDF 里的 `effort` 和 `velocity` 限值是导出时的占位值，不要当作控制限值使用。
