import type { ShopItem } from '../types/ShopItem'


const shopList = [
    {
        id: 1,
        title: 'AMD Ryzen 7 5700',
        generation: 'ZEN 3',
        cores: 8,
        socket: 'AM4',
        tdp: 65,
        architecture: 'amd64',
        oemCooler: false,
        openOverclock: true,
    },
    {
        id: 2,
        title: 'AMD Ryzen 5 5600',
        generation: 'ZEN 3',
        cores: 6,
        socket: 'AM4',
        tdp: 65,
        architecture: 'amd64',
        oemCooler: true,
        openOverclock: true,
    },
    {
        id: 3,
        title: 'Intel i7-12700',
        generation: '12th',
        cores: 12,
        socket: 'LGA1700',
        tdp: 125,
        architecture: 'x86_64',
        oemCooler: true,
        openOverclock: false,
    },
    {
        id: 4,
        title: 'Intel i5-12600KF',
        generation: '12th',
        cores: 10,
        socket: 'LGA1700',
        tdp: 125,
        architecture: 'x86_64',
        oemCooler: false,
        openOverclock: true,
    },
] satisfies ShopItem[]

export { shopList }
