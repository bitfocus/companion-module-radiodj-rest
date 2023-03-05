import { InstanceBase, Regex, runEntrypoint } from '@companion-module/base'
import { updateActions } from './actions.js'
import Rest from './vendor/companion/Rest.js'

/**
 * Companion instance class for the RadioDJ REST API.
 *
 * @extends InstanceBase
 * @version 1.0.0
 * @since 1.0.0
 * @author Keith Rocheck <keith.rocheck@gmail.com>
 */
class RadiodjRestInstance extends InstanceBase {
	/**
	 * Create an instance of a RadioDJ module.
	 *
	 * @param {Object} internal - Companion internals
	 * @since 1.0.0
	 */
	constructor(internal) {
		super(internal)

		this.updateActions = updateActions.bind(this)
	}

	/**
	 * Process an updated configuration array.
	 *
	 * @param {Object} config - the new configuration
	 * @access public
	 * @since 1.0.0
	 */
	async configUpdated(config) {
		this.config = config
	}

	/**
	 * Creates the configuration fields for web config.
	 *
	 * @returns {Array} the config fields
	 * @access public
	 * @since 1.0.0
	 */
	getConfigFields() {
		return [
			{
				type: 'text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: "Make sure the 'Rest Server' plugin is enabled and functioning properly.",
			},
			{
				type: 'textinput',
				id: 'host',
				label: 'Target IP',
				width: 6,
				default: '127.0.0.1',
				regex: Regex.IP,
			},
			{
				type: 'textinput',
				id: 'port',
				label: 'Target Port',
				width: 4,
				default: '8080',
				regex: Regex.PORT,
			},
			{
				type: 'textinput',
				id: 'password',
				label: 'Password',
				width: 6,
				default: 'changeme',
			},
		]
	}

	/**
	 * Main initialization function called once the module
	 * is OK to start doing things.
	 *
	 * @param {Object} config - the configuration
	 * @access public
	 * @since 1.0.0
	 */
	async init(config) {
		this.config = config

		this.updateActions()

		this.updateStatus('ok')
	}

	/**
	 * Send a command to the software.
	 *
	 * @param {string} cmd - the command
	 * @param {string} arg - an extra argument
	 * @access public
	 * @since 1.0.0
	 */
	sendCommand(cmd, arg) {
		let uri = `http://${this.config.host}:${this.config.port}/opt?auth=${this.config.password}&command=${cmd}`

		if (arg !== undefined && arg.length > 0) {
			uri += `&arg=${arg}`
		}

		uri = encodeURI(cmd)

		if (cmd.length > 0) {
			this.log('debug', `Get: ${uri}`)
			Rest.Get(uri, (err, result) => {
				if (err !== null) {
					this.updateStatus('unknown_error', 'GET failed (' + result.error.code + ')')
				} else {
					this.updateStatus('ok')
				}
			})
		} else {
			this.log('error', 'Request not sent.  Data is incomplete.')
		}
	}
}

runEntrypoint(RadiodjRestInstance, [])
