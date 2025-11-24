import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// --- 1. Données Statiques ---
const CONTACT_INFO = {
    address: "5611 Wellington Road, Suite TE, Gainesville.",
    email: "goeasyappsvn@gmail.com",
    phone: "(84) 943 446 000",
    openHours: "8:00AM - 6:00PM"
};

// Coordonnées de l'adresse simulée (pour la carte)
// Format : [Latitude, Longitude]
const MAP_CENTER: [number, number] = [38.8026, -77.6366];

// =================================================================
// Composant Principal : ContactSection
// =================================================================
const ContactSection: React.FC = () => {

    // Composant A : Formulaire "Ask Us Anything"
    const AskUsAnything: React.FC = () => (
        <div className="p-6 md:p-10 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Ask Us Anything</h2>
            <p className="text-sm text-gray-600 mb-6">
                Have a question or comment? Use the form below to send us a message or contact us by mail at:
            </p>

            <form className="space-y-4">
                {/* Champ Nom */}
                <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name *</label>
                    <input type="text" id="name" className="mt-1 w-full border border-gray-300 p-3 rounded focus:ring-pink-500 focus:border-pink-500" required/>
                </div>
                
                {/* Champ Email */}
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email *</label>
                    <input type="email" id="email" className="mt-1 w-full border border-gray-300 p-3 rounded focus:ring-pink-500 focus:border-pink-500" required/>
                </div>
                
                {/* Champ Téléphone */}
                <div>
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Your Phone Number *</label>
                    <input type="tel" id="phone" className="mt-1 w-full border border-gray-300 p-3 rounded focus:ring-pink-500 focus:border-pink-500" required/>
                </div>
                
                {/* Champ Message */}
                <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message *</label>
                    <textarea id="message" rows={4} className="mt-1 w-full border border-gray-300 p-3 rounded focus:ring-pink-500 focus:border-pink-500" required/>
                </div>

                {/* Bouton Submit */}
                <button 
                    type="submit" 
                    className="w-full sm:w-auto mt-4 px-6 py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition-colors"
                >
                    Submit Now
                </button>
            </form>
        </div>
    );

    // Composant B : Informations de Contact "Get In Touch!"
    const GetInTouch: React.FC = () => (
        <div className="p-6 md:p-10 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Get In Touch!</h2>
            <p className="text-sm text-gray-600 mb-6">
                We'd love to hear from you - please use the form to send us a message or idea.
                Or simply pop in for a cup of fresh tea and a cookie.
            </p>

            <div className="space-y-4 text-gray-700">
                <p className="flex items-start space-x-2">
                    <span className="font-semibold text-lg">📍</span>
                    <span>{CONTACT_INFO.address}</span>
                </p>
                <p className="flex items-center space-x-2">
                    <span className="font-semibold text-lg">📧</span>
                    <span>{CONTACT_INFO.email}</span>
                </p>
                <p className="flex items-center space-x-2">
                    <span className="font-semibold text-lg">📞</span>
                    <span>{CONTACT_INFO.phone}</span>
                </p>
                <p className="flex items-center space-x-2">
                    <span className="font-semibold text-lg">🕒</span>
                    <span>Open Time: {CONTACT_INFO.openHours}</span>
                </p>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Icônes de Réseaux Sociaux (Simulées) */}
            <div className="flex space-x-3 justify-start">
                {['f', 't', 'x', 'i', 'e'].map((icon, index) => (
                    <div 
                        key={index}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-500 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer text-sm font-bold uppercase"
                    >
                        {icon}
                    </div>
                ))}
            </div>
        </div>
    );

    // Composant C : Carte Leaflet/OpenStreetMap
    const MapDisplay: React.FC = () => {
        return (
            <div className="w-full mt-8 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <MapContainer 
                    zoom={10} 
                    scrollWheelZoom={false} 
                    style={{ height: '500px', width: '100%' }}
                    bounds={[MAP_CENTER] as any}
                >
                    {/* Couche de tuiles OpenStreetMap (pas de clé API requise) */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    {/* Marqueur de l'emplacement */}
                    <Marker position={MAP_CENTER as any}>
                        <Popup>
                            {CONTACT_INFO.address}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        );
    };


    return (
        <div className="container mx-auto p-6 md:p-12 bg-gray-50 font-sans">
            {/* Section Formulaire et Infos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AskUsAnything />
                <GetInTouch />
            </div>

            {/* Section Carte */}
            <MapDisplay />
        </div>
    );
};

export default ContactSection;