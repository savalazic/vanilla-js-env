/* eslint-disable no-restricted-globals, no-useless-escape */
function getQueryStringParameterByName(name) {
  const newName = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${newName}=([^&#]*)`);
  const results = regex.exec(location.search);
  return results == null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default function getBaseUrl() {
  // http://localhost:3000/?useMockApi=true
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:8081/'
    : '/';
}
