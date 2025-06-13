import React from "react";
import Icon from "@/components/ui/icon";

const AboutAuthor = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-montserrat">Об авторе</h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="User" size={32} className="text-white" />
            </div>

            <h3 className="text-xl font-bold mb-4">
              Студент РГПУ им. А. И. Герцена
            </h3>
            <p className="text-lg mb-6 opacity-90 leading-relaxed">
              Я учусь в РГПУ им. А. И. Герцена в Институте экономики и
              управления и активно интересуюсь тем, как искусственный интеллект
              может помогать учителям и школьным психологам.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <h4 className="font-bold mb-3">О проекте</h4>
              <p className="text-sm opacity-90 leading-relaxed">
                Этот сайт — мой исследовательский проект, где я собираю полезную
                информацию о возможностях и рисках ИИ в образовании.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <h4 className="font-bold mb-3">Почему я это делаю?</h4>
              <p className="text-sm opacity-90 leading-relaxed">
                Мне интересно, как технологии меняют образование, и я хочу
                разобраться, как их можно применять с пользой для всех.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href="mailto:t4e5e6@yandex.ru"
                className="text-sm opacity-90 hover:opacity-100 transition-opacity underline"
              >
                t4e5e6@yandex.ru
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Telegram</h3>
              <a
                href="https://t.me/tee_416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-90 hover:opacity-100 transition-opacity underline"
              >
                @tee_416
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
