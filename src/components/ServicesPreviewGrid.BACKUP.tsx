// BACKUP DEL DISEÑO ORIGINAL - Guardado el 28/01/2026
// Este es el diseño anterior de las cards de servicios en Home
// Para restaurar, copiar el contenido y reemplazar en ServicesPreviewGrid.tsx

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Plane,
  Ship,
  Truck,
  Warehouse,
  Route,
  FileText,
  ArrowRight
} from 'lucide-react';

interface ServicePreview {
  id: string;
  icon: React.ReactNode;
  image: string;
  name: string;
  oneLiner: string;
  color: string;
  link: string;
}

const ServicesPreviewGrid_BACKUP = () => {
  const { t } = useTranslation();

  const services: ServicePreview[] = [
    {
      id: 'air',
      icon: <Plane size={48} strokeWidth={1.5} />,
      image: '/images/ImagenAer.png',
      name: t('servicesPage.grid.air.title', 'Transporte Aéreo'),
      oneLiner: t('servicesPage.grid.air.oneLiner', 'Velocidad y precisión global'),
      color: '#0ea5e9',
      link: '/servicios#transporte-aereo'
    },
    {
      id: 'sea',
      icon: <Ship size={48} strokeWidth={1.5} />,
      image: '/images/ImagenMar.png',
      name: t('servicesPage.grid.sea.title', 'Transporte Marítimo'),
      oneLiner: t('servicesPage.grid.sea.oneLiner', 'Capacidad y economía en océanos'),
      color: '#3b82f6',
      link: '/servicios#transporte-maritimo'
    },
    {
      id: 'land',
      icon: <Truck size={48} strokeWidth={1.5} />,
      image: '/images/ImagenTer.png',
      name: t('servicesPage.grid.land.title', 'Transporte Terrestre'),
      oneLiner: t('servicesPage.grid.land.oneLiner', 'Conectando destinos continentales'),
      color: '#22c55e',
      link: '/servicios#transporte-terrestre'
    },
    {
      id: 'warehouse',
      icon: <Warehouse size={48} strokeWidth={1.5} />,
      image: '/images/ImagenWare.png',
      name: t('servicesPage.grid.warehouse.title', 'Warehouse & Fulfillment'),
      oneLiner: t('servicesPage.grid.warehouse.oneLiner', 'Almacenaje estratégico 24/7'),
      color: '#f59e0b',
      link: '/servicios#warehouse'
    },
    {
      id: 'multimodal',
      icon: <Route size={48} strokeWidth={1.5} />,
      image: '/images/ImagenMulti.png',
      name: t('servicesPage.grid.multimodal.title', 'Servicio Multimodal'),
      oneLiner: t('servicesPage.grid.multimodal.oneLiner', 'Rutas optimizadas integradas'),
      color: '#8b5cf6',
      link: '/servicios#servicio-multimodal'
    },
    {
      id: 'customs',
      icon: <FileText size={48} strokeWidth={1.5} />,
      image: '/images/ImagenAdu.png',
      name: t('servicesPage.grid.customs.title', 'Servicio de Aduanas'),
      oneLiner: t('servicesPage.grid.customs.oneLiner', 'Cumplimiento normativo garantizado'),
      color: '#ef4444',
      link: '/servicios#servicio-aduanas'
    }
  ];

  // ... resto del componente original
  return null; // Este es solo un backup
};

export default ServicesPreviewGrid_BACKUP;
