export default function getBaseUrl() {
  // http://localhost:3000/?useMockApi=true
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:8081/'
    : '/';
}

function getQueryStringParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(location.search);
  return results == null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
