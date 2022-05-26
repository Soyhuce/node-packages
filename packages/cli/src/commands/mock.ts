import fs from 'fs-extra'
import { CommandModule } from 'yargs'

import { CURR_DIR } from '../constants'

const mockCmd: CommandModule<Record<string, never>, Record<string, never>> = {
  command: 'mock [input] [outdir]',
  describe: 'Create a JSON mock folder based on a Openapi file',
  aliases: 'm',
  builder: {
    input: {
      type: 'string',
      describe: 'The project Openapi file'
    },
    outdir: {
      type: 'string',
      describe: 'The output directory'
    }
  },
  handler: async ({ input, outdir = 'mocks' }) => {
    try {
      if (!input) {
        throw new Error('No input file specified!')
      }

      // converted files
      const files = [
        {
          name: 'toto.json',
          content: {
            id: 0,
            tags: [1, 2, 3]
          }
        },
        {
          name: 'tata.json',
          content: {
            id: 1,
            tags: [1, 2, 3]
          }
        }
      ]

      // generate files on outDir
      await Promise.all(
        files.map(async ({ name, content }) => {
          await fs.outputJson(`${CURR_DIR}/${outdir}/${name}`, content, {
            spaces: 2
          })
        })
      )
      console.log('success!')
    } catch (err) {
      console.error(err)
    }
  }
}

export { mockCmd }
