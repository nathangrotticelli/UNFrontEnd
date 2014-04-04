angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */

.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  //changing format for test data (removed object key that was event name)
  var events = [
   { description: 'ADDRESS!!!:\nSEARCH BAR (Grand Opening) @:\n65 Front Street Binghamton NY \n\nDOOR!!!:\n10$ Cover\n\nEVENT TIME!!!:\n9:00pm to 3:00am\n(after-party begins @ same venue at 3:00!!!)\n\n18+\n21 TO DRINK\n\nPERFORMERS!!! (order T.B.D.):\n\n-(Winner of the March 7th B.U. DJ Competition)\n\n-BARNZY\nhttps://www.facebook.com/pages/Barnzy/287809151249767\n\n-SYNDROME\nhttps://www.facebook.com/pages/Syndrome/137295163135288\n\n-FEEL REAL\nhttps://www.facebook.com/djfeelreal\n\n-DJ ALFRED MOONBOOTS\nhttps://www.facebook.com/alfred.m.williams.5?fref=ts\n\n-DJ HYPEMAN MIKE\nhttps://www.facebook.com/djhypemanmike?fref=ts\n\n-DJ mjDUKE\nhttps://www.facebook.com/djmjduke\n\n-THE TEMPLAR\nhttps://m.facebook.com/profile.php?id=283623618363281\n\n(AFTER PARTY PERFORMER SPOTS AVAILABLE)\n\n\nSAVE THE DATE: MARCH 22ND!!!\n\n*Rooms and Lodging available in connected hotel!\n*Full bar service upstairs and downstairs!\n*Incredible fusion of the best contemporary music!\n*Coat-checking!\n*Qualified security teams!\n*Professional photographers!\n*Intense lighting!\n*Joyful environment!\n*Open and inviting space!\n*A new and exciting place for nightlife in Binghamton!',
     cover: 'https://scontent-b.xx.fbcdn.net/hphotos-frc3/t1.0-9/1781910_656960461036617_1718525739_n.jpg',
     privacy: 'OPEN',
     start_time: '8:00pm, March 31st, 2014',
     location: '65 Front Street Binghamton NY',
     name: 'FOREVER GLOW',
     venue: { name: '65 Front Street Binghamton NY' },
     id: '231107280410210',
     longitude: 'Longitude: undefined',
     latitude: 'Latitude: undefined' },
   { description: 'Help raise critical funds to ensure that Chabad at Binghamton can continue to thrive and sustain itself! \n\nWe have $10,000 in matching donations already pledged by three generous donors. This means that the first $10,000 we raise by making calls will be matched DOLLAR FOR DOLLAR. However, this match expires Sunday at 4pm, so come on out and #makethecall! \n\nThere will be food, prizes, and tons of friends. \n\nThere is an optional Phoning Training on THIS Thursday at 7pm at Chabad with Alumnus Lori Ben-Ezra and Justin Hayet to give YOU the tools you need to be successful.\n\nPlease register below:\nhttp://www.chabadofbinghamton.com/templates/binghamton/article_cdo/aid/2522495/jewish/Phone-a-thon-registration.htm',
     cover: 'https://scontent-b.xx.fbcdn.net/hphotos-prn1/t1.0-9/1911825_10152036437112825_889068526_n.jpg',
     start_time: '10:00pm, April 2nd, 2014',
     location: 'Chabad at Binghamton',
     name: 'Chabad Phone-A-Thon #Makethecall',
     venue:
      { latitude: 42.08786,
        longitude: -75.959679,
        city: 'Vestal',
        state: 'NY',
        country: 'United States',
        id: '161148093688',
        street: '420 Murray Hill Road',
        zip: '13850' },
     id: '1450063491895625',
     longitude: 'Longitude: -75.959679',
     latitude: 'Latitude: 42.08786' },
   { description: 'This year\'s Spring Fling announcement will be announced live on BTV (channel 6 on campus) Monday at 8pm.\n\nEach day, between Monday and Thursday at 8pm, you will find out who will be performing on campus this year!\n\nIt\'s a 20 minute special where questions about Spring Fling featuring International Fest will be asked, each show will end with the announcement of a Spring Fling Performer.\n\nStudents will have an opportunity to live tweet their questions for the SAPB during the show @BTV6 \n\nThe announcement will be in conjunction with Pipe Dream and WHRW.',
     cover: 'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-ash3/t1.0-9/1174779_10152282294727302_171625422_n.jpg',
     privacy: 'OPEN',
     start_time: '9:30pm, April 3rd, 2014',
     location: 'Binghamton University',
     name: '2014 Spring Fling 2nd artist Announcement',
     venue:
      { latitude: 42.094140540422,
        longitude: -75.960751539691,
        city: 'Binghamton',
        state: 'NY',
        country: 'United States',
        id: '106105042754834',
        street: '4400 Vestal Parkway East',
        zip: '13850' },
     id: '211991975676202',
     longitude: 'Longitude: -75.960751539691',
     latitude: 'Latitude: 42.094140540422' },
   { description: 'University Nightlife is an app dedicated to making nightlife easier for you!\n\nDownload the app, bring it to the show, GET FREE STUFF.\nGOOGLE PLAY DOWNLOAD LINK: https://play.google.com/store/apps/details?id=com.app_bunightlife.layout\n\niTUNES DOWNLOAD LINK:\nhttps://itunes.apple.com/us/app/u-nightlife/id584570898?mt=8\n\nLive music the whole time by\nHello, Seattle\nBaked Potatoes\nSomewhere Up There\nThe Maloy Brothers \nBrian Milligram\n\n Gallagher\'s Pub Club & Grill\nSaturday April 19th, 7-10pm\n18+, $3 at the door\n\nAdditional Event Promotion Provided by Swanky Media https://www.facebook.com/swankymediany',
     cover: 'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-prn1/t1/s720x720/10001285_10152005410563977_564120441_n.jpg',
     privacy: 'OPEN',
     start_time: '8:30pm, April 5th, 2014',
     location: 'Gallagher\'s Pub Club & Grill',
     name: 'UNIVERSITY NIGHT LIFE PRESENTS: UN Launch Party with Hello, Seattle, Baked Potatoes, Somewhere Up There, The Maloy Brothers, &  Brian Milligram!',
     venue:
      { latitude: 42.4518863935,
        longitude: -75.0640402497,
        city: 'Oneonta',
        state: 'NY',
        country: 'United States',
        id: '502103413205938',
        street: '99 Main Street',
        zip: '13820' },
     id: '251467345033458',
     attending: { data: [Object], paging: [Object] },
     longitude: 'Longitude: -75.0640402497',
     latitude: 'Latitude: 42.4518863935' },
   { description: 'CU Entertainment and, Power n Soul Pro. PRESENT\n\nPRESENTS:\n\n********DE NOCHE**HighDive********\n********Two Dance floors********\n\nCome out and join Dance2XS UIUC and Dance2XS Caliente for Little Urb: The Urbanite Preview and Party! Guests can mingle with the dancers and get a small look of what we will be bringing to URBANITE XVII CHICAGO this April 26th! If you can\'t wait for Urbanite, Little Urb is the place to be!\n\nPERFORMANCES BY:\nDance 2XS UIUC\nDance 2XS Caliente \nDance 2XS Purdue\nThe RainDodgers\n\nPARTY CONTINUES:\nDJs play before, during and after the showcase!!\nDj Locolounny Entertainment\n\nHOSTED BY:\nMichael Henry\n\nWHEN: Saturday, March 15th\nTIME: Doors at 9pm\nWHERE: The HighDive \nCOST: $5 Pre-sale, $7 at the Door! \nFor tickets, contact your favorite 2XS member!! \n\nSPECIALS:\n$5 Long Islands\n$3 Corona, Modelo Especial, Negra Modelo, Dos Equis\n\nAnd be sure the check out the Workshop with Austin Lim on Sunday, March 16th! Details below.\nhttps://www.facebook.com/events/600434050051468/',
     cover: 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-ash3/t1.0-9/558739_745266738825627_612968190_n.jpg',
     privacy: 'OPEN',
     start_time: '9:30pm, April 5th, 2014',
     location: 'Champaign, Illinois',
     name: 'DE NOCHE -HighDive-LITTLE URBANITE',
     venue: { name: 'Champaign, Illinois' },
     id: '634515929935531',
     maybe: { data: [Object], paging: [Object] },
     longitude: 'Longitude: undefined',
     latitude: 'Latitude: undefined' },
   { description: 'CU Entertainment , Power n Soul Pro., and The HighDive \n\nPRESENTS:\n\n********DE NOCHE**HighDive********\n********Two Dance floors********\n\nCome out and join Dance2XS UIUC and Dance2XS Caliente for Little Urb: The Urbanite Preview and Party! Guests can mingle with the dancers and get a small look of what we will be bringing to URBANITE XVII CHICAGO this April 26th! If you can\'t wait for Urbanite, Little Urb is the place to be!\n\nPERFORMANCES BY:\nDance 2XS UIUC\nDance 2XS Caliente \nDance 2XS Purdue\nThe RainDodgers\n\nPARTY CONTINUES:\nDJs play before, during and after the showcase!!\n\nHOSTED BY:\nMichael Henry\n\nWHEN: Saturday, March 15th\nTIME: Doors at 9pm\nWHERE: The HighDive \nCOST: $5 Pre-sale, $7 at the Door! \nFor tickets, contact your favorite 2XS member!! \n\nSPECIALS:\n$5 Long Islands\n$3 Corona, Modelo Especial, Negra Modelo, Dos Equis\n\nAnd be sure the check out the Workshop with Austin Lim on Sunday, March 16th! Details below.\nhttps://www.facebook.com/events/600434050051468/',
     cover: 'https://scontent-a-iad.xx.fbcdn.net/hphotos-frc1/t1.0-9/1969296_753551201330514_1622454855_n.jpg',
     privacy: 'OPEN',
     start_time: '10:30pm, April 6th, 2014',
     location: 'Champaign, Illinois',
     name: 'DE NOCHE --HighDive--LITTLE URBANITE',
     venue: { name: 'Champaign, Illinois' },
     id: '187994541410547',
     attending: { data: [Object], paging: [Object] },
     longitude: 'Longitude: undefined',
     latitude: 'Latitude: undefined' },
     { description: 'So you missed Ultra last weekend? No worries. Come down to the Chi Phi Castle this Saturday to throw down at our first annual Ultra party. With the best sound system and the craziest light setup this school has to offer, theres no better place to start off your Saturday night. LIGHTS \n FOAM \n BUBBLES doors open at 10pm. BU ID Required',
     cover: 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-ash3/t1.0-9/10013351_10203615460173411_669052860_n.jpg',
     privacy: 'OPEN',
     start_time: '10:30pm, April 6th, 2014',
     location: '144 Washington St',
     name: 'Chi Phi Presents: Ultra',
     venue: { name: 'Binghamton, New York' },
     id: '187994541410548',
     attending: { data: [Object], paging: [Object] },
     longitude: 'Longitude: undefined',
     latitude: 'Latitude: undefined' },
     {description: 'Come jam out with Long Island indie-rock sensation NGHBRS and local favorites Lila Ignite as we raise money for the American Diabetes Assosciation! Tickets: $5, all proceeds go to charity.',
     cover: 'https://scontent-b-iad.xx.fbcdn.net/hphotos-frc1/t1.0-9/10171160_303848106433831_1748521373_n.jpg',
     privacy: 'OPEN',
     start_time: '10:30pm, April 24th, 2014',
     location: 'Binghamton University Mandela Room',
     name: 'NGHBRS at Binghamton University',
     venue: { name: 'Binghamton, New York' },
     id: '187994541410549',
     attending: { data: [Object], paging: [Object] },
     longitude: 'Longitude: undefined',
     latitude: 'Latitude: undefined' } ];

  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      // Simple index lookup
      //this will be used for individual event urls
      for(i=0;i<events.length;i++){
      	if(events[i].id==eventId){
      		return events[i];
      		break;
      	}
      }

    }
  }
});

