export interface TencentCaptchaCallback {
  ret: 0 | 2
  ticket: string
  randstr: string
  errorCode: number
  errorMessage: string
}
export interface TencentCaptchaOptions {
  bizState: any
  enableDarkMode: boolean | string
  sdkOpts: { width?: number; height?: number }
  ready: (ctx: { sdkView: { width: number; height: number } }) => void
  needFeedBack: boolean | string
  loading: boolean
  userLanguage: TencentCaptchaLanguages
  type: 'popup' | 'embed'
}
export type TencentCaptchaLanguages =
  | 'zh-cn'
  | 'zh-hk'
  | 'zh-tw'
  | 'en'
  | 'ar'
  | 'my'
  | 'fr'
  | 'de'
  | 'he'
  | 'hi'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lo'
  | 'ms'
  | 'pl'
  | 'pt'
  | 'ru'
  | 'es'
  | 'th'
  | 'tr'
  | 'vi'