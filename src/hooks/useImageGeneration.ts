import { useState, useCallback } from 'react';
import { ImageGenerationOptions, GeneratedImage } from '../types';
import { generatePrompt, mockImageGeneration, logUserSelection } from '../utils/imageGeneration';

export const useImageGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<GeneratedImage | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImage = useCallback(async (options: ImageGenerationOptions) => {
    setIsGenerating(true);
    setError(null);
    
    try {
      const prompt = generatePrompt(options);
      const imageUrl = await mockImageGeneration(options);
      
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        url: imageUrl,
        prompt,
        options,
        timestamp: Date.now()
      };
      
      setGeneratedImage(newImage);
      logUserSelection(options);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error('Image generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const clearImage = useCallback(() => {
    setGeneratedImage(null);
    setError(null);
  }, []);

  return {
    isGenerating,
    generatedImage,
    error,
    generateImage,
    clearImage
  };
};