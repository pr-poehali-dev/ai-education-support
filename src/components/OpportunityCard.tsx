import React from "react";
import Icon from "@/components/ui/icon";

interface OpportunityCardProps {
  icon: string;
  title: string;
  description: string;
  examples: string[];
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  icon,
  title,
  description,
  examples,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 hover:scale-105 transform transition-transform">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
          <Icon name={icon} size={24} className="text-purple-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 font-montserrat">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="space-y-2">
        <h4 className="font-semibold text-purple-700 text-sm uppercase tracking-wide">
          Примеры применения:
        </h4>
        <ul className="space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              {example}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OpportunityCard;
