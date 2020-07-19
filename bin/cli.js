#!/usr/bin/env node

const meow = require("meow");
const { toPairs, set } = require("lodash");
const runner = require("./runner");
const cli = meow(
	`
  Usage
    $ multi-semantic-release

  Options
    --sequential-init  Avoid hypothetical concurrent initialization collisions.

  Examples
    $ multi-semantic-release
`,
	{
		flags: {
			/*execasync: {
				type: "boolean",
				alias: "sync",
			},*/
		},
	}
);

const processFlags = (flags) => toPairs(flags).reduce((m, [k, v]) => set(m, k, v), {});

runner(processFlags(cli.flags));
