import React, { useState } from 'react';
// Import des images
import Anis from '../../../../assets/anis-m-WnVrO-DvxcE-unsplash.jpeg';
import Even from '../../../../assets/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg';
import Jordan from '../../../../assets/jordan-nix-CkCUvwMXAac-unsplash.jpeg';
import Nature from '../../../../assets/nature-zen-3Dn1BZZv3m8-unsplash.jpeg';
import { FaEye } from 'react-icons/fa6';

// --- INTERFACES ---

interface Color {
  name: string;
  code: string;
}

interface ThumbnailImage {
  src: string;
  alt: string;
}

interface ProductData {
  name: string;
  price: number;
  code: string;
  category: string;
  tags: string[];
  description: string;
  colors: Color[];
  sizes: string[];
  thumbnail_images: ThumbnailImage[];
}

const PRODUCT_DATA: ProductData = {
  name: 'Calf High Leather Boots',
  price: 100,
  code: 'WHTHJ',
  category: 'Fashion, Sneakers',
  tags: ['shoes', 'tag', 'bag'],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
  colors: [
    { name: 'White', code: 'white' },
    { name: 'Blue', code: '#3B82FF' },
  ],
  sizes: ['S', 'M', 'L', 'XL'],
  thumbnail_images: [
    { src: Anis, alt: 'Boot beige' },
    { src: Even, alt: 'Boot grise' },
    { src: Jordan, alt: 'Sneakers rouges' },
    { src: Nature, alt: 'Chaussures bleues' },
  ],
};

interface MainImageDisplayProps {
  src: string;
  alt: string;
}

interface ThumbnailDisplayProps {
  src: string;
  alt: string;
  isSelected: boolean;
}

// --- COMPOSANT PRINCIPAL ---

const WomensBeauty = () => {
  const [mainImage, setMainImage] = useState<string>(
    PRODUCT_DATA.thumbnail_images[0].src,
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    PRODUCT_DATA.colors[1].code,
  );
  const [selectedSize, setSelectedSize] = useState<string>('S');
  const [quantity, setQuantity] = useState<number>(1);

  // Composant d'affichage de l'image principale avec effet de zoom manuel
  const MainImageDisplay = ({ src, alt }: MainImageDisplayProps) => {
    const [backgroundPosition, setBackgroundPosition] =
      useState<string>('center');
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setBackgroundPosition(`${x}% ${y}%`);
      setIsHovering(true);
    };

    const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
      setBackgroundPosition('center');
      setIsHovering(false);
    };

    return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto">
        {/* Image principale (sans zoom, taille normale) */}
        <div
          className="bg-gray-100 rounded-lg overflow-hidden w-full max-w-sm h-[350px] cursor-zoom-in"
          aria-label={alt}
          role="img"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Panneau de zoom séparé (affiché uniquement au survol) */}
        {isHovering && (
          <div
            className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden w-[350px] h-[400px]"
            style={{
              backgroundImage: `url(${src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '450% 450%',
              backgroundPosition,
            }}
          />
        )}
      </div>
    );
  };

  // Composant d'affichage des miniatures (Ajout de type="button" pour l'accessibilité)
  const ThumbnailDisplay = ({
    src,
    alt,
    isSelected,
  }: ThumbnailDisplayProps) => (
    <button
      type="button"
      className={`w-20 h-20 flex items-center justify-center rounded cursor-pointer p-1 ${
        isSelected
          ? 'border-2 border-black'
          : 'border border-gray-300 hover:border-gray-500'
      }`}
      onClick={() => setMainImage(src)}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </button>
  );

  return (
    <div className="container mx-auto p-6 md:p-12 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Colonne 1 : Images */}
        <div className="space-y-4 flex flex-col items-center">
          <MainImageDisplay src={mainImage} alt={PRODUCT_DATA.name} />

          {/* Miniatures */}
          <div className="flex space-x-2">
            {PRODUCT_DATA.thumbnail_images.map((img) => (
              <ThumbnailDisplay
                key={img.src}
                src={img.src}
                alt={img.alt}
                isSelected={mainImage === img.src}
              />
            ))}
          </div>
        </div>

        {/* Colonne 2 : Détails du Produit */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">{PRODUCT_DATA.name}</h1>

          {/* Statistiques */}
          <div className="text-sm text-gray-500 space-y-1">
            <p className="flex items-center">
              <span className="text-black text-lg mr-1">
                <FaEye />
              </span>
              77 People are viewing this right now.
            </p>
            <p className="flex items-center">
              <span className="text-red-500 text-lg mr-1">🔥</span>
              49 Sold in 24 hour
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Infos rapides */}
          <div className="text-sm space-y-1">
            <p>
              <span className="font-semibold">Availability:</span>{' '}
              <span className="text-green-600">In stock</span>
            </p>
            <p>
              <span className="font-semibold">Product Code:</span>{' '}
              {PRODUCT_DATA.code}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{' '}
              {PRODUCT_DATA.category}
            </p>
            <p>
              <span className="font-semibold">Tag:</span>{' '}
              <span className="text-gray-600">
                {PRODUCT_DATA.tags.join(', ')}
              </span>
            </p>
          </div>

          <p className="text-gray-600 text-sm">{PRODUCT_DATA.description}</p>

          <div className="text-4xl font-bold text-gray-900">
            ${PRODUCT_DATA.price}
          </div>

          <hr className="border-gray-200" />

          {/* Choix de Couleur */}
          <div className="space-y-2">
            <p className="font-medium text-sm">
              Color:{' '}
              <span className="font-normal text-gray-600">
                {
                  PRODUCT_DATA.colors.find(
                    (c: Color) => c.code === selectedColor,
                  )?.name || 'Unknown'
                }
              </span>
            </p>
            <div className="flex space-x-3">
              {PRODUCT_DATA.colors.map((color: Color) => (
                <button
                  key={color.code}
                  type="button"
                  onClick={() => setSelectedColor(color.code)}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color.code
                      ? 'border-gray-900 ring-2 ring-offset-2 ring-gray-900'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.code }}
                  aria-label={`Select color ${color.name}`}
                  title={`Select color ${color.name}`}
                />
              ))}
            </div>
          </div>

          {/* Choix de Taille */}
          <div className="space-y-2">
            <p className="font-medium text-sm">
              Size:{' '}
              <span className="font-normal text-gray-600">{selectedSize}</span>
            </p>
            <div className="flex space-x-3">
              {PRODUCT_DATA.sizes.map((size: string) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`w-9 h-9 border text-sm flex items-center justify-center ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                  title={`Select size ${size}`}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Actions : Quantité et Boutons */}
          <div className="flex items-center space-x-4">
            {/* Contrôle de Quantité */}
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity((q: number) => Math.max(1, q - 1))}
                className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold"
                aria-label="Decrease quantity"
                title="Decrease quantity"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-x border-gray-300 focus:outline-none"
                aria-label="Product quantity"
                title="Product quantity"
              />
              <button
                type="button"
                onClick={() => setQuantity((q: number) => q + 1)}
                className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold"
                aria-label="Increase quantity"
                title="Increase quantity"
              >
                +
              </button>
            </div>

            {/* Bouton "Add to cart" */}
            <button
              type="button"
              className="flex-1 flex items-center justify-center space-x-2 bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
              aria-label="Add product to cart"
              title="Add product to cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.258A4 4 0 007 9h10a1 1 0 00.82-.442l4-8a1 1 0 00-1.64-1.116L15.93 2H7zM16 16a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              <span>Add to cart</span>
            </button>

            {/* Icônes d'actions */}
            <button
              type="button"
              className="p-3 border border-gray-300 rounded hover:bg-gray-50"
              aria-label="Add to favorites"
              title="Add to favorites"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              type="button"
              className="p-3 border border-gray-300 rounded hover:bg-gray-50"
              aria-label="Compare items"
              title="Compare items"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Liens d'informations supplémentaires */}
          <div className="flex justify-between text-sm text-gray-600 border-t border-b border-gray-200 py-3">
            <button
              type="button"
              className="flex items-center space-x-1 hover:text-black transition-colors"
            >
              <span className="text-xl mr-1 text-gray-500">🎨</span>
              Compare Color
            </button>
            <button
              type="button"
              className="flex items-center space-x-1 hover:text-black transition-colors"
            >
              <span className="text-xl mr-1 text-gray-500">❓</span>
              Ask A Question
            </button>
            <button
              type="button"
              className="flex items-center space-x-1 hover:text-black transition-colors"
            >
              <span className="text-xl mr-1 text-gray-500">🚚</span>
              Shipping & Return
            </button>
            <button
              type="button"
              className="flex items-center space-x-1 hover:text-black transition-colors"
            >
              <span className="text-xl mr-1 text-gray-500">🔗</span>
              Share
            </button>
          </div>

          {/* Date de livraison */}
          <div className="text-sm font-semibold text-red-600">
            Delivery: 30th November - 22nd November
          </div>

          {/* Livraison gratuite */}
          <div className="text-sm text-gray-500">
            Free shipping and returns on all orders over $450
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensBeauty;