import { ImageGenerationOptions } from '../types';
import { CATEGORIES, STYLES } from './constants';

export const generatePrompt = (options: ImageGenerationOptions): string => {
  const category = CATEGORIES.find(c => c.id === options.category);
  const style = STYLES.find(s => s.id === options.style);
  
  let prompt = '';
  
  if (options.customPrompt) {
    prompt = options.customPrompt;
  } else {
    // Generate a base prompt based on category
    const categoryPrompts = {
      nature: 'A beautiful natural landscape with mountains, forests, and a flowing river',
      'sci-fi': 'A futuristic cityscape with flying vehicles and neon lights',
      fantasy: 'A magical forest with glowing mushrooms and mystical creatures',
      portrait: 'A professional portrait of a person with natural lighting',
      architecture: 'A stunning modern building with unique geometric design',
      anime: 'An anime character with expressive eyes and colorful hair in Japanese animation style'
    };
    
    prompt = categoryPrompts[options.category as keyof typeof categoryPrompts] || 'A beautiful scene';
  }
  
  // Add style modifiers
  const styleModifiers = {
    realistic: 'highly detailed, photorealistic, 8k resolution',
    cartoon: 'cartoon style, vibrant colors, animated',
    'oil-painting': 'oil painting style, textured brushstrokes, classical art',
    cyberpunk: 'cyberpunk style, neon colors, dark atmosphere',
    minimalist: 'minimalist style, clean lines, simple composition'
  };
  
  const modifier = styleModifiers[options.style as keyof typeof styleModifiers];
  if (modifier) {
    prompt += `, ${modifier}`;
  }
  
  return prompt;
};

export const mockImageGeneration = async (options: ImageGenerationOptions): Promise<string> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 3000 + Math.random() * 2000));
  
  // Return a random placeholder image from Pexels based on category
  const imageUrls = {
    nature: [
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop'
    ],
    'sci-fi': [
      'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop'
    ],
    fantasy: [
      'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop'
    ],
    portrait: [
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop'
    ],
    architecture: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop'
    ],
    anime: [
      'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/5240543/pexels-photo-5240543.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/9159049/pexels-photo-9159049.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/10498766/pexels-photo-10498766.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/12151227/pexels-photo-12151227.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop',
      'https://images.pexels.com/photos/14661636/pexels-photo-14661636.jpeg?auto=compress&cs=tinysrgb&w=1024&h=1024&fit=crop'
    ]
  };
  
  const categoryImages = imageUrls[options.category as keyof typeof imageUrls] || imageUrls.nature;
  const randomIndex = Math.floor(Math.random() * categoryImages.length);
  return categoryImages[randomIndex];
};

export const downloadImage = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const logUserSelection = (options: ImageGenerationOptions) => {
  const logs = JSON.parse(localStorage.getItem('imageGeneratorLogs') || '[]');
  logs.push({
    ...options,
    timestamp: Date.now()
  });
  localStorage.setItem('imageGeneratorLogs', JSON.stringify(logs));
};