/*
 * jQuery.fontselect - A font selector for the Google Web Fonts api
 * Tom Moor, http://tommoor.com
 * Copyright (c) 2011 Tom Moor
 * MIT Licensed
 * @version 0.1
 */

(function($){

 $.fn.fontselect = function(options) {

  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  var fonts = [
   "ABeeZee",
   "ABeeZee:italic",
   "Abel",
   "Abril Fatface",
   "Aclonica",
   "Acme",
   "Actor",
   "Adamina",
   "Advent Pro:100",
   "Advent Pro:200",
   "Advent Pro:300",
   "Advent Pro",
   "Advent Pro:500",
   "Advent Pro:600",
   "Advent Pro:700",
   "Aguafina Script",
   "Akronim",
   "Aladin",
   "Aldrich",
   "Alef",
   "Alef:700",
   "Alegreya",
   "Alegreya:italic",
   "Alegreya:700",
   "Alegreya:700italic",
   "Alegreya:900",
   "Alegreya:900italic",
   "Alegreya SC",
   "Alegreya SC:italic",
   "Alegreya SC:700",
   "Alegreya SC:700italic",
   "Alegreya SC:900",
   "Alegreya SC:900italic",
   "Alegreya Sans:100",
   "Alegreya Sans:100italic",
   "Alegreya Sans:300",
   "Alegreya Sans:300italic",
   "Alegreya Sans",
   "Alegreya Sans:italic",
   "Alegreya Sans:500",
   "Alegreya Sans:500italic",
   "Alegreya Sans:700",
   "Alegreya Sans:700italic",
   "Alegreya Sans:800",
   "Alegreya Sans:800italic",
   "Alegreya Sans:900",
   "Alegreya Sans:900italic",
   "Alegreya Sans SC:100",
   "Alegreya Sans SC:100italic",
   "Alegreya Sans SC:300",
   "Alegreya Sans SC:300italic",
   "Alegreya Sans SC",
   "Alegreya Sans SC:italic",
   "Alegreya Sans SC:500",
   "Alegreya Sans SC:500italic",
   "Alegreya Sans SC:700",
   "Alegreya Sans SC:700italic",
   "Alegreya Sans SC:800",
   "Alegreya Sans SC:800italic",
   "Alegreya Sans SC:900",
   "Alegreya Sans SC:900italic",
   "Alex Brush",
   "Alfa Slab One",
   "Alice",
   "Alike",
   "Alike Angular",
   "Allan",
   "Allan:700",
   "Allerta",
   "Allerta Stencil",
   "Allura",
   "Almendra",
   "Almendra:italic",
   "Almendra:700",
   "Almendra:700italic",
   "Almendra Display",
   "Almendra SC",
   "Amarante",
   "Amaranth",
   "Amaranth:italic",
   "Amaranth:700",
   "Amaranth:700italic",
   "Amatic SC",
   "Amatic SC:700",
   "Amethysta",
   "Amiri",
   "Amiri:italic",
   "Amiri:700",
   "Amiri:700italic",
   "Amita",
   "Amita:700",
   "Anaheim",
   "Andada",
   "Andika",
   "Angkor",
   "Annie Use Your Telescope",
   "Anonymous Pro",
   "Anonymous Pro:italic",
   "Anonymous Pro:700",
   "Anonymous Pro:700italic",
   "Antic",
   "Antic Didone",
   "Antic Slab",
   "Anton",
   "Arapey",
   "Arapey:italic",
   "Arbutus",
   "Arbutus Slab",
   "Architects Daughter",
   "Archivo Black",
   "Archivo Narrow",
   "Archivo Narrow:italic",
   "Archivo Narrow:700",
   "Archivo Narrow:700italic",
   "Arimo",
   "Arimo:italic",
   "Arimo:700",
   "Arimo:700italic",
   "Arizonia",
   "Armata",
   "Artifika",
   "Arvo",
   "Arvo:italic",
   "Arvo:700",
   "Arvo:700italic",
   "Arya",
   "Arya:700",
   "Asap",
   "Asap:italic",
   "Asap:700",
   "Asap:700italic",
   "Asar",
   "Asset",
   "Astloch",
   "Astloch:700",
   "Asul",
   "Asul:700",
   "Atomic Age",
   "Aubrey",
   "Audiowide",
   "Autour One",
   "Average",
   "Average Sans",
   "Averia Gruesa Libre",
   "Averia Libre:300",
   "Averia Libre:300italic",
   "Averia Libre",
   "Averia Libre:italic",
   "Averia Libre:700",
   "Averia Libre:700italic",
   "Averia Sans Libre:300",
   "Averia Sans Libre:300italic",
   "Averia Sans Libre",
   "Averia Sans Libre:italic",
   "Averia Sans Libre:700",
   "Averia Sans Libre:700italic",
   "Averia Serif Libre:300",
   "Averia Serif Libre:300italic",
   "Averia Serif Libre",
   "Averia Serif Libre:italic",
   "Averia Serif Libre:700",
   "Averia Serif Libre:700italic",
   "Bad Script",
   "Balthazar",
   "Bangers",
   "Basic",
   "Battambang",
   "Battambang:700",
   "Baumans",
   "Bayon",
   "Belgrano",
   "Belleza",
   "BenchNine:300",
   "BenchNine",
   "BenchNine:700",
   "Bentham",
   "Berkshire Swash",
   "Bevan",
   "Bigelow Rules",
   "Bigshot One",
   "Bilbo",
   "Bilbo Swash Caps",
   "Biryani:200",
   "Biryani:300",
   "Biryani",
   "Biryani:600",
   "Biryani:700",
   "Biryani:800",
   "Biryani:900",
   "Bitter",
   "Bitter:italic",
   "Bitter:700",
   "Black Ops One",
   "Bokor",
   "Bonbon",
   "Boogaloo",
   "Bowlby One",
   "Bowlby One SC",
   "Brawler",
   "Bree Serif",
   "Bubblegum Sans",
   "Bubbler One",
   "Buda:300",
   "Buenard",
   "Buenard:700",
   "Butcherman",
   "Butterfly Kids",
   "Cabin",
   "Cabin:italic",
   "Cabin:500",
   "Cabin:500italic",
   "Cabin:600",
   "Cabin:600italic",
   "Cabin:700",
   "Cabin:700italic",
   "Cabin Condensed",
   "Cabin Condensed:500",
   "Cabin Condensed:600",
   "Cabin Condensed:700",
   "Cabin Sketch",
   "Cabin Sketch:700",
   "Caesar Dressing",
   "Cagliostro",
   "Calligraffitti",
   "Cambay",
   "Cambay:italic",
   "Cambay:700",
   "Cambay:700italic",
   "Cambo",
   "Candal",
   "Cantarell",
   "Cantarell:italic",
   "Cantarell:700",
   "Cantarell:700italic",
   "Cantata One",
   "Cantora One",
   "Capriola",
   "Cardo",
   "Cardo:italic",
   "Cardo:700",
   "Carme",
   "Carrois Gothic",
   "Carrois Gothic SC",
   "Carter One",
   "Catamaran:100",
   "Catamaran:200",
   "Catamaran:300",
   "Catamaran",
   "Catamaran:500",
   "Catamaran:600",
   "Catamaran:700",
   "Catamaran:800",
   "Catamaran:900",
   "Caudex",
   "Caudex:italic",
   "Caudex:700",
   "Caudex:700italic",
   "Caveat",
   "Caveat:700",
   "Caveat Brush",
   "Cedarville Cursive",
   "Ceviche One",
   "Changa One",
   "Changa One:italic",
   "Chango",
   "Chau Philomene One",
   "Chau Philomene One:italic",
   "Chela One",
   "Chelsea Market",
   "Chenla",
   "Cherry Cream Soda",
   "Cherry Swash",
   "Cherry Swash:700",
   "Chewy",
   "Chicle",
   "Chivo",
   "Chivo:italic",
   "Chivo:900",
   "Chivo:900italic",
   "Chonburi",
   "Cinzel",
   "Cinzel:700",
   "Cinzel:900",
   "Cinzel Decorative",
   "Cinzel Decorative:700",
   "Cinzel Decorative:900",
   "Clicker Script",
   "Coda",
   "Coda:800",
   "Coda Caption:800",
   "Codystar:300",
   "Codystar",
   "Combo",
   "Comfortaa:300",
   "Comfortaa",
   "Comfortaa:700",
   "Coming Soon",
   "Concert One",
   "Condiment",
   "Content",
   "Content:700",
   "Contrail One",
   "Convergence",
   "Cookie",
   "Copse",
   "Corben",
   "Corben:700",
   "Courgette",
   "Cousine",
   "Cousine:italic",
   "Cousine:700",
   "Cousine:700italic",
   "Coustard",
   "Coustard:900",
   "Covered By Your Grace",
   "Crafty Girls",
   "Creepster",
   "Crete Round",
   "Crete Round:italic",
   "Crimson Text",
   "Crimson Text:italic",
   "Crimson Text:600",
   "Crimson Text:600italic",
   "Crimson Text:700",
   "Crimson Text:700italic",
   "Croissant One",
   "Crushed",
   "Cuprum",
   "Cuprum:italic",
   "Cuprum:700",
   "Cuprum:700italic",
   "Cutive",
   "Cutive Mono",
   "Damion",
   "Dancing Script",
   "Dancing Script:700",
   "Dangrek",
   "Dawning of a New Day",
   "Days One",
   "Dekko",
   "Delius",
   "Delius Swash Caps",
   "Delius Unicase",
   "Delius Unicase:700",
   "Della Respira",
   "Denk One",
   "Devonshire",
   "Dhurjati",
   "Didact Gothic",
   "Diplomata",
   "Diplomata SC",
   "Domine",
   "Domine:700",
   "Donegal One",
   "Doppio One",
   "Dorsa",
   "Dosis:200",
   "Dosis:300",
   "Dosis",
   "Dosis:500",
   "Dosis:600",
   "Dosis:700",
   "Dosis:800",
   "Dr Sugiyama",
   "Droid Sans",
   "Droid Sans:700",
   "Droid Sans Mono",
   "Droid Serif",
   "Droid Serif:italic",
   "Droid Serif:700",
   "Droid Serif:700italic",
   "Duru Sans",
   "Dynalight",
   "EB Garamond",
   "Eagle Lake",
   "Eater",
   "Economica",
   "Economica:italic",
   "Economica:700",
   "Economica:700italic",
   "Eczar",
   "Eczar:500",
   "Eczar:600",
   "Eczar:700",
   "Eczar:800",
   "Ek Mukta:200",
   "Ek Mukta:300",
   "Ek Mukta",
   "Ek Mukta:500",
   "Ek Mukta:600",
   "Ek Mukta:700",
   "Ek Mukta:800",
   "Electrolize",
   "Elsie",
   "Elsie:900",
   "Elsie Swash Caps",
   "Elsie Swash Caps:900",
   "Emblema One",
   "Emilys Candy",
   "Engagement",
   "Englebert",
   "Enriqueta",
   "Enriqueta:700",
   "Erica One",
   "Esteban",
   "Euphoria Script",
   "Ewert",
   "Exo:100",
   "Exo:100italic",
   "Exo:200",
   "Exo:200italic",
   "Exo:300",
   "Exo:300italic",
   "Exo",
   "Exo:italic",
   "Exo:500",
   "Exo:500italic",
   "Exo:600",
   "Exo:600italic",
   "Exo:700",
   "Exo:700italic",
   "Exo:800",
   "Exo:800italic",
   "Exo:900",
   "Exo:900italic",
   "Exo 2:100",
   "Exo 2:100italic",
   "Exo 2:200",
   "Exo 2:200italic",
   "Exo 2:300",
   "Exo 2:300italic",
   "Exo 2",
   "Exo 2:italic",
   "Exo 2:500",
   "Exo 2:500italic",
   "Exo 2:600",
   "Exo 2:600italic",
   "Exo 2:700",
   "Exo 2:700italic",
   "Exo 2:800",
   "Exo 2:800italic",
   "Exo 2:900",
   "Exo 2:900italic",
   "Expletus Sans",
   "Expletus Sans:italic",
   "Expletus Sans:500",
   "Expletus Sans:500italic",
   "Expletus Sans:600",
   "Expletus Sans:600italic",
   "Expletus Sans:700",
   "Expletus Sans:700italic",
   "Fanwood Text",
   "Fanwood Text:italic",
   "Fascinate",
   "Fascinate Inline",
   "Faster One",
   "Fasthand",
   "Fauna One",
   "Federant",
   "Federo",
   "Felipa",
   "Fenix",
   "Finger Paint",
   "Fira Mono",
   "Fira Mono:700",
   "Fira Sans:300",
   "Fira Sans:300italic",
   "Fira Sans",
   "Fira Sans:italic",
   "Fira Sans:500",
   "Fira Sans:500italic",
   "Fira Sans:700",
   "Fira Sans:700italic",
   "Fjalla One",
   "Fjord One",
   "Flamenco:300",
   "Flamenco",
   "Flavors",
   "Fondamento",
   "Fondamento:italic",
   "Fontdiner Swanky",
   "Forum",
   "Francois One",
   "Freckle Face",
   "Fredericka the Great",
   "Fredoka One",
   "Freehand",
   "Fresca",
   "Frijole",
   "Fruktur",
   "Fugaz One",
   "GFS Didot",
   "GFS Neohellenic",
   "GFS Neohellenic:italic",
   "GFS Neohellenic:700",
   "GFS Neohellenic:700italic",
   "Gabriela",
   "Gafata",
   "Galdeano",
   "Galindo",
   "Gentium Basic",
   "Gentium Basic:italic",
   "Gentium Basic:700",
   "Gentium Basic:700italic",
   "Gentium Book Basic",
   "Gentium Book Basic:italic",
   "Gentium Book Basic:700",
   "Gentium Book Basic:700italic",
   "Geo",
   "Geo:italic",
   "Geostar",
   "Geostar Fill",
   "Germania One",
   "Gidugu",
   "Gilda Display",
   "Give You Glory",
   "Glass Antiqua",
   "Glegoo",
   "Glegoo:700",
   "Gloria Hallelujah",
   "Goblin One",
   "Gochi Hand",
   "Gorditas",
   "Gorditas:700",
   "Goudy Bookletter 1911",
   "Graduate",
   "Grand Hotel",
   "Gravitas One",
   "Great Vibes",
   "Griffy",
   "Gruppo",
   "Gudea",
   "Gudea:italic",
   "Gudea:700",
   "Gurajada",
   "Habibi",
   "Halant:300",
   "Halant",
   "Halant:500",
   "Halant:600",
   "Halant:700",
   "Hammersmith One",
   "Hanalei",
   "Hanalei Fill",
   "Handlee",
   "Hanuman",
   "Hanuman:700",
   "Happy Monkey",
   "Headland One",
   "Henny Penny",
   "Herr Von Muellerhoff",
   "Hind:300",
   "Hind",
   "Hind:500",
   "Hind:600",
   "Hind:700",
   "Hind Siliguri:300",
   "Hind Siliguri",
   "Hind Siliguri:500",
   "Hind Siliguri:600",
   "Hind Siliguri:700",
   "Hind Vadodara:300",
   "Hind Vadodara",
   "Hind Vadodara:500",
   "Hind Vadodara:600",
   "Hind Vadodara:700",
   "Holtwood One SC",
   "Homemade Apple",
   "Homenaje",
   "IM Fell DW Pica",
   "IM Fell DW Pica:italic",
   "IM Fell DW Pica SC",
   "IM Fell Double Pica",
   "IM Fell Double Pica:italic",
   "IM Fell Double Pica SC",
   "IM Fell English",
   "IM Fell English:italic",
   "IM Fell English SC",
   "IM Fell French Canon",
   "IM Fell French Canon:italic",
   "IM Fell French Canon SC",
   "IM Fell Great Primer",
   "IM Fell Great Primer:italic",
   "IM Fell Great Primer SC",
   "Iceberg",
   "Iceland",
   "Imprima",
   "Inconsolata",
   "Inconsolata:700",
   "Inder",
   "Indie Flower",
   "Inika",
   "Inika:700",
   "Inknut Antiqua:300",
   "Inknut Antiqua",
   "Inknut Antiqua:500",
   "Inknut Antiqua:600",
   "Inknut Antiqua:700",
   "Inknut Antiqua:800",
   "Inknut Antiqua:900",
   "Irish Grover",
   "Istok Web",
   "Istok Web:italic",
   "Istok Web:700",
   "Istok Web:700italic",
   "Italiana",
   "Italianno",
   "Itim",
   "Jacques Francois",
   "Jacques Francois Shadow",
   "Jaldi",
   "Jaldi:700",
   "Jim Nightshade",
   "Jockey One",
   "Jolly Lodger",
   "Josefin Sans:100",
   "Josefin Sans:100italic",
   "Josefin Sans:300",
   "Josefin Sans:300italic",
   "Josefin Sans",
   "Josefin Sans:italic",
   "Josefin Sans:600",
   "Josefin Sans:600italic",
   "Josefin Sans:700",
   "Josefin Sans:700italic",
   "Josefin Slab:100",
   "Josefin Slab:100italic",
   "Josefin Slab:300",
   "Josefin Slab:300italic",
   "Josefin Slab",
   "Josefin Slab:italic",
   "Josefin Slab:600",
   "Josefin Slab:600italic",
   "Josefin Slab:700",
   "Josefin Slab:700italic",
   "Joti One",
   "Judson",
   "Judson:italic",
   "Judson:700",
   "Julee",
   "Julius Sans One",
   "Junge",
   "Jura:300",
   "Jura",
   "Jura:500",
   "Jura:600",
   "Just Another Hand",
   "Just Me Again Down Here",
   "Kadwa",
   "Kadwa:700",
   "Kalam:300",
   "Kalam",
   "Kalam:700",
   "Kameron",
   "Kameron:700",
   "Kanit:100",
   "Kanit:100italic",
   "Kanit:200",
   "Kanit:200italic",
   "Kanit:300",
   "Kanit:300italic",
   "Kanit",
   "Kanit:italic",
   "Kanit:500",
   "Kanit:500italic",
   "Kanit:600",
   "Kanit:600italic",
   "Kanit:700",
   "Kanit:700italic",
   "Kanit:800",
   "Kanit:800italic",
   "Kanit:900",
   "Kanit:900italic",
   "Kantumruy:300",
   "Kantumruy",
   "Kantumruy:700",
   "Karla",
   "Karla:italic",
   "Karla:700",
   "Karla:700italic",
   "Karma:300",
   "Karma",
   "Karma:500",
   "Karma:600",
   "Karma:700",
   "Kaushan Script",
   "Kavoon",
   "Kdam Thmor",
   "Keania One",
   "Kelly Slab",
   "Kenia",
   "Khand:300",
   "Khand",
   "Khand:500",
   "Khand:600",
   "Khand:700",
   "Khmer",
   "Khula:300",
   "Khula",
   "Khula:600",
   "Khula:700",
   "Khula:800",
   "Kite One",
   "Knewave",
   "Kotta One",
   "Koulen",
   "Kranky",
   "Kreon:300",
   "Kreon",
   "Kreon:700",
   "Kristi",
   "Krona One",
   "Kurale",
   "La Belle Aurore",
   "Laila:300",
   "Laila",
   "Laila:500",
   "Laila:600",
   "Laila:700",
   "Lakki Reddy",
   "Lancelot",
   "Lateef",
   "Lato:100",
   "Lato:100italic",
   "Lato:300",
   "Lato:300italic",
   "Lato",
   "Lato:italic",
   "Lato:700",
   "Lato:700italic",
   "Lato:900",
   "Lato:900italic",
   "League Script",
   "Leckerli One",
   "Ledger",
   "Lekton",
   "Lekton:italic",
   "Lekton:700",
   "Lemon",
   "Libre Baskerville",
   "Libre Baskerville:italic",
   "Libre Baskerville:700",
   "Life Savers",
   "Life Savers:700",
   "Lilita One",
   "Lily Script One",
   "Limelight",
   "Linden Hill",
   "Linden Hill:italic",
   "Lobster",
   "Lobster Two",
   "Lobster Two:italic",
   "Lobster Two:700",
   "Lobster Two:700italic",
   "Londrina Outline",
   "Londrina Shadow",
   "Londrina Sketch",
   "Londrina Solid",
   "Lora",
   "Lora:italic",
   "Lora:700",
   "Lora:700italic",
   "Love Ya Like A Sister",
   "Loved by the King",
   "Lovers Quarrel",
   "Luckiest Guy",
   "Lusitana",
   "Lusitana:700",
   "Lustria",
   "Macondo",
   "Macondo Swash Caps",
   "Magra",
   "Magra:700",
   "Maiden Orange",
   "Mako",
   "Mallanna",
   "Mandali",
   "Marcellus",
   "Marcellus SC",
   "Marck Script",
   "Margarine",
   "Marko One",
   "Marmelad",
   "Martel:200",
   "Martel:300",
   "Martel",
   "Martel:600",
   "Martel:700",
   "Martel:800",
   "Martel:900",
   "Martel Sans:200",
   "Martel Sans:300",
   "Martel Sans",
   "Martel Sans:600",
   "Martel Sans:700",
   "Martel Sans:800",
   "Martel Sans:900",
   "Marvel",
   "Marvel:italic",
   "Marvel:700",
   "Marvel:700italic",
   "Mate",
   "Mate:italic",
   "Mate SC",
   "Maven Pro",
   "Maven Pro:500",
   "Maven Pro:700",
   "Maven Pro:900",
   "McLaren",
   "Meddon",
   "MedievalSharp",
   "Medula One",
   "Megrim",
   "Meie Script",
   "Merienda",
   "Merienda:700",
   "Merienda One",
   "Merriweather:300",
   "Merriweather:300italic",
   "Merriweather",
   "Merriweather:italic",
   "Merriweather:700",
   "Merriweather:700italic",
   "Merriweather:900",
   "Merriweather:900italic",
   "Merriweather Sans:300",
   "Merriweather Sans:300italic",
   "Merriweather Sans",
   "Merriweather Sans:italic",
   "Merriweather Sans:700",
   "Merriweather Sans:700italic",
   "Merriweather Sans:800",
   "Merriweather Sans:800italic",
   "Metal",
   "Metal Mania",
   "Metamorphous",
   "Metrophobic",
   "Michroma",
   "Milonga",
   "Miltonian",
   "Miltonian Tattoo",
   "Miniver",
   "Miss Fajardose",
   "Modak",
   "Modern Antiqua",
   "Molengo",
   "Molle:italic",
   "Monda",
   "Monda:700",
   "Monofett",
   "Monoton",
   "Monsieur La Doulaise",
   "Montaga",
   "Montez",
   "Montserrat",
   "Montserrat:700",
   "Montserrat Alternates",
   "Montserrat Alternates:700",
   "Montserrat Subrayada",
   "Montserrat Subrayada:700",
   "Moul",
   "Moulpali",
   "Mountains of Christmas",
   "Mountains of Christmas:700",
   "Mouse Memoirs",
   "Mr Bedfort",
   "Mr Dafoe",
   "Mr De Haviland",
   "Mrs Saint Delafield",
   "Mrs Sheppards",
   "Muli:300",
   "Muli:300italic",
   "Muli",
   "Muli:italic",
   "Mystery Quest",
   "NTR",
   "Neucha",
   "Neuton:200",
   "Neuton:300",
   "Neuton",
   "Neuton:italic",
   "Neuton:700",
   "Neuton:800",
   "New Rocker",
   "News Cycle",
   "News Cycle:700",
   "Niconne",
   "Nixie One",
   "Nobile",
   "Nobile:italic",
   "Nobile:700",
   "Nobile:700italic",
   "Nokora",
   "Nokora:700",
   "Norican",
   "Nosifer",
   "Nothing You Could Do",
   "Noticia Text",
   "Noticia Text:italic",
   "Noticia Text:700",
   "Noticia Text:700italic",
   "Noto Sans",
   "Noto Sans:italic",
   "Noto Sans:700",
   "Noto Sans:700italic",
   "Noto Serif",
   "Noto Serif:italic",
   "Noto Serif:700",
   "Noto Serif:700italic",
   "Nova Cut",
   "Nova Flat",
   "Nova Mono",
   "Nova Oval",
   "Nova Round",
   "Nova Script",
   "Nova Slim",
   "Nova Square",
   "Numans",
   "Nunito:300",
   "Nunito",
   "Nunito:700",
   "Odor Mean Chey",
   "Offside",
   "Old Standard TT",
   "Old Standard TT:italic",
   "Old Standard TT:700",
   "Oldenburg",
   "Oleo Script",
   "Oleo Script:700",
   "Oleo Script Swash Caps",
   "Oleo Script Swash Caps:700",
   "Open Sans:300",
   "Open Sans:300italic",
   "Open Sans",
   "Open Sans:italic",
   "Open Sans:600",
   "Open Sans:600italic",
   "Open Sans:700",
   "Open Sans:700italic",
   "Open Sans:800",
   "Open Sans:800italic",
   "Open Sans Condensed:300",
   "Open Sans Condensed:300italic",
   "Open Sans Condensed:700",
   "Oranienbaum",
   "Orbitron",
   "Orbitron:500",
   "Orbitron:700",
   "Orbitron:900",
   "Oregano",
   "Oregano:italic",
   "Orienta",
   "Original Surfer",
   "Oswald:300",
   "Oswald",
   "Oswald:700",
   "Over the Rainbow",
   "Overlock",
   "Overlock:italic",
   "Overlock:700",
   "Overlock:700italic",
   "Overlock:900",
   "Overlock:900italic",
   "Overlock SC",
   "Ovo",
   "Oxygen:300",
   "Oxygen",
   "Oxygen:700",
   "Oxygen Mono",
   "PT Mono",
   "PT Sans",
   "PT Sans:italic",
   "PT Sans:700",
   "PT Sans:700italic",
   "PT Sans Caption",
   "PT Sans Caption:700",
   "PT Sans Narrow",
   "PT Sans Narrow:700",
   "PT Serif",
   "PT Serif:italic",
   "PT Serif:700",
   "PT Serif:700italic",
   "PT Serif Caption",
   "PT Serif Caption:italic",
   "Pacifico",
   "Palanquin:100",
   "Palanquin:200",
   "Palanquin:300",
   "Palanquin",
   "Palanquin:500",
   "Palanquin:600",
   "Palanquin:700",
   "Palanquin Dark",
   "Palanquin Dark:500",
   "Palanquin Dark:600",
   "Palanquin Dark:700",
   "Paprika",
   "Parisienne",
   "Passero One",
   "Passion One",
   "Passion One:700",
   "Passion One:900",
   "Pathway Gothic One",
   "Patrick Hand",
   "Patrick Hand SC",
   "Patua One",
   "Paytone One",
   "Peddana",
   "Peralta",
   "Permanent Marker",
   "Petit Formal Script",
   "Petrona",
   "Philosopher",
   "Philosopher:italic",
   "Philosopher:700",
   "Philosopher:700italic",
   "Piedra",
   "Pinyon Script",
   "Pirata One",
   "Plaster",
   "Play",
   "Play:700",
   "Playball",
   "Playfair Display",
   "Playfair Display:italic",
   "Playfair Display:700",
   "Playfair Display:700italic",
   "Playfair Display:900",
   "Playfair Display:900italic",
   "Playfair Display SC",
   "Playfair Display SC:italic",
   "Playfair Display SC:700",
   "Playfair Display SC:700italic",
   "Playfair Display SC:900",
   "Playfair Display SC:900italic",
   "Podkova",
   "Podkova:700",
   "Poiret One",
   "Poller One",
   "Poly",
   "Poly:italic",
   "Pompiere",
   "Pontano Sans",
   "Poppins:300",
   "Poppins",
   "Poppins:500",
   "Poppins:600",
   "Poppins:700",
   "Port Lligat Sans",
   "Port Lligat Slab",
   "Pragati Narrow",
   "Pragati Narrow:700",
   "Prata",
   "Preahvihear",
   "Press Start 2P",
   "Princess Sofia",
   "Prociono",
   "Prosto One",
   "Puritan",
   "Puritan:italic",
   "Puritan:700",
   "Puritan:700italic",
   "Purple Purse",
   "Quando",
   "Quantico",
   "Quantico:italic",
   "Quantico:700",
   "Quantico:700italic",
   "Quattrocento",
   "Quattrocento:700",
   "Quattrocento Sans",
   "Quattrocento Sans:italic",
   "Quattrocento Sans:700",
   "Quattrocento Sans:700italic",
   "Questrial",
   "Quicksand:300",
   "Quicksand",
   "Quicksand:700",
   "Quintessential",
   "Qwigley",
   "Racing Sans One",
   "Radley",
   "Radley:italic",
   "Rajdhani:300",
   "Rajdhani",
   "Rajdhani:500",
   "Rajdhani:600",
   "Rajdhani:700",
   "Raleway:100",
   "Raleway:100italic",
   "Raleway:200",
   "Raleway:200italic",
   "Raleway:300",
   "Raleway:300italic",
   "Raleway",
   "Raleway:italic",
   "Raleway:500",
   "Raleway:500italic",
   "Raleway:600",
   "Raleway:600italic",
   "Raleway:700",
   "Raleway:700italic",
   "Raleway:800",
   "Raleway:800italic",
   "Raleway:900",
   "Raleway:900italic",
   "Raleway Dots",
   "Ramabhadra",
   "Ramaraja",
   "Rambla",
   "Rambla:italic",
   "Rambla:700",
   "Rambla:700italic",
   "Rammetto One",
   "Ranchers",
   "Rancho",
   "Ranga",
   "Ranga:700",
   "Rationale",
   "Ravi Prakash",
   "Redressed",
   "Reenie Beanie",
   "Revalia",
   "Rhodium Libre",
   "Ribeye",
   "Ribeye Marrow",
   "Righteous",
   "Risque",
   "Roboto:100",
   "Roboto:100italic",
   "Roboto:300",
   "Roboto:300italic",
   "Roboto",
   "Roboto:italic",
   "Roboto:500",
   "Roboto:500italic",
   "Roboto:700",
   "Roboto:700italic",
   "Roboto:900",
   "Roboto:900italic",
   "Roboto Condensed:300",
   "Roboto Condensed:300italic",
   "Roboto Condensed",
   "Roboto Condensed:italic",
   "Roboto Condensed:700",
   "Roboto Condensed:700italic",
   "Roboto Mono:100",
   "Roboto Mono:100italic",
   "Roboto Mono:300",
   "Roboto Mono:300italic",
   "Roboto Mono",
   "Roboto Mono:italic",
   "Roboto Mono:500",
   "Roboto Mono:500italic",
   "Roboto Mono:700",
   "Roboto Mono:700italic",
   "Roboto Slab:100",
   "Roboto Slab:300",
   "Roboto Slab",
   "Roboto Slab:700",
   "Rochester",
   "Rock Salt",
   "Rokkitt",
   "Rokkitt:700",
   "Romanesco",
   "Ropa Sans",
   "Ropa Sans:italic",
   "Rosario",
   "Rosario:italic",
   "Rosario:700",
   "Rosario:700italic",
   "Rosarivo",
   "Rosarivo:italic",
   "Rouge Script",
   "Rozha One",
   "Rubik:300",
   "Rubik:300italic",
   "Rubik",
   "Rubik:italic",
   "Rubik:500",
   "Rubik:500italic",
   "Rubik:700",
   "Rubik:700italic",
   "Rubik:900",
   "Rubik:900italic",
   "Rubik Mono One",
   "Rubik One",
   "Ruda",
   "Ruda:700",
   "Ruda:900",
   "Rufina",
   "Rufina:700",
   "Ruge Boogie",
   "Ruluko",
   "Rum Raisin",
   "Ruslan Display",
   "Russo One",
   "Ruthie",
   "Rye",
   "Sacramento",
   "Sahitya",
   "Sahitya:700",
   "Sail",
   "Salsa",
   "Sanchez",
   "Sanchez:italic",
   "Sancreek",
   "Sansita One",
   "Sarala",
   "Sarala:700",
   "Sarina",
   "Sarpanch",
   "Sarpanch:500",
   "Sarpanch:600",
   "Sarpanch:700",
   "Sarpanch:800",
   "Sarpanch:900",
   "Satisfy",
   "Scada",
   "Scada:italic",
   "Scada:700",
   "Scada:700italic",
   "Scheherazade",
   "Scheherazade:700",
   "Schoolbell",
   "Seaweed Script",
   "Sevillana",
   "Seymour One",
   "Shadows Into Light",
   "Shadows Into Light Two",
   "Shanti",
   "Share",
   "Share:italic",
   "Share:700",
   "Share:700italic",
   "Share Tech",
   "Share Tech Mono",
   "Shojumaru",
   "Short Stack",
   "Siemreap",
   "Sigmar One",
   "Signika:300",
   "Signika",
   "Signika:600",
   "Signika:700",
   "Signika Negative:300",
   "Signika Negative",
   "Signika Negative:600",
   "Signika Negative:700",
   "Simonetta",
   "Simonetta:italic",
   "Simonetta:900",
   "Simonetta:900italic",
   "Sintony",
   "Sintony:700",
   "Sirin Stencil",
   "Six Caps",
   "Skranji",
   "Skranji:700",
   "Slabo 13px",
   "Slabo 27px",
   "Slackey",
   "Smokum",
   "Smythe",
   "Sniglet",
   "Sniglet:800",
   "Snippet",
   "Snowburst One",
   "Sofadi One",
   "Sofia",
   "Sonsie One",
   "Sorts Mill Goudy",
   "Sorts Mill Goudy:italic",
   "Source Code Pro:200",
   "Source Code Pro:300",
   "Source Code Pro",
   "Source Code Pro:500",
   "Source Code Pro:600",
   "Source Code Pro:700",
   "Source Code Pro:900",
   "Source Sans Pro:200",
   "Source Sans Pro:200italic",
   "Source Sans Pro:300",
   "Source Sans Pro:300italic",
   "Source Sans Pro",
   "Source Sans Pro:italic",
   "Source Sans Pro:600",
   "Source Sans Pro:600italic",
   "Source Sans Pro:700",
   "Source Sans Pro:700italic",
   "Source Sans Pro:900",
   "Source Sans Pro:900italic",
   "Source Serif Pro",
   "Source Serif Pro:600",
   "Source Serif Pro:700",
   "Special Elite",
   "Spicy Rice",
   "Spinnaker",
   "Spirax",
   "Squada One",
   "Sree Krushnadevaraya",
   "Stalemate",
   "Stalinist One",
   "Stardos Stencil",
   "Stardos Stencil:700",
   "Stint Ultra Condensed",
   "Stint Ultra Expanded",
   "Stoke:300",
   "Stoke",
   "Strait",
   "Sue Ellen Francisco",
   "Sumana",
   "Sumana:700",
   "Sunshiney",
   "Supermercado One",
   "Sura",
   "Sura:700",
   "Suranna",
   "Suravaram",
   "Suwannaphum",
   "Swanky and Moo Moo",
   "Syncopate",
   "Syncopate:700",
   "Tangerine",
   "Tangerine:700",
   "Taprom",
   "Tauri",
   "Teko:300",
   "Teko",
   "Teko:500",
   "Teko:600",
   "Teko:700",
   "Telex",
   "Tenali Ramakrishna",
   "Tenor Sans",
   "Text Me One",
   "The Girl Next Door",
   "Tienne",
   "Tienne:700",
   "Tienne:900",
   "Tillana",
   "Tillana:500",
   "Tillana:600",
   "Tillana:700",
   "Tillana:800",
   "Timmana",
   "Tinos",
   "Tinos:italic",
   "Tinos:700",
   "Tinos:700italic",
   "Titan One",
   "Titillium Web:200",
   "Titillium Web:200italic",
   "Titillium Web:300",
   "Titillium Web:300italic",
   "Titillium Web",
   "Titillium Web:italic",
   "Titillium Web:600",
   "Titillium Web:600italic",
   "Titillium Web:700",
   "Titillium Web:700italic",
   "Titillium Web:900",
   "Trade Winds",
   "Trocchi",
   "Trochut",
   "Trochut:italic",
   "Trochut:700",
   "Trykker",
   "Tulpen One",
   "Ubuntu:300",
   "Ubuntu:300italic",
   "Ubuntu",
   "Ubuntu:italic",
   "Ubuntu:500",
   "Ubuntu:500italic",
   "Ubuntu:700",
   "Ubuntu:700italic",
   "Ubuntu Condensed",
   "Ubuntu Mono",
   "Ubuntu Mono:italic",
   "Ubuntu Mono:700",
   "Ubuntu Mono:700italic",
   "Ultra",
   "Uncial Antiqua",
   "Underdog",
   "Unica One",
   "UnifrakturCook:700",
   "UnifrakturMaguntia",
   "Unkempt",
   "Unkempt:700",
   "Unlock",
   "Unna",
   "VT323",
   "Vampiro One",
   "Varela",
   "Varela Round",
   "Vast Shadow",
   "Vesper Libre",
   "Vesper Libre:500",
   "Vesper Libre:700",
   "Vesper Libre:900",
   "Vibur",
   "Vidaloka",
   "Viga",
   "Voces",
   "Volkhov",
   "Volkhov:italic",
   "Volkhov:700",
   "Volkhov:700italic",
   "Vollkorn",
   "Vollkorn:italic",
   "Vollkorn:700",
   "Vollkorn:700italic",
   "Voltaire",
   "Waiting for the Sunrise",
   "Wallpoet",
   "Walter Turncoat",
   "Warnes",
   "Wellfleet",
   "Wendy One",
   "Wire One",
   "Work Sans:100",
   "Work Sans:200",
   "Work Sans:300",
   "Work Sans",
   "Work Sans:500",
   "Work Sans:600",
   "Work Sans:700",
   "Work Sans:800",
   "Work Sans:900",
   "Yanone Kaffeesatz:200",
   "Yanone Kaffeesatz:300",
   "Yanone Kaffeesatz",
   "Yanone Kaffeesatz:700",
   "Yantramanav:100",
   "Yantramanav:300",
   "Yantramanav",
   "Yantramanav:500",
   "Yantramanav:700",
   "Yantramanav:900",
   "Yellowtail",
   "Yeseva One",
   "Yesteryear",
   "Zeyada"];

    var settings = {
     style: options.style ? options.style : 'font-select',
     placeholder: options.placeholder ? options.placeholder : 'Select a font',
     lookahead: options.lookahead ? options.lookahead : 2,
     api: '//fonts.googleapis.com/css?family=',
     addNoneOption: true
    };

  var Fontselect = (function(){

   function Fontselect(original, o){
    this.$original = $(original);
    this.options = o;
    this.active = false;
    this.setupHtml();
    this.getVisibleFonts();
    this.bindEvents();

    var font = this.$original.val();
    if (font) {
     this.updateSelected();
     this.addFontLink(font);
    }
   }

   Fontselect.prototype.bindEvents = function(){

    $('li', this.$results)
        .click(__bind(this.selectFont, this))
        .mouseenter(__bind(this.activateFont, this))
        .mouseleave(__bind(this.deactivateFont, this));

    $('span', this.$select).click(__bind(this.toggleDrop, this));
    this.$arrow.click(__bind(this.toggleDrop, this));
   };

   Fontselect.prototype.toggleDrop = function(ev){

    if(this.active){
     this.$element.removeClass('font-select-active');
     this.$drop.hide();
     clearInterval(this.visibleInterval);

    } else {
     this.$element.addClass('font-select-active');
     this.$drop.show();
     this.moveToSelected();
     this.visibleInterval = setInterval(__bind(this.getVisibleFonts, this), 500);
    }

    this.active = !this.active;
   };

   Fontselect.prototype.selectFont = function(){

    var font = $('li.active', this.$results).data('value');
    this.$original.val(font).change();
    this.updateSelected();
    this.toggleDrop();
   };

   Fontselect.prototype.moveToSelected = function(){

    var $li, font = this.$original.val();

    if (font){
     $li = $("li[data-value='"+ font +"']", this.$results);
    } else {
     $li = $("li", this.$results).first();
    }

    this.$results.scrollTop($li.addClass('active').position().top);
   };

   Fontselect.prototype.activateFont = function(ev){
    $('li.active', this.$results).removeClass('active');
    $(ev.currentTarget).addClass('active');
   };

   Fontselect.prototype.deactivateFont = function(ev){

    $(ev.currentTarget).removeClass('active');
   };

   Fontselect.prototype.updateSelected = function(){

    var font = this.$original.val();
    $('span', this.$element).text(this.toReadable(font)).css(this.toStyle(font));
   };

   Fontselect.prototype.setupHtml = function(){

    this.$original.empty().hide();
    this.$element = $('<div>', {'class': this.options.style});
    this.$arrow = $('<div><b></b></div>');
    this.$select = $('<a><span>'+ this.options.placeholder +'</span></a>');
    this.$drop = $('<div>', {'class': 'fs-drop'});
    this.$results = $('<ul>', {'class': 'fs-results'});
    this.$original.after(this.$element.append(this.$select.append(this.$arrow)).append(this.$drop));
    this.$drop.append(this.$results.append(this.fontsAsHtml())).hide();
   };

   Fontselect.prototype.fontsAsHtml = function(){

    var l = fonts.length;
    var r, s, h = '';

    for(var i=0; i<l; i++){
     r = this.toReadable(fonts[i]);
     s = this.toStyle(fonts[i]);
     h += '<li data-value="'+ fonts[i] +'" style="font-family: '+s['font-family'] +'; font-weight: '+s['font-weight'] +'; font-style: '+s['font-style'] +';">'+ r +'</li>';
    }

    return h;
   };

   Fontselect.prototype.toReadable = function(font){
    return font.replace(/[\+|:]/g, ' ');
   };

   Fontselect.prototype.toStyle = function(font){
    var t = font.split(':');
    var fontStyle = "";
    if(typeof t[1] != 'undefined'){
     if(t[1] == "italic"){
       fontStyle = "italic";
       t[1] == 400;
     }else if(t[1].indexOf('italic') != -1){
      t[1] = t[1].replace("italic", "");
      fontStyle = "italic";
     };
    }

    return {'font-family': this.toReadable(t[0]), 'font-weight': (t[1] || 400), 'font-style':fontStyle};
   };

   Fontselect.prototype.getVisibleFonts = function(){

    if(this.$results.is(':hidden')) return;

    var fs = this;
    var top = this.$results.scrollTop();
    var bottom = top + this.$results.height();

    if(this.options.lookahead){
     var li = $('li', this.$results).first().height();
     bottom += li*this.options.lookahead;
    }

    $('li', this.$results).each(function(){

     var ft = $(this).position().top+top;
     var fb = ft + $(this).height();

     if ((fb >= top) && (ft <= bottom)){
      var font = $(this).data('value');
      fs.addFontLink(font);
     }

    });
   };

   Fontselect.prototype.addFontLink = function(font){

    var link = this.options.api + font;

    if ($("link[href*='" + font + "']").length === 0){
     $('link:last').after('<link href="' + link + '" rel="stylesheet" type="text/css">');
    }
   };

   return Fontselect;
  })();

  return this.each(function(options) {
   // If options exist, lets merge them
   if (options) $.extend( settings, options );

   return new Fontselect(this, settings);
  });

 };
})(jQuery);
