import express from 'express';

const router = express.Router();


//all routes in here wstarting with /users
router.get('/',(req,res) => {
    res.send('Hello');
});


export default router;