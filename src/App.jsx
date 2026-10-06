import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PublicLayout } from './layouts/PublicLayout.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { CatalogPage } from './pages/CatalogPage.jsx'
import { PromotionsPage } from './pages/PromotionsPage.jsx'
import { BranchesPage } from './pages/BranchesPage.jsx'
import { ProductDetailPage } from './pages/ProductDetailPage.jsx'
import { DesignPreview } from './pages/DesignPreview.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="inicio" element={<Navigate to="/" replace />} />
          <Route path="catalogo" element={<CatalogPage />} />
          <Route path="promociones" element={<PromotionsPage />} />
          <Route path="sucursales" element={<BranchesPage />} />
          <Route path="producto/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="guia-estilo" element={<DesignPreview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
