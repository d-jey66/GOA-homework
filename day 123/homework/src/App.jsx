import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <MainContent activeSection={activeSection} />
      </div>
    </Router>
  );
};

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    {
      name: 'მთავარი',
      id: 'home',
      description: 'საწყისი გვერდი',
    },
    {
      name: 'შუა ქალაქი',
      id: 'shua-qalaqi',
      description: 'კომედიური სატელევიზიო შოუ',
    },
    {
      name: 'ქართული ცეკვა',
      id: 'georgian-dance',
      description: 'ტრადიციული ქართული ქორეოგრაფია',
    },
    {
      name: 'ქართული ფილმები',
      id: 'georgian-films',
      description: 'ქართული კინემატოგრაფი',
    },
    {
      name: 'ქართული სერიალები',
      id: 'georgian-series',
      description: 'თანამედროვე ტელევიზიული პროდუქცია',
    },
  ];

  return (
    <div className="w-80 bg-gray-800 shadow-xl border-r border-gray-700 p-6">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-100 tracking-tight">
          ქართული <span className="text-blue-400">კულტურა</span>
        </h1>
        <p className="text-gray-400 mt-2">კულტურული მემკვიდრეობის აღმოჩენა</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`
              w-full text-left p-3 rounded-lg transition-all duration-300
              ${activeSection === item.id 
                ? 'bg-gray-700 text-blue-300' 
                : 'text-gray-300 hover:bg-gray-700'}
            `}
          >
            <div>
              <div className="font-semibold">{item.name}</div>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
};

const MainContent = ({ activeSection }) => {
  const contentMap = {
    home: {
      title: 'ქართული კულტურის მიმოხილვა',
      sections: [
        {
          title: 'შუა ქალაქი',
          content: 'შუა ქალაქი არის კომედიური სატელევიზიო შოუ, რომელიც ასახავს თანამედროვე ქალაქის ცხოვრების კომიკურ მხარეებს.',
        },
        {
          title: 'ქართული ცეკვა',
          content: 'ქართული ცეკვა ტრადიციისა და ხელოვნების სინთეზია, რომელიც აერთიანებს უნიკალურ მოძრაობებს და მუსიკალურ რითმებს.',
        },
        {
          title: 'ქართული ფილმები',
          content: 'ქართული კინემატოგრაფი წარმოადგენს უნიკალურ გამოხატულებას, რომელიც ასახავს ჩვენი ქვეყნის ისტორიას და თანამედროვე გამოწვევებს.',
        },
      ],
    },
    'shua-qalaqi': {
      title: 'შუა ქალაქი - კომედიური შოუ',
      content: 'შუა ქალაქში“ — ქართული სიტკომის ჟანრის სერიალი მეგობრების ჯგუფზე, რომლებიც თბილისის ერთ-ერთ უბანში (ვაკეში) ცხოვრობენ. სერიალი დადგმულია სტუდია ღამის შოუს მიერ. სერიალი ექვსი წლის განმავლობაში გადიოდა ტელეკომპანია იმედის ეთერში. პირველი სეზონის პრემიერა გაიმართა 2007 წლის 23 სექტემბერს, ხოლო ბოლო, მეთექვსმეტე სეზონი 2013 წლის 9 ივლისს დასრულდა. 2011 წლის 3 მარტს გამოვიდა მხატვრული ფილმი „10 წლის შემდეგერთხელ შუა ქალაქში10 წლის შემდეგ“. შუა ქალაქში განახლდა 2014 წლის 13 ოქტომბერს როგორც „10 წლის შემდეგ“. მისი ჩვენება 2017 წლის მარტში დასრულდა.',
    },
    'georgian-dance': {
      title: 'ქართული ცეკვა',
      content: 'ართულ ხალხურ ქორეოგრაფიას მრავალი საუკუნის ისტორია აქვს. ჩვენამდე მოღწეული არქეოლოგიური და უძველესი ლიტერატურული ძეგლებით დასტურდება, რომ ქართული ხალხური ქორეოგრაფიის ისტორიული წინამორბედი ყოფილა სამონადირეო ცეკვა, ნაყოფიერების ღმერთის — მთვარის („შუშპა“) პატივსაცემად შესრულებული რიტუალური ფერხული. უძველესი ფერხულის რიტუალურ ხასიათს ატარებს თრიალეთის გათხრების დროს აღმოჩენილი ვერცხლის ფიალის გამოსახულება (ძვ. წ. II ათასწლეული) — ნიღბებიან მონადირეთა ფერხული, რომელიც ზოგიერთი მეცნიერის აზრით, სვანური ნადირობის ღვთაების — დალისადმი უნდა იყოს მიძღვნილი. სვანეთში დღემდეა შემორჩენილი: „სამონადირეო ფერხული“, „ლემჩილი“, „ბეთქილის ფერხული“ და სხვ. დროთა განმავლობაში პირველყო „ხორუმი“.',
    },
    'georgian-films': {
      title: 'ქართული ფილმები',
      content: 'ქართული ფილმები გვთავაზობს ღრმა ფსიქოლოგიურ ნარატივებს, რომლებიც წარმოაჩენენ ჩვენი ქვეყნის კულტურულ თვითმყოფადობას.',
    },
    'georgian-series': {
      title: 'ქართული სერიალები',
      content: 'თანამედროვე ქართული სერიალები ასახავს სოციალურ დრამებს, რომანტიკულ ისტორიებსა და საოჯახო ცხოვრებას.',
    },
  };

  const currentContent = contentMap[activeSection] || contentMap.home;

  return (
    <div className="flex-1 p-10 bg-gray-900">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-100 border-b pb-4">
          {currentContent.title}
        </h2>
        {currentContent.sections ? (
          <div className="grid md:grid-cols-3 gap-6">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="bg-gray-700 p-5 rounded-lg">
                <h3 className="font-semibold text-blue-300 mb-3">{section.title}</h3>
                <p className="text-gray-300 text-sm">{section.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">{currentContent.content}</p>
        )}
      </div>
    </div>
  );
};

export default App;
