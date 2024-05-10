// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [password, setPassword] = useState('');
//   const [length, setLength] = useState(8);
//   const [includeCapitalLetters, setIncludeCapitalLetters] = useState(true);
//   const [includeSmallLetters, setIncludeSmallLetters] = useState(true);
//   const [includeNumbers, setIncludeNumbers] = useState(true);
//   const [includeSymbols, setIncludeSymbols] = useState(true);

//   const generatePassword = () => {
//     let chars = '';
//     if (includeCapitalLetters) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (includeSmallLetters) chars += 'abcdefghijklmnopqrstuvwxyz';
//     if (includeNumbers) chars += '0123456789';
//     if (includeSymbols) chars += '!@#$%^&*_-+=';

//     let generatedPassword = '';
//     for (let i = 0; i < length; i++) {
//       generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     setPassword(generatedPassword);
//   };

//   return (
//     <body>


//       <div className="App">
//         <h1>Password Generator</h1>
//         <div>
//           <label>Password Length:</label>
//           <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} max={12} min={6} />
//         </div>
//         <div>
//           <label>Include Capital Letters:</label>
//           <input type="checkbox" checked={includeCapitalLetters} onChange={(e) => setIncludeCapitalLetters(e.target.checked)} />
//         </div>
//         <div>
//           <label>Include Small Letters:</label>
//           <input type="checkbox" checked={includeSmallLetters} onChange={(e) => setIncludeSmallLetters(e.target.checked)} />
//         </div>
//         <div>
//           <label>Include Numbers:</label>
//           <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
//         </div>
//         <div>
//           <label>Include Symbols:</label>
//           <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
//         </div>
//         <button onClick={generatePassword}>Generate Password</button>
//         {password && (
//           <div>
//             <h2>Generated Password:</h2>
//             <p>{password}</p>
//           </div>
//         )}
//       </div>
//     </body>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [includeCapitalLetters, setIncludeCapitalLetters] = useState(true);
  const [includeSmallLetters, setIncludeSmallLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [error, setError] = useState('');

  const generatePassword = () => {
    if (!includeCapitalLetters && !includeSmallLetters && !includeNumbers && !includeSymbols) {
      setError('Please select at least one option to generate the password.');
      setPassword('');
      return;
    }

    let chars = '';
    if (includeCapitalLetters) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeSmallLetters) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*_-+=';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generatedPassword);
    setError('');
  };

  return (
    <body>

      <div className="App">
        <h1>Password Generator</h1>
        <div className='flex'>
          <label>Password Length:</label>
          <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} max={12} min={6} />
        </div>
        <div className='flex'>
          <label>Include Capital Letters:</label>
          <input type="checkbox" checked={includeCapitalLetters} onChange={(e) => setIncludeCapitalLetters(e.target.checked)} />
        </div>
        <div className='flex'>
          <label>Include Small Letters:</label>
          <input type="checkbox" checked={includeSmallLetters} onChange={(e) => setIncludeSmallLetters(e.target.checked)} />
        </div>
        <div className='flex'>
          <label>Include Numbers:</label>
          <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
        </div>
        <div className='flex'>
          <label>Include Symbols:</label>
          <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
        </div>
        <button onClick={generatePassword}>Generate Password</button>
        {error && <p className="Error">{error}</p>}
        {password && (
          <div className="GeneratedPassword">
            <h2>Generated Password:</h2>
            <p>{password}</p>
          </div>
        )}
      </div>
    </body>
  );
}

export default App;

