export default function transformDate(dateNow: string) {
  return new Date(dateNow).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
