'use client'

import React, { useEffect } from "react"
import { Loader } from '../components/ui/loader'
import { HeaderPage } from '../components/admin/header-page'
import { TableUsers } from "../components/admin/table-users"
import { useUser } from "../../../hooks/use-user"

export function UsersAdminClient() {
    const { loading, users, getUsers, updateUser, deleteUser } = useUser()

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return (
        <>
            <HeaderPage title="Usuarios" btnTitle="Nuevo usuario" btnClick={() => { }} />
            {loading ? (
                <Loader>Cargando...</Loader>
            ) : (
                <TableUsers users={users} updateUser={updateUser} onDeleteUser={deleteUser} />
            )}
        </>
    )
}

