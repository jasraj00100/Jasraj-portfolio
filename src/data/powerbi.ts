import overview from '../assets/ola/overview.webp';
import vehicleType from '../assets/ola/vehicle-type.webp';
import cancellation from '../assets/ola/cancellation.webp';
import ratings from '../assets/ola/ratings.webp';

// To add a page: drop the image in src/assets/ola/, import it above, and add an object to `screens`.
// Example: { id: 'revenue', label: 'Revenue', image: revenue, alt: '...', caption: '...' }

export type Screen = { id: string; label: string; image: string; alt: string; caption: string };

export const powerbi = {
  title: 'OLA Ride Analytics Dashboard',
  repoUrl: 'https://github.com/jasraj00100/OLA-PowerBI-Dashboard',
  pbixUrl: 'https://github.com/jasraj00100/OLA-PowerBI-Dashboard/blob/main/OLA_Ride_Analytics_Dashboard.pbix',
  lede: 'An interactive report on ride-booking data with page navigation, a date slicer and KPI cards. It is my first Power BI project, built while following a guided tutorial to learn Power BI and DAX fundamentals.',
  covers: [
    'Bookings and ride volume',
    'Revenue',
    'Cancellations, by customer and by driver',
    'Vehicle-type performance',
    'Payment methods',
    'Customer and driver ratings',
  ],
  skills: ['DAX', 'Data cleaning and transformation', 'KPI creation', 'Slicers and filters', 'Dashboard design', 'Interactive navigation'],
  screens: [
    {
      id: 'overview',
      label: 'Overview',
      image: overview,
      alt: 'Overview page of the OLA Ride Analytics dashboard: date slicer, total bookings and booking value cards, a booking status pie chart and a line chart of ride volume over time.',
      caption: 'Total bookings and booking value, a booking status breakdown, and ride volume over time, all driven by one date slicer.',
    },
    {
      id: 'vehicle-type',
      label: 'Vehicle type',
      image: vehicleType,
      alt: 'Vehicle type page: a table comparing total and successful booking value and distance travelled for seven vehicle types.',
      caption: 'Booking value, successful booking value and distance travelled compared across seven vehicle types.',
    },
    {
      id: 'cancellation',
      label: 'Cancellation',
      image: cancellation,
      alt: 'Cancellation page: booking KPI cards including cancellation rate, and pie charts of cancellation reasons by customer and by driver.',
      caption: 'Cancellation KPIs, plus the reasons rides were cancelled, split by customer and by driver.',
    },
    {
      id: 'ratings',
      label: 'Ratings',
      image: ratings,
      alt: 'Ratings page: driver rating and customer rating tables across seven vehicle types.',
      caption: 'Driver and customer ratings compared across vehicle types.',
    },
  ] as Screen[],
};
