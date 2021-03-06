/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const {join} = require('path');
const test = require('ava');
const isPlainObj = require('is-plain-obj');
const tempWrite = require('temp-write');
const eslint = require('eslint');
const conf = require('../');

function runEslint(str) {
  const linter = new eslint.CLIEngine({
    configFile: join(process.cwd(), 'index.js'),
  });

  return linter.executeOnText(str).results[0].messages;
}

test('sanity check', (t) => {
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint(`'use strict'\nvar foo = function () {};\nfoo();\n`);

  t.is(errors[0].ruleId, 'semi');
  t.is(errors[1].ruleId, 'newline-after-var');
  t.is(errors[2].ruleId, 'space-before-function-paren');
});
