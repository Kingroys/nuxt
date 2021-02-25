build-api: ##Build bot-message API mock
build-api:
	json-server --watch static/mocks/bot-messages.json --port 3001
