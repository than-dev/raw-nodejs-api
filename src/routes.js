const { listUsers, getUserById, createUser, deleteUser, updateUser } = require('./controllers/userController')

module.exports = [
    {
        method: 'GET',
        endpoint: '/users',
        action: listUsers
    },
    {
        method: 'GET',
        endpoint: '/user/:id',
        action: getUserById
    },
    {
        method: 'POST',
        endpoint: '/new/user',
        action: createUser
    },
    {
        method: 'DELETE',
        endpoint: '/delete/user/:id',
        action: deleteUser
    },
    {
        method: 'PATCH',
        endpoint: '/update/user/:id',
        action: updateUser
    }
]