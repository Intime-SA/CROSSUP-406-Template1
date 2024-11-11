import { useProductSelectors } from "@/hooks/useSelectors";
import {
  ADLaM_Display,
  AR_One_Sans,
  Abel,
  Abhaya_Libre,
  Aboreto,
  Abril_Fatface,
  Abyssinica_SIL,
  Aclonica,
  Acme,
  Actor,
  Adamina,
  Advent_Pro,
  Afacad,
  Afacad_Flux,
  Agbalumo,
  Agdasima,
  Aguafina_Script,
  Akatab,
  Akaya_Kanadaka,
  Akaya_Telivigala,
  Akronim,
  Akshar,
  Aladin,
  Alata,
  Alatsi,
  Albert_Sans,
  Aldrich,
  Alef,
  Alegreya,
  Alegreya_SC,
  Alegreya_Sans,
  Alegreya_Sans_SC,
  Aleo,
  Alex_Brush,
  Alexandria,
  Alfa_Slab_One,
  Alice,
  Alike,
  Alike_Angular,
  Alkalami,
  Alkatra,
  Allan,
  Allerta,
  Allerta_Stencil,
  Allison,
  Allura,
  Almarai,
  Almendra,
  Almendra_Display,
  Almendra_SC,
  Alumni_Sans,
  Alumni_Sans_Collegiate_One,
  Alumni_Sans_Inline_One,
  Alumni_Sans_Pinstripe,
  Amarante,
  Amaranth,
  Amatic_SC,
  Amethysta,
  Amiko,
  Amiri,
  Amiri_Quran,
  Amita,
  Anaheim,
  Andada_Pro,
  Andika,
  Anek_Bangla,
  Anek_Devanagari,
  Anek_Gujarati,
  Anek_Gurmukhi,
  Anek_Kannada,
  Anek_Latin,
  Anek_Malayalam,
  Anek_Odia,
  Anek_Tamil,
  Anek_Telugu,
  Angkor,
  Annapurna_SIL,
  Annie_Use_Your_Telescope,
  Anonymous_Pro,
  Anta,
  Antic,
  Antic_Didone,
  Antic_Slab,
  Anton,
  Anton_SC,
  Antonio,
  Anuphan,
  Anybody,
  Aoboshi_One,
  Arapey,
  Arbutus,
  Arbutus_Slab,
  Architects_Daughter,
  Archivo,
  Archivo_Black,
  Archivo_Narrow,
  Are_You_Serious,
  Aref_Ruqaa,
  Aref_Ruqaa_Ink,
  Arima,
  Arimo,
  Arizonia,
  Armata,
  Arsenal,
  Arsenal_SC,
  Artifika,
  Arvo,
  Arya,
  Asap,
  Asap_Condensed,
  Asar,
  Asset,
  Assistant,
  Astloch,
  Asul,
  Athiti,
  Atkinson_Hyperlegible,
  Atma,
  Atomic_Age,
  Aubrey,
  Audiowide,
  Autour_One,
  Average,
  Average_Sans,
  Averia_Gruesa_Libre,
  Averia_Libre,
  Averia_Sans_Libre,
  Averia_Serif_Libre,
  Azeret_Mono,
  B612,
  B612_Mono,
  BIZ_UDGothic,
  BIZ_UDMincho,
  BIZ_UDPGothic,
  BIZ_UDPMincho,
  Babylonica,
  Bacasime_Antique,
  Bad_Script,
  Bagel_Fat_One,
  Bahiana,
  Bahianita,
  Bai_Jamjuree,
  Bakbak_One,
  Ballet,
  Baloo_2,
  Baloo_Bhai_2,
  Baloo_Bhaijaan_2,
  Baloo_Bhaina_2,
  Baloo_Chettan_2,
  Baloo_Da_2,
  Baloo_Paaji_2,
  Baloo_Tamma_2,
  Baloo_Tammudu_2,
  Baloo_Thambi_2,
  Balsamiq_Sans,
  Balthazar,
  Bangers,
  Barlow,
  Barlow_Condensed,
  Barlow_Semi_Condensed,
  Barriecito,
  Barrio,
  Basic,
  Baskervville,
  Baskervville_SC,
  Battambang,
  Baumans,
  Bayon,
  Be_Vietnam_Pro,
  Beau_Rivage,
  Bebas_Neue,
  Beiruti,
  Belanosima,
  Belgrano,
  Bellefair,
  Belleza,
  Bellota,
  Bellota_Text,
  BenchNine,
  Benne,
  Bentham,
  Berkshire_Swash,
  Besley,
  Beth_Ellen,
  Bevan,
  BhuTuka_Expanded_One,
  Big_Shoulders_Display,
  Big_Shoulders_Inline_Display,
  Big_Shoulders_Inline_Text,
  Big_Shoulders_Stencil_Display,
  Big_Shoulders_Stencil_Text,
  Big_Shoulders_Text,
  Bigelow_Rules,
  Bigshot_One,
  Bilbo,
  Bilbo_Swash_Caps,
  BioRhyme,
  BioRhyme_Expanded,
  Birthstone,
  Birthstone_Bounce,
  Biryani,
  Bitter,
  Black_And_White_Picture,
  Black_Han_Sans,
  Black_Ops_One,
  Blaka,
  Blaka_Hollow,
  Blaka_Ink,
  Blinker,
  Bodoni_Moda,
  Bokor,
  Bona_Nova,
  Bonbon,
  Bonheur_Royale,
  Boogaloo,
  Borel,
  Bowlby_One,
  Bowlby_One_SC,
  Braah_One,
  Brawler,
  Bree_Serif,
  Bruno_Ace,
  Bruno_Ace_SC,
  Brygada_1918,
  Bubblegum_Sans,
  Bubbler_One,
  Buda,
  Buenard,
  Bungee,
  Bungee_Hairline,
  Bungee_Inline,
  Bungee_Outline,
  Bungee_Shade,
  Bungee_Spice,
  Butcherman,
  Butterfly_Kids,
  Cabin,
  Cabin_Condensed,
  Cabin_Sketch,
  Caesar_Dressing,
  Cagliostro,
  Cairo,
  Cairo_Play,
  Caladea,
  Calistoga,
  Calligraffitti,
  Cambay,
  Cambo,
  Candal,
  Cantarell,
  Cantata_One,
  Cantora_One,
  Caprasimo,
  Caramel,
  Carattere,
  Cardo,
  Carlito,
  Carme,
  Carrois_Gothic,
  Carrois_Gothic_SC,
  Carter_One,
  Castoro,
  Castoro_Titling,
  Catamaran,
  Caudex,
  Caveat,
  Caveat_Brush,
  Cedarville_Cursive,
  Ceviche_One,
  Chakra_Petch,
  Changa,
  Changa_One,
  Chango,
  Charis_SIL,
  Charm,
  Charmonman,
  Chathura,
  Chau_Philomene_One,
  Chela_One,
  Chelsea_Market,
  Chenla,
  Cherish,
  Cherry_Bomb_One,
  Cherry_Cream_Soda,
  Cherry_Swash,
  Chewy,
  Chicle,
  Chilanka,
  Chivo,
  Chivo_Mono,
  Chokokutai,
  Chonburi,
  Cinzel,
  Cinzel_Decorative,
  Clicker_Script,
  Climate_Crisis,
  Coda,
  Codystar,
  Coiny,
  Combo,
  Comfortaa,
  Comforter,
  Comforter_Brush,
  Comic_Neue,
  Coming_Soon,
  Comme,
  Commissioner,
  Concert_One,
  Condiment,
  Content,
  Contrail_One,
  Convergence,
  Cookie,
  Copse,
  Corben,
  Corinthia,
  Cormorant,
  Cormorant_Garamond,
  Cormorant_Infant,
  Cormorant_SC,
  Cormorant_Unicase,
  Cormorant_Upright,
  Courgette,
  Courier_Prime,
  Cousine,
  Coustard,
  Covered_By_Your_Grace,
  Crafty_Girls,
  Creepster,
  Crete_Round,
  Crimson_Pro,
  Crimson_Text,
  Croissant_One,
  Crushed,
  Cuprum,
  Cute_Font,
  Cutive,
  Cutive_Mono,
  DM_Mono,
  DM_Sans,
  DM_Serif_Display,
  DM_Serif_Text,
  Dai_Banna_SIL,
  Damion,
  Dancing_Script,
  Dangrek,
  Darker_Grotesque,
  Darumadrop_One,
  David_Libre,
  Dawning_of_a_New_Day,
  Days_One,
  Dekko,
  Dela_Gothic_One,
  Delicious_Handrawn,
  Delius,
  Delius_Swash_Caps,
  Delius_Unicase,
  Della_Respira,
  Denk_One,
  Devonshire,
  Dhurjati,
  Didact_Gothic,
  Diphylleia,
  Diplomata,
  Diplomata_SC,
  Do_Hyeon,
  Dokdo,
  Domine,
  Donegal_One,
  Dongle,
  Doppio_One,
  Dorsa,
  Dosis,
  DotGothic16,
  Dr_Sugiyama,
  Duru_Sans,
  DynaPuff,
  Dynalight,
  EB_Garamond,
  Eagle_Lake,
  East_Sea_Dokdo,
  Eater,
  Economica,
  Eczar,
  Edu_NSW_ACT_Foundation,
  Edu_QLD_Beginner,
  Edu_SA_Beginner,
  Edu_TAS_Beginner,
  Edu_VIC_WA_NT_Beginner,
  El_Messiri,
  Electrolize,
  Elsie,
  Elsie_Swash_Caps,
  Emblema_One,
  Emilys_Candy,
  Encode_Sans,
  Encode_Sans_Condensed,
  Encode_Sans_Expanded,
  Encode_Sans_SC,
  Encode_Sans_Semi_Condensed,
  Encode_Sans_Semi_Expanded,
  Engagement,
  Englebert,
  Enriqueta,
  Ephesis,
  Epilogue,
  Erica_One,
  Esteban,
  Estonia,
  Euphoria_Script,
  Ewert,
  Exo,
  Exo_2,
  Expletus_Sans,
  Explora,
  Fahkwang,
  Familjen_Grotesk,
  Fanwood_Text,
  Farro,
  Farsan,
  Fascinate,
  Fascinate_Inline,
  Faster_One,
  Fasthand,
  Fauna_One,
  Faustina,
  Federant,
  Federo,
  Felipa,
  Fenix,
  Festive,
  Figtree,
  Finger_Paint,
  Finlandica,
  Fira_Code,
  Fira_Mono,
  Fira_Sans,
  Fira_Sans_Condensed,
  Fira_Sans_Extra_Condensed,
  Fjalla_One,
  Fjord_One,
  Flamenco,
  Flavors,
  Fleur_De_Leah,
  Flow_Block,
  Flow_Circular,
  Flow_Rounded,
  Foldit,
  Fondamento,
  Fontdiner_Swanky,
  Forum,
  Fragment_Mono,
  Francois_One,
  Frank_Ruhl_Libre,
  Fraunces,
  Freckle_Face,
  Fredericka_the_Great,
  Fredoka,
  Freehand,
  Fresca,
  Frijole,
  Fruktur,
  Fugaz_One,
  Fuggles,
  Fuzzy_Bubbles,
  GFS_Didot,
  GFS_Neohellenic,
  Gabriela,
  Gaegu,
  Gafata,
  Gajraj_One,
  Galada,
  Galdeano,
  Galindo,
  Gamja_Flower,
  Gantari,
  Gasoek_One,
  Gayathri,
  Gelasio,
  Gemunu_Libre,
  Genos,
  Gentium_Book_Plus,
  Gentium_Plus,
  Geo,
  Georama,
  Geostar,
  Geostar_Fill,
  Germania_One,
  Gideon_Roman,
  Gidugu,
  Gilda_Display,
  Girassol,
  Give_You_Glory,
  Glass_Antiqua,
  Glegoo,
  Gloock,
  Gloria_Hallelujah,
  Glory,
  Gluten,
  Goblin_One,
  Gochi_Hand,
  Goldman,
  Golos_Text,
  Gorditas,
  Gothic_A1,
  Gotu,
  Goudy_Bookletter_1911,
  Gowun_Batang,
  Gowun_Dodum,
  Graduate,
  Grand_Hotel,
  Grandiflora_One,
  Grandstander,
  Grape_Nuts,
  Gravitas_One,
  Great_Vibes,
  Grechen_Fuemen,
  Grenze,
  Grenze_Gotisch,
  Grey_Qo,
  Griffy,
  Gruppo,
  Gudea,
  Gugi,
  Gulzar,
  Gupter,
  Gurajada,
  Gwendolyn,
  Habibi,
  Hachi_Maru_Pop,
  Hahmlet,
  Halant,
  Hammersmith_One,
  Hanalei,
  Hanalei_Fill,
  Handjet,
  Handlee,
  Hanken_Grotesk,
  Hanuman,
  Happy_Monkey,
  Harmattan,
  Headland_One,
  Hedvig_Letters_Sans,
  Hedvig_Letters_Serif,
  Heebo,
  Henny_Penny,
  Hepta_Slab,
  Herr_Von_Muellerhoff,
  Hi_Melody,
  Hina_Mincho,
  Hind,
  Hind_Guntur,
  Hind_Madurai,
  Hind_Siliguri,
  Hind_Vadodara,
  Holtwood_One_SC,
  Homemade_Apple,
  Homenaje,
  Honk,
  Hubballi,
  Hurricane,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  IBM_Plex_Sans_Condensed,
  IBM_Plex_Sans_Devanagari,
  IBM_Plex_Sans_Hebrew,
  IBM_Plex_Sans_JP,
  IBM_Plex_Sans_KR,
  IBM_Plex_Sans_Thai,
  IBM_Plex_Sans_Thai_Looped,
  IBM_Plex_Serif,
  IM_Fell_DW_Pica,
  IM_Fell_DW_Pica_SC,
  IM_Fell_Double_Pica,
  IM_Fell_Double_Pica_SC,
  IM_Fell_English,
  IM_Fell_English_SC,
  IM_Fell_French_Canon,
  IM_Fell_French_Canon_SC,
  IM_Fell_Great_Primer,
  IM_Fell_Great_Primer_SC,
  Ibarra_Real_Nova,
  Iceberg,
  Iceland,
  Imbue,
  Imperial_Script,
  Imprima,
  Inclusive_Sans,
  Inconsolata,
  Inder,
  Indie_Flower,
  Ingrid_Darling,
  Inika,
  Inknut_Antiqua,
  Inria_Sans,
  Inria_Serif,
  Inspiration,
  Instrument_Sans,
  Instrument_Serif,
  Inter,
  Inter_Tight,
  Irish_Grover,
  Island_Moments,
  Istok_Web,
  Italiana,
  Italianno,
  Itim,
  Jacquard_12,
  Jacquard_12_Charted,
  Jacquard_24,
  Jacquard_24_Charted,
  Jacquarda_Bastarda_9,
  Jacquarda_Bastarda_9_Charted,
  Jacques_Francois,
  Jacques_Francois_Shadow,
  Jaini,
  Jaini_Purva,
  Jaldi,
  Jaro,
  Jersey_10,
  Jersey_10_Charted,
  Jersey_15,
  Jersey_15_Charted,
  Jersey_20,
  Jersey_20_Charted,
  Jersey_25,
  Jersey_25_Charted,
  JetBrains_Mono,
  Jim_Nightshade,
  Joan,
  Jockey_One,
  Jolly_Lodger,
  Jomhuria,
  Jomolhari,
  Josefin_Sans,
  Josefin_Slab,
  Jost,
  Joti_One,
  Jua,
  Judson,
  Julee,
  Julius_Sans_One,
  Junge,
  Jura,
  Just_Another_Hand,
  Just_Me_Again_Down_Here,
  K2D,
  Kablammo,
  Kadwa,
  Kaisei_Decol,
  Kaisei_HarunoUmi,
  Kaisei_Opti,
  Kaisei_Tokumin,
  Kalam,
  Kalnia,
  Kalnia_Glaze,
  Kameron,
  Kanit,
  Kantumruy_Pro,
  Karantina,
  Karla,
  Karla_Tamil_Inclined,
  Karla_Tamil_Upright,
  Karma,
  Katibeh,
  Kaushan_Script,
  Kavivanar,
  Kavoon,
  Kay_Pho_Du,
  Kdam_Thmor_Pro,
  Keania_One,
  Kelly_Slab,
  Kenia,
  Khand,
  Khmer,
  Khula,
  Kings,
  Kirang_Haerang,
  Kite_One,
  Kiwi_Maru,
  Klee_One,
  Knewave,
  KoHo,
  Kodchasan,
  Kode_Mono,
  Koh_Santepheap,
  Kolker_Brush,
  Konkhmer_Sleokchher,
  Kosugi,
  Kosugi_Maru,
  Kotta_One,
  Koulen,
  Kranky,
  Kreon,
  Kristi,
  Krona_One,
  Krub,
  Kufam,
  Kulim_Park,
  Kumar_One,
  Kumar_One_Outline,
  Kumbh_Sans,
  Kurale,
  LXGW_WenKai_Mono_TC,
  LXGW_WenKai_TC,
  La_Belle_Aurore,
  Labrada,
  Lacquer,
  Laila,
  Lakki_Reddy,
  Lalezar,
  Lancelot,
  Langar,
  Lateef,
  Lato,
  Lavishly_Yours,
  League_Gothic,
  League_Script,
  League_Spartan,
  Leckerli_One,
  Ledger,
  Lekton,
  Lemon,
  Lemonada,
  Lexend,
  Lexend_Deca,
  Lexend_Exa,
  Lexend_Giga,
  Lexend_Mega,
  Lexend_Peta,
  Lexend_Tera,
  Lexend_Zetta,
  Libre_Barcode_128,
  Libre_Barcode_128_Text,
  Libre_Barcode_39,
  Libre_Barcode_39_Extended,
  Libre_Barcode_39_Extended_Text,
  Libre_Barcode_39_Text,
  Libre_Barcode_EAN13_Text,
  Libre_Baskerville,
  Libre_Bodoni,
  Libre_Caslon_Display,
  Libre_Caslon_Text,
  Libre_Franklin,
  Licorice,
  Life_Savers,
  Lilita_One,
  Lily_Script_One,
  Limelight,
  Linden_Hill,
  Linefont,
  Lisu_Bosa,
  Literata,
  Liu_Jian_Mao_Cao,
  Livvic,
  Lobster,
  Lobster_Two,
  Londrina_Outline,
  Londrina_Shadow,
  Londrina_Sketch,
  Londrina_Solid,
  Long_Cang,
  Lora,
  Love_Light,
  Love_Ya_Like_A_Sister,
  Loved_by_the_King,
  Lovers_Quarrel,
  Luckiest_Guy,
  Lugrasimo,
  Lumanosimo,
  Lunasima,
  Lusitana,
  Lustria,
  Luxurious_Roman,
  Luxurious_Script,
  M_PLUS_1,
  M_PLUS_1_Code,
  M_PLUS_1p,
  M_PLUS_2,
  M_PLUS_Code_Latin,
  M_PLUS_Rounded_1c,
  Ma_Shan_Zheng,
  Macondo,
  Macondo_Swash_Caps,
  Mada,
  Madimi_One,
  Magra,
  Maiden_Orange,
  Maitree,
  Major_Mono_Display,
  Mako,
  Mali,
  Mallanna,
  Maname,
  Mandali,
  Manjari,
  Manrope,
  Mansalva,
  Manuale,
  Marcellus,
  Marcellus_SC,
  Marck_Script,
  Margarine,
  Marhey,
  Markazi_Text,
  Marko_One,
  Marmelad,
  Martel,
  Martel_Sans,
  Martian_Mono,
  Marvel,
  Mate,
  Mate_SC,
  Matemasie,
  Maven_Pro,
  McLaren,
  Mea_Culpa,
  Meddon,
  MedievalSharp,
  Medula_One,
  Meera_Inimai,
  Megrim,
  Meie_Script,
  Meow_Script,
  Merienda,
  Merriweather,
  Merriweather_Sans,
  Metal,
  Metal_Mania,
  Metamorphous,
  Metrophobic,
  Michroma,
  Micro_5,
  Micro_5_Charted,
  Milonga,
  Miltonian,
  Miltonian_Tattoo,
  Mina,
  Mingzat,
  Miniver,
  Miriam_Libre,
  Mirza,
  Miss_Fajardose,
  Mitr,
  Mochiy_Pop_One,
  Mochiy_Pop_P_One,
  Modak,
  Modern_Antiqua,
  Moderustic,
  Mogra,
  Mohave,
  Moirai_One,
  Molengo,
  Molle,
  Monda,
  Monofett,
  Monomaniac_One,
  Monoton,
  Monsieur_La_Doulaise,
  Montaga,
  Montagu_Slab,
  MonteCarlo,
  Montez,
  Montserrat,
  Montserrat_Alternates,
  Montserrat_Subrayada,
  Moo_Lah_Lah,
  Mooli,
  Moon_Dance,
  Moul,
  Moulpali,
  Mountains_of_Christmas,
  Mouse_Memoirs,
  Mr_Bedfort,
  Mr_Dafoe,
  Mr_De_Haviland,
  Mrs_Saint_Delafield,
  Mrs_Sheppards,
  Ms_Madi,
  Mukta,
  Mukta_Mahee,
  Mukta_Malar,
  Mukta_Vaani,
  Mulish,
  Murecho,
  MuseoModerno,
  My_Soul,
  Mynerve,
  Mystery_Quest,
  NTR,
  Nabla,
  Namdhinggo,
  Nanum_Brush_Script,
  Nanum_Gothic,
  Nanum_Gothic_Coding,
  Nanum_Myeongjo,
  Nanum_Pen_Script,
  Narnoor,
  Neonderthaw,
  Nerko_One,
  Neucha,
  Neuton,
  New_Amsterdam,
  New_Rocker,
  New_Tegomin,
  News_Cycle,
  Newsreader,
  Niconne,
  Niramit,
  Nixie_One,
  Nobile,
  Nokora,
  Norican,
  Nosifer,
  Notable,
  Nothing_You_Could_Do,
  Noticia_Text,
  Noto_Color_Emoji,
  Noto_Emoji,
  Noto_Kufi_Arabic,
  Noto_Music,
  Noto_Naskh_Arabic,
  Noto_Nastaliq_Urdu,
  Noto_Rashi_Hebrew,
  Noto_Sans,
  Noto_Sans_Adlam,
  Noto_Sans_Adlam_Unjoined,
  Noto_Sans_Anatolian_Hieroglyphs,
  Noto_Sans_Arabic,
  Noto_Sans_Armenian,
  Noto_Sans_Avestan,
  Noto_Sans_Balinese,
  Noto_Sans_Bamum,
  Noto_Sans_Bassa_Vah,
  Noto_Sans_Batak,
  Noto_Sans_Bengali,
  Noto_Sans_Bhaiksuki,
  Noto_Sans_Brahmi,
  Noto_Sans_Buginese,
  Noto_Sans_Buhid,
  Noto_Sans_Canadian_Aboriginal,
  Noto_Sans_Carian,
  Noto_Sans_Caucasian_Albanian,
  Noto_Sans_Chakma,
  Noto_Sans_Cham,
  Noto_Sans_Cherokee,
  Noto_Sans_Chorasmian,
  Noto_Sans_Coptic,
  Noto_Sans_Cuneiform,
  Noto_Sans_Cypriot,
  Noto_Sans_Cypro_Minoan,
  Noto_Sans_Deseret,
  Noto_Sans_Devanagari,
  Noto_Sans_Display,
  Noto_Sans_Duployan,
  Noto_Sans_Egyptian_Hieroglyphs,
  Noto_Sans_Elbasan,
  Noto_Sans_Elymaic,
  Noto_Sans_Ethiopic,
  Noto_Sans_Georgian,
  Noto_Sans_Glagolitic,
  Noto_Sans_Gothic,
  Noto_Sans_Grantha,
  Noto_Sans_Gujarati,
  Noto_Sans_Gunjala_Gondi,
  Noto_Sans_Gurmukhi,
  Noto_Sans_HK,
  Noto_Sans_Hanifi_Rohingya,
  Noto_Sans_Hanunoo,
  Noto_Sans_Hatran,
  Noto_Sans_Hebrew,
  Noto_Sans_Imperial_Aramaic,
  Noto_Sans_Indic_Siyaq_Numbers,
  Noto_Sans_Inscriptional_Pahlavi,
  Noto_Sans_Inscriptional_Parthian,
  Noto_Sans_JP,
  Noto_Sans_Javanese,
  Noto_Sans_KR,
  Noto_Sans_Kaithi,
  Noto_Sans_Kannada,
  Noto_Sans_Kawi,
  Noto_Sans_Kayah_Li,
  Noto_Sans_Kharoshthi,
  Noto_Sans_Khmer,
  Noto_Sans_Khojki,
  Noto_Sans_Khudawadi,
  Noto_Sans_Lao,
  Noto_Sans_Lao_Looped,
  Noto_Sans_Lepcha,
  Noto_Sans_Limbu,
  Noto_Sans_Linear_A,
  Noto_Sans_Linear_B,
  Noto_Sans_Lisu,
  Noto_Sans_Lycian,
  Noto_Sans_Lydian,
  Noto_Sans_Mahajani,
  Noto_Sans_Malayalam,
  Noto_Sans_Mandaic,
  Noto_Sans_Manichaean,
  Noto_Sans_Marchen,
  Noto_Sans_Masaram_Gondi,
  Noto_Sans_Math,
  Noto_Sans_Mayan_Numerals,
  Noto_Sans_Medefaidrin,
  Noto_Sans_Meetei_Mayek,
  Noto_Sans_Mende_Kikakui,
  Noto_Sans_Meroitic,
  Noto_Sans_Miao,
  Noto_Sans_Modi,
  Noto_Sans_Mongolian,
  Noto_Sans_Mono,
  Noto_Sans_Mro,
  Noto_Sans_Multani,
  Noto_Sans_Myanmar,
  Noto_Sans_NKo,
  Noto_Sans_NKo_Unjoined,
  Noto_Sans_Nabataean,
  Noto_Sans_Nag_Mundari,
  Noto_Sans_Nandinagari,
  Noto_Sans_New_Tai_Lue,
  Noto_Sans_Newa,
  Noto_Sans_Nushu,
  Noto_Sans_Ogham,
  Noto_Sans_Ol_Chiki,
  Noto_Sans_Old_Hungarian,
  Noto_Sans_Old_Italic,
  Noto_Sans_Old_North_Arabian,
  Noto_Sans_Old_Permic,
  Noto_Sans_Old_Persian,
  Noto_Sans_Old_Sogdian,
  Noto_Sans_Old_South_Arabian,
  Noto_Sans_Old_Turkic,
  Noto_Sans_Oriya,
  Noto_Sans_Osage,
  Noto_Sans_Osmanya,
  Noto_Sans_Pahawh_Hmong,
  Noto_Sans_Palmyrene,
  Noto_Sans_Pau_Cin_Hau,
  Noto_Sans_Phags_Pa,
  Noto_Sans_Phoenician,
  Noto_Sans_Psalter_Pahlavi,
  Noto_Sans_Rejang,
  Noto_Sans_Runic,
  Noto_Sans_SC,
  Noto_Sans_Samaritan,
  Noto_Sans_Saurashtra,
  Noto_Sans_Sharada,
  Noto_Sans_Shavian,
  Noto_Sans_Siddham,
  Noto_Sans_SignWriting,
  Noto_Sans_Sinhala,
  Noto_Sans_Sogdian,
  Noto_Sans_Sora_Sompeng,
  Noto_Sans_Soyombo,
  Noto_Sans_Sundanese,
  Noto_Sans_Syloti_Nagri,
  Noto_Sans_Symbols,
  Noto_Sans_Symbols_2,
  Noto_Sans_Syriac,
  Noto_Sans_Syriac_Eastern,
  Noto_Sans_TC,
  Noto_Sans_Tagalog,
  Noto_Sans_Tagbanwa,
  Noto_Sans_Tai_Le,
  Noto_Sans_Tai_Tham,
  Noto_Sans_Tai_Viet,
  Noto_Sans_Takri,
  Noto_Sans_Tamil,
  Noto_Sans_Tamil_Supplement,
  Noto_Sans_Tangsa,
  Noto_Sans_Telugu,
  Noto_Sans_Thaana,
  Noto_Sans_Thai,
  Noto_Sans_Thai_Looped,
  Noto_Sans_Tifinagh,
  Noto_Sans_Tirhuta,
  Noto_Sans_Ugaritic,
  Noto_Sans_Vai,
  Noto_Sans_Vithkuqi,
  Noto_Sans_Wancho,
  Noto_Sans_Warang_Citi,
  Noto_Sans_Yi,
  Noto_Sans_Zanabazar_Square,
  Noto_Serif,
  Noto_Serif_Ahom,
  Noto_Serif_Armenian,
  Noto_Serif_Balinese,
  Noto_Serif_Bengali,
  Noto_Serif_Devanagari,
  Noto_Serif_Display,
  Noto_Serif_Dogra,
  Noto_Serif_Ethiopic,
  Noto_Serif_Georgian,
  Noto_Serif_Grantha,
  Noto_Serif_Gujarati,
  Noto_Serif_Gurmukhi,
  Noto_Serif_HK,
  Noto_Serif_Hebrew,
  Noto_Serif_JP,
  Noto_Serif_KR,
  Noto_Serif_Kannada,
  Noto_Serif_Khitan_Small_Script,
  Noto_Serif_Khmer,
  Noto_Serif_Khojki,
  Noto_Serif_Lao,
  Noto_Serif_Makasar,
  Noto_Serif_Malayalam,
  Noto_Serif_Myanmar,
  Noto_Serif_NP_Hmong,
  Noto_Serif_Old_Uyghur,
  Noto_Serif_Oriya,
  Noto_Serif_Ottoman_Siyaq,
  Noto_Serif_SC,
  Noto_Serif_Sinhala,
  Noto_Serif_TC,
  Noto_Serif_Tamil,
  Noto_Serif_Tangut,
  Noto_Serif_Telugu,
  Noto_Serif_Thai,
  Noto_Serif_Tibetan,
  Noto_Serif_Toto,
  Noto_Serif_Vithkuqi,
  Noto_Serif_Yezidi,
  Noto_Traditional_Nushu,
  Noto_Znamenny_Musical_Notation,
  Nova_Cut,
  Nova_Flat,
  Nova_Mono,
  Nova_Oval,
  Nova_Round,
  Nova_Script,
  Nova_Slim,
  Nova_Square,
  Numans,
  Nunito,
  Nunito_Sans,
  Nuosu_SIL,
  Odibee_Sans,
  Odor_Mean_Chey,
  Offside,
  Oi,
  Ojuju,
  Old_Standard_TT,
  Oldenburg,
  Ole,
  Oleo_Script,
  Oleo_Script_Swash_Caps,
  Onest,
  Oooh_Baby,
  Open_Sans,
  Oranienbaum,
  Orbit,
  Orbitron,
  Oregano,
  Orelega_One,
  Orienta,
  Original_Surfer,
  Oswald,
  Outfit,
  Over_the_Rainbow,
  Overlock,
  Overlock_SC,
  Overpass,
  Overpass_Mono,
  Ovo,
  Oxanium,
  Oxygen,
  Oxygen_Mono,
  PT_Mono,
  PT_Sans,
  PT_Sans_Caption,
  PT_Sans_Narrow,
  PT_Serif,
  PT_Serif_Caption,
  Pacifico,
  Padauk,
  Padyakke_Expanded_One,
  Palanquin,
  Palanquin_Dark,
  Palette_Mosaic,
  Pangolin,
  Paprika,
  Parisienne,
  Passero_One,
  Passion_One,
  Passions_Conflict,
  Pathway_Extreme,
  Pathway_Gothic_One,
  Patrick_Hand,
  Patrick_Hand_SC,
  Pattaya,
  Patua_One,
  Pavanam,
  Paytone_One,
  Peddana,
  Peralta,
  Permanent_Marker,
  Petemoss,
  Petit_Formal_Script,
  Petrona,
  Philosopher,
  Phudu,
  Piazzolla,
  Piedra,
  Pinyon_Script,
  Pirata_One,
  Pixelify_Sans,
  Plaster,
  Platypi,
  Play,
  Playball,
  Playfair,
  Playfair_Display,
  Playfair_Display_SC,
  Playpen_Sans,
  Playwrite_AR,
  Playwrite_AT,
  Playwrite_AU_NSW,
  Playwrite_AU_QLD,
  Playwrite_AU_SA,
  Playwrite_AU_TAS,
  Playwrite_AU_VIC,
  Playwrite_BE_VLG,
  Playwrite_BE_WAL,
  Playwrite_BR,
  Playwrite_CA,
  Playwrite_CL,
  Playwrite_CO,
  Playwrite_CU,
  Playwrite_CZ,
  Playwrite_DE_Grund,
  Playwrite_DE_LA,
  Playwrite_DE_SAS,
  Playwrite_DE_VA,
  Playwrite_DK_Loopet,
  Playwrite_DK_Uloopet,
  Playwrite_ES,
  Playwrite_ES_Deco,
  Playwrite_FR_Moderne,
  Playwrite_FR_Trad,
  Playwrite_GB_J,
  Playwrite_GB_S,
  Playwrite_HR,
  Playwrite_HR_Lijeva,
  Playwrite_HU,
  Playwrite_ID,
  Playwrite_IE,
  Playwrite_IN,
  Playwrite_IS,
  Playwrite_IT_Moderna,
  Playwrite_IT_Trad,
  Playwrite_MX,
  Playwrite_NG_Modern,
  Playwrite_NL,
  Playwrite_NO,
  Playwrite_NZ,
  Playwrite_PE,
  Playwrite_PL,
  Playwrite_PT,
  Playwrite_RO,
  Playwrite_SK,
  Playwrite_TZ,
  Playwrite_US_Modern,
  Playwrite_US_Trad,
  Playwrite_VN,
  Playwrite_ZA,
  Plus_Jakarta_Sans,
  Podkova,
  Poetsen_One,
  Poiret_One,
  Poller_One,
  Poltawski_Nowy,
  Poly,
  Pompiere,
  Pontano_Sans,
  Poor_Story,
  Poppins,
  Port_Lligat_Sans,
  Port_Lligat_Slab,
  Potta_One,
  Pragati_Narrow,
  Praise,
  Prata,
  Preahvihear,
  Press_Start_2P,
  Pridi,
  Princess_Sofia,
  Prociono,
  Prompt,
  Prosto_One,
  Protest_Guerrilla,
  Protest_Revolution,
  Protest_Riot,
  Protest_Strike,
  Proza_Libre,
  Public_Sans,
  Puppies_Play,
  Puritan,
  Purple_Purse,
  Qahiri,
  Quando,
  Quantico,
  Quattrocento,
  Quattrocento_Sans,
  Questrial,
  Quicksand,
  Quintessential,
  Qwigley,
  Qwitcher_Grypen,
  REM,
  Racing_Sans_One,
  Radio_Canada,
  Radio_Canada_Big,
  Radley,
  Rajdhani,
  Rakkas,
  Raleway,
  Raleway_Dots,
  Ramabhadra,
  Ramaraja,
  Rambla,
  Rammetto_One,
  Rampart_One,
  Ranchers,
  Rancho,
  Ranga,
  Rasa,
  Rationale,
  Ravi_Prakash,
  Readex_Pro,
  Recursive,
  Red_Hat_Display,
  Red_Hat_Mono,
  Red_Hat_Text,
  Red_Rose,
  Redacted,
  Redacted_Script,
  Reddit_Mono,
  Reddit_Sans,
  Reddit_Sans_Condensed,
  Redressed,
  Reem_Kufi,
  Reem_Kufi_Fun,
  Reem_Kufi_Ink,
  Reenie_Beanie,
  Reggae_One,
  Rethink_Sans,
  Revalia,
  Rhodium_Libre,
  Ribeye,
  Ribeye_Marrow,
  Righteous,
  Risque,
  Road_Rage,
  Roboto,
  Roboto_Condensed,
  Roboto_Flex,
  Roboto_Mono,
  Roboto_Serif,
  Roboto_Slab,
  Rochester,
  Rock_3D,
  Rock_Salt,
  RocknRoll_One,
  Rokkitt,
  Romanesco,
  Ropa_Sans,
  Rosario,
  Rosarivo,
  Rouge_Script,
  Rowdies,
  Rozha_One,
  Rubik,
  Rubik_80s_Fade,
  Rubik_Beastly,
  Rubik_Broken_Fax,
  Rubik_Bubbles,
  Rubik_Burned,
  Rubik_Dirt,
  Rubik_Distressed,
  Rubik_Doodle_Shadow,
  Rubik_Doodle_Triangles,
  Rubik_Gemstones,
  Rubik_Glitch,
  Rubik_Glitch_Pop,
  Rubik_Iso,
  Rubik_Lines,
  Rubik_Maps,
  Rubik_Marker_Hatch,
  Rubik_Maze,
  Rubik_Microbe,
  Rubik_Mono_One,
  Rubik_Moonrocks,
  Rubik_Pixels,
  Rubik_Puddles,
  Rubik_Scribble,
  Rubik_Spray_Paint,
  Rubik_Storm,
  Rubik_Vinyl,
  Rubik_Wet_Paint,
  Ruda,
  Rufina,
  Ruge_Boogie,
  Ruluko,
  Rum_Raisin,
  Ruslan_Display,
  Russo_One,
  Ruthie,
  Ruwudu,
  Rye,
  STIX_Two_Text,
  SUSE,
  Sacramento,
  Sahitya,
  Sail,
  Saira,
  Saira_Condensed,
  Saira_Extra_Condensed,
  Saira_Semi_Condensed,
  Saira_Stencil_One,
  Salsa,
  Sanchez,
  Sancreek,
  Sankofa_Display,
  Sansita,
  Sansita_Swashed,
  Sarabun,
  Sarala,
  Sarina,
  Sarpanch,
  Sassy_Frass,
  Satisfy,
  Sawarabi_Gothic,
  Sawarabi_Mincho,
  Scada,
  Scheherazade_New,
  Schibsted_Grotesk,
  Schoolbell,
  Scope_One,
  Seaweed_Script,
  Secular_One,
  Sedan,
  Sedan_SC,
  Sedgwick_Ave,
  Sedgwick_Ave_Display,
  Sen,
  Send_Flowers,
  Sevillana,
  Seymour_One,
  Shadows_Into_Light,
  Shadows_Into_Light_Two,
  Shalimar,
  Shantell_Sans,
  Shanti,
  Share,
  Share_Tech,
  Share_Tech_Mono,
  Shippori_Antique,
  Shippori_Antique_B1,
  Shippori_Mincho,
  Shippori_Mincho_B1,
  Shizuru,
  Shojumaru,
  Short_Stack,
  Shrikhand,
  Siemreap,
  Sigmar,
  Sigmar_One,
  Signika,
  Signika_Negative,
  Silkscreen,
  Simonetta,
  Single_Day,
  Sintony,
  Sirin_Stencil,
  Six_Caps,
  Sixtyfour,
  Sixtyfour_Convergence,
  Skranji,
  Slabo_13px,
  Slabo_27px,
  Slackey,
  Slackside_One,
  Smokum,
  Smooch,
  Smooch_Sans,
  Smythe,
  Sniglet,
  Snippet,
  Snowburst_One,
  Sofadi_One,
  Sofia,
  Sofia_Sans,
  Sofia_Sans_Condensed,
  Sofia_Sans_Extra_Condensed,
  Sofia_Sans_Semi_Condensed,
  Solitreo,
  Solway,
  Sometype_Mono,
  Song_Myung,
  Sono,
  Sonsie_One,
  Sora,
  Sorts_Mill_Goudy,
  Source_Code_Pro,
  Source_Sans_3,
  Source_Serif_4,
  Space_Grotesk,
  Space_Mono,
  Special_Elite,
  Spectral,
  Spectral_SC,
  Spicy_Rice,
  Spinnaker,
  Spirax,
  Splash,
  Spline_Sans,
  Spline_Sans_Mono,
  Squada_One,
  Square_Peg,
  Sree_Krushnadevaraya,
  Sriracha,
  Srisakdi,
  Staatliches,
  Stalemate,
  Stalinist_One,
  Stardos_Stencil,
  Stick,
  Stick_No_Bills,
  Stint_Ultra_Condensed,
  Stint_Ultra_Expanded,
  Stoke,
  Strait,
  Style_Script,
  Stylish,
  Sue_Ellen_Francisco,
  Suez_One,
  Sulphur_Point,
  Sumana,
  Sunflower,
  Sunshiney,
  Supermercado_One,
  Sura,
  Suranna,
  Suravaram,
  Suwannaphum,
  Swanky_and_Moo_Moo,
  Syncopate,
  Syne,
  Syne_Mono,
  Syne_Tactile,
  Tac_One,
  Tai_Heritage_Pro,
  Tajawal,
  Tangerine,
  Tapestry,
  Taprom,
  Tauri,
  Taviraj,
  Teachers,
  Teko,
  Tektur,
  Telex,
  Tenali_Ramakrishna,
  Tenor_Sans,
  Text_Me_One,
  Texturina,
  Thasadith,
  The_Girl_Next_Door,
  The_Nautigal,
  Tienne,
  Tillana,
  Tilt_Neon,
  Tilt_Prism,
  Tilt_Warp,
  Timmana,
  Tinos,
  Tiny5,
  Tiro_Bangla,
  Tiro_Devanagari_Hindi,
  Tiro_Devanagari_Marathi,
  Tiro_Devanagari_Sanskrit,
  Tiro_Gurmukhi,
  Tiro_Kannada,
  Tiro_Tamil,
  Tiro_Telugu,
  Titan_One,
  Titillium_Web,
  Tomorrow,
  Tourney,
  Trade_Winds,
  Train_One,
  Trirong,
  Trispace,
  Trocchi,
  Trochut,
  Truculenta,
  Trykker,
  Tsukimi_Rounded,
  Tulpen_One,
  Turret_Road,
  Twinkle_Star,
  Ubuntu,
  Ubuntu_Condensed,
  Ubuntu_Mono,
  Uchen,
  Ultra,
  Unbounded,
  Uncial_Antiqua,
  Underdog,
  Unica_One,
  UnifrakturCook,
  UnifrakturMaguntia,
  Unkempt,
  Unlock,
  Unna,
  Updock,
  Urbanist,
  VT323,
  Vampiro_One,
  Varela,
  Varela_Round,
  Varta,
  Vast_Shadow,
  Vazirmatn,
  Vesper_Libre,
  Viaoda_Libre,
  Vibes,
  Vibur,
  Victor_Mono,
  Vidaloka,
  Viga,
  Vina_Sans,
  Voces,
  Volkhov,
  Vollkorn,
  Vollkorn_SC,
  Voltaire,
  Vujahday_Script,
  Waiting_for_the_Sunrise,
  Wallpoet,
  Walter_Turncoat,
  Warnes,
  Water_Brush,
  Waterfall,
  Wellfleet,
  Wendy_One,
  Whisper,
  WindSong,
  Wire_One,
  Wix_Madefor_Display,
  Wix_Madefor_Text,
  Work_Sans,
  Xanh_Mono,
  Yaldevi,
  Yanone_Kaffeesatz,
  Yantramanav,
  Yatra_One,
  Yellowtail,
  Yeon_Sung,
  Yeseva_One,
  Yesteryear,
  Yomogi,
  Yrsa,
  Ysabeau,
  Ysabeau_Infant,
  Ysabeau_Office,
  Ysabeau_SC,
  Yuji_Boku,
  Yuji_Mai,
  Yuji_Syuku,
  Yusei_Magic,
  ZCOOL_KuaiLe,
  ZCOOL_QingKe_HuangYou,
  ZCOOL_XiaoWei,
  Zen_Antique,
  Zen_Antique_Soft,
  Zen_Dots,
  Zen_Kaku_Gothic_Antique,
  Zen_Kaku_Gothic_New,
  Zen_Kurenaido,
  Zen_Loop,
  Zen_Maru_Gothic,
  Zen_Old_Mincho,
  Zen_Tokyo_Zoo,
  Zeyada,
  Zhi_Mang_Xing,
  Zilla_Slab,
  Zilla_Slab_Highlight,
} from "next/font/google";

type FontFamilies =
  | "ADLaM_Display"
  | "AR_One_Sans"
  | "Abel"
  | "Abhaya_Libre"
  | "Aboreto"
  | "Abril_Fatface"
  | "Abyssinica_SIL"
  | "Aclonica"
  | "Acme"
  | "Actor"
  | "Adamina"
  | "Advent_Pro"
  | "Afacad"
  | "Afacad_Flux"
  | "Agbalumo"
  | "Agdasima"
  | "Aguafina_Script"
  | "Akatab"
  | "Akaya_Kanadaka"
  | "Akaya_Telivigala"
  | "Akronim"
  | "Akshar"
  | "Aladin"
  | "Alata"
  | "Alatsi"
  | "Albert_Sans"
  | "Aldrich"
  | "Alef"
  | "Alegreya"
  | "Alegreya_SC"
  | "Alegreya_Sans"
  | "Alegreya_Sans_SC"
  | "Aleo"
  | "Alex_Brush"
  | "Alexandria"
  | "Alfa_Slab_One"
  | "Alice"
  | "Alike"
  | "Alike_Angular"
  | "Alkalami"
  | "Alkatra"
  | "Allan"
  | "Allerta"
  | "Allerta_Stencil"
  | "Allison"
  | "Allura"
  | "Almarai"
  | "Almendra"
  | "Almendra_Display"
  | "Almendra_SC"
  | "Alumni_Sans"
  | "Alumni_Sans_Collegiate_One"
  | "Alumni_Sans_Inline_One"
  | "Alumni_Sans_Pinstripe"
  | "Amarante"
  | "Amaranth"
  | "Amatic_SC"
  | "Amethysta"
  | "Amiko"
  | "Amiri"
  | "Amiri_Quran"
  | "Amita"
  | "Anaheim"
  | "Andada_Pro"
  | "Andika"
  | "Anek_Bangla"
  | "Anek_Devanagari"
  | "Anek_Gujarati"
  | "Anek_Gurmukhi"
  | "Anek_Kannada"
  | "Anek_Latin"
  | "Anek_Malayalam"
  | "Anek_Odia"
  | "Anek_Tamil"
  | "Anek_Telugu"
  | "Angkor"
  | "Annapurna_SIL"
  | "Annie_Use_Your_Telescope"
  | "Anonymous_Pro"
  | "Anta"
  | "Antic"
  | "Antic_Didone"
  | "Antic_Slab"
  | "Anton"
  | "Anton_SC"
  | "Antonio"
  | "Anuphan"
  | "Anybody"
  | "Aoboshi_One"
  | "Arapey"
  | "Arbutus"
  | "Arbutus_Slab"
  | "Architects_Daughter"
  | "Archivo"
  | "Archivo_Black"
  | "Archivo_Narrow"
  | "Are_You_Serious"
  | "Aref_Ruqaa"
  | "Aref_Ruqaa_Ink"
  | "Arima"
  | "Arimo"
  | "Arizonia"
  | "Armata"
  | "Arsenal"
  | "Arsenal_SC"
  | "Artifika"
  | "Arvo"
  | "Arya"
  | "Asap"
  | "Asap_Condensed"
  | "Asar"
  | "Asset"
  | "Assistant"
  | "Astloch"
  | "Asul"
  | "Athiti"
  | "Atkinson_Hyperlegible"
  | "Atma"
  | "Atomic_Age"
  | "Aubrey"
  | "Audiowide"
  | "Autour_One"
  | "Average"
  | "Average_Sans"
  | "Averia_Gruesa_Libre"
  | "Averia_Libre"
  | "Averia_Sans_Libre"
  | "Averia_Serif_Libre"
  | "Azeret_Mono"
  | "B612"
  | "B612_Mono"
  | "BIZ_UDGothic"
  | "BIZ_UDMincho"
  | "BIZ_UDPGothic"
  | "BIZ_UDPMincho"
  | "Babylonica"
  | "Bacasime_Antique"
  | "Bad_Script"
  | "Bagel_Fat_One"
  | "Bahiana"
  | "Bahianita"
  | "Bai_Jamjuree"
  | "Bakbak_One"
  | "Ballet"
  | "Baloo_2"
  | "Baloo_Bhai_2"
  | "Baloo_Bhaijaan_2"
  | "Baloo_Bhaina_2"
  | "Baloo_Chettan_2"
  | "Baloo_Da_2"
  | "Baloo_Paaji_2"
  | "Baloo_Tamma_2"
  | "Baloo_Tammudu_2"
  | "Baloo_Thambi_2"
  | "Balsamiq_Sans"
  | "Balthazar"
  | "Bangers"
  | "Barlow"
  | "Barlow_Condensed"
  | "Barlow_Semi_Condensed"
  | "Barriecito"
  | "Barrio"
  | "Basic"
  | "Baskervville"
  | "Baskervville_SC"
  | "Battambang"
  | "Baumans"
  | "Bayon"
  | "Be_Vietnam_Pro"
  | "Beau_Rivage"
  | "Bebas_Neue"
  | "Beiruti"
  | "Belanosima"
  | "Belgrano"
  | "Bellefair"
  | "Belleza"
  | "Bellota"
  | "Bellota_Text"
  | "BenchNine"
  | "Benne"
  | "Bentham"
  | "Berkshire_Swash"
  | "Besley"
  | "Beth_Ellen"
  | "Bevan"
  | "BhuTuka_Expanded_One"
  | "Big_Shoulders_Display"
  | "Big_Shoulders_Inline_Display"
  | "Big_Shoulders_Inline_Text"
  | "Big_Shoulders_Stencil_Display"
  | "Big_Shoulders_Stencil_Text"
  | "Big_Shoulders_Text"
  | "Bigelow_Rules"
  | "Bigshot_One"
  | "Bilbo"
  | "Bilbo_Swash_Caps"
  | "BioRhyme"
  | "BioRhyme_Expanded"
  | "Birthstone"
  | "Birthstone_Bounce"
  | "Biryani"
  | "Bitter"
  | "Black_And_White_Picture"
  | "Black_Han_Sans"
  | "Black_Ops_One"
  | "Blaka"
  | "Blaka_Hollow"
  | "Blaka_Ink"
  | "Blinker"
  | "Bodoni_Moda"
  | "Bokor"
  | "Bona_Nova"
  | "Bonbon"
  | "Bonheur_Royale"
  | "Boogaloo"
  | "Borel"
  | "Bowlby_One"
  | "Bowlby_One_SC"
  | "Braah_One"
  | "Brawler"
  | "Bree_Serif"
  | "Bruno_Ace"
  | "Bruno_Ace_SC"
  | "Brygada_1918"
  | "Bubblegum_Sans"
  | "Bubbler_One"
  | "Buda"
  | "Buenard"
  | "Bungee"
  | "Bungee_Hairline"
  | "Bungee_Inline"
  | "Bungee_Outline"
  | "Bungee_Shade"
  | "Bungee_Spice"
  | "Butcherman"
  | "Butterfly_Kids"
  | "Cabin"
  | "Cabin_Condensed"
  | "Cabin_Sketch"
  | "Caesar_Dressing"
  | "Cagliostro"
  | "Cairo"
  | "Cairo_Play"
  | "Caladea"
  | "Calistoga"
  | "Calligraffitti"
  | "Cambay"
  | "Cambo"
  | "Candal"
  | "Cantarell"
  | "Cantata_One"
  | "Cantora_One"
  | "Caprasimo"
  | "Caramel"
  | "Carattere"
  | "Cardo"
  | "Carlito"
  | "Carme"
  | "Carrois_Gothic"
  | "Carrois_Gothic_SC"
  | "Carter_One"
  | "Castoro"
  | "Castoro_Titling"
  | "Catamaran"
  | "Caudex"
  | "Caveat"
  | "Caveat_Brush"
  | "Cedarville_Cursive"
  | "Ceviche_One"
  | "Chakra_Petch"
  | "Changa"
  | "Changa_One"
  | "Chango"
  | "Charis_SIL"
  | "Charm"
  | "Charmonman"
  | "Chathura"
  | "Chau_Philomene_One"
  | "Chela_One"
  | "Chelsea_Market"
  | "Chenla"
  | "Cherish"
  | "Cherry_Bomb_One"
  | "Cherry_Cream_Soda"
  | "Cherry_Swash"
  | "Chewy"
  | "Chicle"
  | "Chilanka"
  | "Chivo"
  | "Chivo_Mono"
  | "Chokokutai"
  | "Chonburi"
  | "Cinzel"
  | "Cinzel_Decorative"
  | "Clicker_Script"
  | "Climate_Crisis"
  | "Coda"
  | "Codystar"
  | "Coiny"
  | "Combo"
  | "Comfortaa"
  | "Comforter"
  | "Comforter_Brush"
  | "Comic_Neue"
  | "Coming_Soon"
  | "Comme"
  | "Commissioner"
  | "Concert_One"
  | "Condiment"
  | "Content"
  | "Contrail_One"
  | "Convergence"
  | "Cookie"
  | "Copse"
  | "Corben"
  | "Corinthia"
  | "Cormorant"
  | "Cormorant_Garamond"
  | "Cormorant_Infant"
  | "Cormorant_SC"
  | "Cormorant_Unicase"
  | "Cormorant_Upright"
  | "Courgette"
  | "Courier_Prime"
  | "Cousine"
  | "Coustard"
  | "Covered_By_Your_Grace"
  | "Crafty_Girls"
  | "Creepster"
  | "Crete_Round"
  | "Crimson_Pro"
  | "Crimson_Text"
  | "Croissant_One"
  | "Crushed"
  | "Cuprum"
  | "Cute_Font"
  | "Cutive"
  | "Cutive_Mono"
  | "DM_Mono"
  | "DM_Sans"
  | "DM_Serif_Display"
  | "DM_Serif_Text"
  | "Dai_Banna_SIL"
  | "Damion"
  | "Dancing_Script"
  | "Dangrek"
  | "Darker_Grotesque"
  | "Darumadrop_One"
  | "David_Libre"
  | "Dawning_of_a_New_Day"
  | "Days_One"
  | "Dekko"
  | "Dela_Gothic_One"
  | "Delicious_Handrawn"
  | "Delius"
  | "Delius_Swash_Caps"
  | "Delius_Unicase"
  | "Della_Respira"
  | "Denk_One"
  | "Devonshire"
  | "Dhurjati"
  | "Didact_Gothic"
  | "Diphylleia"
  | "Diplomata"
  | "Diplomata_SC"
  | "Do_Hyeon"
  | "Dokdo"
  | "Domine"
  | "Donegal_One"
  | "Dongle"
  | "Doppio_One"
  | "Dorsa"
  | "Dosis"
  | "DotGothic16"
  | "Dr_Sugiyama"
  | "Duru_Sans"
  | "DynaPuff"
  | "Dynalight"
  | "EB_Garamond"
  | "Eagle_Lake"
  | "East_Sea_Dokdo"
  | "Eater"
  | "Economica"
  | "Eczar"
  | "Edu_NSW_ACT_Foundation"
  | "Edu_QLD_Beginner"
  | "Edu_SA_Beginner"
  | "Edu_TAS_Beginner"
  | "Edu_VIC_WA_NT_Beginner"
  | "El_Messiri"
  | "Electrolize"
  | "Elsie"
  | "Elsie_Swash_Caps"
  | "Emblema_One"
  | "Emilys_Candy"
  | "Encode_Sans"
  | "Encode_Sans_Condensed"
  | "Encode_Sans_Expanded"
  | "Encode_Sans_SC"
  | "Encode_Sans_Semi_Condensed"
  | "Encode_Sans_Semi_Expanded"
  | "Engagement"
  | "Englebert"
  | "Enriqueta"
  | "Ephesis"
  | "Epilogue"
  | "Erica_One"
  | "Esteban"
  | "Estonia"
  | "Euphoria_Script"
  | "Ewert"
  | "Exo"
  | "Exo_2"
  | "Expletus_Sans"
  | "Explora"
  | "Fahkwang"
  | "Familjen_Grotesk"
  | "Fanwood_Text"
  | "Farro"
  | "Farsan"
  | "Fascinate"
  | "Fascinate_Inline"
  | "Faster_One"
  | "Fasthand"
  | "Fauna_One"
  | "Faustina"
  | "Federant"
  | "Federo"
  | "Felipa"
  | "Fenix"
  | "Festive"
  | "Figtree"
  | "Finger_Paint"
  | "Finlandica"
  | "Fira_Code"
  | "Fira_Mono"
  | "Fira_Sans"
  | "Fira_Sans_Condensed"
  | "Fira_Sans_Extra_Condensed"
  | "Fjalla_One"
  | "Fjord_One"
  | "Flamenco"
  | "Flavors"
  | "Fleur_De_Leah"
  | "Flow_Block"
  | "Flow_Circular"
  | "Flow_Rounded"
  | "Foldit"
  | "Fondamento"
  | "Fontdiner_Swanky"
  | "Forum"
  | "Fragment_Mono"
  | "Francois_One"
  | "Frank_Ruhl_Libre"
  | "Fraunces"
  | "Freckle_Face"
  | "Fredericka_the_Great"
  | "Fredoka"
  | "Freehand"
  | "Fresca"
  | "Frijole"
  | "Fruktur"
  | "Fugaz_One"
  | "Fuggles"
  | "Fuzzy_Bubbles"
  | "GFS_Didot"
  | "GFS_Neohellenic"
  | "Gabriela"
  | "Gaegu"
  | "Gafata"
  | "Gajraj_One"
  | "Galada"
  | "Galdeano"
  | "Galindo"
  | "Gamja_Flower"
  | "Gantari"
  | "Gasoek_One"
  | "Gayathri"
  | "Gelasio"
  | "Gemunu_Libre"
  | "Genos"
  | "Gentium_Book_Plus"
  | "Gentium_Plus"
  | "Geo"
  | "Georama"
  | "Geostar"
  | "Geostar_Fill"
  | "Germania_One"
  | "Gideon_Roman"
  | "Gidugu"
  | "Gilda_Display"
  | "Girassol"
  | "Give_You_Glory"
  | "Glass_Antiqua"
  | "Glegoo"
  | "Gloock"
  | "Gloria_Hallelujah"
  | "Glory"
  | "Gluten"
  | "Goblin_One"
  | "Gochi_Hand"
  | "Goldman"
  | "Golos_Text"
  | "Gorditas"
  | "Gothic_A1"
  | "Gotu"
  | "Goudy_Bookletter_1911"
  | "Gowun_Batang"
  | "Gowun_Dodum"
  | "Graduate"
  | "Grand_Hotel"
  | "Grandiflora_One"
  | "Grandstander"
  | "Grape_Nuts"
  | "Gravitas_One"
  | "Great_Vibes"
  | "Grechen_Fuemen"
  | "Grenze"
  | "Grenze_Gotisch"
  | "Grey_Qo"
  | "Griffy"
  | "Gruppo"
  | "Gudea"
  | "Gugi"
  | "Gulzar"
  | "Gupter"
  | "Gurajada"
  | "Gwendolyn"
  | "Habibi"
  | "Hachi_Maru_Pop"
  | "Hahmlet"
  | "Halant"
  | "Hammersmith_One"
  | "Hanalei"
  | "Hanalei_Fill"
  | "Handjet"
  | "Handlee"
  | "Hanken_Grotesk"
  | "Hanuman"
  | "Happy_Monkey"
  | "Harmattan"
  | "Headland_One"
  | "Hedvig_Letters_Sans"
  | "Hedvig_Letters_Serif"
  | "Heebo"
  | "Henny_Penny"
  | "Hepta_Slab"
  | "Herr_Von_Muellerhoff"
  | "Hi_Melody"
  | "Hina_Mincho"
  | "Hind"
  | "Hind_Guntur"
  | "Hind_Madurai"
  | "Hind_Siliguri"
  | "Hind_Vadodara"
  | "Holtwood_One_SC"
  | "Homemade_Apple"
  | "Homenaje"
  | "Honk"
  | "Hubballi"
  | "Hurricane"
  | "IBM_Plex_Mono"
  | "IBM_Plex_Sans"
  | "IBM_Plex_Sans_Arabic"
  | "IBM_Plex_Sans_Condensed"
  | "IBM_Plex_Sans_Devanagari"
  | "IBM_Plex_Sans_Hebrew"
  | "IBM_Plex_Sans_JP"
  | "IBM_Plex_Sans_KR"
  | "IBM_Plex_Sans_Thai"
  | "IBM_Plex_Sans_Thai_Looped"
  | "IBM_Plex_Serif"
  | "IM_Fell_DW_Pica"
  | "IM_Fell_DW_Pica_SC"
  | "IM_Fell_Double_Pica"
  | "IM_Fell_Double_Pica_SC"
  | "IM_Fell_English"
  | "IM_Fell_English_SC"
  | "IM_Fell_French_Canon"
  | "IM_Fell_French_Canon_SC"
  | "IM_Fell_Great_Primer"
  | "IM_Fell_Great_Primer_SC"
  | "Ibarra_Real_Nova"
  | "Iceberg"
  | "Iceland"
  | "Imbue"
  | "Imperial_Script"
  | "Imprima"
  | "Inclusive_Sans"
  | "Inconsolata"
  | "Inder"
  | "Indie_Flower"
  | "Ingrid_Darling"
  | "Inika"
  | "Inknut_Antiqua"
  | "Inria_Sans"
  | "Inria_Serif"
  | "Inspiration"
  | "Instrument_Sans"
  | "Instrument_Serif"
  | "Inter"
  | "Inter_Tight"
  | "Irish_Grover"
  | "Island_Moments"
  | "Istok_Web"
  | "Italiana"
  | "Italianno"
  | "Itim"
  | "Jacquard_12"
  | "Jacquard_12_Charted"
  | "Jacquard_24"
  | "Jacquard_24_Charted"
  | "Jacquarda_Bastarda_9"
  | "Jacquarda_Bastarda_9_Charted"
  | "Jacques_Francois"
  | "Jacques_Francois_Shadow"
  | "Jaini"
  | "Jaini_Purva"
  | "Jaldi"
  | "Jaro"
  | "Jersey_10"
  | "Jersey_10_Charted"
  | "Jersey_15"
  | "Jersey_15_Charted"
  | "Jersey_20"
  | "Jersey_20_Charted"
  | "Jersey_25"
  | "Jersey_25_Charted"
  | "JetBrains_Mono"
  | "Jim_Nightshade"
  | "Joan"
  | "Jockey_One"
  | "Jolly_Lodger"
  | "Jomhuria"
  | "Jomolhari"
  | "Josefin_Sans"
  | "Josefin_Slab"
  | "Jost"
  | "Joti_One"
  | "Jua"
  | "Judson"
  | "Julee"
  | "Julius_Sans_One"
  | "Junge"
  | "Jura"
  | "Just_Another_Hand"
  | "Just_Me_Again_Down_Here"
  | "K2D"
  | "Kablammo"
  | "Kadwa"
  | "Kaisei_Decol"
  | "Kaisei_HarunoUmi"
  | "Kaisei_Opti"
  | "Kaisei_Tokumin"
  | "Kalam"
  | "Kalnia"
  | "Kalnia_Glaze"
  | "Kameron"
  | "Kanit"
  | "Kantumruy_Pro"
  | "Karantina"
  | "Karla"
  | "Karla_Tamil_Inclined"
  | "Karla_Tamil_Upright"
  | "Karma"
  | "Katibeh"
  | "Kaushan_Script"
  | "Kavivanar"
  | "Kavoon"
  | "Kay_Pho_Du"
  | "Kdam_Thmor_Pro"
  | "Keania_One"
  | "Kelly_Slab"
  | "Kenia"
  | "Khand"
  | "Khmer"
  | "Khula"
  | "Kings"
  | "Kirang_Haerang"
  | "Kite_One"
  | "Kiwi_Maru"
  | "Klee_One"
  | "Knewave"
  | "KoHo"
  | "Kodchasan"
  | "Kode_Mono"
  | "Koh_Santepheap"
  | "Kolker_Brush"
  | "Konkhmer_Sleokchher"
  | "Kosugi"
  | "Kosugi_Maru"
  | "Kotta_One"
  | "Koulen"
  | "Kranky"
  | "Kreon"
  | "Kristi"
  | "Krona_One"
  | "Krub"
  | "Kufam"
  | "Kulim_Park"
  | "Kumar_One"
  | "Kumar_One_Outline"
  | "Kumbh_Sans"
  | "Kurale"
  | "LXGW_WenKai_Mono_TC"
  | "LXGW_WenKai_TC"
  | "La_Belle_Aurore"
  | "Labrada"
  | "Lacquer"
  | "Laila"
  | "Lakki_Reddy"
  | "Lalezar"
  | "Lancelot"
  | "Langar"
  | "Lateef"
  | "Lato"
  | "Lavishly_Yours"
  | "League_Gothic"
  | "League_Script"
  | "League_Spartan"
  | "Leckerli_One"
  | "Ledger"
  | "Lekton"
  | "Lemon"
  | "Lemonada"
  | "Lexend"
  | "Lexend_Deca"
  | "Lexend_Exa"
  | "Lexend_Giga"
  | "Lexend_Mega"
  | "Lexend_Peta"
  | "Lexend_Tera"
  | "Lexend_Zetta"
  | "Libre_Barcode_128"
  | "Libre_Barcode_128_Text"
  | "Libre_Barcode_39"
  | "Libre_Barcode_39_Extended"
  | "Libre_Barcode_39_Extended_Text"
  | "Libre_Barcode_39_Text"
  | "Libre_Barcode_EAN13_Text"
  | "Libre_Baskerville"
  | "Libre_Bodoni"
  | "Libre_Caslon_Display"
  | "Libre_Caslon_Text"
  | "Libre_Franklin"
  | "Licorice"
  | "Life_Savers"
  | "Lilita_One"
  | "Lily_Script_One"
  | "Limelight"
  | "Linden_Hill"
  | "Linefont"
  | "Lisu_Bosa"
  | "Literata"
  | "Liu_Jian_Mao_Cao"
  | "Livvic"
  | "Lobster"
  | "Lobster_Two"
  | "Londrina_Outline"
  | "Londrina_Shadow"
  | "Londrina_Sketch"
  | "Londrina_Solid"
  | "Long_Cang"
  | "Lora"
  | "Love_Light"
  | "Love_Ya_Like_A_Sister"
  | "Loved_by_the_King"
  | "Lovers_Quarrel"
  | "Luckiest_Guy"
  | "Lugrasimo"
  | "Lumanosimo"
  | "Lunasima"
  | "Lusitana"
  | "Lustria"
  | "Luxurious_Roman"
  | "Luxurious_Script"
  | "M_PLUS_1"
  | "M_PLUS_1_Code"
  | "M_PLUS_1p"
  | "M_PLUS_2"
  | "M_PLUS_Code_Latin"
  | "M_PLUS_Rounded_1c"
  | "Ma_Shan_Zheng"
  | "Macondo"
  | "Macondo_Swash_Caps"
  | "Mada"
  | "Madimi_One"
  | "Magra"
  | "Maiden_Orange"
  | "Maitree"
  | "Major_Mono_Display"
  | "Mako"
  | "Mali"
  | "Mallanna"
  | "Maname"
  | "Mandali"
  | "Manjari"
  | "Manrope"
  | "Mansalva"
  | "Manuale"
  | "Marcellus"
  | "Marcellus_SC"
  | "Marck_Script"
  | "Margarine"
  | "Marhey"
  | "Markazi_Text"
  | "Marko_One"
  | "Marmelad"
  | "Martel"
  | "Martel_Sans"
  | "Martian_Mono"
  | "Marvel"
  | "Mate"
  | "Mate_SC"
  | "Matemasie"
  | "Maven_Pro"
  | "McLaren"
  | "Mea_Culpa"
  | "Meddon"
  | "MedievalSharp"
  | "Medula_One"
  | "Meera_Inimai"
  | "Megrim"
  | "Meie_Script"
  | "Meow_Script"
  | "Merienda"
  | "Merriweather"
  | "Merriweather_Sans"
  | "Metal"
  | "Metal_Mania"
  | "Metamorphous"
  | "Metrophobic"
  | "Michroma"
  | "Micro_5"
  | "Micro_5_Charted"
  | "Milonga"
  | "Miltonian"
  | "Miltonian_Tattoo"
  | "Mina"
  | "Mingzat"
  | "Miniver"
  | "Miriam_Libre"
  | "Mirza"
  | "Miss_Fajardose"
  | "Mitr"
  | "Mochiy_Pop_One"
  | "Mochiy_Pop_P_One"
  | "Modak"
  | "Modern_Antiqua"
  | "Moderustic"
  | "Mogra"
  | "Mohave"
  | "Moirai_One"
  | "Molengo"
  | "Molle"
  | "Monda"
  | "Monofett"
  | "Monomaniac_One"
  | "Monoton"
  | "Monsieur_La_Doulaise"
  | "Montaga"
  | "Montagu_Slab"
  | "MonteCarlo"
  | "Montez"
  | "Montserrat"
  | "Montserrat_Alternates"
  | "Montserrat_Subrayada"
  | "Moo_Lah_Lah"
  | "Mooli"
  | "Moon_Dance"
  | "Moul"
  | "Moulpali"
  | "Mountains_of_Christmas"
  | "Mouse_Memoirs"
  | "Mr_Bedfort"
  | "Mr_Dafoe"
  | "Mr_De_Haviland"
  | "Mrs_Saint_Delafield"
  | "Mrs_Sheppards"
  | "Ms_Madi"
  | "Mukta"
  | "Mukta_Mahee"
  | "Mukta_Malar"
  | "Mukta_Vaani"
  | "Mulish"
  | "Murecho"
  | "MuseoModerno"
  | "My_Soul"
  | "Mynerve"
  | "Mystery_Quest"
  | "NTR"
  | "Nabla"
  | "Namdhinggo"
  | "Nanum_Brush_Script"
  | "Nanum_Gothic"
  | "Nanum_Gothic_Coding"
  | "Nanum_Myeongjo"
  | "Nanum_Pen_Script"
  | "Narnoor"
  | "Neonderthaw"
  | "Nerko_One"
  | "Neucha"
  | "Neuton"
  | "New_Amsterdam"
  | "New_Rocker"
  | "New_Tegomin"
  | "News_Cycle"
  | "Newsreader"
  | "Niconne"
  | "Niramit"
  | "Nixie_One"
  | "Nobile"
  | "Nokora"
  | "Norican"
  | "Nosifer"
  | "Notable"
  | "Nothing_You_Could_Do"
  | "Noticia_Text"
  | "Noto_Color_Emoji"
  | "Noto_Emoji"
  | "Noto_Kufi_Arabic"
  | "Noto_Music"
  | "Noto_Naskh_Arabic"
  | "Noto_Nastaliq_Urdu"
  | "Noto_Rashi_Hebrew"
  | "Noto_Sans"
  | "Noto_Sans_Adlam"
  | "Noto_Sans_Adlam_Unjoined"
  | "Noto_Sans_Anatolian_Hieroglyphs"
  | "Noto_Sans_Arabic"
  | "Noto_Sans_Armenian"
  | "Noto_Sans_Avestan"
  | "Noto_Sans_Balinese"
  | "Noto_Sans_Bamum"
  | "Noto_Sans_Bassa_Vah"
  | "Noto_Sans_Batak"
  | "Noto_Sans_Bengali"
  | "Noto_Sans_Bhaiksuki"
  | "Noto_Sans_Brahmi"
  | "Noto_Sans_Buginese"
  | "Noto_Sans_Buhid"
  | "Noto_Sans_Canadian_Aboriginal"
  | "Noto_Sans_Carian"
  | "Noto_Sans_Caucasian_Albanian"
  | "Noto_Sans_Chakma"
  | "Noto_Sans_Cham"
  | "Noto_Sans_Cherokee"
  | "Noto_Sans_Chorasmian"
  | "Noto_Sans_Coptic"
  | "Noto_Sans_Cuneiform"
  | "Noto_Sans_Cypriot"
  | "Noto_Sans_Cypro_Minoan"
  | "Noto_Sans_Deseret"
  | "Noto_Sans_Devanagari"
  | "Noto_Sans_Display"
  | "Noto_Sans_Duployan"
  | "Noto_Sans_Egyptian_Hieroglyphs"
  | "Noto_Sans_Elbasan"
  | "Noto_Sans_Elymaic"
  | "Noto_Sans_Ethiopic"
  | "Noto_Sans_Georgian"
  | "Noto_Sans_Glagolitic"
  | "Noto_Sans_Gothic"
  | "Noto_Sans_Grantha"
  | "Noto_Sans_Gujarati"
  | "Noto_Sans_Gunjala_Gondi"
  | "Noto_Sans_Gurmukhi"
  | "Noto_Sans_HK"
  | "Noto_Sans_Hanifi_Rohingya"
  | "Noto_Sans_Hanunoo"
  | "Noto_Sans_Hatran"
  | "Noto_Sans_Hebrew"
  | "Noto_Sans_Imperial_Aramaic"
  | "Noto_Sans_Indic_Siyaq_Numbers"
  | "Noto_Sans_Inscriptional_Pahlavi"
  | "Noto_Sans_Inscriptional_Parthian"
  | "Noto_Sans_JP"
  | "Noto_Sans_Javanese"
  | "Noto_Sans_KR"
  | "Noto_Sans_Kaithi"
  | "Noto_Sans_Kannada"
  | "Noto_Sans_Kawi"
  | "Noto_Sans_Kayah_Li"
  | "Noto_Sans_Kharoshthi"
  | "Noto_Sans_Khmer"
  | "Noto_Sans_Khojki"
  | "Noto_Sans_Khudawadi"
  | "Noto_Sans_Lao"
  | "Noto_Sans_Lao_Looped"
  | "Noto_Sans_Lepcha"
  | "Noto_Sans_Limbu"
  | "Noto_Sans_Linear_A"
  | "Noto_Sans_Linear_B"
  | "Noto_Sans_Lisu"
  | "Noto_Sans_Lycian"
  | "Noto_Sans_Lydian"
  | "Noto_Sans_Mahajani"
  | "Noto_Sans_Malayalam"
  | "Noto_Sans_Mandaic"
  | "Noto_Sans_Manichaean"
  | "Noto_Sans_Marchen"
  | "Noto_Sans_Masaram_Gondi"
  | "Noto_Sans_Math"
  | "Noto_Sans_Mayan_Numerals"
  | "Noto_Sans_Medefaidrin"
  | "Noto_Sans_Meetei_Mayek"
  | "Noto_Sans_Mende_Kikakui"
  | "Noto_Sans_Meroitic"
  | "Noto_Sans_Miao"
  | "Noto_Sans_Modi"
  | "Noto_Sans_Mongolian"
  | "Noto_Sans_Mono"
  | "Noto_Sans_Mro"
  | "Noto_Sans_Multani"
  | "Noto_Sans_Myanmar"
  | "Noto_Sans_NKo"
  | "Noto_Sans_NKo_Unjoined"
  | "Noto_Sans_Nabataean"
  | "Noto_Sans_Nag_Mundari"
  | "Noto_Sans_Nandinagari"
  | "Noto_Sans_New_Tai_Lue"
  | "Noto_Sans_Newa"
  | "Noto_Sans_Nushu"
  | "Noto_Sans_Ogham"
  | "Noto_Sans_Ol_Chiki"
  | "Noto_Sans_Old_Hungarian"
  | "Noto_Sans_Old_Italic"
  | "Noto_Sans_Old_North_Arabian"
  | "Noto_Sans_Old_Permic"
  | "Noto_Sans_Old_Persian"
  | "Noto_Sans_Old_Sogdian"
  | "Noto_Sans_Old_South_Arabian"
  | "Noto_Sans_Old_Turkic"
  | "Noto_Sans_Oriya"
  | "Noto_Sans_Osage"
  | "Noto_Sans_Osmanya"
  | "Noto_Sans_Pahawh_Hmong"
  | "Noto_Sans_Palmyrene"
  | "Noto_Sans_Pau_Cin_Hau"
  | "Noto_Sans_Phags_Pa"
  | "Noto_Sans_Phoenician"
  | "Noto_Sans_Psalter_Pahlavi"
  | "Noto_Sans_Rejang"
  | "Noto_Sans_Runic"
  | "Noto_Sans_SC"
  | "Noto_Sans_Samaritan"
  | "Noto_Sans_Saurashtra"
  | "Noto_Sans_Sharada"
  | "Noto_Sans_Shavian"
  | "Noto_Sans_Siddham"
  | "Noto_Sans_SignWriting"
  | "Noto_Sans_Sinhala"
  | "Noto_Sans_Sogdian"
  | "Noto_Sans_Sora_Sompeng"
  | "Noto_Sans_Soyombo"
  | "Noto_Sans_Sundanese"
  | "Noto_Sans_Syloti_Nagri"
  | "Noto_Sans_Symbols"
  | "Noto_Sans_Symbols_2"
  | "Noto_Sans_Syriac"
  | "Noto_Sans_Syriac_Eastern"
  | "Noto_Sans_TC"
  | "Noto_Sans_Tagalog"
  | "Noto_Sans_Tagbanwa"
  | "Noto_Sans_Tai_Le"
  | "Noto_Sans_Tai_Tham"
  | "Noto_Sans_Tai_Viet"
  | "Noto_Sans_Takri"
  | "Noto_Sans_Tamil"
  | "Noto_Sans_Tamil_Supplement"
  | "Noto_Sans_Tangsa"
  | "Noto_Sans_Telugu"
  | "Noto_Sans_Thaana"
  | "Noto_Sans_Thai"
  | "Noto_Sans_Thai_Looped"
  | "Noto_Sans_Tifinagh"
  | "Noto_Sans_Tirhuta"
  | "Noto_Sans_Ugaritic"
  | "Noto_Sans_Vai"
  | "Noto_Sans_Vithkuqi"
  | "Noto_Sans_Wancho"
  | "Noto_Sans_Warang_Citi"
  | "Noto_Sans_Yi"
  | "Noto_Sans_Zanabazar_Square"
  | "Noto_Serif"
  | "Noto_Serif_Ahom"
  | "Noto_Serif_Armenian"
  | "Noto_Serif_Balinese"
  | "Noto_Serif_Bengali"
  | "Noto_Serif_Devanagari"
  | "Noto_Serif_Display"
  | "Noto_Serif_Dogra"
  | "Noto_Serif_Ethiopic"
  | "Noto_Serif_Georgian"
  | "Noto_Serif_Grantha"
  | "Noto_Serif_Gujarati"
  | "Noto_Serif_Gurmukhi"
  | "Noto_Serif_HK"
  | "Noto_Serif_Hebrew"
  | "Noto_Serif_JP"
  | "Noto_Serif_KR"
  | "Noto_Serif_Kannada"
  | "Noto_Serif_Khitan_Small_Script"
  | "Noto_Serif_Khmer"
  | "Noto_Serif_Khojki"
  | "Noto_Serif_Lao"
  | "Noto_Serif_Makasar"
  | "Noto_Serif_Malayalam"
  | "Noto_Serif_Myanmar"
  | "Noto_Serif_NP_Hmong"
  | "Noto_Serif_Old_Uyghur"
  | "Noto_Serif_Oriya"
  | "Noto_Serif_Ottoman_Siyaq"
  | "Noto_Serif_SC"
  | "Noto_Serif_Sinhala"
  | "Noto_Serif_TC"
  | "Noto_Serif_Tamil"
  | "Noto_Serif_Tangut"
  | "Noto_Serif_Telugu"
  | "Noto_Serif_Thai"
  | "Noto_Serif_Tibetan"
  | "Noto_Serif_Toto"
  | "Noto_Serif_Vithkuqi"
  | "Noto_Serif_Yezidi"
  | "Noto_Traditional_Nushu"
  | "Noto_Znamenny_Musical_Notation"
  | "Nova_Cut"
  | "Nova_Flat"
  | "Nova_Mono"
  | "Nova_Oval"
  | "Nova_Round"
  | "Nova_Script"
  | "Nova_Slim"
  | "Nova_Square"
  | "Numans"
  | "Nunito"
  | "Nunito_Sans"
  | "Nuosu_SIL"
  | "Odibee_Sans"
  | "Odor_Mean_Chey"
  | "Offside"
  | "Oi"
  | "Ojuju"
  | "Old_Standard_TT"
  | "Oldenburg"
  | "Ole"
  | "Oleo_Script"
  | "Oleo_Script_Swash_Caps"
  | "Onest"
  | "Oooh_Baby"
  | "Open_Sans"
  | "Oranienbaum"
  | "Orbit"
  | "Orbitron"
  | "Oregano"
  | "Orelega_One"
  | "Orienta"
  | "Original_Surfer"
  | "Oswald"
  | "Outfit"
  | "Over_the_Rainbow"
  | "Overlock"
  | "Overlock_SC"
  | "Overpass"
  | "Overpass_Mono"
  | "Ovo"
  | "Oxanium"
  | "Oxygen"
  | "Oxygen_Mono"
  | "PT_Mono"
  | "PT_Sans"
  | "PT_Sans_Caption"
  | "PT_Sans_Narrow"
  | "PT_Serif"
  | "PT_Serif_Caption"
  | "Pacifico"
  | "Padauk"
  | "Padyakke_Expanded_One"
  | "Palanquin"
  | "Palanquin_Dark"
  | "Palette_Mosaic"
  | "Pangolin"
  | "Paprika"
  | "Parisienne"
  | "Passero_One"
  | "Passion_One"
  | "Passions_Conflict"
  | "Pathway_Extreme"
  | "Pathway_Gothic_One"
  | "Patrick_Hand"
  | "Patrick_Hand_SC"
  | "Pattaya"
  | "Patua_One"
  | "Pavanam"
  | "Paytone_One"
  | "Peddana"
  | "Peralta"
  | "Permanent_Marker"
  | "Petemoss"
  | "Petit_Formal_Script"
  | "Petrona"
  | "Philosopher"
  | "Phudu"
  | "Piazzolla"
  | "Piedra"
  | "Pinyon_Script"
  | "Pirata_One"
  | "Pixelify_Sans"
  | "Plaster"
  | "Platypi"
  | "Play"
  | "Playball"
  | "Playfair"
  | "Playfair_Display"
  | "Playfair_Display_SC"
  | "Playpen_Sans"
  | "Playwrite_AR"
  | "Playwrite_AT"
  | "Playwrite_AU_NSW"
  | "Playwrite_AU_QLD"
  | "Playwrite_AU_SA"
  | "Playwrite_AU_TAS"
  | "Playwrite_AU_VIC"
  | "Playwrite_BE_VLG"
  | "Playwrite_BE_WAL"
  | "Playwrite_BR"
  | "Playwrite_CA"
  | "Playwrite_CL"
  | "Playwrite_CO"
  | "Playwrite_CU"
  | "Playwrite_CZ"
  | "Playwrite_DE_Grund"
  | "Playwrite_DE_LA"
  | "Playwrite_DE_SAS"
  | "Playwrite_DE_VA"
  | "Playwrite_DK_Loopet"
  | "Playwrite_DK_Uloopet"
  | "Playwrite_ES"
  | "Playwrite_ES_Deco"
  | "Playwrite_FR_Moderne"
  | "Playwrite_FR_Trad"
  | "Playwrite_GB_J"
  | "Playwrite_GB_S"
  | "Playwrite_HR"
  | "Playwrite_HR_Lijeva"
  | "Playwrite_HU"
  | "Playwrite_ID"
  | "Playwrite_IE"
  | "Playwrite_IN"
  | "Playwrite_IS"
  | "Playwrite_IT_Moderna"
  | "Playwrite_IT_Trad"
  | "Playwrite_MX"
  | "Playwrite_NG_Modern"
  | "Playwrite_NL"
  | "Playwrite_NO"
  | "Playwrite_NZ"
  | "Playwrite_PE"
  | "Playwrite_PL"
  | "Playwrite_PT"
  | "Playwrite_RO"
  | "Playwrite_SK"
  | "Playwrite_TZ"
  | "Playwrite_US_Modern"
  | "Playwrite_US_Trad"
  | "Playwrite_VN"
  | "Playwrite_ZA"
  | "Plus_Jakarta_Sans"
  | "Podkova"
  | "Poetsen_One"
  | "Poiret_One"
  | "Poller_One"
  | "Poltawski_Nowy"
  | "Poly"
  | "Pompiere"
  | "Pontano_Sans"
  | "Poor_Story"
  | "Poppins"
  | "Port_Lligat_Sans"
  | "Port_Lligat_Slab"
  | "Potta_One"
  | "Pragati_Narrow"
  | "Praise"
  | "Prata"
  | "Preahvihear"
  | "Press_Start_2P"
  | "Pridi"
  | "Princess_Sofia"
  | "Prociono"
  | "Prompt"
  | "Prosto_One"
  | "Protest_Guerrilla"
  | "Protest_Revolution"
  | "Protest_Riot"
  | "Protest_Strike"
  | "Proza_Libre"
  | "Public_Sans"
  | "Puppies_Play"
  | "Puritan"
  | "Purple_Purse"
  | "Qahiri"
  | "Quando"
  | "Quantico"
  | "Quattrocento"
  | "Quattrocento_Sans"
  | "Questrial"
  | "Quicksand"
  | "Quintessential"
  | "Qwigley"
  | "Qwitcher_Grypen"
  | "REM"
  | "Racing_Sans_One"
  | "Radio_Canada"
  | "Radio_Canada_Big"
  | "Radley"
  | "Rajdhani"
  | "Rakkas"
  | "Raleway"
  | "Raleway_Dots"
  | "Ramabhadra"
  | "Ramaraja"
  | "Rambla"
  | "Rammetto_One"
  | "Rampart_One"
  | "Ranchers"
  | "Rancho"
  | "Ranga"
  | "Rasa"
  | "Rationale"
  | "Ravi_Prakash"
  | "Readex_Pro"
  | "Recursive"
  | "Red_Hat_Display"
  | "Red_Hat_Mono"
  | "Red_Hat_Text"
  | "Red_Rose"
  | "Redacted"
  | "Redacted_Script"
  | "Reddit_Mono"
  | "Reddit_Sans"
  | "Reddit_Sans_Condensed"
  | "Redressed"
  | "Reem_Kufi"
  | "Reem_Kufi_Fun"
  | "Reem_Kufi_Ink"
  | "Reenie_Beanie"
  | "Reggae_One"
  | "Rethink_Sans"
  | "Revalia"
  | "Rhodium_Libre"
  | "Ribeye"
  | "Ribeye_Marrow"
  | "Righteous"
  | "Risque"
  | "Road_Rage"
  | "Roboto"
  | "Roboto_Condensed"
  | "Roboto_Flex"
  | "Roboto_Mono"
  | "Roboto_Serif"
  | "Roboto_Slab"
  | "Rochester"
  | "Rock_3D"
  | "Rock_Salt"
  | "RocknRoll_One"
  | "Rokkitt"
  | "Romanesco"
  | "Ropa_Sans"
  | "Rosario"
  | "Rosarivo"
  | "Rouge_Script"
  | "Rowdies"
  | "Rozha_One"
  | "Rubik"
  | "Rubik_80s_Fade"
  | "Rubik_Beastly"
  | "Rubik_Broken_Fax"
  | "Rubik_Bubbles"
  | "Rubik_Burned"
  | "Rubik_Dirt"
  | "Rubik_Distressed"
  | "Rubik_Doodle_Shadow"
  | "Rubik_Doodle_Triangles"
  | "Rubik_Gemstones"
  | "Rubik_Glitch"
  | "Rubik_Glitch_Pop"
  | "Rubik_Iso"
  | "Rubik_Lines"
  | "Rubik_Maps"
  | "Rubik_Marker_Hatch"
  | "Rubik_Maze"
  | "Rubik_Microbe"
  | "Rubik_Mono_One"
  | "Rubik_Moonrocks"
  | "Rubik_Pixels"
  | "Rubik_Puddles"
  | "Rubik_Scribble"
  | "Rubik_Spray_Paint"
  | "Rubik_Storm"
  | "Rubik_Vinyl"
  | "Rubik_Wet_Paint"
  | "Ruda"
  | "Rufina"
  | "Ruge_Boogie"
  | "Ruluko"
  | "Rum_Raisin"
  | "Ruslan_Display"
  | "Russo_One"
  | "Ruthie"
  | "Ruwudu"
  | "Rye"
  | "STIX_Two_Text"
  | "SUSE"
  | "Sacramento"
  | "Sahitya"
  | "Sail"
  | "Saira"
  | "Saira_Condensed"
  | "Saira_Extra_Condensed"
  | "Saira_Semi_Condensed"
  | "Saira_Stencil_One"
  | "Salsa"
  | "Sanchez"
  | "Sancreek"
  | "Sankofa_Display"
  | "Sansita"
  | "Sansita_Swashed"
  | "Sarabun"
  | "Sarala"
  | "Sarina"
  | "Sarpanch"
  | "Sassy_Frass"
  | "Satisfy"
  | "Sawarabi_Gothic"
  | "Sawarabi_Mincho"
  | "Scada"
  | "Scheherazade_New"
  | "Schibsted_Grotesk"
  | "Schoolbell"
  | "Scope_One"
  | "Seaweed_Script"
  | "Secular_One"
  | "Sedan"
  | "Sedan_SC"
  | "Sedgwick_Ave"
  | "Sedgwick_Ave_Display"
  | "Sen"
  | "Send_Flowers"
  | "Sevillana"
  | "Seymour_One"
  | "Shadows_Into_Light"
  | "Shadows_Into_Light_Two"
  | "Shalimar"
  | "Shantell_Sans"
  | "Shanti"
  | "Share"
  | "Share_Tech"
  | "Share_Tech_Mono"
  | "Shippori_Antique"
  | "Shippori_Antique_B1"
  | "Shippori_Mincho"
  | "Shippori_Mincho_B1"
  | "Shizuru"
  | "Shojumaru"
  | "Short_Stack"
  | "Shrikhand"
  | "Siemreap"
  | "Sigmar"
  | "Sigmar_One"
  | "Signika"
  | "Signika_Negative"
  | "Silkscreen"
  | "Simonetta"
  | "Single_Day"
  | "Sintony"
  | "Sirin_Stencil"
  | "Six_Caps"
  | "Sixtyfour"
  | "Sixtyfour_Convergence"
  | "Skranji"
  | "Slabo_13px"
  | "Slabo_27px"
  | "Slackey"
  | "Slackside_One"
  | "Slackside_One"
  | "Smokum"
  | "Smooch"
  | "Smooch_Sans"
  | "Smythe"
  | "Sniglet"
  | "Snippet"
  | "Snowburst_One"
  | "Sofadi_One"
  | "Sofia"
  | "Sofia_Sans"
  | "Sofia_Sans_Condensed"
  | "Sofia_Sans_Extra_Condensed"
  | "Sofia_Sans_Semi_Condensed"
  | "Solitreo"
  | "Solway"
  | "Sometype_Mono"
  | "Song_Myung"
  | "Sono"
  | "Sonsie_One"
  | "Sora"
  | "Sorts_Mill_Goudy"
  | "Source_Code_Pro"
  | "Source_Sans_3"
  | "Source_Serif_4"
  | "Space_Grotesk"
  | "Space_Mono"
  | "Special_Elite"
  | "Spectral"
  | "Spectral_SC"
  | "Spicy_Rice"
  | "Spinnaker"
  | "Spirax"
  | "Splash"
  | "Spline_Sans"
  | "Spline_Sans_Mono"
  | "Squada_One"
  | "Square_Peg"
  | "Sree_Krushnadevaraya"
  | "Sriracha"
  | "Srisakdi"
  | "Staatliches"
  | "Stalemate"
  | "Stalinist_One"
  | "Stardos_Stencil"
  | "Stick"
  | "Stick_No_Bills"
  | "Stint_Ultra_Condensed"
  | "Stint_Ultra_Expanded"
  | "Stoke"
  | "Strait"
  | "Style_Script"
  | "Stylish"
  | "Sue_Ellen_Francisco"
  | "Suez_One"
  | "Sulphur_Point"
  | "Sumana"
  | "Sunflower"
  | "Sunshiney"
  | "Supermercado_One"
  | "Sura"
  | "Suranna"
  | "Suravaram"
  | "Suwannaphum"
  | "Swanky_and_Moo_Moo"
  | "Syncopate"
  | "Syne"
  | "Syne_Mono"
  | "Syne_Tactile"
  | "Tai_Heritage_Pro"
  | "Tajawal"
  | "Tangerine"
  | "Tapestry"
  | "Taprom"
  | "Tauri"
  | "Taviraj"
  | "Teko"
  | "Telex"
  | "Tenali_Ramakrishna"
  | "Tenor_Sans"
  | "Text_Me_One"
  | "Texturina"
  | "Thasadith"
  | "The_Girl_Next_Door"
  | "The_Nautigal"
  | "Tienne"
  | "Tillana"
  | "Tilt_Neon"
  | "Tilt_Prism"
  | "Tilt_Warp"
  | "Timmana"
  | "Tinos"
  | "Tiro_Bangla"
  | "Tiro_Devanagari_Hindi"
  | "Tiro_Devanagari_Marathi"
  | "Tiro_Devanagari_Sanskrit"
  | "Tiro_Gurmukhi"
  | "Tiro_Kannada"
  | "Tiro_Tamil"
  | "Tiro_Telugu"
  | "Titan_One"
  | "Titillium_Web"
  | "Tomorrow"
  | "Tourney"
  | "Trade_Winds"
  | "Train_One"
  | "Trirong"
  | "Trispace"
  | "Trocchi"
  | "Trochut"
  | "Truculenta"
  | "Trykker"
  | "Tulpen_One"
  | "Turret_Road"
  | "Twinkle_Star"
  | "Ubuntu"
  | "Ubuntu_Condensed"
  | "Ubuntu_Mono"
  | "Uchen"
  | "Ultra"
  | "Unbounded"
  | "Uncial_Antiqua"
  | "Underdog"
  | "Unica_One"
  | "UnifrakturCook"
  | "UnifrakturMaguntia"
  | "Unkempt"
  | "Unlock"
  | "Unna"
  | "Updock"
  | "Urbanist"
  | "VT323"
  | "Vampiro_One"
  | "Varela"
  | "Varela_Round"
  | "Varta"
  | "Vast_Shadow"
  | "Vazirmatn"
  | "Vesper_Libre"
  | "Viaoda_Libre"
  | "Vibes"
  | "Vibur"
  | "Victor_Mono"
  | "Vidaloka"
  | "Viga"
  | "Voces"
  | "Volkhov"
  | "Vollkorn"
  | "Vollkorn_SC"
  | "Voltaire"
  | "Vujahday_Script"
  | "Waiting_for_the_Sunrise"
  | "Wallpoet"
  | "Walter_Turncoat"
  | "Warnes"
  | "Water_Brush"
  | "Waterfall"
  | "Wellfleet"
  | "Wendy_One"
  | "Whisper"
  | "WindSong"
  | "Wire_One"
  | "Work_Sans"
  | "Xanh_Mono"
  | "Yaldevi"
  | "Yanone_Kaffeesatz"
  | "Yantramanav"
  | "Yatra_One"
  | "Yellowtail"
  | "Yeon_Sung"
  | "Yeseva_One"
  | "Yesteryear"
  | "Yomogi"
  | "Yrsa"
  | "Yuji_Boku"
  | "Yuji_Mai"
  | "Yuji_Syuku"
  | "Yusei_Magic"
  | "ZCOOL_KuaiLe"
  | "ZCOOL_QingKe_HuangYou"
  | "ZCOOL_XiaoWei"
  | "Zen_Antique"
  | "Zen_Antique_Soft"
  | "Zen_Dots"
  | "Zen_Kaku_Gothic_Antique"
  | "Zen_Kaku_Gothic_New"
  | "Zen_Kurenaido"
  | "Zen_Loop"
  | "Zen_Maru_Gothic"
  | "Zen_Old_Mincho"
  | "Zen_Tokyo_Zoo"
  | "Zeyada"
  | "Zhi_Mang_Xing"
  | "Zilla_Slab"
  | "Zilla_Slab_Highlight";

  const AR_One_Sans = AR_One_Sans({ subsets = ["latin"], display = "swap" });
  const Abel = Abel({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Abhaya_Libre = Abhaya_Libre({
    subsets = ["latin", "sinhala"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Aboreto = Aboreto({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Abril_Fatface = Abril_Fatface({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Abyssinica_SIL = Abyssinica_SIL({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Aclonica = Aclonica({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Acme = Acme({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Actor = Actor({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Adamina = Adamina({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Advent_Pro = Advent_Pro({
    subsets = ["greek", "latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Afacad = Afacad({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Afacad_Flux = Afacad_Flux({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Agbalumo = Agbalumo({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Agdasima = Agdasima({
    subsets = ["latin"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Aguafina_Script = Aguafina_Script({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Akatab = Akatab({
    subsets = ["latin", "latin-ext", "tifinagh"],
    weight = ["400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Akaya_Kanadaka = Akaya_Kanadaka({
    subsets = ["kannada", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Akaya_Telivigala = Akaya_Telivigala({
    subsets = ["latin", "latin-ext", "telugu"],
    weight = ["400"],
    display = "swap",
  });
  const Akronim = Akronim({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Akshar = Akshar({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Aladin = Aladin({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Alata = Alata({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Alatsi = Alatsi({
    subsets = ["cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Albert_Sans = Albert_Sans({
    subsets = ["latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Aldrich = Aldrich({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Alef = Alef({
    subsets = ["hebrew", "latin"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Alegreya = Alegreya({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Alegreya_SC = Alegreya_SC({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["400", "500", "700", "800", "900"],
    display = "swap",
  });
  const Alegreya_Sans = Alegreya_Sans({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["100", "300", "400", "500", "700", "800", "900"],
    display = "swap",
  });
  const Alegreya_Sans_SC = Alegreya_Sans_SC({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["100", "300", "400", "500", "700", "800", "900"],
    display = "swap",
  });
  const Aleo = Aleo({
    subsets = ["latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Alex_Brush = Alex_Brush({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Alexandria = Alexandria({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Alfa_Slab_One = Alfa_Slab_One({
    subsets = ["latin", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Alice = Alice({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Alike = Alike({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Alike_Angular = Alike_Angular({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Alkalami = Alkalami({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Alkatra = Alkatra({
    subsets = ["bengali", "devanagari", "latin", "latin-ext", "oriya"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Allan = Allan({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Allerta = Allerta({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Allerta_Stencil = Allerta_Stencil({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Allison = Allison({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Allura = Allura({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Almarai = Almarai({
    subsets = ["arabic"],
    weight = ["300", "400", "700", "800"],
    display = "swap",
  });
  const Almendra = Almendra({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Almendra_Display = Almendra_Display({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Almendra_SC = Almendra_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Alumni_Sans = Alumni_Sans({
    subsets = ["cyrillic", "latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Alumni_Sans_Collegiate_One = Alumni_Sans_Collegiate_One({
    subsets = ["cyrillic", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Alumni_Sans_Inline_One = Alumni_Sans_Inline_One({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Alumni_Sans_Pinstripe = Alumni_Sans_Pinstripe({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Amarante = Amarante({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Amaranth = Amaranth({
    subsets = ["latin"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Amatic_SC = Amatic_SC({
    subsets = ["cyrillic", "hebrew", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Amethysta = Amethysta({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Amiko = Amiko({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["400", "600", "700"],
    display = "swap",
  });
  const Amiri = Amiri({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Amiri_Quran = Amiri_Quran({
    subsets = ["arabic", "latin"],
    weight = ["400"],
    display = "swap",
  });
  const Amita = Amita({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Anaheim = Anaheim({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Andada_Pro = Andada_Pro({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Andika = Andika({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Anek_Bangla = Anek_Bangla({
    subsets = ["bengali", "latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Anek_Devanagari = Anek_Devanagari({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Anek_Gujarati = Anek_Gujarati({
    subsets = ["gujarati", "latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Anek_Gurmukhi = Anek_Gurmukhi({
    subsets = ["gurmukhi", "latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Anek_Kannada = Anek_Kannada({
    subsets = ["kannada", "latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Anek_Latin = Anek_Latin({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Anek_Malayalam = Anek_Malayalam({
    subsets = ["latin", "latin-ext", "malayalam"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Anek_Odia = Anek_Odia({
    subsets = ["latin", "latin-ext", "oriya"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Anek_Tamil = Anek_Tamil({
    subsets = ["latin", "latin-ext", "tamil"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Anek_Telugu = Anek_Telugu({
    subsets = ["latin", "latin-ext", "telugu"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Angkor = Angkor({
    subsets = ["khmer", "latin"],
    weight = ["400"],
    display = "swap",
  });
  const Annapurna_SIL = Annapurna_SIL({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Annie_Use_Your_Telescope = Annie_Use_Your_Telescope({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Anonymous_Pro = Anonymous_Pro({
    subsets = ["cyrillic", "greek", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Anta = Anta({
    subsets = ["latin", "latin-ext", "math", "symbols"],
    weight = ["400"],
    display = "swap",
  });
  const Antic = Antic({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Antic_Didone = Antic_Didone({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Antic_Slab = Antic_Slab({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Anton = Anton({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Anton_SC = Anton_SC({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Antonio = Antonio({
    subsets = ["latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Anuphan = Anuphan({
    subsets = ["latin", "latin-ext", "thai"],
    weight = ["100", "200", "300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Anybody = Anybody({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Aoboshi_One = Aoboshi_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Arapey = Arapey({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Arbutus = Arbutus({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Arbutus_Slab = Arbutus_Slab({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Architects_Daughter = Architects_Daughter({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Archivo = Archivo({
    subsets = ["latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Archivo_Black = Archivo_Black({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Archivo_Narrow = Archivo_Narrow({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Are_You_Serious = Are_You_Serious({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Aref_Ruqaa = Aref_Ruqaa({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Aref_Ruqaa_Ink = Aref_Ruqaa_Ink({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Arima = Arima({
    subsets = [
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "malayalam",
      "tamil",
      "vietnamese",
    ],
    weight = ["100", "200", "300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Arimo = Arimo({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "hebrew",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Arizonia = Arizonia({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Armata = Armata({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Arsenal = Arsenal({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Arsenal_SC = Arsenal_SC({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Artifika = Artifika({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Arvo = Arvo({ subsets = ["latin"], weight = ["400", "700"], display = "swap" });
  const Arya = Arya({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Asap = Asap({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Asap_Condensed = Asap_Condensed({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Asar = Asar({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Asset = Asset({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Assistant = Assistant({
    subsets = ["hebrew", "latin", "latin-ext"],
    weight = ["200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Astloch = Astloch({
    subsets = ["latin"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Asul = Asul({ subsets = ["latin"], weight = ["400", "700"], display = "swap" });
  const Athiti = Athiti({
    subsets = ["latin", "latin-ext", "thai", "vietnamese"],
    weight = ["200", "300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Atkinson_Hyperlegible = Atkinson_Hyperlegible({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Atma = Atma({
    subsets = ["bengali", "latin", "latin-ext"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Atomic_Age = Atomic_Age({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Aubrey = Aubrey({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Audiowide = Audiowide({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Autour_One = Autour_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Average = Average({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Average_Sans = Average_Sans({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Averia_Gruesa_Libre = Averia_Gruesa_Libre({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Averia_Libre = Averia_Libre({
    subsets = ["latin"],
    weight = ["300", "400", "700"],
    display = "swap",
  });
  const Averia_Sans_Libre = Averia_Sans_Libre({
    subsets = ["latin"],
    weight = ["300", "400", "700"],
    display = "swap",
  });
  const Averia_Serif_Libre = Averia_Serif_Libre({
    subsets = ["latin"],
    weight = ["300", "400", "700"],
    display = "swap",
  });
  const Azeret_Mono = Azeret_Mono({
    subsets = ["latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const B612 = B612({ subsets = ["latin"], weight = ["400", "700"], display = "swap" });
  const B612_Mono = B612_Mono({
    subsets = ["latin"],
    weight = ["400", "700"],
    display = "swap",
  });
  const BIZ_UDGothic = BIZ_UDGothic({
    subsets = ["cyrillic", "greek-ext", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const BIZ_UDMincho = BIZ_UDMincho({
    subsets = ["cyrillic", "greek-ext", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const BIZ_UDPGothic = BIZ_UDPGothic({
    subsets = ["cyrillic", "greek-ext", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const BIZ_UDPMincho = BIZ_UDPMincho({
    subsets = ["cyrillic", "greek-ext", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Babylonica = Babylonica({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Bacasime_Antique = Bacasime_Antique({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Bad_Script = Bad_Script({
    subsets = ["cyrillic", "latin"],
    weight = ["400"],
    display = "swap",
  });
  const Bagel_Fat_One = Bagel_Fat_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Bahiana = Bahiana({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Bahianita = Bahianita({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Bai_Jamjuree = Bai_Jamjuree({
    subsets = ["latin", "latin-ext", "thai", "vietnamese"],
    weight = ["200", "300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Bakbak_One = Bakbak_One({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Ballet = Ballet({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Baloo_2 = Baloo_2({
    subsets = ["devanagari", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Baloo_Bhai_2 = Baloo_Bhai_2({
    subsets = ["gujarati", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Baloo_Bhaijaan_2 = Baloo_Bhaijaan_2({
    subsets = ["arabic", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Baloo_Bhaina_2 = Baloo_Bhaina_2({
    subsets = ["latin", "latin-ext", "oriya", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Baloo_Chettan_2 = Baloo_Chettan_2({
    subsets = ["latin", "latin-ext", "malayalam", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Baloo_Da_2 = Baloo_Da_2({
    subsets = ["bengali", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Baloo_Paaji_2 = Baloo_Paaji_2({
    subsets = ["gurmukhi", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Baloo_Tamma_2 = Baloo_Tamma_2({
    subsets = ["kannada", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Baloo_Tammudu_2 = Baloo_Tammudu_2({
    subsets = ["latin", "latin-ext", "telugu", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Baloo_Thambi_2 = Baloo_Thambi_2({
    subsets = ["latin", "latin-ext", "tamil", "vietnamese"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Balsamiq_Sans = Balsamiq_Sans({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Balthazar = Balthazar({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Bangers = Bangers({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Barlow = Barlow({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Barlow_Condensed = Barlow_Condensed({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Barlow_Semi_Condensed = Barlow_Semi_Condensed({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Barriecito = Barriecito({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Barrio = Barrio({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Basic = Basic({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Baskervville = Baskervville({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Baskervville_SC = Baskervville_SC({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Battambang = Battambang({
    subsets = ["khmer", "latin"],
    weight = ["100", "300", "400", "700", "900"],
    display = "swap",
  });
  const Baumans = Baumans({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Bayon = Bayon({
    subsets = ["khmer", "latin"],
    weight = ["400"],
    display = "swap",
  });
  const Be_Vietnam_Pro = Be_Vietnam_Pro({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Beau_Rivage = Beau_Rivage({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Bebas_Neue = Bebas_Neue({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Beiruti = Beiruti({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Belanosima = Belanosima({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "600", "700"],
    display = "swap",
  });
  const Belgrano = Belgrano({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Bellefair = Bellefair({
    subsets = ["hebrew", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Belleza = Belleza({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Bellota = Bellota({
    subsets = ["cyrillic", "latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "700"],
    display = "swap",
  });
  const Bellota_Text = Bellota_Text({
    subsets = ["cyrillic", "latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "700"],
    display = "swap",
  });
  const BenchNine = BenchNine({
    subsets = ["latin", "latin-ext"],
    weight = ["300", "400", "700"],
    display = "swap",
  });
  const Benne = Benne({
    subsets = ["kannada", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Bentham = Bentham({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Berkshire_Swash = Berkshire_Swash({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Besley = Besley({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Beth_Ellen = Beth_Ellen({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Bevan = Bevan({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const BhuTuka_Expanded_One = BhuTuka_Expanded_One({
    subsets = ["gurmukhi", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Big_Shoulders_Display = Big_Shoulders_Display({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Big_Shoulders_Inline_Display = Big_Shoulders_Inline_Display({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Big_Shoulders_Inline_Text = Big_Shoulders_Inline_Text({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Big_Shoulders_Stencil_Display = Big_Shoulders_Stencil_Display({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Big_Shoulders_Stencil_Text = Big_Shoulders_Stencil_Text({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Big_Shoulders_Text = Big_Shoulders_Text({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Bigelow_Rules = Bigelow_Rules({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Bigshot_One = Bigshot_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Bilbo = Bilbo({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Bilbo_Swash_Caps = Bilbo_Swash_Caps({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const BioRhyme = BioRhyme({
    subsets = ["latin", "latin-ext"],
    weight = ["200", "300", "400", "700", "800"],
    display = "swap",
  });
  const BioRhyme_Expanded = BioRhyme_Expanded({
    subsets = ["latin", "latin-ext"],
    weight = ["200", "300", "400", "700", "800"],
    display = "swap",
  });
  const Birthstone = Birthstone({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Birthstone_Bounce = Birthstone_Bounce({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "500"],
    display = "swap",
  });
  const Biryani = Biryani({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["200", "300", "400", "600", "700", "800", "900"],
    display = "swap",
  });
  const Bitter = Bitter({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Black_And_White_Picture = Black_And_White_Picture({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Black_Han_Sans = Black_Han_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Black_Ops_One = Black_Ops_One({
    subsets = ["cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Blaka = Blaka({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Blaka_Hollow = Blaka_Hollow({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Blaka_Ink = Blaka_Ink({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Blinker = Blinker({
    subsets = ["latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "600", "700", "800", "900"],
    display = "swap",
  });
  const Bodoni_Moda = Bodoni_Moda({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Bokor = Bokor({
    subsets = ["khmer", "latin"],
    weight = ["400"],
    display = "swap",
  });
  const Bona_Nova = Bona_Nova({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "hebrew",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["400", "700"],
    display = "swap",
  });
  const Bonbon = Bonbon({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Bonheur_Royale = Bonheur_Royale({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Boogaloo = Boogaloo({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Borel = Borel({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Bowlby_One = Bowlby_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Bowlby_One_SC = Bowlby_One_SC({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Braah_One = Braah_One({
    subsets = ["gurmukhi", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Brawler = Brawler({
    subsets = ["latin"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Bree_Serif = Bree_Serif({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Bruno_Ace = Bruno_Ace({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Bruno_Ace_SC = Bruno_Ace_SC({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Brygada_1918 = Brygada_1918({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Bubblegum_Sans = Bubblegum_Sans({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Bubbler_One = Bubbler_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Buda = Buda({ subsets = ["latin"], weight = ["300"], display = "swap" });
  const Buenard = Buenard({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Bungee = Bungee({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Bungee_Hairline = Bungee_Hairline({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Bungee_Inline = Bungee_Inline({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Bungee_Outline = Bungee_Outline({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Bungee_Shade = Bungee_Shade({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Bungee_Spice = Bungee_Spice({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Butcherman = Butcherman({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Butterfly_Kids = Butterfly_Kids({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Cabin = Cabin({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Cabin_Condensed = Cabin_Condensed({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Cabin_Sketch = Cabin_Sketch({
    subsets = ["latin"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Caesar_Dressing = Caesar_Dressing({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Cagliostro = Cagliostro({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Cairo = Cairo({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Cairo_Play = Cairo_Play({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Caladea = Caladea({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Calistoga = Calistoga({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Calligraffitti = Calligraffitti({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Cambay = Cambay({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Cambo = Cambo({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Candal = Candal({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Cantarell = Cantarell({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Cantata_One = Cantata_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Cantora_One = Cantora_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Caprasimo = Caprasimo({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Caramel = Caramel({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Carattere = Carattere({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Cardo = Cardo({
    subsets = ["greek", "greek-ext", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Carlito = Carlito({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["400", "700"],
    display = "swap",
  });
  const Carme = Carme({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Carrois_Gothic = Carrois_Gothic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Carrois_Gothic_SC = Carrois_Gothic_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Carter_One = Carter_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Castoro = Castoro({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Castoro_Titling = Castoro_Titling({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Catamaran = Catamaran({
    subsets = ["latin", "latin-ext", "tamil"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Caudex = Caudex({
    subsets = ["greek", "greek-ext", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Caveat = Caveat({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Caveat_Brush = Caveat_Brush({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Cedarville_Cursive = Cedarville_Cursive({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Ceviche_One = Ceviche_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Chakra_Petch = Chakra_Petch({
    subsets = ["latin", "latin-ext", "thai", "vietnamese"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Changa = Changa({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Changa_One = Changa_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Chango = Chango({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Charis_SIL = Charis_SIL({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Charm = Charm({
    subsets = ["latin", "latin-ext", "thai", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Charmonman = Charmonman({
    subsets = ["latin", "latin-ext", "thai", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Chathura = Chathura({
    subsets = ["latin", "telugu"],
    weight = ["100", "300", "400", "700", "800"],
    display = "swap",
  });
  const Chau_Philomene_One = Chau_Philomene_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Chela_One = Chela_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Chelsea_Market = Chelsea_Market({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Chenla = Chenla({ subsets = ["khmer"], weight = ["400"], display = "swap" });
  const Cherish = Cherish({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Cherry_Bomb_One = Cherry_Bomb_One({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Cherry_Cream_Soda = Cherry_Cream_Soda({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Cherry_Swash = Cherry_Swash({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Chewy = Chewy({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Chicle = Chicle({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Chilanka = Chilanka({
    subsets = ["latin", "latin-ext", "malayalam"],
    weight = ["400"],
    display = "swap",
  });
  const Chivo = Chivo({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Chivo_Mono = Chivo_Mono({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Chokokutai = Chokokutai({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Chonburi = Chonburi({
    subsets = ["latin", "latin-ext", "thai", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Cinzel = Cinzel({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Cinzel_Decorative = Cinzel_Decorative({
    subsets = ["latin"],
    weight = ["400", "700", "900"],
    display = "swap",
  });
  const Clicker_Script = Clicker_Script({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Climate_Crisis = Climate_Crisis({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Coda = Coda({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "800"],
    display = "swap",
  });
  const Codystar = Codystar({
    subsets = ["latin", "latin-ext"],
    weight = ["300", "400"],
    display = "swap",
  });
  const Coiny = Coiny({
    subsets = ["latin", "latin-ext", "tamil", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Combo = Combo({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Comfortaa = Comfortaa({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Comforter = Comforter({
    subsets = ["cyrillic", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Comforter_Brush = Comforter_Brush({
    subsets = ["cyrillic", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Comic_Neue = Comic_Neue({
    subsets = ["latin"],
    weight = ["300", "400", "700"],
    display = "swap",
  });
  const Coming_Soon = Coming_Soon({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Comme = Comme({
    subsets = ["latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Commissioner = Commissioner({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Concert_One = Concert_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Condiment = Condiment({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Content = Content({
    subsets = ["khmer"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Contrail_One = Contrail_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Convergence = Convergence({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Cookie = Cookie({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Copse = Copse({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Corben = Corben({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Corinthia = Corinthia({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Cormorant = Cormorant({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Cormorant_Garamond = Cormorant_Garamond({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Cormorant_Infant = Cormorant_Infant({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Cormorant_SC = Cormorant_SC({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Cormorant_Unicase = Cormorant_Unicase({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Cormorant_Upright = Cormorant_Upright({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Courgette = Courgette({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Courier_Prime = Courier_Prime({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Cousine = Cousine({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "hebrew",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["400", "700"],
    display = "swap",
  });
  const Coustard = Coustard({
    subsets = ["latin"],
    weight = ["400", "900"],
    display = "swap",
  });
  const Covered_By_Your_Grace = Covered_By_Your_Grace({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Crafty_Girls = Crafty_Girls({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Creepster = Creepster({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Crete_Round = Crete_Round({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Crimson_Pro = Crimson_Pro({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Crimson_Text = Crimson_Text({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "600", "700"],
    display = "swap",
  });
  const Croissant_One = Croissant_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Crushed = Crushed({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Cuprum = Cuprum({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Cute_Font = Cute_Font({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Cutive = Cutive({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Cutive_Mono = Cutive_Mono({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const DM_Mono = DM_Mono({
    subsets = ["latin", "latin-ext"],
    weight = ["300", "400", "500"],
    display = "swap",
  });
  const DM_Sans = DM_Sans({
    subsets = ["latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const DM_Serif_Display = DM_Serif_Display({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const DM_Serif_Text = DM_Serif_Text({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Dai_Banna_SIL = Dai_Banna_SIL({
    subsets = ["latin", "latin-ext"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Damion = Damion({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Dancing_Script = Dancing_Script({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Dangrek = Dangrek({
    subsets = ["khmer", "latin"],
    weight = ["400"],
    display = "swap",
  });
  const Darker_Grotesque = Darker_Grotesque({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Darumadrop_One = Darumadrop_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const David_Libre = David_Libre({
    subsets = ["hebrew", "latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "700"],
    display = "swap",
  });
  const Dawning_of_a_New_Day = Dawning_of_a_New_Day({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Days_One = Days_One({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Dekko = Dekko({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Dela_Gothic_One = Dela_Gothic_One({
    subsets = ["cyrillic", "greek", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Delicious_Handrawn = Delicious_Handrawn({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Delius = Delius({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Delius_Swash_Caps = Delius_Swash_Caps({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Delius_Unicase = Delius_Unicase({
    subsets = ["latin"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Della_Respira = Della_Respira({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Denk_One = Denk_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Devonshire = Devonshire({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Dhurjati = Dhurjati({
    subsets = ["latin", "telugu"],
    weight = ["400"],
    display = "swap",
  });
  const Didact_Gothic = Didact_Gothic({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
    ],
    weight = ["400"],
    display = "swap",
  });
  const Diphylleia = Diphylleia({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Diplomata = Diplomata({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Diplomata_SC = Diplomata_SC({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Do_Hyeon = Do_Hyeon({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Dokdo = Dokdo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Domine = Domine({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Donegal_One = Donegal_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Dongle = Dongle({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "700"],
    display = "swap",
  });
  const Doppio_One = Doppio_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Dorsa = Dorsa({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Dosis = Dosis({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const DotGothic16 = DotGothic16({
    subsets = ["cyrillic", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Dr_Sugiyama = Dr_Sugiyama({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Duru_Sans = Duru_Sans({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const DynaPuff = DynaPuff({
    subsets = ["cyrillic-ext", "latin", "latin-ext"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Dynalight = Dynalight({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const EB_Garamond = EB_Garamond({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Eagle_Lake = Eagle_Lake({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const East_Sea_Dokdo = East_Sea_Dokdo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Eater = Eater({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Economica = Economica({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Eczar = Eczar({
    subsets = ["devanagari", "greek", "greek-ext", "latin", "latin-ext"],
    weight = ["400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Edu_NSW_ACT_Foundation = Edu_NSW_ACT_Foundation({
    subsets = ["latin"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Edu_QLD_Beginner = Edu_QLD_Beginner({
    subsets = ["latin"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Edu_SA_Beginner = Edu_SA_Beginner({
    subsets = ["latin"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Edu_TAS_Beginner = Edu_TAS_Beginner({
    subsets = ["latin"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Edu_VIC_WA_NT_Beginner = Edu_VIC_WA_NT_Beginner({
    subsets = ["latin"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const El_Messiri = El_Messiri({
    subsets = ["arabic", "cyrillic", "latin", "latin-ext"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Electrolize = Electrolize({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Elsie = Elsie({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "900"],
    display = "swap",
  });
  const Elsie_Swash_Caps = Elsie_Swash_Caps({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "900"],
    display = "swap",
  });
  const Emblema_One = Emblema_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Emilys_Candy = Emilys_Candy({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Encode_Sans = Encode_Sans({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Encode_Sans_Condensed = Encode_Sans_Condensed({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Encode_Sans_Expanded = Encode_Sans_Expanded({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Encode_Sans_SC = Encode_Sans_SC({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Encode_Sans_Semi_Condensed = Encode_Sans_Semi_Condensed({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Encode_Sans_Semi_Expanded = Encode_Sans_Semi_Expanded({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Engagement = Engagement({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Englebert = Englebert({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Enriqueta = Enriqueta({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Ephesis = Ephesis({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Epilogue = Epilogue({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Erica_One = Erica_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Esteban = Esteban({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Estonia = Estonia({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Euphoria_Script = Euphoria_Script({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Ewert = Ewert({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Exo = Exo({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Exo_2 = Exo_2({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Expletus_Sans = Expletus_Sans({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Explora = Explora({
    subsets = ["cherokee", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Fahkwang = Fahkwang({
    subsets = ["latin", "latin-ext", "thai", "vietnamese"],
    weight = ["200", "300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Familjen_Grotesk = Familjen_Grotesk({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Fanwood_Text = Fanwood_Text({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Farro = Farro({
    subsets = ["latin", "latin-ext"],
    weight = ["300", "400", "500", "700"],
    display = "swap",
  });
  const Farsan = Farsan({
    subsets = ["gujarati", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Fascinate = Fascinate({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Fascinate_Inline = Fascinate_Inline({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Faster_One = Faster_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Fasthand = Fasthand({
    subsets = ["khmer", "latin"],
    weight = ["400"],
    display = "swap",
  });
  const Fauna_One = Fauna_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Faustina = Faustina({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Federant = Federant({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Federo = Federo({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Felipa = Felipa({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Fenix = Fenix({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Festive = Festive({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Figtree = Figtree({
    subsets = ["latin", "latin-ext"],
    weight = ["300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Finger_Paint = Finger_Paint({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Finlandica = Finlandica({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Fira_Code = Fira_Code({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
    ],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Fira_Mono = Fira_Mono({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
    ],
    weight = ["400", "500", "700"],
    display = "swap",
  });
  const Fira_Sans = Fira_Sans({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Fira_Sans_Condensed = Fira_Sans_Condensed({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Fira_Sans_Extra_Condensed = Fira_Sans_Extra_Condensed({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Fjalla_One = Fjalla_One({
    subsets = ["cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Fjord_One = Fjord_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Flamenco = Flamenco({
    subsets = ["latin"],
    weight = ["300", "400"],
    display = "swap",
  });
  const Flavors = Flavors({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Fleur_De_Leah = Fleur_De_Leah({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Flow_Block = Flow_Block({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Flow_Circular = Flow_Circular({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Flow_Rounded = Flow_Rounded({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Foldit = Foldit({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Fondamento = Fondamento({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Fontdiner_Swanky = Fontdiner_Swanky({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Forum = Forum({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Fragment_Mono = Fragment_Mono({
    subsets = ["cyrillic-ext", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Francois_One = Francois_One({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Frank_Ruhl_Libre = Frank_Ruhl_Libre({
    subsets = ["hebrew", "latin", "latin-ext"],
    weight = ["300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Fraunces = Fraunces({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Freckle_Face = Freckle_Face({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Fredericka_the_Great = Fredericka_the_Great({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Fredoka = Fredoka({
    subsets = ["hebrew", "latin", "latin-ext"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Freehand = Freehand({
    subsets = ["khmer", "latin"],
    weight = ["400"],
    display = "swap",
  });
  const Fresca = Fresca({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Frijole = Frijole({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Fruktur = Fruktur({
    subsets = ["cyrillic-ext", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Fugaz_One = Fugaz_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Fuggles = Fuggles({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Fuzzy_Bubbles = Fuzzy_Bubbles({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const GFS_Didot = GFS_Didot({
    subsets = ["greek"],
    weight = ["400"],
    display = "swap",
  });
  const GFS_Neohellenic = GFS_Neohellenic({
    subsets = ["greek"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Gabriela = Gabriela({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Gaegu = Gaegu({
    subsets = ["latin"],
    weight = ["300", "400", "700"],
    display = "swap",
  });
  const Gafata = Gafata({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Gajraj_One = Gajraj_One({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Galada = Galada({
    subsets = ["bengali", "latin"],
    weight = ["400"],
    display = "swap",
  });
  const Galdeano = Galdeano({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Galindo = Galindo({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Gamja_Flower = Gamja_Flower({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Gantari = Gantari({
    subsets = ["latin", "latin-ext"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Gasoek_One = Gasoek_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Gayathri = Gayathri({
    subsets = ["latin", "malayalam"],
    weight = ["100", "400", "700"],
    display = "swap",
  });
  const Gelasio = Gelasio({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "500", "600", "700"],
    display = "swap",
  });
  const Gemunu_Libre = Gemunu_Libre({
    subsets = ["latin", "latin-ext", "sinhala"],
    weight = ["200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Genos = Genos({
    subsets = ["cherokee", "latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Gentium_Book_Plus = Gentium_Book_Plus({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["400", "700"],
    display = "swap",
  });
  const Gentium_Plus = Gentium_Plus({
    subsets = [
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "greek-ext",
      "latin",
      "latin-ext",
      "vietnamese",
    ],
    weight = ["400", "700"],
    display = "swap",
  });
  const Geo = Geo({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Georama = Georama({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Geostar = Geostar({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Geostar_Fill = Geostar_Fill({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Germania_One = Germania_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Gideon_Roman = Gideon_Roman({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Gidugu = Gidugu({
    subsets = ["latin", "telugu"],
    weight = ["400"],
    display = "swap",
  });
  const Gilda_Display = Gilda_Display({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Girassol = Girassol({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Give_You_Glory = Give_You_Glory({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Glass_Antiqua = Glass_Antiqua({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Glegoo = Glegoo({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Gloock = Gloock({
    subsets = ["cyrillic-ext", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Gloria_Hallelujah = Gloria_Hallelujah({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Glory = Glory({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800"],
    display = "swap",
  });
  const Gluten = Gluten({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Goblin_One = Goblin_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Gochi_Hand = Gochi_Hand({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Goldman = Goldman({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Golos_Text = Golos_Text({
    subsets = ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight = ["400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Gorditas = Gorditas({
    subsets = ["latin"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Gothic_A1 = Gothic_A1({
    subsets = ["latin"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Gotu = Gotu({
    subsets = ["devanagari", "latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Goudy_Bookletter_1911 = Goudy_Bookletter_1911({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Gowun_Batang = Gowun_Batang({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Gowun_Dodum = Gowun_Dodum({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Graduate = Graduate({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Grand_Hotel = Grand_Hotel({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Grandiflora_One = Grandiflora_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Grandstander = Grandstander({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Grape_Nuts = Grape_Nuts({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Gravitas_One = Gravitas_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Great_Vibes = Great_Vibes({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Grechen_Fuemen = Grechen_Fuemen({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Grenze = Grenze({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Grenze_Gotisch = Grenze_Gotisch({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Grey_Qo = Grey_Qo({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400"],
    display = "swap",
  });
  const Griffy = Griffy({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Gruppo = Gruppo({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Gudea = Gudea({
    subsets = ["latin", "latin-ext"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Gugi = Gugi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Gulzar = Gulzar({
    subsets = ["arabic", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Gupter = Gupter({
    subsets = ["latin"],
    weight = ["400", "500", "700"],
    display = "swap",
  });
  const Gurajada = Gurajada({
    subsets = ["latin", "telugu"],
    weight = ["400"],
    display = "swap",
  });
  const Gwendolyn = Gwendolyn({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["400", "700"],
    display = "swap",
  });
  const Habibi = Habibi({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Hachi_Maru_Pop = Hachi_Maru_Pop({
    subsets = ["cyrillic", "latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Hahmlet = Hahmlet({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Halant = Halant({
    subsets = ["devanagari", "latin", "latin-ext"],
    weight = ["300", "400", "500", "600", "700"],
    display = "swap",
  });
  const Hammersmith_One = Hammersmith_One({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Hanalei = Hanalei({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Hanalei_Fill = Hanalei_Fill({
    subsets = ["latin", "latin-ext"],
    weight = ["400"],
    display = "swap",
  });
  const Handjet = Handjet({
    subsets = ["latin", "latin-ext", "vietnamese"],
    weight = ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display = "swap",
  });
  const Handlee = Handlee({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Hanken_Grotesk = Hanken_Grotesk({ subsets = ["latin"], display = "swap" });
  const Hanuman = Hanuman({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Happy_Monkey = Happy_Monkey({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Harmattan = Harmattan({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Headland_One = Headland_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Hedvig_Letters_Sans = Hedvig_Letters_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Hedvig_Letters_Serif = Hedvig_Letters_Serif({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Heebo = Heebo({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Henny_Penny = Henny_Penny({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Hepta_Slab = Hepta_Slab({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Herr_Von_Muellerhoff = Herr_Von_Muellerhoff({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Hi_Melody = Hi_Melody({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Hina_Mincho = Hina_Mincho({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Hind = Hind({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Hind_Guntur = Hind_Guntur({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Hind_Madurai = Hind_Madurai({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Hind_Siliguri = Hind_Siliguri({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Hind_Vadodara = Hind_Vadodara({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Holtwood_One_SC = Holtwood_One_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Homemade_Apple = Homemade_Apple({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Homenaje = Homenaje({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Honk = Honk({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Hubballi = Hubballi({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Hurricane = Hurricane({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Mono = IBM_Plex_Mono({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Sans = IBM_Plex_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Sans_Arabic = IBM_Plex_Sans_Arabic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Sans_Condensed = IBM_Plex_Sans_Condensed({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Sans_Devanagari = IBM_Plex_Sans_Devanagari({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Sans_Hebrew = IBM_Plex_Sans_Hebrew({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Sans_JP = IBM_Plex_Sans_JP({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Sans_KR = IBM_Plex_Sans_KR({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Sans_Thai = IBM_Plex_Sans_Thai({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Sans_Thai_Looped = IBM_Plex_Sans_Thai_Looped({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IBM_Plex_Serif = IBM_Plex_Serif({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IM_Fell_DW_Pica = IM_Fell_DW_Pica({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IM_Fell_DW_Pica_SC = IM_Fell_DW_Pica_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IM_Fell_Double_Pica = IM_Fell_Double_Pica({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IM_Fell_Double_Pica_SC = IM_Fell_Double_Pica_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IM_Fell_English = IM_Fell_English({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IM_Fell_English_SC = IM_Fell_English_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IM_Fell_French_Canon = IM_Fell_French_Canon({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IM_Fell_French_Canon_SC = IM_Fell_French_Canon_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IM_Fell_Great_Primer = IM_Fell_Great_Primer({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const IM_Fell_Great_Primer_SC = IM_Fell_Great_Primer_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Ibarra_Real_Nova = Ibarra_Real_Nova({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Iceberg = Iceberg({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Iceland = Iceland({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Imbue = Imbue({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Imperial_Script = Imperial_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Imprima = Imprima({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Inclusive_Sans = Inclusive_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Inconsolata = Inconsolata({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Inder = Inder({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Indie_Flower = Indie_Flower({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Ingrid_Darling = Ingrid_Darling({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Inika = Inika({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Inknut_Antiqua = Inknut_Antiqua({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Inria_Sans = Inria_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Inria_Serif = Inria_Serif({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Inspiration = Inspiration({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Instrument_Sans = Instrument_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Instrument_Serif = Instrument_Serif({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Inter = Inter({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Inter_Tight = Inter_Tight({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Irish_Grover = Irish_Grover({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Island_Moments = Island_Moments({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Istok_Web = Istok_Web({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Italiana = Italiana({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Italianno = Italianno({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Itim = Itim({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Jacquard_12 = Jacquard_12({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jacquard_12_Charted = Jacquard_12_Charted({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jacquard_24 = Jacquard_24({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jacquard_24_Charted = Jacquard_24_Charted({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jacquarda_Bastarda_9 = Jacquarda_Bastarda_9({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jacquarda_Bastarda_9_Charted = Jacquarda_Bastarda_9_Charted({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jacques_Francois = Jacques_Francois({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jacques_Francois_Shadow = Jacques_Francois_Shadow({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jaini = Jaini({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Jaini_Purva = Jaini_Purva({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jaldi = Jaldi({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Jaro = Jaro({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Jersey_10 = Jersey_10({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jersey_10_Charted = Jersey_10_Charted({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jersey_15 = Jersey_15({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jersey_15_Charted = Jersey_15_Charted({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jersey_20 = Jersey_20({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jersey_20_Charted = Jersey_20_Charted({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jersey_25 = Jersey_25({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jersey_25_Charted = Jersey_25_Charted({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const JetBrains_Mono = JetBrains_Mono({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jim_Nightshade = Jim_Nightshade({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Joan = Joan({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Jockey_One = Jockey_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jolly_Lodger = Jolly_Lodger({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jomhuria = Jomhuria({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Jomolhari = Jomolhari({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Josefin_Sans = Josefin_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Josefin_Slab = Josefin_Slab({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Jost = Jost({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Joti_One = Joti_One({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Jua = Jua({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Judson = Judson({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Julee = Julee({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Julius_Sans_One = Julius_Sans_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Junge = Junge({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Jura = Jura({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Just_Another_Hand = Just_Another_Hand({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Just_Me_Again_Down_Here = Just_Me_Again_Down_Here({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const K2D = K2D({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kablammo = Kablammo({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kadwa = Kadwa({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kaisei_Decol = Kaisei_Decol({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kaisei_HarunoUmi = Kaisei_HarunoUmi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kaisei_Opti = Kaisei_Opti({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kaisei_Tokumin = Kaisei_Tokumin({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kalam = Kalam({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kalnia = Kalnia({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kalnia_Glaze = Kalnia_Glaze({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kameron = Kameron({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kanit = Kanit({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kantumruy_Pro = Kantumruy_Pro({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Karantina = Karantina({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Karla = Karla({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Karla_Tamil_Inclined = Karla_Tamil_Inclined({
    subsets = ["tamil"],
    weight = ["400"],
    display = "swap",
  });
  const Karla_Tamil_Upright = Karla_Tamil_Upright({
    subsets = ["tamil"],
    weight = ["400"],
    display = "swap",
  });
  const Karma = Karma({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Katibeh = Katibeh({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kaushan_Script = Kaushan_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kavivanar = Kavivanar({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kavoon = Kavoon({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kay_Pho_Du = Kay_Pho_Du({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kdam_Thmor_Pro = Kdam_Thmor_Pro({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Keania_One = Keania_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kelly_Slab = Kelly_Slab({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kenia = Kenia({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Khand = Khand({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Khmer = Khmer({ subsets = ["khmer"], weight = ["400"], display = "swap" });
  const Khula = Khula({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kings = Kings({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kirang_Haerang = Kirang_Haerang({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kite_One = Kite_One({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kiwi_Maru = Kiwi_Maru({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Klee_One = Klee_One({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Knewave = Knewave({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const KoHo = KoHo({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kodchasan = Kodchasan({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kode_Mono = Kode_Mono({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Koh_Santepheap = Koh_Santepheap({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kolker_Brush = Kolker_Brush({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Konkhmer_Sleokchher = Konkhmer_Sleokchher({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kosugi = Kosugi({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kosugi_Maru = Kosugi_Maru({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kotta_One = Kotta_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Koulen = Koulen({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kranky = Kranky({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kreon = Kreon({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kristi = Kristi({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Krona_One = Krona_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Krub = Krub({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kufam = Kufam({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Kulim_Park = Kulim_Park({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kumar_One = Kumar_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kumar_One_Outline = Kumar_One_Outline({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kumbh_Sans = Kumbh_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Kurale = Kurale({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const LXGW_WenKai_Mono_TC = LXGW_WenKai_Mono_TC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const LXGW_WenKai_TC = LXGW_WenKai_TC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const La_Belle_Aurore = La_Belle_Aurore({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Labrada = Labrada({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lacquer = Lacquer({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Laila = Laila({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lakki_Reddy = Lakki_Reddy({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lalezar = Lalezar({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lancelot = Lancelot({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Langar = Langar({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lateef = Lateef({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lato = Lato({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lavishly_Yours = Lavishly_Yours({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const League_Gothic = League_Gothic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const League_Script = League_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const League_Spartan = League_Spartan({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Leckerli_One = Leckerli_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Ledger = Ledger({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lekton = Lekton({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lemon = Lemon({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lemonada = Lemonada({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lexend = Lexend({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lexend_Deca = Lexend_Deca({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lexend_Exa = Lexend_Exa({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lexend_Giga = Lexend_Giga({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lexend_Mega = Lexend_Mega({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lexend_Peta = Lexend_Peta({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lexend_Tera = Lexend_Tera({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lexend_Zetta = Lexend_Zetta({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Barcode_128 = Libre_Barcode_128({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Barcode_128_Text = Libre_Barcode_128_Text({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Barcode_39 = Libre_Barcode_39({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Barcode_39_Extended = Libre_Barcode_39_Extended({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Barcode_39_Extended_Text = Libre_Barcode_39_Extended_Text({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Barcode_39_Text = Libre_Barcode_39_Text({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Barcode_EAN13_Text = Libre_Barcode_EAN13_Text({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Baskerville = Libre_Baskerville({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Bodoni = Libre_Bodoni({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Caslon_Display = Libre_Caslon_Display({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Caslon_Text = Libre_Caslon_Text({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Libre_Franklin = Libre_Franklin({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Licorice = Licorice({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Life_Savers = Life_Savers({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lilita_One = Lilita_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lily_Script_One = Lily_Script_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Limelight = Limelight({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Linden_Hill = Linden_Hill({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Linefont = Linefont({ weight = ["400"], display = "swap" });
  const Lisu_Bosa = Lisu_Bosa({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Literata = Literata({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Liu_Jian_Mao_Cao = Liu_Jian_Mao_Cao({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Livvic = Livvic({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lobster = Lobster({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lobster_Two = Lobster_Two({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Londrina_Outline = Londrina_Outline({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Londrina_Shadow = Londrina_Shadow({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Londrina_Sketch = Londrina_Sketch({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Londrina_Solid = Londrina_Solid({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Long_Cang = Long_Cang({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lora = Lora({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Love_Light = Love_Light({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Love_Ya_Like_A_Sister = Love_Ya_Like_A_Sister({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Loved_by_the_King = Loved_by_the_King({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lovers_Quarrel = Lovers_Quarrel({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Luckiest_Guy = Luckiest_Guy({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lugrasimo = Lugrasimo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lumanosimo = Lumanosimo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Lunasima = Lunasima({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lusitana = Lusitana({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Lustria = Lustria({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Luxurious_Roman = Luxurious_Roman({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Luxurious_Script = Luxurious_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const M_PLUS_1 = M_PLUS_1({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const M_PLUS_1_Code = M_PLUS_1_Code({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const M_PLUS_1p = M_PLUS_1p({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const M_PLUS_2 = M_PLUS_2({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const M_PLUS_Code_Latin = M_PLUS_Code_Latin({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const M_PLUS_Rounded_1c = M_PLUS_Rounded_1c({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Ma_Shan_Zheng = Ma_Shan_Zheng({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Macondo = Macondo({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Macondo_Swash_Caps = Macondo_Swash_Caps({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mada = Mada({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Madimi_One = Madimi_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Magra = Magra({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Maiden_Orange = Maiden_Orange({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Maitree = Maitree({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Major_Mono_Display = Major_Mono_Display({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mako = Mako({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mali = Mali({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mallanna = Mallanna({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Maname = Maname({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mandali = Mandali({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Manjari = Manjari({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Manrope = Manrope({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mansalva = Mansalva({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Manuale = Manuale({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Marcellus = Marcellus({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Marcellus_SC = Marcellus_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Marck_Script = Marck_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Margarine = Margarine({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Marhey = Marhey({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Markazi_Text = Markazi_Text({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Marko_One = Marko_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Marmelad = Marmelad({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Martel = Martel({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Martel_Sans = Martel_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Martian_Mono = Martian_Mono({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Marvel = Marvel({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mate = Mate({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mate_SC = Mate_SC({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Matemasie = Matemasie({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Maven_Pro = Maven_Pro({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const McLaren = McLaren({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mea_Culpa = Mea_Culpa({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Meddon = Meddon({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const MedievalSharp = MedievalSharp({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Medula_One = Medula_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Meera_Inimai = Meera_Inimai({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Megrim = Megrim({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Meie_Script = Meie_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Meow_Script = Meow_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Merienda = Merienda({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Merriweather = Merriweather({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Merriweather_Sans = Merriweather_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Metal = Metal({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Metal_Mania = Metal_Mania({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Metamorphous = Metamorphous({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Metrophobic = Metrophobic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Michroma = Michroma({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Micro_5 = Micro_5({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Micro_5_Charted = Micro_5_Charted({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Milonga = Milonga({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Miltonian = Miltonian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Miltonian_Tattoo = Miltonian_Tattoo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mina = Mina({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mingzat = Mingzat({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Miniver = Miniver({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Miriam_Libre = Miriam_Libre({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mirza = Mirza({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Miss_Fajardose = Miss_Fajardose({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mitr = Mitr({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mochiy_Pop_One = Mochiy_Pop_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mochiy_Pop_P_One = Mochiy_Pop_P_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Modak = Modak({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Modern_Antiqua = Modern_Antiqua({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Moderustic = Moderustic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mogra = Mogra({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mohave = Mohave({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Moirai_One = Moirai_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Molengo = Molengo({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Molle = Molle({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Monda = Monda({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Monofett = Monofett({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Monomaniac_One = Monomaniac_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Monoton = Monoton({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Monsieur_La_Doulaise = Monsieur_La_Doulaise({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Montaga = Montaga({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Montagu_Slab = Montagu_Slab({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const MonteCarlo = MonteCarlo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Montez = Montez({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Montserrat = Montserrat({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Montserrat_Alternates = Montserrat_Alternates({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Montserrat_Subrayada = Montserrat_Subrayada({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Moo_Lah_Lah = Moo_Lah_Lah({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mooli = Mooli({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Moon_Dance = Moon_Dance({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Moul = Moul({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Moulpali = Moulpali({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mountains_of_Christmas = Mountains_of_Christmas({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mouse_Memoirs = Mouse_Memoirs({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mr_Bedfort = Mr_Bedfort({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mr_Dafoe = Mr_Dafoe({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mr_De_Haviland = Mr_De_Haviland({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mrs_Saint_Delafield = Mrs_Saint_Delafield({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mrs_Sheppards = Mrs_Sheppards({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Ms_Madi = Ms_Madi({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mukta = Mukta({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mukta_Mahee = Mukta_Mahee({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mukta_Malar = Mukta_Malar({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mukta_Vaani = Mukta_Vaani({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Mulish = Mulish({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Murecho = Murecho({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const MuseoModerno = MuseoModerno({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const My_Soul = My_Soul({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mynerve = Mynerve({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Mystery_Quest = Mystery_Quest({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const NTR = NTR({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Nabla = Nabla({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Namdhinggo = Namdhinggo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nanum_Brush_Script = Nanum_Brush_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nanum_Gothic = Nanum_Gothic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nanum_Gothic_Coding = Nanum_Gothic_Coding({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nanum_Myeongjo = Nanum_Myeongjo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nanum_Pen_Script = Nanum_Pen_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Narnoor = Narnoor({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Neonderthaw = Neonderthaw({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nerko_One = Nerko_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Neucha = Neucha({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Neuton = Neuton({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const New_Amsterdam = New_Amsterdam({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const New_Rocker = New_Rocker({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const New_Tegomin = New_Tegomin({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const News_Cycle = News_Cycle({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Newsreader = Newsreader({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Niconne = Niconne({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Niramit = Niramit({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Nixie_One = Nixie_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nobile = Nobile({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Nokora = Nokora({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Norican = Norican({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Nosifer = Nosifer({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Notable = Notable({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Nothing_You_Could_Do = Nothing_You_Could_Do({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noticia_Text = Noticia_Text({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Color_Emoji = Noto_Color_Emoji({
    subsets = ["emoji"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Emoji = Noto_Emoji({
    subsets = ["emoji"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Kufi_Arabic = Noto_Kufi_Arabic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Music = Noto_Music({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Naskh_Arabic = Noto_Naskh_Arabic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Nastaliq_Urdu = Noto_Nastaliq_Urdu({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Rashi_Hebrew = Noto_Rashi_Hebrew({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans = Noto_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Adlam = Noto_Sans_Adlam({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Adlam_Unjoined = Noto_Sans_Adlam_Unjoined({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Anatolian_Hieroglyphs = Noto_Sans_Anatolian_Hieroglyphs({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Arabic = Noto_Sans_Arabic({
    subsets = ["arabic"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Armenian = Noto_Sans_Armenian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Avestan = Noto_Sans_Avestan({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Balinese = Noto_Sans_Balinese({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Bamum = Noto_Sans_Bamum({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Bassa_Vah = Noto_Sans_Bassa_Vah({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Batak = Noto_Sans_Batak({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Bengali = Noto_Sans_Bengali({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Bhaiksuki = Noto_Sans_Bhaiksuki({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Brahmi = Noto_Sans_Brahmi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Buginese = Noto_Sans_Buginese({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Buhid = Noto_Sans_Buhid({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Canadian_Aboriginal = Noto_Sans_Canadian_Aboriginal({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Carian = Noto_Sans_Carian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Caucasian_Albanian = Noto_Sans_Caucasian_Albanian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Chakma = Noto_Sans_Chakma({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Cham = Noto_Sans_Cham({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Cherokee = Noto_Sans_Cherokee({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Chorasmian = Noto_Sans_Chorasmian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Coptic = Noto_Sans_Coptic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Cuneiform = Noto_Sans_Cuneiform({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Cypriot = Noto_Sans_Cypriot({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Cypro_Minoan = Noto_Sans_Cypro_Minoan({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Deseret = Noto_Sans_Deseret({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Devanagari = Noto_Sans_Devanagari({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Display = Noto_Sans_Display({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Duployan = Noto_Sans_Duployan({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Egyptian_Hieroglyphs = Noto_Sans_Egyptian_Hieroglyphs({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Elbasan = Noto_Sans_Elbasan({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Elymaic = Noto_Sans_Elymaic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Ethiopic = Noto_Sans_Ethiopic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Georgian = Noto_Sans_Georgian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Glagolitic = Noto_Sans_Glagolitic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Gothic = Noto_Sans_Gothic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Grantha = Noto_Sans_Grantha({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Gujarati = Noto_Sans_Gujarati({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Gunjala_Gondi = Noto_Sans_Gunjala_Gondi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Gurmukhi = Noto_Sans_Gurmukhi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_HK = Noto_Sans_HK({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Hanifi_Rohingya = Noto_Sans_Hanifi_Rohingya({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Hanunoo = Noto_Sans_Hanunoo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Hatran = Noto_Sans_Hatran({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Hebrew = Noto_Sans_Hebrew({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Imperial_Aramaic = Noto_Sans_Imperial_Aramaic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Indic_Siyaq_Numbers = Noto_Sans_Indic_Siyaq_Numbers({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Inscriptional_Pahlavi = Noto_Sans_Inscriptional_Pahlavi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Inscriptional_Parthian = Noto_Sans_Inscriptional_Parthian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_JP = Noto_Sans_JP({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Javanese = Noto_Sans_Javanese({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_KR = Noto_Sans_KR({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Kaithi = Noto_Sans_Kaithi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Kannada = Noto_Sans_Kannada({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Kawi = Noto_Sans_Kawi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Kayah_Li = Noto_Sans_Kayah_Li({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Kharoshthi = Noto_Sans_Kharoshthi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Khmer = Noto_Sans_Khmer({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Khojki = Noto_Sans_Khojki({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Khudawadi = Noto_Sans_Khudawadi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Lao = Noto_Sans_Lao({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Lao_Looped = Noto_Sans_Lao_Looped({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Lepcha = Noto_Sans_Lepcha({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Limbu = Noto_Sans_Limbu({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Linear_A = Noto_Sans_Linear_A({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Linear_B = Noto_Sans_Linear_B({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Lisu = Noto_Sans_Lisu({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Lycian = Noto_Sans_Lycian({
    subsets = ["lycian"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Lydian = Noto_Sans_Lydian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Mahajani = Noto_Sans_Mahajani({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Malayalam = Noto_Sans_Malayalam({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Mandaic = Noto_Sans_Mandaic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Manichaean = Noto_Sans_Manichaean({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Marchen = Noto_Sans_Marchen({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Masaram_Gondi = Noto_Sans_Masaram_Gondi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Math = Noto_Sans_Math({
    subsets = ["math"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Mayan_Numerals = Noto_Sans_Mayan_Numerals({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Medefaidrin = Noto_Sans_Medefaidrin({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Meetei_Mayek = Noto_Sans_Meetei_Mayek({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Mende_Kikakui = Noto_Sans_Mende_Kikakui({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Meroitic = Noto_Sans_Meroitic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Miao = Noto_Sans_Miao({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Modi = Noto_Sans_Modi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Mongolian = Noto_Sans_Mongolian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Mono = Noto_Sans_Mono({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Mro = Noto_Sans_Mro({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Multani = Noto_Sans_Multani({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Myanmar = Noto_Sans_Myanmar({
    subsets = ["myanmar"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_NKo = Noto_Sans_NKo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_NKo_Unjoined = Noto_Sans_NKo_Unjoined({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Nabataean = Noto_Sans_Nabataean({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Nag_Mundari = Noto_Sans_Nag_Mundari({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Nandinagari = Noto_Sans_Nandinagari({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_New_Tai_Lue = Noto_Sans_New_Tai_Lue({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Newa = Noto_Sans_Newa({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const
  Noto_Sans_Nushu = Noto_Sans_Nushu({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Ogham = Noto_Sans_Ogham({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Ol_Chiki = Noto_Sans_Ol_Chiki({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Old_Hungarian = Noto_Sans_Old_Hungarian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Old_Italic = Noto_Sans_Old_Italic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Old_North_Arabian = Noto_Sans_Old_North_Arabian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Old_Permic = Noto_Sans_Old_Permic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Old_Persian = Noto_Sans_Old_Persian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Old_Sogdian = Noto_Sans_Old_Sogdian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Old_South_Arabian = Noto_Sans_Old_South_Arabian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Old_Turkic = Noto_Sans_Old_Turkic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Oriya = Noto_Sans_Oriya({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Osage = Noto_Sans_Osage({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Osmanya = Noto_Sans_Osmanya({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Pahawh_Hmong = Noto_Sans_Pahawh_Hmong({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Palmyrene = Noto_Sans_Palmyrene({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Pau_Cin_Hau = Noto_Sans_Pau_Cin_Hau({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Phags_Pa = Noto_Sans_Phags_Pa({
    subsets = ["phags-pa"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Phoenician = Noto_Sans_Phoenician({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Psalter_Pahlavi = Noto_Sans_Psalter_Pahlavi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Rejang = Noto_Sans_Rejang({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Runic = Noto_Sans_Runic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_SC = Noto_Sans_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Samaritan = Noto_Sans_Samaritan({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Saurashtra = Noto_Sans_Saurashtra({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Sharada = Noto_Sans_Sharada({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Shavian = Noto_Sans_Shavian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Siddham = Noto_Sans_Siddham({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_SignWriting = Noto_Sans_SignWriting({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Sinhala = Noto_Sans_Sinhala({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Sogdian = Noto_Sans_Sogdian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Sora_Sompeng = Noto_Sans_Sora_Sompeng({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Soyombo = Noto_Sans_Soyombo({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Sundanese = Noto_Sans_Sundanese({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Syloti_Nagri = Noto_Sans_Syloti_Nagri({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Symbols = Noto_Sans_Symbols({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Symbols_2 = Noto_Sans_Symbols_2({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Syriac = Noto_Sans_Syriac({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Syriac_Eastern = Noto_Sans_Syriac_Eastern({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_TC = Noto_Sans_TC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Tagalog = Noto_Sans_Tagalog({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Tagbanwa = Noto_Sans_Tagbanwa({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Tai_Le = Noto_Sans_Tai_Le({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Tai_Tham = Noto_Sans_Tai_Tham({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Tai_Viet = Noto_Sans_Tai_Viet({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Takri = Noto_Sans_Takri({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Tamil = Noto_Sans_Tamil({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Tamil_Supplement = Noto_Sans_Tamil_Supplement({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Tangsa = Noto_Sans_Tangsa({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Telugu = Noto_Sans_Telugu({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Thaana = Noto_Sans_Thaana({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Thai = Noto_Sans_Thai({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Thai_Looped = Noto_Sans_Thai_Looped({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Tifinagh = Noto_Sans_Tifinagh({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Tirhuta = Noto_Sans_Tirhuta({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Ugaritic = Noto_Sans_Ugaritic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Vai = Noto_Sans_Vai({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Vithkuqi = Noto_Sans_Vithkuqi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Wancho = Noto_Sans_Wancho({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Warang_Citi = Noto_Sans_Warang_Citi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Yi = Noto_Sans_Yi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Sans_Zanabazar_Square = Noto_Sans_Zanabazar_Square({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif = Noto_Serif({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Ahom = Noto_Serif_Ahom({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Armenian = Noto_Serif_Armenian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Balinese = Noto_Serif_Balinese({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Bengali = Noto_Serif_Bengali({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Devanagari = Noto_Serif_Devanagari({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Display = Noto_Serif_Display({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Dogra = Noto_Serif_Dogra({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Ethiopic = Noto_Serif_Ethiopic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Georgian = Noto_Serif_Georgian({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Grantha = Noto_Serif_Grantha({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Gujarati = Noto_Serif_Gujarati({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Gurmukhi = Noto_Serif_Gurmukhi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_HK = Noto_Serif_HK({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Hebrew = Noto_Serif_Hebrew({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_JP = Noto_Serif_JP({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_KR = Noto_Serif_KR({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Kannada = Noto_Serif_Kannada({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Khitan_Small_Script = Noto_Serif_Khitan_Small_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Khmer = Noto_Serif_Khmer({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Khojki = Noto_Serif_Khojki({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Lao = Noto_Serif_Lao({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Makasar = Noto_Serif_Makasar({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Malayalam = Noto_Serif_Malayalam({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Myanmar = Noto_Serif_Myanmar({
    subsets = ["myanmar"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_NP_Hmong = Noto_Serif_NP_Hmong({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Old_Uyghur = Noto_Serif_Old_Uyghur({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Oriya = Noto_Serif_Oriya({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Ottoman_Siyaq = Noto_Serif_Ottoman_Siyaq({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_SC = Noto_Serif_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Sinhala = Noto_Serif_Sinhala({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_TC = Noto_Serif_TC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Tamil = Noto_Serif_Tamil({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Tangut = Noto_Serif_Tangut({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Telugu = Noto_Serif_Telugu({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Thai = Noto_Serif_Thai({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Tibetan = Noto_Serif_Tibetan({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Toto = Noto_Serif_Toto({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Vithkuqi = Noto_Serif_Vithkuqi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Serif_Yezidi = Noto_Serif_Yezidi({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Traditional_Nushu = Noto_Traditional_Nushu({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Noto_Znamenny_Musical_Notation = Noto_Znamenny_Musical_Notation({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nova_Cut = Nova_Cut({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Nova_Flat = Nova_Flat({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nova_Mono = Nova_Mono({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nova_Oval = Nova_Oval({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nova_Round = Nova_Round({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nova_Script = Nova_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nova_Slim = Nova_Slim({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nova_Square = Nova_Square({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Numans = Numans({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Nunito = Nunito({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Nunito_Sans = Nunito_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Nuosu_SIL = Nuosu_SIL({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Odibee_Sans = Odibee_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Odor_Mean_Chey = Odor_Mean_Chey({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Offside = Offside({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Oi = Oi({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Ojuju = Ojuju({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Old_Standard_TT = Old_Standard_TT({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Oldenburg = Oldenburg({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Ole = Ole({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Oleo_Script = Oleo_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Oleo_Script_Swash_Caps = Oleo_Script_Swash_Caps({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Onest = Onest({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Oooh_Baby = Oooh_Baby({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Open_Sans = Open_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Oranienbaum = Oranienbaum({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Orbit = Orbit({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Orbitron = Orbitron({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Oregano = Oregano({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Orelega_One = Orelega_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Orienta = Orienta({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Original_Surfer = Original_Surfer({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Oswald = Oswald({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Outfit = Outfit({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Over_the_Rainbow = Over_the_Rainbow({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Overlock = Overlock({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Overlock_SC = Overlock_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Overpass = Overpass({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Overpass_Mono = Overpass_Mono({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Ovo = Ovo({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Oxanium = Oxanium({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Oxygen = Oxygen({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Oxygen_Mono = Oxygen_Mono({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const PT_Mono = PT_Mono({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const PT_Sans = PT_Sans({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const PT_Sans_Caption = PT_Sans_Caption({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const PT_Sans_Narrow = PT_Sans_Narrow({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const PT_Serif = PT_Serif({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const PT_Serif_Caption = PT_Serif_Caption({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Pacifico = Pacifico({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Padauk = Padauk({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Padyakke_Expanded_One = Padyakke_Expanded_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Palanquin = Palanquin({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Palanquin_Dark = Palanquin_Dark({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Palette_Mosaic = Palette_Mosaic({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Pangolin = Pangolin({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Paprika = Paprika({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Parisienne = Parisienne({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Passero_One = Passero_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Passion_One = Passion_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Passions_Conflict = Passions_Conflict({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Pathway_Extreme = Pathway_Extreme({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Pathway_Gothic_One = Pathway_Gothic_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Patrick_Hand = Patrick_Hand({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Patrick_Hand_SC = Patrick_Hand_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Pattaya = Pattaya({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Patua_One = Patua_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Pavanam = Pavanam({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Paytone_One = Paytone_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Peddana = Peddana({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Peralta = Peralta({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Permanent_Marker = Permanent_Marker({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Petemoss = Petemoss({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Petit_Formal_Script = Petit_Formal_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Petrona = Petrona({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Philosopher = Philosopher({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Phudu = Phudu({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Piazzolla = Piazzolla({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Piedra = Piedra({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Pinyon_Script = Pinyon_Script({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Pirata_One = Pirata_One({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Pixelify_Sans = Pixelify_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Plaster = Plaster({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Platypi = Platypi({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Play = Play({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Playball = Playball({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Playfair = Playfair({ subsets = ["latin"], weight = ["400"], display = "swap" });
  const Playfair_Display = Playfair_Display({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Playfair_Display_SC = Playfair_Display_SC({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Playpen_Sans = Playpen_Sans({
    subsets = ["latin"],
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_AR = Playwrite_AR({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_AT = Playwrite_AT({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_AU_NSW = Playwrite_AU_NSW({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_AU_QLD = Playwrite_AU_QLD({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_AU_SA = Playwrite_AU_SA({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_AU_TAS = Playwrite_AU_TAS({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_AU_VIC = Playwrite_AU_VIC({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_BE_VLG = Playwrite_BE_VLG({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_BE_WAL = Playwrite_BE_WAL({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_BR = Playwrite_BR({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_CA = Playwrite_CA({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_CL = Playwrite_CL({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_CO = Playwrite_CO({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_CU = Playwrite_CU({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_CZ = Playwrite_CZ({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_DE_Grund = Playwrite_DE_Grund({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_DE_LA = Playwrite_DE_LA({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_DE_SAS = Playwrite_DE_SAS({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_DE_VA = Playwrite_DE_VA({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_DK_Loopet = Playwrite_DK_Loopet({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_DK_Uloopet = Playwrite_DK_Uloopet({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_ES = Playwrite_ES({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_ES_Deco = Playwrite_ES_Deco({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_FR_Moderne = Playwrite_FR_Moderne({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_FR_Trad = Playwrite_FR_Trad({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_GB_J = Playwrite_GB_J({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_GB_S = Playwrite_GB_S({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_HR = Playwrite_HR({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_HR_Lijeva = Playwrite_HR_Lijeva({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_HU = Playwrite_HU({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_ID = Playwrite_ID({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_IE = Playwrite_IE({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_IN = Playwrite_IN({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_IS = Playwrite_IS({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_IT_Moderna = Playwrite_IT_Moderna({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_IT_Trad = Playwrite_IT_Trad({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_MX = Playwrite_MX({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_NG_Modern = Playwrite_NG_Modern({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_NL = Playwrite_NL({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_NO = Playwrite_NO({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_NZ = Playwrite_NZ({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_PE = Playwrite_PE({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_PL = Playwrite_PL({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_PT = Playwrite_PT({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_RO = Playwrite_RO({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_SK = Playwrite_SK({
    weight = ["400"],
    display = "swap",
  });
  const Playwrite_TZ = Playwrite_TZ({ display = "swap" });
  const Playwrite_US_Modern = Playwrite_US_Modern({
    display = "swap",
  });
  const Playwrite_US_Trad = Playwrite_US_Trad({ display = "swap" });
  const Playwrite_VN = Playwrite_VN({ display = "swap" });
  const Playwrite_ZA = Playwrite_ZA({ display = "swap" });
  const Plus_Jakarta_Sans = Plus_Jakarta_Sans({ display = "swap" });
  const Podkova = Podkova({ display = "swap" });
  const Poetsen_One = Poetsen_One({ display = "swap", weight = ["400"] });
  const Poiret_One = Poiret_One({ display = "swap", weight = ["400"] });
  const Poller_One = Poller_One({ display = "swap", weight = ["400"] });
  const Poltawski_Nowy = Poltawski_Nowy({ display = "swap", weight = ["400"] });
  const Poly = Poly({ display = "swap", weight = ["400"] });
  const Pompiere = Pompiere({ display = "swap", weight = ["400"] });
  const Pontano_Sans = Pontano_Sans({ display = "swap", weight = ["400"] });
  const Poor_Story = Poor_Story({ display = "swap", weight = ["400"] });
  const Poppins = Poppins({ display = "swap", weight = ["400"] });
  const Port_Lligat_Sans = Port_Lligat_Sans({ display = "swap", weight = ["400"] });
  const Port_Lligat_Slab = Port_Lligat_Slab({ display = "swap", weight = ["400"] });
  const Potta_One = Potta_One({ display = "swap", weight = ["400"] });
  const Pragati_Narrow = Pragati_Narrow({ display = "swap", weight = ["400"] });
  const Praise = Praise({ display = "swap", weight = ["400"] });
  const Prata = Prata({ display = "swap", weight = ["400"] });
  const Preahvihear = Preahvihear({ display = "swap", weight = ["400"] });
  const Press_Start_2P = Press_Start_2P({ display = "swap", weight = ["400"] });
  const Pridi = Pridi({ display = "swap", weight = ["400"] });
  const Princess_Sofia = Princess_Sofia({ display = "swap", weight = ["400"] });
  const Prociono = Prociono({ display = "swap", weight = ["400"] });
  const Prompt = Prompt({ display = "swap", weight = ["400"] });
  const Prosto_One = Prosto_One({ display = "swap", weight = ["400"] });
  const Protest_Guerrilla = Protest_Guerrilla({ display = "swap", weight = ["400"] });
  const Protest_Revolution = Protest_Revolution({
    display = "swap",
    weight = ["400"],
  });
  const Protest_Riot = Protest_Riot({ display = "swap", weight = ["400"] });
  const Protest_Strike = Protest_Strike({ display = "swap", weight = ["400"] });
  const Proza_Libre = Proza_Libre({ display = "swap", weight = ["400"] });
  const Public_Sans = Public_Sans({ display = "swap", weight = ["400"] });
  const Puppies_Play = Puppies_Play({ display = "swap", weight = ["400"] });
  const Puritan = Puritan({ display = "swap", weight = ["400"] });
  const Purple_Purse = Purple_Purse({ display = "swap", weight = ["400"] });
  const Qahiri = Qahiri({ display = "swap", weight = ["400"] });
  const Quando = Quando({ display = "swap", weight = ["400"] });
  const Quantico = Quantico({ display = "swap", weight = ["400"] });
  const Quattrocento = Quattrocento({ display = "swap", weight = ["400"] });
  const Quattrocento_Sans = Quattrocento_Sans({ display = "swap", weight = ["400"] });
  const Questrial = Questrial({ display = "swap", weight = ["400"] });
  const Quicksand = Quicksand({ display = "swap", weight = ["400"] });
  const Quintessential = Quintessential({ display = "swap", weight = ["400"] });
  const Qwigley = Qwigley({ display = "swap", weight = ["400"] });
  const Qwitcher_Grypen = Qwitcher_Grypen({ display = "swap", weight = ["400"] });
  const REM = REM({ display = "swap", weight = ["400"] });
  const Racing_Sans_One = Racing_Sans_One({ display = "swap", weight = ["400"] });
  const Radio_Canada = Radio_Canada({ display = "swap", weight = ["400"] });
  const Radio_Canada_Big = Radio_Canada_Big({ display = "swap", weight = ["400"] });
  const Radley = Radley({ display = "swap", weight = ["400"] });
  const Rajdhani = Rajdhani({ display = "swap", weight = ["400"] });
  const Rakkas = Rakkas({ display = "swap", weight = ["400"] });
  const Raleway = Raleway({ display = "swap", weight = ["400"] });
  const Raleway_Dots = Raleway_Dots({ display = "swap", weight = ["400"] });
  const Ramabhadra = Ramabhadra({ display = "swap", weight = ["400"] });
  const Ramaraja = Ramaraja({ display = "swap", weight = ["400"] });
  const Rambla = Rambla({ display = "swap", weight = ["400"] });
  const Rammetto_One = Rammetto_One({ display = "swap", weight = ["400"] });
  const Rampart_One = Rampart_One({ display = "swap", weight = ["400"] });
  const Ranchers = Ranchers({ display = "swap", weight = ["400"] });
  const Rancho = Rancho({ display = "swap", weight = ["400"] });
  const Ranga = Ranga({ display = "swap", weight = ["400"] });
  const Rasa = Rasa({ display = "swap", weight = ["400"] });
  const Rationale = Rationale({ display = "swap", weight = ["400"] });
  const Ravi_Prakash = Ravi_Prakash({ display = "swap", weight = ["400"] });
  const Readex_Pro = Readex_Pro({ display = "swap", weight = ["400"] });
  const Recursive = Recursive({ display = "swap", weight = ["400"] });
  const Red_Hat_Display = Red_Hat_Display({ display = "swap", weight = ["400"] });
  const Red_Hat_Mono = Red_Hat_Mono({ display = "swap", weight = ["400"] });
  const Red_Hat_Text = Red_Hat_Text({ display = "swap", weight = ["400"] });
  const Red_Rose = Red_Rose({ display = "swap", weight = ["400"] });
  const Redacted = Redacted({ display = "swap", weight = ["400"] });
  const Redacted_Script = Redacted_Script({ display = "swap", weight = ["400"] });
  const Reddit_Mono = Reddit_Mono({ display = "swap", weight = ["400"] });
  const Reddit_Sans = Reddit_Sans({ display = "swap", weight = ["400"] });
  const Reddit_Sans_Condensed = Reddit_Sans_Condensed({
    display = "swap",
    weight = ["400"],
  });
  const Redressed = Redressed({ display = "swap", weight = ["400"] });
  const Reem_Kufi = Reem_Kufi({ display = "swap", weight = ["400"] });
  const Reem_Kufi_Fun = Reem_Kufi_Fun({ display = "swap", weight = ["400"] });
  const Reem_Kufi_Ink = Reem_Kufi_Ink({ display = "swap", weight = ["400"] });
  const Reenie_Beanie = Reenie_Beanie({ display = "swap", weight = ["400"] });
  const Reggae_One = Reggae_One({ display = "swap", weight = ["400"] });
  const Rethink_Sans = Rethink_Sans({ display = "swap", weight = ["400"] });
  const Revalia = Revalia({ display = "swap", weight = ["400"] });
  const Rhodium_Libre = Rhodium_Libre({ display = "swap", weight = ["400"] });
  const Ribeye = Ribeye({ display = "swap", weight = ["400"] });
  const Ribeye_Marrow = Ribeye_Marrow({ display = "swap", weight = ["400"] });
  const Righteous = Righteous({ display = "swap", weight = ["400"] });
  const Risque = Risque({ display = "swap", weight = ["400"] });
  const Road_Rage = Road_Rage({ display = "swap", weight = ["400"] });
  const Roboto = Roboto({ display = "swap", weight = ["400"] });
  const Roboto_Condensed = Roboto_Condensed({ display = "swap", weight = ["400"] });
  const Roboto_Flex = Roboto_Flex({ display = "swap", weight = ["400"] });
  const Roboto_Mono = Roboto_Mono({ display = "swap", weight = ["400"] });
  const Roboto_Serif = Roboto_Serif({ display = "swap", weight = ["400"] });
  const Roboto_Slab = Roboto_Slab({ display = "swap", weight = ["400"] });
  const Rochester = Rochester({ display = "swap", weight = ["400"] });
  const Rock_3D = Rock_3D({ display = "swap", weight = ["400"] });
  const Rock_Salt = Rock_Salt({ display = "swap", weight = ["400"] });
  const RocknRoll_One = RocknRoll_One({ display = "swap", weight = ["400"] });
  const Rokkitt = Rokkitt({ display = "swap", weight = ["400"] });
  const Romanesco = Romanesco({ display = "swap", weight = ["400"] });
  const Ropa_Sans = Ropa_Sans({ display = "swap", weight = ["400"] });
  const Rosario = Rosario({ display = "swap", weight = ["400"] });
  const Rosarivo = Rosarivo({ display = "swap", weight = ["400"] });
  const Rouge_Script = Rouge_Script({ display = "swap", weight = ["400"] });
  const Rowdies = Rowdies({ display = "swap", weight = ["400"] });
  const Rozha_One = Rozha_One({ display = "swap", weight = ["400"] });
  const Rubik = Rubik({ display = "swap", weight = ["400"] });
  const Rubik_80s_Fade = Rubik_80s_Fade({ display = "swap", weight = ["400"] });
  const Rubik_Beastly = Rubik_Beastly({ display = "swap", weight = ["400"] });
  const Rubik_Broken_Fax = Rubik_Broken_Fax({ display = "swap", weight = ["400"] });
  const Rubik_Bubbles = Rubik_Bubbles({ display = "swap", weight = ["400"] });
  const Rubik_Burned = Rubik_Burned({ display = "swap", weight = ["400"] });
  const Rubik_Dirt = Rubik_Dirt({ display = "swap", weight = ["400"] });
  const Rubik_Distressed = Rubik_Distressed({ display = "swap", weight = ["400"] });
  const Rubik_Doodle_Shadow = Rubik_Doodle_Shadow({
    display = "swap",
    weight = ["400"],
  });
  const Rubik_Doodle_Triangles = Rubik_Doodle_Triangles({
    display = "swap",
    weight = ["400"],
  });
  const Rubik_Gemstones = Rubik_Gemstones({ display = "swap", weight = ["400"] });
  const Rubik_Glitch = Rubik_Glitch({ display = "swap", weight = ["400"] });
  const Rubik_Glitch_Pop = Rubik_Glitch_Pop({ display = "swap", weight = ["400"] });
  const Rubik_Iso = Rubik_Iso({ display = "swap", weight = ["400"] });
  const Rubik_Lines = Rubik_Lines({ display = "swap", weight = ["400"] });
  const Rubik_Maps = Rubik_Maps({ display = "swap", weight = ["400"] });
  const Rubik_Marker_Hatch = Rubik_Marker_Hatch({
    display = "swap",
    weight = ["400"],
  });
  const Rubik_Maze = Rubik_Maze({ display = "swap", weight = ["400"] });
  const Rubik_Microbe = Rubik_Microbe({ display = "swap", weight = ["400"] });
  const Rubik_Mono_One = Rubik_Mono_One({ display = "swap", weight = ["400"] });
  const Rubik_Moonrocks = Rubik_Moonrocks({ display = "swap", weight = ["400"] });
  const Rubik_Pixels = Rubik_Pixels({ display = "swap", weight = ["400"] });
  const Rubik_Puddles = Rubik_Puddles({ display = "swap", weight = ["400"] });
  const Rubik_Scribble = Rubik_Scribble({ display = "swap", weight = ["400"] });
  const Rubik_Spray_Paint = Rubik_Spray_Paint({ display = "swap", weight = ["400"] });
  const Rubik_Storm = Rubik_Storm({ display = "swap", weight = ["400"] });
  const Rubik_Vinyl = Rubik_Vinyl({ display = "swap", weight = ["400"] });
  const Rubik_Wet_Paint = Rubik_Wet_Paint({ display = "swap", weight = ["400"] });
  const Ruda = Ruda({ display = "swap", weight = ["400"] });
  const Rufina = Rufina({ display = "swap", weight = ["400"] });
  const Ruge_Boogie = Ruge_Boogie({ display = "swap", weight = ["400"] });
  const Ruluko = Ruluko({ display = "swap", weight = ["400"] });
  const Rum_Raisin = Rum_Raisin({ display = "swap", weight = ["400"] });
  const Ruslan_Display = Ruslan_Display({ display = "swap", weight = ["400"] });
  const Russo_One = Russo_One({ display = "swap", weight = ["400"] });
  const Ruthie = Ruthie({ display = "swap", weight = ["400"] });
  const Ruwudu = Ruwudu({ display = "swap", weight = ["400"] });
  const Rye = Rye({ display = "swap", weight = ["400"] });
  const STIX_Two_Text = STIX_Two_Text({ display = "swap", weight = ["400"] });
  const SUSE = SUSE({ display = "swap", weight = ["400"] });
  const Sacramento = Sacramento({ display = "swap", weight = ["400"] });
  const Sahitya = Sahitya({ display = "swap", weight = ["400"] });
  const Sail = Sail({ display = "swap", weight = ["400"] });
  const Saira = Saira({ display = "swap", weight = ["400"] });
  const Saira_Condensed = Saira_Condensed({ display = "swap", weight = ["400"] });
  const Saira_Extra_Condensed = Saira_Extra_Condensed({
    display = "swap",
    weight = ["400"],
  });
  const Saira_Semi_Condensed = Saira_Semi_Condensed({
    display = "swap",
    weight = ["400"],
  });
  const Saira_Stencil_One = Saira_Stencil_One({ display = "swap", weight = ["400"] });
  const Salsa = Salsa({ display = "swap", weight = ["400"] });
  const Sanchez = Sanchez({ display = "swap", weight = ["400"] });
  const Sancreek = Sancreek({ display = "swap", weight = ["400"] });
  const Sankofa_Display = Sankofa_Display({ display = "swap", weight = ["400"] });
  const Sansita = Sansita({ display = "swap", weight = ["400"] });
  const Sansita_Swashed = Sansita_Swashed({ display = "swap", weight = ["400"] });
  const Sarabun = Sarabun({ display = "swap", weight = ["400"] });
  const Sarala = Sarala({ display = "swap", weight = ["400"] });
  const Sarina = Sarina({ display = "swap", weight = ["400"] });
  const Sarpanch = Sarpanch({ display = "swap", weight = ["400"] });
  const Sassy_Frass = Sassy_Frass({ display = "swap", weight = ["400"] });
  const Satisfy = Satisfy({ display = "swap", weight = ["400"] });
  const Sawarabi_Gothic = Sawarabi_Gothic({ display = "swap", weight = ["400"] });
  const Sawarabi_Mincho = Sawarabi_Mincho({ display = "swap", weight = ["400"] });
  const Scada = Scada({ display = "swap", weight = ["400"] });
  const Scheherazade_New = Scheherazade_New({ display = "swap", weight = ["400"] });
  const Schibsted_Grotesk = Schibsted_Grotesk({ display = "swap", weight = ["400"] });
  const Schoolbell = Schoolbell({ display = "swap", weight = ["400"] });
  const Scope_One = Scope_One({ display = "swap", weight = ["400"] });
  const Seaweed_Script = Seaweed_Script({ display = "swap", weight = ["400"] });
  const Secular_One = Secular_One({ display = "swap", weight = ["400"] });
  const Sedan = Sedan({ display = "swap", weight = ["400"] });
  const Sedan_SC = Sedan_SC({ display = "swap", weight = ["400"] });
  const Sedgwick_Ave = Sedgwick_Ave({ display = "swap", weight = ["400"] });
  const Sedgwick_Ave_Display = Sedgwick_Ave_Display({
    display = "swap",
    weight = ["400"],
  });
  const Sen = Sen({ display = "swap", weight = ["400"] });
  const Send_Flowers = Send_Flowers({ display = "swap", weight = ["400"] });
  const Sevillana = Sevillana({ display = "swap", weight = ["400"] });
  const Seymour_One = Seymour_One({ display = "swap", weight = ["400"] });
  const Shadows_Into_Light = Shadows_Into_Light({
    display = "swap",
    weight = ["400"],
  });
  const Shadows_Into_Light_Two = Shadows_Into_Light_Two({
    display = "swap",
    weight = ["400"],
  });
  const Shalimar = Shalimar({ display = "swap", weight = ["400"] });
  const Shantell_Sans = Shantell_Sans({ display = "swap", weight = ["400"] });
  const Shanti = Shanti({ display = "swap", weight = ["400"] });
  const Share = Share({ display = "swap", weight = ["400"] });
  const Share_Tech = Share_Tech({ display = "swap", weight = ["400"] });
  const Share_Tech_Mono = Share_Tech_Mono({ display = "swap", weight = ["400"] });
  const Shippori_Antique = Shippori_Antique({ display = "swap", weight = ["400"] });
  const Shippori_Antique_B1 = Shippori_Antique_B1({
    display = "swap",
    weight = ["400"],
  });
  const Shippori_Mincho = Shippori_Mincho({ display = "swap", weight = ["400"] });
  const Shippori_Mincho_B1 = Shippori_Mincho_B1({
    display = "swap",
    weight = ["400"],
  });
  const Shizuru = Shizuru({ display = "swap", weight = ["400"] });
  const Shojumaru = Shojumaru({ display = "swap", weight = ["400"] });
  const Short_Stack = Short_Stack({ display = "swap", weight = ["400"] });
  const Shrikhand = Shrikhand({ display = "swap", weight = ["400"] });
  const Siemreap = Siemreap({ display = "swap", weight = ["400"] });
  const Sigmar = Sigmar({ display = "swap", weight = ["400"] });
  const Sigmar_One = Sigmar_One({ display = "swap", weight = ["400"] });
  const Signika = Signika({ display = "swap", weight = ["400"] });
  const Signika_Negative = Signika_Negative({ display = "swap", weight = ["400"] });
  const Silkscreen = Silkscreen({ display = "swap", weight = ["400"] });
  const Simonetta = Simonetta({ display = "swap", weight = ["400"] });
  const Single_Day = Single_Day({ display = "swap", weight = ["400"] });
  const Sintony = Sintony({ display = "swap", weight = ["400"] });
  const Sirin_Stencil = Sirin_Stencil({ display = "swap", weight = ["400"] });
  const Six_Caps = Six_Caps({ display = "swap", weight = ["400"] });
  const Sixtyfour = Sixtyfour({ display = "swap", weight = ["400"] });
  const Sixtyfour_Convergence = Sixtyfour_Convergence({
    display = "swap",
    weight = ["400"],
  });
  const Skranji = Skranji({ display = "swap", weight = ["400"] });
  const Slabo_13px = Slabo_13px({ display = "swap", weight = ["400"] });
  const Slabo_27px = Slabo_27px({ display = "swap", weight = ["400"] });
  const Slackey = Slackey({ display = "swap", weight = ["400"] });
  const Slackside_One = Slackside_One({ display = "swap", weight = ["400"] });
  const Smokum = Smokum({ display = "swap", weight = ["400"] });
  const Smooch = Smooch({ display = "swap", weight = ["400"] });
  const Smooch_Sans = Smooch_Sans({ display = "swap", weight = ["400"] });
  const Smythe = Smythe({ display = "swap", weight = ["400"] });
  const Sniglet = Sniglet({ display = "swap", weight = ["400"] });
  const Snippet = Snippet({ display = "swap", weight = ["400"] });
  const Snowburst_One = Snowburst_One({ display = "swap", weight = ["400"] });
  const Sofadi_One = Sofadi_One({ display = "swap", weight = ["400"] });
  const Sofia = Sofia({ display = "swap", weight = ["400"] });
  const Sofia_Sans = Sofia_Sans({ display = "swap", weight = ["400"] });
  const Sofia_Sans_Condensed = Sofia_Sans_Condensed({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Sofia_Sans_Extra_Condensed = Sofia_Sans_Extra_Condensed({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Sofia_Sans_Semi_Condensed = Sofia_Sans_Semi_Condensed({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Solitreo = Solitreo({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Solway = Solway({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Sometype_Mono = Sometype_Mono({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Song_Myung = Song_Myung({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Sono = Sono({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Sonsie_One = Sonsie_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Sora = Sora({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Sorts_Mill_Goudy = Sorts_Mill_Goudy({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Source_Code_Pro = Source_Code_Pro({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Source_Sans_3 = Source_Sans_3({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Source_Serif_4 = Source_Serif_4({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Space_Grotesk = Space_Grotesk({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Space_Mono = Space_Mono({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Special_Elite = Special_Elite({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Spectral = Spectral({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Spectral_SC = Spectral_SC({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Spicy_Rice = Spicy_Rice({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Spinnaker = Spinnaker({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Spirax = Spirax({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Splash = Splash({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Spline_Sans = Spline_Sans({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Spline_Sans_Mono = Spline_Sans_Mono({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Squada_One = Squada_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Square_Peg = Square_Peg({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Sree_Krushnadevaraya = Sree_Krushnadevaraya({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Sriracha = Sriracha({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Srisakdi = Srisakdi({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Staatliches = Staatliches({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Stalemate = Stalemate({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Stalinist_One = Stalinist_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Stardos_Stencil = Stardos_Stencil({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Stick = Stick({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Stick_No_Bills = Stick_No_Bills({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Stint_Ultra_Condensed = Stint_Ultra_Condensed({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Stint_Ultra_Expanded = Stint_Ultra_Expanded({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Stoke = Stoke({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Strait = Strait({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Style_Script = Style_Script({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Stylish = Stylish({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Sue_Ellen_Francisco = Sue_Ellen_Francisco({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Suez_One = Suez_One({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Sulphur_Point = Sulphur_Point({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Sumana = Sumana({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Sunflower = Sunflower({
    subsets = ["latin"],
    display = "swap",
    weight = ["500"],
  });
  const Sunshiney = Sunshiney({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Supermercado_One = Supermercado_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Sura = Sura({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Suranna = Suranna({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Suravaram = Suravaram({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Suwannaphum = Suwannaphum({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Swanky_and_Moo_Moo = Swanky_and_Moo_Moo({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Syncopate = Syncopate({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Syne = Syne({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Syne_Mono = Syne_Mono({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Syne_Tactile = Syne_Tactile({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tac_One = Tac_One({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tai_Heritage_Pro = Tai_Heritage_Pro({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tajawal = Tajawal({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tangerine = Tangerine({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tapestry = Tapestry({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Taprom = Taprom({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tauri = Tauri({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Taviraj = Taviraj({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Teachers = Teachers({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Teko = Teko({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tektur = Tektur({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Telex = Telex({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tenali_Ramakrishna = Tenali_Ramakrishna({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tenor_Sans = Tenor_Sans({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Text_Me_One = Text_Me_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Texturina = Texturina({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Thasadith = Thasadith({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const The_Girl_Next_Door = The_Girl_Next_Door({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const The_Nautigal = The_Nautigal({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tienne = Tienne({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tillana = Tillana({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tilt_Neon = Tilt_Neon({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tilt_Prism = Tilt_Prism({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tilt_Warp = Tilt_Warp({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Timmana = Timmana({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tinos = Tinos({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tiny5 = Tiny5({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tiro_Bangla = Tiro_Bangla({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tiro_Devanagari_Hindi = Tiro_Devanagari_Hindi({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tiro_Devanagari_Marathi = Tiro_Devanagari_Marathi({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tiro_Devanagari_Sanskrit = Tiro_Devanagari_Sanskrit({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tiro_Gurmukhi = Tiro_Gurmukhi({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tiro_Kannada = Tiro_Kannada({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tiro_Tamil = Tiro_Tamil({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tiro_Telugu = Tiro_Telugu({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Titan_One = Titan_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Titillium_Web = Titillium_Web({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tomorrow = Tomorrow({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tourney = Tourney({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Trade_Winds = Trade_Winds({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Train_One = Train_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Trirong = Trirong({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Trispace = Trispace({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Trocchi = Trocchi({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Trochut = Trochut({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Truculenta = Truculenta({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Trykker = Trykker({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Tsukimi_Rounded = Tsukimi_Rounded({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Tulpen_One = Tulpen_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Turret_Road = Turret_Road({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Twinkle_Star = Twinkle_Star({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Ubuntu = Ubuntu({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Ubuntu_Condensed = Ubuntu_Condensed({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Ubuntu_Mono = Ubuntu_Mono({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Uchen = Uchen({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Ultra = Ultra({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Unbounded = Unbounded({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Uncial_Antiqua = Uncial_Antiqua({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Underdog = Underdog({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Unica_One = Unica_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const UnifrakturCook = UnifrakturCook({
    subsets = ["latin"],
    display = "swap",
    weight = ["700"],
  });
  const UnifrakturMaguntia = UnifrakturMaguntia({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Unkempt = Unkempt({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Unlock = Unlock({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Unna = Unna({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Updock = Updock({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Urbanist = Urbanist({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const VT323 = VT323({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Vampiro_One = Vampiro_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Varela = Varela({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Varela_Round = Varela_Round({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Varta = Varta({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Vast_Shadow = Vast_Shadow({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Vazirmatn = Vazirmatn({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Vesper_Libre = Vesper_Libre({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Viaoda_Libre = Viaoda_Libre({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Vibes = Vibes({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Vibur = Vibur({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Victor_Mono = Victor_Mono({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Vidaloka = Vidaloka({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Viga = Viga({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Vina_Sans = Vina_Sans({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Voces = Voces({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Volkhov = Volkhov({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Vollkorn = Vollkorn({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Vollkorn_SC = Vollkorn_SC({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Voltaire = Voltaire({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Vujahday_Script = Vujahday_Script({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Waiting_for_the_Sunrise = Waiting_for_the_Sunrise({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Wallpoet = Wallpoet({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Walter_Turncoat = Walter_Turncoat({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Warnes = Warnes({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Water_Brush = Water_Brush({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Waterfall = Waterfall({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Wellfleet = Wellfleet({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Wendy_One = Wendy_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Whisper = Whisper({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const WindSong = WindSong({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Wire_One = Wire_One({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Wix_Madefor_Display = Wix_Madefor_Display({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Wix_Madefor_Text = Wix_Madefor_Text({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Work_Sans = Work_Sans({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Xanh_Mono = Xanh_Mono({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yaldevi = Yaldevi({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Yanone_Kaffeesatz = Yanone_Kaffeesatz({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yantramanav = Yantramanav({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yatra_One = Yatra_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yellowtail = Yellowtail({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yeon_Sung = Yeon_Sung({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yeseva_One = Yeseva_One({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yesteryear = Yesteryear({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yomogi = Yomogi({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Yrsa = Yrsa({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Ysabeau = Ysabeau({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Ysabeau_Infant = Ysabeau_Infant({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Ysabeau_Office = Ysabeau_Office({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Ysabeau_SC = Ysabeau_SC({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yuji_Boku = Yuji_Boku({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yuji_Mai = Yuji_Mai({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Yuji_Syuku = Yuji_Syuku({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Yusei_Magic = Yusei_Magic({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const ZCOOL_KuaiLe = ZCOOL_KuaiLe({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const ZCOOL_QingKe_HuangYou = ZCOOL_QingKe_HuangYou({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const ZCOOL_XiaoWei = ZCOOL_XiaoWei({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zen_Antique = Zen_Antique({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zen_Antique_Soft = Zen_Antique_Soft({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zen_Dots = Zen_Dots({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Zen_Kaku_Gothic_Antique = Zen_Kaku_Gothic_Antique({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zen_Kaku_Gothic_New = Zen_Kaku_Gothic_New({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zen_Kurenaido = Zen_Kurenaido({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zen_Loop = Zen_Loop({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Zen_Maru_Gothic = Zen_Maru_Gothic({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zen_Old_Mincho = Zen_Old_Mincho({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zen_Tokyo_Zoo = Zen_Tokyo_Zoo({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zeyada = Zeyada({ subsets = ["latin"], display = "swap", weight = ["400"] });
  const Zhi_Mang_Xing = Zhi_Mang_Xing({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zilla_Slab = Zilla_Slab({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });
  const Zilla_Slab_Highlight = Zilla_Slab_Highlight({
    subsets : ["latin"],
    display : "swap",
    weight : ["400"],
  });

const fonts = {
  ADLaM_Display: ADLaM_Display,
  Palette_Mosaic: Palette_Mosaic,
  AR_One_Sans: AR_One_Sans,
  Abel: Abel,
  Abhaya_Libre: Abhaya_Libre,
  Aboreto: Aboreto,
  Abril_Fatface: Abril_Fatface,
  Abyssinica_SIL: Abyssinica_SIL,
  Aclonica: Aclonica,
  Acme: Acme,
  Actor: Actor,
  Adamina: Adamina,
  Advent_Pro: Advent_Pro,
  Afacad: Afacad,
  Afacad_Flux: Afacad_Flux,
  Agbalumo: Agbalumo,
  Agdasima: Agdasima,
  Aguafina_Script: Aguafina_Script,
  Akatab: Akatab,
  Akaya_Kanadaka: Akaya_Kanadaka,
  Akaya_Telivigala: Akaya_Telivigala,
  Akronim: Akronim,
  Akshar: Akshar,
  Aladin: Aladin,
  Alata: Alata,
  Alatsi: Alatsi,
  Albert_Sans: Albert_Sans,
  Aldrich: Aldrich,
  Alef: Alef,
  Alegreya: Alegreya,
  Alegreya_SC: Alegreya_SC,
  Alegreya_Sans: Alegreya_Sans,
  Alegreya_Sans_SC: Alegreya_Sans_SC,
  Aleo: Aleo,
  Alex_Brush: Alex_Brush,
  Alexandria: Alexandria,
  Alfa_Slab_One: Alfa_Slab_One,
  Alice: Alice,
  Alike: Alike,
  Alike_Angular: Alike_Angular,
  Alkalami: Alkalami,
  Alkatra: Alkatra,
  Allan: Allan,
  Allerta: Allerta,
  Allerta_Stencil: Allerta_Stencil,
  Allison: Allison,
  Allura: Allura,
  Almarai: Almarai,
  Almendra: Almendra,
  Almendra_Display: Almendra_Display,
  Almendra_SC: Almendra_SC,
  Alumni_Sans: Alumni_Sans,
  Alumni_Sans_Collegiate_One: Alumni_Sans_Collegiate_One,
  Alumni_Sans_Inline_One: Alumni_Sans_Inline_One,
  Alumni_Sans_Pinstripe: Alumni_Sans_Pinstripe,
  Amarante: Amarante,
  Amaranth: Amaranth,
  Amatic_SC: Amatic_SC,
  Amethysta: Amethysta,
  Amiko: Amiko,
  Amiri: Amiri,
  Amiri_Quran: Amiri_Quran,
  Amita: Amita,
  Anaheim: Anaheim,
  Andada_Pro: Andada_Pro,
  Andika: Andika,
  Anek_Bangla: Anek_Bangla,
  Anek_Devanagari: Anek_Devanagari,
  Anek_Gujarati: Anek_Gujarati,
  Anek_Gurmukhi: Anek_Gurmukhi,
  Anek_Kannada: Anek_Kannada,
  Anek_Latin: Anek_Latin,
  Anek_Malayalam: Anek_Malayalam,
  Anek_Odia: Anek_Odia,
  Anek_Tamil: Anek_Tamil,
  Anek_Telugu: Anek_Telugu,
  Angkor: Angkor,
  Annapurna_SIL: Annapurna_SIL,
  Annie_Use_Your_Telescope: Annie_Use_Your_Telescope,
  Anonymous_Pro: Anonymous_Pro,
  Anta: Anta,
  Antic: Antic,
  Antic_Didone: Antic_Didone,
  Antic_Slab: Antic_Slab,
  Anton: Anton,
  Anton_SC: Anton_SC,
  Antonio: Antonio,
  Anuphan: Anuphan,
  Anybody: Anybody,
  Aoboshi_One: Aoboshi_One,
  Arapey: Arapey,
  Arbutus: Arbutus,
  Arbutus_Slab: Arbutus_Slab,
  Architects_Daughter: Architects_Daughter,
  Archivo: Archivo,
  Archivo_Black: Archivo_Black,
  Archivo_Narrow: Archivo_Narrow,
  Are_You_Serious: Are_You_Serious,
  Aref_Ruqaa: Aref_Ruqaa,
  Aref_Ruqaa_Ink: Aref_Ruqaa_Ink,
  Arima: Arima,
  Arimo: Arimo,
  Arizonia: Arizonia,
  Armata: Armata,
  Arsenal: Arsenal,
  Arsenal_SC: Arsenal_SC,
  Artifika: Artifika,
  Arvo: Arvo,
  Arya: Arya,
  Asap: Asap,
  Asap_Condensed: Asap_Condensed,
  Asar: Asar,
  Asset: Asset,
  Assistant: Assistant,
  Astloch: Astloch,
  Asul: Asul,
  Athiti: Athiti,
  Atkinson_Hyperlegible: Atkinson_Hyperlegible,
  Atma: Atma,
  Atomic_Age: Atomic_Age,
  Aubrey: Aubrey,
  Audiowide: Audiowide,
  Autour_One: Autour_One,
  Average: Average,
  Average_Sans: Average_Sans,
  Averia_Gruesa_Libre: Averia_Gruesa_Libre,
  Averia_Libre: Averia_Libre,
  Averia_Sans_Libre: Averia_Sans_Libre,
  Averia_Serif_Libre: Averia_Serif_Libre,
  Azeret_Mono: Azeret_Mono,
  B612: B612,
  B612_Mono: B612_Mono,
  BIZ_UDGothic: BIZ_UDGothic,
  BIZ_UDMincho: BIZ_UDMincho,
  BIZ_UDPGothic: BIZ_UDPGothic,
  BIZ_UDPMincho: BIZ_UDPMincho,
  Babylonica: Babylonica,
  Bacasime_Antique: Bacasime_Antique,
  Bad_Script: Bad_Script,
  Bagel_Fat_One: Bagel_Fat_One,
  Bahiana: Bahiana,
  Bahianita: Bahianita,
  Bai_Jamjuree: Bai_Jamjuree,
  Bakbak_One: Bakbak_One,
  Ballet: Ballet,
  Baloo_2: Baloo_2,
  Baloo_Bhai_2: Baloo_Bhai_2,
  Baloo_Bhaijaan_2: Baloo_Bhaijaan_2,
  Baloo_Bhaina_2: Baloo_Bhaina_2,
  Baloo_Chettan_2: Baloo_Chettan_2,
  Baloo_Da_2: Baloo_Da_2,
  Baloo_Paaji_2: Baloo_Paaji_2,
  Baloo_Tamma_2: Baloo_Tamma_2,
  Baloo_Tammudu_2: Baloo_Tammudu_2,
  Baloo_Thambi_2: Baloo_Thambi_2,
  Balsamiq_Sans: Balsamiq_Sans,
  Balthazar: Balthazar,
  Bangers: Bangers,
  Barlow: Barlow,
  Barlow_Condensed: Barlow_Condensed,
  Barlow_Semi_Condensed: Barlow_Semi_Condensed,
  Barriecito: Barriecito,
  Barrio: Barrio,
  Basic: Basic,
  Baskervville: Baskervville,
  Baskervville_SC: Baskervville_SC,
  Battambang: Battambang,
  Baumans: Baumans,
  Bayon: Bayon,
  Be_Vietnam_Pro: Be_Vietnam_Pro,
  Beau_Rivage: Beau_Rivage,
  Bebas_Neue: Bebas_Neue,
  Beiruti: Beiruti,
  Belanosima: Belanosima,
  Belgrano: Belgrano,
  Bellefair: Bellefair,
  Belleza: Belleza,
  Bellota: Bellota,
  Bellota_Text: Bellota_Text,
  BenchNine: BenchNine,
  Benne: Benne,
  Bentham: Bentham,
  Berkshire_Swash: Berkshire_Swash,
  Besley: Besley,
  Beth_Ellen: Beth_Ellen,
  Bevan: Bevan,
  BhuTuka_Expanded_One: BhuTuka_Expanded_One,
  Big_Shoulders_Display: Big_Shoulders_Display,
  Big_Shoulders_Inline_Display: Big_Shoulders_Inline_Display,
  Big_Shoulders_Inline_Text: Big_Shoulders_Inline_Text,
  Big_Shoulders_Stencil_Display: Big_Shoulders_Stencil_Display,
  Big_Shoulders_Stencil_Text: Big_Shoulders_Stencil_Text,
  Big_Shoulders_Text: Big_Shoulders_Text,
  Bigelow_Rules: Bigelow_Rules,
  Bigshot_One: Bigshot_One,
  Bilbo: Bilbo,
  Bilbo_Swash_Caps: Bilbo_Swash_Caps,
  BioRhyme: BioRhyme,
  BioRhyme_Expanded: BioRhyme_Expanded,
  Birthstone: Birthstone,
  Birthstone_Bounce: Birthstone_Bounce,
  Biryani: Biryani,
  Bitter: Bitter,
  Black_And_White_Picture: Black_And_White_Picture,
  Black_Han_Sans: Black_Han_Sans,
  Black_Ops_One: Black_Ops_One,
  Blaka: Blaka,
  Blaka_Hollow: Blaka_Hollow,
  Blaka_Ink: Blaka_Ink,
  Blinker: Blinker,
  Bodoni_Moda: Bodoni_Moda,
  Bokor: Bokor,
  Bona_Nova: Bona_Nova,
  Bonbon: Bonbon,
  Bonheur_Royale: Bonheur_Royale,
  Boogaloo: Boogaloo,
  Borel: Borel,
  Bowlby_One: Bowlby_One,
  Bowlby_One_SC: Bowlby_One_SC,
  Braah_One: Braah_One,
  Brawler: Brawler,
  Bree_Serif: Bree_Serif,
  Bruno_Ace: Bruno_Ace,
  Bruno_Ace_SC: Bruno_Ace_SC,
  Brygada_1918: Brygada_1918,
  Bubblegum_Sans: Bubblegum_Sans,
  Bubbler_One: Bubbler_One,
  Buda: Buda,
  Buenard: Buenard,
  Bungee: Bungee,
  Bungee_Hairline: Bungee_Hairline,
  Bungee_Inline: Bungee_Inline,
  Bungee_Outline: Bungee_Outline,
  Bungee_Shade: Bungee_Shade,
  Bungee_Spice: Bungee_Spice,
  Butcherman: Butcherman,
  Butterfly_Kids: Butterfly_Kids,
  Cabin: Cabin,
  Cabin_Condensed: Cabin_Condensed,
  Cabin_Sketch: Cabin_Sketch,
  Caesar_Dressing: Caesar_Dressing,
  Cagliostro: Cagliostro,
  Cairo: Cairo,
  Cairo_Play: Cairo_Play,
  Caladea: Caladea,
  Calistoga: Calistoga,
  Calligraffitti: Calligraffitti,
  Cambay: Cambay,
  Cambo: Cambo,
  Candal: Candal,
  Cantarell: Cantarell,
  Cantata_One: Cantata_One,
  Cantora_One: Cantora_One,
  Caprasimo: Caprasimo,
  Caramel: Caramel,
  Carattere: Carattere,
  Cardo: Cardo,
  Carlito: Carlito,
  Carme: Carme,
  Carrois_Gothic: Carrois_Gothic,
  Carrois_Gothic_SC: Carrois_Gothic_SC,
  Carter_One: Carter_One,
  Castoro: Castoro,
  Castoro_Titling: Castoro_Titling,
  Catamaran: Catamaran,
  Caudex: Caudex,
  Caveat: Caveat,
  Caveat_Brush: Caveat_Brush,
  Cedarville_Cursive: Cedarville_Cursive,
  Ceviche_One: Ceviche_One,
  Chakra_Petch: Chakra_Petch,
  Changa: Changa,
  Changa_One: Changa_One,
  Chango: Chango,
  Charis_SIL: Charis_SIL,
  Charm: Charm,
  Charmonman: Charmonman,
  Chathura: Chathura,
  Chau_Philomene_One: Chau_Philomene_One,
  Chela_One: Chela_One,
  Chelsea_Market: Chelsea_Market,
  Chenla: Chenla,
  Cherish: Cherish,
  Cherry_Bomb_One: Cherry_Bomb_One,
  Cherry_Cream_Soda: Cherry_Cream_Soda,
  Cherry_Swash: Cherry_Swash,
  Chewy: Chewy,
  Chicle: Chicle,
  Chilanka: Chilanka,
  Chivo: Chivo,
  Chivo_Mono: Chivo_Mono,
  Chokokutai: Chokokutai,
  Chonburi: Chonburi,
  Cinzel: Cinzel,
  Cinzel_Decorative: Cinzel_Decorative,
  Clicker_Script: Clicker_Script,
  Climate_Crisis: Climate_Crisis,
  Coda: Coda,
  Codystar: Codystar,
  Coiny: Coiny,
  Combo: Combo,
  Comfortaa: Comfortaa,
  Comforter: Comforter,
  Comforter_Brush: Comforter_Brush,
  Comic_Neue: Comic_Neue,
  Coming_Soon: Coming_Soon,
  Comme: Comme,
  Commissioner: Commissioner,
  Concert_One: Concert_One,
  Condiment: Condiment,
  Content: Content,
  Contrail_One: Contrail_One,
  Convergence: Convergence,
  Cookie: Cookie,
  Copse: Copse,
  Corben: Corben,
  Corinthia: Corinthia,
  Cormorant: Cormorant,
  Cormorant_Garamond: Cormorant_Garamond,
  Cormorant_Infant: Cormorant_Infant,
  Cormorant_SC: Cormorant_SC,
  Cormorant_Unicase: Cormorant_Unicase,
  Cormorant_Upright: Cormorant_Upright,
  Courgette: Courgette,
  Courier_Prime: Courier_Prime,
  Cousine: Cousine,
  Coustard: Coustard,
  Covered_By_Your_Grace: Covered_By_Your_Grace,
  Crafty_Girls: Crafty_Girls,
  Creepster: Creepster,
  Crete_Round: Crete_Round,
  Crimson_Pro: Crimson_Pro,
  Crimson_Text: Crimson_Text,
  Croissant_One: Croissant_One,
  Crushed: Crushed,
  Cuprum: Cuprum,
  Cute_Font: Cute_Font,
  Cutive: Cutive,
  Cutive_Mono: Cutive_Mono,
  DM_Mono: DM_Mono,
  DM_Sans: DM_Sans,
  DM_Serif_Display: DM_Serif_Display,
  DM_Serif_Text: DM_Serif_Text,
  Dai_Banna_SIL: Dai_Banna_SIL,
  Damion: Damion,
  Dancing_Script: Dancing_Script,
  Dangrek: Dangrek,
  Darker_Grotesque: Darker_Grotesque,
  Darumadrop_One: Darumadrop_One,
  David_Libre: David_Libre,
  Dawning_of_a_New_Day: Dawning_of_a_New_Day,
  Days_One: Days_One,
  Dekko: Dekko,
  Dela_Gothic_One: Dela_Gothic_One,
  Delicious_Handrawn: Delicious_Handrawn,
  Delius: Delius,
  Delius_Swash_Caps: Delius_Swash_Caps,
  Delius_Unicase: Delius_Unicase,
  Della_Respira: Della_Respira,
  Denk_One: Denk_One,
  Devonshire: Devonshire,
  Dhurjati: Dhurjati,
  Didact_Gothic: Didact_Gothic,
  Diphylleia: Diphylleia,
  Diplomata: Diplomata,
  Diplomata_SC: Diplomata_SC,
  Do_Hyeon: Do_Hyeon,
  Dokdo: Dokdo,
  Domine: Domine,
  Donegal_One: Donegal_One,
  Dongle: Dongle,
  Doppio_One: Doppio_One,
  Dorsa: Dorsa,
  Dosis: Dosis,
  DotGothic16: DotGothic16,
  Dr_Sugiyama: Dr_Sugiyama,
  Duru_Sans: Duru_Sans,
  DynaPuff: DynaPuff,
  Dynalight: Dynalight,
  EB_Garamond: EB_Garamond,
  Eagle_Lake: Eagle_Lake,
  East_Sea_Dokdo: East_Sea_Dokdo,
  Eater: Eater,
  Economica: Economica,
  Eczar: Eczar,
  Edu_NSW_ACT_Foundation: Edu_NSW_ACT_Foundation,
  Edu_QLD_Beginner: Edu_QLD_Beginner,
  Edu_SA_Beginner: Edu_SA_Beginner,
  Edu_TAS_Beginner: Edu_TAS_Beginner,
  Edu_VIC_WA_NT_Beginner: Edu_VIC_WA_NT_Beginner,
  El_Messiri: El_Messiri,
  Electrolize: Electrolize,
  Elsie: Elsie,
  Elsie_Swash_Caps: Elsie_Swash_Caps,
  Emblema_One: Emblema_One,
  Emilys_Candy: Emilys_Candy,
  Encode_Sans: Encode_Sans,
  Encode_Sans_Condensed: Encode_Sans_Condensed,
  Encode_Sans_Expanded: Encode_Sans_Expanded,
  Encode_Sans_SC: Encode_Sans_SC,
  Encode_Sans_Semi_Condensed: Encode_Sans_Semi_Condensed,
  Encode_Sans_Semi_Expanded: Encode_Sans_Semi_Expanded,
  Engagement: Engagement,
  Englebert: Englebert,
  Enriqueta: Enriqueta,
  Ephesis: Ephesis,
  Epilogue: Epilogue,
  Erica_One: Erica_One,
  Esteban: Esteban,
  Estonia: Estonia,
  Euphoria_Script: Euphoria_Script,
  Ewert: Ewert,
  Exo: Exo,
  Exo_2: Exo_2,
  Expletus_Sans: Expletus_Sans,
  Explora: Explora,
  Fahkwang: Fahkwang,
  Familjen_Grotesk: Familjen_Grotesk,
  Fanwood_Text: Fanwood_Text,
  Farro: Farro,
  Farsan: Farsan,
  Fascinate: Fascinate,
  Fascinate_Inline: Fascinate_Inline,
  Faster_One: Faster_One,
  Fasthand: Fasthand,
  Fauna_One: Fauna_One,
  Faustina: Faustina,
  Federant: Federant,
  Federo: Federo,
  Felipa: Felipa,
  Fenix: Fenix,
  Festive: Festive,
  Figtree: Figtree,
  Finger_Paint: Finger_Paint,
  Finlandica: Finlandica,
  Fira_Code: Fira_Code,
  Fira_Mono: Fira_Mono,
  Fira_Sans: Fira_Sans,
  Fira_Sans_Condensed: Fira_Sans_Condensed,
  Fira_Sans_Extra_Condensed: Fira_Sans_Extra_Condensed,
  Fjalla_One: Fjalla_One,
  Fjord_One: Fjord_One,
  Flamenco: Flamenco,
  Flavors: Flavors,
  Fleur_De_Leah: Fleur_De_Leah,
  Flow_Block: Flow_Block,
  Flow_Circular: Flow_Circular,
  Flow_Rounded: Flow_Rounded,
  Foldit: Foldit,
  Fondamento: Fondamento,
  Fontdiner_Swanky: Fontdiner_Swanky,
  Forum: Forum,
  Fragment_Mono: Fragment_Mono,
  Francois_One: Francois_One,
  Frank_Ruhl_Libre: Frank_Ruhl_Libre,
  Fraunces: Fraunces,
  Freckle_Face: Freckle_Face,
  Fredericka_the_Great: Fredericka_the_Great,
  Fredoka: Fredoka,
  Freehand: Freehand,
  Fresca: Fresca,
  Frijole: Frijole,
  Fruktur: Fruktur,
  Fugaz_One: Fugaz_One,
  Fuggles: Fuggles,
  Fuzzy_Bubbles: Fuzzy_Bubbles,
  GFS_Didot: GFS_Didot,
  GFS_Neohellenic: GFS_Neohellenic,
  Gabriela: Gabriela,
  Gaegu: Gaegu,
  Gafata: Gafata,
  Gajraj_One: Gajraj_One,
  Galada: Galada,
  Galdeano: Galdeano,
  Galindo: Galindo,
  Gamja_Flower: Gamja_Flower,
  Gantari: Gantari,
  Gasoek_One: Gasoek_One,
  Gayathri: Gayathri,
  Gelasio: Gelasio,
  Gemunu_Libre: Gemunu_Libre,
  Genos: Genos,
  Gentium_Book_Plus: Gentium_Book_Plus,
  Gentium_Plus: Gentium_Plus,
  Geo: Geo,
  Georama: Georama,
  Geostar: Geostar,
  Geostar_Fill: Geostar_Fill,
  Germania_One: Germania_One,
  Gideon_Roman: Gideon_Roman,
  Gidugu: Gidugu,
  Gilda_Display: Gilda_Display,
  Girassol: Girassol,
  Give_You_Glory: Give_You_Glory,
  Glass_Antiqua: Glass_Antiqua,
  Glegoo: Glegoo,
  Gloock: Gloock,
  Gloria_Hallelujah: Gloria_Hallelujah,
  Glory: Glory,
  Gluten: Gluten,
  Goblin_One: Goblin_One,
  Gochi_Hand: Gochi_Hand,
  Goldman: Goldman,
  Golos_Text: Golos_Text,
  Gorditas: Gorditas,
  Gothic_A1: Gothic_A1,
  Gotu: Gotu,
  Goudy_Bookletter_1911: Goudy_Bookletter_1911,
  Gowun_Batang: Gowun_Batang,
  Gowun_Dodum: Gowun_Dodum,
  Graduate: Graduate,
  Grand_Hotel: Grand_Hotel,
  Grandiflora_One: Grandiflora_One,
  Grandstander: Grandstander,
  Grape_Nuts: Grape_Nuts,
  Gravitas_One: Gravitas_One,
  Great_Vibes: Great_Vibes,
  Grechen_Fuemen: Grechen_Fuemen,
  Grenze: Grenze,
  Grenze_Gotisch: Grenze_Gotisch,
  Grey_Qo: Grey_Qo,
  Griffy: Griffy,
  Gruppo: Gruppo,
  Gudea: Gudea,
  Gugi: Gugi,
  Gulzar: Gulzar,
  Gupter: Gupter,
  Gurajada: Gurajada,
  Gwendolyn: Gwendolyn,
  Habibi: Habibi,
  Hachi_Maru_Pop: Hachi_Maru_Pop,
  Hahmlet: Hahmlet,
  Halant: Halant,
  Hammersmith_One: Hammersmith_One,
  Hanalei: Hanalei,
  Hanalei_Fill: Hanalei_Fill,
  Handjet: Handjet,
  Handlee: Handlee,
  Hanken_Grotesk: Hanken_Grotesk,
  Hanuman: Hanuman,
  Happy_Monkey: Happy_Monkey,
  Harmattan: Harmattan,
  Headland_One: Headland_One,
  Heebo: Heebo,
  Hedvig_Letters_Sans: Hedvig_Letters_Sans,
  Henny_Penny: Henny_Penny,
  Hepta_Slab: Hepta_Slab,
  Herr_Von_Muellerhoff: Herr_Von_Muellerhoff,
  Hedvig_Letters_Serif: Hedvig_Letters_Serif,
  Hi_Melody: Hi_Melody,
  Hina_Mincho: Hina_Mincho,
  Hind: Hind,
  Hind_Guntur: Hind_Guntur,
  Hind_Madurai: Hind_Madurai,
  Hind_Siliguri: Hind_Siliguri,
  Hind_Vadodara: Hind_Vadodara,
  Holtwood_One_SC: Holtwood_One_SC,
  Homemade_Apple: Homemade_Apple,
  Homenaje: Homenaje,
  Honk: Honk,
  Hubballi: Hubballi,
  Hurricane: Hurricane,
  IBM_Plex_Mono: IBM_Plex_Mono,
  IBM_Plex_Sans: IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic: IBM_Plex_Sans_Arabic,
  IBM_Plex_Sans_Condensed: IBM_Plex_Sans_Condensed,
  IBM_Plex_Sans_Devanagari: IBM_Plex_Sans_Devanagari,
  IBM_Plex_Sans_Hebrew: IBM_Plex_Sans_Hebrew,
  IBM_Plex_Sans_JP: IBM_Plex_Sans_JP,
  IBM_Plex_Sans_KR: IBM_Plex_Sans_KR,
  IBM_Plex_Sans_Thai: IBM_Plex_Sans_Thai,
  IBM_Plex_Sans_Thai_Looped: IBM_Plex_Sans_Thai_Looped,
  IBM_Plex_Serif: IBM_Plex_Serif,
  IM_Fell_DW_Pica: IM_Fell_DW_Pica,
  IM_Fell_DW_Pica_SC: IM_Fell_DW_Pica_SC,
  IM_Fell_Double_Pica: IM_Fell_Double_Pica,
  IM_Fell_Double_Pica_SC: IM_Fell_Double_Pica_SC,
  IM_Fell_English: IM_Fell_English,
  IM_Fell_English_SC: IM_Fell_English_SC,
  IM_Fell_French_Canon: IM_Fell_French_Canon,
  IM_Fell_French_Canon_SC: IM_Fell_French_Canon_SC,
  IM_Fell_Great_Primer: IM_Fell_Great_Primer,
  IM_Fell_Great_Primer_SC: IM_Fell_Great_Primer_SC,
  Ibarra_Real_Nova: Ibarra_Real_Nova,
  Iceberg: Iceberg,
  Iceland: Iceland,
  Imbue: Imbue,
  Imperial_Script: Imperial_Script,
  Imprima: Imprima,
  Inclusive_Sans: Inclusive_Sans,
  Instrument_Sans: Instrument_Sans,
  Instrument_Serif: Instrument_Serif,
  Inconsolata: Inconsolata,
  Inder: Inder,
  Indie_Flower: Indie_Flower,
  Ingrid_Darling: Ingrid_Darling,
  Inika: Inika,
  Inknut_Antiqua: Inknut_Antiqua,
  Inria_Sans: Inria_Sans,
  Inria_Serif: Inria_Serif,
  Inspiration: Inspiration,
  Inter: Inter,
  Inter_Tight: Inter_Tight,
  Irish_Grover: Irish_Grover,
  Island_Moments: Island_Moments,
  Istok_Web: Istok_Web,
  Italiana: Italiana,
  Italianno: Italianno,
  Itim: Itim,
  Jacques_Francois: Jacques_Francois,
  Jacques_Francois_Shadow: Jacques_Francois_Shadow,
  Jaldi: Jaldi,
  JetBrains_Mono: JetBrains_Mono,
  Jim_Nightshade: Jim_Nightshade,
  Joan: Joan,
  Jockey_One: Jockey_One,
  Jacquard_12: Jacquard_12,
  Jacquard_24: Jacquard_24,
  Jacquard_12_Charted: Jacquard_12_Charted,
  Jacquard_24_Charted: Jacquard_24_Charted,
  Jacquarda_Bastarda_9: Jacquarda_Bastarda_9,
  Jacquarda_Bastarda_9_Charted: Jacquarda_Bastarda_9_Charted,
  Jolly_Lodger: Jolly_Lodger,
  Jomhuria: Jomhuria,
  Jomolhari: Jomolhari,
  Josefin_Sans: Josefin_Sans,
  Josefin_Slab: Josefin_Slab,
  Jost: Jost,
  Joti_One: Joti_One,
  Jua: Jua,
  Jaini: Jaini,
  Jaro: Jaro,
  Jaini_Purva: Jaini_Purva,
  Judson: Judson,
  Julee: Julee,
  Julius_Sans_One: Julius_Sans_One,
  Junge: Junge,
  Jura: Jura,
  Just_Another_Hand: Just_Another_Hand,
  Just_Me_Again_Down_Here: Just_Me_Again_Down_Here,
  K2D: K2D,
  Kablammo: Kablammo,
  Kadwa: Kadwa,
  Kaisei_Decol: Kaisei_Decol,
  Kaisei_HarunoUmi: Kaisei_HarunoUmi,
  Kaisei_Opti: Kaisei_Opti,
  Kaisei_Tokumin: Kaisei_Tokumin,
  Kalam: Kalam,
  Kameron: Kameron,
  Kanit: Kanit,
  Kantumruy_Pro: Kantumruy_Pro,
  Karantina: Karantina,
  Karla: Karla,
  Karma: Karma,
  Katibeh: Katibeh,
  Kaushan_Script: Kaushan_Script,
  Kavivanar: Kavivanar,
  Kavoon: Kavoon,
  Kdam_Thmor_Pro: Kdam_Thmor_Pro,
  Keania_One: Keania_One,
  Kelly_Slab: Kelly_Slab,
  Jersey_10: Jersey_10,
  Jersey_10_Charted: Jersey_10_Charted,
  Jersey_15: Jersey_15,
  Jersey_15_Charted: Jersey_15_Charted,
  Jersey_20: Jersey_20,
  Jersey_20_Charted: Jersey_20_Charted,
  Jersey_25: Jersey_25,
  Jersey_25_Charted: Jersey_25_Charted,
  Kalnia: Kalnia,
  Kalnia_Glaze: Kalnia_Glaze,
  Karla_Tamil_Inclined: Karla_Tamil_Inclined,
  Karla_Tamil_Upright: Karla_Tamil_Upright,
  Kay_Pho_Du: Kay_Pho_Du,
  Kode_Mono: Kode_Mono,
  Linefont: Linefont,
  Lisu_Bosa: Lisu_Bosa,
  Lugrasimo: Lugrasimo,
  Lumanosimo: Lumanosimo,
  Lunasima: Lunasima,
  LXGW_WenKai_Mono_TC: LXGW_WenKai_Mono_TC,
  LXGW_WenKai_TC: LXGW_WenKai_TC,
  Madimi_One: Madimi_One,
  Maname: Maname,
  Matemasie: Matemasie,
  Micro_5: Micro_5,
  Micro_5_Charted: Micro_5_Charted,
  Moderustic: Moderustic,
  Moirai_One: Moirai_One,
  Monomaniac_One: Monomaniac_One,
  Mooli: Mooli,
  Namdhinggo: Namdhinggo,
  Narnoor: Narnoor,
  New_Amsterdam: New_Amsterdam,
  Noto_Sans_Chorasmian: Noto_Sans_Chorasmian,
  Noto_Sans_Cypro_Minoan: Noto_Sans_Cypro_Minoan,
  Noto_Sans_Kawi: Noto_Sans_Kawi,
  Noto_Sans_Lao_Looped: Noto_Sans_Lao_Looped,
  Noto_Sans_Mende_Kikakui: Noto_Sans_Mende_Kikakui,
  Noto_Sans_Nag_Mundari: Noto_Sans_Nag_Mundari,
  Noto_Sans_Nandinagari: Noto_Sans_Nandinagari,
  Noto_Sans_NKo: Noto_Sans_NKo,
  Noto_Sans_NKo_Unjoined: Noto_Sans_NKo_Unjoined,
  Noto_Sans_SignWriting: Noto_Sans_SignWriting,
  Noto_Sans_Syriac_Eastern: Noto_Sans_Syriac_Eastern,
  Noto_Sans_Tangsa: Noto_Sans_Tangsa,
  Noto_Sans_Vithkuqi: Noto_Sans_Vithkuqi,
  Noto_Serif_Khitan_Small_Script: Noto_Serif_Khitan_Small_Script,
  Noto_Serif_Khojki: Noto_Serif_Khojki,
  Noto_Serif_Makasar: Noto_Serif_Makasar,
  Noto_Serif_NP_Hmong: Noto_Serif_NP_Hmong,
  Noto_Serif_Old_Uyghur: Noto_Serif_Old_Uyghur,
  Noto_Serif_Oriya: Noto_Serif_Oriya,
  Noto_Serif_Ottoman_Siyaq: Noto_Serif_Ottoman_Siyaq,
  Noto_Serif_Toto: Noto_Serif_Toto,
  Noto_Serif_Vithkuqi: Noto_Serif_Vithkuqi,
  Noto_Znamenny_Musical_Notation: Noto_Znamenny_Musical_Notation,
  Ojuju: Ojuju,
  Onest: Onest,
  Orbit: Orbit,
  Padyakke_Expanded_One: Padyakke_Expanded_One,
  Pathway_Extreme: Pathway_Extreme,
  Phudu: Phudu,
  Pixelify_Sans: Pixelify_Sans,
  Platypi: Platypi,
  Playfair: Playfair,
  Playpen_Sans: Playpen_Sans,
  Playwrite_AR: Playwrite_AR,
  Playwrite_AT: Playwrite_AT,
  Playwrite_AU_NSW: Playwrite_AU_NSW,
  Playwrite_AU_QLD: Playwrite_AU_QLD,
  Playwrite_AU_SA: Playwrite_AU_SA,
  Playwrite_AU_TAS: Playwrite_AU_TAS,
  Playwrite_AU_VIC: Playwrite_AU_VIC,
  Playwrite_BE_VLG: Playwrite_BE_VLG,
  Playwrite_BE_WAL: Playwrite_BE_WAL,
  Playwrite_BR: Playwrite_BR,
  Playwrite_CA: Playwrite_CA,
  Playwrite_CL: Playwrite_CL,
  Playwrite_CO: Playwrite_CO,
  Playwrite_CU: Playwrite_CU,
  Playwrite_CZ: Playwrite_CZ,
  Playwrite_DE_Grund: Playwrite_DE_Grund,
  Playwrite_DE_LA: Playwrite_DE_LA,
  Playwrite_DE_SAS: Playwrite_DE_SAS,
  Playwrite_DE_VA: Playwrite_DE_VA,
  Playwrite_DK_Loopet: Playwrite_DK_Loopet,
  Playwrite_DK_Uloopet: Playwrite_DK_Uloopet,
  Playwrite_ES: Playwrite_ES,
  Playwrite_ES_Deco: Playwrite_ES_Deco,
  Playwrite_FR_Moderne: Playwrite_FR_Moderne,
  Playwrite_FR_Trad: Playwrite_FR_Trad,
  Playwrite_GB_J: Playwrite_GB_J,
  Playwrite_GB_S: Playwrite_GB_S,
  Playwrite_HR: Playwrite_HR,
  Playwrite_HR_Lijeva: Playwrite_HR_Lijeva,
  Playwrite_HU: Playwrite_HU,
  Playwrite_ID: Playwrite_ID,
  Playwrite_IE: Playwrite_IE,
  Playwrite_IN: Playwrite_IN,
  Playwrite_IS: Playwrite_IS,
  Playwrite_IT_Moderna: Playwrite_IT_Moderna,
  Playwrite_IT_Trad: Playwrite_IT_Trad,
  Playwrite_MX: Playwrite_MX,
  Playwrite_NG_Modern: Playwrite_NG_Modern,
  Playwrite_NL: Playwrite_NL,
  Playwrite_NO: Playwrite_NO,
  Playwrite_NZ: Playwrite_NZ,
  Playwrite_PE: Playwrite_PE,
  Playwrite_PL: Playwrite_PL,
  Playwrite_PT: Playwrite_PT,
  Playwrite_RO: Playwrite_RO,
  Playwrite_SK: Playwrite_SK,
  Playwrite_TZ: Playwrite_TZ,
  Playwrite_US_Modern: Playwrite_US_Modern,
  Playwrite_US_Trad: Playwrite_US_Trad,
  Playwrite_VN: Playwrite_VN,
  Playwrite_ZA: Playwrite_ZA,
  Poltawski_Nowy: Poltawski_Nowy,
  Protest_Guerrilla: Protest_Guerrilla,
  Protest_Revolution: Protest_Revolution,
  Protest_Riot: Protest_Riot,
  Protest_Strike: Protest_Strike,
  Radio_Canada_Big: Radio_Canada_Big,
  Reddit_Mono: Reddit_Mono,
  Reddit_Sans: Reddit_Sans,
  Reddit_Sans_Condensed: Reddit_Sans_Condensed,
  REM: REM,
  Rethink_Sans: Rethink_Sans,
  Rubik_Scribble: Rubik_Scribble,
  Ruwudu: Ruwudu,
  Sankofa_Display: Sankofa_Display,
  Schibsted_Grotesk: Schibsted_Grotesk,
  Sedan: Sedan,
  Sedan_SC: Sedan_SC,
  Shantell_Sans: Shantell_Sans,
  Sixtyfour: Sixtyfour,
  Sixtyfour_Convergence: Sixtyfour_Convergence,
  Slackside_One: Slackside_One,
  Sofia_Sans: Sofia_Sans,
  Sofia_Sans_Condensed: Sofia_Sans_Condensed,
  Sofia_Sans_Extra_Condensed: Sofia_Sans_Extra_Condensed,
  Sofia_Sans_Semi_Condensed: Sofia_Sans_Semi_Condensed,
  Solitreo: Solitreo,
  Sometype_Mono: Sometype_Mono,
  Sono: Sono,
  Splash: Splash,
  Spline_Sans: Spline_Sans,
  Spline_Sans_Mono: Spline_Sans_Mono,
  Square_Peg: Square_Peg,
  SUSE: SUSE,
  Tapestry: Tapestry,
  Tilt_Neon: Tilt_Neon,
  Tilt_Prism: Tilt_Prism,
  Tilt_Warp: Tilt_Warp,
  Twinkle_Star: Twinkle_Star,
  Unbounded: Unbounded,
  Updock: Updock,
  Kenia: Kenia,
  Khand: Khand,
  Khmer: Khmer,
  Khula: Khula,
  Kings: Kings,
  Kirang_Haerang: Kirang_Haerang,
  Kite_One: Kite_One,
  Kiwi_Maru: Kiwi_Maru,
  Klee_One: Klee_One,
  Knewave: Knewave,
  KoHo: KoHo,
  Kodchasan: Kodchasan,
  Koh_Santepheap: Koh_Santepheap,
  Kolker_Brush: Kolker_Brush,
  Konkhmer_Sleokchher: Konkhmer_Sleokchher,
  Kosugi: Kosugi,
  Kosugi_Maru: Kosugi_Maru,
  Kotta_One: Kotta_One,
  Koulen: Koulen,
  Kranky: Kranky,
  Kreon: Kreon,
  Kristi: Kristi,
  Krona_One: Krona_One,
  Krub: Krub,
  Kufam: Kufam,
  Kulim_Park: Kulim_Park,
  Kumar_One: Kumar_One,
  Kumar_One_Outline: Kumar_One_Outline,
  Kumbh_Sans: Kumbh_Sans,
  Kurale: Kurale,
  La_Belle_Aurore: La_Belle_Aurore,
  Labrada: Labrada,
  Lacquer: Lacquer,
  Laila: Laila,
  Lakki_Reddy: Lakki_Reddy,
  Lalezar: Lalezar,
  Lancelot: Lancelot,
  Langar: Langar,
  Lateef: Lateef,
  Lato: Lato,
  Lavishly_Yours: Lavishly_Yours,
  League_Gothic: League_Gothic,
  League_Script: League_Script,
  League_Spartan: League_Spartan,
  Leckerli_One: Leckerli_One,
  Ledger: Ledger,
  Lekton: Lekton,
  Lemon: Lemon,
  Lemonada: Lemonada,
  Lexend: Lexend,
  Lexend_Deca: Lexend_Deca,
  Lexend_Exa: Lexend_Exa,
  Lexend_Giga: Lexend_Giga,
  Lexend_Mega: Lexend_Mega,
  Lexend_Peta: Lexend_Peta,
  Lexend_Tera: Lexend_Tera,
  Lexend_Zetta: Lexend_Zetta,
  Libre_Barcode_128: Libre_Barcode_128,
  Libre_Barcode_128_Text: Libre_Barcode_128_Text,
  Libre_Barcode_39: Libre_Barcode_39,
  Libre_Barcode_39_Extended: Libre_Barcode_39_Extended,
  Libre_Barcode_39_Extended_Text: Libre_Barcode_39_Extended_Text,
  Libre_Barcode_39_Text: Libre_Barcode_39_Text,
  Libre_Barcode_EAN13_Text: Libre_Barcode_EAN13_Text,
  Libre_Baskerville: Libre_Baskerville,
  Libre_Bodoni: Libre_Bodoni,
  Libre_Caslon_Display: Libre_Caslon_Display,
  Libre_Caslon_Text: Libre_Caslon_Text,
  Libre_Franklin: Libre_Franklin,
  Licorice: Licorice,
  Life_Savers: Life_Savers,
  Lilita_One: Lilita_One,
  Lily_Script_One: Lily_Script_One,
  Limelight: Limelight,
  Linden_Hill: Linden_Hill,
  Literata: Literata,
  Liu_Jian_Mao_Cao: Liu_Jian_Mao_Cao,
  Livvic: Livvic,
  Lobster: Lobster,
  Lobster_Two: Lobster_Two,
  Londrina_Outline: Londrina_Outline,
  Londrina_Shadow: Londrina_Shadow,
  Londrina_Sketch: Londrina_Sketch,
  Londrina_Solid: Londrina_Solid,
  Long_Cang: Long_Cang,
  Lora: Lora,
  Love_Light: Love_Light,
  Love_Ya_Like_A_Sister: Love_Ya_Like_A_Sister,
  Loved_by_the_King: Loved_by_the_King,
  Lovers_Quarrel: Lovers_Quarrel,
  Luckiest_Guy: Luckiest_Guy,
  Lusitana: Lusitana,
  Lustria: Lustria,
  Luxurious_Roman: Luxurious_Roman,
  Luxurious_Script: Luxurious_Script,
  M_PLUS_1: M_PLUS_1,
  M_PLUS_1_Code: M_PLUS_1_Code,
  M_PLUS_1p: M_PLUS_1p,
  M_PLUS_2: M_PLUS_2,
  M_PLUS_Code_Latin: M_PLUS_Code_Latin,
  M_PLUS_Rounded_1c: M_PLUS_Rounded_1c,
  Ma_Shan_Zheng: Ma_Shan_Zheng,
  Macondo: Macondo,
  Macondo_Swash_Caps: Macondo_Swash_Caps,
  Mada: Mada,
  Magra: Magra,
  Maiden_Orange: Maiden_Orange,
  Maitree: Maitree,
  Major_Mono_Display: Major_Mono_Display,
  Mako: Mako,
  Mali: Mali,
  Mallanna: Mallanna,
  Mandali: Mandali,
  Manjari: Manjari,
  Manrope: Manrope,
  Mansalva: Mansalva,
  Manuale: Manuale,
  Marcellus: Marcellus,
  Marcellus_SC: Marcellus_SC,
  Marck_Script: Marck_Script,
  Margarine: Margarine,
  Marhey: Marhey,
  Markazi_Text: Markazi_Text,
  Marko_One: Marko_One,
  Marmelad: Marmelad,
  Martel: Martel,
  Martel_Sans: Martel_Sans,
  Martian_Mono: Martian_Mono,
  Marvel: Marvel,
  Mate: Mate,
  Mate_SC: Mate_SC,
  Maven_Pro: Maven_Pro,
  McLaren: McLaren,
  Mea_Culpa: Mea_Culpa,
  Meddon: Meddon,
  MedievalSharp: MedievalSharp,
  Medula_One: Medula_One,
  Meera_Inimai: Meera_Inimai,
  Megrim: Megrim,
  Meie_Script: Meie_Script,
  Meow_Script: Meow_Script,
  Merienda: Merienda,
  Merriweather: Merriweather,
  Merriweather_Sans: Merriweather_Sans,
  Metal: Metal,
  Metal_Mania: Metal_Mania,
  Metamorphous: Metamorphous,
  Metrophobic: Metrophobic,
  Michroma: Michroma,
  Milonga: Milonga,
  Miltonian: Miltonian,
  Miltonian_Tattoo: Miltonian_Tattoo,
  Mina: Mina,
  Mingzat: Mingzat,
  Miniver: Miniver,
  Miriam_Libre: Miriam_Libre,
  Mirza: Mirza,
  Miss_Fajardose: Miss_Fajardose,
  Mitr: Mitr,
  Mochiy_Pop_One: Mochiy_Pop_One,
  Mochiy_Pop_P_One: Mochiy_Pop_P_One,
  Modak: Modak,
  Modern_Antiqua: Modern_Antiqua,
  Mogra: Mogra,
  Mohave: Mohave,
  Molengo: Molengo,
  Molle: Molle,
  Monda: Monda,
  Monofett: Monofett,
  Monoton: Monoton,
  Monsieur_La_Doulaise: Monsieur_La_Doulaise,
  Montaga: Montaga,
  Montagu_Slab: Montagu_Slab,
  MonteCarlo: MonteCarlo,
  Montez: Montez,
  Montserrat: Montserrat,
  Montserrat_Alternates: Montserrat_Alternates,
  Montserrat_Subrayada: Montserrat_Subrayada,
  Moo_Lah_Lah: Moo_Lah_Lah,
  Moon_Dance: Moon_Dance,
  Moul: Moul,
  Moulpali: Moulpali,
  Mountains_of_Christmas: Mountains_of_Christmas,
  Mouse_Memoirs: Mouse_Memoirs,
  Mr_Bedfort: Mr_Bedfort,
  Mr_Dafoe: Mr_Dafoe,
  Mr_De_Haviland: Mr_De_Haviland,
  Mrs_Saint_Delafield: Mrs_Saint_Delafield,
  Mrs_Sheppards: Mrs_Sheppards,
  Ms_Madi: Ms_Madi,
  Mukta: Mukta,
  Mukta_Mahee: Mukta_Mahee,
  Mukta_Malar: Mukta_Malar,
  Mukta_Vaani: Mukta_Vaani,
  Mulish: Mulish,
  Murecho: Murecho,
  MuseoModerno: MuseoModerno,
  My_Soul: My_Soul,
  Mynerve: Mynerve,
  Mystery_Quest: Mystery_Quest,
  NTR: NTR,
  Nabla: Nabla,
  Nanum_Brush_Script: Nanum_Brush_Script,
  Nanum_Gothic: Nanum_Gothic,
  Nanum_Gothic_Coding: Nanum_Gothic_Coding,
  Nanum_Myeongjo: Nanum_Myeongjo,
  Nanum_Pen_Script: Nanum_Pen_Script,
  Neonderthaw: Neonderthaw,
  Nerko_One: Nerko_One,
  Neucha: Neucha,
  Neuton: Neuton,
  New_Rocker: New_Rocker,
  New_Tegomin: New_Tegomin,
  News_Cycle: News_Cycle,
  Newsreader: Newsreader,
  Niconne: Niconne,
  Niramit: Niramit,
  Nixie_One: Nixie_One,
  Nobile: Nobile,
  Nokora: Nokora,
  Norican: Norican,
  Nosifer: Nosifer,
  Notable: Notable,
  Nothing_You_Could_Do: Nothing_You_Could_Do,
  Noticia_Text: Noticia_Text,
  Noto_Color_Emoji: Noto_Color_Emoji,
  Noto_Emoji: Noto_Emoji,
  Noto_Kufi_Arabic: Noto_Kufi_Arabic,
  Noto_Music: Noto_Music,
  Noto_Naskh_Arabic: Noto_Naskh_Arabic,
  Noto_Nastaliq_Urdu: Noto_Nastaliq_Urdu,
  Noto_Rashi_Hebrew: Noto_Rashi_Hebrew,
  Noto_Sans: Noto_Sans,
  Noto_Sans_Adlam: Noto_Sans_Adlam,
  Noto_Sans_Adlam_Unjoined: Noto_Sans_Adlam_Unjoined,
  Noto_Sans_Anatolian_Hieroglyphs: Noto_Sans_Anatolian_Hieroglyphs,
  Noto_Sans_Arabic: Noto_Sans_Arabic,
  Noto_Sans_Armenian: Noto_Sans_Armenian,
  Noto_Sans_Avestan: Noto_Sans_Avestan,
  Noto_Sans_Balinese: Noto_Sans_Balinese,
  Noto_Sans_Bamum: Noto_Sans_Bamum,
  Noto_Sans_Bassa_Vah: Noto_Sans_Bassa_Vah,
  Noto_Sans_Batak: Noto_Sans_Batak,
  Noto_Sans_Bengali: Noto_Sans_Bengali,
  Noto_Sans_Bhaiksuki: Noto_Sans_Bhaiksuki,
  Noto_Sans_Brahmi: Noto_Sans_Brahmi,
  Noto_Sans_Buginese: Noto_Sans_Buginese,
  Noto_Sans_Buhid: Noto_Sans_Buhid,
  Noto_Sans_Canadian_Aboriginal: Noto_Sans_Canadian_Aboriginal,
  Noto_Sans_Carian: Noto_Sans_Carian,
  Noto_Sans_Caucasian_Albanian: Noto_Sans_Caucasian_Albanian,
  Noto_Sans_Chakma: Noto_Sans_Chakma,
  Noto_Sans_Cham: Noto_Sans_Cham,
  Noto_Sans_Cherokee: Noto_Sans_Cherokee,
  Noto_Sans_Coptic: Noto_Sans_Coptic,
  Noto_Sans_Cuneiform: Noto_Sans_Cuneiform,
  Noto_Sans_Cypriot: Noto_Sans_Cypriot,
  Noto_Sans_Deseret: Noto_Sans_Deseret,
  Noto_Sans_Devanagari: Noto_Sans_Devanagari,
  Noto_Sans_Display: Noto_Sans_Display,
  Noto_Sans_Duployan: Noto_Sans_Duployan,
  Noto_Sans_Egyptian_Hieroglyphs: Noto_Sans_Egyptian_Hieroglyphs,
  Noto_Sans_Elbasan: Noto_Sans_Elbasan,
  Noto_Sans_Elymaic: Noto_Sans_Elymaic,
  Noto_Sans_Ethiopic: Noto_Sans_Ethiopic,
  Noto_Sans_Georgian: Noto_Sans_Georgian,
  Noto_Sans_Glagolitic: Noto_Sans_Glagolitic,
  Noto_Sans_Gothic: Noto_Sans_Gothic,
  Noto_Sans_Grantha: Noto_Sans_Grantha,
  Noto_Sans_Gujarati: Noto_Sans_Gujarati,
  Noto_Sans_Gunjala_Gondi: Noto_Sans_Gunjala_Gondi,
  Noto_Sans_Gurmukhi: Noto_Sans_Gurmukhi,
  Noto_Sans_HK: Noto_Sans_HK,
  Noto_Sans_Hanifi_Rohingya: Noto_Sans_Hanifi_Rohingya,
  Noto_Sans_Hanunoo: Noto_Sans_Hanunoo,
  Noto_Sans_Hatran: Noto_Sans_Hatran,
  Noto_Sans_Hebrew: Noto_Sans_Hebrew,
  Noto_Sans_Imperial_Aramaic: Noto_Sans_Imperial_Aramaic,
  Noto_Sans_Indic_Siyaq_Numbers: Noto_Sans_Indic_Siyaq_Numbers,
  Noto_Sans_Inscriptional_Pahlavi: Noto_Sans_Inscriptional_Pahlavi,
  Noto_Sans_Inscriptional_Parthian:
    Noto_Sans_Inscriptional_Parthian,
  Noto_Sans_JP: Noto_Sans_JP,
  Noto_Sans_Javanese: Noto_Sans_Javanese,
  Noto_Sans_KR: Noto_Sans_KR,
  Noto_Sans_Kaithi: Noto_Sans_Kaithi,
  Noto_Sans_Kannada: Noto_Sans_Kannada,
  Noto_Sans_Kayah_Li: Noto_Sans_Kayah_Li,
  Noto_Sans_Kharoshthi: Noto_Sans_Kharoshthi,
  Noto_Sans_Khmer: Noto_Sans_Khmer,
  Noto_Sans_Khojki: Noto_Sans_Khojki,
  Noto_Sans_Khudawadi: Noto_Sans_Khudawadi,
  Noto_Sans_Lao: Noto_Sans_Lao,
  Noto_Sans_Lepcha: Noto_Sans_Lepcha,
  Noto_Sans_Limbu: Noto_Sans_Limbu,
  Noto_Sans_Linear_A: Noto_Sans_Linear_A,
  Noto_Sans_Linear_B: Noto_Sans_Linear_B,
  Noto_Sans_Lisu: Noto_Sans_Lisu,
  Noto_Sans_Lycian: Noto_Sans_Lycian,
  Noto_Sans_Lydian: Noto_Sans_Lydian,
  Noto_Sans_Mahajani: Noto_Sans_Mahajani,
  Noto_Sans_Malayalam: Noto_Sans_Malayalam,
  Noto_Sans_Mandaic: Noto_Sans_Mandaic,
  Noto_Sans_Manichaean: Noto_Sans_Manichaean,
  Noto_Sans_Marchen: Noto_Sans_Marchen,
  Noto_Sans_Masaram_Gondi: Noto_Sans_Masaram_Gondi,
  Noto_Sans_Math: Noto_Sans_Math,
  Noto_Sans_Mayan_Numerals: Noto_Sans_Mayan_Numerals,
  Noto_Sans_Medefaidrin: Noto_Sans_Medefaidrin,
  Noto_Sans_Meetei_Mayek: Noto_Sans_Meetei_Mayek,
  Noto_Sans_Meroitic: Noto_Sans_Meroitic,
  Noto_Sans_Miao: Noto_Sans_Miao,
  Noto_Sans_Modi: Noto_Sans_Modi,
  Noto_Sans_Mongolian: Noto_Sans_Mongolian,
  Noto_Sans_Mono: Noto_Sans_Mono,
  Noto_Sans_Mro: Noto_Sans_Mro,
  Noto_Sans_Multani: Noto_Sans_Multani,
  Noto_Sans_Myanmar: Noto_Sans_Myanmar,
  Noto_Sans_Nabataean: Noto_Sans_Nabataean,
  Noto_Sans_New_Tai_Lue: Noto_Sans_New_Tai_Lue,
  Noto_Sans_Newa: Noto_Sans_Newa,
  Noto_Sans_Nushu: Noto_Sans_Nushu,
  Noto_Sans_Ogham: Noto_Sans_Ogham,
  Noto_Sans_Ol_Chiki: Noto_Sans_Ol_Chiki,
  Noto_Sans_Old_Hungarian: Noto_Sans_Old_Hungarian,
  Noto_Sans_Old_Italic: Noto_Sans_Old_Italic,
  Noto_Sans_Old_North_Arabian: Noto_Sans_Old_North_Arabian,
  Noto_Sans_Old_Permic: Noto_Sans_Old_Permic,
  Noto_Sans_Old_Persian: Noto_Sans_Old_Persian,
  Noto_Sans_Old_Sogdian: Noto_Sans_Old_Sogdian,
  Noto_Sans_Old_South_Arabian: Noto_Sans_Old_South_Arabian,
  Noto_Sans_Old_Turkic: Noto_Sans_Old_Turkic,
  Noto_Sans_Oriya: Noto_Sans_Oriya,
  Noto_Sans_Osage: Noto_Sans_Osage,
  Noto_Sans_Osmanya: Noto_Sans_Osmanya,
  Noto_Sans_Pahawh_Hmong: Noto_Sans_Pahawh_Hmong,
  Noto_Sans_Palmyrene: Noto_Sans_Palmyrene,
  Noto_Sans_Pau_Cin_Hau: Noto_Sans_Pau_Cin_Hau,
  Noto_Sans_Phags_Pa: Noto_Sans_Phags_Pa,
  Noto_Sans_Phoenician: Noto_Sans_Phoenician,
  Noto_Sans_Psalter_Pahlavi: Noto_Sans_Psalter_Pahlavi,
  Noto_Sans_Rejang: Noto_Sans_Rejang,
  Noto_Sans_Runic: Noto_Sans_Runic,
  Noto_Sans_SC: Noto_Sans_SC,
  Noto_Sans_Samaritan: Noto_Sans_Samaritan,
  Noto_Sans_Saurashtra: Noto_Sans_Saurashtra,
  Noto_Sans_Sharada: Noto_Sans_Sharada,
  Noto_Sans_Shavian: Noto_Sans_Shavian,
  Noto_Sans_Siddham: Noto_Sans_Siddham,
  Noto_Sans_Sinhala: Noto_Sans_Sinhala,
  Noto_Sans_Sogdian: Noto_Sans_Sogdian,
  Noto_Sans_Sora_Sompeng: Noto_Sans_Sora_Sompeng,
  Noto_Sans_Soyombo: Noto_Sans_Soyombo,
  Noto_Sans_Sundanese: Noto_Sans_Sundanese,
  Noto_Sans_Syloti_Nagri: Noto_Sans_Syloti_Nagri,
  Noto_Sans_Symbols: Noto_Sans_Symbols,
  Noto_Sans_Symbols_2: Noto_Sans_Symbols_2,
  Noto_Sans_Syriac: Noto_Sans_Syriac,
  Noto_Sans_TC: Noto_Sans_TC,
  Noto_Sans_Tagalog: Noto_Sans_Tagalog,
  Noto_Sans_Tagbanwa: Noto_Sans_Tagbanwa,
  Noto_Sans_Tai_Le: Noto_Sans_Tai_Le,
  Noto_Sans_Tai_Tham: Noto_Sans_Tai_Tham,
  Noto_Sans_Tai_Viet: Noto_Sans_Tai_Viet,
  Noto_Sans_Takri: Noto_Sans_Takri,
  Noto_Sans_Tamil: Noto_Sans_Tamil,
  Noto_Sans_Tamil_Supplement: Noto_Sans_Tamil_Supplement,
  Noto_Sans_Telugu: Noto_Sans_Telugu,
  Noto_Sans_Thaana: Noto_Sans_Thaana,
  Noto_Sans_Thai: Noto_Sans_Thai,
  Noto_Sans_Thai_Looped: Noto_Sans_Thai_Looped,
  Noto_Sans_Tifinagh: Noto_Sans_Tifinagh,
  Noto_Sans_Tirhuta: Noto_Sans_Tirhuta,
  Noto_Sans_Ugaritic: Noto_Sans_Ugaritic,
  Noto_Sans_Vai: Noto_Sans_Vai,
  Noto_Sans_Wancho: Noto_Sans_Wancho,
  Noto_Sans_Warang_Citi: Noto_Sans_Warang_Citi,
  Noto_Sans_Yi: Noto_Sans_Yi,
  Noto_Sans_Zanabazar_Square: Noto_Sans_Zanabazar_Square,
  Noto_Serif: Noto_Serif,
  Noto_Serif_Ahom: Noto_Serif_Ahom,
  Noto_Serif_Armenian: Noto_Serif_Armenian,
  Noto_Serif_Balinese: Noto_Serif_Balinese,
  Noto_Serif_Bengali: Noto_Serif_Bengali,
  Noto_Serif_Devanagari: Noto_Serif_Devanagari,
  Noto_Serif_Display: Noto_Serif_Display,
  Noto_Serif_Dogra: Noto_Serif_Dogra,
  Noto_Serif_Ethiopic: Noto_Serif_Ethiopic,
  Noto_Serif_Georgian: Noto_Serif_Georgian,
  Noto_Serif_Grantha: Noto_Serif_Grantha,
  Noto_Serif_Gujarati: Noto_Serif_Gujarati,
  Noto_Serif_Gurmukhi: Noto_Serif_Gurmukhi,
  Noto_Serif_HK: Noto_Serif_HK,
  Noto_Serif_Hebrew: Noto_Serif_Hebrew,
  Noto_Serif_JP: Noto_Serif_JP,
  Noto_Serif_KR: Noto_Serif_KR,
  Noto_Serif_Kannada: Noto_Serif_Kannada,
  Noto_Serif_Khmer: Noto_Serif_Khmer,
  Noto_Serif_Lao: Noto_Serif_Lao,
  Noto_Serif_Malayalam: Noto_Serif_Malayalam,
  Noto_Serif_Myanmar: Noto_Serif_Myanmar,
  Noto_Serif_SC: Noto_Serif_SC,
  Noto_Serif_Sinhala: Noto_Serif_Sinhala,
  Noto_Serif_TC: Noto_Serif_TC,
  Noto_Serif_Tamil: Noto_Serif_Tamil,
  Noto_Serif_Tangut: Noto_Serif_Tangut,
  Noto_Serif_Telugu: Noto_Serif_Telugu,
  Noto_Serif_Thai: Noto_Serif_Thai,
  Noto_Serif_Tibetan: Noto_Serif_Tibetan,
  Noto_Serif_Yezidi: Noto_Serif_Yezidi,
  Noto_Traditional_Nushu: Noto_Traditional_Nushu,
  Nova_Cut: Nova_Cut,
  Nova_Flat: Nova_Flat,
  Nova_Mono: Nova_Mono,
  Nova_Oval: Nova_Oval,
  Nova_Round: Nova_Round,
  Nova_Script: Nova_Script,
  Nova_Slim: Nova_Slim,
  Nova_Square: Nova_Square,
  Numans: Numans,
  Nunito: Nunito,
  Nunito_Sans: Nunito_Sans,
  Nuosu_SIL: Nuosu_SIL,
  Odibee_Sans: Odibee_Sans,
  Odor_Mean_Chey: Odor_Mean_Chey,
  Offside: Offside,
  Oi: Oi,
  Old_Standard_TT: Old_Standard_TT,
  Oldenburg: Oldenburg,
  Ole: Ole,
  Oleo_Script: Oleo_Script,
  Oleo_Script_Swash_Caps: Oleo_Script_Swash_Caps,
  Oooh_Baby: Oooh_Baby,
  Open_Sans: Open_Sans,
  Oranienbaum: Oranienbaum,
  Orbitron: Orbitron,
  Oregano: Oregano,
  Orelega_One: Orelega_One,
  Orienta: Orienta,
  Original_Surfer: Original_Surfer,
  Oswald: Oswald,
  Outfit: Outfit,
  Over_the_Rainbow: Over_the_Rainbow,
  Overlock: Overlock,
  Overlock_SC: Overlock_SC,
  Overpass: Overpass,
  Overpass_Mono: Overpass_Mono,
  Ovo: Ovo,
  Oxanium: Oxanium,
  Oxygen: Oxygen,
  Oxygen_Mono: Oxygen_Mono,
  PT_Mono: PT_Mono,
  PT_Sans: PT_Sans,
  PT_Sans_Caption: PT_Sans_Caption,
  PT_Sans_Narrow: PT_Sans_Narrow,
  PT_Serif: PT_Serif,
  PT_Serif_Caption: PT_Serif_Caption,
  Pacifico: Pacifico,
  Padauk: Padauk,
  Palanquin: Palanquin,
  Palanquin_Dark: Palanquin_Dark,
  Pangolin: Pangolin,
  Paprika: Paprika,
  Parisienne: Parisienne,
  Passero_One: Passero_One,
  Passion_One: Passion_One,
  Passions_Conflict: Passions_Conflict,
  Pathway_Gothic_One: Pathway_Gothic_One,
  Patrick_Hand: Patrick_Hand,
  Patrick_Hand_SC: Patrick_Hand_SC,
  Pattaya: Pattaya,
  Patua_One: Patua_One,
  Pavanam: Pavanam,
  Paytone_One: Paytone_One,
  Peddana: Peddana,
  Peralta: Peralta,
  Permanent_Marker: Permanent_Marker,
  Petemoss: Petemoss,
  Petit_Formal_Script: Petit_Formal_Script,
  Petrona: Petrona,
  Philosopher: Philosopher,
  Piazzolla: Piazzolla,
  Piedra: Piedra,
  Pinyon_Script: Pinyon_Script,
  Pirata_One: Pirata_One,
  Plaster: Plaster,
  Play: Play,
  Playball: Playball,
  Playfair_Display: Playfair_Display,
  Playfair_Display_SC: Playfair_Display_SC,
  Plus_Jakarta_Sans: Plus_Jakarta_Sans,
  Podkova: Podkova,
  Poiret_One: Poiret_One,
  Poller_One: Poller_One,
  Poly: Poly,
  Pompiere: Pompiere,
  Pontano_Sans: Pontano_Sans,
  Poor_Story: Poor_Story,
  Poppins: Poppins,
  Port_Lligat_Sans: Port_Lligat_Sans,
  Port_Lligat_Slab: Port_Lligat_Slab,
  Potta_One: Potta_One,
  Pragati_Narrow: Pragati_Narrow,
  Praise: Praise,
  Prata: Prata,
  Preahvihear: Preahvihear,
  Press_Start_2P: Press_Start_2P,
  Pridi: Pridi,
  Princess_Sofia: Princess_Sofia,
  Prociono: Prociono,
  Prompt: Prompt,
  Prosto_One: Prosto_One,
  Proza_Libre: Proza_Libre,
  Public_Sans: Public_Sans,
  Puppies_Play: Puppies_Play,
  Puritan: Puritan,
  Purple_Purse: Purple_Purse,
  Qahiri: Qahiri,
  Quando: Quando,
  Quantico: Quantico,
  Quattrocento: Quattrocento,
  Quattrocento_Sans: Quattrocento_Sans,
  Questrial: Questrial,
  Quicksand: Quicksand,
  Quintessential: Quintessential,
  Qwigley: Qwigley,
  Qwitcher_Grypen: Qwitcher_Grypen,
  Racing_Sans_One: Racing_Sans_One,
  Radio_Canada: Radio_Canada,
  Radley: Radley,
  Rajdhani: Rajdhani,
  Rakkas: Rakkas,
  Raleway: Raleway,
  Raleway_Dots: Raleway_Dots,
  Ramabhadra: Ramabhadra,
  Ramaraja: Ramaraja,
  Rambla: Rambla,
  Rammetto_One: Rammetto_One,
  Rampart_One: Rampart_One,
  Ranchers: Ranchers,
  Rancho: Rancho,
  Ranga: Ranga,
  Rasa: Rasa,
  Rationale: Rationale,
  Ravi_Prakash: Ravi_Prakash,
  Readex_Pro: Readex_Pro,
  Recursive: Recursive,
  Red_Hat_Display: Red_Hat_Display,
  Red_Hat_Mono: Red_Hat_Mono,
  Red_Hat_Text: Red_Hat_Text,
  Red_Rose: Red_Rose,
  Redacted: Redacted,
  Redacted_Script: Redacted_Script,
  Redressed: Redressed,
  Reem_Kufi: Reem_Kufi,
  Reem_Kufi_Fun: Reem_Kufi_Fun,
  Reem_Kufi_Ink: Reem_Kufi_Ink,
  Reenie_Beanie: Reenie_Beanie,
  Reggae_One: Reggae_One,
  Revalia: Revalia,
  Rhodium_Libre: Rhodium_Libre,
  Ribeye: Ribeye,
  Ribeye_Marrow: Ribeye_Marrow,
  Righteous: Righteous,
  Risque: Risque,
  Road_Rage: Road_Rage,
  Roboto: Roboto,
  Roboto_Condensed: Roboto_Condensed,
  Roboto_Flex: Roboto_Flex,
  Roboto_Mono: Roboto_Mono,
  Roboto_Serif: Roboto_Serif,
  Roboto_Slab: Roboto_Slab,
  Rochester: Rochester,
  Rock_Salt: Rock_Salt,
  RocknRoll_One: RocknRoll_One,
  Rokkitt: Rokkitt,
  Romanesco: Romanesco,
  Ropa_Sans: Ropa_Sans,
  Rosario: Rosario,
  Rosarivo: Rosarivo,
  Rouge_Script: Rouge_Script,
  Rowdies: Rowdies,
  Rozha_One: Rozha_One,
  Rubik: Rubik,
  Rubik_Beastly: Rubik_Beastly,
  Rubik_Bubbles: Rubik_Bubbles,
  Rubik_Burned: Rubik_Burned,
  Rubik_Dirt: Rubik_Dirt,
  Rubik_Distressed: Rubik_Distressed,
  Rubik_Glitch: Rubik_Glitch,
  Rubik_Iso: Rubik_Iso,
  Rubik_Marker_Hatch: Rubik_Marker_Hatch,
  Rubik_Maze: Rubik_Maze,
  Rubik_Microbe: Rubik_Microbe,
  Rubik_Mono_One: Rubik_Mono_One,
  Rubik_Moonrocks: Rubik_Moonrocks,
  Rubik_Puddles: Rubik_Puddles,
  Rubik_Wet_Paint: Rubik_Wet_Paint,
  Ruda: Ruda,
  Rufina: Rufina,
  Ruge_Boogie: Ruge_Boogie,
  Ruluko: Ruluko,
  Rum_Raisin: Rum_Raisin,
  Ruslan_Display: Ruslan_Display,
  Russo_One: Russo_One,
  Ruthie: Ruthie,
  Rye: Rye,
  STIX_Two_Text: STIX_Two_Text,
  Sacramento: Sacramento,
  Sahitya: Sahitya,
  Sail: Sail,
  Saira: Saira,
  Saira_Condensed: Saira_Condensed,
  Saira_Extra_Condensed: Saira_Extra_Condensed,
  Saira_Semi_Condensed: Saira_Semi_Condensed,
  Saira_Stencil_One: Saira_Stencil_One,
  Salsa: Salsa,
  Sanchez: Sanchez,
  Sancreek: Sancreek,
  Sansita: Sansita,
  Sansita_Swashed: Sansita_Swashed,
  Sarabun: Sarabun,
  Sarala: Sarala,
  Sarina: Sarina,
  Sarpanch: Sarpanch,
  Sassy_Frass: Sassy_Frass,
  Satisfy: Satisfy,
  Sawarabi_Gothic: Sawarabi_Gothic,
  Sawarabi_Mincho: Sawarabi_Mincho,
  Scada: Scada,
  Scheherazade_New: Scheherazade_New,
  Schoolbell: Schoolbell,
  Scope_One: Scope_One,
  Seaweed_Script: Seaweed_Script,
  Secular_One: Secular_One,
  Sedgwick_Ave: Sedgwick_Ave,
  Sedgwick_Ave_Display: Sedgwick_Ave_Display,
  Sen: Sen,
  Send_Flowers: Send_Flowers,
  Sevillana: Sevillana,
  Seymour_One: Seymour_One,
  Shadows_Into_Light: Shadows_Into_Light,
  Shadows_Into_Light_Two: Shadows_Into_Light_Two,
  Shalimar: Shalimar,
  Shanti: Shanti,
  Share: Share,
  Share_Tech: Share_Tech,
  Share_Tech_Mono: Share_Tech_Mono,
  Shippori_Antique: Shippori_Antique,
  Shippori_Antique_B1: Shippori_Antique_B1,
  Shippori_Mincho: Shippori_Mincho,
  Shippori_Mincho_B1: Shippori_Mincho_B1,
  Shizuru: Shizuru,
  Shojumaru: Shojumaru,
  Short_Stack: Short_Stack,
  Shrikhand: Shrikhand,
  Siemreap: Siemreap,
  Sigmar: Sigmar,
  Sigmar_One: Sigmar_One,
  Signika: Signika,
  Signika_Negative: Signika_Negative,
  Silkscreen: Silkscreen,
  Simonetta: Simonetta,
  Single_Day: Single_Day,
  Sintony: Sintony,
  Sirin_Stencil: Sirin_Stencil,
  Six_Caps: Six_Caps,
  Skranji: Skranji,
  Slabo_13px: Slabo_13px,
  Slabo_27px: Slabo_27px,
  Slackey: Slackey,
  Smokum: Smokum,
  Smooch: Smooch,
  Smooch_Sans: Smooch_Sans,
  Smythe: Smythe,
  Sniglet: Sniglet,
  Snippet: Snippet,
  Snowburst_One: Snowburst_One,
  Sofadi_One: Sofadi_One,
  Sofia: Sofia,
  Solway: Solway,
  Song_Myung: Song_Myung,
  Sonsie_One: Sonsie_One,
  Sora: Sora,
  Sorts_Mill_Goudy: Sorts_Mill_Goudy,
  Source_Code_Pro: Source_Code_Pro,
  Source_Sans_3: Source_Sans_3,
  Source_Serif_4: Source_Serif_4,
  Space_Grotesk: Space_Grotesk,
  Space_Mono: Space_Mono,
  Special_Elite: Special_Elite,
  Spectral: Spectral,
  Spectral_SC: Spectral_SC,
  Spicy_Rice: Spicy_Rice,
  Spinnaker: Spinnaker,
  Spirax: Spirax,
  Squada_One: Squada_One,
  Sree_Krushnadevaraya: Sree_Krushnadevaraya,
  Sriracha: Sriracha,
  Srisakdi: Srisakdi,
  Staatliches: Staatliches,
  Stalemate: Stalemate,
  Stalinist_One: Stalinist_One,
  Stardos_Stencil: Stardos_Stencil,
  Stick: Stick,
  Stick_No_Bills: Stick_No_Bills,
  Stint_Ultra_Condensed: Stint_Ultra_Condensed,
  Stint_Ultra_Expanded: Stint_Ultra_Expanded,
  Stoke: Stoke,
  Strait: Strait,
  Style_Script: Style_Script,
  Stylish: Stylish,
  Sue_Ellen_Francisco: Sue_Ellen_Francisco,
  Suez_One: Suez_One,
  Sulphur_Point: Sulphur_Point,
  Sumana: Sumana,
  Sunflower: Sunflower,
  Sunshiney: Sunshiney,
  Supermercado_One: Supermercado_One,
  Sura: Sura,
  Suranna: Suranna,
  Suravaram: Suravaram,
  Suwannaphum: Suwannaphum,
  Swanky_and_Moo_Moo: Swanky_and_Moo_Moo,
  Syncopate: Syncopate,
  Syne: Syne,
  Syne_Mono: Syne_Mono,
  Syne_Tactile: Syne_Tactile,
  Tai_Heritage_Pro: Tai_Heritage_Pro,
  Tajawal: Tajawal,
  Tangerine: Tangerine,
  Taprom: Taprom,
  Tauri: Tauri,
  Taviraj: Taviraj,
  Teko: Teko,
  Telex: Telex,
  Tenali_Ramakrishna: Tenali_Ramakrishna,
  Tenor_Sans: Tenor_Sans,
  Text_Me_One: Text_Me_One,
  Texturina: Texturina,
  Thasadith: Thasadith,
  The_Girl_Next_Door: The_Girl_Next_Door,
  The_Nautigal: The_Nautigal,
  Tienne: Tienne,
  Tillana: Tillana,
  Timmana: Timmana,
  Tinos: Tinos,
  Tiro_Bangla: Tiro_Bangla,
  Tiro_Devanagari_Hindi: Tiro_Devanagari_Hindi,
  Tiro_Devanagari_Marathi: Tiro_Devanagari_Marathi,
  Tiro_Devanagari_Sanskrit: Tiro_Devanagari_Sanskrit,
  Tiro_Gurmukhi: Tiro_Gurmukhi,
  Tiro_Kannada: Tiro_Kannada,
  Tiro_Tamil: Tiro_Tamil,
  Tiro_Telugu: Tiro_Telugu,
  Titan_One: Titan_One,
  Titillium_Web: Titillium_Web,
  Tomorrow: Tomorrow,
  Tourney: Tourney,
  Trade_Winds: Trade_Winds,
  Train_One: Train_One,
  Trirong: Trirong,
  Trispace: Trispace,
  Trocchi: Trocchi,
  Trochut: Trochut,
  Truculenta: Truculenta,
  Trykker: Trykker,
  Tulpen_One: Tulpen_One,
  Turret_Road: Turret_Road,
  Ubuntu: Ubuntu,
  Ubuntu_Condensed: Ubuntu_Condensed,
  Ubuntu_Mono: Ubuntu_Mono,
  Uchen: Uchen,
  Ultra: Ultra,
  Uncial_Antiqua: Uncial_Antiqua,
  Underdog: Underdog,
  Unica_One: Unica_One,
  UnifrakturCook: UnifrakturCook,
  UnifrakturMaguntia: UnifrakturMaguntia,
  Unkempt: Unkempt,
  Unlock: Unlock,
  Unna: Unna,
  Urbanist: Urbanist,
  VT323: VT323,
  Vampiro_One: Vampiro_One,
  Varela: Varela,
  Varela_Round: Varela_Round,
  Varta: Varta,
  Vast_Shadow: Vast_Shadow,
  Vazirmatn: Vazirmatn,
  Vesper_Libre: Vesper_Libre,
  Viaoda_Libre: Viaoda_Libre,
  Vibes: Vibes,
  Vibur: Vibur,
  Victor_Mono: Victor_Mono,
  Vidaloka: Vidaloka,
  Viga: Viga,
  Voces: Voces,
  Volkhov: Volkhov,
  Vollkorn: Vollkorn,
  Vollkorn_SC: Vollkorn_SC,
  Voltaire: Voltaire,
  Vujahday_Script: Vujahday_Script,
  Waiting_for_the_Sunrise: Waiting_for_the_Sunrise,
  Wallpoet: Wallpoet,
  Walter_Turncoat: Walter_Turncoat,
  Warnes: Warnes,
  Water_Brush: Water_Brush,
  Waterfall: Waterfall,
  Wellfleet: Wellfleet,
  Wendy_One: Wendy_One,
  Whisper: Whisper,
  WindSong: WindSong,
  Wire_One: Wire_One,
  Work_Sans: Work_Sans,
  Xanh_Mono: Xanh_Mono,
  Yaldevi: Yaldevi,
  Yanone_Kaffeesatz: Yanone_Kaffeesatz,
  Yantramanav: Yantramanav,
  Yatra_One: Yatra_One,
  Yellowtail: Yellowtail,
  Yeon_Sung: Yeon_Sung,
  Yeseva_One: Yeseva_One,
  Yesteryear: Yesteryear,
  Yomogi: Yomogi,
  Yrsa: Yrsa,
  Yuji_Boku: Yuji_Boku,
  Yuji_Mai: Yuji_Mai,
  Yuji_Syuku: Yuji_Syuku,
  Yusei_Magic: Yusei_Magic,
  ZCOOL_KuaiLe: ZCOOL_KuaiLe,
  ZCOOL_QingKe_HuangYou: ZCOOL_QingKe_HuangYou,
  ZCOOL_XiaoWei: ZCOOL_XiaoWei,
  Zen_Antique: Zen_Antique,
  Zen_Antique_Soft: Zen_Antique_Soft,
  Zen_Dots: Zen_Dots,
  Zen_Kaku_Gothic_Antique: Zen_Kaku_Gothic_Antique,
  Zen_Kaku_Gothic_New: Zen_Kaku_Gothic_New,
  Zen_Kurenaido: Zen_Kurenaido,
  Zen_Loop: Zen_Loop,
  Zen_Maru_Gothic: Zen_Maru_Gothic,
  Zen_Old_Mincho: Zen_Old_Mincho,
  Zen_Tokyo_Zoo: Zen_Tokyo_Zoo,
  Zeyada: Zeyada,
  Zhi_Mang_Xing: Zhi_Mang_Xing,
  Zilla_Slab: Zilla_Slab,
  Zilla_Slab_Highlight: Zilla_Slab_Highlight,
  Poetsen_One: Poetsen_One,
  Rock_3D: Rock_3D,
  Rubik_80s_Fade: Rubik_80s_Fade,
  Rubik_Broken_Fax: Rubik_Broken_Fax,
  Rubik_Doodle_Shadow: Rubik_Doodle_Shadow,
  Rubik_Doodle_Triangles: Rubik_Doodle_Triangles,
  Rubik_Gemstones: Rubik_Gemstones,
  Rubik_Glitch_Pop: Rubik_Glitch_Pop,
  Rubik_Lines: Rubik_Lines,
  Rubik_Maps: Rubik_Maps,
  Rubik_Pixels: Rubik_Pixels,
  Rubik_Spray_Paint: Rubik_Spray_Paint,
  Rubik_Storm: Rubik_Storm,
  Rubik_Vinyl: Rubik_Vinyl,
};

export function useDynamicFont() {
  const colors = useProductSelectors();
  const selectedFont = colors.fontFamily as FontFamilies;
  return fonts[selectedFont] || fonts["Inter"];
}
