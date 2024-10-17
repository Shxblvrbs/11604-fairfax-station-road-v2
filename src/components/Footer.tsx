import React from 'react'
import WorkMark from '@/components/WordMark'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="justify-center flex flex-col items-center gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <div className="text-3xl border-r border-slate-600 pr-7">Designed By</div>
      <Link href="https://www.shabbydigital.com/" target="_blank">
        <WorkMark />
        <span className="sr-only">Virtual Tour - 11604 Fairfax Station Road</span>
      </Link>
    </footer>
  )
}
