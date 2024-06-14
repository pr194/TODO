export default function request(url) {
  return fetch(url, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => {
      return data;
    });
}
