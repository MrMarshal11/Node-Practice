import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('/contact-us.html', {root:'htmls'});
});

export default router;