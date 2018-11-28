module.exports = {
	"extends": "airbnb",
	"globals": {
		"alert": false,
		"describe": false,
		"before": false,
		"beforeEach": false,
		"it": false,
		"ReactiveVar": false,
		"Template": false,
	},
	"rules": {
		'import/extensions': ['off', 'never'],
		"import/no-absolute-path": "off",
		"import/no-unresolved": "off",
	}
};