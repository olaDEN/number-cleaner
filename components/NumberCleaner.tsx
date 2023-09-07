import React, { useState } from 'react';

const NumberCleaner: React.FC = () => {
  const [state, setState] = useState({
    phoneNumber: '',
    cleanedNumber: '',
    country: '',
  });

  const countryCodes = [
    { code: '90', name: 'Turkey' }, 
    { code: '966', name: 'Saudi Arabia' }, 
    { code: '973', name: 'Bahrain' },
    { code: '971', name: 'Emirates' }, 
    { code: '965', name: 'Kuwait' }, 
    { code: '968', name: 'Oman' }, 
    { code: '974', name: 'qatar' }, 
    { code: '218', name: 'Libya' },
    { code: '213', name: 'Algeria' },
    { code: '216', name: 'Tunisia' },
    { code: '212', name: 'Morocco' },
    { code: '20', name: 'Egypt' },
    { code: '970', name: 'Palestine' },
   
  ];

  const cleanPhoneNumber = () => {
    let cleaned = state.phoneNumber.replace(/[^\d]/g, ''); 
    cleaned = cleaned.replace(/^0+/, ''); 
    
    let countryName = 'Please add country code';

    for (const country of countryCodes) {
      if (cleaned.startsWith(country.code)) {
        countryName = country.name;
        break;
      }
    }

    setState({
      ...state,
      cleanedNumber: cleaned,
      country: countryName,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter phone number"
        value={state.phoneNumber}
        onChange={(e) => setState({ ...state, phoneNumber: e.target.value })}
      />
      <button onClick={cleanPhoneNumber}>Clean</button>
      <div>
        <p>Cleaned Number: {state.cleanedNumber}</p>
        <p>Country: {state.country}</p>
      </div>
    </div>
  );
};

export default NumberCleaner;
