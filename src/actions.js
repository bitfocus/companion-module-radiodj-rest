import { Fields } from './setup.js'

/**
 * Setup the actions.
 *
 * @access public
 * @since 1.0.0
 */
export function updateActions() {
	this.setActionDefinitions({
		PlayPlaylistTrack: {
			name: 'Play playlist track',
			options: [Fields.TrackNumber],
			callback: ({ options }) => {
				this.sendCommand('PlayPlaylistTrack', options.arg)
			},
		},
		RemovePlaylistTrack: {
			name: 'Remove playlist track',
			options: [Fields.TrackNumber],
			callback: ({ options }) => {
				this.sendCommand('RemovePlaylistTrack', options.arg)
			},
		},
		StopPlayer: {
			name: 'Stop player',
			options: [],
			callback: ({ options }) => {
				this.sendCommand('StopPlayer')
			},
		},
		PausePlayer: {
			name: 'Set pause state',
			options: [Fields.PauseState],
			callback: ({ options }) => {
				this.sendCommand('PausePlayer', options.arg)
			},
		},
		RestartPlayer: {
			name: 'Restart player',
			options: [],
			callback: ({ options }) => {
				this.sendCommand('RestartPlayer')
			},
		},
		PlayFromIntro: {
			name: 'Play from intro',
			options: [],
			callback: ({ options }) => {
				this.sendCommand('PlayFromIntro')
			},
		},
		ClearPlaylist: {
			name: 'Clear playlist',
			options: [],
			callback: ({ options }) => {
				this.sendCommand('ClearPlaylist')
			},
		},
		EnableAutoDJ: {
			name: 'Set Auto DJ state',
			options: [Fields.EnableState],
			callback: ({ options }) => {
				this.sendCommand('EnableAutoDJ', options.arg)
			},
		},
		EnableAssisted: {
			name: 'Set Assisted state',
			options: [Fields.EnableState],
			callback: ({ options }) => {
				this.sendCommand('EnableAssisted', options.arg)
			},
		},
		EnableEvents: {
			name: 'Set event run state',
			options: [Fields.EnableState],
			callback: ({ options }) => {
				this.sendCommand('EnableEvents', options.arg)
			},
		},
		RefreshEvents: {
			name: 'Refresh events',
			options: [],
			callback: ({ options }) => {
				this.sendCommand('RefreshEvents')
			},
		},
		EnableInput: {
			name: 'Set input state',
			options: [Fields.EnableState],
			callback: ({ options }) => {
				this.sendCommand('EnableInput', options.arg)
			},
		},
		PlaycartByNumber: {
			name: 'Play cart by number',
			options: [Fields.CartNumber],
			callback: ({ options }) => {
				this.sendCommand('PlaycartByNumber', options.arg)
			},
		},
		ShowMessage: {
			name: 'Display message in RadioDJ',
			options: [Fields.MessageText],
			callback: ({ options }) => {
				this.sendCommand('ShowMessage', options.arg)
			},
		},
	})
}
