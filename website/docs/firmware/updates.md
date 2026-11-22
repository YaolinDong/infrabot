---
sidebar_position: 3
title: Firmware updates
---

# Firmware updates

The flash holds a resident loader and two application slots, A and B. A release package (`.ifw`) contains signed images for both slots.

1. The SDK's update tool verifies the package signature on the PC.
2. Over Ethernet, the controller shows the source address and image ID on the touchscreen. You must tap **Allow** within 60 seconds. Rejecting or ignoring the request cancels the update before anything is erased.
3. The controller writes the inactive slot and starts it on trial.
4. The SDK confirms that the new application is running. An unconfirmed or failed trial returns to the previous application.

SWD with a CMSIS-DAP probe is an independent path that uses the same signed package and needs neither a network cable nor the touchscreen. A new or empty board is provisioned once over SWD with a factory image.

Before any update, support the arm, disable the drives and disconnect motor power. Keep the controller powered.

## Publisher keys

A board accepts releases signed by the publisher trusted by its loader. The public key ships with the firmware and the SDK. To distribute your own builds, generate your own Ed25519 key, keep the private key outside any repository, and provision your boards with a loader built for that key. Changing a board's trusted publisher requires SWD access.
