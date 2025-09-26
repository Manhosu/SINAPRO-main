import { ThemeProvider } from '../ThemeProvider';
import { ThemeToggle } from '../ThemeToggle';

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-heading font-semibold">Theme Provider</h3>
          <ThemeToggle />
        </div>
        <p className="text-muted-foreground">
          Toggle between light and dark mode to test the theme provider.
        </p>
      </div>
    </ThemeProvider>
  );
}