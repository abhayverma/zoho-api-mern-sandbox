'use strict';

const fetch = require('node-fetch');
const Promise = require('bluebird');
const globalConfig = require('../global-config.json');
fetch.Promise = Promise;

module.exports = {
  createZohoContact: function (req, res) {
    return new Promise(function (resolve, reject) {
      fetch(
        `${globalConfig.zoho.contactsURL}?organization_id=${globalConfig.zoho.orgID}`,
        {
          method: 'POST',
          body: req.body,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': `Zoho- authtoken ${globalConfig.zoho.authToken}`
          },
        })
        .then(handleResponse)
        .then(response => {
          return res.status(200).json({ success: true, data: response });
        })
        .then(resolve)
        .catch(error => {
          return res.status(401).json({ success: false, error });
        });
    });
  },
  fetchZohoContacts: function (req, res) {
    return new Promise(function (resolve, reject) {
      const page = req.query.page ? req.query.page : globalConfig.default.page;
      const limit = req.query.limit ? req.query.limit : globalConfig.default.limit;
      fetch(
        `${globalConfig.zoho.contactsURL}?organization_id=${globalConfig.zoho.orgID}&page=${page}&per_page=${limit}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': `Zoho-authtoken ${globalConfig.zoho.authToken}`
          },
        })
        .then(handleResponse)
        .then(response => {
          return res.status(200).json({ success: true, data: response });
        })
        .then(resolve)
        .catch(error => {
          return res.status(401).json({ success: false, error });
        });
    });
  }
};

function handleResponse(response) {
  return response.json()
    .then((json) => {
      if (!response.ok) {
        const error = Object.assign({}, json, {
          status: response.status,
          statusText: response.statusText,
        });
        return Promise.reject(error);
      }
      return json;
    });
}
