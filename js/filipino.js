var questions = [				
["Masayang nakilahok sa paligsahan si Marga at Klara.", "Masayang", "nakilahok", "si", "Walang Mali", "C", "Pagkilala sa<br> Mali"],
["Kami ay nagpunta sa Makati bukas.", "Kami", "nagpunta", "Makati", "Walang Mali", "B", "Pagkilala sa<br> Mali"],
["Si nanay ay nakikipag-usap sa telepono habang nagluluto.", "Si", "nakikipag-usap", "habang", "Walang Mali", "D", "Pagkilala sa<br> Mali"],
["Napansin ng guro ang mabuting asal na ipinamalas ng mga mag-aaral.", "Napansin", "mabuting", "mga", "Walang Mali", "B", "Pagkilala sa<br> Mali"],
["Si Cha-Cha, Vince, at Joshua ay naghanda ng masarap na meryenda para sa mga panauhin.", "Si", "naghanda", "para", "Walang Mali", "A", "Pagkilala sa<br> Mali"],
["Sina Ginoong Gaspar ang nahalal bilang pangulo ng samahan.", "Sina", "nahalal", "ng", "Walang Mali", "A", "Pagkilala sa<br> Mali"],
["Ang sinaunang Pilipino ay lumilipat sa ibang lugar kapag wala silang makuhang pagkain.", "Ang", "lumilipat", "silang", "Walang Mali", "A", "Pagkilala sa<br> Mali"],
["Uminom nang gamot ang matandang pasyente.", "Uminom", "nang", "ang", "Walang Mali", "B", "Pagkilala sa<br> Mali"],
["Kami ay pumunta sa opisina mamayang hapon.", "Kami", "pumunta", "mamayang", "Walang Mali", "B", "Pagkilala sa<br> Mali"],
["Sumisimba ang mga mag-anak tuwing linggo.", "Sumisimba", "tuwing", "linggo", "Walang Mali", "A", "Pagkilala sa<br> Mali"],
["Nagbigay ng malaking donasyon para sa bahay ampunan ang samahan ni Ginoong Martinez.", "Nagbigay", "para", "ni", "Walang Mali", "D", "Pagkilala sa<br> Mali"],
["Dapat nating iwasan ang labis na pagkain ng mga maaalat at matatamis na pagkain.", "iwasan", "mga", "maaalat", "Walang Mali", "A", "Pagkilala sa<br> Mali"],
["Siya ay nagluluto ng dumating ang kanyang mga panauhin.", "Siya", "ng", "mga", "Walang Mali", "B", "Pagkilala sa<br> Mali"],
["Ang mag-asawa ay malimit magtalo kong paano nila dapat disiplinahin ang kanilang mga anak.", "Ang mag-asawa", "kong", "kanilang", "Walang Mali", "B", "Pagkilala sa<br> Mali"],
["Iniinom ni Grace ang kanilang gamot sa ubo kaya’t mabilis siyang gumaling.", "Iniinom", "kanilang", "sa", "Walang Mali", "B", "Pagkilala sa<br> Mali"],
["Maraming nahuling isda si tatay sa dagat.", "Maraming", "nahuling", "si", "Walang Mali", "D", "Pagkilala sa<br> Mali"],
["Ang mga estudyante ay nagsasaliksik tungkol sa buhay ni Jose Rizal.", "Ang mga", "ay", "sa", "Walang Mali", "D", "Pagkilala sa<br> Mali"],
["Ang buong klase ni Bb. Nava ay magkakaroon ng lakbay-aral.", "Ang", "magkakaroon", "lakbay-aral", "Walang Mali", "D", "Pagkilala sa<br> Mali"],
["Makinig kayo nang mabuti sa payo ng inyong mga magulang.", "kayo", "nang", "inyong", "Walang Mali", "B", "Pagkilala sa<br> Mali"],
["Marami ring tao ang nanonood nang laro ng Gilas Pilipinas.", "ang", "nang", "ng", "Walang Mali", "B", "Pagkilala sa<br> Mali"],
["____________ ng bagong libro sa Filipino na available sa bookstore.", "May", "Mayroon", "Meyron", "Mey", "B", "Wastong Gamit"],
["Ipinagmamalaki ____________ lubos na ako ay isang Atheneon.", "kung", "kong", "mong", "mung", "B", "Wastong Gamit"],
["Pumunta ka ____________ para makuha mo ang pasalubong ni Tita Lina.", "dito", "rito", "doon", "diyan", "B", "Wastong Gamit"],
["Mahal ____________ ang talent fee ni Ryzza Mae bilang host sa Eat Bulaga.", "raw", "at", "ng", "daw", "D", "Wastong Gamit"],
["Ika ____________ lima siya sa ranking ng mga atleta.", "labin", "labim", "labing", "labbin", "A", "Wastong Gamit"],
["Sinabi ____________ ng mga Ginebra fans na dinaya lang ang resulta sa laban nila ng koponan ng Alaska.", "din", "nila", "sila", "rin", "D", "Wastong Gamit"],
["____________ bagong patakaran bang ipapatupad ang DepEd sa taong ito?", "Meyron", "Mayroon", "May", "Mayron", "C", "Wastong Gamit"],
["____________ puwede lang sana, unahin nyo muna ang pagtatrabaho sa ating bansa bago sa mga dayuhan.", "Kung", "Kong", "Ka", "Ko", "A", "Wastong Gamit"],
["____________ mo muna kung maayos itong <i>ipad</i> bago mo bilhin.", "Subukin", "Subukan", "Sanayin", "Eksamin", "A", "Wastong Gamit"],
["____________ di lang talaga nagbrown-out, matatapos ko n asana ang aking proyekto.", "Kung", "Kong", "Mong", "Mung", "A", "Wastong Gamit"],
["Tumakbo ____________ mabilis ang manlalaro.", "nang", "ng", "at", "sa", "B", "Wastong Gamit"],
["Si Sam at ako ay pupunta sa Lola ko. ____________ ay kakain ng masarap doon.", "Kami", "Kayo", "Sila", "Tayo", "A", "Wastong Gamit"],
["Sina Rain at Rian ay magkapatid. ____________ ay laging nagtutulungan.", "Kami", "Kayo", "Sila", "Tayo", "C", "Wastong Gamit"],
["Pumapasok ang mga bata ____________ paaralan araw-araw.", "sa", "ng", "at", "nang", "A", "Wastong Gamit"],
["Si Nelly, Trisha at ikaw ang susunod na sasakay sa kotse. ____________ ay pupunta sa park.", "Kami", "Kayo", "Sila", "Sina", "B", "Wastong Gamit"],
["____________ mo ang pawis sa noon ng iyong kapatid.", "Pahirin", "Pahiran", "Lapatan", "Lapitan", "A", "Wastong Gamit"],
["____________ mo ng mantikilya ang tinapay ng lola mo.", "Pahirin", "Pahiran", "Lapatan", "Lapitan", "C", "Wastong Gamit"],
["Walang sinuman ang pwedeng pumasok sa sinehan ____________ ang mga may ticket lamang.", "kundi", "kung di", "kondi", "kong di", "A", "Wastong Gamit"],
["Siya ang ____________ hugas ng plato tuwing gabi.", "kita", "tiga", "taga", "kata", "C", "Wastong Gamit"],
["Hindi matibay ang pagkagawa ng ____________.", "saraduhan", "pintuan", "sarado", "pinto", "D", "Wastong Gamit"],
["Si Aling Alma maging ang kanyang mga anak ay <u><i>mapaglubid ng buhangin.</i></u>", "masisipag", "madamot", "matatapat", "sinungaling", "D", "Talasalitaan"],
["Si Kapitan Crisipin ay <u><i>bukas ang dibdib</i></u> sa kanyang mga kababaryo.", "masungit", "mabait", "malaswa", "maunawain", "D", "Talasalitaan"],
["Si Amelia ay <u><i>buwayang lubog</i></u> sa kanilang mga magkakaibigan.", "mabait", "taksil", "mataray", "palakaibigan", "B", "Talasalitaan"],
["Ang dating pangulo na si Cory Aquino ay itinuturing na <u><i>bulaklak ng lipunan</i></u>.", "sikat at nirerespeto", "kinakainisan", "kinakampihan", "kinagigiliwan", "A", "Talasalitaan"],
["Kahulugan ng idyomang <u><i>nagdilang anghel</i></u>.", "nagmistulang bata", "nagkatotoo ang sinabi", "dumila ang anghel", "magsinungaling", "B", "Talasalitaan"],
["Kahulugan ng idyomang <u><i>nagpanting ang tenga</i></u>.", "nagalit", "sumaya", "nagkasakit sa tenga", "natuwa sa narinig", "A", "Talasalitaan"],
["Si Mak-Mak ay maraming <u><i>kabatakan</i></u> sa kanilang lugar, kaya siya ang nanalong presidente ng kabataan.", "kaaway", "kagalit", "kaibigan", "kasundo", "C", "Talasalitaan"],
["Isinumpa ng mga magulang ni Hana ang kanyang kapatid na lalaki na ito ay <u><i>gagapang na parang ahas</i></u>.", "magiging mabagal", "maghihirap", "magiging matapang", "wala sa nabanggit", "B", "Talasalitaan"],
["Ang batang si Rigil ay may <u><i>uod sa katawan</i></u>, kung kaya’t siya ay laging napapagalitan.", "marumi", "tahimik", "malikot", "makulit", "C", "Talasalitaan"],
["Si Vina at Shaina <u><i>ay magkaputol ng pusod</i></u>.", "magkaibigan", "magkapatid", "magkasundo", "magkaaway", "B", "Talasalitaan"],
["Nakalulungkot isipin na ipinanganak ni Ana ang kanyang anak na <u><i>walang ilaw ang mga mata</i></u>.", "bulag", "malabo ang paningin", "malaki ang mata", "singkit ang mata", "A", "Talasalitaan"],
["Maraming mga Pilipino ngayon ang <u><i>nagbibilang ng poste</i></u>.", "walang trabaho", "nagtatayo ng mga poste", "nagpapasarap buhay", "wala sa nabanggit", "A", "Talasalitaan"],
["Si Jose ay umaga na nang umuwi at siya ay <u><i>amoy tsiko</i></u>.", "amoy prutas", "amoy opisina", "amoy alak", "amoy sasakyan", "C", "Talasalitaan"],
["Si Arnel ay tila may <u><i>bagyo kung magsalita</i></u>.", "malakas mag salita", "mayabang magsalita", "mahinahon kung magsalita", "mabilis magsalita", "B", "Talasalitaan"],
["Ang mga guro at mag-aaral ay <u><i>nagbalikatan</i></u> upang manalo sa paligsahan.", "nagtulungan", "nagkasundo", "nagkanya-kanya", "nag away-away", "A", "Talasalitaan"],
["<div class=\"divQuest text-justify\">1. Ang batang kulang sa iodine ay maaari namang maging kulang ang pag-iisip.<br>2. Kung ang katawan ng tao ay kulang sa iron, posibleng magkaroon ng sakit na anemia.<br>3. Kung ang katawan naman ay kapos sa vitamin A, manganganib naman ang mata sa pagkalubog.<br>4. Ang mga ito ay iron, vitamin A at iodine.<br>5. Ang hidden hunger ay kakulangan sa tatlong importanteng sustansyang kailangan ng katawan ng tao.<br>6. Ang mga may edad naman na kulang sa iodine ay maaaring magkaroon ng sakit sa goiter.</div><br><br> Aling pangungusap ang dapat na mauna?", "2", "3", "4", "5", "D", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Ang batang kulang sa iodine ay maaari namang maging kulang ang pag-iisip.<br>2. Kung ang katawan ng tao ay kulang sa iron, posibleng magkaroon ng sakit na anemia.<br>3. Kung ang katawan naman ay kapos sa vitamin A, manganganib naman ang mata sa pagkalubog.<br>4. Ang mga ito ay iron, vitamin A at iodine.<br>5. Ang hidden hunger ay kakulangan sa tatlong importanteng sustansyang kailangan ng katawan ng tao.<br>6. Ang mga may edad naman na kulang sa iodine ay maaaring magkaroon ng sakit sa goiter.</div><br><br> Aling pangungusap ang dapat na pangatlo?", "1", "2", "3", "4", "B", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Ang batang kulang sa iodine ay maaari namang maging kulang ang pag-iisip.<br>2. Kung ang katawan ng tao ay kulang sa iron, posibleng magkaroon ng sakit na anemia.<br>3. Kung ang katawan naman ay kapos sa vitamin A, manganganib naman ang mata sa pagkalubog.<br>4. Ang mga ito ay iron, vitamin A at iodine.<br>5. Ang hidden hunger ay kakulangan sa tatlong importanteng sustansyang kailangan ng katawan ng tao.<br>6. Ang mga may edad naman na kulang sa iodine ay maaaring magkaroon ng sakit sa goiter.</div><br><br> Aling pangungusap ang dapat na pang-apat?", "1", "2", "3", "4", "C", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Ang batang kulang sa iodine ay maaari namang maging kulang ang pag-iisip.<br>2. Kung ang katawan ng tao ay kulang sa iron, posibleng magkaroon ng sakit na anemia.<br>3. Kung ang katawan naman ay kapos sa vitamin A, manganganib naman ang mata sa pagkalubog.<br>4. Ang mga ito ay iron, vitamin A at iodine.<br>5. Ang hidden hunger ay kakulangan sa tatlong importanteng sustansyang kailangan ng katawan ng tao.<br>6. Ang mga may edad naman na kulang sa iodine ay maaaring magkaroon ng sakit sa goiter.</div><br><br> Aling pangungusap ang dapat na panlima?", "1", "2", "3", "4", "A", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Ang batang kulang sa iodine ay maaari namang maging kulang ang pag-iisip.<br>2. Kung ang katawan ng tao ay kulang sa iron, posibleng magkaroon ng sakit na anemia.<br>3. Kung ang katawan naman ay kapos sa vitamin A, manganganib naman ang mata sa pagkalubog.<br>4. Ang mga ito ay iron, vitamin A at iodine.<br>5. Ang hidden hunger ay kakulangan sa tatlong importanteng sustansyang kailangan ng katawan ng tao.<br>6. Ang mga may edad naman na kulang sa iodine ay maaaring magkaroon ng sakit sa goiter.</div><br><br> Aling pangungusap ang dapat na panghuli?", "3", "4", "5", "6", "D", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Ang araw-araw na paliligo at pagpapalit ng malinis na damit ay nakakatulong ng malaki.<br>2. Ang pagiging malinis sa katawan sa lahat ng oras ay isang mabuting gawi.<br>3. Ang batang malinis ay magandang tignan.<br>4. Malinis tignan ang batang maikli ang mga kuko sa kamay at paa.<br>5. Wala ng gaganda pa sa ngiting nagpapakita ng mapuputing ngiping dulot ng pagsisipilyo nang tatlong beses sa isang araw.<br>6. Kaya laging panatilihing malinis ang katawan.</div><br><br> Aling pangungusap ang dapat na mauna?", "1", "2", "3", "4", "B", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Ang araw-araw na paliligo at pagpapalit ng malinis na damit ay nakakatulong ng malaki.<br>2. Ang pagiging malinis sa katawan sa lahat ng oras ay isang mabuting gawi.<br>3. Ang batang malinis ay magandang tignan.<br>4. Malinis tignan ang batang maikli ang mga kuko sa kamay at paa.<br>5. Wala ng gaganda pa sa ngiting nagpapakita ng mapuputing ngiping dulot ng pagsisipilyo nang tatlong beses sa isang araw.<br>6. Kaya laging panatilihing malinis ang katawan.</div><br><br> Aling pangungusap ang dapat na pangatlo?", "1", "2", "3", "4", "A", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Ang araw-araw na paliligo at pagpapalit ng malinis na damit ay nakakatulong ng malaki.<br>2. Ang pagiging malinis sa katawan sa lahat ng oras ay isang mabuting gawi.<br>3. Ang batang malinis ay magandang tignan.<br>4. Malinis tignan ang batang maikli ang mga kuko sa kamay at paa.<br>5. Wala ng gaganda pa sa ngiting nagpapakita ng mapuputing ngiping dulot ng pagsisipilyo nang tatlong beses sa isang araw.<br>6. Kaya laging panatilihing malinis ang katawan.</div><br><br> Aling pangungusap ang dapat na panghuli?", "3", "4", "5", "6", "D", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Magiliw at lagi silang may masiglang ngiti sa pagsalubong sa mga bagong kakilala.<br>2. Ang mga panauhin o mga turista ay hindi halos nakadarama ng pagiging banyaga nila kung sila’y dumarating sa bansa.<br>3. Tunay na dapat ipagmalaki ang ganyang katangian ng mga Pilipino.<br>4. Ang mga Pilipino ay kinikilala sa kahusayan sa pagtanggap ng panauhin.</div><br><br> Aling pangungusap ang dapat na mauna?", "1", "2", "3", "4", "D", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Magiliw at lagi silang may masiglang ngiti sa pagsalubong sa mga bagong kakilala.<br>2. Ang mga panauhin o mga turista ay hindi halos nakadarama ng pagiging banyaga nila kung sila’y dumarating sa bansa.<br>3. Tunay na dapat ipagmalaki ang ganyang katangian ng mga Pilipino.<br>4. Ang mga Pilipino ay kinikilala sa kahusayan sa pagtanggap ng panauhin.</div><br><br> Aling pangungusap ang dapat na pangalawa?", "1", "2", "3", "4", "A", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Magiliw at lagi silang may masiglang ngiti sa pagsalubong sa mga bagong kakilala.<br>2. Ang mga panauhin o mga turista ay hindi halos nakadarama ng pagiging banyaga nila kung sila’y dumarating sa bansa.<br>3. Tunay na dapat ipagmalaki ang ganyang katangian ng mga Pilipino.<br>4. Ang mga Pilipino ay kinikilala sa kahusayan sa pagtanggap ng panauhin.</div><br><br> Aling pangungusap ang dapat na panghuli?", "1", "2", "3", "4", "C", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Kapag siya ay kumakanta parang may anghel na nakapaligid sayo.<br>2. Kinagigiliwan ng lahat ang kanyang boses.<br>3. Tunay na siya ay mahusay.<br>4. Si Sarah Geronimo ay magaling na mang-aawit.</div><br><br> Aling pangungusap ang dapat na mauna?", "1", "2", "3", "4", "D", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Kapag siya ay kumakanta parang may anghel na nakapaligid sayo.<br>2. Kinagigiliwan ng lahat ang kanyang boses.<br>3. Tunay na siya ay mahusay.<br>4. Si Sarah Geronimo ay magaling na mang-aawit.</div><br><br> Aling pangungusap ang dapat na pangalawa?", "1", "2", "3", "4", "B", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Kapag siya ay kumakanta parang may anghel na nakapaligid sayo.<br>2. Kinagigiliwan ng lahat ang kanyang boses.<br>3. Tunay na siya ay mahusay.<br>4. Si Sarah Geronimo ay magaling na mang-aawit.</div><br><br> Aling pangungusap ang dapat na panghuli?", "1", "2", "3", "4", "C", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Ang yaman nito kung lubusang mapag-ukulan ng pansin at magagamit nang wasto ay napakalaking salik sa kaunlaran ng tao.<br>2. Kailangan ito para sa preserbasyon ng darating pang henerasyon.<br>3. Mahalin at alagaan ang kalikasan<br>4. Pinatunayan ng kagawaran ng kalusugan, dito sa Pilipinas, na ang bansa ay napakaraming halamang-gamot sa ating napakalawak na mga kabukiran at kagubatan.</div><br><br> Aling pangungusap ang dapat na mauna?", "1", "2", "3", "4", "C", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Ang yaman nito kung lubusang mapag-ukulan ng pansin at magagamit nang wasto ay napakalaking salik sa kaunlaran ng tao.<br>2. Kailangan ito para sa preserbasyon ng darating pang henerasyon.<br>3. Mahalin at alagaan ang kalikasan<br>4. Pinatunayan ng kagawaran ng kalusugan, dito sa Pilipinas, na ang bansa ay napakaraming halamang-gamot sa ating napakalawak na mga kabukiran at kagubatan.</div><br><br> Aling pangungusap ang dapat na pangalawa?", "1", "2", "3", "4", "A", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Ang yaman nito kung lubusang mapag-ukulan ng pansin at magagamit nang wasto ay napakalaking salik sa kaunlaran ng tao.<br>2. Kailangan ito para sa preserbasyon ng darating pang henerasyon.<br>3. Mahalin at alagaan ang kalikasan<br>4. Pinatunayan ng kagawaran ng kalusugan, dito sa Pilipinas, na ang bansa ay napakaraming halamang-gamot sa ating napakalawak na mga kabukiran at kagubatan.</div><br><br> Aling pangungusap ang dapat na panghuli?", "1", "2", "3", "4", "B", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Halos lahat ng lugar ay gumagamit na ng mga makabagong teknolohiya ngayon.<br>2. Ang cellphone, laptop, tablet at ipod ilan sa mga ito.<br>3. Malaki ang naitutulong ng makabagong teknolohiya ngayon sa ating bansa.<br>4. Bukod sa magaganda ang nagagawa nito, napapabilis pa ang mga gawain.</div><br><br> Aling pangungusap ang dapat na mauna?", "1", "2", "3", "4", "C", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Halos lahat ng lugar ay gumagamit na ng mga makabagong teknolohiya ngayon.<br>2. Ang cellphone, laptop, tablet at ipod ilan sa mga ito.<br>3. Malaki ang naitutulong ng makabagong teknolohiya ngayon sa ating bansa.<br>4. Bukod sa magaganda ang nagagawa nito, napapabilis pa ang mga gawain.</div><br><br> Aling pangungusap ang dapat na pangalawa?", "1", "2", "3", "4", "B", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">1. Halos lahat ng lugar ay gumagamit na ng mga makabagong teknolohiya ngayon.<br>2. Ang cellphone, laptop, tablet at ipod ilan sa mga ito.<br>3. Malaki ang naitutulong ng makabagong teknolohiya ngayon sa ating bansa.<br>4. Bukod sa magaganda ang nagagawa nito, napapabilis pa ang mga gawain.</div><br><br> Aling pangungusap ang dapat na panghuli?", "1", "2", "3", "4", "A", "Pagbubuo ng<br> Kaisipan"],
["<div class=\"divQuest text-justify\">Malaki ang naitutulong ng paglalaro sa tao. Lumalakas ang katawan, sumisigla ang isip, nahuhubog ang disiplina, nalilinang sa katauhan ang diwa ng kumpetisyon, natuturuan ng tinatawag na <i>sportmanship</i> natututong magtiwala sa sarili, naiintindihan ang kahalagahan ng pagtutulungan at nalalaman ang lakas ng tinatawag na <i>teamwork</i>.</div><br><br> Ano ang tinutukoy na malaki ang naitutulong sa tao?", "pag-eehersisyo", "pag-iyak", "paglalaro", "pagtawa", "C", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Malaki ang naitutulong ng paglalaro sa tao. Lumalakas ang katawan, sumisigla ang isip, nahuhubog ang disiplina, nalilinang sa katauhan ang diwa ng kumpetisyon, natuturuan ng tinatawag na <i>sportmanship</i> natututong magtiwala sa sarili, naiintindihan ang kahalagahan ng pagtutulungan at nalalaman ang lakas ng tinatawag na <i>teamwork</i>.</div><br><br> Ano-ano ang mga naitutulong nito sa tao?", "pag-eehersisyo", "pag-iyak", "paglalaro", "pagtawa", "C", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Malaki ang naitutulong ng paglalaro sa tao. Lumalakas ang katawan, sumisigla ang isip, nahuhubog ang disiplina, nalilinang sa katauhan ang diwa ng kumpetisyon, natuturuan ng tinatawag na <i>sportmanship</i> natututong magtiwala sa sarili, naiintindihan ang kahalagahan ng pagtutulungan at nalalaman ang lakas ng tinatawag na <i>teamwork</i>.</div><br><br> Ano ang naituturo ng paglalaro?", "sportmanship", "pagtutulungan", "disiplina", "kumpetisyon", "A", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Malaki ang naitutulong ng paglalaro sa tao. Lumalakas ang katawan, sumisigla ang isip, nahuhubog ang disiplina, nalilinang sa katauhan ang diwa ng kumpetisyon, natuturuan ng tinatawag na <i>sportmanship</i> natututong magtiwala sa sarili, naiintindihan ang kahalagahan ng pagtutulungan at nalalaman ang lakas ng tinatawag na <i>teamwork</i>.</div><br><br> Ano ang nalilinang sa katauhan ng paglalaro?", "diwa ng kumpetisyon", "disiplina", "sportmanship", "pagtutulungan", "A", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Malaki ang naitutulong ng paglalaro sa tao. Lumalakas ang katawan, sumisigla ang isip, nahuhubog ang disiplina, nalilinang sa katauhan ang diwa ng kumpetisyon, natuturuan ng tinatawag na <i>sportmanship</i> natututong magtiwala sa sarili, naiintindihan ang kahalagahan ng pagtutulungan at nalalaman ang lakas ng tinatawag na <i>teamwork</i>.</div><br><br> Naiintindihan ang kahalagahan ng pagtutulungan at nalalaman ang lakas ng tinatawag na ___________.", "teamwork", "sportmanship", "diwa ng kumpetisyon", "disiplina", "A", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Minsan ay inabot ng gutom sa kagubatan ang isang lobo. Nakakita siya ng isang puno ng ubas na hitik ng hinog na bunga. \"Swerte ko naman. Hinog na at tila matatamis ang bunga ng ubas\", ang sabi ng lobo sa sarili. Lumundag ang lobo upang sakmalin ang isang bungkos ng hinog na ubas subalit hindi niya maabot ang bunga. Lumundag siyang muli, at muli, at muli pa subalit hindi pa rin niya maabot ang ubas. Nang mapagod na ay sumuko rin sa wakas ang lobo at malungkot na umalis palayo sa puno. \"Hindi na bale. tiyak na maasim naman ang bunga ng ubas na iyon\", ang sabi niya sa sarili.</div><br><br> Ano ang nakita ng lobo sa kagubatan?", "mansanas", "ubas", "lansones", "peras", "B", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Minsan ay inabot ng gutom sa kagubatan ang isang lobo. Nakakita siya ng isang puno ng ubas na hitik ng hinog na bunga. \"Swerte ko naman. Hinog na at tila matatamis ang bunga ng ubas\", ang sabi ng lobo sa sarili. Lumundag ang lobo upang sakmalin ang isang bungkos ng hinog na ubas subalit hindi niya maabot ang bunga. Lumundag siyang muli, at muli, at muli pa subalit hindi pa rin niya maabot ang ubas. Nang mapagod na ay sumuko rin sa wakas ang lobo at malungkot na umalis palayo sa puno. \"Hindi na bale. tiyak na maasim naman ang bunga ng ubas na iyon\", ang sabi niya sa sarili.</div><br><br> Ano ang akmang pamagat ng kwento?", "Ang Lobo at ang Ubas", "Ang Ubas", "Ang Lobo", "Wala sa nabanggit", "A", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Ang mga puno sa kagubatan ay mahalaga sa ating mga lugar. Ang mga ito ay binigay sa atin ng Panginoon. Dapat natin itong pag-ingatan at alagaan. Para maiwasan ang mga baha at <i>landslide</i> na dulot nito sa mga tao. Siya ay mayroong pagsusulit.</div><br><br> Aling pangungusap ang walang kaugnayan sa talata?", "Siya ay mayroong pagsusulit.", "Ang mga puno sa kagubatan ay<br> mahalaga sa ating mga lugar.", "Ang mga ito ay binigay<br> sa atin ng ating Panginoon.", "Dapat natin itong pag-ingatan<br> at alagaan.", "A", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Ang mga puno sa kagubatan ay mahalaga sa ating mga lugar. Ang mga ito ay binigay sa atin ng Panginoon. Dapat natin itong pag-ingatan at alagaan. Para maiwasan ang mga baha at <i>landslide</i> na dulot nito sa mga tao. Siya ay mayroong pagsusulit.</div><br><br> Ano ang maiiwasan kapag iningatan at inalagaan ang mga puno?", "baha", "landslide", "A at B", "Wala sa nabanggit", "C", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Ang mga puno sa kagubatan ay mahalaga sa ating mga lugar. Ang mga ito ay binigay sa atin ng Panginoon. Dapat natin itong pag-ingatan at alagaan. Para maiwasan ang mga baha at <i>landslide</i> na dulot nito sa mga tao. Siya ay mayroong pagsusulit.</div><br><br> Sino ang tinutukoy sa nagbigay sa atin nito?", "Panginoon ", "Puno", "Tao", "Kagubatan", "A", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Sa darating na linggo ay kaarawan ko na at gusto kong maghanda at imbitahan ang aking mga kaibigan. Para makapag-ipon ng panghanda sa aking kaarawan, ako ay umisip ng maaring pagkakitaan ng pera. <br><br>Ako ay gumagawa ng pastillas para makatulong kay nanay sa pag-ipon ng aking panghanda sa nalalapit kong kaarawan. Tuwing wala kaming klase ay nagbebenta ako ng pastillas. <br><br>Sa loob ng isang linggo ay nakaipon kami ng panghanda sa aking kaarawan. Masaya ako dahil marami akong handa at maraming tao. Kaya nagpapasalamat ako sa aking pamilya.</div><br><br> Kailan ang kaarawan ng tauhan sa kwento?", "Lunes ", "Martes", "Linggo", "Sabado", "C", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Sa darating na linggo ay kaarawan ko na at gusto kong maghanda at imbitahan ang aking mga kaibigan. Para makapag-ipon ng panghanda sa aking kaarawan, ako ay umisip ng maaring pagkakitaan ng pera. <br><br>Ako ay gumagawa ng pastillas para makatulong kay nanay sa pag-ipon ng aking panghanda sa nalalapit kong kaarawan. Tuwing wala kaming klase ay nagbebenta ako ng pastillas. <br><br>Sa loob ng isang linggo ay nakaipon kami ng panghanda sa aking kaarawan. Masaya ako dahil marami akong handa at maraming tao. Kaya nagpapasalamat ako sa aking pamilya.</div><br><br> Ano ang kanyang ginawa upang makatulong sa kanyang ina sa pag-iipon?", "nagbenta ng pastillas", "nanghingi sa tatay", "nagbenta ng gamit", "nanghingi sa nanay", "A", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Sa darating na linggo ay kaarawan ko na at gusto kong maghanda at imbitahan ang aking mga kaibigan. Para makapag-ipon ng panghanda sa aking kaarawan, ako ay umisip ng maaring pagkakitaan ng pera. <br><br>Ako ay gumagawa ng pastillas para makatulong kay nanay sa pag-ipon ng aking panghanda sa nalalapit kong kaarawan. Tuwing wala kaming klase ay nagbebenta ako ng pastillas. <br><br>Sa loob ng isang linggo ay nakaipon kami ng panghanda sa aking kaarawan. Masaya ako dahil marami akong handa at maraming tao. Kaya nagpapasalamat ako sa aking pamilya.</div><br><br> Ano ang gusto ng tauhan sa kuwento?", "maghanda", "imbitahin ang mga kaibigan", "A at B", "mamasyal", "C", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Sa darating na linggo ay kaarawan ko na at gusto kong maghanda at imbitahan ang aking mga kaibigan. Para makapag-ipon ng panghanda sa aking kaarawan, ako ay umisip ng maaring pagkakitaan ng pera. <br><br>Ako ay gumagawa ng pastillas para makatulong kay nanay sa pag-ipon ng aking panghanda sa nalalapit kong kaarawan. Tuwing wala kaming klase ay nagbebenta ako ng pastillas. <br><br>Sa loob ng isang linggo ay nakaipon kami ng panghanda sa aking kaarawan. Masaya ako dahil marami akong handa at maraming tao. Kaya nagpapasalamat ako sa aking pamilya.</div><br><br> Ano ang naging resulta ng kanyang pagtitinda ng pastillas?", "Maraming umutang", "Nagkaroon ng handa", "Maraming humingi", "Hindi natuloy ang pagdiriwang", "B", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Gumigising ng maaga si Ben tuwing umaga. Para hindi mahuli sa paaralan. Nagtatanim siya ng halaman. Pagkatapos niya kumain at maligo ay naghihintay siya sa pagdating ng kanyang school bus. Laging siyang maaga sa paaralan.</div><br><br> Aling pangungusap ang walang kaugnayan sa talata?", "Gumigising ng maaga<br> si Ben tuwing umaga.", "Nagtatanim siya ng halaman.", "Pagkatapos niya kumain at maligo<br> ay naghihintay siya sa pagdating<br> ng kanyang school bus.", "Lagi siyang maaga sa paaralan.", "B", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Nag-aral si Melissa ng kanyang mga aralin. Mahilig siyang umawit habang naglilinis. Dahil mayroon siyang pagsusulit bukas. Mataas ang nakuha niyang grado sa kanyang pagsusulit.</div><br><br> Aling pagsusulit ang walang kaugnayan sa talata?", "Nag-aral si Melissa ng <br>kanyang mga aralin.", "Mahilig siyang umawit habang<br> naglilinis.", "Dahil mayroon siyang pagsusulit bukas.", "Mataas ang nakuha niyang <br>grado sa kanyang pagsusulit.", "B", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Nag-aral si Melissa ng kanyang mga aralin. Mahilig siyang umawit habang naglilinis. Dahil mayroon siyang pagsusulit bukas. Mataas ang nakuha niyang grado sa kanyang pagsusulit.</div><br><br> Bakit kailangang mag-aral ni Melissa?", "dahil mayroon siyang dapat iulat", "dahil magagalit ang nanay nya<br> kapag mababa ang marka nya", "dahil mayroon siyang pagsusulit bukas", "lahat ng nabanggit", "C", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Nag-aral si Melissa ng kanyang mga aralin. Mahilig siyang umawit habang naglilinis. Dahil mayroon siyang pagsusulit bukas. Mataas ang nakuha niyang grado sa kanyang pagsusulit.</div><br><br> Ano ang naging epekto ng kanyang pag-aaral?", "mataas ang nakuha niyang grado<br> sa kanyang pagsusulit", "natuwa sa kanya ang nanay nya", "natuwa ang guro nya", "lahat ng nabanggit", "A", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Mahilig magtanim ng halaman si Janice sa kanilang hardin. Pinatay niya ang ilaw ng silid. Dinidiligan niya at nilalagyan ng mga pataba.<br>Sinisigurado niya na walang mamamatay sa kanyang mga alagang halaman.</div><br><br> Aling pangungusap ang walang kaugnayan sa talata?", "pinatay niya ang ilaw ng silid", "dinidiligan niya ito at<br> nilalagyan ng pataba", "sinisigurado niya na walang mamamatay<br> sa kanyang mga alagang halaman", "wala sa nabanggit", "A", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Mahilig magtanim ng halaman si Janice sa kanilang hardin. Pinatay niya ang ilaw ng silid. Dinidiligan niya at nilalagyan ng mga pataba.<br>Sinisigurado niya na walang mamamatay sa kanyang mga alagang halaman.</div><br><br> Ano ang hilig ni Janice?", "manahi", "maglaro", "mangulekta ng selyo", "magtanim ng halaman", "D", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\">Mahilig magtanim ng halaman si Janice sa kanilang hardin. Pinatay niya ang ilaw ng silid. Dinidiligan niya at nilalagyan ng mga pataba.<br>Sinisigurado niya na walang mamamatay sa kanyang mga alagang halaman.</div><br><br> Paano niya inaalagaan ang kanyang tanim?", "dinidiligan niya ito", "nilalagyan ng mga pataba", "A at B", "pinatay ang ilaw", "C", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\"><p class=\"pQuest_noIndent text-center\">Wanted: Drayber</p><br>Lalaking may kaalaman sa pagmamaneho, may edad na 20-30. Tumawag o magtext sa 09084178888 o pumunta sa B7 L3 Kalayaan St., Quezon City.</div><br><br> Anong uri ng patalastas o anunsyo ang nabanggit?", "nagbibigay ng impormasyon", "nanghihikayat", "nagbebenta ng produkto", "nag-aanunsyo ng trabaho", "D", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\"><p class=\"pQuest_noIndent text-center\">Wanted: Drayber</p><br>Lalaking may kaalaman sa pagmamaneho, may edad na 20-30. Tumawag o magtext sa 09084178888 o pumunta sa B7 L3 Kalayaan St., Quezon City.</div><br><br> Ano ang hinahanap sa anunsyo?", "mananahi", "guro", "drayber", "atleta", "C", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\"><p class=\"pQuest_noIndent text-center\">Wanted: Drayber</p><br>Lalaking may kaalaman sa pagmamaneho, may edad na 20-30. Tumawag o magtext sa 09084178888 o pumunta sa B7 L3 Kalayaan St., Quezon City.</div><br><br> Ilang taon ang hinahanap sa anunsyo?", "20-30", "25-40", "18-30", "walang limit ang edad", "A", "Pag-unawa sa<br> Binasa"],
["<div class=\"divQuest text-justify\"><p class=\"pQuest_noIndent text-center\">Wanted: Drayber</p><br>Lalaking may kaalaman sa pagmamaneho, may edad na 20-30. Tumawag o magtext sa 09084178888 o pumunta sa B7 L3 Kalayaan St., Quezon City.</div><br><br> Saan dapat pumunta ang aplikante?", "Quezon City", "Kalayaan St.", "B7 L3 Kalayaan St., Quezon City", "B7 L3", "C", "Pag-unawa sa<br> Binasa"],
["Pinakamababang antas ng wika na may tunog kurapsyon o mga salitang panlansangan:", "Balbal o Slang", "Lalawiganin", "Kolokyalismo", "Pampanitikan", "A", "Pangkalahatang<br> Impormasyon"],
["Mga salita na ginagamit lamang sa isang partikular na lugar o lalawigan:", "Lalawiganin", "Balbal o Slang", "Kolokyalismo", "Pampanitikan", "A", "Pangkalahatang<br> Impormasyon"],
["Mga salitang pinagsama na alam gamitin ng nagsasalita, kadalasan ito ay wikang Ingles at Filipino na karaniwang ginagamit sa pangkaraniwang usapan:", "Lalawiganin", "Kolokyalismo", "Balbal o Slang", "Pampanitikan", "B", "Pangkalahatang<br> Impormasyon"],
["Ito ay salitang mataas ang uri, matalinghaga at karaniwang ginagamit sa mga akdang pampanitikan:", "Kolokyalismo", "Pambansa", "Pampanitikan", "Lalawiganin", "C", "Pangkalahatang<br> Impormasyon"],
["Ito ang pagbibigay ng katulad na kahulugan sa isang salita o pagbibigay ng kaparehong katangian sa batayang salita:", "Pagsasalungat sa kahulugan", "Pagkakasingkahulugan", "Panganganak ng salita", "Mga salitang Polysemous", "B", "Pangkalahatang<br> Impormasyon"],
["Pagbibigay kahulugan sa isang salita batay sa iba’t-ibang pagpapakahulugan:", "Denotasyon", "Daglat", "Konotasyon", "Salitang Polysemous", "C", "Pangkalahatang<br> Impormasyon"],
["Sinaunang alpabeto ng mga Pilipino:", "abakada", "alibata", "balarila", "sanskrit", "B", "Pangkalahatang<br> Impormasyon"],
["Titik sa alpabetong Filipino na nagmula sa Kastila:", "Ng", "Ñ", "R", "Y", "B", "Pangkalahatang<br> Impormasyon"],
["Pinakamaliit na yunit ng tunog:", "morpema", "ponolohiya", "sintaks", "ponema", "D", "Pangkalahatang<br> Impormasyon"],
["Tiyak na kahulugan ng salita na mula sa pamantayang leksikograpiya ng wika:", "Denotasyon", "Daglat", "Konotasyon", "Salitang Polysemous", "A", "Pangkalahatang<br> Impormasyon"],
["Isang uri ng komunikasyon na nagpapahayag ng isang mensahe o kabatiran:", "tula", "talampati", "liham", "deklamasyon", "D", "Pangkalahatang<br> Impormasyon"],
["Alin sa mga sumusunod ang HINDI katangian ng wika?", "Ang wika ay binubuo<br> ng mga sagisag o simbolo.", "Ang wika ay nagbabago.", "Ang wika ay walang<br> kinalaman sa kultura.", "Ang wika ay masistemang balangkas.", "C", "Pangkalahatang<br> Impormasyon"],
["Ilan ang katinig sa alibata?", "17", "3", "14", "5", "C", "Pangkalahatang<br> Impormasyon"],
["Ito ay uri ng kantahing bayan na inaawit sa pamamangka o pagsagwan:", "Kumintang", "Kundiman", "Talindaw", "Uyayi o Hele", "C", "Pangkalahatang<br> Impormasyon"],
["Ang mga sumusunod na pahayag ay nagpapakita ng wastong gamit ng panghalip, maliban sa:", "Ang panghalip ay ginagamit<br> bilang simuno.", "Ang panghalip ay ginagamit<br> bilang pamalit sa pangngalang<br> pantao.", "Ang panghalip ay ginagamit<br> bilang panghalili sa pandiwa.", "Ang panghalip ay ginagamit<br> bilang panturo sa kinaroroonan<br> ng isang bagay.", "C", "Pangkalahatang<br> Impormasyon"],
["Alin sa mga sumusunod na pangungusap ang may pamatlig na panghalip?", "Sa kanilang bahay ako natulog kagabi.", "Dito ko lamang nilagay ang aking pitaka.", "Paborito ko ang adobong manok.", "Siya ang pinakamabait sa magkakapatid.", "B", "Pangkalahatang<br> Impormasyon"],
["Ito ang tawag sa pinaikling balangkas ng dula:", "iskrip", "storyline", "sequence treatment", "banghay", "D", "Pangkalahatang<br> Impormasyon"],
["Tawag sa katangian ng pandiwa na nagsasaad kung kailan gaganapin ang isang kilos, natapos na ba o kasalukuyan pang ginagawa:", "aspekto", "pantukoy", "kailanan", "panahunan", "A", "Pangkalahatang<br> Impormasyon"],
["Ito ay mga salitang kapag nag-iisa ay walang kahulugan ngunit ang mga ito ay makapagpapaiba ng kahulugan ng mga pangungusap:", "pang-ukol", "ingkit", "antas", "pangatnig", "B", "Pangkalahatang<br> Impormasyon"],
["Tawag sa sinadyang paglayo sa karaniwang paraan ng paggamit ng mga salita sa layuning gawaing makulay, kaakit-akit at lalong mabisa ang pahayag:", "tayutay", "idyoma", "berso", "simbolismo", "A", "Pangkalahatang<br> Impormasyon"],
["Alin sa mga salita ang hindi nagtataglay ng diptonggo?", "reyna", "daluyong", "ahiw", "kamay", "B", "Pangkalahatang<br> Impormasyon"],
["Uri ng tula na binubuo ng 14 taludtod o linya; nangangailangan ng mabigat o matinding pagkukuro-kuro:", "eliya", "himno", "soneto", "oda", "C", "Pangkalahatang<br> Impormasyon"],
["Isang makathang pampanitikan na naglalahad ng mga pangyayari na binubuo ng ibat-ibang kabanata:", "nobela", "anekdota", "dula", "maikling kwento", "A", "Pangkalahatang<br> Impormasyon"],
["Ito ay isang paraan ng pagbibigay-linaw tungkol sa isang bagay, magpapaliwanag sa katotohanan ng mga pangyayari, nilalaman ng sanaysay, pagbibigay katuturan, tala, ulat, paglalahad ng mga hakbang ng isang gawain at iba pa:", "paglalahad", "pangangatwiran", "paglalarawan", "pagpapahayag", "A", "Pangkalahatang<br> Impormasyon"],
["Siya ang may akda ng kwento ni Mabuti. Siya ay kilala sa tawag na “Aling Bebang”:", "Laulhati Bautista", "Genoveva Edroza Matute", "Liwayway Arceo", "Amparo Hernandez", "B", "Pangkalahatang<br> Impormasyon"],
["Naging guro ni Francisco Balagtas at kilala bilang si Huseng Sisiw:", "Jose Corazon De Jesus", "Florentino Collantes", "Jose Dela Cruz", "Jose Sevilla", "C", "Pangkalahatang<br> Impormasyon"],
["Siya ay itinuturing na “Ama ng Komisyon sa Wikang Filipino” dahil sa pagsulong niya na maitatag ang komisyon batay sa Seksyon 9 ng ating Saligang Batas. Siya rin ang may akda ng kwentong “Ang Mangingisda”:", "Amado V. Hernandez", "Jose Villa Panganiban", "Ponciano Pineda", "Lamberto B. Cambual", "C", "Pangkalahatang<br> Impormasyon"],
["Ano ang ipinapahiwatig ng linyang ito sa kwentong Bagong Paraiso? “Ang dalaga ay dumungaw sa binatana – masama ang kanyang pakiramdam. May kung anong nakatatakot na bagay sa kanyang katawan na ibig niyang ilabas, na ibig niyang itapon. At iyon ay umakyat sa kanyang lalamunan”:", "ang dalaga ay may nalunok<br> na masamang bagay", "ang dalaga ay may kinaing<br> di maganda", "ang dalaga ay naduwal dala<br> ng pagbubuntis", "ang dalaga ay nakainom ng lason", "C", "Pangkalahatang<br> Impormasyon"],
["Siya ang may akda ng kwentong “Sa Bagong Paraiso”.", "Efren Reyes Abueg", "Armado V. Hernandez", "Nazareno D. Bas", "Ponciano Pineda", "A", "Pangkalahatang<br> Impormasyon"],
["Siya ang tinaguriang “Hari ng balagtasan”, at kilala sa tawag na “Huseng Batute”.", "Jose Corazon De Jesus", "Florentino Collantes", "Jose Dela Cruz", "Jose Sevilla", "A", "Pangkalahatang<br> Impormasyon"],
["Sino ang manunulat ng tulang “Ang Guryon”?", "Jose Corazon De Jesus", "Florentino Collantes", "Armado V. Hernandez", "Ildefonso P. Santos", "D", "Pangkalahatang<br> Impormasyon"],
["Ano ang ipinapahiwatig ng tulang “Ang Guryon”?", "na delikado maglaro ng guryon<br> dahil ito ay bumabagsak", "na madaling masira ang mga<br> guryon at mahirap laruin", "kung paano balansehin at solusyonan<br> ang mga problema", "ang buhay ng tao ay puno<br> ng pagsubok ngunit dapat<br> maging matatag", "D", "Pangkalahatang<br> Impormasyon"],
["Siya ang mag-aaral ng medesina at kasintahan ni Juli:", "Basilio", "Isagani", "Crispin", "Simoun", "A", "Pangkalahatang<br> Impormasyon"],
["Saan sinimulan ni Dr. Rizal ang pagsusulat ng nobelang Noli Me Tangere?", "London", "Madrid", "Berlin", "Paris", "B", "Pangkalahatang<br> Impormasyon"],
["Ano ang ibig sabihin ng “Noli Me Tangere”?", "Huwag Mo Akong Salingin", "Huwag Mo Akong Tingnan", "Huwag Mo Akong Salubungin", "Huwag Mo Akong Kalimutan", "A", "Pangkalahatang<br> Impormasyon"],
["Sinu-sino ang mga mahahalagang tauhang babae sa Noli Me Tangere ang inilalarawan sa dulang “Kutsilyo, Pamaypay at Yantok”?", "Maria Clara, Victoria at Andeng", "Salome, Maria Clara at Sisa", "Donya Consolacion, Donya Pia at Maria Clara", "Sisa, Maria Clara at Donya Victoria", "B", "Pangkalahatang<br> Impormasyon"],
["Ano ang simbolismo na nakapaloob sa katauhan ni Donya Victoria?", "Mapagmahal na asawa", "Mapagmahal sa sariling bayan", "Mabait at may mababang loob", "Mapagbalat kayo at may isip kolonyal", "D", "Pangkalahatang<br> Impormasyon"],
["Mga tauhan sa Noli Me Tangere maliban kay:", "Crisostomo Ibarra", "Padre Salvi", "Padre Camorra", "Maria Clara", "C", "Pangkalahatang<br> Impormasyon"],
["Saang Ebanghelyo sa Bibliya hango ang Noli Me Tangere kung saan itinulad niya ito sa isang bulok sa lipunan na nagpapahirap sa buhay ngisang tao?", "San Mateo", "San Juan", "San Marcos", "San Lukas", "B", "Pangkalahatang<br> Impormasyon"],
["Siya ay kumakatawan sa isang isteryotipikal na dalagang Pilipina: mayumi, relihiyosa, at magalang:", "Kapitang Maria", "Maria Clara", "Sisa", "Donya Consolacion", "B", "Pangkalahatang<br> Impormasyon"],
["Saan sinimulan ni Dr. Rizal ang pagsulat ng nobelang El Filiibusterismo?", "London", "Brussel", "Madrid", "Calamba", "D", "Pangkalahatang<br> Impormasyon"],
["Kailan nalimbag ang nobelang El Filibusterismo?", "September 22, 1891", "September 20, 1891", "September 20, 1981", "September 22, 1981", "A", "Pangkalahatang<br> Impormasyon"],
["Sino ang kaibigan ni Dr. Jose Rizal na nagpahiram sa kanya ng pera upang malimbag at mailathala ng maayos ang librong El Filibusterismo?", "Ferdinand Blumentrit", "Antonio Del Pilar", "Valentin Ventura", "Jose Maria Basa", "C", "Pangkalahatang<br> Impormasyon"],
["Ano ang ibig sabihin ng katagang “El Filibusterismo”?", "Ang Paghahari ng Kapayapaan", "Ang Paghahari ng Kaayusan", "Ang Paghahari ng Kaguluhan", "Ang Paghahari ng Kasakiman", "D", "Pangkalahatang<br> Impormasyon"],
["Tungkol saan ang mga bagay na binanggit ng ulong si Imuthis sa kanilang palabas?", "Tungkol sa pangyayaring naganap<br> noong panahon ng Kastila", "Tungkol sa kabutihan ng mga kastila", "Tungkol sa mga Pilipino", "Tungkol sa kanyang amo na si Ginoong Leeds", "A", "Pangkalahatang<br> Impormasyon"],
["Kanino iniaalay ni Dr. Jose Rizal ang nobelang “El Filibusterismo”?", "Sa tatlong paring martir", "Kay Marcelo Del Pilar", "Kay Josephine Bracken", "Sa mga Pilipino", "A", "Pangkalahatang<br> Impormasyon"],
["Ang tagapayo ng mga prayle sa mga suliraning legal:", "Ben Zayb", " Simoun", "Placido Penitente", "Ginoong Pasta", "D", "Pangkalahatang<br> Impormasyon"],
["Siya ang mukhang artilyerong pari:", "Padre Camorra", "Padre Damaso", "Padre Salvi", "Padre Florentino", "A", "Pangkalahatang<br> Impormasyon"],
["Siya ang paring kaanib ng mga kabataan sa pagtatag ng Akademya ng wikang kastila:", "Padre Irene", "Padre Florentino", "Padre Salvi", "Padre Fernandez", "A", "Pangkalahatang<br> Impormasyon"],
["Ano ang pangalan ng mahiwagang ulo sa palabas ni Ginoong Leeds?", "Quiroga", "Sandoval", "Imuthis", "Makaraig", "C", "Pangkalahatang<br> Impormasyon"],
];
	$(document).ready(function(){				
				// Show or hide the sticky footer button
				$(window).scroll(function() {
					if ($(this).scrollTop() > 200) {
						$('.go-top').fadeIn(200);
					} else {
						$('.go-top').fadeOut(200);
					}
				});
				
				// Animate the scroll to top
				$('.go-top').click(function(event) {
					event.preventDefault();
					
					$('html, body').animate({scrollTop: 0}, 300);
				});
				
				$(function() {
				  $('a[href*=#]:not([href=#])').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					  var target = $(this.hash);
					  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					  if (target.length) {
						$('html,body').animate({
						  scrollTop: target.offset().top
						}, 1000);
						return false;
					  }
					}
				  });
				});	
				
				function newpage() {
					window.location = newLocation;
				}
				
				$('#mainexam').css('display', 'none');
				$('#result').css('display', 'none');
				$('#startExam').click(function(){
					$('#introexam').fadeOut(500);
					$('#mainexam').fadeIn(500);
					goExam();
				});
				
				
				$('#btnBack').click(function(){
							event.preventDefault();
							newLocation = 'quizzes.html';
							$('body').fadeOut(500, newpage);
						});
						
				$('#retake').click(function(){
					event.preventDefault();
					newLocation = 'filipino.html';
					$('body').fadeOut(500, newpage);
				});
				
				//checks if answer is correct and adds to score
					$('#choiceA').click(function(){
						ans = "A";
						$('#choiceA').attr('disabled', true);
						$('#choiceB').attr('disabled', true);
						$('#choiceC').attr('disabled', true);
						$('#choiceD').attr('disabled', true);
						if(ans == questions[val][5]){
							correct++;

							$('#choiceA').css('background-color', '#4cae4c');
							$('#assessA').addClass('glyphicon glyphicon-ok');
							if(category == "Pagkilala sa<br> Mali")
							{
								Syn++;
							}
							else if(category == "Wastong Gamit")
							{
								Ant++;
							}
							else if(category == "Talasalitaan")
							{
								Swa++;
							}
							else if(category == "Pagbubuo ng<br> Kaisipan")
							{
								Dwa++;
							}
							else if(category == "Pag-unawa sa<br> Binasa")
							{
								Ide++;
							}
							else
							{
								Cus++;
							}
						}
						else
						{
							$('#choiceA').css('background-color', '#d43f3a');
							$('#assessA').addClass('glyphicon glyphicon-remove');
							if (questions[val][5]=='B')
							{
								$('#choiceB').css('background-color', '#4cae4c');
							}
							else if (questions[val][5]=='C')
							{
								$('#choiceC').css('background-color', '#4cae4c');
							}
							else
							{
								$('#choiceD').css('background-color', '#4cae4c');
							}
						}
						countdown(5);
					});
				
					$('#choiceB').click(function(){
						ans = "B";
						$('#choiceA').attr('disabled', true);
						$('#choiceB').attr('disabled', true);
						$('#choiceC').attr('disabled', true);
						$('#choiceD').attr('disabled', true);
						if(ans == questions[val][5]){
							correct++;
							$('#choiceB').css('background-color', '#4cae4c');
							$('#assessB').addClass('glyphicon glyphicon-ok');
							if(category == "Pagkilala sa<br> Mali")
							{
								Syn++;
							}
							else if(category == "Wastong Gamit")
							{
								Ant++;
							}
							else if(category == "Talasalitaan")
							{
								Swa++;
							}
							else if(category == "Pagbubuo ng<br> Kaisipan")
							{
								Dwa++;
							}
							else if(category == "Pag-unawa sa<br> Binasa")
							{
								Ide++;
							}
							else
							{
								Cus++;
							}
						}
						else
						{
							$('#choiceB').css('background-color', '#d43f3a');
							$('#assessB').addClass('glyphicon glyphicon-remove');
							
							if (questions[val][5]=='A')
							{
								$('#choiceA').css('background-color', '#4cae4c');
							}
							else if (questions[val][5]=='C')
							{
								$('#choiceC').css('background-color', '#4cae4c');
							}
							else
							{
								$('#choiceD').css('background-color', '#4cae4c');
							}
						}
						countdown(5);
					});
					
					$('#choiceC').click(function(){
						ans = "C";
						$('#choiceA').attr('disabled', true);
						$('#choiceB').attr('disabled', true);
						$('#choiceC').attr('disabled', true);
						$('#choiceD').attr('disabled', true);
						if(ans == questions[val][5]){
							correct++;
							$('#choiceC').css('background-color', '#4cae4c');
							$('#assessC').addClass('glyphicon glyphicon-ok');
							if(category == "Pagkilala sa<br> Mali")
							{
								Syn++;
							}
							else if(category == "Wastong Gamit")
							{
								Ant++;
							}
							else if(category == "Talasalitaan")
							{
								Swa++;
							}
							else if(category == "Pagbubuo ng<br> Kaisipan")
							{
								Dwa++;
							}
							else if(category == "Pag-unawa sa<br> Binasa")
							{
								Ide++;
							}
							else
							{
								Cus++;
							}
						}
						else
						{
							$('#choiceC').css('background-color', '#d43f3a');
							$('#assessC').addClass('glyphicon glyphicon-remove');
							if (questions[val][5]=='B')
							{
								$('#choiceB').css('background-color', '#4cae4c');
							}
							else if (questions[val][5]=='A')
							{
								$('#choiceA').css('background-color', '#4cae4c');
							}
							else
							{
								$('#choiceD').css('background-color', '#4cae4c');
							}
						}
						countdown(5);
					});
					
					$('#choiceD').click(function(){
						ans = "D";
						$('#choiceA').attr('disabled', true);
						$('#choiceB').attr('disabled', true);
						$('#choiceC').attr('disabled', true);
						$('#choiceD').attr('disabled', true);
						if(ans == questions[val][5]){
							correct++;
							$('#choiceD').css('background-color', '#4cae4c');
							$('#assessD').addClass('glyphicon glyphicon-ok');
							if(category == "Pagkilala sa<br> Mali")
							{
								Syn++;
							}
							else if(category == "Wastong Gamit")
							{
								Ant++;
							}
							else if(category == "Talasalitaan")
							{
								Swa++;
							}
							else if(category == "Pagbubuo ng<br> Kaisipan")
							{
								Dwa++;
							}
							else if(category == "Pag-unawa sa<br> Binasa")
							{
								Ide++;
							}
							else
							{
								Cus++;
							}
						}
						else
						{
							$('#choiceD').css('background-color', '#d43f3a');
							$('#assessD').addClass('glyphicon glyphicon-remove');
							if (questions[val][5]=='B')
							{
								$('#choiceB').css('background-color', '#4cae4c');
							}
							else if (questions[val][5]=='C')
							{
								$('#choiceC').css('background-color', '#4cae4c');
							}
							else
							{
								$('#choiceA').css('background-color', '#4cae4c');
							}

						}
						countdown(5);
					});
				$('#reSyn').click(function(){
					event.preventDefault();
					newLocation = 'psm.html';
					$('body').fadeOut(500, newpage);
				});
				
				$('#reAnt').click(function(){
					event.preventDefault();
					newLocation = 'wg.html';
					$('body').fadeOut(500, newpage);
				});
				
				$('#reSwa').click(function(){
					event.preventDefault();
					newLocation = 'tal.html';
					$('body').fadeOut(500, newpage);
				});
				
				$('#reDwa').click(function(){
					event.preventDefault();
					newLocation = 'pnk.html';
					$('body').fadeOut(500, newpage);
				});
				
				$('#reIde').click(function(){
					event.preventDefault();
					newLocation = 'psb.html';
					$('body').fadeOut(500, newpage);
				});
				
				$('#reCus').click(function(){
					event.preventDefault();
					newLocation = 'pim.html';
					$('body').fadeOut(500, newpage);
				});
			});
				var pos=0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0, ans, val, nextArr = 0;
				var totalSyn = 0, totalAnt = 0, totalSwa = 0, totalDwa = 0, totalIde =0, totalCus = 0, totalLoi =0, totalRec = 0, category;
				var Syn = 0, Ant = 0, Swa = 0, Dwa = 0, Ide =0, Cus = 0, Loi =0, Rec = 0;
				//goes to exam page
				function _(x){
					return document.getElementById(x);
				}
				
				var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126];
				
				function shuffle(o) {
					for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
					return o;
				};

				var random = shuffle(numbers);
				
				function goExam(){
					//generate random numbers without repetition
					document.getElementById('diScore').innerHTML = correct;
					
					val = random[nextArr];
					nextArr = nextArr + 1;
                    
					//displays result if it has reached 50 questions
					if(pos > 49){
						$('#mainexam').fadeOut(500);
						$('#result').fadeIn(500);
						var verdict = "";
						wrongAns = 50 - parseInt(correct);
						
						if(correct < 50*.6)
						{
							verdict = "Sorry, you failed...";
							$('#resultVerdict').text(verdict);
						}
						else
						{
							verdict = "Congratulations! You passed...";
							$('#resultVerdict').text(verdict);
						}
						$('#totalScore').text(correct);
						var doughnutOptions = {
							//Boolean - Whether we should show a stroke on each segment
							segmentShowStroke : true,
							
							//String - The colour of each segment stroke
							segmentStrokeColor : "#fff",
							
							//Number - The width of each segment stroke
							segmentStrokeWidth : 2,
							
							//The percentage of the chart that we cut out of the middle.
							percentageInnerCutout : 50,
							
							//Boolean - Whether we should animate the chart	
							animation : true,
							
							//Number - Amount of animation steps
							animationSteps : 100,
							
							//String - Animation easing effect
							animationEasing : "easeOutBounce",
							
							//Boolean - Whether we animate the rotation of the Doughnut
							animateRotate : true,

							//Boolean - Whether we animate scaling the Doughnut from the centre
							animateScale : true,
							
							//Function - Will fire on animation completion.
							onAnimationComplete : null
						}


						// Doughnut Chart Data
						var doughnutData = [
							{
								label: "Correct",
								value : correct,
								color : "#4cae4c"
							},
							{
								label: "Mistakes",
								value : wrongAns,
								color : "#d43f3a"
							},

						]


						//Get the context of the Doughnut Chart canvas element we want to select
						var ctx = document.getElementById("doughnutChart").getContext("2d");

						// Create the Doughnut Chart
						var mydoughnutChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions); 
						
						var total = 50/correct;
						var total2 = 100/total;
						var total3 = Math.floor(total2) + '%';
						$('#percentage').text(total3);
						$('#percentage').fadeIn(500);
						
						var forSyn = totalSyn/Syn;
						var forSyn2 = 100/forSyn;
						var forSyn3 = Math.floor(forSyn2) + '%';
						if(Math.floor(forSyn2) < 50)
						{
							$('#divSyn').css('background-color', '#d9534f');
							$('#reSyn').show();
						}
						else if(Math.floor(forSyn2) < 81)
						{
							$('#divSyn').css('background-color', '#f0ad4e');
						}
						else
						{
							$('#divSyn').css('background-color', '#5cb85c');
						}
						$('#divSyn').animate({'width': forSyn3}, 750);
						$('#divSyn').text(forSyn3);
						
						var forAnt = totalAnt/Ant;
						var forAnt2 = 100/forAnt;
						var forAnt3 = Math.floor(forAnt2) + '%';
						if(Math.floor(forAnt2) < 50)
						{
							$('#divAnt').css('background-color', '#d9534f');
							$('#reAnt').show();
						}
						else if(Math.floor(forAnt2) < 81)
						{
							$('#divAnt').css('background-color', '#f0ad4e');
						}
						else
						{
							$('#divAnt').css('background-color', '#5cb85c');
						}
						$('#divAnt').animate({'width': forAnt3}, 750);
						$('#divAnt').text(forAnt3);
						
						var forSwa = totalSwa/Swa;
						var forSwa2 = 100/forSwa;
						var forSwa3 = Math.floor(forSwa2) + '%';
						if(Math.floor(forSwa2) < 50)
						{
							$('#divSwa').css('background-color', '#d9534f');
							$('#reSwa').show();
						}
						else if(Math.floor(forSwa2) < 81)
						{
							$('#divSwa').css('background-color', '#f0ad4e');
						}
						else
						{
							$('#divSwa').css('background-color', '#5cb85c');
						}
						$('#divSwa').animate({'width': forSwa3}, 750);
						$('#divSwa').text(forSwa3);
						
						var forDwa = totalDwa/Dwa;
						var forDwa2 = 100/forDwa;
						var forDwa3 = Math.floor(forDwa2) + '%';
						if(Math.floor(forDwa2) < 50)
						{
							$('#divDwa').css('background-color', '#d9534f');
							$('#reDwa').show();
						}
						else if(Math.floor(forDwa2) < 81)
						{
							$('#divDwa').css('background-color', '#f0ad4e');
						}
						else
						{
							$('#divDwa').css('background-color', '#5cb85c');
						}
						$('#divDwa').animate({'width': forDwa3}, 750);
						$('#divDwa').text(forDwa3);
						
						var forIde = totalIde/Ide;
						var forIde2 = 100/forIde;
						var forIde3 = Math.floor(forIde2) + '%';
						if(Math.floor(forIde2) < 50)
						{
							$('#divIde').css('background-color', '#d9534f');
							$('#reIde').show();
						}
						else if(Math.floor(forIde2) < 81)
						{
							$('#divIde').css('background-color', '#f0ad4e');
						}
						else
						{
							$('#divIde').css('background-color', '#5cb85c');
						}
						$('#divIde').animate({'width': forIde3}, 750);
						$('#divIde').text(forIde3);
						
						var forCus = totalCus/Cus;
						var forCus2 = 100/forCus;
						var forCus3 = Math.floor(forCus2) + '%';
						if(Math.floor(forCus2) < 50)
						{
							$('#divCus').css('background-color', '#d9534f');
							$('#reCus').show();
						}
						else if(Math.floor(forCus2) < 81)
						{
							$('#divCus').css('background-color', '#f0ad4e');
						}
						else
						{
							$('#divCus').css('background-color', '#5cb85c');
						}
						$('#divCus').animate({'width': forCus3}, 750);
						$('#divCus').text(forCus3);
						
						pos=0;
						correct=0;
						return false;
					}
					
					
					_("test_status").innerHTML = "<span class=\"pull-left\">" + questions[val][6]+ "</span><span class=\"pull-right\">" + (pos+1) + "/50</span>" ;
					//retrieves elements in multi-dimensional array and displays it on element
					question = questions[val][0];
					chA = questions[val][1];
					chB = questions[val][2];
					chC = questions[val][3];
					chD = questions[val][4];
					
					
					_("quest").innerHTML = question;
					_("choiceA").innerHTML = chA + " <span id=\"assessA\" class=\"pull-right\"></span>";
					_("choiceB").innerHTML = chB + " <span id=\"assessB\" class=\"pull-right\"></span>";
					_("choiceC").innerHTML = chC + " <span id=\"assessC\" class=\"pull-right\"></span>";
					_("choiceD").innerHTML = chD + " <span id=\"assessD\" class=\"pull-right\"></span>";
					
					if(questions[val][6] == "Pagkilala sa<br> Mali")
					{
						totalSyn++;
						category = "Pagkilala sa<br> Mali";
					}
					else if(questions[val][6] == "Wastong Gamit")
					{
						totalAnt++;
						category = "Wastong Gamit";
					}
					else if(questions[val][6] == "Talasalitaan")
					{
						totalSwa++;
						category = "Talasalitaan";
					}
					else if(questions[val][6] == "Pagbubuo ng<br> Kaisipan")
					{
						totalDwa++;
						category = "Pagbubuo ng<br> Kaisipan";
					}
					else if(questions[val][6] == "Pag-unawa sa<br> Binasa")
					{
						totalIde++;
						category = "Pag-unawa sa<br> Binasa";
					}
					else
					{
						totalCus++;
						category = "Pangkalahatang<br> Impormasyon";
					}
				}
				

				//displays main menu after 5 seconds when the app was loaded
				function countdown(secs) {
					if (secs == 2){
						$('#choiceA').css('background-color', '#5bc0de');
						$('#choiceB').css('background-color', '#5bc0de');
						$('#choiceC').css('background-color', '#5bc0de');
						$('#choiceD').css('background-color', '#5bc0de');
						$('.btn-info').css('color', 'black');
						$('#choiceA').attr('disabled', false);
						$('#choiceB').attr('disabled', false);
						$('#choiceC').attr('disabled', false);
						$('#choiceD').attr('disabled', false);
						clearTimeout(timer);
						pos++;
						goExam();
					}
					secs--;
					var timer = setTimeout('countdown('+secs+')', 1000);
				}
					
					function stop() {
						correct=0;
						pos=0;
					}
