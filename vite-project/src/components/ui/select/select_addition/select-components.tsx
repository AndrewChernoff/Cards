import * as Radix from '@radix-ui/react-select'
import { styled } from '@stitches/react'

const Wrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  /*  width: '100%', */
})

const SelTrigger = styled('button', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  /* width: '100%', */
  boxSizing: 'border-box',
  background: '#2a2a2a',
  padding: 16,
  fontSize: 16,
  fontFamily: 'sans-serif',
  border: '1px solid #1b1b1b',
  borderRadius: 4,
  outline: 'none',
  color: '#fff',
  width: '210px',
  height: '36px',
  variants: {
    error: {
      true: {
        borderColor: '#df6c75',
      },
    },
  },
})

const Dropdown = styled('div', {
  position: 'relative',
  boxSizing: 'border-box',
  color: '#fff',
  padding: '0 8px',
  width: '210px',

  fontFamily: 'sans-serif',
  fontSize: 16,
  background: '#2a2a2a',
  border: '1px solid #1b1b1b',
  borderRadius: 4,
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  pointerEvents: 'all',
  /* background: 'red', */
})

const Viewport = styled(Radix.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
  /*  background: 'blue', */
})

const Item = styled(Radix.Item, {
  padding: '8px',
  outline: 'none',
  transition: 'background ease 300ms',
  borderRadius: 4,
  /*  background: 'gold', */
  width: '100%', ////
  '&:focus': {
    background: '#35363a',
  },
})

export { Dropdown, SelTrigger, Wrapper, Viewport, Item }
