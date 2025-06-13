import React from "react";
import Icon from "@/components/ui/icon";

const Conclusion = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-montserrat">
            Заключение
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Искусственный интеллект открывает новые горизонты для поддержки
            школьных психологов и учителей, но требует взвешенного подхода к
            внедрению. Успех зависит от баланса между инновациями и
            традиционными ценностями образования.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Человек в центре</h3>
              <p className="text-sm opacity-80">
                ИИ дополняет, но не заменяет человеческую заботу и
                профессионализм
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Безопасность данных</h3>
              <p className="text-sm opacity-80">
                Защита персональной информации учащихся — приоритет номер один
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Постоянное развитие</h3>
              <p className="text-sm opacity-80">
                Непрерывное обучение и адаптация к новым технологиям
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Ключевые принципы</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Этичность",
                "Прозрачность",
                "Безопасность",
                "Эффективность",
                "Инклюзивность",
              ].map((principle, index) => (
                <span
                  key={index}
                  className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
