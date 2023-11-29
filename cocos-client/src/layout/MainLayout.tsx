'use client'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect, useState } from 'react'

import { AppToolbar } from './AppToolbar'
import { DrawerMenu } from './DrawerMenu'

import { RootToolbar } from '@/components/RootToolbar'


const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const theme = useTheme()
    const smallerThenMd = useMediaQuery(theme.breakpoints.down('md'))

    const [isDrawerOpen, setIsDrawerOpen] = useState(!smallerThenMd)

    useEffect(() => {
        setIsDrawerOpen(!smallerThenMd)
    }, [smallerThenMd])

    const handleDrawerClick = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <>
            <AppToolbar onDrawerClick={handleDrawerClick} />
            <Box>
                <DrawerMenu isDrawerOpen={isDrawerOpen} />
                <Container
                    sx={{
                        paddingTop: 2,
                        marginLeft: {
                            xs: isDrawerOpen ? '10em' : 'auto',
                            xl: 'auto',
                        },
                    }}
                >
                    <RootToolbar />
                    {children}
                </Container>
            </Box>
        </>
    )
}

export { MainLayout }
