/**
 * Ajoute un élement dans un formData
 * @param formData
 * @param value
 * @param key
 * @param parentKey
 */
const appendToFormData = (
  formData: FormData,
  value: string | Blob,
  key: string,
  parentKey?: string
): FormData => {
  formData.append(parentKey ? `${parentKey}[${key}]` : key, value)
  return formData
}

/**
 * Convertit un tableau en formData
 * @param formData
 * @param array
 * @param key
 */
const arrayToFormData = (formData: FormData, array: Array<unknown>, key: string): FormData => {
  if (array.length === 0) {
    formData.append(`${key}[0]`, '')
    return formData
  }

  array.forEach((value, index: number) => {
    if (value instanceof Object) {
      formData = toFormData(value as Record<string, unknown>, `${key}[${index}]`, formData)
    } else if (value instanceof Blob || typeof value === 'string') {
      formData.append(`${key}[${index}]`, value)
    } else {
      formData.append(`${key}[${index}]`, String(value))
    }
  })

  return formData
}

/**
 * Convertit des données en FormData
 * @param data
 * @param parentKey
 * @param parentFormData
 */
const toFormData = (
  data: Record<string, unknown>,
  parentKey = '',
  parentFormData: FormData | null = null
): FormData => {
  let formData = parentFormData && parentKey ? parentFormData : new FormData()

  Object.entries(data).forEach(([key, value]) => {
    const childKey = parentKey ? `${parentKey}[${key}]` : key
    if (value === null) {
      formData = appendToFormData(formData, '', childKey)
    } else if (typeof value === 'string') {
      formData = appendToFormData(formData, value, childKey)
    } else if (typeof value === 'number') {
      formData = appendToFormData(formData, String(value), childKey)
    } else if (typeof value === 'boolean') {
      formData = appendToFormData(formData, String(value), childKey)
    } else if (value instanceof File) {
      formData = appendToFormData(formData, value, childKey)
    } else if (value instanceof Array) {
      formData = arrayToFormData(formData, value, childKey)
    } else if (value instanceof Object) {
      formData = toFormData(value as Record<string, unknown>, childKey, formData)
    } else {
      console.error('Type is not handled', value)
    }
  })

  return formData
}

export { toFormData }
