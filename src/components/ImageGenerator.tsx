import React, { useState } from 'react';
import { Shuffle, Zap } from 'lucide-react';
import { CategorySelector } from './CategorySelector';
import { StyleSelector } from './StyleSelector';
import { ResolutionSelector } from './ResolutionSelector';
import { CustomPrompt } from './CustomPrompt';
import { CategoryRecommendations } from './CategoryRecommendations';
import { GeneratedImage } from './GeneratedImage';
import { LoadingAnimation } from './LoadingAnimation';
import { useImageGeneration } from '../hooks/useImageGeneration';
import { ImageCustomization } from '../types';
import { CATEGORIES, STYLES, RESOLUTIONS } from '../utils/constants';

export const ImageGenerator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('nature');
  const [selectedStyle, setSelectedStyle] = useState('realistic');
  const [selectedResolution, setSelectedResolution] = useState('1024x1024');
  const [customPrompt, setCustomPrompt] = useState('');

  const { isGenerating, generatedImage, error, generateImage } = useImageGeneration();

  const currentCategory = CATEGORIES.find(cat => cat.id === selectedCategory)!;


  const handlePromptSelect = (prompt: string) => {
    setCustomPrompt(prompt);
  };

  const handleGenerate = () => {
    generateImage({
      category: selectedCategory,
      style: selectedStyle,
      resolution: selectedResolution,
      customPrompt: customPrompt.trim()
    });
  };

  const handleSurpriseMe = () => {
    const randomCategory = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    const randomStyle = STYLES[Math.floor(Math.random() * STYLES.length)];
    const randomResolution = RESOLUTIONS[Math.floor(Math.random() * RESOLUTIONS.length)];
    
    setSelectedCategory(randomCategory.id);
    setSelectedStyle(randomStyle.id);
    setSelectedResolution(randomResolution.id);
    setCustomPrompt('');
    
    setTimeout(() => {
      generateImage({
        category: randomCategory.id,
        style: randomStyle.id,
        resolution: randomResolution.id,
        customPrompt: ''
      });
    }, 500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-200">
          <CategorySelector
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <StyleSelector
            styles={STYLES}
            selectedStyle={selectedStyle}
            onStyleChange={setSelectedStyle}
          />
          
          <ResolutionSelector
            resolutions={RESOLUTIONS}
            selectedResolution={selectedResolution}
            onResolutionChange={setSelectedResolution}
          />
          
          <CustomPrompt
            value={customPrompt}
            onChange={setCustomPrompt}
          />
          
          <CategoryRecommendations
            selectedCategory={currentCategory}
            allCategories={CATEGORIES}
            allStyles={STYLES}
            onCategoryChange={setSelectedCategory}
            onStyleChange={setSelectedStyle}
            onPromptSelect={handlePromptSelect}
          />
          
          <div className="flex gap-3">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="group flex-1 flex items-center justify-center gap-2 px-6 py-4 
                       bg-gradient-to-r from-blue-500 to-purple-600 
                       hover:from-blue-600 hover:to-purple-700 
                       disabled:from-gray-400 disabled:to-gray-500 
                       text-white rounded-xl font-semibold text-lg
                       transition-all duration-300 shadow-lg hover:shadow-2xl
                       disabled:cursor-not-allowed transform hover:scale-105 hover:-translate-y-1
                       relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Zap size={20} className="relative z-10" />
              <span className="relative z-10">
              {isGenerating ? 'Generating...' : 'Generate Image'}
              </span>
            </button>
            
            <button
              onClick={handleSurpriseMe}
              disabled={isGenerating}
              className="group flex items-center justify-center gap-2 px-6 py-4 
                       bg-gradient-to-r from-orange-500 to-red-500 
                       hover:from-orange-600 hover:to-red-600 
                       disabled:from-gray-400 disabled:to-gray-500 
                       text-white rounded-xl font-semibold
                       transition-all duration-300 shadow-lg hover:shadow-2xl
                       disabled:cursor-not-allowed transform hover:scale-105 hover:-translate-y-1
                       relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Shuffle size={20} className="relative z-10" />
              <span className="relative z-10">Surprise Me</span>
            </button>
          </div>
          
          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-in fade-in-0 slide-in-from-top-2">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}
        </div>
        
        {/* Generated Image */}
        <div className="lg:sticky lg:top-8 animate-in fade-in-0 slide-in-from-right-4 duration-700 delay-400">
          {isGenerating ? (
            <LoadingAnimation />
          ) : generatedImage ? (
            <GeneratedImage
              image={generatedImage}
              onRegenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          ) : (
            <div className="flex items-center justify-center h-96 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Ready to Create
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 opacity-75">
                    Configure your options and generate your first image
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};