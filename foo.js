function parseAmadeusCode(code) {
  const lines = code.split('\n');
  const results = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) {
      continue;
    }

    const flight = {};
    const words = line.split(/\s+/);

    flight.airline = words[1];
    flight.flight_code = words[2];
    flight.depart_date = words[4];
    flight.depart_airport = words[5].slice(-6, -3);
    flight.dest_airport = words[5].slice(-3);
    flight.depart_time = `${words[7].slice(0, 2)}:${words[7].slice(2)}`;
    flight.dest_time = `${words[8].slice(0, 2)}:${words[8].slice(2)}`;
    flight.dest_date = words[9];
    flight.class_code = words[10];

    results.push(flight);
  }

  return results;
}

function summarise(flights, language, airports_dict) {
  const airports = flights.map(flight => airports_dict[flight.depart_airport]).concat(airports_dict[flights[flights.length - 1].dest_airport]);
  if (language === 'he') {
    return airports.reverse().join(' ⬅️️ ');
  } else {
    return airports.join(' ➡️ ');
  }
}


function parseTimeAndDate(time, date, language) {
  month_name = date.slice(2)

  const year = new Date().getFullYear();
  const dateObj = new Date(year, EN_MONTH_NUMBERS[month_name] - 1, parseInt(date.slice(0, 2)));

  if (dateObj < new Date()) {
    dateObj.setFullYear(year + 1);
  }

  var dayName = dateObj.toLocaleString('en-US', { weekday: 'short' }).toUpperCase();
  dayName = DAYS[language][dayName]

  month_name = MONTHS[language][month_name]
  output = `${dayName}. ${date.slice(0, 2)} ${month_name} ${time.slice(0, 2)}:${time.slice(3)}`;
  console.log(output)
  return output
}

function itinerary(flights, airports_dict, language) {
  let text = "";

  for (let i = 0; i < flights.length; i++) {
    const flight = flights[i];
    text += `${AIRLINES[flight.airline]} - *${flight.airline}${flight.flight_code}*\n`;
    text += `${airports_dict[flight.depart_airport]} (${flight.depart_airport}) ➡️ ${airports_dict[flight.dest_airport]} (${flight.dest_airport})\n`;
    text += `${SEAT_CODES[language][flight.class_code]}\n`;
    text += `${DPT[language]} ${parseTimeAndDate(flight.depart_time, flight.depart_date, language)}\n`;
    text += `${ARR[language]} ${parseTimeAndDate(flight.dest_time, flight.dest_date, language)}\n`;
    text += ' (Seat XX - ) \n\n';
  }

  return text;
}

function prepare_airports(language) {

  const lan = language === 'he' ? 'He' : 'En';
  airports = Object.fromEntries(
    Object.entries(AIRPORTS).map(([airport, vals]) => [
      airport,
      `${vals[`CityName${lan}`]}, ${vals[`CountryName${lan}`]}`
    ])
  );
  return airports
}

function construct_msg(code, language) {
  let msg = HALLO[language];
  console
  var airports = prepare_airports(language);

  const flights = parseAmadeusCode(code);
  msg += `${summarise(flights, language, airports)}\n\n`;

  msg += KINDLY_REPLY[language];

  msg += ITINERARY[language];

  msg += `${itinerary(flights, airports, language)}`;

  msg += `${FINAL[language]}\n\n`;

  msg += `${GAD_CONTACT}\n\n`;

  return msg;
}

