export default function(req, res) {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const user = data.blacklist.find(blacklist => blacklist.id === req.params);
      res.json(user);
    });
}