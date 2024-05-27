import bcrypt from 'bcryptjs'

const usersData = [
    {
        name : "Yogesh Patel",
        email : "yp766104@gmail.com",
        password : bcrypt.hashSync('bacon',8),
        isAdmin : true,
    },
    {
        name : "Dhawal Vijayvargiya",
        email : "dhawalVijayvargiya@gmail.com",
        password : bcrypt.hashSync('bacon',8),
    },
    {
        name : "Somya Panchal",
        email : "somyapancom@gmail.com",
        password : bcrypt.hashSync('bacon',8)
    }
]


export default usersData;