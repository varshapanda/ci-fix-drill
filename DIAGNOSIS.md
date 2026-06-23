# CI Failure Diagnosis

## Failure 1: Incorrect Unit Test Assertion

**Step Name:** Run tests

**Error Message:**
Expected: 100
Received: 90

**Cause:**
The `calculateDiscount()` function correctly applies a 10% discount to 100 and returns 90. The test case incorrectly expected the result to be 100 instead of 90. The function implementation is correct, so the test assertion needed to be fixed.

---

## Failure 2: Incorrect Jest Matcher for Object Comparison

**Step Name:** Run tests

**Error Message:**
Received: serializes to the same string

**Cause:**
The test for `formatCurrency()` used `toBe()` to compare two objects. In Jest, `toBe()` checks reference equality, not object contents. Since two different object instances are being compared, the test fails. The correct matcher is `toEqual()`, which compares object values.

---

## Failure 3: Non-Reproducible Dependency Installation

**Step Name:** Install dependencies

**Error Message:**
Workflow used `npm install` instead of `npm ci`.

**Cause:**
Using `npm install` can produce different dependency trees across environments. CI pipelines should use `npm ci` because it installs dependencies exactly as defined in `package-lock.json`, ensuring reproducible builds.

---

## Failure 4: Workflow Job Sequencing and Missing Setup

**Step Name:** Run tests

**Error Message:**
Tests fail because dependencies are unavailable in the test job.

**Cause:**
The `test` job was missing `needs: install`, allowing it to run independently of the install job. Additionally, the test job did not include `actions/checkout`, `actions/setup-node`, or `npm ci`, meaning the repository code and dependencies were not available when tests executed.

---

# Summary of Fixes

1. Corrected the expected value in `calculateDiscount.test.js` from `100` to `90`.
2. Replaced `toBe()` with `toEqual()` in `formatCurrency.test.js`.
3. Changed dependency installation from `npm install` to `npm ci`.
4. Added `needs: install` and proper setup steps (`checkout`, `setup-node`, `npm ci`) to the test job in the GitHub Actions workflow.




