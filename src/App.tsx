import React from 'react';
import { Github, Heart } from 'lucide-react';
import { ImageGenerator } from './components/ImageGenerator';
import { ThemeToggle } from './components/ThemeToggle';
import { GoogleSignIn } from './components/GoogleSignIn';
import { UserProfile } from './components/UserProfile';
import { Logo3D } from './components/Logo3D';
import { useTheme } from './hooks/useTheme';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const { user, isLoading, signInWithGoogle, signOut, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Clear Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 
                      dark:from-gray-900 dark:via-slate-900 dark:to-black" />
      
      {/* Clean Star Field */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bright Stars */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-90"></div>
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-85"></div>
        <div className="absolute top-32 left-1/4 w-1.5 h-1.5 bg-purple-200 rounded-full opacity-80"></div>
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-cyan-200 rounded-full opacity-90"></div>
        <div className="absolute top-60 left-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-85"></div>
        <div className="absolute top-80 right-10 w-2 h-2 bg-pink-200 rounded-full opacity-90"></div>
        <div className="absolute top-16 left-2/3 w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-80"></div>
        <div className="absolute top-44 right-1/5 w-1.5 h-1.5 bg-indigo-200 rounded-full opacity-75"></div>
        
        {/* Medium Stars */}
        <div className="absolute top-28 left-1/3 w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-36 right-1/4 w-1 h-1 bg-blue-200 rounded-full opacity-65"></div>
        <div className="absolute top-52 left-20 w-1 h-1 bg-purple-200 rounded-full opacity-60"></div>
        <div className="absolute top-68 right-1/2 w-1 h-1 bg-cyan-200 rounded-full opacity-75"></div>
        <div className="absolute top-84 left-1/4 w-1 h-1 bg-white rounded-full opacity-65"></div>
        <div className="absolute top-12 right-1/3 w-1 h-1 bg-yellow-200 rounded-full opacity-60"></div>
        
        {/* Small Stars */}
        <div className="absolute top-14 left-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-26 right-1/3 w-0.5 h-0.5 bg-blue-100 rounded-full opacity-45"></div>
        <div className="absolute top-38 left-1/5 w-0.5 h-0.5 bg-purple-100 rounded-full opacity-40"></div>
        <div className="absolute top-50 right-1/5 w-0.5 h-0.5 bg-cyan-100 rounded-full opacity-55"></div>
        <div className="absolute top-66 left-3/4 w-0.5 h-0.5 bg-white rounded-full opacity-35"></div>
        <div className="absolute top-78 right-2/3 w-0.5 h-0.5 bg-pink-100 rounded-full opacity-45"></div>
        <div className="absolute top-22 left-1/6 w-0.5 h-0.5 bg-yellow-100 rounded-full opacity-40"></div>
        <div className="absolute top-54 right-1/6 w-0.5 h-0.5 bg-indigo-100 rounded-full opacity-35"></div>
        
        {/* Bottom Stars */}
        <div className="absolute bottom-20 left-16 w-2 h-2 bg-white rounded-full opacity-85"></div>
        <div className="absolute bottom-32 right-24 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-80"></div>
        <div className="absolute bottom-44 left-1/3 w-1.5 h-1.5 bg-purple-200 rounded-full opacity-75"></div>
        <div className="absolute bottom-56 right-1/4 w-2 h-2 bg-cyan-200 rounded-full opacity-90"></div>
        <div className="absolute bottom-68 left-2/3 w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
        <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-pink-200 rounded-full opacity-75"></div>
        <div className="absolute bottom-60 left-1/5 w-1 h-1 bg-yellow-200 rounded-full opacity-70"></div>
      </div>

      {/* Subtle Cosmic Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gentle Nebula Hints */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/8 via-pink-500/5 to-transparent rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-br from-cyan-500/6 via-blue-500/4 to-transparent rounded-full opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative overflow-visible z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo3D />
              <div className="ml-2">
                <div className="relative group cursor-pointer">
                <h1 className="relative text-4xl font-black tracking-tight">
                  {/* 3D Shadow layers */}
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent transform translate-x-1 translate-y-1 blur-sm opacity-30"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent transform translate-x-0.5 translate-y-0.5 opacity-50"></span>
                  {/* Main gradient text with 3D effect */}
                  <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-slate-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent 
                                 group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-blue-900 dark:group-hover:from-white dark:group-hover:via-cyan-50 dark:group-hover:to-blue-50 
                                 transition-all duration-700 drop-shadow-2xl font-serif tracking-wider filter
                                 group-hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.6)] dark:group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  Corals
                  </span>
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent bg-clip-text text-transparent opacity-0 group-hover:opacity-40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                </h1>
                </div>
                {/* Animated underline */}
                <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                               transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 
                               origin-left rounded-full shadow-lg opacity-0 group-hover:opacity-100
                               group-hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 relative z-30">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              
              {isAuthenticated ? (
                <UserProfile user={user!} onSignOut={signOut} />
              ) : (
                <GoogleSignIn onSignIn={signInWithGoogle} isLoading={isLoading} />
              )}
              
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center w-12 h-12 rounded-full 
                         bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 
                         hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 
                         shadow-lg hover:shadow-xl"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ImageGenerator />
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 py-8 border-t border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-300 space-y-3">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using AI technology
            </p>
            <p className="text-sm opacity-75">
              Generate beautiful images with our advanced AI models
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;