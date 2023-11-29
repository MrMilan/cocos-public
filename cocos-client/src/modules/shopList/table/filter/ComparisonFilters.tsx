import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

import { CORES_OPTIONS } from './filter.constants'

import type { ShopItemFilter } from '../../shopList.types'


import { MultipleSelect } from '@/components/MultipleSelect'
import { SearchInput } from '@/components/SearchInput'
import { ThreeStateSelect } from '@/components/ThreeStateSelect'


type Props = {
    filters: ShopItemFilter
    onFiltersChange: (filters: ShopItemFilter) => void
    onResetFiltersClick: () => void
}

const ComparisonFilters: React.FC<Props> = ({ filters, onFiltersChange, onResetFiltersClick }) => {
    const handleFilterChange = (key: keyof ShopItemFilter, value: string | boolean | number | number[] | undefined) => {
        const updatedFilters = { ...filters, [key]: value }
        onFiltersChange(updatedFilters)
    }

    return (
        <Grid
            container
            columnGap={2}
            rowGap={2}
            alignItems="center"
            padding={2}
        >
            <Grid
                item
                xs={12}
                md={4}
                lg={2}
            >
                <SearchInput
                    label="Name"
                    value={filters.name}
                    onChange={(value: string) => handleFilterChange('name', value)}
                    clearable
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
                lg={2}
            >
                <ThreeStateSelect
                    label="Oem Cooler"
                    value={filters.hasOemCooler}
                    onChange={(value) => handleFilterChange('hasOemCooler', value)}
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
                lg={2}
            >
                <ThreeStateSelect
                    label="Open overclock"
                    value={filters.hasOverclock}
                    onChange={(value) => handleFilterChange('hasOverclock', value)}
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
                lg={2}
            >
                <Typography variant="body2">Minimal Tdp</Typography>
                <Slider
                    value={filters.tdp}
                    step={5}
                    min={15}
                    max={150}
                    marks
                    valueLabelDisplay="auto"
                    onChange={(_, value) => handleFilterChange('tdp', value)}
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
                lg={2}
            >
                <MultipleSelect
                    label="Cores"
                    value={filters.cores}
                    options={CORES_OPTIONS}
                    onChange={(value) => handleFilterChange('cores', value as number[])}
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={2}
                lg={1}
            >
                <Button
                    variant="contained"
                    onClick={onResetFiltersClick}
                >
                    Reset Filters
                </Button>
            </Grid>
        </Grid>
    )
}

export { ComparisonFilters }
