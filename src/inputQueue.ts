const queue: Array<number | string> = []

const queueInsert = (value: string) => {
  queue.push(+value)
}
const queueReset = (): void => {
  queue.length = 0
  queue.push(0)
}

const queueInsertMethodsKey = (key: string): void => {
  const checkPrevKeyNextKey = (key: string): boolean => {
    const copyQueue = JSON.parse(JSON.stringify(queue))
    const prevItem = copyQueue.pop()
    return prevItem === key
  }
  const isMethodsKey = (): string | number | boolean => {
    const copyQueue: typeof queue = JSON.parse(JSON.stringify(queue))
    const methodsRegex = /^(?:\+|\-|\*|\/)+/
    const prevItem: number | string = copyQueue.pop()!

    return (
      prevItem && typeof prevItem === 'string' && !!prevItem.match(methodsRegex)
    )
  }
  // 前一鍵不可為功能鍵
  if (checkPrevKeyNextKey(key)) {
    return
  }
  // 若前一鍵為功能鍵則覆蓋當前鍵
  if (isMethodsKey()) {
    queue.pop()
    queue.push(key)
    return
  }

  queue.push(key)
}

export default { queue, queueInsert, queueReset, queueInsertMethodsKey }
