# Upstream review

Based on [load-grunt-tasks@5.1.0](https://www.npmjs.com/package/load-grunt-tasks/v/5.1.0), commit [`fddcf81829b1e88f3daf855ea2aa759224dec98a`](https://github.com/sindresorhus/load-grunt-tasks/commit/fddcf81829b1e88f3daf855ea2aa759224dec98a). All published upstream runtime files match this commit byte-for-byte; npm tarball integrity was independently checked.

The fork preserves runtime files, exports, CLI names and engine declarations. Original license and authorship notices remain. Development tooling runs on Node24 without raising the package runtime requirement.

## Issue triage (2026-09-29)

The upstream open-issue snapshot returned no open issues. This is not a claim that every historical issue has been solved. Added real task discovery, scoped filtering, exclusion and package-resolution checks in addition to the upstream Grunt smoke test.

No upstream maintainers were contacted. These are scoped compatibility decisions, not blanket claims that upstream issues are fixed.

## Verification

`npm ci --ignore-scripts`, `npm test`, `npm run test:package`, and `npm audit --audit-level=low`. CI and CodeQL gate the exact immutable package artifact. Packed consumer tests install the resulting archive before exercising its public behavior.
