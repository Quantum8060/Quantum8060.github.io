export default function(req, res) {
  // Handle posts data request
  res.json([{ title: "Post 1", body: "This is post 1" }, { title: "Post 2", body: "This is post 2" }]);
}