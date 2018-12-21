#!/usr/bin/env node

import { Command } from 'commander'
import registerHerokuCommands from './heroku'

/**
 * This module exposes a CLI that can be run with `yarn figaro`.
 * 
 * Using the `heroku:set` command, you can set values from your configuration file all at once:
 * 
 * `$ yarn figaro heroku:set -e production`
 * 
 * For more information:
 * 
 * `$ yarn figaro -h`
 *  
 * @name CLI
**/

function main (args=process.argv) {
  const program = new Command()
  registerHerokuCommands(program)
  return program.parse(args)
}

// Exported for testing
export default main

if (!module.parent) main()