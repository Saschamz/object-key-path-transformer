type ObjInput = { [key: string]: any }

function deepKeyTransformer(obj: ObjInput, parentKey?: string) {
  for (let key in obj) {
    if (typeof obj[key] !== 'object') {
      obj[key] = (parentKey ? `${parentKey}.` : '') + key
      continue
    }
    deepKeyTransformer(obj[key], key)
  }
}

function transformKeys<T>(obj: T): T {
  let modifiedObj = JSON.parse(JSON.stringify(obj))
  deepKeyTransformer(modifiedObj)

  return modifiedObj
}

export default transformKeys
