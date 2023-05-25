export const setStore = (key: string, data: string | boolean | number | null | undefined | unknown[] | Object) => {
  if (data === null || data === undefined) {
    localStorage.removeItem(key)
  } else {
    let value: string = ''

    switch (typeof data) {
      case 'boolean':
      case 'number':
        value = `${data}`
        break
      case 'string':
        value = data
        break
      case 'object':
        value = JSON.stringify(data)
      default:
        throw new Error('type does not support')
    }

    localStorage.setItem(key, value)
  }
}

export const getStore = <T = boolean | number | string | Object | null>(key: string): T => {
  const value = localStorage.getItem(key)
  let result: unknown = null

  if (value === 'false') {
    result = false
  } else if (value === 'true') {
    result = true
  } else if (value) {
    if (/^[0-9]+$/.test(value)) {
      result = Number(value)
    } else {
      try {
        result = JSON.parse(value)
      } catch {
        result = value
      }
    }
  }

  return result as T
}
