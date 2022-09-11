import type {} from './index.d'
import type { TencentCaptchaCallback, TencentCaptchaOptions } from './types'

export async function useTencentCaptcha(
  appId: string,
  options?: Partial<TencentCaptchaOptions>
): Promise<TencentCaptchaCallback> {
  if (!window.TencentCaptcha) {
    throw new ReferenceError('TencentCapcha is not defined')
  }

  return new Promise((resolve, reject) => {
    const app = new window.TencentCaptcha(
      appId,
      (data: TencentCaptchaCallback) => {
        if (data.errorCode && data.errorCode > 1000) {
          return reject({
            code: data.errorCode,
            message: data.errorMessage,
          })
        }
        if (data.ret !== 0) {
          return reject({
            code: 1000,
            message: '用户主动关闭验证码',
          })
        }
        return resolve(data)
      },
      options
    )
    app.show()
  })
}
