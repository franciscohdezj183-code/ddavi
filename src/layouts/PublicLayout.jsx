import { Outlet } from 'react-router-dom'
import { MobileNavigation } from '../components/layout/MobileNavigation.jsx'
import { PublicHeader } from '../components/layout/PublicHeader.jsx'
import { PublicFooter } from '../components/layout/PublicFooter.jsx'
import { WhatsAppFloatingButton } from '../components/layout/WhatsAppFloatingButton.jsx'

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-ddavi-cream text-ddavi-text">
      <PublicHeader />
      <main className="pb-mobile-nav lg:pb-0"><Outlet /></main>
      <PublicFooter />
      <WhatsAppFloatingButton />
      <MobileNavigation />
    </div>
  )
}
