export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
