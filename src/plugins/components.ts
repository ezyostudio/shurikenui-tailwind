import plugin from 'tailwindcss/plugin'

export default plugin.withOptions(
  function (options = {}) {
    return function ({ addComponents }) {
      addComponents({
        '.nui-placeload': {
          position: 'relative',
          background:
            'linear-gradient( to right, rgb(0 0 0 / 7%) 8% ,rgb(0 0 0 / 15%) 18%, rgb(0 0 0 / 7%) 33%)',
          backgroundSize: '1200px 104px',
        },
        '.dark .nui-placeload': {
          position: 'relative',
          background:
            'linear-gradient(to right, rgb(255 255 255 / 15%) 8%, rgb(255 255 255 / 24%) 18%, rgb(255 255 255 / 15%) 33%)',
          backgroundSize: '1200px 104px',
        },
      })

      addComponents({
        '.nui-focus': {
          '@apply outline-1 outline-dashed outline-offset-2': {},
          '@apply outline-transparent': {},
          '&:focus-within': {
            '@apply outline-muted-300 dark:outline-muted-600': {},
            '@apply outline-dashed ring-0': {},
          },
          '&:focus-visible': {
            '@apply outline-2': {},
          },
        },
      })

      addComponents({
        '.nui-mask': {
          'mask-size': 'contain',
          'mask-repeat': 'no-repeat',
          'mask-position': 'center',
        },
        '.nui-mask-hex': {
          'mask-image':
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjQuNzg2IDE4MS40Yy05LjE5NiAwLTIwLjA2My02LjY4Ny0yNS4wNzktMTQuMjFMMy43NjIgMTA1LjMzYy01LjAxNi04LjM2LTUuMDE2LTIwLjkgMC0yOS4yNTlsMzUuOTQ1LTYxLjg2QzQ0LjcyMyA1Ljg1MSA1NS41OSAwIDY0Ljc4NiAwaDcxLjA1NWM5LjE5NiAwIDIwLjA2MyA2LjY4OCAyNS4wNzkgMTQuMjExbDM1Ljk0NSA2MS44NmM0LjE4IDguMzYgNC4xOCAyMC44OTkgMCAyOS4yNThsLTM1Ljk0NSA2MS44NmMtNC4xOCA4LjM2LTE1Ljg4MyAxNC4yMTEtMjUuMDc5IDE0LjIxMUg2NC43ODZ6Ii8+PC9zdmc+')",
        },
        '.nui-mask-hexed': {
          'mask-image':
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBsLTYxLjg2LTM1Ljk0NUM2LjE1MSAxNTcuNDQuMyAxNDUuNzM3LjMgMTM2LjU0VjY1LjQ4NnoiLz48L3N2Zz4=')",
        },
        '.nui-mask-deca': {
          'mask-image':
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOTYgMGw1OC43NzkgMTkuMDk4IDM2LjMyNyA1MHY2MS44MDRsLTM2LjMyNyA1MEw5NiAyMDBsLTU4Ljc3OS0xOS4wOTgtMzYuMzI3LTUwVjY5LjA5OGwzNi4zMjctNTB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')",
        },
        '.nui-mask-blob': {
          'mask-image':
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAweiIvPjwvc3ZnPg==')",
        },
        '.nui-mask-diamond': {
          'mask-image':
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBsMTAwIDEwMC0xMDAgMTAwTDAgMTAweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')",
        },
      })

      addComponents({
        '.nui-text-white': {
          '@apply text-white dark:text-black': {},
        },
        '.nui-text-50': {
          '@apply text-muted-50 dark:text-muted-900': {},
        },
        '.nui-text-100': {
          '@apply text-muted-100 dark:text-muted-900': {},
        },
        '.nui-text-200': {
          '@apply text-muted-200 dark:text-muted-800': {},
        },
        '.nui-text-300': {
          '@apply text-muted-300 dark:text-muted-700': {},
        },
        '.nui-text-400': {
          '@apply text-muted-400 dark:text-muted-600': {},
        },
        '.nui-text-500': {
          '@apply text-muted-500 dark:text-muted-500': {},
        },
        '.nui-text-600': {
          '@apply text-muted-600 dark:text-muted-400': {},
        },
        '.nui-text-700': {
          '@apply text-muted-700 dark:text-muted-300': {},
        },
        '.nui-text-800': {
          '@apply text-muted-800 dark:text-muted-200': {},
        },
        '.nui-text-900': {
          '@apply text-muted-900 dark:text-muted-100': {},
        },
        '.nui-text-black': {
          '@apply text-black dark:text-white': {},
        },
      })

      addComponents({
        '.nui-bg-white': {
          '@apply bg-white dark:bg-muted-900': {},
        },
        '.nui-bg-50': {
          '@apply bg-muted-50 dark:bg-muted-900': {},
        },
        '.nui-bg-100': {
          '@apply bg-muted-100 dark:bg-muted-900': {},
        },
        '.nui-bg-200': {
          '@apply bg-muted-200 dark:bg-muted-800': {},
        },
        '.nui-bg-300': {
          '@apply bg-muted-300 dark:bg-muted-700': {},
        },
        '.nui-bg-400': {
          '@apply bg-muted-400 dark:bg-muted-600': {},
        },
        '.nui-bg-500': {
          '@apply bg-muted-500 dark:bg-muted-500': {},
        },
        '.nui-bg-600': {
          '@apply bg-muted-600 dark:bg-muted-400': {},
        },
        '.nui-bg-700': {
          '@apply bg-muted-700 dark:bg-muted-300': {},
        },
        '.nui-bg-800': {
          '@apply bg-muted-800 dark:bg-muted-200': {},
        },
        '.nui-bg-900': {
          '@apply bg-muted-900 dark:bg-muted-100': {},
        },
        '.nui-bg-black': {
          '@apply bg-muted-900 dark:bg-white': {},
        },
      })

      addComponents({
        '.nui-label': {
          '@apply inline-block font-alt leading-none text-muted-400 dark:text-muted-400/80':
            {},
        },
      })

      addComponents({
        '.nui-dropdown-divider': {
          '@apply my-2 block h-px w-full border-t border-muted-200 dark:border-muted-600':
            {},
        },
      })

      addComponents({
        '.nui-mark': {
          '@apply bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-200':
            {},
        },
      })
    }
  },
  function (options) {
    return {
      theme: {
        nui: {},
      },
    }
  }
)
