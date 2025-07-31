export interface ImageGenerationOptions {
  category: string;
  style: string;
  customPrompt?: string;
  resolution: string;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  options: ImageGenerationOptions;
  timestamp: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  relatedCategories: string[];
  recommendedStyles: string[];
  popularPrompts: string[];
}

export interface Style {
  id: string;
  name: string;
  description: string;
  preview: string;
}

export interface Resolution {
  id: string;
  label: string;
  width: number;
  height: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface ImageCustomization {
  brightness: number;
  contrast: number;
  saturation: number;
  hue: number;
  blur: number;
  sepia: number;
  grayscale: number;
  invert: number;
}

export interface CustomizationPreset {
  id: string;
  name: string;
  description: string;
  icon: string;
  settings: ImageCustomization;
}