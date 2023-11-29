'use client'

import { Box, CircularProgress } from '@mui/material'

import { useShopList } from './data'
import { Table } from './table'

import { Container } from '@/components/Container'


const ShopList: React.FC = () => {
    const { isLoading, shopList } = useShopList()

    return (
        <Container>
            {isLoading ?
                (
                    <Box sx={{ alignItems: 'center', display: 'flex', inset: 0, justifyContent: 'center', position: 'fixed' }}>
                        <CircularProgress />
                    </Box>
                ) :
                (
                    <Table shopItems={shopList} />
                )
            }
        </Container>
    )
}

export { ShopList }
