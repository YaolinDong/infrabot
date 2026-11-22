---
sidebar_position: 2
title: 触摸屏
---

# 触摸屏

控制器支持野火 4.3 寸 480×272 和 5 寸 800×480 RGB 电容屏，开机时自动识别接的是哪一块。

<div className="lcd-gallery">
  <figure>
    <img src={require('@site/static/img/lcd/zh/menu.png').default} alt="主菜单" />
    <figcaption>主菜单</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/arm.png').default} alt="机械臂与关节" />
    <figcaption>机械臂与关节</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/3d-view.png').default} alt="三维视图" />
    <figcaption>三维视图</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/gravity.png').default} alt="重力补偿" />
    <figcaption>重力补偿</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/joint-impedance.png').default} alt="关节阻抗" />
    <figcaption>关节阻抗</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/cartesian-impedance.png').default} alt="笛卡尔阻抗" />
    <figcaption>笛卡尔阻抗</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/joint-admittance.png').default} alt="关节导纳" />
    <figcaption>关节导纳</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/cartesian-admittance.png').default} alt="笛卡尔导纳" />
    <figcaption>笛卡尔导纳</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/network.png').default} alt="网络设置" />
    <figcaption>网络设置</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/diagnostics.png').default} alt="诊断" />
    <figcaption>诊断</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/language.png').default} alt="显示语言" />
    <figcaption>显示语言</figcaption>
  </figure>
  <figure>
    <img src={require('@site/static/img/lcd/zh/motors.png').default} alt="电机参数" />
    <figcaption>电机参数</figcaption>
  </figure>
</div>

截图由固件的主机测试生成，运行的是控制器上的界面代码，关节数据为模拟数据。三维视图由控制器自己的渲染程序绘制。

## 4.3 寸界面

- **主菜单**有 10 个磁贴：机械臂与关节、三维视图、重力补偿、网络、关节阻抗、笛卡尔阻抗、关节导纳、笛卡尔导纳、诊断、设置。每个磁贴显示实时状态，模式运行中变绿，需要注意时变橙。
- **每页顶栏相同**：返回键、页面标题、控制器状态、一个健康状态词，右上角是 **STOP**。
- **柔顺模式页面**列出该模式的参数，点一行选中，用滑条调节。ENTER 按钮按控制器的实际状态显示颜色：未开启为蓝色，过渡中为琥珀色，运行中为绿色。
- **设置**可以把整个 4.3 寸界面切换为英文或简体中文。只有所有驱动器都失能时，语言才会保存到控制器 Flash。

5 寸屏保持原来的英文标签页布局。

## 面板按键和状态灯

底板上 **KEY1** 是 STOP，**KEY2** 按住 1 秒是 RESUME，规则和触摸屏按钮相同。使能和失能只能在触摸屏和 PC 上操作。RGB 状态灯显示当前最严重的状态，例如机械臂没上电时红灯慢闪，PC 运动模式下绿灯常亮。
