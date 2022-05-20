#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { createCmd } from './commands/create'

yargs(hideBin(process.argv))
  .scriptName('soyhuce')
  .usage('$0 <cmd> [args]')
  .command(createCmd)
  .help().argv
