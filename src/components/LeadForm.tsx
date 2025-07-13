import React, { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';
import { LeadData } from '../types/quiz';

interface LeadFormProps {
  onSubmit: (data: LeadData) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<LeadData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<LeadData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof LeadData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-4 sm:mb-6">
        <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-3 animate-pulse">
          <span className="text-lg sm:text-xl">🎯</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          Seu Protocolo Está Pronto! 🎉
        </h2>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
          Confirme seus dados para acessar seu Mounjaro Natural personalizado
        </p>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-2 sm:p-3 mt-3">
          <p className="text-yellow-700 font-medium text-xs sm:text-sm">
            ⚡ Acesso liberado em menos de 2 minutos após confirmação
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 mb-6">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Nome completo
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="Digite seu nome completo"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="Digite seu melhor email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Telefone/WhatsApp
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base ${
                errors.phone ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="(11) 99999-9999"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105"
        >
          Receber Meu Resultado
        </button>
      </form>

      <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
        Seus dados estão seguros e não serão compartilhados com terceiros.
      </p>
    </div>
  );
};