const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
	reactStrictMode: true,
	swcMinify: true,
	// ref: https://dev.to/dolearning/importing-svgs-to-next-js-nna
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
});

module.exports = nextConfig;
