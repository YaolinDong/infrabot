---
sidebar_position: 3
title: Compatibility
---

# Versions and compatibility

Each repository is versioned on its own. The table lists versions tested together, by the date they were tested.

| Date | Arm | Firmware | SDK | Protocol | Description | Controller |
|---|---|---|---|---|---|---|
| 2026-11-23 | H7C | 0.1.0 | 0.1.0 | 1.0 | 0.1.0 | Fire H743 Challenger V2 core module; 4.3-inch carrier board R8; optional enclosure S8 or C3 |

## Protocol

The firmware repository owns the canonical `protocol.h`. The SDK carries a byte-identical copy, and its tests compare the two.

- When the SDK connects, it asks the controller for its protocol version before it starts the heartbeat or sends any command.
- **Major** versions must match. If they differ, `connect` fails and reports both versions.
- **Minor** versions only add features. Detect optional features with the capability bits reported by the controller.
- Firmware that only answers the older V1 information request is treated as protocol 1.0, and its firmware version is reported as unknown.

## Robot model

The firmware's gravity model and the robot description use the same H7C bare-arm parameters: masses, centres of mass, inertia, joint origins and limits. The gripper and any tool are not modelled.
