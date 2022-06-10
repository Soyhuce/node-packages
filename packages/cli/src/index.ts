#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { createCmd } from './commands/create'
import { mockCmd } from './commands/mock'

yargs(hideBin(process.argv))
  .scriptName('soyhuce')
  .usage('$0 <cmd> [args]')
  .command(createCmd)
  .command(mockCmd)
  .demandCommand(1, 'must provide a valid command')
  .alias('h', 'help')
  .alias('v', 'version').argv
