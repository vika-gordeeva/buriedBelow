import convict from 'convict';

const config = convict({
	env: {
		doc: `Sets the application environment`,
		format: ['production', 'staging', 'development'],
		default: 'development',
		env: 'NODE_ENV'
	},
	port: {
		doc: `Sets the server's bind port`,
		format: 'port',
		default: 3000,
		env: 'PORT',
		arg: 'port'
	}
});

config.validate({ allowed: 'strict' });

export default config;