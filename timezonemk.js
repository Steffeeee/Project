var TimeZoneCalculator = function() {
    var localTimeInput, capitalInput, result, sub, otherSection, otherList, selectedTimeZone = null, intervalId = null;

    const timeZones = {
        // Europe
        "скопје": "Europe/Skopje",
        "skopje": "Europe/Skopje",
        "лондон": "Europe/London",
        "london": "Europe/London",
        "париз": "Europe/Paris",
        "paris": "Europe/Paris",
        "москва": "Europe/Moscow",
        "moscow": "Europe/Moscow",
        "берлин": "Europe/Berlin",
        "berlin": "Europe/Berlin",
        "рим": "Europe/Rome",
        "rome": "Europe/Rome",
        "мадрид": "Europe/Madrid",
        "madrid": "Europe/Madrid",
        "атина": "Europe/Athens",
        "athens": "Europe/Athens",
        "амстердам": "Europe/Amsterdam",
        "amsterdam": "Europe/Amsterdam",
        "андора ла вела": "Europe/Andorra",
        "andorra la vella": "Europe/Andorra",
        "анкара": "Europe/Istanbul",
        "ankara": "Europe/Istanbul",
        "белград": "Europe/Belgrade",
        "belgrade": "Europe/Belgrade",
        "братислава": "Europe/Bratislava",
        "bratislava": "Europe/Bratislava",
        "брисел": "Europe/Brussels",
        "brussels": "Europe/Brussels",
        "букурешт": "Europe/Bucharest",
        "bucharest": "Europe/Bucharest",
        "будимпешта": "Europe/Budapest",
        "budapest": "Europe/Budapest",
        "копенхаген": "Europe/Copenhagen",
        "copenhagen": "Europe/Copenhagen",
        "даблин": "Europe/Dublin",
        "dublin": "Europe/Dublin",
        "хелсинки": "Europe/Helsinki",
        "helsinki": "Europe/Helsinki",
        "киев": "Europe/Kiev",
        "kyiv": "Europe/Kiev",
        "лисбон": "Europe/Lisbon",
        "lisbon": "Europe/Lisbon",
        "љубљана": "Europe/Ljubljana",
        "ljubljana": "Europe/Ljubljana",
        "луксембург": "Europe/Luxembourg",
        "luxembourg": "Europe/Luxembourg",
        "минск": "Europe/Minsk",
        "minsk": "Europe/Minsk",
        "монако": "Europe/Monaco",
        "monaco": "Europe/Monaco",
        "осло": "Europe/Oslo",
        "oslo": "Europe/Oslo",
        "прага": "Europe/Prague",
        "prague": "Europe/Prague",
        "рига": "Europe/Riga",
        "riga": "Europe/Riga",
        "рејкјавик": "Atlantic/Reykjavik",
        "reykjavik": "Atlantic/Reykjavik",
        "сан марино": "Europe/San_Marino",
        "san marino": "Europe/San_Marino",
        "сараево": "Europe/Sarajevo",
        "sarajevo": "Europe/Sarajevo",
        "софија": "Europe/Sofia",
        "sofia": "Europe/Sofia",
        "стокхолм": "Europe/Stockholm",
        "stockholm": "Europe/Stockholm",
        "талин": "Europe/Tallinn",
        "tallinn": "Europe/Tallinn",
        "тирана": "Europe/Tirana",
        "tirana": "Europe/Tirana",
        "вадуз": "Europe/Vaduz",
        "vaduz": "Europe/Vaduz",
        "валета": "Europe/Malta",
        "valletta": "Europe/Malta",
        "ватикан сити": "Europe/Rome",
        "vatican city": "Europe/Rome",
        "виена": "Europe/Vienna",
        "vienna": "Europe/Vienna",
        "вилнус": "Europe/Vilnius",
        "vilnius": "Europe/Vilnius",
        "варшава": "Europe/Warsaw",
        "warsaw": "Europe/Warsaw",
        "загреб": "Europe/Zagreb",
        "zagreb": "Europe/Zagreb",
        "барселона": "Europe/Madrid",
        "barcelona": "Europe/Madrid",
        "милан": "Europe/Rome",
        "milan": "Europe/Rome",
        "манчестер": "Europe/London",
        "manchester": "Europe/London",
        "хамбург": "Europe/Berlin",
        "hamburg": "Europe/Berlin",
        "санкт петербург": "Europe/Moscow",
        "saint petersburg": "Europe/Moscow",
        "порто": "Europe/Lisbon",
        "porto": "Europe/Lisbon",
        "женева": "Europe/Zurich",
        "geneva": "Europe/Zurich",
        "цирих": "Europe/Zurich",
        "zurich": "Europe/Zurich",
        "беч": "Europe/Vienna", // Alternative for Vienna in some Slavic languages
        "glasgow": "Europe/London",
        "гласгов": "Europe/London",
        "едinburgh": "Europe/London",
        "единбург": "Europe/London",
        "munich": "Europe/Berlin",
        "минхен": "Europe/Berlin",
        "frankfurt": "Europe/Berlin",
        "франкфурт": "Europe/Berlin",
    
        // Asia
        "токио": "Asia/Tokyo",
        "tokyo": "Asia/Tokyo",
        "пекинг": "Asia/Shanghai",
        "beijing": "Asia/Shanghai",
        "њу делхи": "Asia/Kolkata",
        "new delhi": "Asia/Kolkata",
        "абу даби": "Asia/Dubai",
        "abu dhabi": "Asia/Dubai",
        "аман": "Asia/Amman",
        "amman": "Asia/Amman",
        "ашгабат": "Asia/Ashgabat",
        "ashgabat": "Asia/Ashgabat",
        "астана": "Asia/Almaty",
        "astana": "Asia/Almaty",
        "багдад": "Asia/Baghdad",
        "baghdad": "Asia/Baghdad",
        "баку": "Asia/Baku",
        "baku": "Asia/Baku",
        "бандар сери бегаван": "Asia/Brunei",
        "bandar seri begawan": "Asia/Brunei",
        "бангкок": "Asia/Bangkok",
        "bangkok": "Asia/Bangkok",
        "бишкек": "Asia/Bishkek",
        "bishkek": "Asia/Bishkek",
        "коломбо": "Asia/Colombo",
        "colombo": "Asia/Colombo",
        "дамаск": "Asia/Damascus",
        "damascus": "Asia/Damascus",
        "дака": "Asia/Dhaka",
        "dhaka": "Asia/Dhaka",
        "дили": "Asia/Dili",
        "dili": "Asia/Dili",
        "доха": "Asia/Qatar",
        "doha": "Asia/Qatar",
        "душанбе": "Asia/Dushanbe",
        "dushanbe": "Asia/Dushanbe",
        "ханој": "Asia/Ho_Chi_Minh",
        "hanoi": "Asia/Ho_Chi_Minh",
        "исламабад": "Asia/Karachi",
        "islamabad": "Asia/Karachi",
        "џакарта": "Asia/Jakarta",
        "jakarta": "Asia/Jakarta",
        "ерусалим": "Asia/Jerusalem",
        "jerusalem": "Asia/Jerusalem",
        "кабул": "Asia/Kabul",
        "kabul": "Asia/Kabul",
        "катманду": "Asia/Kathmandu",
        "kathmandu": "Asia/Kathmandu",
        "куала лумпур": "Asia/Kuala_Lumpur",
        "kuala lumpur": "Asia/Kuala_Lumpur",
        "кувајт сити": "Asia/Kuwait",
        "kuwait city": "Asia/Kuwait",
        "мале": "Indian/Maldives",
        "male": "Indian/Maldives",
        "манама": "Asia/Bahrain",
        "manama": "Asia/Bahrain",
        "манила": "Asia/Manila",
        "manila": "Asia/Manila",
        "маскат": "Asia/Muscat",
        "muscat": "Asia/Muscat",
        "нејпјидо": "Asia/Yangon",
        "naypyidaw": "Asia/Yangon",
        "никозија": "Asia/Nicosia",
        "nicosia": "Asia/Nicosia",
        "пном пен": "Asia/Phnom_Penh",
        "phnom penh": "Asia/Phnom_Penh",
        "пјонгјанг": "Asia/Pyongyang",
        "pyongyang": "Asia/Pyongyang",
        "ријад": "Asia/Riyadh",
        "riyadh": "Asia/Riyadh",
        "сана": "Asia/Aden",
        "sana'a": "Asia/Aden",
        "сеул": "Asia/Seoul",
        "seoul": "Asia/Seoul",
        "сингапур": "Asia/Singapore",
        "singapore": "Asia/Singapore",
        "тајпеј": "Asia/Taipei",
        "taipei": "Asia/Taipei",
        "ташкент": "Asia/Tashkent",
        "tashkent": "Asia/Tashkent",
        "тбилиси": "Asia/Tbilisi",
        "tbilisi": "Asia/Tbilisi",
        "техеран": "Asia/Tehran",
        "tehran": "Asia/Tehran",
        "тимбу": "Asia/Thimphu",
        "thimphu": "Asia/Thimphu",
        "улан батор": "Asia/Ulaanbaatar",
        "ulaanbaatar": "Asia/Ulaanbaatar",
        "виентијане": "Asia/Vientiane",
        "vientiane": "Asia/Vientiane",
        "ереван": "Asia/Yerevan",
        "yerevan": "Asia/Yerevan",
        "шангај": "Asia/Shanghai",
        "shanghai": "Asia/Shanghai",
        "мумаби": "Asia/Kolkata",
        "mumbai": "Asia/Kolkata",
        "дубаи": "Asia/Dubai",
        "dubai": "Asia/Dubai",
        "хонг конг": "Asia/Hong_Kong",
        "hong kong": "Asia/Hong_Kong",
        "делхи": "Asia/Kolkata",
        "delhi": "Asia/Kolkata",
        "осака": "Asia/Tokyo",
        "osaka": "Asia/Tokyo",
        "нагоја": "Asia/Tokyo",
        "nagoya": "Asia/Tokyo",
        "гуангжу": "Asia/Shanghai",
        "guangzhou": "Asia/Shanghai",
        "шенжен": "Asia/Shanghai",
        "shenzhen": "Asia/Shanghai",
        "карачи": "Asia/Karachi",
        "karachi": "Asia/Karachi",
        "бангалор": "Asia/Kolkata",
        "bangalore": "Asia/Kolkata",
        "лахоур": "Asia/Karachi",
        "lahore": "Asia/Karachi",
        "истанбул": "Europe/Istanbul",
        "istanbul": "Europe/Istanbul",
        "ченгду": "Asia/Shanghai",
        "chengdu": "Asia/Shanghai",
        "чонгкинг": "Asia/Shanghai",
        "chongqing": "Asia/Shanghai",
        "тијанџин": "Asia/Shanghai",
        "tianjin": "Asia/Shanghai",
        "кolkata": "Asia/Kolkata",
        "колката": "Asia/Kolkata",
        "хyderabad": "Asia/Kolkata",
        "хајдерабад": "Asia/Kolkata",
        "ченнаи": "Asia/Kolkata",
        "chennai": "Asia/Kolkata",
        "пyне": "Asia/Kolkata",
        "пуне": "Asia/Kolkata",
        "ахмедабад": "Asia/Kolkata",
        "ahmedabad": "Asia/Kolkata",
        "сурат": "Asia/Kolkata",
        "surat": "Asia/Kolkata",
        "джидда": "Asia/Riyadh",
        "jeddah": "Asia/Riyadh",
        "мека": "Asia/Riyadh",
        "mecca": "Asia/Riyadh",
        "бусан": "Asia/Seoul",
        "busan": "Asia/Seoul",
        "инчон": "Asia/Seoul",
        "incheon": "Asia/Seoul",
        "кавасаки": "Asia/Tokyo",
        "kawasaki": "Asia/Tokyo",
        "јокохама": "Asia/Tokyo",
        "yokohama": "Asia/Tokyo",
        "кyото": "Asia/Tokyo",
        "kyoto": "Asia/Tokyo",
        "кobe": "Asia/Tokyo",
        "кобе": "Asia/Tokyo",
    
        // Africa
        "каиро": "Africa/Cairo",
        "cairo": "Africa/Cairo",
        "акра": "Africa/Accra",
        "accra": "Africa/Accra",
        "адис абаба": "Africa/Addis_Ababa",
        "addis ababa": "Africa/Addis_Ababa",
        "алжир": "Africa/Algiers",
        "algiers": "Africa/Algiers",
        "асмара": "Africa/Asmara",
        "asmara": "Africa/Asmara",
        "бамако": "Africa/Bamako",
        "bamako": "Africa/Bamako",
        "банџул": "Africa/Banjul",
        "banjul": "Africa/Banjul",
        "бисау": "Africa/Bissau",
        "bissau": "Africa/Bissau",
        "конакри": "Africa/Conakry",
        "conakry": "Africa/Conakry",
        "дакар": "Africa/Dakar",
        "dakar": "Africa/Dakar",
        "џибути": "Africa/Djibouti",
        "djibouti": "Africa/Djibouti",
        "фритаун": "Africa/Freetown",
        "freetown": "Africa/Freetown",
        "габороне": "Africa/Gaborone",
        "gaborone": "Africa/Gaborone",
        "гитега": "Africa/Gitega",
        "gitega": "Africa/Gitega",
        "хараре": "Africa/Harare",
        "harare": "Africa/Harare",
        "џуба": "Africa/Juba",
        "juba": "Africa/Juba",
        "кампала": "Africa/Kampala",
        "kampala": "Africa/Kampala",
        "картум": "Africa/Khartoum",
        "khartoum": "Africa/Khartoum",
        "кигали": "Africa/Kigali",
        "kigali": "Africa/Kigali",
        "киншаса": "Africa/Kinshasa",
        "kinshasa": "Africa/Kinshasa",
        "либрвил": "Africa/Libreville",
        "libreville": "Africa/Libreville",
        "лилонгве": "Africa/Blantyre",
        "lilongwe": "Africa/Blantyre",
        "ломе": "Africa/Lome",
        "lomé": "Africa/Lome",
        "луанда": "Africa/Luanda",
        "luanda": "Africa/Luanda",
        "лусака": "Africa/Lusaka",
        "lusaka": "Africa/Lusaka",
        "малабо": "Africa/Malabo",
        "malabo": "Africa/Malabo",
        "мапуто": "Africa/Maputo",
        "maputo": "Africa/Maputo",
        "масеру": "Africa/Maseru",
        "maseru": "Africa/Maseru",
        "мбабане": "Africa/Mbabane",
        "mbabane": "Africa/Mbabane",
        "могадишу": "Africa/Mogadishu",
        "mogadishu": "Africa/Mogadishu",
        "монровија": "Africa/Monrovia",
        "monrovia": "Africa/Monrovia",
        "најроби": "Africa/Nairobi",
        "nairobi": "Africa/Nairobi",
        "нџамена": "Africa/Ndjamena",
        "ndjamena": "Africa/Ndjamena",
        "нијамеј": "Africa/Niamey",
        "niamey": "Africa/Niamey",
        "нуакшот": "Africa/Nouakchott",
        "nouakchott": "Africa/Nouakchott",
        "уагадугу": "Africa/Ouagadougou",
        "ouagadougou": "Africa/Ouagadougou",
        "порт луис": "Indian/Mauritius",
        "port louis": "Indian/Mauritius",
        "порто-ново": "Africa/Porto-Novo",
        "porto-novo": "Africa/Porto-Novo",
        "праја": "Atlantic/Cape_Verde",
        "praia": "Atlantic/Cape_Verde",
        "преторија": "Africa/Johannesburg",
        "pretoria": "Africa/Johannesburg",
        "рабат": "Africa/Casablanca",
        "rabat": "Africa/Casablanca",
        "сао томе": "Africa/Sao_Tome",
        "são tomé": "Africa/Sao_Tome",
        "тунис": "Africa/Tunis",
        "tunis": "Africa/Tunis",
        "виндхук": "Africa/Windhoek",
        "windhoek": "Africa/Windhoek",
        "јамусукро": "Africa/Abidjan",
        "yamoussoukro": "Africa/Abidjan",
        "јаунде": "Africa/Douala",
        "yaoundé": "Africa/Douala",
        "антананариво": "Indian/Antananarivo",
        "antananarivo": "Indian/Antananarivo",
        "лагос": "Africa/Lagos",
        "lagos": "Africa/Lagos",
        "кајп таун": "Africa/Johannesburg",
        "cape town": "Africa/Johannesburg",
        "јоханесбург": "Africa/Johannesburg",
        "johannesburg": "Africa/Johannesburg",
        "дар ес салам": "Africa/Dar_es_Salaam",
        "dar es salaam": "Africa/Dar_es_Salaam",
        "акра": "Africa/Accra",
        "accra": "Africa/Accra",
        "абуџа": "Africa/Lagos",
        "abuja": "Africa/Lagos",
        "дyрбан": "Africa/Johannesburg",
        "durban": "Africa/Johannesburg",
        "канo": "Africa/Lagos",
        "kano": "Africa/Lagos",
        "ибадан": "Africa/Lagos",
        "ibadan": "Africa/Lagos",
        "александрија": "Africa/Cairo",
        "alexandria": "Africa/Cairo",
        "гiza": "Africa/Cairo",
        "гиза": "Africa/Cairo",
    
        // Americas
        "вашингтон": "America/New_York",
        "washington": "America/New_York",
        "бразилија": "America/Sao_Paulo",
        "brasilia": "America/Sao_Paulo",
        "отава": "America/Toronto",
        "ottawa": "America/Toronto",
        "асунсион": "America/Asuncion",
        "asunción": "America/Asuncion",
        "бастер": "America/St_Kitts",
        "basseterre": "America/St_Kitts",
        "белмопан": "America/Belize",
        "belmopan": "America/Belize",
        "богота": "America/Bogota",
        "bogotá": "America/Bogota",
        "бриџтаун": "America/Barbados",
        "bridgetown": "America/Barbados",
        "буенос аирес": "America/Argentina/Buenos_Aires",
        "buenos aires": "America/Argentina/Buenos_Aires",
        "кастрис": "America/St_Lucia",
        "castries": "America/St_Lucia",
        "џорџтаун": "America/Guyana",
        "georgetown": "America/Guyana",
        "гватемала сити": "America/Guatemala",
        "guatemala city": "America/Guatemala",
        "хавана": "America/Havana",
        "havana": "America/Havana",
        "кингстон": "America/Jamaica",
        "kingston": "America/Jamaica",
        "ла паз": "America/La_Paz",
        "la paz": "America/La_Paz",
        "лима": "America/Lima",
        "lima": "America/Lima",
        "манагуа": "America/Managua",
        "managua": "America/Managua",
        "мексико сити": "America/Mexico_City",
        "mexico city": "America/Mexico_City",
        "монтевидео": "America/Montevideo",
        "montevideo": "America/Montevideo",
        "насау": "America/Nassau",
        "nassau": "America/Nassau",
        "панама сити": "America/Panama",
        "panama city": "America/Panama",
        "парамарибо": "America/Paramaribo",
        "paramaribo": "America/Paramaribo",
        "порт оф спејн": "America/Port_of_Spain",
        "port of spain": "America/Port_of_Spain",
        "кито": "America/Guayaquil",
        "quito": "America/Guayaquil",
        "росо": "America/Dominica",
        "roseau": "America/Dominica",
        "сент џорџ": "America/Grenada",
        "saint george's": "America/Grenada",
        "сент џонс": "America/Antigua",
        "saint john's": "America/Antigua",
        "сан хосе": "America/Costa_Rica",
        "san josé": "America/Costa_Rica",
        "сан хуан": "America/Puerto_Rico",
        "san juan": "America/Puerto_Rico",
        "сан салвадор": "America/El_Salvador",
        "san salvador": "America/El_Salvador",
        "сантијаго": "America/Santiago",
        "santiago": "America/Santiago",
        "санто доминго": "America/Santo_Domingo",
        "santo domingo": "America/Santo_Domingo",
        "сукре": "America/La_Paz",
        "sucre": "America/La_Paz",
        "тегусigalпа": "America/Tegucigalpa",
        "tegucigalpa": "America/Tegucigalpa",
        "њујорк": "America/New_York",
        "new york": "America/New_York",
        "лос анџелес": "America/Los_Angeles",
        "los angeles": "America/Los_Angeles",
        "чикаго": "America/Chicago",
        "chicago": "America/Chicago",
        "хустон": "America/Chicago",
        "houston": "America/Chicago",
        "феникс": "America/Phoenix",
        "phoenix": "America/Phoenix",
        "филадлефија": "America/New_York",
        "philadelphia": "America/New_York",
        "сан антонио": "America/Chicago",
        "san antonio": "America/Chicago",
        "сан диего": "America/Los_Angeles",
        "san diego": "America/Los_Angeles",
        "далас": "America/Chicago",
        "dallas": "America/Chicago",
        "сан франциско": "America/Los_Angeles",
        "san francisco": "America/Los_Angeles",
        "денвер": "America/Denver",
        "denver": "America/Denver",
        "сиетл": "America/Los_Angeles",
        "seattle": "America/Los_Angeles",
        "мајами": "America/New_York",
        "miami": "America/New_York",
        "атланта": "America/New_York",
        "atlanta": "America/New_York",
        "бостон": "America/New_York",
        "boston": "America/New_York",
        "детроит": "America/Detroit",
        "detroit": "America/Detroit",
        "порланд": "America/Los_Angeles",
        "portland": "America/Los_Angeles",
        "лас вегас": "America/Los_Angeles",
        "las vegas": "America/Los_Angeles",
        "минаполис": "America/Chicago",
        "minneapolis": "America/Chicago",
        "анкераџ": "America/Anchorage",
        "anchorage": "America/Anchorage",
        "хонолулу": "Pacific/Honolulu",
        "honolulu": "Pacific/Honolulu",
        "сао пауло": "America/Sao_Paulo",
        "são paulo": "America/Sao_Paulo",
        "рио де жанерио": "America/Sao_Paulo",
        "rio de janeiro": "America/Sao_Paulo",
        "торонто": "America/Toronto",
        "toronto": "America/Toronto",
        "монтреал": "America/Montreal",
        "montreal": "America/Montreal",
        "ванкувер": "America/Vancouver",
        "vancouver": "America/Vancouver",
        "калгари": "America/Edmonton",
        "calgary": "America/Edmonton",
        "едмонтон": "America/Edmonton",
        "edmonton": "America/Edmonton",
        "квебек сити": "America/Toronto",
        "quebec city": "America/Toronto",
        "виннипег": "America/Winnipeg",
        "winnipeg": "America/Winnipeg",
        "орландо": "America/New_York",
        "orlando": "America/New_York",
        "тампа": "America/New_York",
        "tampa": "America/New_York",
        "аustin": "America/Chicago",
        "остин": "America/Chicago",
        "nashville": "America/Chicago",
        "нашвил": "America/Chicago",
        "sacramento": "America/Los_Angeles",
        "сакраменто": "America/Los_Angeles",
        "кливленд": "America/New_York",
        "cleveland": "America/New_York",
        "питсбург": "America/New_York",
        "pittsburgh": "America/New_York",
        "цинцинати": "America/New_York",
        "cincinnati": "America/New_York",
        "гуадалахара": "America/Mexico_City",
        "guadalajara": "America/Mexico_City",
        "монтереј": "America/Monterrey",
        "monterrey": "America/Monterrey",
        "тихуана": "America/Tijuana",
        "tijuana": "America/Tijuana",
        "белo хоризонте": "America/Sao_Paulo",
        "belo horizonte": "America/Sao_Paulo",
        "ресифе": "America/Recife",
        "recife": "America/Recife",
        "салвадор": "America/Bahia",
        "salvador": "America/Bahia",
    
        // Oceania
        "канбера": "Australia/Canberra",
        "canberra": "Australia/Canberra",
        "апиа": "Pacific/Apia",
        "apia": "Pacific/Apia",
        "фунафути": "Pacific/Funafuti",
        "funafuti": "Pacific/Funafuti",
        "хонијара": "Pacific/Guadalcanal",
        "honiara": "Pacific/Guadalcanal",
        "порт морсби": "Pacific/Port_Moresby",
        "port moresby": "Pacific/Port_Moresby",
        "порт вила": "Pacific/Efate",
        "port vila": "Pacific/Efate",
        "сува": "Pacific/Fiji",
        "suva": "Pacific/Fiji",
        "тарава": "Pacific/Tarawa",
        "tarawa": "Pacific/Tarawa",
        "велингтон": "Pacific/Auckland",
        "wellington": "Pacific/Auckland",
        "сиднеј": "Australia/Sydney",
        "sydney": "Australia/Sydney",
        "мелбурн": "Australia/Melbourne",
        "melbourne": "Australia/Melbourne",
        "бризбејн": "Australia/Brisbane",
        "brisbane": "Australia/Brisbane",
        "перт": "Australia/Perth",
        "perth": "Australia/Perth",
        "аделајд": "Australia/Adelaide",
        "adelaide": "Australia/Adelaide",
        "хобарт": "Australia/Hobart",
        "hobart": "Australia/Hobart",
        "дарвин": "Australia/Darwin",
        "darwin": "Australia/Darwin",
        "окланд": "Pacific/Auckland",
        "auckland": "Pacific/Auckland",
        "крајстчерч": "Pacific/Auckland",
        "christchurch": "Pacific/Auckland",
    "битола": "Europe/Skopje",
    "bitola": "Europe/Skopje",
    "прилеп": "Europe/Skopje",
    "prilep": "Europe/Skopje",
    "куманово": "Europe/Skopje",
    "kumanovo": "Europe/Skopje",
    "тетово": "Europe/Skopje",
    "tetovo": "Europe/Skopje",

    // Serbia
    "белград": "Europe/Belgrade",
    "belgrade": "Europe/Belgrade",
    "нови сад": "Europe/Belgrade",
    "novi sad": "Europe/Belgrade",
    "ниш": "Europe/Belgrade",
    "niš": "Europe/Belgrade",
    "крагуевац": "Europe/Belgrade",
    "kragujevac": "Europe/Belgrade",
    "суботица": "Europe/Belgrade",
    "subotica": "Europe/Belgrade",

    // Bosnia and Herzegovina
    "сараево": "Europe/Sarajevo",
    "sarajevo": "Europe/Sarajevo",
    "бања лука": "Europe/Sarajevo",
    "banja luka": "Europe/Sarajevo",
    "мостар": "Europe/Sarajevo",
    "mostar": "Europe/Sarajevo",
    "тузла": "Europe/Sarajevo",
    "tuzla": "Europe/Sarajevo",

    // Montenegro
    "подгорица": "Europe/Podgorica",
    "podgorica": "Europe/Podgorica",
    "никшиќ": "Europe/Podgorica",
    "nikšić": "Europe/Podgorica",
    "плјевља": "Europe/Podgorica",
    "pljevlja": "Europe/Podgorica",

    // Albania
    "тирана": "Europe/Tirana",
    "tirana": "Europe/Tirana",
    "драч": "Europe/Tirana",
    "durrës": "Europe/Tirana",
    "влора": "Europe/Tirana",
    "vlorë": "Europe/Tirana",
    "елбасан": "Europe/Tirana",
    "elbasan": "Europe/Tirana",

    // Kosovo
    "приштина": "Europe/Belgrade", // Kosovo uses same time zone as Serbia
    "pristina": "Europe/Belgrade",
    "призрен": "Europe/Belgrade",
    "prizren": "Europe/Belgrade",
    "ѓаковица": "Europe/Belgrade",
    "đakovica": "Europe/Belgrade",
    "митровица": "Europe/Belgrade",
    "mitrovica": "Europe/Belgrade",

    // Bulgaria
    "софија": "Europe/Sofia",
    "sofia": "Europe/Sofia",
    "пловдив": "Europe/Sofia",
    "plovdiv": "Europe/Sofia",
    "варна": "Europe/Sofia",
    "varna": "Europe/Sofia",
    "бургас": "Europe/Sofia",
    "burgas": "Europe/Sofia",

    // Croatia
    "загреб": "Europe/Zagreb",
    "zagreb": "Europe/Zagreb",
    "сплит": "Europe/Zagreb",
    "split": "Europe/Zagreb",
    "ријека": "Europe/Zagreb",
    "rijeka": "Europe/Zagreb",
    "осијек": "Europe/Zagreb",
    "osijek": "Europe/Zagreb",

    // Slovenia
    "љубљана": "Europe/Ljubljana",
    "ljubljana": "Europe/Ljubljana",
    "марибор": "Europe/Ljubljana",
    "maribor": "Europe/Ljubljana",
    "целје": "Europe/Ljubljana",
    "celje": "Europe/Ljubljana",

    // Romania
    "букурешт": "Europe/Bucharest",
    "bucharest": "Europe/Bucharest",
    "клауж": "Europe/Bucharest",
    "cluj-napoca": "Europe/Bucharest",
    "темишвар": "Europe/Bucharest",
    "timișoara": "Europe/Bucharest",
    "јаши": "Europe/Bucharest",
    "iași": "Europe/Bucharest",
    "констанца": "Europe/Bucharest",
    "constanța": "Europe/Bucharest",

    // Greece (Balkan portion)
    "атина": "Europe/Athens",
    "athens": "Europe/Athens",
    "солун": "Europe/Athens",
    "thessaloniki": "Europe/Athens",
    "патра": "Europe/Athens",
    "patras": "Europe/Athens",
    "ираклион": "Europe/Athens",
    "heraklion": "Europe/Athens",

    // Turkey (European part/Thrace)
    "истанбул": "Europe/Istanbul",
    "istanbul": "Europe/Istanbul",
    "анкара": "Europe/Istanbul",
    "ankara": "Europe/Istanbul",
    "едirne": "Europe/Istanbul",
    "едirne": "Europe/Istanbul"
};

    function init() {
        var mdlO = document.getElementById("mdlO"),
            mdlX = document.getElementById("mdlX");

        localTimeInput = document.getElementById("localtime");
        capitalInput = document.getElementById("capital");
        result = document.getElementById("result1");
        sub = document.getElementById("sub");
        otherSection = document.getElementById("otherSection");
        otherList = document.getElementById("otherList");

        capitalInput.addEventListener("keyup", handleCityInput);
        mdlO.onclick = mdlX.onclick = toggleModal;
        mdlO.classList.remove("hidden");

        updateLocalTime();
        intervalId = setInterval(updateTimes, 1000);
    }

    function updateLocalTime() {
        const now = new Date();
        localTimeInput.value = now.toLocaleTimeString(['mk-MK', 'en-US'], { hour12: false });
    }

    function getTimeInZone(timeZone) {
        return new Date().toLocaleTimeString(['mk-MK', 'en-US'], { timeZone: timeZone, hour12: false });
    }

    function formatDate(date) {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return date.toLocaleDateString(['mk-MK', 'en-US'], options).replace(/(\d+)\/(\d+)\/(\d+)/, '$1.$2.$3');
    }

    function calculateTimeDifference(localDate, zoneDate) {
        const diffMs = zoneDate - localDate;
        const hours = Math.floor(Math.abs(diffMs) / 36e5);
        const minutes = Math.floor((Math.abs(diffMs) % 36e5) / 6e4);
        return {
            hours,
            minutes,
            ahead: diffMs >= 0
        };
    }

    function updateTimes() {
        updateLocalTime();
        
        if (selectedTimeZone) {
            const localDate = new Date();
            const zoneTime = getTimeInZone(selectedTimeZone);
            const zoneDate = new Date(localDate.toLocaleString(['mk-MK', 'en-US'], { timeZone: selectedTimeZone }));
            const diff = calculateTimeDifference(localDate, zoneDate);
            const capital = Object.keys(timeZones).find(key => timeZones[key] === selectedTimeZone);

            result.innerHTML = `Време во ${capital.charAt(0).toUpperCase() + capital.slice(1)}: ${zoneTime}`;
            sub.innerHTML = `Временска разлика: ${diff.ahead ? "Напред" : "Назад"} за ${diff.hours} ${diff.hours !== 1 ? "часови" : "час"}${diff.minutes ? " и " + diff.minutes + " " + (diff.minutes !== 1 ? "минути" : "минута") : ""}`;

            otherList.innerHTML = `
                <li>Локален датум: ${formatDate(localDate)}</li>
                <li>Датум во ${capital.charAt(0).toUpperCase() + capital.slice(1)}: ${formatDate(zoneDate)}</li>
                <li>Временска зона: ${selectedTimeZone}</li>
            `;
            otherSection.classList.remove("hidden");
        }
    }

    function handleCityInput() {
        const capital = capitalInput.value.trim().toLowerCase();
        result.innerHTML = "Внесете главен град погоре";
        sub.innerHTML = "";
        otherList.innerHTML = "";
        otherSection.classList.add("hidden");
        selectedTimeZone = null;

        if (!capital) return;

        const timeZone = timeZones[capital];
        if (!timeZone) {
            result.innerHTML = "Градот не е пронајден";
            sub.innerHTML = "Пробајте друг град или проверете го правописот";
            return;
        }

        selectedTimeZone = timeZone;
        updateTimes();
    }

    function toggleModal() {
        document.body.classList.toggle("mdl-visible");
        document.body.classList.contains("mdl-visible") ?
            document.getElementsByClassName("close")[0].focus() :
            document.getElementsByClassName("mdl-launch")[0].focus();
    }

    return { init: init };
}();

window.onload = function() {
    TimeZoneCalculator.init();
};