import { useState, useEffect } from 'react';
import { User } from '../types';

// Mock Google Auth implementation
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    
    // Simulate Google OAuth flow
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock user data (in real implementation, this would come from Google)
    const mockUser: User = {
      id: 'user_' + Date.now(),
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return {
    user,
    isLoading,
    signInWithGoogle,
    signOut,
    isAuthenticated: !!user
  };
};