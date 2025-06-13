import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://cdn.poehali.dev/files/6144639a-7504-43a8-904b-7df8939fd9a5.png"
            alt="Логотип"
            className="w-16 h-16 mr-4 bg-white rounded-full p-2 shadow-lg"
          />
          <div className="w-12 h-1 bg-white/50 rounded"></div>
        </div>
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
