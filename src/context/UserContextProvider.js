import React from 'react'

export const UserContext = React.createContext()

export const useUser = () => {
    const context = React.useContext(UserContext)
    if(!context)
        throw new Error('useUser context can only be used in a component wrapped with UserProvider')
    return context
}

export const UserProvider = ({children}) => {
    const [name, setName] = React.useState('Guest')

    const value = {
        name,
        setName
    }

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

{/* <UserProvider>
    <Home />
    <About />
</UserProvider>
<Contact /> */}