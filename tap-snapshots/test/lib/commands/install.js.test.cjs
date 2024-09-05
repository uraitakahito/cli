/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/lib/commands/install.js TAP should utilize devEngines 2x error case > must match snapshot 1`] = `
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
`

exports[`test/lib/commands/install.js TAP should utilize devEngines failure and warning case > must match snapshot 1`] = `
warn EBADDEVENGINES The developer of this package has specified the following through devEngines
warn EBADDEVENGINES Invalid engine "cpu"
warn EBADDEVENGINES Invalid name "risv" does not match "arm64" for "cpu"
warn EBADDEVENGINES {
warn EBADDEVENGINES   current: { name: 'arm64' },
warn EBADDEVENGINES   required: { name: 'risv', onFail: 'warn' }
warn EBADDEVENGINES }
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
warn using --force Recommended protections disabled.
warn EBADDEVENGINES The developer of this package has specified the following through devEngines
warn EBADDEVENGINES Invalid engine "runtime"
warn EBADDEVENGINES Invalid name "nondescript" does not match "node" for "runtime"
warn EBADDEVENGINES {
warn EBADDEVENGINES   current: { name: 'node', version: 'v22.5.1' },
warn EBADDEVENGINES   required: { name: 'nondescript' }
warn EBADDEVENGINES }
`

exports[`test/lib/commands/install.js TAP should utilize devEngines success case > must match snapshot 1`] = `

`
