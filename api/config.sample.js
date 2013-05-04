var countlyConfig = {};

// Set your host IP or domain to be used in the emails sent
// countlyConfig.host = "YOUR_IP_OR_DOMAIN";

// Mail configuration
countlyConfig.mail = {};
countlyConfig.mail.from = '"Countly"';

// Mail subjects
countlyConfig.mail.subject = {};
countlyConfig.mail.subject.newMember = "Your Countly Account";
countlyConfig.mail.subject.updatedMember = "Your Countly Account- Password Change";
countlyConfig.mail.subject.passwordResetInfo = "Your Countly Account - Password Reset";

countlyConfig.mongodb = {};
countlyConfig.api = {};

countlyConfig.mongodb.host = "localhost";
countlyConfig.mongodb.db = "countly";
countlyConfig.mongodb.port = 27017;
countlyConfig.api.port = 3001;

module.exports = countlyConfig;
