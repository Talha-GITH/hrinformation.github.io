import React from 'react';

function YourComponent() {
  const linkedInProfileUrl = 'https://www.linkedin.com/jobs';

  const handleHRInfoClick = () => {
    window.open(linkedInProfileUrl, '_blank'); // Opens the LinkedIn profile in a new tab
  };

  const linkStyles = {
    google: { color: 'green', fontSize: '130%' },
    facebook: { color: 'blue', fontSize: '130%' },
    infosys: { color: 'purple', fontSize: '130%' },
    tcs: { color: 'red',  fontSize: '130%' },
    zoho: { color: 'orange', fontSize: '130%' }, // Fixed typo here
    microsoft: { color: 'green', fontSize: '130%' },
  };

  return (
    <header className="text-black-400 bg-black-900 body-font" style={{ background: 'black' }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
          <a className="block relative w-40 h-40 rounded overflow-hidden">
            <img
              alt="hr"
              className="object-cover object-center w-40 h-30 block"
              src="https://hradvisorycorner.com/wp-content/uploads/2023/07/Copy-of-chosen.png"
            />
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-red-900 flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-5"
            style={{ ...linkStyles.google }}
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Google"
          >
            GOOGLE
          </a>
          <a
            className="mr-5"
            style={{ ...linkStyles.facebook }}
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Facebook"
          >
            FACEBOOK
          </a>
          <a
            className="mr-5"
            style={{ ...linkStyles.infosys }}
            href="https://www.infosys.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Infosys"
          >
            INFOSYS
          </a>
          <a
            className="mr-5"
            style={{ ...linkStyles.tcs }}
            href="https://www.tcs.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit TCS"
          >
            TCS
          </a>
          <a
            className="mr-5"
            style={{ ...linkStyles.zoho }}
            href="https://www.zoho.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Zoho"
          >
            ZOHO
          </a>
          <a
            className="mr-5"
            style={{ ...linkStyles.microsoft }}
            href="https://www.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Microsoft" // Fixed typo here
          >
            MICROSOFT
          </a>
        </nav>
        <button
          className="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0"
          onClick={handleHRInfoClick}
        >
          
          HR-info
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
             <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default YourComponent;
