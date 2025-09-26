import { LoginForm } from '../LoginForm';
import { ThemeProvider } from '../ThemeProvider';

export default function LoginFormExample() {
  return (
    <ThemeProvider>
      <LoginForm />
    </ThemeProvider>
  );
}