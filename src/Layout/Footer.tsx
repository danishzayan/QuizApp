import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-4 relative  bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className=" text-md mb-4 md:mb-0">
            <h3 className="font-sm">©{new Date().getFullYear()} Quiz App. All rights reserved.</h3>
          </div>
          <ul className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <li className="mx-2">
              <a target="_blank" className="hover:underline" href="/privacy-and-policy">
                Privacy Policy
              </a>
            </li>
            <span className="hidden md:inline-block mx-2">|</span>
            <li className="mx-2">
              <a target="_blank" className="hover:underline" href="/terms-and-conditions">
                Terms of use
              </a>
            </li>
            <span className="hidden md:inline-block mx-2">|</span>
            <li className="mx-2">
              <a target="_blank" className="hover:underline" href="/disclaimer">
                Disclaimer
              </a>
            </li>
            <span className="hidden md:inline-block mx-2">|</span>
            <li className="mx-2">
              <a target="_blank" className="hover:underline" href="/faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
