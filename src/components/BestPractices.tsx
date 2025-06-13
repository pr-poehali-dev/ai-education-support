import React from "react";
import Icon from "@/components/ui/icon";

const BestPractices = () => {
  const practices = [
    {
      icon: "Users",
      title: "Командная работа",
      description:
        "Вовлечение всех заинтересованных сторон: учителей, психологов, администрации, родителей и учеников в процесс внедрения ИИ.",
    },
    {
      icon: "BookOpen",
      title: "Постоянное обучение",
      description:
        "Регулярное повышение квалификации педагогических кадров для эффективного использования ИИ-инструментов.",
    },
    {
      icon: "Target",
      title: "Поэтапное внедрение",
      description:
        "Начинать с пилотных проектов, постепенно масштабируя успешные решения на всю образовательную организацию.",
    },
    {
      icon: "BarChart3",
      title: "Мониторинг результатов",
      description:
        "Постоянная оценка эффективности внедренных решений и их влияния на образовательный процесс.",
    },
    {
      icon: "Lock",
      title: "Этические стандарты",
      description:
        "Соблюдение принципов этики при работе с данными учащихся и принятии решений на основе ИИ.",
    },
    {
      icon: "Lightbulb",
      title: "Инновационный подход",
      description:
        "Открытость к новым технологиям при сохранении фокуса на образовательных целях и благополучии учащихся.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">
            Лучшие практики внедрения
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Рекомендации для успешного и безопасного использования ИИ в
            образовании
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {practices.map((practice, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={practice.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-montserrat">
                  {practice.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {practice.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
