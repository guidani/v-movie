export default async function getData(url: string) {
  const response = await fetch(url)
  const json = response.json()
  return json
}