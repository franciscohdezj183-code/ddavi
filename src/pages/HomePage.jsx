import { HeroSection } from '../components/home/HeroSection.jsx'
import { CategoriesSection } from '../components/home/CategoriesSection.jsx'
import { NewProductsSection, FeaturedProductsSection } from '../components/home/ProductsSections.jsx'
import { PromotionsSection } from '../components/home/PromotionsSection.jsx'
import { CategoryHighlights } from '../components/home/CategoryHighlights.jsx'
import { BranchesPreview } from '../components/home/BranchesPreview.jsx'
import { FinalCTA } from '../components/home/FinalCTA.jsx'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <NewProductsSection />
      <PromotionsSection />
      <FeaturedProductsSection />
      <CategoryHighlights />
      <BranchesPreview />
      <FinalCTA />
    </>
  )
}
