import React from "react";
import Header from "@/components/Header";
import OpportunityCard from "@/components/OpportunityCard";
import RisksSection from "@/components/RisksSection";
import BestPractices from "@/components/BestPractices";
import AboutAuthor from "@/components/AboutAuthor";

const Index = () => {
  const opportunities = [
    {
      icon: "User",
      title: "Персонализированное обучение",
      description:
        "ИИ анализирует индивидуальные особенности каждого ученика и адаптирует образовательный процесс под его потребности.",
      examples: [
        "Адаптивные обучающие платформы",
        "Индивидуальные траектории развития",
        "Рекомендации по методам обучения",
      ],
    },
    {
      icon: "Search",
      title: "Раннее выявление трудностей",
      description:
        "Системы машинного обучения помогают выявлять проблемы в обучении и развитии на ранних стадиях.",
      examples: [
        "Анализ паттернов поведения",
        "Выявление признаков дислексии",
        "Мониторинг эмоционального состояния",
      ],
    },
    {
      icon: "Settings",
      title: "Автоматизация рутины",
      description:
        "ИИ берет на себя административные задачи, освобождая время для работы с детьми.",
      examples: [
        "Автоматическое планирование занятий",
        "Анализ успеваемости",
        "Генерация отчетов и документации",
      ],
    },
    {
      icon: "Brain",
      title: "Поддержка принятия решений",
      description:
        "Аналитика больших данных помогает специалистам принимать более обоснованные решения.",
      examples: [
        "Прогнозирование академических результатов",
        "Рекомендации по интервенциям",
        "Оценка эффективности методик",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Возможности ИИ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">
              Возможности ИИ в образовании
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Искусственный интеллект открывает новые горизонты для поддержки
              образовательного процесса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {opportunities.map((opportunity, index) => (
              <OpportunityCard key={index} {...opportunity} />
            ))}
          </div>
        </div>
      </section>

      <RisksSection />
      <BestPractices />
      <AboutAuthor />
    </div>
  );
};

export default Index;
