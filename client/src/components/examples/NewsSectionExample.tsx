import { NewsSection } from '../NewsSection';
import { ThemeProvider } from '../ThemeProvider';

export default function NewsSectionExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <NewsSection />
      </div>
    </ThemeProvider>
  );
}