module.exports = {
	apps: [
		{
			name: "app",
			script: "npm run build && npm run start",
			env: {
				NODE_ENV: "development",
			},
			env_production: {
				NODE_ENV: "production",
			},
		},
	],
	deploy: {
		production: {
			host: "172.104.39.247",
			key: "~/.ssh/id_rsa",
			user: "algasami",
			ref: "origin/master", // (use 'origin/master' for your master branch,
			repo: "git@github.com:algasami/portfolio_v1.git", // your repo url
			path: "/var/www/",
			"post-deploy":
				"npm install && pm2 reload ecosystem.config.js --env production && pm2 save",
		},
	},
};
