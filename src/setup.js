import { Regex } from '@companion-module/base'

export const Choices = {
	Disable: [
		{ id: 0, label: 'Disable' },
		{ id: 1, label: 'Enable' },
	],
	Pause: [
		{ id: 0, label: 'Unpause' },
		{ id: 1, label: 'Pause' },
	],
}

export const Fields = {
	CartNumber: {
		type: 'textinput',
		id: 'arg',
		label: 'Cart #',
		default: 1,
		regex: Regex.NUMBER,
	},
	EnableState: {
		type: 'dropdown',
		label: 'State',
		id: 'arg',
		default: 1,
		choices: Choices.Disable,
	},
	MessageText: {
		type: 'textinput',
		id: 'arg',
		label: 'Message Text',
		default: 1,
		regex: Regex.SOMETHING,
	},
	PauseState: {
		type: 'dropdown',
		label: 'State',
		id: 'arg',
		default: 1,
		choices: Choices.Pause,
	},
	TrackNumber: {
		type: 'textinput',
		id: 'arg',
		label: 'Track number (zero based)',
		default: 0,
		regex: Regex.NUMBER,
	},
}
