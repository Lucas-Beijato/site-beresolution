function IsIOS(): boolean {
  let navUser = navigator.userAgent
  if (navUser.includes('Mac') || navUser.includes('iPhone') || navUser.includes('iPodi') || navUser.includes('Pad')) {
    return true
  }
  return false
}

export { IsIOS }
