import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('/about.html', {root:'htmls'});
});

export default router;