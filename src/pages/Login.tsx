
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the login logic
    console.log("Login attempt with:", { email, password });
  };

  const handleGoogleLogin = () => {
    // Here you would handle Google login
    console.log("Google login attempted");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex items-center justify-center py-10 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h1 className="text-3xl font-bold text-center text-[rgba(42,42,42,1)] mb-6">
              Iniciar sesión
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(51,222,179,1)] focus:border-transparent"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(51,222,179,1)] focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-[rgba(35,164,222,1)] hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <Button type="submit" variant="primary" fullWidth>
                Iniciar sesión
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  O continúa con
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/6a76c952a0114cd39df46f720564d19f53f7e9a991904ed8be971eac0c4087f8?placeholderIfAbsent=true"
                alt="Google"
                className="w-5 h-5"
              />
              Continuar con Google
            </Button>

            <p className="mt-4 text-center text-sm text-gray-600">
              ¿No tienes una cuenta?{" "}
              <a
                href="#"
                className="text-[rgba(35,164,222,1)] hover:underline font-medium"
              >
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
