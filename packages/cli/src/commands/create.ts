import fs from 'fs-extra'
import prompts from 'prompts'
import { CommandModule } from 'yargs'
import degit from 'degit'

import { CURR_DIR, AVAILABLE_TEMPLATES } from '../constants'

interface CreateArgs {
  name: string
  template: string
}

const createCmd: CommandModule<Record<string, never>, CreateArgs> = {
  command: 'create [name] [template]',
  describe: 'Create a project based on a template',
  builder: {
    name: {
      type: 'string',
      describe: 'The project folder name'
    },
    template: {
      type: 'string',
      describe: 'The template to clone'
    }
  },
  handler: async (argv) => {
    try {
      const prompt = await prompts([
        {
          name: 'name',
          message: 'What is your project name?',
          type: () =>
            // skip if name in args and directory doesn't exist
            argv.name && !fs.existsSync(`${CURR_DIR}/${argv.name}`) ? false : 'text',
          validate: (val) =>
            // check if value and directory doesn't exist
            val.length && !fs.existsSync(`${CURR_DIR}/${val}`)
              ? true
              : 'Please enter a valid project name'
        },
        {
          name: 'template',
          message: 'Pick a template',
          choices: AVAILABLE_TEMPLATES.map((template) => ({
            title: template.name,
            value: template.url
          })),
          type: () =>
            // skip if template name in args
            AVAILABLE_TEMPLATES.find((pkg) => pkg.name === argv.title) ? false : 'select',
          validate: (val) =>
            // check if template name in args
            AVAILABLE_TEMPLATES.find((pkg) => pkg.name === val)
              ? true
              : 'Please enter a valid template name'
        }
      ])
      // merge args and choice
      const choices = { ...argv, ...prompt }
      if (choices.name && choices.template) {
        const selectedTemplateEmitter = degit(choices.template, {
          cache: false,
          force: true
        })

        selectedTemplateEmitter.on('info', (info) => {
          console.log(info.message)
        })

        selectedTemplateEmitter.clone(`${CURR_DIR}/${choices.name}`).then(() => {
          console.log('done! 🚀')
        })
      }
    } catch (e) {
      process.exit(1)
    }
  }
}

export { createCmd }
