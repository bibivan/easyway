export const isNotNull = <T>(arg: T): arg is Exclude<T, null> => {
  return arg !== null
}

export const isObject = (elem: unknown): elem is Record<PropertyKey, unknown> => {
  return typeof elem === 'object' && elem !== null && !Array.isArray(elem)
}

export const isKeyOf = <T>(key: string, obj: any): key is Extract<keyof T, string> => {
  return isObject(obj) ? key in obj : false
}
