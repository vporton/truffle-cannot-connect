Demonstrations of a Truffle bug:

```
npx ganache-cli -d  # in another terminal
npx truffle deploy --network local --reset
...
ProviderError: CONNECTION ERROR: Couldn't connect to node http://localhost:8545.
    at module.exports (/home/porton/Projects/bugs/truffle-cannot-connect/migrations/03_deploy_science.js:5:17)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at Migration._deploy (/home/porton/Projects/bugs/truffle-cannot-connect/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:73:1)
    at Migration._load (/home/porton/Projects/bugs/truffle-cannot-connect/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:55:1)
    at Migration.run (/home/porton/Projects/bugs/truffle-cannot-connect/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:171:1)
    at Object.runMigrations (/home/porton/Projects/bugs/truffle-cannot-connect/node_modules/truffle/build/webpack:/packages/migrate/index.js:150:1)
    at Object.runFrom (/home/porton/Projects/bugs/truffle-cannot-connect/node_modules/truffle/build/webpack:/packages/migrate/index.js:110:1)
    at Object.runAll (/home/porton/Projects/bugs/truffle-cannot-connect/node_modules/truffle/build/webpack:/packages/migrate/index.js:114:1)
    at Object.run (/home/porton/Projects/bugs/truffle-cannot-connect/node_modules/truffle/build/webpack:/packages/migrate/index.js:79:1)
    at runMigrations (/home/porton/Projects/bugs/truffle-cannot-connect/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:269:1)
    at /home/porton/Projects/bugs/truffle-cannot-connect/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:231:1
Truffle v5.1.59 (core: 5.1.59)
Node v12.16.2
```
