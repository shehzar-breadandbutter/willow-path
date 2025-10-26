import Link from 'next/link';
import Image from 'next/image';

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-dvh flex flex-col">
      <header className="w-full">
        <div className="px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href={'/'} className="flex items-center gap-2">
            <Image src={'/images/logo.webp'} alt="logo" width={33} height={35} />
            <span className="font-bookmania text-secondary text-2xl tracking-tight">WillowPath</span>
          </Link>
        </div>
      </header>

      <section className="flex-1">{children}</section>

      <footer className="bg-dark-blue text-slate-400 px-4 md:px-6 pt-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-flow-col gap-10">
          <div className="space-y-10">
            <div className="font-bookmania text-white ">
              <span className="text-4xl">Willow</span>
              <div className="flex">
                <span className="text-4xl">Path</span>
                <Image src={'/images/logo.webp'} alt="logo" width={33} height={35} />
              </div>
            </div>

            <div className="mt-4 flex gap-3 text-slate-400">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M13 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h2v7h3v-7h2.2l.8-3H13V9z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M4 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-1 6h4v12H3V9zm6 0h4v1.7c.6-1 1.8-1.9 3.7-1.9 3.9 0 4.6 2.5 4.6 5.7V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-flow-col gap-x-20 gap-y-10">
            <div>
              <p className="text-sm font-semibold text-white">Quick Links</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="hover:text-white" href="/terms-and-privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/terms-and-privacy">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Contact</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  Email:{' '}
                  <a className="hover:text-white" href="mailto:support@willow-path.com">
                    support@willow-path.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto p-4 text-sm border-t border-slate-600 text-center">
          © {new Date().getFullYear()} WillowPath
        </div>
      </footer>
    </main>
  );
}
