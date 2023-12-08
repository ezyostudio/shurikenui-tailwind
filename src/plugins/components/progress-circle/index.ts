import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type ProgressCircleConfig,
  defaultConfig,
  key,
} from './progress-circle.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies ProgressCircleConfig

      addComponents({
        [`.${prefix}progress-circle`]: {
          [`@apply relative inline-flex items-center justify-center`]: {},
          //Circle:progress
          [`circle:nth-child(2)`]: {
            [`@apply stroke-current transition-${config.transition.property} duration-${config.transition.duration}`]:
              {},
          },
          //Color:default
          [`&.${prefix}progress-default circle:first-child`]: {
            [`@apply text-${config.color.default.color.light} dark:text-${config.color.default.color.dark} stroke-${config.color.default.color.stroke}`]:
              {},
          },
          //Color:contrast
          [`&.${prefix}progress-contrast circle:first-child`]: {
            [`@apply text-${config.color.contrast.color.light} dark:text-${config.color.contrast.color.light} stroke-${config.color.contrast.color.stroke}`]:
              {},
          },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          [key]: defaultConfig,
        },
      },
    }
  },
)
