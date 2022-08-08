const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const coaches = {

    'afc bournemouth': {
        'name': 'scott Matthew',
        'date of birth': '13 October 1980',
        'place of origin': 'England',
        'place of birth': 'Lambeth, England',
        'image': 'https://sm.imgix.net/21/36/scott-parker.jpg?w=640&h=480&auto=compress,format&fit=clip'
    },
    'arsenal fc': {
        'name': 'Mikel Arteta',
        'date of birth': '26 march 1982',
        'place of origin': 'Spain',
        'place of birth': 'San sebatian, Spain',
        'image': 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta0225ccfd859a8df/60db780676a3de39ad15268e/244d5606bea6992f661b5b45a8e75796ca7a2ae2.jpg'
    },
    'aston villa fc': {
        'name': 'Steven Gerrard',
        'date of birth': '30 May 1980',
        'place of origin': 'England',
        'place of birth': 'Whiston, Merseyside,England',
        'image': 'https://www.coachesvoice.com/wp-content/uploads/2021/11/GerrardMobile.jpg'
    },
    'brentford fc':{
        'name': 'Thomas Frank',
        'date of birth': '9 October 1973',
        'place of origin': 'Denmark',
        'place of birth': 'Frederiksvaerk,Denmark',
        'image': 'https://static.standard.co.uk/2022/01/19/22/newFile-2.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart'
    },
    'brighton & hove albion fc':{
        'name': 'Graham Potter',
        'date of birth': '20 May 1975',
        'place of origin': 'England',
        'place of birth': 'solihull, England',
        'image': 'https://blue.kumparan.com/image/upload/c_fill,f_jpg,h_1200,q_auto,w_1200/g_south,l_og_kumparan_zscykb/co_rgb:ffffff,g_south_west,l_text:Heebo_20_bold:Konten%20Redaksi%20kumparan%0DkumparanBOLA,x_140,y_26/blfc7sq7ralpv1zzmfo7.jpg'
    },
    'chelsea fc': {
        'name': 'Thomas Tuchel',
        'date of birth': '29 August 1973',
        'place of origin': 'German',
        'place of birth': 'Krumbach, West Germany',
        'image': 'https://e0.365dm.com/21/05/2048x1152/skysports-thomas-tuchel-chelsea_5400225.jpg'
    },
    'crystal palace fc': {
        'name': 'Patrick Viera',
        'date of birth': '23 June 1976',
        'place of origin': 'France',
        'place of birth': 'Dakar, Senegal',
        'image': 'https://media.gettyimages.com/photos/palace-manager-patrick-vieira-celebrates-their-2nd-goal-during-the-picture-id1235968970?k=20&m=1235968970&s=612x612&w=0&h=l_ffYbPK_1llwtp3L5HbS7p2cHg0Pd_YKPl8bPIQA-Q='
    },
    'everton fc': {
        'name': 'Frank Lampard',
        'date of birth': '20 June 1978',
        'place of origin': 'England',
        'place of birth': 'Romford, England',
        'image': 'https://media.gettyimages.com/photos/frank-lampard-manager-of-chelsea-celebrates-following-the-premier-picture-id1289618861?s=2048x2048'
    },
    'fulham fc': {
        'name': 'Marco Alexandre Saraiva da silva',
        'date of birth': '12 July 1977',
        'place of origin': 'Portugal',
        'place of birth': 'Lisbon, Portugal',
        'image': 'https://www.playmakerstats.com/img/noticias/410/imgS300I349410T20220119175338.jpg'
    },
    'leeds united': {
        'name': 'Jesse Alan Marsch',
        'date of birth': 'November 8 1973',
        'place of origin': 'USA',
        'place of birth': 'Racine, Wisconsin, U.S',
        'image': 'https://static.independent.co.uk/2022/03/19/00/de8cc137ff3acfe2d854ae3e8ad57dd9Y29udGVudHNlYXJjaGFwaSwxNjQ3NzM0OTkz-2.65926183.jpg?quality=75&width=982&height=726&auto=webp'
    },
    'leicester fc':{
        'name': 'Brendan Rogers',
        'date of birth': '26 January 1973',
        'place of origin': 'Northern Ireland',
        'place of birth': 'Carnlough, Northern Ireland',
        'image': 'https://media.gettyimages.com/photos/leicester-manager-brendan-rodgers-smiles-during-the-premier-league-picture-id1187106117?s=2048x2048'
    },
    'liverpool fc':{
        'name': 'Jurgen klopp',
        'date of birth': '16 June 1967',
        'place of origin': 'Germany',
        'place of birth': 'Stuggart, West Germany',
        'image': 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1493x383:1495x381)/origin-imgresizer.eurosport.com/2022/05/22/3377901-69038288-2560-1440.jpg'
    },
    'manchester city fc':{
        'name': 'Josep Guardiola Sala',
        'date of birth': '18 January 1971',
        'place of origin': 'Spain',
        'place of birth': 'Santpedor, Spain',
        'image': 'https://airnewsonline.com/wp-content/uploads/Josep-Guardiola-Sala.jpg'
    },
    'manchester united':{
        'name': 'Eric Ten Hag',
        'date of birth': '2 Febuary 1970',
        'place of origin': 'Netherlands',
        'place of birth': 'Haaksbergen, Netherlands',
        'image': 'https://sm.imgix.net/22/28/erik-ten-hag.JPG?w=640&h=480&auto=compress,format&fit=clip'
    },
    'newcastle united':{
        'name': 'Edward John Frank Howe',
        'date of birth': '29 November !977',
        'place of origin': 'England',
        'place of birth': 'Amersham, England',
        'image': 'https://i2-prod.mirror.co.uk/incoming/article13213429.ece/ALTERNATES/s1200c/0_Carabao-Cup-Second-Round-AFC-Bournemouth-v-Milton-Keynes-Dons.jpg'
    },
    'nottingham forest fc':{
        'name': 'Steve cooper',
        'date of birth': '10 December 1979',
        'place of origin': 'Wales',
        'place of birth': 'Pontypridd, Wales',
        'image': 'https://talksport.com/wp-content/uploads/sites/5/2022/05/NINTCHDBPICT000736316080.jpg?strip=all&quality=100&w=1920&h=1080&crop=1'
    },
    'southampton fc':{
        'name': 'Ralph Hasenhuttl',
        'date of birth': '9 August 1967',
        'place of origin': 'Austria',
        'place of birth': 'Graz Austria',
        'image':'https://i2-prod.irishmirror.ie/incoming/article23120992.ece/ALTERNATES/s1200c/1_Ralph-Hasenhuttl-File-Photo.jpg'
    },
    'tottenham hotspur fc':{
        'name': 'Antonio Conte',
        'date of birth': '31 July 1969',
        'place of origin': 'Italy',
        'place of birth': 'Lecce, Italy',
        'image': 'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fthetopflight.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1240371612-850x560.jpeg'
    },
    'west ham fc':{
        'name': 'David William Moyes',
        'date of birth': '25 April 1963',
        'place of origin': 'Scottland',
        'place of birth': 'Glasgow, Scotland',
        'image' : 'https://i2-prod.football.london/west-ham-united-fc/article21956613.ece/ALTERNATES/s615/1_GettyImages-1236098079.jpg'
    },
    'wolverhampton united':{
        'name': 'Bruno lage',
        'date of birth': '12 May 1976',
        'place of origin': 'Portugal',
        'place of birth': 'Setubal, Portugal',
        'image': 'https://media.gettyimages.com/photos/bruno-lage-manager-of-wolverhampton-wanderers-reacts-during-the-picture-id1354455488?s=612x612'
    },
    'almeria fc':{
        'name': 'Joan Francesc Ferrer Sicilia',
        'date of birth': '1 January 1970',
        'place of origin': 'Spain',
        'place of birth': 'Vilassar de Mar, Spain',
        'image': 'https://media.gettyimages.com/photos/head-coach-joan-francesc-ferrer-sicilia-rubi-of-real-sporting-de-picture-id642608496?s=612x612'
    },
    'athletic bilbao fc':{
        'name': 'Ernesto Valverde Tejedor',
        'date of birth': '9 Febuary 1964',
        'place of origin': 'Spain',
        'place of birth': 'Viandar De La Vera',
        'image': 'https://d3lbfr570u7hdr.cloudfront.net/stadiumastro/media/perform-article/2022/jun/30/valverde_dkhc7666luf01x0vd2044b3of.jpg'
    },
    'atletico de madrid fc':{
        'name': 'Diego Pablo Simeone Gonzalez',
        'date of birth': '28 April 1970',
        'place of origin': 'Argentina',
        'place of birth': 'Buenos Aires, Argentina',
        'image': 'https://www.tuttogossipnews.it/wp-content/uploads/2022/05/FSgciRrXIAAmNOO.jpg'
    },
    'fc barcelona':{
        'name': 'Xavier Hernandez Creus',
        'date of birth': '25 January 1980',
        'place of origin': 'Spain',
        'place of birth': 'Terrassa, Spain',
        'image': 'https://megasportsmedia.com/wp-content/uploads/2022/03/1200-L-bara-xavi-refuse-le-statut-de-favori-en-c3-et-senflamme-pour-le-gnie-frenkie-de-jong.jpg'
    },
    'real betis fc':{
        'name': 'Manuel Luis Pellegrini Ripamonti',
        'date of birth': '16 September 1953',
        'place of origin': 'Chile',
        'place of birth': 'Santiago, Chile',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/9/95/Manuel_Pellegrini.png'
    },
    'cadiz cf':{
        'name': 'Segio Gonzalez Soriano',
        'date of birth': '10 November 1976',
        'place of origin': 'Spain',
        'place of birth': 'L"Hospitalet, Spain',
        'image': 'https://c8.alamy.com/comp/2AFDFBA/madrid-spain-15th-dec-2019-sergio-gonzalez-soriano-during-match-getafe-versus-real-valladolid-at-alfonso-perez-coliseum-sunday-15-december-2019-credit-cordon-pressalamy-live-news-2AFDFBA.jpg'
    },
    'celta de vigo':{
        'name': 'Eduardo German Coudet',
        'date of birth': '12 September 1974',
        'place of origin': 'Argentina',
        'place of birth': 'Buenos Aires, Argentina',
        'image': 'https://www.eluniverso.com/resizer/f01sFl85E0fhFmeEX93d1keqigc=/946x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/GMX37GQTWRAAPBJR4RAIN5Y6M4.jpg'
    },
    'elche fc':{
        'name': 'Francisco Javier Rodrigues Vilchez',
        'date of birth': '17 June 1978',
        'place of origin': 'Spain',
        'place of birth': 'Almeria, Spain',
        'image': 'https://imgresizer.eurosport.com/unsafe/1200x1200/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2014/12/09/1368247-29358885-2560-1440.jpg'
    },
    'espanyol':{
        'name': 'Diego Martinez Penas',
        'date of birth': '16 December 1980',
        'place of origin': 'Spain',
        'place of birth': 'Vigo, Spain',
        'image': 'https://static3.ideal.es/granadacf/multimedia/201901/04/media/cortadas/entrenador-gracf-PEPE-kQiH-U70151877979ABC-624x385@Ideal.jpg'
    },
    'getafe cf':{
        'name': 'Enrique Sanchez Flores',
        'date of birth': '5 Febuary 1965',
        'place of origin': 'Spain',
        'place of birth': 'Madrid, Spain',
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5cJT8zibP2zI_yvRBor3h22EQ-TGZkj3gSXGOFx9B3mUBJ5qsKTGwFbQbsKsOlKd-P0&usqp=CAU'
    },
    'girona fc':{
        'name': 'Delfi Geli Roura',
        'date of birth': '22 April 1969',
        'place of origin': 'Spain',
        'place of birth': 'Salt, Spain',
        'image': 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/10/27/15090938291905.jpg'
    },
    'mallorca':{
        'name': 'Javier Aguirre Onaindia',
        'date of birth': '1 December 1958',
        'place of origin': 'Mexico',
        'place of birth': 'Mexico City, Mexico',
        'image': 'https://64.media.tumblr.com/3c3ec4ce7d0ff0d72ada1bc7de229395/138e837e79f7a3d1-ea/s400x600/c74fd6e50dedce009e3e48cbbdfa5c2189266b04.jpg'
    },
    'osasuna':{
        'name': 'Jagoba Arrasate Elustondo',
        'date of birth': '22 April 1978',
        'place of origin': 'Spain',
        'place of birth': 'Barriatua, Spain',
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnW7d9tP8W9EPrVSkkdfUZGXRoy6R3IaT98w&usqp=CAU'
    },
    'real sociedad':{
        'name': 'Imanol Alguacil Barrenetxea',
        'date of birth': '4 July 1971',
        'place of origin': 'Spain',
        'place of birth': 'Orio, Spain',
        'image': 'https://www.mundodeportivo.com/files/article_main_microformat/uploads/2021/04/01/60e75cde57da1.jpeg'
    },
    'rayo vallecano':{
        'name': 'Andoni Iraola Sagarna',
        'date of birth': '22 June 1982',
        'place of origin': 'Spain',
        'place of birth': 'Usurbil, Spain',
        'image': 'https://media.gettyimages.com/photos/head-coach-andoni-iraola-sagarna-of-rayo-vallecano-is-seen-during-the-picture-id1238334600?s=2048x2048'
    },
    'real madrid':{
        'name': 'Carlo Ancelotti',
        'date of birth': '10 June 1959',
        'place of origin': 'Italy',
        'place of birth': 'Reggiolo, Italy',
        'image':'https://carloancelotti.it/wp-content/uploads/45331275-E0E9-4AC3-BF38-C6C2D435E76E.jpg'
    },
    'real villadolid':{
        'name': 'Jose Rojo Martin',
        'date of birth': '23 March 1968',
        'place of origin': 'Spain',
        'place of birth': 'Salas de los infantes, Spain',
        'image': 'https://media.gettyimages.com/photos/head-coach-jose-rojo-martin-pacheta-of-real-valladolid-react-during-picture-id1360242368?s=612x612'
    },
    'sevilla':{
        'name': 'Julen Lopetegui Agote',
        'date of birth': '28 August 1966',
        'place of origin': 'Spain',
        'place of birth': 'Asteasu, Spain',
        'image': 'https://cdn.sportmob.com/resource/news/20210629_970636/item_0_281.jpg?cache=1625027742&d=600_338'
    },
    'valencia':{
        'name': 'Gennaro Ivan Gattuso',
        'date of birth': '9 January 1978',
        'place of origin': 'Italy',
        'place of birth': 'Corigliano Calabro, Italy',
        'image': 'https://the18.com/sites/default/files/styles/featured_mobile__621x709_/public/feature-images/20180226-The18-Image-Huw-Main.jpg?itok=SwlvYfAX'
    },
    'villareal':{
        'name': 'Unai Emery etxegoien',
        'date of birth': '3 November 1971',
        'place of origin': 'Spain',
        'place of birth': 'Hondarribia, Spain',
        'image': 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(webp):focal(1350x433:1352x431)/origin-imgresizer.eurosport.com/2021/11/02/3247133-66459928-2560-1440.jpg'
    },
    'eintracht frankfurt':{
        'name': 'Oliver Glasner',
        'date of birth': '28 August 1974',
        'place of origin': 'Austria',
        'place of birth': 'Salzburg, Austria',
        'image': 'https://cdn.whufc.com/sites/default/files/2022-05/oliver_glasner.jpg'
    },
    'schalke 04':{
        'name': 'Frank Kramer',
        'date of birth': '3 May 1972',
        'place of origin': 'Germany',
        'place of birth': 'Memmingen, West Germany',
        'image': 'https://www.premierseason.com/wp-content/uploads/2022/06/Frank-Kramer-becomes-the-new-head-coach.jpg'
    },
    'wolsburg':{
        'name': 'Niko Kovac',
        'date of birth': '15 October 1971',
        'place of origin': 'Croatia',
        'place of birth': 'Berling-Wedding, West Germany',
        'image': 'https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/fc-bayern-muenchen-v-tsg-1899-hoffenheim-bundesliga-5b808b5b2256cf0c9e000001.jpg'
    },
    'hertha berlin':{
        'name': 'Sandro Schwarz',
        'date of birth': '17 October 1978',
        'place of origin': 'Germany',
        'place of birth': 'Mainz, West Germany',
        'image': 'https://amp.spox.com/de/sport/fussball/international/2010/Bilder/sandro-schwarz-1200.jpg'
    },
    'borrussia mochengladbach':{
        'name': 'Daniel Farke',
        'date of birth': '30 October 1976',
        'place of origin': 'Germany',
        'place of birth': 'Steinhausen, West Germany',
        'image': 'https://phantom-marca.unidadeditorial.es/16aeedafce5c67714858db542046c9a2/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/02/16462318060010.jpg'
    },
    'bayern leverkusen':{
        'name': 'Gerardo Seoane',
        'date of birth': '30 October 1978',
        'place of origin': 'Switzerland',
        'place of birth': 'Luzern, Switzerland',
        'image': 'https://static.footballtransfers.com/images/cn/image/upload/q_75,w_1200,h_929,ar_75.58/footballcritic/li0mtuafngken8pzpq6y'
    },
    'freiburg':{
        'name': 'Christian Streich',
        'date of birth': '11 June 1965',
        'place of origin': 'Germany',
        'place of birth': 'Weil am Rhein, West Germany',
        'image': 'https://www.swr.de/sport/fussball/sc-freiburg/1653606161344,christian-streich-im-swr-interview-100~_v-16x9@2dXL_-77ed5d09bafd4e3cf6a5a0264e5e16ea35f14925.png'
    },
    'cologne':{
        'name': 'Steffen Baumgart',
        'date of birth': '5 July 1972',
        'place of origin': 'Germany',
        'place of birth': 'Rostock, East Germany',
        'image': 'https://www.getfootballnewsgermany.com/assets/1-fc-koln-v-rb-leipzig-bundesliga-scaled.jpg'
    },
    'vfl bochum':{
        'name': 'Thomas Reis',
        'date of birth': '4 October 1973',
        'place of origin': 'Germany',
        'place of birth': 'Wertheim am Main, West Germany',
        'image': 'https://i.goalzz.com/?i=afp%2F20220212%2F20220212-afp_9zv66r_afp.jpg'
    },
    'werder bremen':{
        'name': 'Ole Werner',
        'date of birth': '4 May 1988',
        'place of origin': 'Germany',
        'place of birth': 'Preetz, West Germany',
        'image': 'https://www.sueddeutsche.de/image/sz.1.5517596/704x396?v=1643442030'
    },
    'union berlin':{
        'name': 'Urs Fischer',
        'date of birth': '20 Febuary 1966',
        'place of origin': 'Switzerland',
        'place of birth': 'Triengen, Switzerland',
        'image': 'https://media.gettyimages.com/photos/urs-fischer-head-coach-of-1fc-union-berlin-looks-on-prior-to-the-dfb-picture-id1375124326?s=612x612'
    },
    'stuggart':{
        'name': 'Pellegrino Matarazo',
        'date of birth': '28 November 1977',
        'place of origin': 'United States',
        'place of birth': 'Wayne, New Jersey, United States',
        'image': 'https://www.merkur.de/bilder/2020/06/07/90002931/5184688-vfb-stuttgart-trainer-pellegrino-matarazzo-vertragsverlaengerung-1ObQZow1ZTef.jpg'
    },
    'borrussia dortmund':{
        'name': 'Edin Terzic',
        'date of birth': '30 October 1982',
        'place of origin': 'Germany-Croatia',
        'place of birth': 'Mendes, West Germany',
        'image': 'https://static.dw.com/image/55953532_303.jpg'
    },
    'bayern munich':{
        'name': 'Julian Nagelsmann',
        'date of birth': '23 July 1987',
        'place of origin': 'Germany',
        'place of birth': 'Landsberg am Lech, West Germany',
        'image': 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7f945b004285dff8/6255f77037d18949c24a60de/Julian_Nagelsmann_Bayern_Munich_Villarreal.jpg'
    },
    'hoffenheim':{
        'name': 'Andre Breitenreiter',
        'date of birth': '2 October 1973',
        'place of origin': 'Germany',
        'place of birth': 'Langenhagen, West Germany',
        'image': 'https://images.t-online.de/2022/06/92232262v2/50x0:540x360/fit-in/__WIDTH__x0/trainer-andre-breitenreiter-ist-bei-der-tsg-1899-hoffenheim-im-gespraech.jpg'
    },
    'rb leipzig':{
        'name': 'Domenico Tedesco',
        'date of birth': '12 September 1985',
        'place of origin': 'Italy-Germany',
        'place of birth': 'Rossano, Italy',
        'image': 'https://i.dailymail.co.uk/1s/2021/12/09/11/51541577-0-image-a-69_1639048627396.jpg'
    },
    'mainz':{
        'name': 'Bo Svenson',
        'date of birth': '4 August 1979',
        'place of origin': 'Denmark',
        'place of birth': 'Skorping, Denmark',
        'image': 'https://cdn.vox-cdn.com/thumbor/mn5mmFeOQ7Z83Y_yVPcrGCWjMBE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22467901/1313689049.jpg'
    },
    'ausburg':{
        'name': 'Enrico Maarben',
        'date of birth': 'null',
        'place of origin': 'null',
        'place of birth': 'null',
        'image': 'https://www.premierseason.com/wp-content/uploads/2022/06/U23-coach-Enrico-Maasen-is-obviously-the-favorite-to-succeed.jpg'
    },
    'atalanta':{
        'name': 'Gian Piero Gasperini',
        'date of birth': '26 January 1958',
        'place of origin': 'Italy',
        'place of birth': 'Grugliasco, Italy',
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUt9991Uzlb_ZroYbkoGsf0xGlAVNuc3ck5Do49EqB1X74eE9QDrpFRrnkACAoKJ0asic&usqp=CAU'
    },
    'bologna':{
        'name': 'Sinisa Mihajlovic',
        'date of birth': '20 Febuary',
        'place of origin': 'Serbia',
        'place of birth': 'Vukovar, SR Croatia, Yugoslavia',
        'image': 'https://image.shutterstock.com/z/stock-photo-milan-italy-september-sinisa-mihajlovic-head-coach-of-bologna-fc-looks-on-during-2045430674.jpg'
    },
    'cremonese':{
        'name': 'Massimiliano Alvini',
        'date of birth': '20 April 1970',
        'place of origin': 'Italy',
        'place of birth': 'Fucecchio, Italy',
        'image': 'https://i0.wp.com/cultofcalcio.com/wp-content/uploads/2022/06/alvini4.webp?resize=900%2C400&ssl=1'
    },
    'empoli':{
        'name': 'Paolo Zanetti',
        'date of birth': '16 December 1982',
        'place of origin': 'Italy',
        'place of birth': 'Valdagno, Italy',
        'image': 'https://blogger.googleusercontent.com/img/a/AVvXsEgvJoLw10v6yGEdFu_TmB1yOjYoJ12buhw63lkV8hMadU3S61o3LIy0NX4kugcW6klbK0y5ftiXb_AvAxHqf46uRl60aa3BIZIBaT3Rw856IVSYuuQhGRLtIAIPJteXZZTCTd9QSMN7VpWBWe9SDF-N_0tMBJPzzcLHwQJBnjRdhBd1sF0aUds2CBZG=s16000'
    },
    'fiorentina':{
        'name': 'Vincenzo Italiano',
        'date of birth': '10 December 1977',
        'place of origin': 'Italy',
        'place of birth': 'Karlsruhe, West Germany',
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAro7v3vLGveTOj0yrKa9Uf3zGtZEOcNHLKtkmX_bcZ6U0DeEdcOZ16T4_o7zRILj4Szw&usqp=CAU'
    },
    'inter milan':{
        'name': 'Simone Inzaghi',
        'date of birth': '5 April 1976',
        'place of origin': 'Italy',
        'place of birth': 'Piacenza, Italy',
        'image': 'https://pict.sindonews.net/dyn/850/pena/news/2022/06/07/11/791557/inter-milan-gagal-scudetto-simone-inzaghi-tetap-dapat-kontrak-baru-uuq.jpeg'
    },
    'juventus':{
        'name': 'Massimiliano Allegri',
        'date of birth': '11 August 1967',
        'place of origin': 'Italy',
        'place of birth': 'Livorno, Italy',
        'image': 'https://media.gettyimages.com/photos/massimiliano-allegri-juventus-coach-reacts-during-the-serie-a-match-picture-id1356442615?s=2048x2048'
    },
    'lazio':{
        'name': 'Maurizio Sarri',
        'date of birth': '10 January 1959',
        'place of origin': 'Italy',
        'place of birth': 'Naples, Italy',
        'image': 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta51f01d9f21f23ea/60dd4c1690ef0d39a203ce82/0c867ad5fbb4fb39a5f47d0adc0625e701830b6f.jpg'
    },
    'lecce':{
        'name': 'Marco Baroni',
        'date of birth': '11 September 1963',
        'place of origin': 'Italy',
        'place of birth': 'Florence, Italy',
        'image': 'https://media.gettyimages.com/photos/marco-baroni-manager-of-frosinone-calcio-looks-on-during-the-serie-a-picture-id1131216722?s=2048x2048'
    },
    'ac milan':{
        'name': 'Stefano Pioli',
        'date of birth': '20 October 1965',
        'place of origin': 'Italy',
        'place of birth': 'Parma, Italy',
        'image': 'https://e0.365dm.com/20/11/2048x1152/skysports-stefano-pioli-ac-milan_5171901.jpg'
    },
    'monza':{
        'name': 'Giovanni Stroppa',
        'date of birth': '24 January 1968',
        'place of origin': 'Italy',
        'place of birth': 'Mulazzano, Italy',
        'image': 'https://media.gettyimages.com/photos/giovanni-stroppa-head-coach-of-ac-monza-reacts-during-the-serie-b-picture-id1236843543?s=612x612'
    },
    'napoli':{
        'name': 'Luciano Spalletti',
        'date of birth': '7 March 1959',
        'place of origin': 'Italy',
        'place of birth': 'Certaldo, Italy',
        'image': 'https://media.gettyimages.com/photos/luciano-spalletti-head-coach-of-napoli-in-action-during-the-serie-a-picture-id1234943054?s=612x612'
    },
    'roma':{
        'name': 'Jose Mario dos Santos Mourinho Felix',
        'date of birth': '26 January 1963',
        'place of origin': 'Portugal',
        'place of birth': 'Setubal, Portugal',
        'image': 'https://media.gettyimages.com/photos/jos-mrio-dos-santos-mourinho-flix-head-coach-of-as-roma-reacts-during-picture-id1363844425?s=594x594'
    },
    'salernitana':{
        'name': 'Davide Nicola',
        'date of birth': '5 March 1973',
        'place of origin': 'Italy',
        'place of birth': 'Luserna San Giovanni, Italy',
        'image': 'https://thumbs.dreamstime.com/b/davide-nicola-torino-italy-th-january-coppa-italia-fc-vs-genoa-cfc-head-coach-186239713.jpg'
    },
    'sampdoria':{
        'name': 'Marco Giampaolo',
        'date of birth': '2 August 1967',
        'place of origin': 'Italy',
        'place of birth': 'Bellinzona, Switzerland',
        'image': 'https://cdn.forzaitalianfootball.com/wp-content/uploads/2019/06/Marco-Giampaolo-Sampdoria.jpg'
    },
    'sassuolo':{
        'name': 'Alessio Dionisi',
        'date of birth': '1 April 1980',
        'place of origin': 'Italy',
        'place of birth': 'Abbadia San Salvatore, Italy',
        'image': 'https://www.getfootballnewsitaly.com/assets/us-sassuolo-v-uc-sampdoria-serie-a-1-scaled.jpg'
    },
    'spezia':{
        'name': 'Thiago Motta',
        'date of birth': '28 August 1982',
        'place of origin': 'Italy',
        'place of birth': 'Sao Bernardo do Campo, Brazil',
        'image': 'https://media.gettyimages.com/photos/thiago-motta-coach-of-spezia-reacts-during-the-serie-a-match-between-picture-id1236054960?s=612x612'
    },
    'torino':{
        'name': 'Ivan Juric',
        'date of birth': '25 August 1975',
        'place of origin': 'Croatia',
        'place of birth': 'Split, SR Croatia, Yugoslavia',
        'image': 'https://m.vecernji.hr/media/img/9a/b0/c8e729316dd403f1dd77.jpeg'
    },
    'udinese':{
        'name': 'Andrea Sottil',
        'date of birth': '4 January 1974',
        'place of origin': 'Italy',
        'place of birth': 'Venaria Reale, Italy',
        'image': 'https://media.gettyimages.com/photos/udineses-head-coach-andrea-sottil-portrait-during-the-friendly-match-picture-id1242198873?s=594x594'
    },
    'verona':{
        'name': 'Gabriele Cioffi',
        'date of birth': '7 September 1975',
        'place of origin': 'Italy',
        'place of birth': 'Florence, Italy',
        'image': 'https://i.guim.co.uk/img/media/5d948fc4267efb416c195685ff3cdf9dd15e31a3/87_0_3123_1874/master/3123.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=3a84c414d8f774d5d64644ccd101e89a'
    },
    'ajaccio':{
        'name': 'Olivier Pantaloni',
        'date of birth': '13 December 1966',
        'place of origin': 'France',
        'place of birth': 'Bastia, France',
        'image': 'https://d2p1ubzgqn8tkf.cloudfront.net/article/769513/lg_1f501725875e5f3601725875e7b601v_.jpg'
    },
    'angers':{
        'name': 'Gerald Edmond Louis Baticle',
        'date of birth': '10 September 1969',
        'place of origin': 'France',
        'place of birth': 'Amiens, France',
        'image': 'https://sm.imgix.net/21/41/gerald-baticle.jpg?w=640&h=480&auto=compress,format&fit=clip'
    },
    'auxerre':{
        'name': 'Jean-Marc Furlan',
        'date of birth': '20 November 1957',
        'place of origin': 'France',
        'place of birth': 'Sainte-Foy-la-Grande, France',
        'image': 'https://www.lequipe.fr/_medias/img-photo-jpg/jean-marc-furlan-est-arrive-a-l-aja-en-2019-s-mantey-l-equipe/1500000001619852/214:19,1689:1494-828-828-75/2111e'
    },
    'brest':{
        'name': 'Micheal Der Zakarian',
        'date of birth': '18 Febuary 1963',
        'place of origin': 'Armenia',
        'place of birth': 'Yerevan, Armenian SSR, soviet Union',
        'image': 'https://www.playmakerstats.com/img/treinadores/824/809824_med__20210808194127_michel_der_zakarian.jpg'
    },
    'clermont foot':{
        'name': 'Pascal Gastien',
        'date of birth': '2 December 1963',
        'place of origin': 'France',
        'place of birth': 'Rochefort, France',
        'image': 'https://s.hs-data.com/bilder/spieler/gross/71461.jpg'
    },
    'lens':{
        'name': 'Frank Haise',
        'date of birth': '15 April 1971',
        'place of origin': 'France',
        'place of birth': 'Mont-Saint-Aignan, France',
        'image': 'https://france3-regions.francetvinfo.fr/image/EWKe5iUN5xJGfEer9_vDMaXf55I/600x400/regions/2020/07/03/5eff3a1d207c7_img_0891-4912184.jpg'
    },
    'losc lille':{
        'name': 'Paulo Alexandre Rodrigues Fonseca',
        'date of birth': '5 March 1973',
        'place of origin': 'Portugal',
        'place of birth': 'Nampula, Mozambique',
        'image': 'https://asroma2-cloudinary.corebine.com/asroma2-production/image/upload/c_fill,dpr_1.0,f_jpg,h_565,w_1080/v1/asroma2-prod/DSC_9710_01_DSC_9639_t4lzpv'
    },
    'lorient':{
        'name': 'Christophe Pelissier',
        'date of birth': '5 October 1965',
        'place of origin': 'France',
        'place of birth': 'Revel, France',
        'image': 'https://media.gettyimages.com/photos/amiens-heaf-coach-christophe-pelissier-reacts-at-the-end-of-the-l1-picture-id952475312?s=612x612'
    },
    'lyon':{
        'name': 'Peter Sylvester Bosz',
        'date of birth': '21 November 1963',
        'place of origin': 'Netherlands',
        'place of birth': 'Apeldoorn, Netherlands',
        'image': 'https://static.dw.com/image/39124361_101.jpg'
    },
    'marseille':{
        'name': 'Igor Tudor',
        'date of birth': '16 April 1978',
        'place of origin': 'Croatia',
        'place of birth': 'Split, SR Croatia, Yugoslavia',
        'image': 'https://media.gettyimages.com/photos/head-coach-of-hellas-verona-igor-tudor-gestures-during-the-serie-a-picture-id1393193757?s=612x612'
    },
    'monaco':{
        'name': 'Philippe Clement',
        'date of birth': '22 March 1974',
        'place of origin': 'Belgium',
        'place of birth': 'Antwep, Belgium',
        'image': 'https://i2-prod.examinerlive.co.uk/incoming/article20558167.ece/ALTERNATES/s615/0_Clement.jpg'
    },
    'montpellier':{
        'name': `Olivier Dall'Oglio`,
        'date of birth': '16 April 1964',
        'place of origin': 'France',
        'place of birth': 'Ales, France',
        'image': 'https://www.getfootballnewsfrance.com/assets/46293012-scaled.jpg'
    },
    'nantes':{
        'name': 'Antoine Krilone Kombouare',
        'date of birth': '16 November 1963',
        'place of origin': 'France',
        'place of birth': 'Noumea, New Caledonia',
        'image': 'https://i0.wp.com/foot11.com/wp-content/uploads/2022/05/Icon_BAP_070522_93_138.jpg?resize=1200%2C675&ssl=1'
    },
    'nice':{
        'name': 'Lucien Favre',
        'date of birth': '2 November 1957',
        'place of origin': 'Switzerland',
        'place of birth': 'Saint-Barthelemy, Switzerland',
        'image':'https://www.footballdatabase.eu/images/photos/players/2017-2018/a_20/20021.jpg'
    },
    'psg':{
        'name': 'Christophe Galtier',
        'date of birth': '26 August 1966',
        'place of origin': 'France',
        'place of birth': 'Marseille, France',
        'image': 'https://dafanews.com/wp-content/uploads/2021/05/Christophe-Galtier-Lille-min.jpg'
    },
    'reims':{
        'name': 'Oscar Garcia',
        'date of birth': '26 April 1973',
        'place of origin': 'Spain',
        'place of birth': 'Sabadell, Spain',
        'image': 'https://cdn.vox-cdn.com/thumbor/NnWUI9zVpjNRnm7jrQv7yTxi5UQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22875745/1280870228.jpg'
    },
    'rennes':{
        'name': 'Bruno Genesio',
        'date of birth': '1 September 1966',
        'place of origin': 'France',
        'place of birth': 'Lyon, France',
        'image': 'https://www.completesports.com/wp-content/uploads/2018/11/genesio-happy-with-lyon-display.jpg'
    },
    'strasbourg':{
        'name': 'Julien Stephan',
        'date of birth': '18 September 1980',
        'place of origin': 'France',
        'place of birth': 'Rennes, France',
        'image': 'https://media.ouest-france.fr/v1/pictures/MjAyMjA0NDc2ZTllNDg4NmViYWI3ODRiZTdkYWQyNmExOWJiM2Y?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=441a5f2780402a84dddca0841da1472366d076f0bf0063a72109513c3337ce7e'
    },
    'toulouse':{
        'name': 'Philippe Jacques William Montanier',
        'date of birth': '15 November 1964',
        'place of origin': 'France',
        'place of birth': 'Vernon, France',
        'image': 'https://cdn.actualnewsmagazine.com/english/wp-content/uploads/2022/03/Philippe-Montanier-guest-of-the-show-100-TFC-this-Monday.jpg'
    },
    'troyes':{
        'name': 'Bruno Irles',
        'date of birth': '16 August 1975',
        'place of origin': 'France',
        'place of birth': 'Rochefort, France',
        'image': 'https://epostalnews.com/wp-content/uploads/2022/07/Bruno-Irles-in-the-hot-seat.jpg'
    }
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req,res) => {
    res.json(coaches)
})

app.get('/api/:name', (req,res) => {
    const club = req.params.name.toLowerCase()
    if(coaches[club]){
        res.json(coaches[club])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The Server Is Running On Port ${PORT},betta go catch it`)
})