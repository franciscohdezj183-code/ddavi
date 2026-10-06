import { useSearchParams } from 'react-router-dom'
import { BranchInformation } from '../components/branches/BranchInformation.jsx'
import { BranchesEmptyState } from '../components/branches/BranchesEmptyState.jsx'
import { branches } from '../data/mockData.js'
import { buildBranchMessage, buildWhatsAppUrl } from '../utils/productMessaging.js'

export function BranchesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeBranches = branches.filter((branch) => branch.active)
  const selectedSlug = searchParams.get('sucursal') ?? ''
  const selectedIndex = Math.max(0, activeBranches.findIndex((branch) => branch.slug === selectedSlug))
  const selectedBranch = activeBranches[selectedIndex] ?? activeBranches[0]

  const selectIndex = (nextIndex) => {
    const branch = activeBranches[(nextIndex + activeBranches.length) % activeBranches.length]
    if (!branch) return

    const nextParams = new URLSearchParams(searchParams)
    nextParams.set('sucursal', branch.slug)
    setSearchParams(nextParams)
  }

  const whatsappUrl = selectedBranch
    ? buildWhatsAppUrl(selectedBranch.whatsapp, buildBranchMessage(selectedBranch))
    : ''

  return activeBranches.length ? (
    <BranchInformation
      branch={selectedBranch}
      whatsappUrl={whatsappUrl}
      onPrevious={() => selectIndex(selectedIndex - 1)}
      onNext={() => selectIndex(selectedIndex + 1)}
      currentIndex={selectedIndex}
      total={activeBranches.length}
    />
  ) : (
    <div className="min-h-[calc(100svh-5rem)] px-5 py-16"><BranchesEmptyState /></div>
  )
}
