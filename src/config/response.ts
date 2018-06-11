import app from '../main'

export function error (content: string): void {
  (app as any).$Message.error({
    duration: 2,
    content
  })
}

export function success (content: string): void {
  (app as any).$Message.success({
    duration: 2,
    content
  })
}
