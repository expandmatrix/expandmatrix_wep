import { Dictionary } from '@/lib/getDictionary';

interface FooterProps {
  dict: Dictionary;
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-bg-secondary border-t border-accent-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-text-secondary text-sm">
            {dict.footer?.copyright || '© 2024 ExpandMatrix. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
