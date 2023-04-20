
export async function getUser() {
  const url = "https://swapi.dev/api/people/1/"
  try {
    let res = await fetch(url)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}