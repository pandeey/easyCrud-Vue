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

export const ADD = params => res('post', '/article/sel', params)

/**
 * 查询
 * @param params
 * @returns {Promise<AxiosResponse<any>> | boolean}
 * @constructor
 */
export const QUERY = params => res('post', '/query', params)
