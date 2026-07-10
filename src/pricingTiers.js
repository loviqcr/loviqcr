export const defaultPrices = {
  premium: 5000,
  animada: 7000,
  interactiva: 15000,
};

export const tiers = [
  {
    key: 'premium',
    badge: 'Invitación premium',
    badgeClass: 'bg-rose-deep',
    features: ['Diseño personalizado', 'Colores y temática a elección', 'Formato listo para compartir'],
    featured: false,
    example: 'ejemplo-invitacion.html',
  },
  {
    key: 'animada',
    badge: 'Invitación animada',
    badgeClass: 'bg-rose',
    features: ['Animación tipo video (MP4)', 'Música + efectos', 'Perfecta para cualquier evento'],
    featured: true,
    example: 'ejemplo-invitacion.html',
  },
  {
    key: 'interactiva',
    badge: 'Invitación interactiva',
    badgeClass: 'bg-plum',
    features: ['Tipo link (estilo mini web)', 'Botón de ubicación', 'Confirmación de asistencia (RSVP)', 'Música + secciones'],
    featured: false,
    example: 'ejemplo-invitacion.html',
  },
];
