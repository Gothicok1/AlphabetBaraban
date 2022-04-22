( function( $ ) {

    var genresArray =
     '[{"name": "Буква A","pic": "a", "games": ["ABZU", "Alien Shooter", "Arise: A Simple Story", "Alpha Prime", "Antichamber", "Assassins Creed Chronicles: Russia", "Amnesia: The Dark Descent", "Apotheon", "American Fugitive", "Alone in the Dark", "A Plague Tale: Innocence", "Aragami", "Alan Wake", "American McGees Alice", "Ashen", "ArcaniA: Gothic 4", "Assassins Creed: Unity", "Alien: Isolation", "Arx Fatalis", "Age of Empires II: Definitive Edition"]},'+
     '{"name": "Буква B","pic": "b",  "games": ["Brothers: A Tale of Two Sons", "Black The Fall", "Beholder", "Blair Witch", "Bastion", "Battlefield 1", "Baba Is You", "Bad North", "Broforce", "Bulletstorm", "Brutal Legend", "Batman: Arkham Asylum GOTY", "Bayonetta", "Biomutant", "Blood: Fresh Supply", "Bloodstained: Ritual of the Night", "Bridge Constructor Portal", "Black Mesa", "Bully: Scholarship Edition", "Borderlands 2"]},'+
     '{"name": "Буква C","pic": "c", "games": ["Creepy Tale", "Creepy Tale 2", "Call of Duty: Ghosts", "Call of Duty: Modern Warfare 2", "Call of Duty: Modern Warfare 3", "Call of Duty 4: Modern Warfare", "Call of Duty: WWII", "Celeste", "Call of Duty: Infinite Warfare", "Call of Duty: Black Ops", "Call of Duty: Black Ops II", "Crysis 3", "Call of Duty 2", "Call of Duty: Black Ops III", "Crysis 2", "Crysis", "Cuphead", "Child of Light", "Control", "Castlevania: Lords of Shadow – Ultimate Edition"]},'+
     '{"name": "Буква D","pic": "d", "games": ["Deadlight", "Deliver Us The Moon", "Deadbolt", "Destroy All Humans!", "DUSK", "Dark", "Deadfall Adventures", "Deaths Door", "DmC: Devil May Cry", "Deaths Gambit", "Doom", "Dishonored", "Dishonored 2", "Darksiders Genesis", "Deathloop", "Doom Eternal", "Darksiders III", "Darksiders", "Darksiders II: Deathinitive Edition", "Desperados III"]},'+
     '{"name": "Буква E","pic": "e", "games": ["Erica", "Eldest Souls", "Escape Goat 2", "Enigmatis: The Mists of Ravenwood", "Elderborn", "Epistory: Typing Chronicles", "Ether One", "Everhood", "Edna & Harvey: Harveys New Eyes", "Everlasting Summer", "Enter the Matrix", "ECHO", "Enclave", "Edna & Harvey: The Breakout", "Enslaved: Odyssey to the West", "Encodya", "Empire of Sin", "E.Y.E: Divine Cybermancy", "ENDER LILIES: Quietus of the Knights", "ELEX"]},'+
     '{"name": "Буква F","pic": "f", "games": ["Firewatch", "Furi", "Fe", "Flashback", "Fez", "F.E.A.R. 3", "F.E.A.R. 2: Project Origin", "Fran Bow", "Forgotton Anne", "F.E.A.R.", "Fahrenheit", "Fate", "Face Noir", "Far Cry New Dawn", "Far Cry", "Fable Anniversary", "Far Cry Primal", "F.I.S.T.: Forged In Shadow Torch", "Fallout", "Fallout 4"]},'+
     '{"name": "Буква G","pic": "g", "games": ["GRIS", "Gato Roboto", "Gunpoint", "Glass Masquerade", "Ghostrunner", "Gods Will Be Watching", "Goetia", "Get Even", "Guacamelee!: Super Turbo Championship Edition", "Guacamelee! 2", "Ghostbusters: The Video Game", "Goodbye Deponia", "Grim Fandango", "Ghost of a Tale", "Gears 5", "Grime", "Grand Theft Auto 2", "Grand Theft Auto", "Grim Dawn", "Gothic"]},'+
     '{"name": "Буква H","pic": "h", "games": ["Her Story", "Homefront", "HUE", "Harry Potter and the Deathly Hallows - Part 2", "Harry Potter and the Deathly Hallows - Part 1", "Harry Potter and the Half-Blood Prince", "HUNTDOWN", "Hotline Miami", "Harry Potter and the Philosophers Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Goblet of Fire", "Hellblade: Senuas Sacrifice", "Harry Potter and the Prisoner of Azkaban", "Hyper Light Drifter", "Hotline Miami 2: Wrong Number", "Hitman 2", "Heavy Rain", "Hob", "Harry Potter and the Order of the Phoenix", "Hollow Knight"]},'+
     '{"name": "Буква I","pic": "i", "games": ["ICEY", "INK", "Inside", "Intrusion 2", "Ittle Dew", "Iris.Fall", "INMOST", "Injustice: Gods Among Us - Ultimate Edition", "Injustice 2", "In Other Waters", "I Am Alive", "Insanely Twisted Shadow Planet", "Indiana Jones and the Last Crusade", "I Have No Mouth, and I Must Scream", "Invisible, Inc.", "Indiana Jones and the Fate of Atlantis", "Ion Fury", "Iconoclasts", "Iron Danger", "Indivisible"]},'+
     '{"name": "Буква J","pic": "j", "games": ["Journey", "Jazzpunk", "Journey of a Roach", "Just Shapes & Beats", "Jolly Rover", "Judge Dredd: Dredd Vs. Death", "Jotun", "JYDGE", "Jet Lancer", "Journey to the Savage Planet", "J.U.L.I.A.: Among the Stars", "John Wick Hex", "Just Cause", "Jenny LeClue - Detectivu", "Jump King", "Joe Devers Lone Wolf", "Jade Empire: Special Edition", "Just Cause 4", "Just Cause 2", "Just Cause 3"]},'+
     '{"name": "Буква K","pic": "k", "games": ["KickBeat", "KARAKARA", "Knock-Knock", "Kairo", "Katana ZERO", "Kane & Lynch 2: Dog Days", "Kholat", "Kathy Rain", "Kaze and the Wild Masks", "Kung Fu Panda", "Kathy Rain", "Kona", "Killer Is Dead", "Kena: Bridge of Spirits", "Kentucky Route Zero", "Knytt Underground", "Killer7", "Kings Quest", "Kingdoms of Amalur: Reckoning", "Kingdom Come: Deliverance"]},'+
     '{"name": "Буква L","pic": "l", "games": ["LEGO The Incredibles", "LEGO Marvels Avengers", "LEGO Pirates of the Caribbean: The Video Game", "LEGO The Hobbit", "LEGO Batman 2: DC Super Heroes", "LEGO Star Wars: The Force Awakens", "LEGO Star Wars III: The Clone Wars", "LEGO The Lord of the Rings: The Video Game", "LEGO Jurassic World", "LEGO Indiana Jones: The Original Adventures", "LEGO Indiana Jones 2: The Adventure Continues", "LEGO Batman: The Videogame", "LEGO Batman 3: Beyond Gotham", "LEGO DC Super-Villains", "LEGO Harry Potter: Years 5-7", "LEGO Harry Potter: Years 1-4", "LEGO Marvel Super Heroes", "LEGO Marvel Super Heroes 2", "LEGO Star Wars: The Complete Saga", "LEGO City Undercover"]},'+
     '{"name": "Буква M","pic": "m", "games": ["My Friend Pedro", "Minecraft Dungeons", "Minoria", "Mirrors Edge", "Max Payne 2: The Fall of Max Payne", "Metal Gear Rising: Revengeance", "Mark of the Ninja: Remastered", "Murdered: Soul Suspect", "Max Payne", "Maneater", "Mirrors Edge: Catalyst", "Metro 2033 Redux", "Metro: Last Light Redux", "Magicka", "Max Payne 3", "Mortal Shell", "Marvels Avengers", "Middle-Earth: Shadow of Mordor", "Mad Max", "Middle-Earth: Shadow of War"]},'+
     '{"name": "Буква N","pic": "n", "games": ["NiGHTS into Dreams...", "Never Alone", "Nekopara Vol. 1", "Nekopara Vol. 2", "Nosferatu: The Wrath of Malachi", "Not A Hero", "Narita Boy", "Ninja Gaiden 3: Razors Edge", "Night in the Woods", "Necromunda: Hired Gun", "Need for Speed: Most Wanted (2012)", "Need for Speed: Undercover", "Ninja Gaiden Sigma 2", "Need For Speed Heat", "Need for Speed: Rivals", "Ninja Gaiden Sigma", "Need for Speed: Hot Pursuit (2010)", "Need for Speed (2015)", "Need for Speed: Payback", "NieR Replicant ver.1.22474487139..."]},'+
     '{"name": "Буква O","pic": "o", "games": ["OneShot", "Oxenfree", "Orwell: Keeping an Eye On You", "Outlast", "Omensight", "Observation", "Odallus: The Dark Call", "Observer: System Redux", "Outland", "Oddworld: New n Tasty", "Outlast II", "Owlboy", "Ori and the Blind Forest: Definitive Edition", "Orcs Must Die! 3", "Ori and the Will of the Wisps", "Oddworld: Abes Oddysee", "Of Orcs and Men", "Outer Wilds", "Overlord II", "Overlord"]},'+
     '{"name": "Буква P","pic": "p", "games": ["Portal", "Puzzle Agent", "Puzzle Agent 2", "Papers, Please", "Penumbra: Overture", "Project Warlock", "Party Hard 2", "Postal 2", "Portal 2", "Plants vs. Zombies", "Prince of Persia: The Sands of Time", "Prince of Persia: The Two Thrones", "Prototype 2", "Prototype", "Prince of Persia (2008)", "Pyre", "Prince of Persia: Warrior Within", "Psychonauts", "Psychonauts 2", "Prey (2017)"]},'+
     '{"name": "Буква Q","pic": "q", "games": ["Q.U.B.E.: Directors Cut", "Q.U.B.E. 2", "Quake", "Quadrilateral Cowboy", "Quantum Conundrum", "Quantum of Solace", "Quake II", "Quake 4", "Quantum Break", "Quern: Undying Thoughts"]},'+
     '{"name": "Буква R","pic": "r", "games": ["RUINER", "Ryse: Son of Rome", "Resident Evil 3", "Road 96", "Return of the Obra Dinn", "Return to Castle Wolfenstein", "Resident Evil: Revelations", "Resident Evil 2", "Röki", "Resident Evil 7: Biohazard", "Resident Evil Village", "Rayman Legends", "Remember Me", "Rage", "Resident Evil: HD Remaster", "Resident Evil 5", "Rise of the Tomb Raider", "Resident Evil 4", "Resident Evil 6", "Risen 2: Dark Waters"]},'+
     '{"name": "Буква S","pic": "s", "games": ["Shovel Knight", "Spec Ops: The Line", "Serious Sam HD: The First Encounter", "Serious Sam HD: The Second Encounter", "Soma", "Super Meat Boy", "Serious Sam 3: BFE", "Sniper Elite 4", "Sherlock Holmes: The Devils Daughter", "Styx: Shards of Darkness", "South Park: The Stick of Truth", "Shadow Warrior (2013)", "Shadow of the Tomb Raider", "Shadowrun Returns", "System Shock: Enhanced Edition", "Sleeping Dogs: Definitive Edition", "Saints Row: The Third", "Saints Row IV", "Star Wars Jedi: Fallen Order", "Saints Row 2"]},'+
     '{"name": "Буква T","pic": "t", "games": ["Titan Souls", "Twelve Minutes", "Titanfall 2", "Transistor", "The Darkness II", "Trine Enchanted Edition", "Trine 2", "The Medium", "The Wolf Among Us", "Thief (2014)", "The Banner Saga", "Trine 4: The Nightmare Prince", "Tomb Raider (2013)", "The Ascent", "Tomb Raider: Anniversary", "The Outer Worlds", "The Evil Within 2", "The Incredible Adventures of Van Helsing", "The Talos Principle", "The Witcher 2: Assassins of Kings"]},'+
     '{"name": "Буква U","pic": "u", "games": ["Untitled Goose Game", "Unheard", "Uurnog Uurnlimited", "Unravel 2", "Unravel", "Undertale", "Unavowed", "Unreal Tournament 3 Black", "Unreal Gold", "Underhero"]},'+
     '{"name": "Буква V","pic": "v", "games": ["Vanquish", "Valiant Hearts: The Great War", "Vampire: The Masquerade - Coteries of New York", "Valfaris", "Vessel", "VA-11 Hall-A: Cyberpunk Bartender Action", "Vigil: The Longest Night", "Vampyr", "American Fugitive", "Vampire: The Masquerade - Redemption", "Vampire: The Masquerade - Bloodlines"]},'+
     '{"name": "Буква W","pic": "w", "games": ["What Remains of Edith Finch", "Wonder Boy: The Dragons Trap", "WALL-E", "Whispers of a Machine", "Wolfenstein: The Old Blood", "World of Goo", "West of Loathing", "Wolfenstein 3D", "Warhammer 40,000: Space Marine", "Wuppo", "Wandersong", "Wolfenstein: Youngblood", "Wolfenstein II: The New Colossus", "Wolfenstein: The New Order", "Warhammer 40,000: Dawn of War", "Warhammer 40,000: Dawn of War II", "Watch Dogs", "Watch Dogs 2", "Warcraft III: Reign of Chaos", "We Happy Few"]},'+
     '{"name": "Буква X","pic": "x", "games": ["Xeodrifter", "X-Blades", "XIII (2003)", "X-Men: The Official Game", "X-Morph: Defense", "Xuan-Yuan Sword VII", "Xanadu Next", "XCOM: Chimera Squad", "XCOM: Enemy Unknown", "XCOM 2"]},'+
     '{"name": "Буква Y","pic": "y", "games": ["Yaga", "Yuppie Psycho", "Yakuza Kiwami", "Yakuza 3", "Yakuza Kiwami 2", "Yakuza 6: The Song of Life", "Yakuza 4", "Yakuza 0", "Yakuza 5", "Yakuza: Like a Dragon"]},'+
     '{"name": "Буква Z","pic": "z", "games": ["Zeno Clash", "Zen Bound 2", "Zombie Shooter 2", "Zumas Revenge!", "Zombie Driver HD", "Zombotron", "Zeno Clash II", "Z", "Zombie Night Terror", "Zombie Army 4: Dead War"]},'+
     '{"name": "random","pic": "random"}]';

     var genresActiveArray = [];

     var jsonGenres = jQuery.parseJSON(genresArray);

     function playSound(name) {
       var soundFile = document.createElement("audio");
       soundFile.src = "assets/sounds/" + name + ".mp3";
       soundFile.play();
    }

     function doGamesList(data) {
       $('.gamesList').empty();

      for ( let i = 0; i < jsonGenres[data].games.length; i++ ) {
         $( '<div>', {class: 'game_' + i} )
         .html( `<span>` + jsonGenres[data].games[i] + `</span>` ).appendTo( $( '.gamesList' ) )
       }
     }

     let lastValue = -1;

     function getRandom() {
       randomValue = Math.floor(Math.random() * (genresActiveArray.length - 0) + 0);
       if (lastValue != randomValue) {
         console.log(lastValue + " " + randomValue);
         lastValue = randomValue;
         return randomValue;
       } else {
         return getRandom();
       }
     }

     var clickedText = new Boolean(false);

     function doGenreList(data) {
       const $genreIconsClass = $( '.genre_icons' );

       for ( let i = 0; i < jsonGenres.length; i++ ) {
         $( '<div>', {class: 'icon' + i} )
         .html( `<span> <img src="assets/icons/` + jsonGenres[i].pic + `Neaktiv.png" width="55" height="65"> </span>` ).appendTo( $genreIconsClass )
          .mousedown(function(e){
            switch(e.which) {
              case 1:

                if (jsonGenres[i].name == "random") {
                  $('.gamesList').empty();

                  $( '.genre_icons > div' ).removeClass('glowEffect');
                  let randomGenre = getRandom();
                  let fromArrayIndex = $.inArray(genresActiveArray[randomGenre], jsonGenres);

                  $("#genreName").addClass('spin');
                  setTimeout(function(){
                    $("#genreName").removeClass('spin');
                    $("#genreName").text(genresActiveArray[randomGenre].name);
                    $('.icon' + fromArrayIndex).addClass('glowEffect');
                    doGamesList(fromArrayIndex);
                  }, 3000);

                } else {
                  $("#genreName").text(jsonGenres[i].name);
                  doGamesList(i);
                }
              break;
              case 2:
                genresActiveArray.push(jsonGenres[i]);
                console.log(jsonGenres[i]);
                console.log(genresActiveArray);
                $( '.icon' + i ).html( `<span> <img src="assets/icons/` + jsonGenres[i].pic + `Aktiv.png" width="55" height="65"> </span>` )
                playSound("activate");
              break;
              case 3:
                $('.icon' + i).removeClass('glowEffect');
                document.oncontextmenu = function() {return false;};
                console.log(jsonGenres[i]);
                if ($.inArray(jsonGenres[i], genresActiveArray) != -1 ) {
                  console.log("удаляем из массива");
                  genresActiveArray.splice($.inArray(jsonGenres[i], genresActiveArray), 1);
                } else {
                  console.log("нет в массиве");
                }
                console.log(genresActiveArray);
                $( '.icon' + i ).html( `<span> <img src="assets/icons/` + jsonGenres[i].pic + `Neaktiv.png" width="55" height="65"> </span>` )
                playSound("deactivate");
              break;
            }
            return true;
          });
       }
     }

     var greyArray = [];

     function positionsList() {
       greyArray = [];
       for (var i = 0; i < 20; i++) {
         greyArray.push(i);
       }

       console.log(greyArray);
       greyArray.splice(Math.floor((Math.random() * (0 - 0) + 0)), 0);
       greyArray.sort(() => Math.random() - 0.5);
     }

     $("#genreName").click(function() {
         positionsList();
         for (var i = 0; i < 19; i++) {
           makeGrey(i);
         }
     });

     function makeGrey(i){
       setTimeout(function() {
         $('.game_' + greyArray[i]).addClass('greyPosition');
         playSound("activate");
       }, ( (i+1) *1200) * i);
     }

     doGenreList(jsonGenres);

} )( jQuery );
