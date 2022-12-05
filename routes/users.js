import express from 'express';

const router = express.Router();

const users = [
    {
        firstName:"Prathmesh",
        lastName : "Kumbhar",
        age : 21
    },
    {
        firstName:"Sushant",
        lastName : "Kumbhar",
        age : 18
    }
]

//all routes in here wstarting with /users
router.get('/',(req,res) => {
    console.log(users);
    res.send('Hello');
});


export default router;