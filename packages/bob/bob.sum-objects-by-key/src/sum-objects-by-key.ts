const sumObjectsByKey = (...objs: Record<string, number>[]) =>
  objs.reduce((a, b) => {
    for (const k in b) {
      if (k in b) {
        a[k] = (a[k] || 0) + b[k]
      }
    }
    return a
  }, {})

export { sumObjectsByKey }
