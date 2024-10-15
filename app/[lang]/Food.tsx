"use client"


import React from 'react';


// Define the Translation type for multilingual support
export type Translation = {
    [languageCode: string]: string; // e.g., { en: "English Title", fr: "Titre Français" }
};

// Define the Menu type with the specified keys
export type Menu = {
    _id: string;
    titles: Translation;
    description: Translation;
    price: number;
    weight: string;
    images: string[];
    composition: string;
};

// Example of a menu item
const sampleMenuItem: Menu = {
    _id: "1",
    titles: {
        en: "Spaghetti Carbonara",
        fr: "Spaghetti Carbonara"
    },
    description: {
        en: "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
        fr: "Plat de pâtes italien classique avec des œufs, du fromage, du pancetta et du poivre."
    },
    price: 15.99,
    weight: "300g",
    images: [
        "https://example.com/images/spaghetti-carbonara.jpg",
        "https://example.com/images/spaghetti-carbonara-2.jpg"
    ],
    composition: "Spaghetti, eggs, parmesan cheese, pancetta, black pepper"
};

// Simple Food Component
const FoodComponent: React.FC<{ menuItem: Menu }> = ({ menuItem }) => {
    return (
        <div className="food-item">
            <h2>{menuItem.titles.en}</h2>
            <p>{menuItem.description.en}</p>
            <p><strong>Price:</strong> ${menuItem.price.toFixed(2)}</p>
            <p><strong>Weight:</strong> {menuItem.weight}</p>
            <p><strong>Composition:</strong> {menuItem.composition}</p>
            <div className="image-gallery">
                {menuItem.images.map((image, index) => (
                    <img key={index} src={image} alt={menuItem.titles.en} style={{ width: '100px', margin: '5px' }} />
                ))}
            </div>
        </div>
    );
};

// Example usage of the FoodComponent
const App: React.FC = () => {
    return (
        <div className="app">
            <FoodComponent menuItem={sampleMenuItem} />
        </div>
    );
};

export default App;
