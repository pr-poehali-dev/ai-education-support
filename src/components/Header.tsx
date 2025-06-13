import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
          Роль ИИ в поддержке школьных психологов и учителей
        </h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
          Исследуем возможности и риски применения искусственного интеллекта в
          образовательной среде
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="w-12 h-1 bg-white rounded"></div>
          <span className="text-lg">🤖 📚 🎯</span>
          <div className="w-12 h-1 bg-white rounded"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
