install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

even:
	npx babel-node -- src/bin/brain-even.js

calc:
	npx babel-node -- src/bin/brain-calc.js

gcd:
	npx babel-node -- src/bin/brain-gcd.js

progression:
	npx babel-node -- src/bin/brain-progression.js

prime:
	npx babel-node -- src/bin/brain-prime.js

lint:
	npx eslint .

publish:
	npm publish
