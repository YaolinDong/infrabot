// SPDX-License-Identifier: Apache-2.0
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'overview',
    'demos',
    'safety',
    'compatibility',
    {
      type: 'category',
      label: 'Get started',
      collapsed: false,
      items: ['get-started/choose-your-path', 'get-started/view-the-model'],
    },
    {
      type: 'category',
      label: 'Hardware',
      items: ['hardware/architecture', 'hardware/controller-board', 'hardware/actuators'],
    },
    {
      type: 'category',
      label: 'Firmware',
      items: ['firmware/control-modes', 'firmware/touchscreen', 'firmware/updates'],
    },
    {
      type: 'category',
      label: 'Software',
      items: ['software/sdk', 'software/ros2', 'software/lerobot'],
    },
    'roadmap',
  ],
};

export default sidebars;
