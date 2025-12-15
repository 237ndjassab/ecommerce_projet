import React from 'react';

// Interface pour définir la structure d'un article de panier, bien que non utilisée dans le rendu actuel,
// c'est une bonne pratique pour un vrai composant de panier.
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// Composant de la ligne d'en-tête pour la liste des articles
const HeaderRow: React.FC = () => (
  <div className="flex text-sm border-b py-2 mb-4 font-normal text-gray-700">
    <div className="w-1/6 px-2">Item</div>
    <div className="w-2/6 px-2">Title</div>
    <div className="w-1/6 px-2">Price</div>
    <div className="w-1/6 px-2">Quantity</div>
    <div className="w-1/6 px-2 text-right">Total</div>
    <div className="w-[50px] px-2 text-right">Remove</div>
  </div>
);

// Le composant principal du panier d'achat
const ShoppingCart: React.FC = () => {
  // Les totaux sont basés sur l'image fournie (tous à zéro)
  const subtotal = 0;
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="p-8 bg-white max-w-6xl mx-auto shadow-lg">
      
      {/* Tableaux d'articles (vide dans l'image) */}
      <div className="mb-12">
        <HeaderRow />
        {/* Ici irait la liste des articles (laisser vide pour reproduire l'image) */}
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        
        {/* Bloc "Cart Totals" (Côté Gauche) */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-xl font-bold mb-6 border-b pb-2">
            Cart Totals
          </h2>
          
          <div className="flex justify-between py-2">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-semibold">{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-300">
            <span className="text-gray-700">Delivery Fee</span>
            <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between py-4 mb-8">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold">${total.toFixed(2)}</span>
          </div>

          <button className="w-full sm:w-auto px-12 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold uppercase rounded-sm transition duration-150">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Bloc "Promo Code" (Côté Droit) */}
        <div className="w-full lg:w-1/2 pl-0 lg:pl-8 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-200">
          <p className="mb-2 text-gray-700">
            If you have a promo code, Enter it here
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="promo code"
              className="flex-grow p-3 bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 border-none rounded-none"
            />
            <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-none transition duration-150">
              Submit
            </button>
          </div>
        </div>
      </div>
      
      {/* Ce texte est ignoré car il fait partie de la capture d'écran de l'OS */}
      {/* <p className="mt-8 text-xs text-right text-gray-400">Activer Windows</p> */}
    </div>
  );
};

export default ShoppingCart;