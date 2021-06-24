module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },

    images: {
        domains: ["static.wixstatic.com", "braintreepayments", "i.imgur.com"],
    },
};