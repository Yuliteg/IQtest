const url = "https://swapi.dev/api/people/1/"

export function request(ur) {
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  }).catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}