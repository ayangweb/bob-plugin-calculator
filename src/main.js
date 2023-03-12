var config = require("./config");

function supportLanguages() {
	return config.languages;
}

function translate(query, completion) {
	try {
		const { text, detectFrom: from, detectTo: to } = query;

		completion({
			result: {
				from,
				to,
				toParagraphs: [String(eval(text))],
			},
		});
	} catch ({ message }) {
		completion({
			error: {
				type: "unknown",
				message,
			},
		});
	}
}

module.exports = {
	supportLanguages,
	translate,
};
