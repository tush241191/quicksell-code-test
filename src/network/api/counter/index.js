import http from "../../common/http";

export async function updateCounter(count) {

  const url = 'front-end.json'

  const { data } = await http.post(url, {
    tushar: count
  })

  return data
}

export async function getCounter() {

  const url = 'front-end/tushar.json'

  const { data } = await http.get(url)

  return data
}