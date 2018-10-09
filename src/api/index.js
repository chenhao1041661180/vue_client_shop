/**
 * 包含N个接口请求函数的模块
 * 函数的返回值：promise对象
 */
import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const  getAddress = (geohash)=> ajax(`/position/${geohash}`)

// 2、获取食品分类列表
export const getFoodTypes = () => ajax('/index_category')
// 3、根据经纬度获取商铺列表
export const getShops = (longitude, latitude) => ajax('/shops',{longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const getSearchShops = (keyword,geohash) => ajax('/search_shops',{keyword,geohash})
// 5、获取一次性验证码
export const getCaptcha = () => ajax('/captcha')
// 6、用户名密码登陆
export const reqPwdLogin = (name,pwd,captcha) => ajax('/login_pwd',{name,pwd,captcha},'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcod',{phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax('/login_sms',{phone, code},'POST')
// 9、根据会话获取用户信息
export const getUserInfo = () => ajax('//userinfo')
// 10、用户登出
export const loginOut = () => ajax('/logout')
