interface Config {
    port: string
}

export const config: Config = {
    port: process.env.NODE_ENV === 'development' ? process.env.PORT || '1492' : process.env.PORT || '600',
}
