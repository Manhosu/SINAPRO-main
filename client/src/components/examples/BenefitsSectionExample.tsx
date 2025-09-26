import { BenefitsSection } from '../BenefitsSection';
import { ThemeProvider } from '../ThemeProvider';

export default function BenefitsSectionExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <BenefitsSection />
      </div>
    </ThemeProvider>
  );
}