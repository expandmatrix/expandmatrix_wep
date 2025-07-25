          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-accent-primary text-bg-primary font-bold text-lg rounded-full hover:bg-accent-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-bg-primary mr-3"></div>
                {lang === 'cs' ? 'Odesílání...' : 'Sending...'}
              </div>
            ) : (
              lang === 'cs' ? 'Odeslat zprávu' : 'Send Message'
            )}
          </motion.button>