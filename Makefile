setup:
	npm i

server:
	cd backend && node server.js

dev:
	npm run dev & make server

typecheck-js:
	npm run typecheck

fmt-js:
	npx -p prettier@latest -p pretty-quick pretty-quick

test-js:
	npm test

lint-js:
	npm run lint

clean:
	npm run clean