'use client'

import '../../styles/custom.css';
import React, { useEffect, useState } from 'react';



export default function Home() {

  // const font = Great_Vibes({
  //   weight: "400",
  //   style: "normal",
  //   display: "swap",
  //   subsets: ["latin"],



  // });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // useEffect(() => {
  //   const body = document.querySelector("body") as HTMLElement;

  //   function createHeart() {
  //     const heart = document.createElement("div");
  //     heart.className = "fas fa-heart";
  //     heart.style.left = (Math.random() * 100) + "vw";
  //     heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
  //     heart.textContent = "❤️"
  //     body.appendChild(heart);
  //   }
  //   setInterval(createHeart, 10);
  //   setInterval(function name() {
  //     var heartArr = document.querySelectorAll(".fa-heart")
  //     if (heartArr.length > 100) {
  //       heartArr[0].remove()
  //     }
  //   }, 10)


  // }, []);

  return (

    <div className="text-black bg-gray-100 min-h-screen p-0">

      <nav className="bg-white p-4 shadow-md vazir">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="great_vibes text-2xl font-bold" >
              Saeed & Honeye 🕊️
            </div>
            <div className="hidden md:flex space-x-4 text-rtl">
              <a href="#home" className="text-gray-700 hover:text-black">🏚️خانه</a>
              <a href="#description" className="text-gray-700 hover:text-black">💍 چه خبره؟</a>
              <a href="#time" className="text-gray-700 hover:text-black">⏰ زمانش کیه؟</a>
              <a href="#location" className="text-gray-700 hover:text-black">📍کجاس؟</a>
            </div>
            <button onClick={toggleMobileMenu} className="md:hidden flex items-center px-3 py-2 border rounded">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`mt-4 md:hidden ${mobileMenuOpen ? '' : 'hidden'} space-y-2 text-rtl`}>
            <a href="#home" className="block text-gray-700 hover:text-black">🏚️خانه</a>
            <a href="#description" className="block text-gray-700 hover:text-black">💍 چه خبره؟</a>
            <a href="#time" className="block text-gray-700 hover:text-black">⏰ زمانش کیه؟</a>
            <a href="#location" className="block text-gray-700 hover:text-black">📍 کجاس؟</a>
          </div>
        </div>
      </nav>

      <div id="home" className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/bg.jpg")' }}>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-white text-4xl font-bold text-center great_vibes">
          We are <br />
          celebrating <br />
          our marriage!
        </div>
      </div>

      {/* Description */}
      <div id="description" className="text-rtl text-2xl bg-white p-8 rounded-lg shadow-md mb-6 text-right item-container">
        <h2 className="text-3xl font-semibold mb-4 text-center">چه خبره؟</h2>
        <p>
          به این وسیله، با خوشحالی و شادی، شما رو به جشن ازدواج‌مون دعوت می‌کنیم.
          <br />
          این مهمونی تو یک کافه دلنشین تو شهر رشت برگزار میشه و قراره در کنار شما لحظه‌های شیرینی بسازیم به صرف میوه، شام، کیک و چای دلچسب شمال.
          <br />
          شما عزیزان ما هستید و حضورتون این روز رو برای ما ارزشمندتر می‌کنه.
          <br />
          با همه‌ی شوقی که توی دل‌مون داریم، منتظرتون هستیم تا ما رو در این لحظات خوشبخت همراهی کنید.
          <br />
          <br />
          با آرزوی دیدار روی ماهتون،
          <br />
          هانیه و سعید❤️
        </p>
      </div>

      {/* Time */}
      <div id="time" className="text-rtl text-2xl bg-white p-8 rounded-lg shadow-md mb-6 text-right item-container">
        <h2 className="text-3xl font-semibold mb-4 text-center" >زمانش کیه؟</h2>
        <p>🗓️پنچ شنبه ۱۶ آذر</p>
        <p>⏰از ساعت ۱۹:۰۰ تا وقتی که دیگه بخوایم بریم خونه</p>

        <p>⚠️ از اون هفت الکی ها نیست </p>
      </div>

      {/* Google Map */}
      <div id="location" className="text-rtl text-2xl bg-white p-8 rounded-lg shadow-md text-right item-container">
        <h2 className="text-3xl font-bold mb-4 text-center">جاش کجاس؟</h2>
        <p>📍 رشت، گلسار،‌ بلوار گلایل، نبش لادن،‌ کافه رستوران دوک</p>
        <p>
          ☎️
          تلفن کافه رستوران:
          <a href='tel:+981333725071'>01333725071</a>
        </p>
        <div>
          <a className='block text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded vazir mb-2' target='blank' href='https://goo.gl/maps/PjnKdrBJ5pw3F7g88'>
            <span>
              مسیر یابی با گوگل
            </span>
          </a>
          <a className='block text-sm bg-rose-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded vazir mb-2' target='blank' href="https://ul.waze.com/ul?ll=37.30675267%2C49.58531141&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
            مسیر یابی با Waze
          </a>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.3735129231229!2d49.584949!3d37.3071233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401fd9349694ac81%3A0x3f57c65d20ba4c02!2sDuke%20Restaurant!5e0!3m2!1snl!2snl!4v1697994907476!5m2!1sfa!2sir"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Time */}
      <div id="footer" className="vazir text-rtl bg-white p-8 rounded-lg text-right item-container">
        درست شده با ❤️ توسط سعید و هانیه. 2023 ©
      </div>
    </div >
  );
}