/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

enum UploadFileState {
  SELECT_FILE = 'SELECT_FILE',
  LOADING = 'LOADING',
  UPLOAD_FAILED = 'UPLOAD_FAILED',
  UPLOAD_SUCCESSED = 'UPLOAD_SUCCESSED',
}

regressionTest.describe('upload', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('upload/basic');
    await expect(page).toHaveScreenshot();
  });

  regressionTest('States', async ({ page }) => {
    await page.goto('upload/states');

    const uploads = await page.locator('ix-upload').all();

    await Promise.all(
      uploads.map(async (locator, index) => {
        let state: UploadFileState;
        switch (index) {
          case 0:
            state = UploadFileState.LOADING;
            break;
          case 1:
            state = UploadFileState.SELECT_FILE;
            break;
          case 2:
            state = UploadFileState.UPLOAD_FAILED;
            break;
          case 3:
            state = UploadFileState.UPLOAD_SUCCESSED;
            break;
          default:
            throw Error('Invalid upload file state');
        }

        await locator.evaluate(
          (elm: HTMLIxUploadElement, state: UploadFileState) => {
            elm.state = state;
          },
          state
        );
      })
    );

    await expect(page).toHaveScreenshot();
  });
});
