const plugin = require('tailwindcss/plugin')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

const sizeName = '--tw-input-size'
const colorName = '--tw-input-color'
const sizeVar = 'var(--tw-input-size)'
const colorVar = 'var(--tw-input-color)'

const defaultOptions = {
  className: 'input',
  disabledOpacity: 0.6,
  border: "1px solid theme('colors.black / 40%')",
  baseCss: {},

  focusStyle: {
    borderColor: colorVar,
    boxShadow: '0 0 0 1px ' + colorVar,
    zIndex: 2,
  },
  hoverStyle: {
    borderColor: colorVar,
    zIndex: 2,
  },
}

module.exports = plugin.withOptions(
  (opts) => (
    function ({ addComponents, matchUtilities, addBase, theme }) {
      const options = {
        ...defaultOptions,
        ...opts,
      }
      options.className = options.className.trim()
      addBase({
        ':root': {
          [sizeName]: theme('inputSize.base'),
          [colorName]: theme('colors.primary'),
        },
      })
      addComponents({
        [`.${options.className}`]: {
          display: 'block',
          height: sizeVar,
          border: options.border,
          outline: 'none',
          lineHeight: '1',
          padding: 'calc((var(--tw-input-size) - 1.2em) / 2) 1em',
          transition: 'border-color .1s, box-shadow .1s',
          ...options.baseCss,

          '&:focus, &:focus-within': options.focusStyle,

          '@media (hover)': {
            '&:hover': options.hoverStyle
          },

          '&:disabled': {
            opacity: options.disabledOpacity,
          },
        },
      })

      // size
      matchUtilities(
        {
          [options.className]: (size) => {
            // check is not color
            let string = size.DEFAULT || size[500] || size

            if (typeof size == 'function') {
              string = size({});
            }

            const parsed = parseColor(string)
            if (!!parsed?.color) return null

            return { [sizeName]: size }
          },
        },
        { values: theme('inputSize') }
      )

      // colors
      matchUtilities(
        {
          [options.className]: (color) => {
            // check is color
            let string = color.DEFAULT || color[500] || color

            if (typeof color == 'function') {
              string = color({});
            }

            const parsed = parseColor(string)
            if (!parsed?.color) return null

            return {
              [colorName]: string,
            }
          },
        },
        {
          values: flattenColorPalette(theme('colors')),
          type: 'color',
        }
      )
    }
  ),
  (options) => ({
    theme: {
      extend: {
        inputSize: {
          xs: '28px',
          sm: '32px',
          base: '42px',
          lg: '48px',
          xl: '56px',
          ['2xl']: '64px',
        },
      },
    },
  })
)
