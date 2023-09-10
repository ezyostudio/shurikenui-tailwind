import type { InputVariant } from './input.types'

export const shape = {
  straight: '',
  rounded: 'nui-input-rounded',
  smooth: 'nui-input-smooth',
  curved: 'nui-input-curved',
  full: 'nui-input-full',
} as const satisfies InputVariant<'shape'>

export const size = {
  sm: 'nui-input-sm',
  md: 'nui-input-md',
  lg: 'nui-input-lg',
} as const satisfies InputVariant<'size'>

export const contrast = {
  default: 'nui-input-default',
  'default-contrast': 'nui-input-default-contrast',
  muted: 'nui-input-muted',
  'muted-contrast': 'nui-input-muted-contrast',
} as const satisfies InputVariant<'contrast'>