/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/lib/commands/install.js TAP should utilize devEngines 2x error case > must match snapshot 1`] = `
silly config load:file:{CWD}/npmrc
silly config load:file:{CWD}/prefix/.npmrc
silly config load:file:{CWD}/home/.npmrc
silly config load:file:{CWD}/global/etc/npmrc
verbose title npm
verbose argv "--fetch-retries" "0" "--cache" "{CWD}/cache" "--loglevel" "silly" "--color" "false"
verbose logfile logs-max:10 dir:{CWD}/cache/_logs/{DATE}-
verbose logfile {CWD}/cache/_logs/{DATE}-debug-0.log
silly logfile done cleaning log files
verbose stack Error: The developer of this package has specified the following through devEngines
verbose stack Invalid engine "runtime"
verbose stack Invalid name "nondescript" does not match "node" for "runtime"
verbose stack     at Install.checkDevEngines ({CWD}/lib/base-cmd.js:182:27)
verbose stack     at MockNpm.#exec ({CWD}/lib/npm.js:251:7)
verbose stack     at MockNpm.exec ({CWD}/lib/npm.js:207:9)
error code EBADDEVENGINES
error EBADDEVENGINES The developer of this package has specified the following through devEngines
error EBADDEVENGINES Invalid engine "runtime"
error EBADDEVENGINES Invalid name "nondescript" does not match "node" for "runtime"
error EBADDEVENGINES {
error EBADDEVENGINES   current: { name: 'node', version: 'v22.5.1' },
error EBADDEVENGINES   required: { name: 'nondescript', onFail: 'error' }
error EBADDEVENGINES }
`

exports[`test/lib/commands/install.js TAP should utilize devEngines 2x warning case > must match snapshot 1`] = `
silly config load:file:{CWD}/npmrc
silly config load:file:{CWD}/prefix/.npmrc
silly config load:file:{CWD}/home/.npmrc
silly config load:file:{CWD}/global/etc/npmrc
verbose title npm
verbose argv "--fetch-retries" "0" "--cache" "{CWD}/cache" "--loglevel" "silly" "--color" "false"
verbose logfile logs-max:10 dir:{CWD}/cache/_logs/{DATE}-
verbose logfile {CWD}/cache/_logs/{DATE}-debug-0.log
silly logfile done cleaning log files
warn EBADDEVENGINES The developer of this package has specified the following through devEngines
warn EBADDEVENGINES Invalid engine "runtime"
warn EBADDEVENGINES Invalid name "nondescript" does not match "node" for "runtime"
warn EBADDEVENGINES {
warn EBADDEVENGINES   current: { name: 'node', version: 'v22.5.1' },
warn EBADDEVENGINES   required: { name: 'nondescript', onFail: 'warn' }
warn EBADDEVENGINES }
warn EBADDEVENGINES Invalid engine "cpu"
warn EBADDEVENGINES Invalid name "risv" does not match "arm64" for "cpu"
warn EBADDEVENGINES {
warn EBADDEVENGINES   current: { name: 'arm64' },
warn EBADDEVENGINES   required: { name: 'risv', onFail: 'warn' }
warn EBADDEVENGINES }
silly packumentCache heap:4345298944 maxSize:1086324736 maxEntrySize:543162368
silly idealTree buildDeps
silly reify moves {}
silly audit report null

up to date, audited 1 package in {TIME}
found 0 vulnerabilities
`

exports[`test/lib/commands/install.js TAP should utilize devEngines failure and warning case > must match snapshot 1`] = `
silly config load:file:{CWD}/npmrc
silly config load:file:{CWD}/prefix/.npmrc
silly config load:file:{CWD}/home/.npmrc
silly config load:file:{CWD}/global/etc/npmrc
verbose title npm
verbose argv "--fetch-retries" "0" "--cache" "{CWD}/cache" "--loglevel" "silly" "--color" "false"
verbose logfile logs-max:10 dir:{CWD}/cache/_logs/{DATE}-
verbose logfile {CWD}/cache/_logs/{DATE}-debug-0.log
silly logfile done cleaning log files
warn EBADDEVENGINES The developer of this package has specified the following through devEngines
warn EBADDEVENGINES Invalid engine "cpu"
warn EBADDEVENGINES Invalid name "risv" does not match "arm64" for "cpu"
warn EBADDEVENGINES {
warn EBADDEVENGINES   current: { name: 'arm64' },
warn EBADDEVENGINES   required: { name: 'risv', onFail: 'warn' }
warn EBADDEVENGINES }
verbose stack Error: The developer of this package has specified the following through devEngines
verbose stack Invalid engine "runtime"
verbose stack Invalid name "nondescript" does not match "node" for "runtime"
verbose stack     at Install.checkDevEngines ({CWD}/lib/base-cmd.js:182:27)
verbose stack     at MockNpm.#exec ({CWD}/lib/npm.js:251:7)
verbose stack     at MockNpm.exec ({CWD}/lib/npm.js:207:9)
error code EBADDEVENGINES
error EBADDEVENGINES The developer of this package has specified the following through devEngines
error EBADDEVENGINES Invalid engine "runtime"
error EBADDEVENGINES Invalid name "nondescript" does not match "node" for "runtime"
error EBADDEVENGINES {
error EBADDEVENGINES   current: { name: 'node', version: 'v22.5.1' },
error EBADDEVENGINES   required: { name: 'nondescript' }
error EBADDEVENGINES }
`

exports[`test/lib/commands/install.js TAP should utilize devEngines failure case > must match snapshot 1`] = `
silly config load:file:{CWD}/npmrc
silly config load:file:{CWD}/prefix/.npmrc
silly config load:file:{CWD}/home/.npmrc
silly config load:file:{CWD}/global/etc/npmrc
verbose title npm
verbose argv "--fetch-retries" "0" "--cache" "{CWD}/cache" "--loglevel" "silly" "--color" "false"
verbose logfile logs-max:10 dir:{CWD}/cache/_logs/{DATE}-
verbose logfile {CWD}/cache/_logs/{DATE}-debug-0.log
silly logfile done cleaning log files
verbose stack Error: The developer of this package has specified the following through devEngines
verbose stack Invalid engine "runtime"
verbose stack Invalid name "nondescript" does not match "node" for "runtime"
verbose stack     at Install.checkDevEngines ({CWD}/lib/base-cmd.js:182:27)
verbose stack     at MockNpm.#exec ({CWD}/lib/npm.js:251:7)
verbose stack     at MockNpm.exec ({CWD}/lib/npm.js:207:9)
error code EBADDEVENGINES
error EBADDEVENGINES The developer of this package has specified the following through devEngines
error EBADDEVENGINES Invalid engine "runtime"
error EBADDEVENGINES Invalid name "nondescript" does not match "node" for "runtime"
error EBADDEVENGINES {
error EBADDEVENGINES   current: { name: 'node', version: 'v22.5.1' },
error EBADDEVENGINES   required: { name: 'nondescript' }
error EBADDEVENGINES }
`

exports[`test/lib/commands/install.js TAP should utilize devEngines failure force case > must match snapshot 1`] = `
silly config load:file:{CWD}/npmrc
silly config load:file:{CWD}/prefix/.npmrc
silly config load:file:{CWD}/home/.npmrc
silly config load:file:{CWD}/global/etc/npmrc
verbose title npm
verbose argv "--fetch-retries" "0" "--cache" "{CWD}/cache" "--loglevel" "silly" "--color" "false" "--force" "true"
verbose logfile logs-max:10 dir:{CWD}/cache/_logs/{DATE}-
verbose logfile {CWD}/cache/_logs/{DATE}-debug-0.log
warn using --force Recommended protections disabled.
silly logfile done cleaning log files
warn EBADDEVENGINES The developer of this package has specified the following through devEngines
warn EBADDEVENGINES Invalid engine "runtime"
warn EBADDEVENGINES Invalid name "nondescript" does not match "node" for "runtime"
warn EBADDEVENGINES {
warn EBADDEVENGINES   current: { name: 'node', version: 'v22.5.1' },
warn EBADDEVENGINES   required: { name: 'nondescript' }
warn EBADDEVENGINES }
silly packumentCache heap:4345298944 maxSize:1086324736 maxEntrySize:543162368
silly idealTree buildDeps
silly reify moves {}
silly audit report null

up to date, audited 1 package in {TIME}
found 0 vulnerabilities
`

exports[`test/lib/commands/install.js TAP should utilize devEngines success case > must match snapshot 1`] = `
silly config load:file:{CWD}/npmrc
silly config load:file:{CWD}/prefix/.npmrc
silly config load:file:{CWD}/home/.npmrc
silly config load:file:{CWD}/global/etc/npmrc
verbose title npm
verbose argv "--fetch-retries" "0" "--cache" "{CWD}/cache" "--loglevel" "silly" "--color" "false"
verbose logfile logs-max:10 dir:{CWD}/cache/_logs/{DATE}-
verbose logfile {CWD}/cache/_logs/{DATE}-debug-0.log
silly logfile done cleaning log files
silly packumentCache heap:4345298944 maxSize:1086324736 maxEntrySize:543162368
silly idealTree buildDeps
silly reify moves {}
silly audit report null

up to date, audited 1 package in {TIME}
found 0 vulnerabilities
`
