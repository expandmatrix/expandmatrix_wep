        <Link
          href={`/${lang}/kontakt`}
          className="w-full px-6 py-4 bg-accent-primary text-bg-primary font-semibold text-center rounded-full hover:bg-accent-dark transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          {lang === 'cs' ? 'Kontakt' : 'Contact'}
        </Link>