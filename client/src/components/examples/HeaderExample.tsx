import { Header } from '../Header';
import { ThemeProvider } from '../ThemeProvider';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 p-8">
          <h3 className="text-lg font-heading font-semibold">Header Component</h3>
          <p className="text-muted-foreground">
            Responsive header with navigation, mobile menu, and theme toggle.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}