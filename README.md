# tencent-captcha-async

Promise based TencentCaptcha.

## Usage

**Types**

```ts
async function useTencentCaptcha(
  appId: string,
  options?: Partial<TencentCaptchaOptions>
): Promise<TencentCaptchaCallback>
```

**Example**

```ts
import { useTencentCaptcha } from 'tencent-captcha-async'
useTencentCaptcha('Your CaptchaAppId here', {
  // options
})
  // CHECK PASSED
  .then(({ ticket, randStr }) => {
    // do something
  })
  // CHECK FAILED
  .catch(({ errorCode, errorMessage }) => {
    // handle error
  })
```

See more: <https://cloud.tencent.com/document/product/1110/36841>
