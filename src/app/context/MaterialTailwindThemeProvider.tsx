'use client'

import { ThemeProvider } from '../components/MTComponents'

export default function MTThemeProvider({ children }: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider>
            {/*
                    // @ts-ignore */}
            {children}
        </ThemeProvider>
    )
}
