<!--
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxTimePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxTimePicker
    format="hh:mm:ss a"
    time="01:15:10 AM"
    :hourInterval="2"
    :minuteInterval="15"
    :secondInterval="10"
  />
</template>
