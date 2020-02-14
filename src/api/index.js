const api = async (url, lastID) => {
  const response = await fetch(`${url}?limit=4&start_id=${lastID}`)
  const json = await response.json()

  return json;
}

export default api