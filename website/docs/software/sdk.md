---
sidebar_position: 1
title: C++ and Python SDK
---

# C++ and Python SDK

Source, installation and examples: [infrabot-sdk](https://github.com/YaolinDong/infrabot-sdk) · [API reference](https://github.com/YaolinDong/infrabot-sdk/blob/main/docs/api.md) · [real-time loop](https://github.com/YaolinDong/infrabot-sdk/blob/main/docs/realtime.md) · [C++ examples](https://github.com/YaolinDong/infrabot-sdk/tree/main/examples/cpp) · [Python examples](https://github.com/YaolinDong/infrabot-sdk/tree/main/examples/python)

The SDK is a Linux C++17 library with Python bindings. One `Robot` object handles discovery, telemetry and commands. The Qt control GUI uses the same library.

## Read the controller state

This read-only example disables the heartbeat, prints the firmware version and waits up to half a second for a joint sample. Joint positions are in radians.

```python
import time
import infrabot

robot = infrabot.Robot("192.168.0.50")
robot.set_heartbeat(False)
robot.connect()
try:
    print("Firmware", robot.info().firmware)
    for _ in range(50):
        state = robot.state()
        if state.joints.host_time_us:
            print("J1", state.joints.position[0], "rad")
            break
        time.sleep(0.01)
    else:
        raise TimeoutError("No telemetry sample")
finally:
    robot.disconnect()
```

## Timing classes

Every public call is labelled in the headers:

| Class | Examples | Use |
|---|---|---|
| RT | `state`, `servej`, `servep` | Inside a 1 kHz loop; never waits for the controller |
| Non-blocking | `info`, `submit_movej`, `hold_command` | Supervisory code |
| Blocking | `connect`, `servo_on`, `switch_mode`, `movej` | Setup, operator actions and teardown |

Call only RT functions from a 1 kHz loop. For the lowest host latency use a PREEMPT_RT kernel and pin the control thread to a CPU.

## Compatibility

SDK 0.1.3 speaks protocol 1.0. See [Compatibility](../compatibility.md).
