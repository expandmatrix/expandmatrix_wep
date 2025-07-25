        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full text-text-primary hover:bg-bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* CTA Button */}
        <Link
          href={`/${lang}/kontakt`}
          className="hidden md:inline-flex items-center px-6 py-3 bg-accent-primary text-bg-primary font-semibold rounded-full hover:bg-accent-dark transition-all duration-300 hover:scale-105"
        >
          {lang === 'cs' ? 'Kontakt' : 'Contact'}
        </Link>