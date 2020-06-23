var groupId = whatever ur group id is lol
var cookie = "lol im not dumb"
const express = require('express')
const rbx = require('noblox.js')
const app = express();
app.use(express.static("public"));
async function startApp() {
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser)
}
startApp()
app.get("/setrank", (req, res) => {
  var User = req.param("user")
  var Rank = req.param("rank")
  try {
    rbx.setRank(groupId, parseInt(User), parseInt(Rank))
  } catch (err) {
    console.log(err)
  }
  res.json(`Ranked user ${parseInt(User)} to ${parseInt(Rank)}`)
})
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
})
