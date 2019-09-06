const fs = require('fs');
const jwt = require('jsonwebtoken');

// use 'utf8' to get string instead of byte array  (512 bit key)
const privateKEY = fs.readFileSync('./../keys/private.key', 'utf8');
const publicKEY = fs.readFileSync('./../keys/public.key', 'utf8');

module.exports = {

    // creating token
    sign: (payload) => {
        sOptions = {
            issuer: 'cb@tgs',
            subject: 'jackeye.tgs.com',
            audience: 'jackeye' // this should be provided by client for now keeping it static
        }
        // Token signing options
        const signOptions = {
            issuer: sOptions.issuer,
            subject: sOptions.subject,
            audience: sOptions.audience,
            expiresIn: '1d',    // 1 days validity
            algorithm: 'RS256'
        };
        return jwt.sign(payload, privateKEY, signOptions);
    },

    // verifying token
    verify: (token) => {
        vOption = {
            issuer: 'cb@tgs',
            subject: 'jackeye.tgs.com',
            audience: 'jackeye' // this should be provided by client for now keeping it static
        }
        const verifyOptions = {
            issuer: vOption.issuer,
            subject: vOption.subject,
            audience: vOption.audience,
            expiresIn: "30d",
            algorithm: ["RS256"]
        };
        try {
            return jwt.verify(token, publicKEY, verifyOptions);
        } catch (err) {
            return false;
        }
    },

    // decoding token
    decode: (token) => {
        return jwt.decode(token, { complete: true });
        //returns null if token is invalid
    }
};
