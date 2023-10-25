const queue: Array<number> = []

const queueInsert = (value: string) => {
  queue.push(+value)
}
const queueReset = (): void => {
  queue.length = 0
  queue.push(0)
}

export default { queue, queueInsert, queueReset }
