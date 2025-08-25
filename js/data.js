// Hotel data for ChannelCon EMEA 2025
const hotelData = {
    'sofitel': {
        name: 'Sofitel London Heathrow T5',
        address: 'Terminal 5, London Heathrow Airport, TW6 2GD',
        price: '£189 per night*',
        priceClass: 'gtia-negotiated',
        priceNote: '*GTIA negotiated rate (limited availability)<br>Standard rate: £300+',
        badges: ['official', 'gtia-rates'],
        commute: '🚶‍♂️ Direct connection via 5-minute covered walkway to Terminal 5',
        features: [
            'Only hotel directly connected to T5',
            '5-star luxury amenities & spa',
            '2 AA Rosette restaurants',
            'Underground parking available',
            'Business center & meeting rooms'
        ],
        transport: [
            {
                icon: '🚶‍♂️',
                title: 'Walking (Covered Walkway)',
                details: [
                    { label: 'Duration', value: '5 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: 'FREE', class: 'cost-highlight' },
                    { label: 'Route', value: 'Direct covered walkway to T5' },
                    { label: 'Availability', value: '24/7' }
                ]
            }
        ]
    },
    'premier-t4': {
        name: 'Premier Inn Heathrow Terminal 4',
        address: 'Sheffield Road, London Heathrow Airport, TW6 3AF',
        price: '£70 per night',
        priceClass: '',
        badges: ['best-value'],
        commute: '🚶‍♂️ 6-min walk + 🚇 Free inter-terminal train (15 mins total to T5)',
        features: [
            'Covered walkway to Terminal 4',
            'Free Heathrow Connect to T5',
            '79% customer satisfaction rating',
            '5-star bed comfort rating',
            'Premier Inn quality guarantee'
        ],
        transport: [
            {
                icon: '🚶‍♂️',
                title: 'Walking + Free Train',
                details: [
                    { label: 'Total Duration', value: '15 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: 'FREE', class: 'cost-highlight' },
                    { label: 'Route', value: '6-min walk to T4 + Heathrow Express to T5' },
                    { label: 'Frequency', value: 'Every 15 minutes' }
                ]
            },
            {
                icon: '🚕',
                title: 'Taxi / Uber',
                details: [
                    { label: 'Duration', value: '8-12 minutes', class: 'time-highlight' },
                    { label: 'Taxi Cost', value: '£15-20', class: 'cost-highlight' },
                    { label: 'Uber Cost', value: '£12-18', class: 'cost-highlight' },
                    { label: 'Distance', value: '3.2 miles' }
                ]
            },
            {
                icon: '🚌',
                title: 'Hotel Hoppa Bus',
                details: [
                    { label: 'Duration', value: '15-20 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: '£6.80', class: 'cost-highlight' },
                    { label: 'Route', value: 'H30 Bus to T5' },
                    { label: 'Frequency', value: 'Every 30 minutes' }
                ]
            }
        ]
    },
    'thistle': {
        name: 'Thistle London Heathrow T5',
        address: 'Bath Road, Longford, West Drayton UB7 0EQ',
        price: '£82-136 per night',
        priceClass: '',
        badges: ['most-convenient'],
        commute: '🚁 5-minute automated Pod service directly to Terminal 5',
        features: [
            'Exclusive Pod transportation (£5 per person)',
            'Only hotel with Pod system access',
            'Direct automated service to T5',
            'Runway viewing restaurant terrace',
            'Recently updated facilities'
        ],
        transport: [
            {
                icon: '🚁',
                title: 'Heathrow Pod (Exclusive)',
                details: [
                    { label: 'Duration', value: '5 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: '£5 per person', class: 'cost-highlight' },
                    { label: 'Route', value: 'Automated driverless pod to T5' },
                    { label: 'Operating Hours', value: '4:00 AM - 12:15 AM' }
                ]
            },
            {
                icon: '🚌',
                title: 'Public Bus 423',
                details: [
                    { label: 'Duration', value: '8-10 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: '£2.80', class: 'cost-highlight' },
                    { label: 'Route', value: 'Bus 423 direct to T5' },
                    { label: 'Frequency', value: 'Every 10-15 minutes' }
                ]
            },
            {
                icon: '🚕',
                title: 'Taxi / Uber',
                details: [
                    { label: 'Duration', value: '10-15 minutes', class: 'time-highlight' },
                    { label: 'Taxi Cost', value: '£18-25', class: 'cost-highlight' },
                    { label: 'Uber Cost', value: '£15-22', class: 'cost-highlight' },
                    { label: 'Distance', value: '4.1 miles' }
                ]
            }
        ]
    },
    'holiday-inn-express': {
        name: 'Holiday Inn Express Terminal 4',
        address: 'Terminal 4, London Heathrow Airport, TW6 3AF',
        price: '£82-115 per night',
        priceClass: '',
        badges: [],
        commute: '🚶‍♂️ Walk to T4 + 🚇 Free train connection to T5',
        features: [
            'Complimentary Express Start breakfast',
            'Easy terminal connections via covered walkway',
            'Clean, quiet, modern rooms',
            '24-hour business center',
            'Helpful multilingual staff'
        ],
        transport: [
            {
                icon: '🚶‍♂️',
                title: 'Walking + Free Train',
                details: [
                    { label: 'Total Duration', value: '18 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: 'FREE', class: 'cost-highlight' },
                    { label: 'Route', value: '8-min walk to T4 + Heathrow Express to T5' },
                    { label: 'Frequency', value: 'Every 15 minutes' }
                ]
            },
            {
                icon: '🚕',
                title: 'Taxi / Uber',
                details: [
                    { label: 'Duration', value: '8-12 minutes', class: 'time-highlight' },
                    { label: 'Taxi Cost', value: '£15-20', class: 'cost-highlight' },
                    { label: 'Uber Cost', value: '£12-18', class: 'cost-highlight' },
                    { label: 'Distance', value: '3.2 miles' }
                ]
            },
            {
                icon: '🚌',
                title: 'Hotel Hoppa Bus',
                details: [
                    { label: 'Duration', value: '15-20 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: '£6.80', class: 'cost-highlight' },
                    { label: 'Route', value: 'H30 Bus to T5' },
                    { label: 'Frequency', value: 'Every 30 minutes' }
                ]
            }
        ]
    },
    'premier-bath-road': {
        name: 'Premier Inn Bath Road (T2/T3)',
        address: 'Bath Road, Hounslow, London TW5 9QE',
        price: '£70 per night',
        priceClass: '',
        badges: [],
        commute: '🚌 Bus links to T2/T3, then free train to T5',
        features: [
            'Excellent value for money',
            'Near Harmondsworth village pubs',
            'Free inter-terminal connections',
            'Premier Inn quality guarantee',
            'Good transport links'
        ],
        transport: [
            {
                icon: '🚌',
                title: 'Public Bus + Free Train',
                details: [
                    { label: 'Total Duration', value: '25-30 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: '£2.80', class: 'cost-highlight' },
                    { label: 'Route', value: 'Bus 423 to T2/T3 + Heathrow Express to T5' },
                    { label: 'Frequency', value: 'Every 10-15 minutes' }
                ]
            },
            {
                icon: '🚕',
                title: 'Taxi / Uber',
                details: [
                    { label: 'Duration', value: '15-20 minutes', class: 'time-highlight' },
                    { label: 'Taxi Cost', value: '£20-28', class: 'cost-highlight' },
                    { label: 'Uber Cost', value: '£18-25', class: 'cost-highlight' },
                    { label: 'Distance', value: '4.8 miles' }
                ]
            },
            {
                icon: '🚌',
                title: 'Hotel Hoppa Bus',
                details: [
                    { label: 'Duration', value: '20-25 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: '£6.80', class: 'cost-highlight' },
                    { label: 'Route', value: 'H2B Bus to T5' },
                    { label: 'Frequency', value: 'Every 30 minutes' }
                ]
            }
        ]
    },
    'premier-t5': {
        name: 'Premier Inn Terminal 5',
        address: 'Bath Road, Colnbrook, Slough SL3 0NF',
        price: '£85 per night',
        priceClass: '',
        badges: [],
        commute: '🚌 Hoppa bus service to T5 (10-15 mins)',
        features: [
            'Closest Premier Inn to Terminal 5',
            'Reliable bus connections',
            '5-star bed comfort rating',
            'On-site restaurant and bar',
            'Family-friendly facilities'
        ],
        transport: [
            {
                icon: '🚌',
                title: 'Hotel Hoppa Bus',
                details: [
                    { label: 'Duration', value: '10-15 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: '£6.80', class: 'cost-highlight' },
                    { label: 'Route', value: 'H5B Bus direct to T5' },
                    { label: 'Frequency', value: 'Every 20-30 minutes' }
                ]
            },
            {
                icon: '🚌',
                title: 'Public Bus 350',
                details: [
                    { label: 'Duration', value: '8-12 minutes', class: 'time-highlight' },
                    { label: 'Cost', value: '£2.80', class: 'cost-highlight' },
                    { label: 'Route', value: 'Bus 350 direct to T5' },
                    { label: 'Frequency', value: 'Every 20 minutes' }
                ]
            },
            {
                icon: '🚕',
                title: 'Taxi / Uber',
                details: [
                    { label: 'Duration', value: '8-12 minutes', class: 'time-highlight' },
                    { label: 'Taxi Cost', value: '£12-18', class: 'cost-highlight' },
                    { label: 'Uber Cost', value: '£10-15', class: 'cost-highlight' },
                    { label: 'Distance', value: '2.1 miles' }
                ]
            }
        ]
    }
};

// Badge configurations
const badgeConfig = {
    official: { text: 'Official Venue', class: 'official' },
    'gtia-rates': { text: 'GTIA Rates Available', class: 'gtia-rates' },
    'best-value': { text: 'Best Value Alternative', class: 'best-value' },
    'most-convenient': { text: 'Most Convenient Alternative', class: 'most-convenient' },
    budget: { text: 'Budget Option', class: 'budget' }
};

// Unavailable hotels data
const unavailableHotels = [
    'Ibis Budget London Heathrow T5',
    'DoubleTree by Hilton Heathrow'
];
