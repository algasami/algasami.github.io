const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
	reactStrictMode: true,
	output: "export",
	swcMinify: true,
	// ref: https://dev.to/dolearning/importing-svgs-to-next-js-nna
	webpack: (config, {isServer}) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		if (isServer) {
		//	require('./scripts/generate-sitemap');
		}
		return config;
	},
});

module.exports = nextConfig;
