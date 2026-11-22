---
sidebar_position: 2
title: View the model
---

# View the model

The [robot description](https://github.com/YaolinDong/infrabot-description) contains the H7C URDF, eight STL meshes and identified inertia and friction parameters. You need no hardware.

## In RViz (ROS 2 Jazzy)

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

## Without ROS

Export a copy of the URDF with file paths instead of `package://` URIs, then load it in any URDF viewer. Both scripts use only the Python standard library.

```bash
git clone https://github.com/YaolinDong/infrabot-description.git
cd infrabot-description
python3 tools/export_urdf.py --output infrabot_h7c.urdf
python3 examples/forward_kinematics.py --positions 0 1.2 0 1.5 0 0.4 0
```

The URDF's `effort` and `velocity` limits are export placeholders. Do not use them as control limits.
