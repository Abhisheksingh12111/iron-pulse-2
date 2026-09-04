import { Program, GalleryItem, Testimonial, StatItem, MembershipTier } from '../types';

export const GYM_STATS: StatItem[] = [
  { value: '15,000+', label: 'Sq. Ft Facility', detail: 'Spacious industrial training zones' },
  { value: '45+', label: 'Elite Coaches', detail: 'Certified Olympic & strength trainers' },
  { value: '2,800+', label: 'Active Members', detail: 'Thriving high-performance community' },
  { value: '98%', label: 'Goal Success Rate', detail: 'Biometric tracking & accountability' },
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'weight-training',
    title: 'Strength & Hypertrophy',
    category: 'Heavy Iron',
    tagline: 'Build dense, functional raw power & sculpted muscle.',
    description: 'Specialized Olympic platforms, competition bench racks, custom calibrated iron plates, and dumbbell bays up to 150 lbs. Programmed with progressive overload protocols.',
    intensity: 'High',
    duration: '60 min',
    caloriesBurn: '500-750 kcal',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    benefits: ['Progressive Overload Tracking', 'Olympic Lifting Racks', 'Calibrated Steel Plates', 'Form & Mechanics Mentorship'],
    trainer: 'Marcus Vance, CSCS'
  },
  {
    id: 'high-intensity-cardio',
    title: 'HIIT & Athletic Conditioning',
    category: 'Cardio Engine',
    tagline: 'Shatter plateaus and build an indomitable engine.',
    description: 'High-octane interval conditioning using curved Woodway treadmills, Rogue echo bikes, water rowers, and a 40-yard sprint turf with sled drags.',
    intensity: 'Elite',
    duration: '45 min',
    caloriesBurn: '650-900 kcal',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    benefits: ['VO2 Max Conditioning', 'Heart Rate Zone Analytics', 'Sprint Turf & Sled Tracks', 'Metabolic Fire Protocols'],
    trainer: 'Elena Rostova, Ex-Decathlete'
  },
  {
    id: 'mobility-yoga',
    title: 'Functional Mobility & Yoga',
    category: 'Restoration',
    tagline: 'Decompress joints, restore movement, and unlock longevity.',
    description: 'A blend of dynamic mobility drills, athletic flow yoga, and somatic breathwork designed to bulletproof your joints, improve active range of motion, and hasten recovery.',
    intensity: 'Medium',
    duration: '50 min',
    caloriesBurn: '250-400 kcal',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80',
    benefits: ['Joint Decompression', 'Spinal Alignment & Flow', 'Guided Somatic Breathwork', 'Injury Prevention Drills'],
    trainer: 'Siddharth Rao, Physical Therapist'
  },
  {
    id: 'personal-coaching',
    title: '1-on-1 Elite Coaching',
    category: 'Custom Performance',
    tagline: 'Tailored biometrics, custom nutrition, and dedicated mastery.',
    description: 'Comprehensive 1-on-1 coaching pairing you with a master strength coach. Includes DEXA body scans, periodized lifting tracks, and weekly nutritional adjustments.',
    intensity: 'Elite',
    duration: '60 min',
    caloriesBurn: 'Custom Range',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    benefits: ['Bi-weekly DEXA Scan Analysis', 'Custom Macro & Nutrition App', 'Private Coaching Pods', 'Direct Coach Hotline 24/7'],
    trainer: 'Sarah Sterling, Olympic Coach'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Free-Weight Arena',
    category: 'weights',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    aspect: 'tall',
    caption: 'Custom competition power racks and precision-milled dumbbells.'
  },
  {
    id: 'gal-2',
    title: 'Metabolic Conditioning Turf',
    category: 'cardio',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    aspect: 'wide',
    caption: '40-yard indoor turf equipped for prowler pushes and explosive sprints.'
  },
  {
    id: 'gal-3',
    title: 'Deadlift & Olympic Pods',
    category: 'weights',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
    caption: 'Solid oak drop platforms with sound-dampening acoustic deadening.'
  },
  {
    id: 'gal-4',
    title: 'Athletic Flow Studio',
    category: 'yoga',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
    caption: 'Acoustically isolated studio with cedar accents and natural light.'
  },
  {
    id: 'gal-5',
    title: 'Contrast Hydrotherapy & Plunge',
    category: 'recovery',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    aspect: 'tall',
    caption: '38°F cold plunge pools and Finnish dry cedar infrared sauna.'
  },
  {
    id: 'gal-6',
    title: 'Cardio Deck with City View',
    category: 'cardio',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
    aspect: 'wide',
    caption: 'Woodway non-motorized treadmills, Concept2 ergs, and Assault bikes.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'David Thorne',
    role: 'Tech Executive & Marathoner',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    content: 'IronPulse completely shifted my concept of gym training. The coaches take biomechanics seriously, the atmosphere is electric yet zero-ego, and the recovery plunge lounge after heavy sessions keeps me completely injury-free.',
    rating: 5,
    highlightMetric: '-18 lbs & +22% VO2',
    metricLabel: 'Body Composition & Cardio',
    timeframe: '6 months member',
    program: 'HIIT & Conditioning'
  },
  {
    id: 'test-2',
    name: 'Chloe Lancaster',
    role: 'Creative Director & Powerlifter',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    content: 'I was intimidated by free weights for years until I joined the Strength Foundations clinic here. The trainers break down the squat and hinge mechanics with clinical precision. I just pulled a 315 lb deadlift PR last week!',
    rating: 5,
    highlightMetric: '+135 lbs on Squat',
    metricLabel: 'Strength Progression',
    timeframe: '9 months member',
    program: 'Strength & Hypertrophy'
  },
  {
    id: 'test-3',
    name: 'Julian Mercer',
    role: 'Emergency Physician',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    content: 'Working erratic 14-hour hospital shifts left my posture and nervous system wrecked. The combination of early morning personal coaching and restorative flow yoga restored my back pain to zero. Best investment in my health ever.',
    rating: 5,
    highlightMetric: 'Zero Back Pain',
    metricLabel: 'Mobility & Spine Health',
    timeframe: '1.5 years member',
    program: '1-on-1 Coaching & Mobility'
  },
  {
    id: 'test-4',
    name: 'Amara Patel',
    role: 'Collegiate Track Coach',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    content: 'The caliber of equipment here is unheard of outside collegiate division 1 athletic centers. Calibrated steel plates, Eleiko bars that never whip uncontrollably, and turf that actually has real grip. Unbeatable standard.',
    rating: 5,
    highlightMetric: '5 Gold Medals Coached',
    metricLabel: 'Elite Training Quality',
    timeframe: '2 years member',
    program: 'Strength & Conditioning'
  }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'starter',
    name: 'Access Pass',
    price: '$89',
    period: '/month',
    description: 'Ideal for motivated athletes seeking independent gym floor mastery.',
    features: [
      'Full access to main weight arena & cardio deck',
      'Locker rooms with rain showers & steam room',
      'Free mobile companion app for workout logging',
      '1 complimentary biometric DEXA scan'
    ]
  },
  {
    id: 'performance',
    name: 'Performance All-Access',
    price: '$149',
    period: '/month',
    popular: true,
    description: 'Our most popular tier: unlimited classes, turf access, and contrast therapy.',
    features: [
      'Everything in Access Pass',
      'Unlimited HIIT, Conditioning & Yoga classes',
      'Full access to Cold Plunge & Infrared Saunas',
      'Priority booking window for peak time slots',
      'Monthly coach check-in & posture evaluation'
    ]
  },
  {
    id: 'elite-vip',
    name: 'IronPulse Elite VIP',
    price: '$249',
    period: '/month',
    description: 'Complete athletic transformation with dedicated personal coaching.',
    features: [
      'Everything in Performance All-Access',
      '4 Private 1-on-1 Personal Coaching sessions/mo',
      'Custom macro planning & biometric monitoring',
      'Private VIP locker & laundry service',
      '2 Guest passes per month included'
    ]
  }
];
