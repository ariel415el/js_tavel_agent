const HALLO = {
  en: "XXXXX, Shalom!\n\n👉❗❗\nIn reply to your request, you'll find below my *XXX proposal* for yours upcoming trip to\n\n",
  fe: "XXXXX, Shalom!\n\n👉❗❗\nSuite à ta/votre demande, tu/vous trouveras ci-dessous, l’itinéraire de vol proposé pour ton/votre prochain voyage à \n\n",
  he: "XXXXX, שלום!\n\n👉❗❗\nבהמשך לפנייתך להלן פרטי ההצעה המבוקשת עבור נסיעתך הקרובה \n\n",
};

const KINDLY_REPLY = {
  en: "Please, kindly reply (from within this WhatsApp message) with your *Immediate/Today ticket issuance approval* accordingly with the content of this proposal.\n\n",
  fe: "SVP Merci de valider à l’immédiat, l’émission de ton/votre/vos billet(s) en répondant a ce message WhatsApp avec ton/votre confirmation\n\n",
  he: "*נא לאשר את הנפקת כרטיסך* במענה חוזר *מידי* להודעת ווצאפ זו בהתאם לתוכן  ההצעה. \n\n",
};

const LANGAUGES = { en: 'English', fr: 'Francais', he: 'עברית' };

const DAYS = {
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  fr: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
};

const ALLER = { en: 'Outbound flt.', fr: 'Aller' };

const RETOUR = { en: 'Inbound flt.', fr: 'Retour' };

const ONE_WAY = { en: 'O/w', fr: 'aller-simple' };

const ROUND_TRIP = { en: 'round-trip', fr: 'aller-retor' };

const TOGETHER = { en: 'together with', fr: 'avec' };

const ITINERARY = { en: 'Itinerary', fr: 'itinéraire' };

const FINAL_FR = `*Compagnie* (XX) ✈️
  *xx*, *xx* & *xx*

*Compartiment 💺*
  Cl. Economy, Cl. Premium, Cl. Business
  Multi-compartiment
  ➡️ *Cl.*
  ⬅️ *Cl.*
  Vol long-courrier - *Cl.*
  Vol court-courrier - *Cl.*

*Prix 💲*
  1 Adulte (+12) * 0$

* total:* 0$

✅Franchise bagages 🧳


❌Présélection sièges💺
Optionnel - moyennant supplement
Sieges Standard

 *Attention:*❗
Tarif susceptible de changement de prix sans avertissement préalable tant que billet non emis!

⚠️Restrictions Tarifaire⚠️
▪️ Frais modification: 0$
▪️ Frais d'annulations: 0$
▪️ Frais No-show: 0$
*▪️⏱️Date limite Émission:*
      **

Merci de *repondre a cette proposition WhatsApp en confirmant a l'immediat l’émission de ton/votre/vos billet(s)* conformement a son contenu.

Merci,
Gad`;

const FINAL_EN = `*Airline:* (XX) ✈️
  *xx*, *xx* & *xx*

*Compartment 💺*
  Economy Cl., Premium Cl., Business Cl.
  Combined Compartments
  ➡️ *Cl.*
  ⬅️ *Cl.*
  Long-haul portion - **
  Short-haul portion - **

*Airfare 💲*
  1 Adult (+12) * 0$

*total:* 0$

✅Baggage Allowance 🧳


❌Seat pre-selection 💺
Optional at additional fees
Standard Seat

*Attention:*❗
Price may change
unless tickets were issued!

⚠️Tickets Restrictions⚠️
▪️ Change fees: 0$
▪️ Cancel fees: 0$
▪️ No show fees: 0$
*⏱️Ticket issuance:*
      **

 (p.p. = per person)

*⏱️Ticket issuance:*
❗IMMEDIATE PURCHASE❗
👉🏻*Within 24 Hours*
👉🏻*Tomorrow Xxxx*
👉🏻*00Xxx before 6pm*

Thanks for replying (from within this WhatsApp message) to the content of this proposal with your👉🏻*Immediate / Today / Urgent* ticket issuance confirmation* accordingly.

Thanks,
Gad Elnekave
Sincerely Yours`;

const FINAL_HE = `*חברת תעופה:* (XX) ✈️
  *xx*, *xx* & *xx*

*מחלקת הנסיעה 💺*
  מח. תיירות, פרמיום, עסקים
  מחלקות משולבות
  ⬅️ *מח.*
  ➡️ *מח.*
  מקטע הטיסה הארוכה - *מח.*
  מקטע הטיסה הקצרה - *מח.*

*מחיר 💲*
  0$ * 1 מבוגר (+12)

*סה"כ:* 0$

✅כבודה 🧳


❌הושבה 💺
✅הושבה מראש
      (מושב סטנדרטי)
❌ללא הושבה מראש

*לתשומת לבך:*❗
עלות הכרטיס עלול
להתייקר כל עוד לא הונפק
כרטיסך!!

⚠️תנאי תעריף⚠️
▪️ דמי שינוי: 0$
▪️ דמי ביטול: 0$
▪️ אי הופעה לטיסה: 0$
*⏱️מועד הנפקת הכרטיס:*
      **

אודה לך על המענה החוזר להודעת ווצאפ זו עם אישורך המידי להנפקת *הכרטיסים המרכיבים את מסלולך מתוך הסכמה* למסלול המוצע & לתנאי מחיר כרטיסך בהתאם למפורט מעלה.

תודה רבה,
בברכה
גד אלנקווה`;

const FINAL = {
    "en": FINAL_EN,
    "fe": FINAL_FR,
    "he": FINAL_HE
};

const GAD_CONTACT = `🏢American Express Global Business Travel
📞 972-54-5727255
✉️ gad@gbtil.co.il`;

function parseAmadeusCode(code) {
  const lines = code.split('\n');
  const results = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) {
      continue;
    }

    const flight = {};
    const words = line.split(' ').slice(1);

    flight.airline = words[0];
    flight.flight_code = words[1];
    flight.depart_date = words[3];
    flight.depart_airport = words[4].slice(-6, -3);
    flight.dest_airport = words[4].slice(-3);
    flight.depart_time = `${words[6].slice(0, 2)}:${words[6].slice(2)}`;
    flight.dest_time = `${words[7].slice(0, 2)}:${words[7].slice(2)}`;
    flight.dest_date = words[8];
    flight.class_code = words[9];

    results.push(flight);
  }

  return results;
}

function summarise(flights, language) {
  const airports = flights.map(flight => AIRPORTS[flight.depart_airport]).concat(AIRPORTS[flights[flights.length - 1].dest_airport]);

  if (language === 'he') {
    return airports.reverse().join(' ⬅️️ ');
  } else {
    return airports.join(' ➡️ ');
  }
}


function parseTimeAndDate(time, date) {
  const MONTHS = {'JAN': 1, 'FEB': 2, 'MAR': 3, 'APR': 4, 'MAY': 5, 'JUN': 6, 'JUL': 7, 'AUG': 8, 'SEP': 9, 'OCT': 10, 'NOV': 11, 'DEC': 12};
  const year = new Date().getFullYear();
  const dateObj = new Date(year, MONTHS[date.slice(2)] - 1, parseInt(date.slice(0, 2)));

  if (dateObj < new Date()) {
    dateObj.setFullYear(year + 1);
  }

  const dayName = dateObj.toLocaleString('en-US', { weekday: 'short' }).toUpperCase();

  return `${dayName}. ${date.slice(0, 2)} ${date.slice(2)} ${time.slice(0, 2)}:${time.slice(3)}`;
}

function itinerary(flights) {
  let text = "";

  for (let i = 0; i < flights.length; i++) {
    const flight = flights[i];
    text += `${AIRLINES[flight.airline]} - *${flight.airline}${flight.flight_code}*\n`;
    text += `${AIRPORTS[flight.depart_airport]} (${flight.depart_airport}) ➡️ ${AIRPORTS[flight.dest_airport]} (${flight.dest_airport})\n`;
    text += `${SEAT_CODES[flight.class_code]}'\n`;
    text += `Dpt. ${parseTimeAndDate(flight.depart_time, flight.depart_date)}'\n`;
    text += `Arr. ${parseTimeAndDate(flight.dest_time, flight.dest_date)}'\n`;
    text += ' (Seat XX - ) \n\n';
  }

  return text;
}

function prepare(language) {
  const fs = require('fs');
  AIRPORTS = JSON.parse(fs.readFileSync('iata.json', 'utf8'));
  AIRLINES = JSON.parse(fs.readFileSync('airlines.json', 'utf8'));
  SEAT_CODES = { "E": "Economy CL" };

  const lan = language === 'he' ? 'He' : 'En';
  AIRPORTS = Object.fromEntries(
    Object.entries(AIRPORTS).map(([airport, vals]) => [
      airport,
      `${vals[`CityName${lan}`]}, ${vals[`CountryName${lan}`]}`
    ])
  );
}

function constructMsg(code, language) {
  prepare(language);
  const flights = parseAmadeusCode(code);
  let msg = HALLO[language];

  msg += `${summarise(flights, language)}\n\n`;

  msg += KINDLY_REPLY[language];

  msg += '*Itinerary 🌍*  \n\n';

  msg += `${itinerary(flights)}`;

  msg += `${FINAL[language]}\n\n`;

  msg += `${GAD_CONTACT}\n\n`;

  console.log(msg);
  return output;
}

