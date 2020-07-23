import res from './http'

/**
 *
 * @param params
 * @returns {Promise<AxiosResponse<any>> | boolean}
 * @constructor
 */
export const BOOK = params => res('get', '/article/selectOne', params)

/**
 *
 * @returns {Promise<AxiosResponse<any>> | boolean}
 * @constructor
 */
export const ALL = () => res('get', '/article')
