import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const RisksSection = () => {
  const risks = [
    {
      id: "privacy",
      title: "Конфиденциальность данных",
      icon: "Shield",
      content:
        "Сбор и обработка персональных данных учеников требует особого внимания к защите информации. Важно обеспечить соответствие требованиям ФЗ-152 и международным стандартам.",
      measures: [
        "Шифрование всех персональных данных",
        "Ограниченный доступ к информации",
        "Согласие родителей на обработку данных",
        "Регулярный аудит систем безопасности",
      ],
    },
    {
      id: "bias",
      title: "Алгоритмическая предвзятость",
      icon: "AlertTriangle",
      content:
        "ИИ-системы могут воспроизводить и усиливать существующие предрассудки, что особенно опасно в образовательной среде.",
      measures: [
        "Тестирование на разных группах учащихся",
        "Регулярная проверка результатов экспертами",
        "Прозрачность алгоритмов принятия решений",
        "Возможность обжалования автоматических решений",
      ],
    },
    {
      id: "dependency",
      title: "Чрезмерная зависимость от технологий",
      icon: "Zap",
      content:
        "Риск утраты профессиональных навыков педагогов и психологов при чрезмерном полагании на ИИ-инструменты.",
      measures: [
        "ИИ как помощник, а не заменитель специалиста",
        "Постоянное профессиональное развитие кадров",
        "Сохранение человеческого фактора в принятии решений",
        "Регулярная оценка эффективности внедрения",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">
            Риски и вызовы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Важно понимать потенциальные угрозы и принимать меры по их
            минимизации
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {risks.map((risk) => (
              <AccordionItem
                key={risk.id}
                value={risk.id}
                className="bg-white rounded-lg shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Icon
                        name={risk.icon}
                        size={20}
                        className="text-red-600"
                      />
                    </div>
                    <span className="text-left font-semibold text-gray-800">
                      {risk.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-600 mb-4">{risk.content}</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Меры по снижению рисков:
                    </h4>
                    <ul className="space-y-1">
                      {risk.measures.map((measure, index) => (
                        <li
                          key={index}
                          className="text-blue-700 text-sm flex items-start"
                        >
                          <Icon
                            name="CheckCircle"
                            size={16}
                            className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                          />
                          {measure}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
