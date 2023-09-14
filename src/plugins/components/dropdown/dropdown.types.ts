import type { PropertyVariant } from '~/types/utils'

export interface DropdownProps extends Record<string, unknown> {
  flavor?: 'button' | 'context' | 'text'
  buttonColor?:
    | 'default'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light'
    | 'muted'
    | 'none'
  color?:
    | 'white'
    | 'white-contrast'
    | 'muted'
    | 'muted-contrast'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none'
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
  orientation?: 'start' | 'end'
  size?: 'md' | 'lg'
  label?: string
  headerLabel?: string
  open?: boolean
}

export interface DropdownEvents {
  onClick?: () => void
}

export interface DropdownSlots {
  children?: any
}

export type DropdownAttrs = DropdownProps & DropdownEvents & DropdownSlots
export type DropdownVariant<T> = PropertyVariant<T, DropdownProps>
