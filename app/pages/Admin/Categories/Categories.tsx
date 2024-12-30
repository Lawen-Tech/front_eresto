// import React from 'react'

// const CategoriesAdminClient = () => {
//   return (
//     <div>CATEGORIAS</div>
//   );
// }

// export default CategoriesAdminClient;



'use client'

import React, { useState, useEffect, useCallback } from "react"
import { Loader } from "../components/ui/loader"
import { HeaderPage } from '../components/admin/header-page'
import { TableCategoryAdmin } from '../components/admin/table-category-admin'
import { AddEditCategoryForm } from '../components/admin/add-edit-category-form'
import { ModalBasic } from "../components/common/modal-basic"
import { useCategory } from "../../../hooks/use-category"

const CategoriesAdminClient = () => {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState<string | null>(null)
  const [contentModal, setContentModal] = useState<React.ReactNode | null>(null)
  const { loading, categories, getCategories, deleteCategory } = useCategory()

  useEffect(() => {
    getCategories()
  }, [getCategories])

  const openCloseModal = useCallback(() => setShowModal((prev) => !prev), [])

  const addCategory = useCallback(() => {
    setTitleModal("Nueva categoría")
    setContentModal(
      <AddEditCategoryForm onClose={openCloseModal} onRefetch={getCategories} />
    )
    openCloseModal()
  }, [openCloseModal, getCategories])

  const updateCategory = useCallback((data: any) => {
    setTitleModal("Actualizar categoría")
    setContentModal(
      <AddEditCategoryForm
        onClose={openCloseModal}
        onRefetch={getCategories}
        category={data}
      />
    )
    openCloseModal()
  }, [openCloseModal, getCategories])

  const onDeleteCategory = useCallback(async (data: any) => {
    const result = window.confirm(`¿Eliminar categoría ${data.title}?`)
    if (result) {
      await deleteCategory(data.id)
      getCategories()
    }
  }, [deleteCategory, getCategories])

  return (
    <>
      <HeaderPage
        title="Categorías"
        btnTitle="Nueva categoría"
        btnClick={addCategory}
      />
      {loading ? (
        <Loader>Cargando...</Loader>
      ) : (
        <TableCategoryAdmin
          categories={categories}
          updateCategory={updateCategory}
          deleteCategory={onDeleteCategory}
        />
      )}

      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
      >
        {contentModal}
      </ModalBasic>
    </>
  )
}

export default CategoriesAdminClient;
