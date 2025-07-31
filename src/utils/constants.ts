import { Category, Style, Resolution } from '../types';
import { CustomizationPreset } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'nature',
    name: 'Nature',
    description: 'Landscapes, wildlife, natural beauty',
    icon: '🌲',
    relatedCategories: ['fantasy', 'architecture'],
    recommendedStyles: ['realistic', 'oil-painting', 'minimalist'],
    popularPrompts: [
      'Misty mountain peaks at sunrise',
      'Ancient forest with towering trees',
      'Serene lake reflecting autumn colors',
      'Dramatic waterfall cascading down rocks'
    ]
  },
  {
    id: 'sci-fi',
    name: 'Sci-Fi',
    description: 'Futuristic, space, technology',
    icon: '🚀',
    relatedCategories: ['architecture', 'fantasy'],
    recommendedStyles: ['cyberpunk', 'realistic', 'minimalist'],
    popularPrompts: [
      'Neon-lit cyberpunk cityscape at night',
      'Space station orbiting a distant planet',
      'Futuristic vehicle flying through clouds',
      'Robot walking through abandoned city'
    ]
  },
  {
    id: 'fantasy',
    name: 'Fantasy',
    description: 'Magic, mythical creatures, enchanted worlds',
    icon: '🧙‍♂️',
    relatedCategories: ['nature', 'portrait'],
    recommendedStyles: ['oil-painting', 'cartoon', 'realistic'],
    popularPrompts: [
      'Magical castle floating in the clouds',
      'Dragon soaring over mystical mountains',
      'Enchanted forest with glowing mushrooms',
      'Wizard casting spells in ancient library'
    ]
  },
  {
    id: 'portrait',
    name: 'Portrait',
    description: 'People, faces, character studies',
    icon: '👤',
    relatedCategories: ['fantasy', 'architecture'],
    recommendedStyles: ['realistic', 'oil-painting', 'cartoon'],
    popularPrompts: [
      'Professional headshot with natural lighting',
      'Artistic portrait with dramatic shadows',
      'Character in period costume',
      'Close-up with vibrant eye makeup'
    ]
  },
  {
    id: 'architecture',
    name: 'Architecture',
    description: 'Buildings, structures, urban design',
    icon: '🏛️',
    relatedCategories: ['sci-fi', 'nature'],
    recommendedStyles: ['realistic', 'minimalist', 'cyberpunk'],
    popularPrompts: [
      'Modern skyscraper with glass facade',
      'Ancient temple with intricate carvings',
      'Futuristic building with curved design',
      'Cozy cottage surrounded by gardens'
    ]
  },
  {
    id: 'anime',
    name: 'Anime',
    description: 'Japanese animation style, manga characters',
    icon: '🎌',
    relatedCategories: ['fantasy', 'portrait'],
    recommendedStyles: ['cartoon', 'oil-painting', 'realistic'],
    popularPrompts: [
      'Anime girl with colorful hair and big eyes',
      'Samurai warrior in traditional armor',
      'Magical anime character casting spells',
      'Cute anime mascot with kawaii features',
      'Anime school student in uniform',
      'Mecha robot pilot in cockpit'
    ]
  }
];

export const STYLES: Style[] = [
  {
    id: 'realistic',
    name: 'Realistic',
    description: 'Photorealistic, detailed, lifelike',
    preview: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    id: 'cartoon',
    name: 'Cartoon',
    description: 'Animated, colorful, playful',
    preview: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    id: 'oil-painting',
    name: 'Oil Painting',
    description: 'Traditional, textured, artistic',
    preview: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Neon, dark, futuristic',
    preview: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean, simple, modern',
    preview: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  }
];

export const RESOLUTIONS: Resolution[] = [
  { id: '512x512', label: '512×512 (Square)', width: 512, height: 512 },
  { id: '1024x1024', label: '1024×1024 (Square HD)', width: 1024, height: 1024 },
  { id: '768x1024', label: '768×1024 (Portrait)', width: 768, height: 1024 },
  { id: '1024x768', label: '1024×768 (Landscape)', width: 1024, height: 768 },
  { id: '1920x1080', label: '1920×1080 (Full HD)', width: 1920, height: 1080 }
];

export const CUSTOMIZATION_PRESETS: CustomizationPreset[] = [
  {
    id: 'original',
    name: 'Original',
    description: 'No filters applied',
    icon: '🎨',
    settings: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      hue: 0,
      blur: 0,
      sepia: 0,
      grayscale: 0,
      invert: 0
    }
  },
  {
    id: 'vintage',
    name: 'Vintage',
    description: 'Warm, nostalgic look',
    icon: '📸',
    settings: {
      brightness: 110,
      contrast: 120,
      saturation: 80,
      hue: 10,
      blur: 0,
      sepia: 30,
      grayscale: 0,
      invert: 0
    }
  },
  {
    id: 'dramatic',
    name: 'Dramatic',
    description: 'High contrast and vibrant',
    icon: '⚡',
    settings: {
      brightness: 105,
      contrast: 140,
      saturation: 130,
      hue: 0,
      blur: 0,
      sepia: 0,
      grayscale: 0,
      invert: 0
    }
  },
  {
    id: 'soft',
    name: 'Soft',
    description: 'Gentle and dreamy',
    icon: '☁️',
    settings: {
      brightness: 115,
      contrast: 85,
      saturation: 90,
      hue: 0,
      blur: 1,
      sepia: 0,
      grayscale: 0,
      invert: 0
    }
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    description: 'Classic black and white',
    icon: '⚫',
    settings: {
      brightness: 100,
      contrast: 110,
      saturation: 100,
      hue: 0,
      blur: 0,
      sepia: 0,
      grayscale: 100,
      invert: 0
    }
  },
  {
    id: 'cool',
    name: 'Cool',
    description: 'Blue-tinted, modern look',
    icon: '❄️',
    settings: {
      brightness: 95,
      contrast: 115,
      saturation: 110,
      hue: -15,
      blur: 0,
      sepia: 0,
      grayscale: 0,
      invert: 0
    }
  }
];