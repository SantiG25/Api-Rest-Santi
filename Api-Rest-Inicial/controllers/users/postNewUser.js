const users = ("../../db/users.json");

module.exports = (req, res, next) => {
    const userID = req.params.id 
    const copyUsers = users;
    copyUsers['user${userId}'] =req.body;
    res.status(201).send(copyUsers)
}