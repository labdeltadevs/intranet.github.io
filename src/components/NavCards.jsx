const iconClassName = "h-8 w-8";
const cards = [
  {
    title: 'Inicio',
    desc: 'Accede a la pagina web oficial de Laboratorios DELTA S.A.',
    href: '/',
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClassName}
      >
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 9.5V20h14V9.5" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Recursos Humanos',
    desc: 'Gestión de personal, nóminas y documentación.',
    href: '/rrhh',
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClassName}
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Administración',
    desc: 'Procesos financieros, compras y gestión administrativa.',
    href: '/administracion',
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClassName}
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
        <line x1="8" y1="9" x2="10" y2="9" />
      </svg>
    ),
  },
  {
    title: 'T.I.C.',
    desc: 'Tecnologías de la información y comunicaciones, soporte técnico, mantenimientos.',
    href: '/sistemas',
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClassName}
      >
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </svg>
    ),
  },
  {
    title: 'Business Intelligence',
    desc: 'Análisis de datos y visualización para la toma de decisiones basados en nuestros ERP/CRM/MRP.',
    href: '/business-intelligence',
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClassName}
      >
        <path d="M3 20h18" />
        <rect x="6" y="12" width="2.5" height="6" rx="0.5" fill="currentColor" stroke="none" />
        <rect x="11" y="8" width="2.5" height="10" rx="0.5" fill="currentColor" stroke="none" />
        <rect x="16" y="4" width="2.5" height="14" rx="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

import Swal from 'sweetalert2'
import { useState } from 'react'
import PowerBIModal from './PowerBIModal'
import biReports from '../data/biReports'

export default function NavCards() {
  const [biOpen, setBiOpen] = useState(false)
  const [biSrc, setBiSrc] = useState('')

  async function showBIList() {
    if (!biReports || biReports.length === 0) {
      Swal.fire('No hay reportes', 'No se encontraron reportes configurados.', 'info')
      return
    }

    const inputOptions = {}
    biReports.forEach((r, i) => (inputOptions[i] = r.title))

    const { value: selected } = await Swal.fire({
      title: 'Selecciona un reporte',
      input: 'select',
      inputOptions,
      inputPlaceholder: 'Selecciona...',
      showCancelButton: true,
    })

    if (selected === undefined || selected === null) return
    const idx = parseInt(selected, 10)
    const report = biReports[idx]
    if (!report) return

    const { value: pin } = await Swal.fire({
      title: `Introduce PIN para "${report.title}"`,
      input: 'password',
      inputPlaceholder: 'PIN',
      inputAttributes: { autocapitalize: 'off', autocorrect: 'off' },
      showCancelButton: true,
    })

    if (pin === undefined) return
    if (pin === report.pin) {
      setBiSrc(report.src)
      setBiOpen(true)
    } else {
      Swal.fire({ icon: 'error', title: 'PIN incorrecto', text: 'Acceso denegado' })
    }
  }
  return (
    <>
      <div className="mx-auto mb-10 w-full max-w-4xl rounded-[2rem] border border-white/20 bg-white/80 p-8 backdrop-blur-xl shadow-2xl shadow-slate-950/20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-800/80 mb-4">Intranet Corporativa</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-orange-500 tracking-tight">Laboratorios DELTA S.A.</h1>
        </div>
      </div>

      <div className="mx-auto mb-10 w-full max-w-4xl rounded-[2rem] border border-white/20 bg-white/80 p-6 backdrop-blur-xl shadow-2xl shadow-slate-950/15">
        <div className="text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-slate-800/80">Panel de acceso</p>
            <h2 className="mt-2 text-xl font-semibold text-gray-800">Selecciona la aplicación del área que necesitas</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl mx-auto px-2 md:px-0">
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            role="button"
            tabIndex={0}
            aria-controls="powerbi-modal"
            aria-expanded={card.title === 'Business Intelligence' ? biOpen : undefined}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                e.currentTarget.click()
              }
            }}
            onClick={(e) => {
              if (card.href === '#') {
                e.preventDefault()
                Swal.fire({
                  icon: 'info',
                  title: 'Aplicacion en desarrollo... no disponible',
                  confirmButtonText: 'Cerrar',
                })
                return
              }

              if (card.title === 'Business Intelligence' || card.href === '#') {
                e.preventDefault()
                showBIList()
              }
            }}
            className="group h-full overflow-hidden rounded-[1.75rem] border border-gray-400 bg-white/75 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_20px_80px_rgba(15,23,42,0.18)] text-center"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                <div className="flex h-8 w-8 items-center justify-center">
                  {card.icon}
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {card.title}
                </h3>

                <p className="max-w-xs text-sm leading-6 text-slate-600">
                  {card.desc}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <PowerBIModal
        src={biSrc}
        title={"Dashboard - Jefe de Ventas"}
        open={biOpen}
        onClose={() => {
          setBiOpen(false)
          setBiSrc('')
        }}
      />
    </>
  )
}
