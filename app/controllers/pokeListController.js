(function() {

	var PokeListController = function($rootScope, $scope, $window, pokeService) {
    $scope.pokeList = pokeList = {
		"1" : "Bulbasaur",
		"2" : "Ivysaur",
		"3" : "Venusaur",
		"4" : "Charmander",
		"5" : "Charmeleon",
		"6" : "Charizard",
		"7" : "Squirtle",
		"8" : "Wartortle",
		"9" : "Blastoise",
		"10" : "Caterpie",
		"11" : "Metapod",
		"12" : "Butterfree",
		"13" : "Weedle",
		"14" : "Kakuna",
		"15" : "Beedrill",
		"16" : "Pidgey",
		"17" : "Pidgeotto",
		"18" : "Pidgeot",
		"19" : "Rattata",
		"20" : "Raticate",
		"21" : "Spearow",
		"22" : "Fearow",
		"23" : "Ekans",
		"24" : "Arbok",
		"25" : "Pikachu",
		"26" : "Raichu",
		"27" : "Sandshrew",
		"28" : "Sandslash",
		"29" : "Nidoran♀",
		"30" : "Nidorina",
		"31" : "Nidoqueen",
		"32" : "Nidoran♂",
		"33" : "Nidorino",
		"34" : "Nidoking",
		"35" : "Clefairy",
		"36" : "Clefable",
		"37" : "Vulpix",
		"38" : "Ninetales",
		"39" : "Jigglypuff",
		"40" : "Wigglytuff",
		"41" : "Zubat",
		"42" : "Golbat",
		"43" : "Oddish",
		"44" : "Gloom",
		"45" : "Vileplume",
		"46" : "Paras",
		"47" : "Parasect",
		"48" : "Venonat",
		"49" : "Venomoth",
		"50" : "Diglett",
		"51" : "Dugtrio",
		"52" : "Meowth",
		"53" : "Persian",
		"54" : "Psyduck",
		"55" : "Golduck",
		"56" : "Mankey",
		"57" : "Primeape",
		"58" : "Growlithe",
		"59" : "Arcanine",
		"60" : "Poliwag",
		"61" : "Poliwhirl",
		"62" : "Poliwrath",
		"63" : "Abra",
		"64" : "Kadabra",
		"65" : "Alakazam",
		"66" : "Machop",
		"67" : "Machoke",
		"68" : "Machamp",
		"69" : "Bellsprout",
		"70" : "Weepinbell",
		"71" : "Victreebel",
		"72" : "Tentacool",
		"73" : "Tentacruel",
		"74" : "Geodude",
		"75" : "Graveler",
		"76" : "Golem",
		"77" : "Ponyta",
		"78" : "Rapidash",
		"79" : "Slowpoke",
		"80" : "Slowbro",
		"81" : "Magnemite",
		"82" : "Magneton",
		"83" : "Farfetch'd",
		"84" : "Doduo",
		"85" : "Dodrio",
		"86" : "Seel",
		"87" : "Dewgong",
		"88" : "Grimer",
		"89" : "Muk",
		"90" : "Shellder",
		"91" : "Cloyster",
		"92" : "Gastly",
		"93" : "Haunter",
		"94" : "Gengar",
		"95" : "Onix",
		"96" : "Drowzee",
		"97" : "Hypno",
		"98" : "Krabby",
		"99" : "Kingler",
		"100" : "Voltorb",
		"101" : "Electrode",
		"102" : "Exeggcute",
		"103" : "Exeggutor",
		"104" : "Cubone",
		"105" : "Marowak",
		"106" : "Hitmonlee",
		"107" : "Hitmonchan",
		"108" : "Lickitung",
		"109" : "Koffing",
		"110" : "Weezing",
		"111" : "Rhyhorn",
		"112" : "Rhydon",
		"113" : "Chansey",
		"114" : "Tangela",
		"115" : "Kangaskhan",
		"116" : "Horsea",
		"117" : "Seadra",
		"118" : "Goldeen",
		"119" : "Seaking",
		"120" : "Staryu",
		"121" : "Starmie",
		"122" : "Mr.",
		"123" : "Mime",
		"124" : "Scyther",
		"125" : "Jynx",
		"126" : "Electabuzz",
		"127" : "Magmar",
		"128" : "Pinsir",
		"129" : "Tauros",
		"130" : "Magikarp",
		"131" : "Gyarados",
		"132" : "Lapras",
		"133" : "Ditto",
		"134" : "Eevee",
		"135" : "Vaporeon",
		"136" : "Jolteon",
		"137" : "Flareon",
		"138" : "Porygon",
		"139" : "Omanyte",
		"140" : "Omastar",
		"141" : "Kabuto",
		"142" : "Kabutops",
		"143" : "Aerodactyl",
		"144" : "Snorlax",
		"145" : "Articuno",
		"146" : "Zapdos",
		"147" : "Moltres",
		"148" : "Dratini",
		"149" : "Dragonair",
		"150" : "Dragonite",
		"151" : "Mewtwo",
		"152" : "Mew",
		"153" : "Chikorita",
		"154" : "Bayleef",
		"155" : "Meganium",
		"156" : "Cyndaquil",
		"157" : "Quilava",
		"158" : "Typhlosion",
		"159" : "Totodile",
		"160" : "Croconaw",
		"161" : "Feraligatr",
		"162" : "Sentret",
		"163" : "Furret",
		"164" : "Hoothoot",
		"165" : "Noctowl",
		"166" : "Ledyba",
		"167" : "Ledian",
		"168" : "Spinarak",
		"169" : "Ariados",
		"170" : "Crobat",
		"171" : "Chinchou",
		"172" : "Lanturn",
		"173" : "Pichu",
		"174" : "Cleffa",
		"175" : "Igglybuff",
		"176" : "Togepi",
		"177" : "Togetic",
		"178" : "Natu",
		"179" : "Xatu",
		"180" : "Mareep",
		"181" : "Flaaffy",
		"182" : "Ampharos",
		"183" : "Bellossom",
		"184" : "Marill",
		"185" : "Azumarill",
		"186" : "Sudowoodo",
		"187" : "Politoed",
		"188" : "Hoppip",
		"189" : "Skiploom",
		"190" : "Jumpluff",
		"191" : "Aipom",
		"192" : "Sunkern",
		"193" : "Sunflora",
		"194" : "Yanma",
		"195" : "Wooper",
		"196" : "Quagsire",
		"197" : "Espeon",
		"198" : "Umbreon",
		"199" : "Murkrow",
		"200" : "Slowking",
		"201" : "Misdreavus",
		"202" : "Unown",
		"203" : "Wobbuffet",
		"204" : "Girafarig",
		"205" : "Pineco",
		"206" : "Forretress",
		"207" : "Dunsparce",
		"208" : "Gligar",
		"209" : "Steelix",
		"210" : "Snubbull",
		"211" : "Granbull",
		"212" : "Qwilfish",
		"213" : "Scizor",
		"214" : "Shuckle",
		"215" : "Heracross",
		"216" : "Sneasel",
		"217" : "Teddiursa",
		"218" : "Ursaring",
		"219" : "Slugma",
		"220" : "Magcargo",
		"221" : "Swinub",
		"222" : "Piloswine",
		"223" : "Corsola",
		"224" : "Remoraid",
		"225" : "Octillery",
		"226" : "Delibird",
		"227" : "Mantine",
		"228" : "Skarmory",
		"229" : "Houndour",
		"230" : "Houndoom",
		"231" : "Kingdra",
		"232" : "Phanpy",
		"233" : "Donphan",
		"234" : "Porygon2",
		"235" : "Stantler",
		"236" : "Smeargle",
		"237" : "Tyrogue",
		"238" : "Hitmontop",
		"239" : "Smoochum",
		"240" : "Elekid",
		"241" : "Magby",
		"242" : "Miltank",
		"243" : "Blissey",
		"244" : "Raikou",
		"245" : "Entei",
		"246" : "Suicune",
		"247" : "Larvitar",
		"248" : "Pupitar",
		"249" : "Tyranitar",
		"250" : "Lugia",
		"251" : "Ho-Oh",
		"252" : "Celebi",
		"253" : "Treecko",
		"254" : "Grovyle",
		"255" : "Sceptile",
		"256" : "Torchic",
		"257" : "Combusken",
		"258" : "Blaziken",
		"259" : "Mudkip",
		"260" : "Marshtomp",
		"261" : "Swampert",
		"262" : "Poochyena",
		"263" : "Mightyena",
		"264" : "Zigzagoon",
		"265" : "Linoone",
		"266" : "Wurmple",
		"267" : "Silcoon",
		"268" : "Beautifly",
		"269" : "Cascoon",
		"270" : "Dustox",
		"271" : "Lotad",
		"272" : "Lombre",
		"273" : "Ludicolo",
		"274" : "Seedot",
		"275" : "Nuzleaf",
		"276" : "Shiftry",
		"277" : "Taillow",
		"278" : "Swellow",
		"279" : "Wingull",
		"280" : "Pelipper",
		"281" : "Ralts",
		"282" : "Kirlia",
		"283" : "Gardevoir",
		"284" : "Surskit",
		"285" : "Masquerain",
		"286" : "Shroomish",
		"287" : "Breloom",
		"288" : "Slakoth",
		"289" : "Vigoroth",
		"290" : "Slaking",
		"291" : "Nincada",
		"292" : "Ninjask",
		"293" : "Shedinja",
		"294" : "Whismur",
		"295" : "Loudred",
		"296" : "Exploud",
		"297" : "Makuhita",
		"298" : "Hariyama",
		"299" : "Azurill",
		"300" : "Nosepass",
		"301" : "Skitty",
		"302" : "Delcatty",
		"303" : "Sableye",
		"304" : "Mawile",
		"305" : "Aron",
		"306" : "Lairon",
		"307" : "Aggron",
		"308" : "Meditite",
		"309" : "Medicham",
		"310" : "Electrike",
		"311" : "Manectric",
		"312" : "Plusle",
		"313" : "Minun",
		"314" : "Volbeat",
		"315" : "Illumise",
		"316" : "Roselia",
		"317" : "Gulpin",
		"318" : "Swalot",
		"319" : "Carvanha",
		"320" : "Sharpedo",
		"321" : "Wailmer",
		"322" : "Wailord",
		"323" : "Numel",
		"324" : "Camerupt",
		"325" : "Torkoal",
		"326" : "Spoink",
		"327" : "Grumpig",
		"328" : "Spinda",
		"329" : "Trapinch",
		"330" : "Vibrava",
		"331" : "Flygon",
		"332" : "Cacnea",
		"333" : "Cacturne",
		"334" : "Swablu",
		"335" : "Altaria",
		"336" : "Zangoose",
		"337" : "Seviper",
		"338" : "Lunatone",
		"339" : "Solrock",
		"340" : "Barboach",
		"341" : "Whiscash",
		"342" : "Corphish",
		"343" : "Crawdaunt",
		"344" : "Baltoy",
		"345" : "Claydol",
		"346" : "Lileep",
		"347" : "Cradily",
		"348" : "Anorith",
		"349" : "Armaldo",
		"350" : "Feebas",
		"351" : "Milotic",
		"352" : "Castform",
		"353" : "Kecleon",
		"354" : "Shuppet",
		"355" : "Banette",
		"356" : "Duskull",
		"357" : "Dusclops",
		"358" : "Tropius",
		"359" : "Chimecho",
		"360" : "Absol",
		"361" : "Wynaut",
		"362" : "Snorunt",
		"363" : "Glalie",
		"364" : "Spheal",
		"365" : "Sealeo",
		"366" : "Walrein",
		"367" : "Clamperl",
		"368" : "Huntail",
		"369" : "Gorebyss",
		"370" : "Relicanth",
		"371" : "Luvdisc",
		"372" : "Bagon",
		"373" : "Shelgon",
		"374" : "Salamence",
		"375" : "Beldum",
		"376" : "Metang",
		"377" : "Metagross",
		"378" : "Regirock",
		"379" : "Regice",
		"380" : "Registeel",
		"381" : "Latias",
		"382" : "Latios",
		"383" : "Kyogre",
		"384" : "Groudon",
		"385" : "Rayquaza",
		"386" : "Jirachi",
		"387" : "Deoxys",
		"388" : "Turtwig",
		"389" : "Grotle",
		"390" : "Torterra",
		"391" : "Chimchar",
		"392" : "Monferno",
		"393" : "Infernape",
		"394" : "Piplup",
		"395" : "Prinplup",
		"396" : "Empoleon",
		"397" : "Starly",
		"398" : "Staravia",
		"399" : "Staraptor",
		"400" : "Bidoof",
		"401" : "Bibarel",
		"402" : "Kricketot",
		"403" : "Kricketune",
		"404" : "Shinx",
		"405" : "Luxio",
		"406" : "Luxray",
		"407" : "Budew",
		"408" : "Roserade",
		"409" : "Cranidos",
		"410" : "Rampardos",
		"411" : "Shieldon",
		"412" : "Bastiodon",
		"413" : "Burmy",
		"414" : "Wormadam",
		"415" : "Mothim",
		"416" : "Combee",
		"417" : "Vespiquen",
		"418" : "Pachirisu",
		"419" : "Buizel",
		"420" : "Floatzel",
		"421" : "Cherubi",
		"422" : "Cherrim",
		"423" : "Shellos",
		"424" : "Gastrodon",
		"425" : "Ambipom",
		"426" : "Drifloon",
		"427" : "Drifblim",
		"428" : "Buneary",
		"429" : "Lopunny",
		"430" : "Mismagius",
		"431" : "Honchkrow",
		"432" : "Glameow",
		"433" : "Purugly",
		"434" : "Chingling",
		"435" : "Stunky",
		"436" : "Skuntank",
		"437" : "Bronzor",
		"438" : "Bronzong",
		"439" : "Bonsly",
		"440" : "Mime",
		"441" : "Jr.",
		"442" : "Happiny",
		"443" : "Chatot",
		"444" : "Spiritomb",
		"445" : "Gible",
		"446" : "Gabite",
		"447" : "Garchomp",
		"448" : "Munchlax",
		"449" : "Riolu",
		"450" : "Lucario",
		"451" : "Hippopotas",
		"452" : "Hippowdon",
		"453" : "Skorupi",
		"454" : "Drapion",
		"455" : "Croagunk",
		"456" : "Toxicroak",
		"457" : "Carnivine",
		"458" : "Finneon",
		"459" : "Lumineon",
		"460" : "Mantyke",
		"461" : "Snover",
		"462" : "Abomasnow",
		"463" : "Weavile",
		"464" : "Magnezone",
		"465" : "Lickilicky",
		"466" : "Rhyperior",
		"467" : "Tangrowth",
		"468" : "Electivire",
		"469" : "Magmortar",
		"470" : "Togekiss",
		"471" : "Yanmega",
		"472" : "Leafeon",
		"473" : "Glaceon",
		"474" : "Gliscor",
		"475" : "Mamoswine",
		"476" : "Porygon-Z",
		"477" : "Gallade",
		"478" : "Probopass",
		"479" : "Dusknoir",
		"480" : "Froslass",
		"481" : "Rotom",
		"482" : "Uxie",
		"483" : "Mesprit",
		"484" : "Azelf",
		"485" : "Dialga",
		"486" : "Palkia",
		"487" : "Heatran",
		"488" : "Regigigas",
		"489" : "Giratina",
		"490" : "Cresselia",
		"491" : "Phione",
		"492" : "Manaphy",
		"493" : "Darkrai",
		"494" : "Shaymin",
		"495" : "Arceus",
		"496" : "Victini",
		"497" : "Snivy",
		"498" : "Servine",
		"499" : "Serperior",
		"500" : "Tepig",
		"501" : "Pignite",
		"502" : "Emboar",
		"503" : "Oshawott",
		"504" : "Dewott",
		"505" : "Samurott",
		"506" : "Patrat",
		"507" : "Watchog",
		"508" : "Lillipup",
		"509" : "Herdier",
		"510" : "Stoutland",
		"511" : "Purrloin",
		"512" : "Liepard",
		"513" : "Pansage",
		"514" : "Simisage",
		"515" : "Pansear",
		"516" : "Simisear",
		"517" : "Panpour",
		"518" : "Simipour",
		"519" : "Munna",
		"520" : "Musharna",
		"521" : "Pidove",
		"522" : "Tranquill",
		"523" : "Unfezant",
		"524" : "Blitzle",
		"525" : "Zebstrika",
		"526" : "Roggenrola",
		"527" : "Boldore",
		"528" : "Gigalith",
		"529" : "Woobat",
		"530" : "Swoobat",
		"531" : "Drilbur",
		"532" : "Excadrill",
		"533" : "Audino",
		"534" : "Timburr",
		"535" : "Gurdurr",
		"536" : "Conkeldurr",
		"537" : "Tympole",
		"538" : "Palpitoad",
		"539" : "Seismitoad",
		"540" : "Throh",
		"541" : "Sawk",
		"542" : "Sewaddle",
		"543" : "Swadloon",
		"544" : "Leavanny",
		"545" : "Venipede",
		"546" : "Whirlipede",
		"547" : "Scolipede",
		"548" : "Cottonee",
		"549" : "Whimsicott",
		"550" : "Petilil",
		"551" : "Lilligant",
		"552" : "Basculin",
		"553" : "Sandile",
		"554" : "Krokorok",
		"555" : "Krookodile",
		"556" : "Darumaka",
		"557" : "Darmanitan",
		"558" : "Maractus",
		"559" : "Dwebble",
		"560" : "Crustle",
		"561" : "Scraggy",
		"562" : "Scrafty",
		"563" : "Sigilyph",
		"564" : "Yamask",
		"565" : "Cofagrigus",
		"566" : "Tirtouga",
		"567" : "Carracosta",
		"568" : "Archen",
		"569" : "Archeops",
		"570" : "Trubbish",
		"571" : "Garbodor",
		"572" : "Zorua",
		"573" : "Zoroark",
		"574" : "Minccino",
		"575" : "Cinccino",
		"576" : "Gothita",
		"577" : "Gothorita",
		"578" : "Gothitelle",
		"579" : "Solosis",
		"580" : "Duosion",
		"581" : "Reuniclus",
		"582" : "Ducklett",
		"583" : "Swanna",
		"584" : "Vanillite",
		"585" : "Vanillish",
		"586" : "Vanilluxe",
		"587" : "Deerling",
		"588" : "Sawsbuck",
		"589" : "Emolga",
		"590" : "Karrablast",
		"591" : "Escavalier",
		"592" : "Foongus",
		"593" : "Amoonguss",
		"594" : "Frillish",
		"595" : "Jellicent",
		"596" : "Alomomola",
		"597" : "Joltik",
		"598" : "Galvantula",
		"599" : "Ferroseed",
		"600" : "Ferrothorn",
		"601" : "Klink",
		"602" : "Klang",
		"603" : "Klinklang",
		"604" : "Tynamo",
		"605" : "Eelektrik",
		"606" : "Eelektross",
		"607" : "Elgyem",
		"608" : "Beheeyem",
		"609" : "Litwick",
		"610" : "Lampent",
		"611" : "Chandelure",
		"612" : "Axew",
		"613" : "Fraxure",
		"614" : "Haxorus",
		"615" : "Cubchoo",
		"616" : "Beartic",
		"617" : "Cryogonal",
		"618" : "Shelmet",
		"619" : "Accelgor",
		"620" : "Stunfisk",
		"621" : "Mienfoo",
		"622" : "Mienshao",
		"623" : "Druddigon",
		"624" : "Golett",
		"625" : "Golurk",
		"626" : "Pawniard",
		"627" : "Bisharp",
		"628" : "Bouffalant",
		"629" : "Rufflet",
		"630" : "Braviary",
		"631" : "Vullaby",
		"632" : "Mandibuzz",
		"633" : "Heatmor",
		"634" : "Durant",
		"635" : "Deino",
		"636" : "Zweilous",
		"637" : "Hydreigon",
		"638" : "Larvesta",
		"639" : "Volcarona",
		"640" : "Cobalion",
		"641" : "Terrakion",
		"642" : "Virizion",
		"643" : "Tornadus",
		"644" : "Thundurus",
		"645" : "Reshiram",
		"646" : "Zekrom",
		"647" : "Landorus",
		"648" : "Kyurem",
		"649" : "Keldeo",
		"650" : "Meloetta",
		"651" : "Genesect",
		"652" : "Chespin",
		"653" : "Quilladin",
		"654" : "Chesnaught",
		"655" : "Fennekin",
		"656" : "Braixen",
		"657" : "Delphox",
		"658" : "Froakie",
		"659" : "Frogadier",
		"660" : "Greninja",
		"661" : "Bunnelby",
		"662" : "Diggersby",
		"663" : "Fletchling",
		"664" : "Fletchinder",
		"665" : "Talonflame",
		"666" : "Scatterbug",
		"667" : "Spewpa",
		"668" : "Vivillon",
		"669" : "Litleo",
		"670" : "Pyroar",
		"671" : "Flabébé",
		"672" : "Floette",
		"673" : "Florges",
		"674" : "Skiddo",
		"675" : "Gogoat",
		"676" : "Pancham",
		"677" : "Pangoro",
		"678" : "Furfrou",
		"679" : "Espurr",
		"680" : "Meowstic",
		"681" : "Honedge",
		"682" : "Doublade",
		"683" : "Aegislash",
		"684" : "Spritzee",
		"685" : "Aromatisse",
		"686" : "Swirlix",
		"687" : "Slurpuff",
		"688" : "Inkay",
		"689" : "Malamar",
		"690" : "Binacle",
		"691" : "Barbaracle",
		"692" : "Skrelp",
		"693" : "Dragalge",
		"694" : "Clauncher",
		"695" : "Clawitzer",
		"696" : "Helioptile",
		"697" : "Heliolisk",
		"698" : "Tyrunt",
		"699" : "Tyrantrum",
		"700" : "Amaura",
		"701" : "Aurorus",
		"702" : "Sylveon",
		"703" : "Hawlucha",
		"704" : "Dedenne",
		"705" : "Carbink",
		"706" : "Goomy",
		"707" : "Sliggoo",
		"708" : "Goodra",
		"709" : "Klefki",
		"710" : "Phantump",
		"711" : "Trevenant",
		"712" : "Pumpkaboo",
		"713" : "Gourgeist",
		"714" : "Bergmite",
		"715" : "Avalugg",
		"716" : "Noibat",
		"717" : "Noivern",
		"718" : "Xerneas",
		"719" : "Yveltal",
		"720" : "Zygarde",
		"721" : "Diancie",
		"722" : "Hoopa",
		"723" : "Volcanion"
		};

		$scope.showPokemon = function(id) {

			var info = pokeService.getPokemon(id).then( function (response) {
				$rootScope.$broadcast('pokeDisplay', response);
			});
		};


	};

	PokeListController.$inject = ['$rootScope', '$scope', '$window', 'pokeService'];
    angular.module('myPokeApp').controller('PokeListController', PokeListController);

}());
