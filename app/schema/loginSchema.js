module.exports = {
    body: {
        type: 'object',
        properties: {
            userId: { type: 'string' },
            password: { type: 'string' }
        },
        required: ['userId', 'password']
    }
};
