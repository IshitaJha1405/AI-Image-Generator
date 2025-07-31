import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RotateCcw, Palette, Download, X, Save } from 'lucide-react';
import { ImageCustomization, CustomizationPreset } from '../types';
import { CUSTOMIZATION_PRESETS } from '../utils/constants';

interface ImageCustomizerProps {
  imageUrl: string;
  onClose: () => void;
  onSave: (customizedImageUrl: string, settings: ImageCustomization) => void;
}

export const ImageCustomizer: React.FC<ImageCustomizerProps> = ({
  imageUrl,
  onClose,
  onSave
}) => {
  const [customization, setCustomization] = useState<ImageCustomization>({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hue: 0,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    invert: 0
  });

  const [selectedPreset, setSelectedPreset] = useState('original');
  const [isProcessing, setIsProcessing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const generateFilterString = (settings: ImageCustomization): string => {
    return [
      `brightness(${settings.brightness}%)`,
      `contrast(${settings.contrast}%)`,
      `saturate(${settings.saturation}%)`,
      `hue-rotate(${settings.hue}deg)`,
      `blur(${settings.blur}px)`,
      `sepia(${settings.sepia}%)`,
      `grayscale(${settings.grayscale}%)`,
      `invert(${settings.invert}%)`
    ].join(' ');
  };

  const handlePresetChange = (preset: CustomizationPreset) => {
    setCustomization(preset.settings);
    setSelectedPreset(preset.id);
  };

  const handleSliderChange = (property: keyof ImageCustomization, value: number) => {
    setCustomization(prev => ({
      ...prev,
      [property]: value
    }));
    setSelectedPreset('custom');
  };

  const handleReset = () => {
    const originalPreset = CUSTOMIZATION_PRESETS.find(p => p.id === 'original')!;
    handlePresetChange(originalPreset);
  };

  const applyFiltersToCanvas = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = canvasRef.current;
      const img = imageRef.current;
      
      if (!canvas || !img) {
        reject('Canvas or image not available');
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject('Canvas context not available');
        return;
      }

      // Set canvas size to match image
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      // Apply CSS filters to canvas context
      ctx.filter = generateFilterString(customization);
      
      // Draw the image with filters applied
      ctx.drawImage(img, 0, 0);
      
      // Convert canvas to blob and create URL
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          resolve(url);
        } else {
          reject('Failed to create blob');
        }
      }, 'image/jpeg', 0.9);
    });
  };

  const handleSave = async () => {
    setIsProcessing(true);
    try {
      const customizedImageUrl = await applyFiltersToCanvas();
      onSave(customizedImageUrl, customization);
    } catch (error) {
      console.error('Error applying filters:', error);
      alert('Failed to apply filters. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = async () => {
    setIsProcessing(true);
    try {
      const customizedImageUrl = await applyFiltersToCanvas();
      
      // Create download link
      const link = document.createElement('a');
      link.href = customizedImageUrl;
      link.download = `customized-image-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      URL.revokeObjectURL(customizedImageUrl);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Failed to download image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const sliderConfigs = [
    { key: 'brightness' as keyof ImageCustomization, label: 'Brightness', min: 0, max: 200, step: 1 },
    { key: 'contrast' as keyof ImageCustomization, label: 'Contrast', min: 0, max: 200, step: 1 },
    { key: 'saturation' as keyof ImageCustomization, label: 'Saturation', min: 0, max: 200, step: 1 },
    { key: 'hue' as keyof ImageCustomization, label: 'Hue', min: -180, max: 180, step: 1 },
    { key: 'blur' as keyof ImageCustomization, label: 'Blur', min: 0, max: 10, step: 0.1 },
    { key: 'sepia' as keyof ImageCustomization, label: 'Sepia', min: 0, max: 100, step: 1 },
    { key: 'grayscale' as keyof ImageCustomization, label: 'Grayscale', min: 0, max: 100, step: 1 },
    { key: 'invert' as keyof ImageCustomization, label: 'Invert', min: 0, max: 100, step: 1 }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" style={{ zIndex: 9998 }}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Sliders className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Customize Image
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Apply filters and adjustments to perfect your image
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-[calc(90vh-120px)]">
          {/* Image Preview */}
          <div className="flex-1 p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative">
            <div className="relative max-w-full max-h-full">
              <img
                ref={imageRef}
                src={imageUrl}
                alt="Customizable image"
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                style={{ filter: generateFilterString(customization) }}
                crossOrigin="anonymous"
                onLoad={() => {
                  // Ensure canvas is ready when image loads
                  if (canvasRef.current && imageRef.current) {
                    const canvas = canvasRef.current;
                    const img = imageRef.current;
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                  }
                }}
              />
              {/* Hidden canvas for processing */}
              <canvas
                ref={canvasRef}
                className="hidden"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="w-full lg:w-96 p-6 bg-white dark:bg-gray-800 overflow-y-auto">
            {/* Presets */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Presets
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {CUSTOMIZATION_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetChange(preset)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-left
                               ${selectedPreset === preset.id
                                 ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                                 : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                               }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{preset.icon}</span>
                      <span className="font-medium text-sm text-gray-900 dark:text-white">
                        {preset.name}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {preset.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Manual Controls */}
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Sliders className="w-5 h-5" />
                Manual Adjustments
              </h3>
              
              {sliderConfigs.map((config) => (
                <div key={config.key} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {config.label}
                    </label>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {customization[config.key]}
                      {config.key === 'hue' ? '°' : config.key === 'blur' ? 'px' : '%'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={config.min}
                    max={config.max}
                    step={config.step}
                    value={customization[config.key]}
                    onChange={(e) => handleSliderChange(config.key, parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleReset}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 
                         bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 
                         text-gray-700 dark:text-gray-300 rounded-lg font-medium 
                         transition-colors duration-200 disabled:opacity-50"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to Original
              </button>
              
              <button
                onClick={handleDownload}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 
                         bg-green-500 hover:bg-green-600 disabled:bg-green-400
                         text-white rounded-lg font-medium 
                         transition-all duration-200 shadow-lg hover:shadow-xl
                         disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {isProcessing ? 'Processing...' : 'Download Customized'}
              </button>
              
              <button
                onClick={handleSave}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 
                         bg-gradient-to-r from-purple-500 to-pink-600 
                         hover:from-purple-600 hover:to-pink-700 
                         disabled:from-purple-400 disabled:to-pink-400
                         text-white rounded-lg font-medium 
                         transition-all duration-200 shadow-lg hover:shadow-xl
                         disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                {isProcessing ? 'Applying...' : 'Apply & Save'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};