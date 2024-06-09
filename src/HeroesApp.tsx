import { AuthProvider } from "./auth";
import { AppRouter } from "./router";

AuthProvider;

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
