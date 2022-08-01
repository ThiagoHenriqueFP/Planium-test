const { Router } = require('express');
const beneficiaries = require('../controllers/beneficiaries');

const router = Router();

router.post('/beneficiaries', beneficiaries.save);
router.get('/beneficiaries', beneficiaries.list);

module.exports = router;
