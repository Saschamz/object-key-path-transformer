type ObjInput = { [key: string]: any }

function deepKeyTransformer(obj: ObjInput, currentPath?: string) {
  for (let key in obj) {
    const path = currentPath ? `${currentPath}.${key}` : key

    if (typeof obj[key] !== 'object') {
      const keyName = (currentPath ? currentPath + '.' : '') + key
      obj[key] = keyName
      continue
    }
    deepKeyTransformer(obj[key], path)
  }
}

function transformKeys<T>(obj: T): T {
  let modifiedObj = JSON.parse(JSON.stringify(obj))
  deepKeyTransformer(modifiedObj)

  return modifiedObj
}

export default transformKeys
