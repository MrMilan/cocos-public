import type { Metadata } from 'next'

import { MainLayout } from '@/layout/MainLayout'
import { ThemeProvider } from '@/style/ThemeProvider'


export const metadata: Metadata = {
    title: 'Cocos',
    description: 'Demo web with presentation myself',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <ThemeProvider>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </ThemeProvider>
            </body>
        </html>
    )
}
