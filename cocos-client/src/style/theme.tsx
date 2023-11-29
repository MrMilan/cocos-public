import common from '@mui/material/colors/common'
import teal from '@mui/material/colors/teal'
import { createTheme } from '@mui/material/styles'
import NextLink from 'next/link'
import { forwardRef } from 'react'

import type { LinkProps as MuiLinkProps } from '@mui/material/Link'
import type { LinkProps as NextLinkProps } from 'next/link'


const LinkBehavior = forwardRef<HTMLAnchorElement, NextLinkProps>(function LinkBehavior(props, ref) {
    return <NextLink
        ref={ref}
        {...props}
    />
})

const defaultTheme = createTheme()

const theme = createTheme({
    palette: {
        accent: defaultTheme.palette.augmentColor({
            color: {
                main: teal[500],
            },
            name: 'accent',
        }),
        primary: {
            main: '#2e7d32',
            contrastText: common.white,
        },
        secondary: {
            main: '#282c34',
            contrastText: '#808080',
        },
        text: {
            primary: common.black,
            secondary: '#6e6e6e',
            disabled: common.black,
        },
        background: {
            default: common.white,
        },
        divider: '#e4e4e4',
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            } as MuiLinkProps,
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
})

export { theme }
