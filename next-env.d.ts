/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare const LOADING: { init: Function; destroy: Function }
declare const returnCitySN: {
  /**
   * ip
   */
  cip: string
  /**
   * 邮编
   */
  cid: string
  /**
   * 区域名
   */
  cname: string
}
