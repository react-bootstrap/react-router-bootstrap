/* eslint-disable no-console */
/* globals cat, config, cp, mkdir, rm, test */

import 'colors';
import 'shelljs/global';
import path from 'path';
import _ from 'lodash';
import yargs from 'yargs';

// do not die on errors
config.fatal = false;

const repoRoot = path.resolve(__dirname, '../');
const libFolder = path.join(repoRoot, 'lib');
const bowerRoot = path.join(repoRoot, 'amd');
const bowerTemplate = path.join(repoRoot, 'bower.template.json');
const license = path.join(repoRoot, 'LICENSE');

const argv = yargs
  .usage('Usage: $0 [--verbose]')
  .example('$0', 'Prepare bower package for releasing')
  .option('verbose', {
    demand: false,
    default: false,
    describe: 'Increased debug output',
  })
  .argv;

if (argv.dryRun) console.log('DRY RUN'.magenta);

config.silent = !argv.verbose;

function bower() {
  console.log('Creating: '.cyan + 'bower package'.green);

  rm('-rf', bowerRoot);
  mkdir('-p', bowerRoot);

  // generate bower.json from template
  const pkg = JSON.parse(cat(path.join(repoRoot, 'package.json')));
  const template = _.template(cat(bowerTemplate));
  const bowerConfigObject = template({ pkg });
  const json = JSON.stringify(JSON.parse(bowerConfigObject), null, 2); // proper formatting hack
  json.to(path.join(bowerRoot, 'bower.json'));

  // copy readme and license
  const readmeBower = path.join(repoRoot, 'README.bower.md');
  const readme = path.join(repoRoot, 'README.md');
  if (test('-e', readmeBower)) {
    cp(readmeBower, path.join(bowerRoot, 'README.md'));
  } else {
    cp(readme, bowerRoot);
  }
  if (test('-e', license)) cp(license, bowerRoot);

  // copy distr files
  cp('-r', libFolder, bowerRoot);

  console.log('Created: '.cyan + 'bower package'.green);
}

bower();
