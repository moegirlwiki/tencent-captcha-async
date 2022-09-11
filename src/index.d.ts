declare class TencentCaptcha {
  constructor(
    appId: string,
    callback: (data: TencentCaptchaCallback) => void,
    options?: Partial<TencentCaptchaOptions>
  )
  show(): void
  destroy(): void
  getTicket(): { CaptchaAppId: string; ticket: string }
}

declare global {
  interface Window {
    TencentCaptcha: typeof TencentCaptcha
  }
}

export {}
