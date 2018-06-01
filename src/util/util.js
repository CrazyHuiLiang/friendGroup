
// 获取本地静态资源（图片）路径
export function getImagePath (name, type = '', abs = '../../') {
  // debugger
  if (WXEnvironment.platform === 'Web') {
    return `${abs}assets/img/${name}${type}`
  } else if (WXEnvironment.platform === 'android') {
    return `local:///${name}`
  } else {
    return `local:///bundlejs/assets/img/${name}${type}`
  }
}
export function getEntryUrl (name) {
  if (weex.config.env.platform === 'Web') {
    return './' + name + '.html'
  } else {
    let arr = weex.config.bundleUrl.split('/')
    arr.pop()
    arr.push(name + '.js')
    return arr.join('/')
  }
}
