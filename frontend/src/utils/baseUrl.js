function baseUrl() {
  const productionUrl = 'https://recipe-app-2024-production.up.railway.app'
  const local = 'http://localhost:8000'
  return window.location.hostname == 'asdmasmd' ? local : productionUrl
}

export default baseUrl();
