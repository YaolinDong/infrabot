# Safety

English · [简体中文](#安全说明)

InfraBot is a research arm. It is not a certified industrial or collaborative robot. Assess the risks of your own setup before you use it.

## Before the first power-up

- Bolt the base to a rigid surface that can take the reaction torque of the arm.
- Wire an **independent hardware emergency stop** that removes drive power. The touchscreen STOP, the panel keys, an SDK `stop()` and the controller's software timeouts do not disconnect power, and they cannot stop a failed drive.
- Check the joint zero positions, the joint directions and the motor mode on the touchscreen before you enable the arm. The firmware starts with the drives disabled and never sets the zero position by itself.
- Clear the reach of the arm, including the gripper and any tool, and keep people outside it while the arm is enabled.

## While the arm is enabled

- STOP brakes the arm and keeps it **enabled in an IDLE hold**. It does not remove torque. Disabling the drives removes torque, so support the arm first.
- If a required command stream from the PC stops, the controller performs the same controlled stop.
- Gravity compensation, impedance and admittance run on the controller and **continue after the PC disconnects**. Press STOP before you end such a session.
- Joint, speed and torque limits are software supervision inside the controller. The drives also apply their own PD terms. Treat these limits as a backstop, not as a safety function.
- Reported motor torque includes gravity, acceleration and friction. It is not a contact-force measurement.

## Maintenance and firmware updates

- Support the arm, disable the drives and disconnect motor power before updating firmware or working on the wiring. Keep the controller powered for communication.
- Install only firmware signed by the publisher trusted by your board's loader. An Ethernet update also needs approval on the touchscreen.

---

## 安全说明

InfraBot 是研究用机械臂，不是经过认证的工业机器人或协作机器人。使用前请针对自己的使用场景评估风险。

### 第一次上电前

- 把底座用螺栓固定在足够刚硬的台面上，能承受机械臂运动时的反作用力矩。
- 接一个**独立的硬件急停**，用它切断驱动器电源。触摸屏 STOP、面板按键、SDK 的 `stop()` 以及控制器的软件超时都不会断电，也不能让已经故障的驱动器停下来。
- 使能前在触摸屏上核对关节零位、关节方向和电机模式。固件上电时所有驱动器都是失能的，也不会自动设置零位。
- 清空机械臂（包括夹爪和工具）能够到的范围；机械臂使能时，人员不要进入这个范围。

### 机械臂使能时

- STOP 会让机械臂制动，并**保持使能、进入 IDLE 保持**，不会撤掉力矩。失能驱动器才会撤掉力矩，所以失能前先把机械臂支撑好。
- 如果 PC 必须持续发送的指令流中断，控制器会执行同样的受控停止。
- 重力补偿、阻抗和导纳在控制器上运行，**PC 断开后仍会继续**。结束这类操作前先按 STOP。
- 关节位置、速度和力矩限制是控制器里的软件监控，驱动器本身还有自己的 PD 输出。这些限制只能作为最后一道防线，不能当作安全功能。
- 电机反馈的力矩包含重力、加速和摩擦，不是接触力测量值。

### 维护和固件升级

- 升级固件或改接线之前，先支撑好机械臂、失能驱动器、断开电机动力电，控制器保持供电以便通信。
- 只安装由板上 Loader 信任的发布者签名的固件。网口升级还需要在触摸屏上确认。
