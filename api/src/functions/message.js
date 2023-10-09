const { app } = require("@azure/functions");

async function message(request, context) {
    context.log(`Http function processed request for url "${request.url}"`);
    return {
        jsonBody: [
        {
            name: "Ramon",
            lastname: "Ornelas"
        },
        {
            name:"Carlos",
            lastname:"Ornelas"
        }
    ]
    };
};

app.http('message', {
    route: "message",
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: message
});

module.exports = message