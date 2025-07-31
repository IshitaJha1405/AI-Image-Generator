import React from 'react';
import { Download, RefreshCw, Copy, Sliders } from 'lucide-react';
import { GeneratedImage as GeneratedImageType } from '../types';
import { ImageCustomizer } from './ImageCustomizer';
import { ImageCustomization } from '../types';
import { downloadImage } from '../utils/imageGeneration';

interface GeneratedImageProps {
  image: GeneratedImageType;
  onRegenerate: () => void;
  isGenerating?: boolean;
}

export const GeneratedImage: React.FC<GeneratedImageProps> = ({ 
  image, 
  onRegenerate, 
  isGenerating = false
}) => {
  const [showCustomizer, setShowCustomizer] = React.useState(false);
  const [customizedImage, setCustomizedImage] = React.useState<string | null>(null);

  const handleDownload = () => {
    const imageUrl = customizedImage || image.url;
    const filename = `ai-generated-${image.id}${customizedImage ? '-customized' : ''}.jpg`;
    downloadImage(imageUrl, filename);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(image.prompt);
  };

  const handleCustomizeSave = (customizedImageUrl: string, settings: ImageCustomization) => {
    setCustomizedImage(customizedImageUrl);
    setShowCustomizer(false);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in fade-in-0 slide-in-from-top-2';
    successMessage.textContent = 'Image customization applied successfully!';
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 3000);
  };

  return (
    <>
      <div className="space-y-6">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img
            src={customizedImage || image.url}
            alt="Generated image"
            className="w-full h-full object-cover"
          />
          {customizedImage && (
            <div className="absolute top-2 left-2 bg-purple-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Customized
            </div>
          )}
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <Copy size={16} className="text-gray-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                Generated Prompt:
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {image.prompt}
              </p>
              <button
                onClick={handleCopyPrompt}
                className="text-xs text-blue-500 hover:text-blue-600 mt-2 flex items-center gap-1"
              >
                <Copy size={12} />
                Copy prompt
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 px-4 py-3 
                       bg-green-500 hover:bg-green-600 text-white rounded-lg 
                       transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              <Download size={18} />
              {customizedImage ? 'Download Customized' : 'Download'}
            </button>
            
            <button
              onClick={onRegenerate}
              disabled={isGenerating}
              className="flex items-center justify-center gap-2 px-4 py-3 
                       bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 
                       text-white rounded-lg transition-all duration-300 font-medium 
                       shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              <RefreshCw size={18} className={isGenerating ? 'animate-spin' : ''} />
              {isGenerating ? 'Generating...' : 'Regenerate'}
            </button>
            
            <button
              onClick={() => setShowCustomizer(true)}
              className="col-span-2 flex items-center justify-center gap-2 px-4 py-3 
                       bg-gradient-to-r from-purple-500 to-pink-600 
                       hover:from-purple-600 hover:to-pink-700 
                       text-white rounded-lg transition-all duration-300 font-medium 
                       shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Sliders size={18} />
              {customizedImage ? 'Customize Again' : 'Customize Image'}
            </button>
          </div>
        </div>
      </div>
      </div>

      {showCustomizer && (
        <ImageCustomizer
          imageUrl={customizedImage || image.url}
          onClose={() => setShowCustomizer(false)}
          onSave={handleCustomizeSave}
        />
      )}
    </>
  );
};