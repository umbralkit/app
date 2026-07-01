import { PersistedState } from 'runed';

enum AppTheme {
	Dark = 'dark',
	Light = 'light'
}

class State {
	theme: AppTheme = AppTheme.Dark;
	navbarOpen: boolean = true;
}

const state = new PersistedState('state', new State(), {
	syncTabs: false,
	connected: false
});

export default state;
