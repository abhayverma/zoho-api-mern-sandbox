const express = require('express');

const ZohoContacts = require('../controllers/zoho-contacts');

const router = express.Router()

router.post('/contacts', ZohoContacts.createZohoContact)
router.get('/contacts', ZohoContacts.fetchZohoContacts)

module.exports = router;
