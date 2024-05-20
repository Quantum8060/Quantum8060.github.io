export default function(req, res) {
  // Get the data from the request body
  const data = JSON.parse(req.body);

  // Edit the data.json file
  fs.readFile('data.json', (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error editing data" });
    } else {
      const jsonData = JSON.parse(data);
      jsonData.users = data.users.map(user => {
        if (user.email === data.email) {
          return { ...user, name: data.name };
        }
        return user;
      });
      fs.writeFile('data.json', JSON.stringify(jsonData), (err) => {
        if (err) {
          res.status(500).json({ message: "Error writing data" });
        } else {
          res.json({ message: "Data updated successfully" });
        }
      });
    }
  });
}