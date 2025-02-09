import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173'
}));

const forecasts = [
  {
    id: 1,
    city: 'Tbilisi',
    temperature: '22°C',
    condition: 'წაშლილი ცა',
    humidity: '50%',
    wind: '10 km/h',
    icon: 'https://via.placeholder.com/64?text=Sun'
  },
  {
    id: 2,
    city: 'Batumi',
    temperature: '25°C',
    condition: 'ნაგულისხმევი მინდორშრეი',
    humidity: '60%',
    wind: '8 km/h',
    icon: 'https://via.placeholder.com/64?text=Cloud'
  },
  {
    id: 3,
    city: 'Kutaisi',
    temperature: '20°C',
    condition: 'წვიმის შოუზი',
    humidity: '70%',
    wind: '12 km/h',
    icon: 'https://via.placeholder.com/64?text=Rain'
  },
  {
    id: 4,
    city: 'Gori',
    temperature: '18°C',
    condition: 'მლოცული მეხსიერება',
    humidity: '65%',
    wind: '9 km/h',
    icon: 'https://via.placeholder.com/64?text=Overcast'
  },
  {
    id: 5,
    city: 'Telavi',
    temperature: '23°C',
    condition: 'მცდილა',
    humidity: '55%',
    wind: '11 km/h',
    icon: 'https://via.placeholder.com/64?text=Sunny'
  },
  {
    id: 6,
    city: 'Rustavi',
    temperature: '21°C',
    condition: 'ნანახი წვიმა',
    humidity: '68%',
    wind: '10 km/h',
    icon: 'https://via.placeholder.com/64?text=Light+Rain'
  }
];

app.get('/api/weather', (req, res) => {
  res.json(forecasts);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
