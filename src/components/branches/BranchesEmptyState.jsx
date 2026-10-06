import { MapPinned } from 'lucide-react'
import { Link } from 'react-router-dom'

export function BranchesEmptyState() {
  return <div className="rounded-[2rem] bg-white px-6 py-14 text-center shadow-soft ring-1 ring-ddavi-pastel/25"><MapPinned className="mx-auto text-ddavi-primary-dark" size={40} /><h2 className="mt-4 text-2xl font-black tracking-[-0.035em]">Próximamente encontrarás nuestras sucursales aquí.</h2><Link to="/catalogo" className="btn-primary mt-6 inline-flex">Ver catálogo</Link></div>
}
