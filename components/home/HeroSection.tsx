            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                href={`/${lang}/sluzby`}
                className="group relative px-10 py-5 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,127,0.4)] overflow-hidden"
              >
                <span className="relative z-10">
                  {lang === 'cs' ? 'Prozkoumat služby' : 'Explore Services'}
                </span>
                <ArrowRight className="inline-block w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link
                href={`/${lang}/o-nas`}
                className="px-10 py-5 bg-transparent text-accent-primary font-bold text-lg rounded-full border-2 border-accent-primary hover:bg-accent-primary hover:text-bg-primary transition-all duration-500 hover:scale-105"
              >
                {lang === 'cs' ? 'O nás' : 'About Us'}
              </Link>
            </motion.div>