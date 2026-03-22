<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logoImg from '../assets/logo.png'

// Article images
import imgRewatch     from '../assets/Add_a_subheading_-_2.png'
import imgFilipinaDir from '../assets/Add_a_subheading_-_1.png'
import imgAwardWin    from '../assets/Add_a_subheading_-_5.png'
import imgCommentary  from '../assets/Add_a_subheading_-_6.png'
import imgReels       from '../assets/IMG_8945.PNG'
import imgFeels       from '../assets/IMG_8946.PNG'

// SineSuri movie posters
import posterSunshine    from '../assets/Sunshine.jpeg'
import posterHeneral     from '../assets/Heneral_Luna.jpg'
import posterHello       from '../assets/Hello__Love__Goodbye.jpg'
import posterKitaKita    from '../assets/Kita_Kita.jpg'
import posterTadhana     from '../assets/That_thing_called_tadhana.jpg'
import posterMissGranny  from '../assets/Miss_Granny.jpg'
import posterSevenSun    from '../assets/Seven_Sundays.jpg'
import posterKunMaupay   from '../assets/Kun_Maupay_Man_it_Panahon.jpg'
import posterMeetMe      from '../assets/Meet_Me_in_St__Gallen.jpg'
import posterAnhChacha   from '../assets/Ang_huling_cha-cha_ni_anita.jpg'
import posterBarbers     from '../assets/Barber_s_Tales.jpg'
import posterAnak        from '../assets/Anak__2001_.jpg'

const router   = useRouter()
const menuOpen = ref(false)

const videos = [
  { id: 'BxWHDgUs20c', title: 'Ang Huling Cha-Cha ni Anita — Official Trailer', channel: 'TBA Studios', description: 'A 12-year-old Anita falls in love with the new woman in town. Years later, a girlhood crush blossoms during the Fiesta of Santa Clara in Obando, Bulacan. Directed by Sigrid Andrea Bernardo.' },
  { id: 'UeknnfNG_cY', title: 'Kita Kita — Official Trailer', channel: 'Spring Films', description: 'Lea, a heartbroken Filipina tour guide in Japan, temporarily loses her sight and unexpectedly forms a genuine bond with a cheerful stranger. Directed by Sigrid Andrea Bernardo.' },
  { id: 'KvLVWTaUT5w', title: 'That Thing Called Tadhana — Official Trailer', channel: 'Cinema One Originals', description: 'Mace befriends Anthony when he helps her at the airport. Heartbroken over a breakup, she decides to visit Baguio with him, where they form a sweet new bond of friendship. Directed by Antoinette Jadaone.' },
  { id: 'Cf57Y2nbl4U', title: 'Heneral Luna — Official Trailer', channel: 'TBA Studios', description: 'General Antonio Luna, commander of the revolutionary army, is spoiling for a fight. After 300 years as a Spanish colony, the Philippines must endure a new foreign power: the United States of America. Directed by Jerrold Tarog.' },
  { id: 'QbHpyjrGdpc', title: 'Hello, Love, Goodbye — Official Trailer', channel: 'Star Cinema', description: 'A bartender and a domestic helper of Filipino origin living in Hong Kong find themselves falling in love, but they each have different plans for their future. Directed by Cathy Garcia-Sampana.' },
  { id: 'b_Rvg92Fh3U', title: 'Seven Sundays — Official Trailer', channel: 'Star Cinema', description: 'An old man diagnosed with cancer has seven weeks to live. This news brings his estranged children home to spend his last remaining Sundays together with him. Directed by Cathy Garcia-Molina.' },
  { id: 'qF1pOscxB1k', title: 'Sunshine — Official Trailer', channel: 'Black Sheep', description: 'Sunshine follows a young gymnast who discovers she is pregnant on the week of the national team tryouts. On her way to a seller of illegal abortion drugs, she meets a mysterious girl. Directed by Antoinette Jadaone.' },
  { id: 'WkkB5CxHUDU', title: "Barber's Tales — Official Trailer", channel: 'APT Entertainment', description: "A widow inherits the town's only barbershop from her deceased husband. When no one comes in to get a haircut, a sympathetic prostitute pressures her clients into patronizing the business. Directed by Jun Lana." },
  { id: 's7UyA4w6a7A', title: 'Meet Me in St. Gallen — Official Trailer', channel: 'Spring Films', description: 'An accidental meeting in Switzerland sparks a deep but complicated connection between two strangers, where timing, distance, and personal struggles challenge the possibility of love. Directed by Irene Emma Villamor.' },
  { id: '1EZX37NDmsQ', title: 'Kun Maupay Man it Panahon — Official Trailer', channel: 'iWant TFC', description: 'In the aftermath of a super typhoon, a mother and her two children navigate grief, survival, and the resilience of the Filipino spirit. Official MMFF 2021 Entry. Directed by Carlo Francisco Manatad.' },
  { id: 'WIc1VuKhjAI', title: 'Anak — Official Trailer', channel: 'Viva Films', description: 'Josie, a Filipino woman working in Hong Kong, has lost touch with her family. Eventually, she goes back home to reconnect with them and process a shocking truth about her husband. Directed by Rory Quintos.' },
]

const currentIndex = ref(0)
function nextSlide() { currentIndex.value = (currentIndex.value + 1) % videos.length }
function prevSlide() { currentIndex.value = (currentIndex.value - 1 + videos.length) % videos.length }

const selectedVideo = ref(null)
function openVideoDetail(video) { selectedVideo.value = video }
function closeVideoDetail()     { selectedVideo.value = null }

const articles = [
  {
    title: "4 Filipina-Directed Coming-of-Age Films You Should Watch This Women's Month",
    img: imgFilipinaDir, writer: 'Phoemela Denise Pine', source: 'Pilikula (Own)',
    body: `Coming-of-age stories are all about growing up—first love, identity crises, messy friendships, and figuring out who you are. But when these stories are told by women, about women, they hit a little differently.\n\nIn Philippine cinema, several Filipina filmmakers have crafted coming-of-age films that capture different sides of womanhood. This Women's Month, here are four worth adding to your watchlist.\n\nMoral (1982), dir. Marilou Diaz-Abaya\nConsidered a classic in Philippine cinema, Moral follows the lives of four women navigating adulthood, relationships, and the expectations placed on them by society. Decades later, its themes still feel strikingly relevant.\n\nAng Huling Cha-Cha ni Anita (2013), dir. Sigrid Andrea Bernardo\nSet in a quiet provincial town, the film tells the story of a young girl who begins to question her feelings after developing a crush on an older woman. It explores teenage discovery, sexuality, and the awkward yet meaningful moments of growing up.\n\nBillie and Emma (2018), dir. Samantha Lee\nColorful, light, and heartfelt, Billie and Emma centers on the friendship and eventual romance between two high school girls navigating conservative school culture. It balances its soft coming-of-age tone with conversations about acceptance and identity.\n\nYellow Rose (2019), dir. Diane Paragas\nA Filipina teenager in Texas dreams of becoming a country singer while dealing with the reality of living as an undocumented immigrant. The film blends music and coming-of-age storytelling to explore identity and belonging.\n\nFrom city life in the '80s to modern-day stories of identity and ambition, these films show that there's no single way to tell a Filipina coming-of-age story. This Women's Month, it might be the perfect time to revisit these films—or discover them for the first time.`
  },
  {
    title: 'Filipino Films That Deserve a Rewatch',
    img: imgRewatch, writer: 'Phoemela Denise Pine', source: 'Pilikula (Own)',
    body: `Some movies are good the first time. The great ones get better when you watch them again.\n\nOn a rewatch, you already know where the story is going. That's when the little things start to stand out. A line that hits harder. A quiet moment that suddenly makes more sense.\n\nFour Sisters and a Wedding (2013) dir. Cathy Garcia-Molina\nBeneath the heated arguments are four women dealing with their own insecurities, disappointments, and expectations. On a rewatch, the film feels less like a family fight and more like a story about complicated love and unresolved wounds.\n\nCleaners (2019) dir. Glenn Barit\nGlenn Barit's Cleaners rewards patience and attention. The film is packed with visual details, references, and quiet character moments that are easy to miss the first time. A second watch lets you appreciate how carefully everything was put together.\n\nHintayan ng Langit (2018) dir. Dan Villegas\nTwo former lovers meet again in the afterlife. Watching it again makes the story feel heavier, especially when you start paying attention to the choices the characters made when they were still alive.\n\nI'm Drunk, I Love You (2017) dir. JP Habac\nFew Filipino films capture the quiet heartbreak of unrequited love this way. On a rewatch, the pauses, the glances, and the conversations that never quite say everything out loud start to carry more emotional weight.\n\nSome films entertain you once. Others stay with you long after the credits roll. If you're planning your next movie night, this might be your sign to revisit a Filipino film.`
  },
  {
    title: '10 Filipino Movies You Should Rewatch to Bring Back The Feels',
    img: imgFeels, writer: 'Mary Grace Cortez', source: 'PULP Magazine',
    body: `A nostalgic roundup of local films worth rewatching—from golden-era favorites to early 2000s blockbusters.\n\nFilipino cinema has always had a way of capturing the heart in ways that are uniquely ours. These films do more than entertain; they become part of who we are.\n\n1. Dahil Mahal na Mahal Kita (1998) – Claudine Barretto and Rico Yan's pairing captured teenage love and first heartbreak.\n\n2. Labs Kita, Okey Ka Lang? (1998) – The Baguio-set school setting and story of unspoken love make this a comforting heartbreak to revisit.\n\n3. Anak (2000) – Vilma Santos portrays an OFW mother trying to reconnect with her daughter.\n\n4. Ang Tanging Ina (2003) – Ai-Ai delas Alas' Ina Montecillo embodies chaos, exhaustion, and fierce love.\n\n5. One More Chance (2007) – Popoy and Basha's story of love, regret, and letting go remains iconic.\n\n6. Four Sisters and a Wedding (2013) – About sibling love and rivalry in any Filipino household.\n\n7. Girl, Boy, Bakla, Tomboy (2013) – Vice Ganda's quadruple-role comedy is outrageous yet heartfelt.\n\n8. Seven Sundays (2017) – A heartfelt look at family reconnection and reconciliation.\n\n9. Oda sa Wala (2018) – Pokwang's haunting performance transforms silence into storytelling.\n\n10. The Hows of Us (2018) – Kathryn Bernardo and Daniel Padilla deliver a raw portrayal of love tested by life's pressures.\n\nRewatching these films is more than nostalgia; it's a journey through time and a reminder that some stories never lose their power.`
  },
  {
    title: 'Are Filipino Films More Cinematic Than Hollywood Blockbusters Today?',
    img: imgReels, writer: 'John Patrick "Joker" Manio', source: 'Esquire',
    body: `In 2025's breakout hit Sunshine (dir. Antoinette Jadaone), Pao Orendain photographs Manila as a visceral living character. The titular protagonist Sunshine, played by Maris Racal, wades through the city's filth and smoke and all its tangible textures.\n\nBut what does "cinematic" even mean? Essentially, it is something aesthetically appealing that registers very well onto the screen.\n\nReal Vs. Manufactured Worlds\nSunshine was shot on location, so the depth and texture of its shots were already baked in the setting. Hollywood blockbusters have an increasing obsession with chroma screens. Their technology can afford imagination, but blank screens demand film worlds to be built from scratch. Money and time pressures lead to shortcuts—what you get is plasticity: blurry, uninspiring out-of-focus backgrounds.\n\nBecause there's no budget to construct digital worlds, our filmmakers are stuck with real, physical places, focused on innovating in camera work. And honestly, they are better off for it.\n\nA Bad Year for Philippine Cinema?\nFDCP Chairperson Joey Javier Reyes stated that 2025 was a bad year for Philippine films. There is a problem—ticket prices continue to rise, leading to bad sales. But I don't agree there is a glaring problem with our creative output.\n\nI find myself fulfilled watching Filipino films in 2025. Not only because they've been looking their best, but because they are a testament to progress that is healthy, organic, and endemic to our cinematic heritage.\n\nAre Filipino films more cinematic than Hollywood blockbusters today? Ask me and I'll say, hell yeah.`
  },
  {
    title: '10 Award-Winning Filipino Movies on Netflix You Should Have Watched by Now',
    img: imgAwardWin, writer: 'Abraham Doctor', source: 'ClickTheCity',
    body: `Netflix's library of Filipino movies has grown significantly. Here are the Filipino movies on Netflix that have received positive praises and recognition from award-giving bodies.\n\n1. Pan De Salawal – Won four awards at Cinemalaya 2018 and Best Film at Spain's Calella Film Festival.\n\n2. Fan Girl – Swept 9 awards at Metro Manila Film Festival 2020, including Best Picture and Best Director.\n\n3. Lola Igna – Bagged four awards at Pista ng Pelikulang Pilipino 2019, including Best Film and Best Screenplay.\n\n4. Pamilya Ordinaryo – Won multiple awards at Cinemalaya 2016 including Best Film, Best Actress, and Best Director.\n\n5. BuyBust – Won Best Picture and three more prizes at the 2019 Gawad Urian Awards.\n\n6. Birdshot – Won Critics' Choice Award at Pista ng Pelikulang Pilipino 2017 and prizes from the Tokyo International Film Festival.\n\n7. Hintayan ng Langit – Took home two awards at QCinema International Film Festival 2018.\n\n8. Kalel, 15 – Bagged awards from the Asian Film Festival 2020, Gawad Urian Awards 2020, and FAMAS Awards 2019.\n\n9. Iska – Won awards at Cinemalaya 2019 and multiple local and international award-giving bodies.\n\n10. Kung Paano Hinihintay ang Dapithapon – Swept five awards at Cinemalaya 2018 including Best Film and Best Screenplay.`
  },
  {
    title: 'COMMENTARY: Clichés that plague Filipino movies',
    img: imgCommentary, writer: 'PEP Team', source: 'PEP.ph',
    body: `While watching a Filipino movie, you may encounter scenes that are strikingly similar to others you've seen before. Some movie plots are so predictable, they've become clichés.\n\nLATECOMERS – When the bad guys wreak havoc, the police show up only when the conflict is resolved. Otherwise, there would be no time for the lead stars to shine.\n\nAIRPORT RUSH – The lead star realizes at the last minute that s/he is in love with his/her love team partner who is rushing to the airport to leave the country.\n\nCOMIC RELIEF – The best friend is tasked to provide comic relief. There is also a growing trend for the sidekick to be a flamboyant gay character.\n\nABROAD = LIBERATED – The other woman in the story hails from abroad, which explains why she is "liberated."\n\nTOUCH ME NOT – When an action star fights the enemy, he is fearless. But when his leading lady treats his wounds, he keeps wincing.\n\nGAGANTI AKO! – In action movies, the bida grieves over the body of his loved one and vows to exact revenge.\n\nBOTHERSOME DOORS – In horror films, the stars have problems opening a door when a ghost is chasing them.\n\nJUST ADD WATER – When there is a dramatic scene, rain suddenly appears to amp up the emotional intensity.\n\nSERENDIPITY – In romantic movies, the lead actors bump into each other and fall for each other almost instantly, meeting again in the most unlikely places.\n\nThese are just some popular movie clichés. What are the others?`
  },
]

const readAlsoItems = [
  { title: "4 Filipina-Directed Films You Should Watch This Women's Month", img: imgFilipinaDir },
  { title: '10 Award-Winning Movies on Netflix You Should Have Watched by NOW', img: imgAwardWin },
  { title: "COMMENTARY: Clichés that plague Filipino movies", img: imgCommentary },
]

const selectedArticle = ref(null)
function openArticleDetail(article) { selectedArticle.value = article }
function closeArticleDetail()       { selectedArticle.value = null }

const sinesuriFilms = [
  {
    title: 'Sunshine', img: posterSunshine, year: '2024',
    director: 'Antoinette Jadaone', stars: 'Maris Racal', writer: 'Phoemela Denise Pine',
    synopsis: 'Sunshine follows a young gymnast who discovers she is pregnant on the week of the national team tryouts. On her way to a seller of illegal abortion drugs, she meets a mysterious girl who eerily talks and thinks like her.',
    review: `Sunshine isn't an easy watch—but that's exactly the point.\n\nThe film follows Sunshine, a young gymnast whose life suddenly changes when she finds out she's pregnant just days before an important competition. What begins as a personal crisis slowly becomes a bigger story about how society treats women in difficult situations.\n\nAt its core, the film is about a woman's right to choose. Sunshine is forced to make a life-changing decision surrounded by pressure, judgment, and limited options. In a country where conversations about reproductive health are still controversial, the film shows how complicated things become when a woman tries to take control of her own future.\n\nBut Sunshine isn't only about struggle. It highlights the power of solidarity between women. These moments may be small, but they become some of the film's most powerful scenes.\n\nWhat really stands out is the writing. The script is sharp, and the metaphors are handled with care. More than anything, Sunshine proves that stories like this deserve to be seen and talked about.\n\nMatapang, napapanahon, at may malinaw na paninindigan.`
  },
  {
    title: 'Heneral Luna', img: posterHeneral, year: '2015',
    director: 'Jerrold Tarog', stars: 'John Arcilla', writer: 'Oggs Cruz',
    synopsis: 'General Antonio Luna, commander of the revolutionary army, is spoiling for a fight. After three hundred years as a Spanish colony, the Philippines must endure a new foreign power: the United States of America.',
    review: `Jerrold Tarog's Heneral Luna provides an essential middle ground in Philippine historical cinema. It does not pander to common but erroneous knowledge and wisdom.\n\nTarog cleverly centers on Antonio Luna, who has always been known as a gifted military strategist. His tragic demise paints a picture of what was wrong and what is still wrong in the country.\n\nJohn Arcilla is excellent as Antonio Luna. Driven not by boring reverence but by his own interpretation of noble madness, Arcilla is exhilarating in his various interpretations of Luna's many personalities.\n\nHeneral Luna begs you to look beyond the stereotypes of both the man and the history made around him. It begs you to see everything with clearer eyes, without the influence of those who turned our history into a pageant of brave and unblemished patriots.`
  },
  {
    title: 'Hello, Love, Goodbye', img: posterHello, year: '2019',
    director: 'Cathy Garcia-Sampana', stars: 'Alden Richards, Kathryn Bernardo', writer: 'Philbert Dy',
    synopsis: 'A bartender and a domestic helper of Filipino origin living in Hong Kong find themselves falling in love, but they each have different plans for their future.',
    review: `It's the specificity that I enjoyed the most. There have been many movies about the OFW experience, but this one roots itself in the particulars of the Hong Kong domestic helper.\n\nJoy is pursuing a dream, seeking a life beyond being the absent breadwinner for a family that doesn't feel her suffering. In the margins, we see the internalized tragedy of a people convinced that this is somehow an acceptable situation.\n\nKathryn Bernardo is great in this. Joy is a fully formed character: an industrious young woman who has deferred her dreams under the pretense of a necessary selflessness.\n\nEven as the romance takes the fore, the movie is smart enough to make it all feel burdened by the tragedies inherent to a people who have resigned themselves to the reality of a home that can no longer be their home.`
  },
  {
    title: 'Kita Kita', img: posterKitaKita, year: '2017',
    director: 'Sigrid Andrea Bernardo', stars: 'Empoy Marquez, Alessandra De Rossi', writer: 'Eloizah Cabrera',
    synopsis: 'Lea, a heartbroken Filipina tour guide in Japan temporarily loses her sight and unexpectedly forms a genuine bond with a cheerful stranger, discovering love beyond appearances.',
    review: `Watching Kita Kita feels like quietly stepping into someone else's loneliness and unexpectedly finding yourself comforted there. Set in the snow-covered streets of Sapporo, the film tells the story of Lea, a Filipino tour guide who temporarily loses her sight after heartbreak.\n\nIn this movie, you don't just watch Lea, you feel her. The disorientation, the heaviness, the way the world seems to pause when something inside you breaks. And then, almost awkwardly, Tonyo enters—too talkative, too persistent—but slowly, he becomes the warmth.\n\nThe connection between Alessandra de Rossi and Empoy Marquez isn't grand or cinematic in the usual sense, but rather quiet, clumsy, and real.\n\nThis film reminded me that sometimes the people who change us the most are the ones who simply sit with us in our darkest moments and, in doing so, help us see again.`
  },
  {
    title: 'That Thing Called Tadhana', img: posterTadhana, year: '2014',
    director: 'Antoinette Jadaone', stars: 'Angelica Panganiban, JM de Guzman', writer: 'Keren Happuch Briones',
    synopsis: 'Mace befriends Anthony when he helps her at the airport. Heartbroken over a breakup, she decides to visit Baguio with him, where they form a sweet new bond of friendship.',
    review: `That Thing Called Tadhana tells a simple but relatable story about heartbreak, moving on, and meeting someone at the right time.\n\nOne of the main ideas in the film is that love is not only about feelings, but also about timing. Mace and Anthony clearly have a connection, but the film does not force them into a relationship. It shows that both of them are still hurt from their past, and they need time to understand themselves first.\n\nThe trip they take is not only about going to different places, but also about learning from their experiences. As they talk about their past relationships, they slowly realize what went wrong and what they want to change.\n\nOverall, That Thing Called Tadhana shows a realistic side of love. It proves that sometimes the best love stories are the quiet ones.`
  },
  {
    title: 'Miss Granny', img: posterMissGranny, year: '2018',
    director: 'Joyce Bernal', stars: 'Sarah Geronimo, Nova Villa, James Reid, Xian Lim', writer: 'Philbert Dy',
    synopsis: 'Fely Malabano, an elderly woman, gets an opportunity to relive her youth after a mysterious photographer takes a portrait of her.',
    review: `Let's just start by saying that Sarah Geronimo is great. She mugs it for this movie, but she manages to sell the language, at the very least. And when she's singing, it doesn't get any more wonderful.\n\nBut the movie feels loose all around. It's missing bits and pieces, in spite of its length, and it ends up saying some pretty questionable things.\n\nIt's like the movie isn't really taking its premise seriously, in spite of the big, dramatic moments that it wants to sell in the end. There are confrontations it straight up avoids, denying the audience the resolution some threads deserve.\n\nThe movie does hit some big moments, and again, Geronimo is pretty great. But on the whole, it's kind of a sloppy, occasionally tedious piece of work.`
  },
  {
    title: 'Seven Sundays', img: posterSevenSun, year: '2017',
    director: 'Cathy Garcia-Sampana', stars: 'Aga Muhlach, Dingdong Dantes, Cristine Reyes, Enrique Gil, Ronaldo Valdez', writer: 'Oggs Cruz',
    synopsis: 'An old man, diagnosed with cancer and having seven weeks to live, brings his estranged children home to spend his last remaining Sundays together.',
    review: `Cathy Garcia-Molina's Seven Sundays is crafted exactly to be amiable. Its main conceit, while lacking real originality, paves the way for scenes that celebrate family values.\n\nThere's the generally fine performances, led by Ronaldo Valdez, who plays the family patriarch with equal amounts of levity and heft. Aga Muhlach finally succumbs to portraying a man whose best years are behind him, and Dingdong Dantes delivers a performance that pulsates with affecting earnestness.\n\nThen there's Seven Sundays' meticulous understanding of the peculiarities of the Filipino family. Its approach is clearly culturally specific, dwelling on simmering attitudes that a social climate of surface-level nicety affords.\n\nHowever, the film is hardly unique—it feels like a rehash with its persistent allegiance to formula. Its plot is very predictable, and there are portions where it plods along under the weight of exposition and heavy-handed dialogue.`
  },
  {
    title: 'Kun Maupay Man it Panahon', img: posterKunMaupay, year: '2021',
    director: 'Carlo Francisco Manatad', stars: 'Daniel Padilla, Rans Rifol, Charo Santos', writer: 'Pilikula Editorial',
    synopsis: 'In the aftermath of a super typhoon, a mother and her two children navigate grief, survival, and the resilience of the Filipino spirit.',
    review: `Kun Maupay Man it Panahon is a haunting and deeply personal film that captures the aftermath of catastrophe not just physically, but emotionally and spiritually.\n\nDirector Carlo Francisco Manatad crafts a visually striking film that blurs the line between the living and the dead, the past and the present. The non-linear structure adds to the dreamlike quality of grief that the film seeks to portray.\n\nThe performances are raw and unpolished in the best possible way—anchored by Charo Santos, whose quiet devastation anchors the film's emotional core.\n\nIt is an official entry to the 2021 Metro Manila Film Festival and a Locarno Film Festival official selection, signaling a Filipino film that transcends local storytelling to speak to universal human experiences.`
  },
  {
    title: 'Meet Me in St. Gallen', img: posterMeetMe, year: '2018',
    director: 'Irene Emma Villamor', stars: 'Carlo Aquino, Bela Padilla', writer: 'Eloizah Cabrera',
    synopsis: 'An accidental meeting in Switzerland sparks a deep but complicated connection between two strangers, where timing, distance, and personal struggles challenge the possibility of love.',
    review: `Meet Me in St. Gallen follows two individuals whose chance encounter in St. Gallen evolves into a complex, time-spanning relationship. The film positions itself as a reflective narrative on timing, missed opportunities, and the ambiguity of modern love.\n\nThe role of timing in love becomes central to the story, as Jesse and Celeste's relationship unfolds across different periods in their lives. Even strong emotional connections can fail to materialize if timing and readiness are misaligned.\n\nAt its core, the movie captures the reality of "almost" relationships—connections that are deeply meaningful yet remain unresolved or incomplete.\n\nAnchored by the performances of Carlo Aquino and Bela Padilla, the film offers a nuanced portrayal of love shaped by time and circumstance. In the end, the value of a relationship is not defined by how long it lasts, but by the depth of its impact.`
  },
  {
    title: 'Ang Huling Cha-Cha ni Anita', img: posterAnhChacha, year: '2013',
    director: 'Sigrid Andrea Bernardo', stars: 'Angel Aquino, Therese Malvar, Jay Bordon', writer: 'Keren Happuch Briones',
    synopsis: 'A 12-year old Anita falls in love with the new woman in town; years later, a girlhood crush blossoms during the Fiesta of Santa Clara in Obando, Bulacan.',
    review: `Ang Huling Cha-Cha ni Anita is a coming-of-age film that shows the story of a young girl who starts to experience feelings she does not fully understand.\n\nOne of the main ideas is about growing up and realizing things about yourself at a young age. Anita does not fully understand what she feels for Pilar, and this makes her unsure of how to act. The film shows that first love can be confusing, especially when it is not what people expect.\n\nAnother important idea is acceptance. Anita struggles not only because of her feelings, but also because of the people around her. There are expectations about how she should act, making it harder for her to understand herself.\n\nOverall, Ang Huling Cha-Cha ni Anita is a simple but meaningful film about first love, confusion, and growing up. The story is quiet, but the emotions are strong because they feel real.`
  },
  {
    title: "Barber's Tales", img: posterBarbers, year: '2013',
    director: 'Jun Lana', stars: 'Eugene Domingo', writer: 'Armando Dela Cruz',
    synopsis: "A widow inherits the town's only barbershop from her deceased husband. When no one comes in to get a haircut, a sympathetic prostitute pressures her clients into patronizing the business.",
    review: `Barber's Tales is a skillful rumination of life and how a woman finds her voice in an age where the line between being heard and being listened to is all but a blur.\n\nThe town's ephemeral peace is distorted when a subservient wife named Marilou assumes the role previously taken by her destroyed barber husband. Lana's lethargic pacing and sensitive direction treats the film just right, and Eugene Domingo as Marilou coheres everything intact.\n\nThroughout the film, Domingo's eyes are heavy with exhaust, her shoulders almost hunched-over, her voice always frail. Aside from Lana, the film has also found an astute storyteller in Domingo.\n\nBarber's Tales is not about equality as much as it is about resolution. It is different for everyone, this resolution—and that is precisely what makes it so quietly powerful.`
  },
  {
    title: 'Anak', img: posterAnak, year: '2001',
    director: 'Rory Quintos', stars: 'Vilma Santos, Claudine Barretto', writer: "jc2050 / C'est La Zindagi",
    synopsis: "Josie, a Filipino woman working in Hong Kong, has lost touch with her family. Eventually, she goes back home to reconnect with them and process a shocking truth about her husband.",
    review: `Anak is a touching tale, reflecting the hardship numerous overseas Filipino domestic workers have to undergo for the sake of their family's livelihood. Josie, portrayed by Vilma Santos, is the representative for those tireless Filipino maids and nannies working abroad.\n\nUpon arriving in her homeland, Josie realizes that the next chapter in her life was not what she expected. Her eldest daughter Carla, portrayed by Claudine Barretto, has grown explicitly hostile towards her. Josie discovers that years of working abroad have, ironically, made her a stranger in their eyes.\n\nClaudine Barretto wonderfully conveyed the rebellious nature of Carla's character. She and Vilma Santos made a brilliant mother-and-daughter pair, capturing the nuances and grey texture of a parent-child relationship.\n\nAnak is an ode to all overseas Filipino workers, strenuously laboring not only for themselves and their families, but for the entire Filipino population.`
  },
]

const selectedFilm = ref(null)
function openFilmDetail(film) { selectedFilm.value = film }
function closeFilmDetail()    { selectedFilm.value = null }

function logout() {
  menuOpen.value = false
  router.push('/')
}

const activeModal = ref(null)
const modalTitles = {
  about:    'ABOUT US',
  terms:    'TERMS OF USE',
  privacy:  'PRIVACY POLICY',
  contact:  'CONTACT US',
  sinesuri: 'SINESURI',
  usapang:  'USAPANG PILIKULA',
  pahapyaw: 'PAHAPYAW',
}
function openModal(name) { activeModal.value = name }
function closeModal()    { activeModal.value = null }
</script>

<template>
  <div class="main-page">

    <!-- NAVBAR -->
    <nav class="navbar">
      <div class="nav-left">
        <img :src="logoImg" alt="Pilikula" class="nav-logo" />
        <div class="nav-links">
          <a href="#">Reviews</a>
          <a href="#">Articles</a>
          <a href="#">Teasers</a>
        </div>
      </div>
      <div class="account-wrap">
        <button class="account-btn" @click="menuOpen = !menuOpen" aria-label="Account">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
        </button>
        <transition name="drop">
          <div v-if="menuOpen" class="account-dropdown">
            <div class="dropdown-header">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F5A623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <span>My Account</span>
            </div>
            <hr class="dropdown-divider" />
            <button class="logout-btn" @click="logout">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Log Out
            </button>
          </div>
        </transition>
      </div>
    </nav>

    <!-- SECTION 1: HERO -->
    <section class="hero-banner">
      <video class="hero-video" autoplay muted loop playsinline preload="auto">
        <source src="/src/assets/films_short_compilation.mov" type="video/mp4" />
        <source src="/src/assets/films_short_compilation.mov" type="video/quicktime" />
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <p>Every Filipino story deserves to be<br/>
          <strong>told</strong>, <strong>valued</strong>, and <strong>championed</strong>.
        </p>
      </div>
    </section>

    <!-- SECTION 2: PAHAPYAW -->
    <section class="snap-section content-section">
      <div class="section-header">
        <h2 class="section-title">PahapYaw</h2>
        <a href="#" class="discover-link" @click.prevent="openModal('pahapyaw')">Discover »</a>
      </div>
      <div class="slider-wrap">
        <button class="slider-arrow left" @click="prevSlide" aria-label="Previous">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="slider-viewport">
          <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="slide" v-for="(vid, i) in videos" :key="i">
              <div class="video-frame">
                <iframe :src="`https://www.youtube.com/embed/${vid.id}?rel=0&modestbranding=1`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <button class="slider-arrow right" @click="nextSlide" aria-label="Next">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <!-- Current video info bar -->
      <div class="pahapyaw-info" @click="openVideoDetail(videos[currentIndex])">
        <div class="pahapyaw-info-text">
          <p class="pahapyaw-channel">{{ videos[currentIndex].channel }}</p>
          <p class="pahapyaw-title">{{ videos[currentIndex].title }}</p>
        </div>
        <span class="pahapyaw-more">More info →</span>
      </div>
      <div class="slider-dots">
        <button v-for="(_, i) in videos" :key="i" class="dot" :class="{ active: i === currentIndex }" @click="currentIndex = i"></button>
      </div>
    </section>

    <!-- SECTION 3: USAPANG PILIKULA -->
    <section class="snap-section content-section">
      <div class="section-header">
        <h2 class="section-title">Usapang PiliKula</h2>
        <a href="#" class="discover-link" @click.prevent="openModal('usapang')">Discover »</a>
      </div>
      <div class="articles-grid">
        <div class="article-card-item" v-for="(art, i) in articles" :key="i" @click="openArticleDetail(art)">
          <div class="article-card-img-wrap">
            <img :src="art.img" :alt="art.title" class="article-card-img" />
            <div class="article-card-overlay"><span class="article-card-read">Read →</span></div>
          </div>
          <p class="article-card-title">{{ art.title }}</p>
        </div>
      </div>
    </section>

    <!-- SECTION 4: SINESURI -->
    <section class="snap-section content-section sinesuri-section">
      <div class="section-header">
        <h2 class="section-title">SineSuri</h2>
        <a href="#" class="discover-link" @click.prevent="openModal('sinesuri')">Discover »</a>
      </div>
      <div class="sinesuri-grid">
        <div class="sinesuri-card" v-for="(film, i) in sinesuriFilms" :key="i" @click="openFilmDetail(film)">
          <img :src="film.img" :alt="film.title" class="sinesuri-poster" />
          <div class="sinesuri-hover">
            <p class="sinesuri-year">{{ film.year }}</p>
            <p class="sinesuri-name">{{ film.title }}</p>
            <button class="sinesuri-play">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
              Play
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: AWARDS + FOOTER -->
    <section class="snap-section last-section">
      <div class="awards-banner">
        <div class="awards-content">
          <h2 class="awards-title"><span class="gold">Pili</span><span class="wht">Kula</span><br/><span class="wht">Film Awards</span></h2>
          <p class="awards-sub">Honoring Filipino Film Excellence</p>
          <a href="https://forms.gle/tBo1yGsnFds8DDAk6" target="_blank" rel="noopener noreferrer">
            <button class="vote-btn">Vote Now</button>
          </a>
        </div>
      </div>
      <footer class="footer">
        <img :src="logoImg" alt="Pilikula" class="footer-logo" />
        <nav class="footer-nav">
          <a href="#" @click.prevent="openModal('about')">About Us</a><span>|</span>
          <a href="#" @click.prevent="openModal('terms')">Term of Use</a><span>|</span>
          <a href="#" @click.prevent="openModal('privacy')">Privacy Policy</a><span>|</span>
          <a href="#" @click.prevent="openModal('contact')">Contact Us</a>
        </nav>
        <div class="footer-socials">
          <a href="https://www.facebook.com/share/1KaERTybm5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
        <p class="footer-copy">Copyright &copy; 2025 Film Development Council of the Philippines. All Rights Reserved.</p>
      </footer>
    </section>

    <!-- MODALS -->
    <transition name="modal-fade">
      <div v-if="activeModal" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-box">
          <div class="modal-header">
            <div class="modal-collage">
              <img v-for="(film, i) in sinesuriFilms.slice(0,8)" :key="i" :src="film.img" class="collage-img" />
            </div>
            <div class="modal-header-overlay"></div>
            <h2 class="modal-title">{{ modalTitles[activeModal] }}</h2>
            <button class="modal-close" @click="closeModal">✕</button>
          </div>
          <div class="modal-body">
            <template v-if="activeModal === 'about'">
              <p>PiliKula is a web-based film review and cinema discourse platform committed to the critical examination, promotion, and advancement of Filipino cinema. The platform serves as a digital space for the evaluation and appreciation of local films, including mainstream, independent, regional, and student productions.</p>
              <p>PiliKula aims to foster informed audience engagement through film reviews, analytical articles, curated recommendations, and feature content. Its approach integrates critical analysis with cultural sensitivity, ensuring all content is presented constructively, balanced, and respectful of creative works and their creators.</p>
              <p>The platform recognizes film criticism as a form of cultural participation and seeks to contribute to the broader discourse surrounding Filipino storytelling. By providing visibility to both established and emerging filmmakers, PiliKula supports the development of a more inclusive and sustainable local film industry.</p>
              <p>PiliKula is intended for film students, enthusiasts, and general audiences who seek accessible yet meaningful engagement with cinema. Through its content, the platform aims to promote awareness, appreciation, and continued support for Filipino films.</p>
            </template>
            <template v-if="activeModal === 'terms'">
              <h4>1. Acceptance of Terms</h4><p>By accessing, browsing, or using the PiliKula website, users acknowledge that they have read, understood, and agreed to be bound by these Terms of Use. If the user does not agree with any part of these terms, they must discontinue use of the website.</p>
              <h4>2. Permitted Use</h4><p>The content provided on PiliKula is intended solely for informational, educational, and non-commercial purposes. Users agree to use the website in accordance with applicable laws and regulations.</p>
              <h4>3. Intellectual Property Rights</h4><p>All original content is the property of PiliKula and is protected under applicable intellectual property laws. Unauthorized reproduction, distribution, or modification of any content is strictly prohibited. Third-party materials are used for commentary, criticism, and educational purposes in accordance with fair use principles.</p>
              <h4>4. User Conduct</h4><p>Users agree not to: post or transmit unlawful, harmful, defamatory, or offensive content; engage in disruptive, abusive, or inappropriate behavior; distribute spam, advertisements, or misleading information.</p>
              <h4>5. Disclaimer of Content</h4><p>All reviews, opinions, and analyses published on PiliKula reflect the views of the respective authors and are inherently subjective. No guarantees are made regarding completeness, reliability, or objectivity.</p>
              <h4>6. External Links</h4><p>PiliKula does not endorse or assume responsibility for the content, policies, or practices of external sites linked from the website.</p>
              <h4>7. Limitation of Liability</h4><p>PiliKula shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or its content.</p>
              <h4>8. Amendments</h4><p>PiliKula reserves the right to modify or update these Terms of Use at any time without prior notice. Continued use constitutes acceptance of any revised terms.</p>
            </template>
            <template v-if="activeModal === 'privacy'">
              <h4>1. Collection of Information</h4><p>PiliKula may collect limited personal information voluntarily provided by users, including names and email addresses. Non-personal data such as browser type, device information, and usage statistics may also be collected.</p>
              <h4>2. Purpose of Data Collection</h4><p>Collected information shall be used solely to improve website functionality, respond to user inquiries, manage subscriptions, and analyze audience engagement.</p>
              <h4>3. Data Sharing and Disclosure</h4><p>PiliKula does not sell, rent, or trade personal information to third parties. Information may be disclosed only when required by law or necessary to protect the platform's rights, safety, or integrity.</p>
              <h4>4. Cookies and Tracking Technologies</h4><p>The website may use cookies and similar technologies to enhance the user experience. Users can adjust browser settings to decline cookies, though this may affect certain functionality.</p>
              <h4>5. Data Security</h4><p>PiliKula implements reasonable administrative and technical measures to protect personal information. However, no method of data transmission over the Internet is entirely secure.</p>
              <h4>6. Third-Party Services</h4><p>The platform may use third-party tools that collect and process data in accordance with their own privacy policies. PiliKula assumes no responsibility for the practices of such third parties.</p>
              <h4>7. User Rights</h4><p>Users have the right to request access to, correction of, or deletion of their personal data, subject to applicable laws and regulations.</p>
              <h4>8. Policy Updates</h4><p>This Privacy Policy may be revised periodically. Continued use of the website signifies acceptance of such updates.</p>
            </template>
            <template v-if="activeModal === 'contact'">
              <p>For inquiries, feedback, or concerns regarding PiliKula, its content, or its policies, email us at <a href="mailto:pilikula.official@gmail.com" class="contact-email">pilikula.official@gmail.com</a></p>
            </template>
            <template v-if="activeModal === 'sinesuri'">
              <div class="sinesuri-modal-grid">
                <div class="sinesuri-modal-card" v-for="(film, i) in sinesuriFilms" :key="i" @click="openFilmDetail(film)">
                  <img :src="film.img" :alt="film.title" class="sinesuri-modal-poster" />
                  <div class="sinesuri-modal-hover">
                    <p class="sinesuri-year">{{ film.year }}</p>
                    <p class="sinesuri-name">{{ film.title }}</p>
                    <button class="sinesuri-play">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                      Play
                    </button>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="activeModal === 'usapang'">
              <div class="articles-modal-grid">
                <div class="article-modal-card" v-for="(art, i) in articles" :key="i" @click="openArticleDetail(art); closeModal()">
                  <div class="article-modal-img-wrap">
                    <img :src="art.img" :alt="art.title" class="article-modal-img" />
                    <div class="article-card-overlay"><span class="article-card-read">Read →</span></div>
                  </div>
                  <p class="article-modal-title">{{ art.title }}</p>
                </div>
              </div>
            </template>

            <!-- PAHAPYAW ALL VIDEOS -->
            <template v-if="activeModal === 'pahapyaw'">
              <div class="pahapyaw-modal-grid">
                <div
                  class="pahapyaw-modal-card"
                  v-for="(vid, i) in videos"
                  :key="i"
                  @click="openVideoDetail(vid); closeModal()"
                >
                  <div class="pahapyaw-thumb-wrap">
                    <img
                      :src="`https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`"
                      :alt="vid.title"
                      class="pahapyaw-thumb"
                    />
                    <div class="pahapyaw-thumb-overlay">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" opacity="0.9"><circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.5)"/><polygon points="10,8 17,12 10,16" fill="white"/></svg>
                    </div>
                  </div>
                  <p class="pahapyaw-modal-channel">{{ vid.channel }}</p>
                  <p class="pahapyaw-modal-title">{{ vid.title }}</p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </transition>

    <!-- ARTICLE DETAIL MODAL -->
    <transition name="modal-fade">
      <div v-if="selectedArticle" class="modal-backdrop" @click.self="closeArticleDetail">
        <div class="film-detail-box">
          <button class="modal-close film-close" @click="closeArticleDetail">✕</button>
          <div class="article-detail-top">
            <img :src="selectedArticle.img" :alt="selectedArticle.title" class="article-detail-banner" />
            <div class="article-detail-overlay"></div>
            <div class="article-detail-header-text">
              <p class="film-detail-label">Usapang PiliKula</p>
              <h2 class="article-detail-title">{{ selectedArticle.title }}</h2>
            </div>
          </div>
          <div class="film-detail-review">
            <p class="article-byline">by {{ selectedArticle.writer }} &nbsp;·&nbsp; <span class="article-source">{{ selectedArticle.source }}</span></p>
            <div class="film-review-body" style="margin-top:0.8rem">
              <p v-for="(para, i) in selectedArticle.body.split('\n\n')" :key="i">{{ para }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- FILM DETAIL MODAL -->
    <transition name="modal-fade">
      <div v-if="selectedFilm" class="modal-backdrop" @click.self="closeFilmDetail">
        <div class="film-detail-box">
          <button class="modal-close film-close" @click="closeFilmDetail">✕</button>
          <div class="film-detail-top">
            <img :src="selectedFilm.img" :alt="selectedFilm.title" class="film-detail-poster" />
            <div class="film-detail-meta">
              <p class="film-detail-label">Film Reviews</p>
              <h2 class="film-detail-title">{{ selectedFilm.title }} <span class="film-detail-year">({{ selectedFilm.year }})</span></h2>
              <p class="film-detail-synopsis">{{ selectedFilm.synopsis }}</p>
              <div class="film-detail-credits">
                <p><span class="credit-label">Director</span> {{ selectedFilm.director }}</p>
                <p><span class="credit-label">Stars</span> {{ selectedFilm.stars }}</p>
                <p><span class="credit-label">Written by</span> {{ selectedFilm.writer }}</p>
              </div>
            </div>
          </div>
          <div class="film-detail-review">
            <h3 class="film-review-heading">{{ selectedFilm.title }} ({{ selectedFilm.year }})</h3>
            <div class="film-review-body">
              <p v-for="(para, i) in selectedFilm.review.split('\n\n')" :key="i">{{ para }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- VIDEO DETAIL MODAL -->
    <transition name="modal-fade">
      <div v-if="selectedVideo" class="modal-backdrop" @click.self="closeVideoDetail">
        <div class="film-detail-box">
          <button class="modal-close film-close" @click="closeVideoDetail">✕</button>
          <!-- Embedded video -->
          <div class="video-detail-frame">
            <iframe
              :src="`https://www.youtube.com/embed/${selectedVideo.id}?rel=0&modestbranding=1&autoplay=1`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <!-- Info below -->
          <div class="film-detail-review">
            <p class="film-detail-label" style="margin-bottom:0.5rem">PahapYaw</p>
            <h3 class="film-review-heading">{{ selectedVideo.title }}</h3>
            <p class="article-byline" style="margin:0.3rem 0 0.8rem">{{ selectedVideo.channel }}</p>
            <p class="film-review-body" style="color:#b0b8d8;font-size:0.87rem;line-height:1.75">{{ selectedVideo.description }}</p>
            <a
              :href="`https://www.youtube.com/watch?v=${selectedVideo.id}`"
              target="_blank"
              rel="noopener noreferrer"
              class="watch-yt-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/></svg>
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.main-page { margin: 0; padding: 0; width: 100%; background: #0a0d1e; color: #e8eaf6; font-family: 'Trebuchet MS', sans-serif; overflow-x: hidden; }

/* NAVBAR */
.navbar { position: sticky; top: 0; left: 0; right: 0; z-index: 200; height: 68px; width: 100%; display: flex; align-items: center; justify-content: space-between; background: #07091a; padding: 0 1.6rem; margin: 0; box-shadow: 0 3px 0 0 #F5A623; flex-shrink: 0; }
.nav-left { display: flex; align-items: center; gap: 1.8rem; }
.nav-logo { height: 44px; width: auto; object-fit: contain; filter: brightness(1.1) drop-shadow(0 1px 6px rgba(0,0,0,0.6)); }
.nav-links { display: flex; gap: 1.4rem; }
.nav-links a { color: #c5cae9; text-decoration: none; font-size: 0.9rem; font-weight: 500; letter-spacing: 0.04em; transition: color 0.2s; }
.nav-links a:hover { color: #F5A623; }
.account-wrap { position: relative; }
.account-btn { display: flex; align-items: center; justify-content: center; width: 42px; height: 42px; border-radius: 50%; border: 2px solid #F5A623; background: transparent; color: #F5A623; cursor: pointer; transition: background 0.2s, color 0.2s; }
.account-btn:hover { background: #F5A623; color: #07091a; }
.account-dropdown { position: absolute; top: calc(100% + 10px); right: 0; background: #0f1328; border: 1px solid rgba(245,166,35,0.35); border-radius: 8px; min-width: 170px; box-shadow: 0 8px 28px rgba(0,0,0,0.55); overflow: hidden; z-index: 300; }
.dropdown-header { display: flex; align-items: center; gap: 0.6rem; padding: 0.85rem 1rem 0.6rem; color: #e8eaf6; font-size: 0.82rem; font-weight: 600; }
.dropdown-divider { border: none; border-top: 1px solid rgba(245,166,35,0.2); margin: 0 0.8rem; }
.logout-btn { display: flex; align-items: center; gap: 0.55rem; width: 100%; padding: 0.7rem 1rem; background: none; border: none; color: #e57373; font-family: 'Trebuchet MS', sans-serif; font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: background 0.18s; }
.logout-btn:hover { background: rgba(229,115,115,0.1); }
.drop-enter-active, .drop-leave-active { transition: opacity 0.18s, transform 0.18s; }
.drop-enter-from, .drop-leave-to { opacity: 0; transform: translateY(-6px); }

/* SNAP SECTIONS */
.snap-section { height: 100vh; display: flex; flex-direction: column; overflow: hidden; }
.snap-section.sinesuri-section { overflow: visible; height: 100vh; clip-path: inset(0 -100px); }

/* HERO */
.hero-banner { position: relative; height: calc(100vh - 68px); flex-shrink: 0; display: flex; align-items: flex-end; padding: 0 clamp(1.5rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 3rem); overflow: hidden; }
.hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; z-index: 0; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(4,7,22,0.88) 0%, rgba(4,7,22,0.25) 60%); z-index: 1; }
.hero-text { position: relative; z-index: 2; max-width: 480px; }
.hero-text p { font-size: clamp(1rem, 2.2vw, 1.35rem); color: #fff; line-height: 1.6; text-shadow: 0 1px 14px rgba(0,0,0,0.85); }
.hero-text strong { font-weight: 900; }

/* CONTENT SECTIONS */
.content-section { padding: clamp(1.4rem, 2.5vw, 2rem) clamp(1.5rem, 5vw, 3.5rem) clamp(1rem, 2vw, 1.5rem); justify-content: flex-start; overflow: hidden; }
.section-header { display: flex; align-items: baseline; justify-content: space-between; border-bottom: 2px solid #F5A623; padding-bottom: 0.35rem; margin-bottom: 1.2rem; width: 100%; }
.section-title { font-size: clamp(0.95rem, 1.8vw, 1.15rem); font-weight: 700; color: #e8eaf6; letter-spacing: 0.05em; }
.discover-link { font-size: clamp(0.65rem, 1vw, 0.78rem); color: #b0b8d8; text-decoration: none; transition: color 0.2s; }
.discover-link:hover { color: #F5A623; }

/* PAHAPYAW SLIDER */
.slider-wrap { display: flex; align-items: center; gap: 0.8rem; flex: 1; min-height: 0; width: 100%; }
.slider-viewport { flex: 1; overflow: hidden; border-radius: 8px; min-width: 0; }
.slider-track { display: flex; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); will-change: transform; }
.slide { min-width: 100%; flex-shrink: 0; }
.video-frame { position: relative; width: 100%; height: calc(100vh - 68px - 80px - 50px - 36px); max-height: 62vh; border-radius: 8px; overflow: hidden; background: #0d1020; box-shadow: 0 8px 32px rgba(0,0,0,0.6); }
.video-frame iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; border-radius: 8px; }
.slider-arrow { flex-shrink: 0; width: 42px; height: 42px; border-radius: 50%; background: rgba(245,166,35,0.15); border: 2px solid rgba(245,166,35,0.5); color: #F5A623; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s, transform 0.15s; z-index: 2; }
.slider-arrow:hover { background: #F5A623; color: #07091a; transform: scale(1.08); }
.slider-dots { display: flex; justify-content: center; gap: 0.45rem; padding: 0.6rem 0 0; flex-wrap: wrap; flex-shrink: 0; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(245,166,35,0.3); border: none; cursor: pointer; transition: background 0.2s, transform 0.2s; padding: 0; }
.dot.active { background: #F5A623; transform: scale(1.3); }

/* ARTICLES GRID */
.articles-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr); gap: 0.8rem; flex: 1; min-height: 0; }
.article-card-item { cursor: pointer; display: flex; flex-direction: column; gap: 0.4rem; border-radius: 6px; overflow: hidden; transition: transform 0.2s; }
.article-card-item:hover { transform: translateY(-3px); }
.article-card-img-wrap { position: relative; flex: 1; min-height: 0; overflow: hidden; border-radius: 6px; }
.article-card-img { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 6px; transition: transform 0.3s ease; }
.article-card-item:hover .article-card-img { transform: scale(1.05); }
.article-card-overlay { position: absolute; inset: 0; background: rgba(4,7,22,0); display: flex; align-items: center; justify-content: center; transition: background 0.25s; border-radius: 6px; }
.article-card-item:hover .article-card-overlay { background: rgba(4,7,22,0.55); }
.article-card-read { color: #F5A623; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; opacity: 0; transform: translateY(6px); transition: opacity 0.25s, transform 0.25s; }
.article-card-item:hover .article-card-read { opacity: 1; transform: translateY(0); }
.article-card-title { font-size: clamp(0.6rem, 0.9vw, 0.75rem); color: #c5cae9; font-weight: 600; line-height: 1.35; padding: 0 0.1rem; flex-shrink: 0; }

/* SINESURI */
.sinesuri-grid { display: grid; grid-template-columns: repeat(6, 1fr); grid-template-rows: repeat(2, 1fr); gap: 0.5rem; flex: 1; min-height: 0; overflow: hidden; padding: 0.5rem 0 0.8rem; }
.sinesuri-card { position: relative; border-radius: 6px; overflow: visible; cursor: pointer; z-index: 1; transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), z-index 0s 0.15s; min-height: 0; }
.sinesuri-card:hover { transform: scale(1.22); z-index: 50; transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), z-index 0s 0s; }
.sinesuri-card:nth-child(1):hover, .sinesuri-card:nth-child(7):hover  { transform-origin: left center;  transform: scale(1.22); }
.sinesuri-card:nth-child(6):hover, .sinesuri-card:nth-child(12):hover { transform-origin: right center; transform: scale(1.22); }
.sinesuri-poster { width: 100%; height: 100%; object-fit: cover; border-radius: 6px; display: block; }
.sinesuri-hover { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(7,9,26,0.98) 0%, rgba(7,9,26,0.55) 65%, transparent 100%); border-radius: 0 0 6px 6px; padding: 0.55rem 0.5rem 0.45rem; opacity: 0; transform: translateY(4px); transition: opacity 0.25s ease, transform 0.25s ease; }
.sinesuri-card:hover .sinesuri-hover { opacity: 1; transform: translateY(0); }
.sinesuri-year { font-size: 0.56rem; color: #F5A623; font-weight: 700; letter-spacing: 0.06em; }
.sinesuri-name { font-size: 0.6rem; color: #fff; font-weight: 700; line-height: 1.2; margin: 0.12rem 0; }
.sinesuri-play { display: flex; align-items: center; gap: 0.25rem; margin-top: 0.2rem; padding: 0.22rem 0.5rem; background: #fff; color: #07091a; border: none; border-radius: 3px; font-size: 0.55rem; font-weight: 800; cursor: pointer; width: fit-content; transition: background 0.2s; }
.sinesuri-play:hover { background: #e8e8e8; }

/* LAST SECTION */
.last-section { background: #0a0d1e; }
.awards-banner { flex: 1; background: linear-gradient(135deg, #0d1530 0%, #1a2245 50%, #0d1530 100%); display: flex; align-items: center; justify-content: center; }
.awards-content { display: flex; flex-direction: column; align-items: center; gap: 0.8rem; }
.awards-title { font-family: 'Trebuchet MS', sans-serif; font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900; text-align: center; line-height: 1.1; }
.awards-title .gold { color: #F5A623; }
.awards-title .wht  { color: #ffffff; }
.awards-sub { font-size: clamp(0.75rem, 1.2vw, 0.9rem); color: #c5cae9; letter-spacing: 0.06em; }
.vote-btn { margin-top: 0.5rem; padding: 0.5rem 1.8rem; border: 2px solid #F5A623; background: transparent; color: #F5A623; font-family: 'Trebuchet MS', sans-serif; font-size: clamp(0.75rem, 1.1vw, 0.88rem); font-weight: 700; letter-spacing: 0.08em; cursor: pointer; border-radius: 3px; transition: background 0.22s, color 0.22s; }
.vote-btn:hover { background: #F5A623; color: #07091a; }

/* FOOTER */
.footer { background: #07091a; padding: 1.2rem 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.55rem; }
.footer-logo { height: 32px; width: auto; object-fit: contain; filter: brightness(1.1) drop-shadow(0 1px 4px rgba(0,0,0,0.5)); }
.footer-nav { display: flex; gap: 0.7rem; flex-wrap: wrap; justify-content: center; align-items: center; }
.footer-nav a { color: #b0b8d8; text-decoration: underline; font-size: clamp(0.6rem, 0.95vw, 0.8rem); transition: color 0.2s; white-space: nowrap; }
.footer-nav a:hover { color: #F5A623; }
.footer-nav span { color: rgba(255,255,255,0.2); font-size: 0.72rem; }
.footer-socials { display: flex; gap: 0.8rem; }
.footer-socials a { color: #b0b8d8; display: flex; transition: color 0.2s, transform 0.18s; }
.footer-socials a:hover { color: #F5A623; transform: translateY(-2px); }
.footer-copy { font-size: clamp(0.52rem, 0.82vw, 0.7rem); color: rgba(176,184,216,0.4); text-align: center; }

/* RESPONSIVE */
@media (max-width: 768px) {
  .articles-grid { grid-template-columns: repeat(2, 1fr); }
  .sinesuri-grid { grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr); }
  .nav-links { display: none; }
}
@media (max-width: 400px) {
  .articles-grid { grid-template-columns: 1fr; }
  .sinesuri-grid { grid-template-columns: repeat(2, 1fr); }
}

/* MODALS */
.modal-backdrop { position: fixed; inset: 0; background: rgba(4, 7, 22, 0.85); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 1.5rem; backdrop-filter: blur(4px); }
.modal-box { background: #0f1225; border: 1px solid rgba(245,166,35,0.25); border-radius: 10px; width: 100%; max-width: 640px; max-height: 88vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.7); }
.modal-header { position: relative; height: 160px; flex-shrink: 0; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.modal-collage { position: absolute; inset: 0; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(2, 1fr); gap: 2px; }
.collage-img { width: 100%; height: 100%; object-fit: cover; }
.modal-header-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(7,9,26,0.55) 0%, rgba(7,9,26,0.82) 100%); }
.modal-title { position: relative; z-index: 2; font-family: 'Trebuchet MS', 'Franklin Gothic Medium', sans-serif; font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 900; color: #F5A623; letter-spacing: 0.12em; text-shadow: 0 2px 12px rgba(0,0,0,0.8); text-align: center; }
.modal-close { position: absolute; top: 0.8rem; right: 0.9rem; z-index: 10; background: rgba(0,0,0,0.5); border: 1px solid rgba(245,166,35,0.4); color: #e8eaf6; width: 30px; height: 30px; border-radius: 50%; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s, color 0.2s; }
.modal-close:hover { background: #F5A623; color: #07091a; }
.modal-body { overflow-y: auto; padding: 1.5rem 1.8rem 2rem; display: flex; flex-direction: column; gap: 1rem; scrollbar-width: thin; scrollbar-color: #F5A623 #0f1225; }
.modal-body::-webkit-scrollbar { width: 4px; }
.modal-body::-webkit-scrollbar-track { background: #0f1225; }
.modal-body::-webkit-scrollbar-thumb { background: #F5A623; border-radius: 2px; }
.modal-body p { font-size: clamp(0.78rem, 1.2vw, 0.88rem); color: #c5cae9; line-height: 1.75; }
.modal-body h4 { font-size: clamp(0.82rem, 1.3vw, 0.95rem); font-weight: 700; color: #e8eaf6; margin-top: 0.3rem; }
.contact-email { color: #F5A623; font-weight: 700; text-decoration: none; transition: opacity 0.2s; }
.contact-email:hover { opacity: 0.8; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; transform: scale(0.96); }

/* SINESURI MODAL GRID */
.sinesuri-modal-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.7rem; padding: 0.2rem 0; }
.sinesuri-modal-card { position: relative; border-radius: 6px; overflow: visible; cursor: pointer; z-index: 1; transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), z-index 0s 0.15s; }
.sinesuri-modal-card:hover { transform: scale(1.18); z-index: 50; transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), z-index 0s 0s; }
.sinesuri-modal-card:nth-child(4n+1):hover { transform-origin: left center; transform: scale(1.18); }
.sinesuri-modal-card:nth-child(4n):hover   { transform-origin: right center; transform: scale(1.18); }
.sinesuri-modal-poster { width: 100%; aspect-ratio: 2/3; object-fit: cover; border-radius: 6px; display: block; }
.sinesuri-modal-hover { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(7,9,26,0.98) 0%, rgba(7,9,26,0.55) 65%, transparent 100%); border-radius: 0 0 6px 6px; padding: 0.6rem 0.5rem 0.5rem; opacity: 0; transform: translateY(4px); transition: opacity 0.25s ease, transform 0.25s ease; }
.sinesuri-modal-card:hover .sinesuri-modal-hover { opacity: 1; transform: translateY(0); }

/* ARTICLES MODAL GRID */
.articles-modal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.9rem; }
.article-modal-card { cursor: pointer; display: flex; flex-direction: column; gap: 0.45rem; border-radius: 6px; overflow: hidden; transition: transform 0.2s; }
.article-modal-card:hover { transform: translateY(-3px); }
.article-modal-img-wrap { position: relative; border-radius: 6px; overflow: hidden; }
.article-modal-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; border-radius: 6px; transition: transform 0.3s; }
.article-modal-card:hover .article-modal-img { transform: scale(1.05); }
.article-modal-card:hover .article-card-overlay { background: rgba(4,7,22,0.55); }
.article-modal-title { font-size: 0.72rem; color: #c5cae9; font-weight: 600; line-height: 1.35; }

/* FILM & ARTICLE DETAIL MODAL */
.film-detail-box { background: #0a0d1e; border: 1px solid rgba(245,166,35,0.2); border-radius: 12px; width: 100%; max-width: 760px; max-height: 90vh; overflow-y: auto; position: relative; box-shadow: 0 24px 64px rgba(0,0,0,0.8); scrollbar-width: thin; scrollbar-color: #F5A623 #0a0d1e; }
.film-detail-box::-webkit-scrollbar { width: 4px; }
.film-detail-box::-webkit-scrollbar-track { background: #0a0d1e; }
.film-detail-box::-webkit-scrollbar-thumb { background: #F5A623; border-radius: 2px; }
.film-close { position: sticky; top: 0.7rem; float: right; margin: 0.7rem 0.7rem 0 0; z-index: 10; }
.film-detail-top { display: flex; gap: 1.6rem; padding: 1.8rem 1.8rem 1.2rem; align-items: flex-start; }
.film-detail-poster { width: clamp(130px, 18vw, 180px); flex-shrink: 0; border-radius: 8px; object-fit: cover; box-shadow: 0 8px 24px rgba(0,0,0,0.6); }
.film-detail-meta { display: flex; flex-direction: column; gap: 0.55rem; flex: 1; }
.film-detail-label { font-size: 0.7rem; font-weight: 700; color: #F5A623; letter-spacing: 0.1em; text-transform: uppercase; border-bottom: 2px solid #F5A623; padding-bottom: 0.25rem; width: fit-content; }
.film-detail-title { font-family: 'Trebuchet MS', sans-serif; font-size: clamp(1.2rem, 3vw, 1.8rem); font-weight: 900; color: #F5A623; line-height: 1.15; letter-spacing: 0.04em; }
.film-detail-year { color: #e8eaf6; font-size: 0.85em; }
.film-detail-synopsis { font-size: clamp(0.75rem, 1.1vw, 0.85rem); color: #b0b8d8; line-height: 1.65; }
.film-detail-credits { display: flex; flex-direction: column; gap: 0.2rem; margin-top: 0.3rem; }
.film-detail-credits p { font-size: clamp(0.7rem, 1vw, 0.8rem); color: #8890b0; }
.credit-label { color: #F5A623; font-weight: 700; margin-right: 0.4rem; }
.film-detail-review { background: #07091a; padding: 1.5rem 1.8rem 2rem; border-top: 1px solid rgba(245,166,35,0.15); }
.film-review-heading { font-family: 'Trebuchet MS', sans-serif; font-size: clamp(1rem, 2vw, 1.25rem); font-weight: 800; color: #e8eaf6; margin-bottom: 1rem; }
.film-review-body { display: flex; flex-direction: column; gap: 0.85rem; }
.film-review-body p { font-size: clamp(0.75rem, 1.1vw, 0.87rem); color: #b0b8d8; line-height: 1.8; }

/* ARTICLE DETAIL */
.article-detail-top { position: relative; height: 180px; overflow: hidden; flex-shrink: 0; }
.article-detail-banner { width: 100%; height: 100%; object-fit: cover; }
.article-detail-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(7,9,26,0.3) 0%, rgba(7,9,26,0.85) 100%); }
.article-detail-header-text { position: absolute; bottom: 1.2rem; left: 1.8rem; right: 1.8rem; z-index: 2; }
.article-detail-title { font-family: 'Trebuchet MS', sans-serif; font-size: clamp(1rem, 2.5vw, 1.5rem); font-weight: 900; color: #F5A623; line-height: 1.2; letter-spacing: 0.03em; }
.article-byline { font-size: 0.75rem; color: #8890b0; margin-bottom: 0.2rem; }
.article-source { color: #F5A623; font-weight: 600; }

/* PAHAPYAW INFO BAR */
.pahapyaw-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(245,166,35,0.08);
  border: 1px solid rgba(245,166,35,0.2);
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
  margin-top: 0.4rem;
}
.pahapyaw-info:hover { background: rgba(245,166,35,0.16); }
.pahapyaw-info-text { display: flex; flex-direction: column; gap: 0.12rem; }
.pahapyaw-channel { font-size: 0.62rem; color: #F5A623; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
.pahapyaw-title { font-size: clamp(0.7rem, 1.1vw, 0.85rem); color: #e8eaf6; font-weight: 600; }
.pahapyaw-more { font-size: 0.7rem; color: #F5A623; font-weight: 700; white-space: nowrap; margin-left: 1rem; }

/* PAHAPYAW DISCOVER MODAL GRID */
.pahapyaw-modal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
}
.pahapyaw-modal-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.2s;
}
.pahapyaw-modal-card:hover { transform: translateY(-3px); }
.pahapyaw-thumb-wrap {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}
.pahapyaw-thumb {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
  border-radius: 6px;
  transition: transform 0.3s;
}
.pahapyaw-modal-card:hover .pahapyaw-thumb { transform: scale(1.04); }
.pahapyaw-thumb-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(4,7,22,0);
  transition: background 0.2s;
  border-radius: 6px;
}
.pahapyaw-modal-card:hover .pahapyaw-thumb-overlay { background: rgba(4,7,22,0.4); }
.pahapyaw-modal-channel { font-size: 0.6rem; color: #F5A623; font-weight: 700; letter-spacing: 0.05em; }
.pahapyaw-modal-title { font-size: 0.7rem; color: #c5cae9; font-weight: 600; line-height: 1.35; }

/* VIDEO DETAIL MODAL */
.video-detail-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
  flex-shrink: 0;
}
.video-detail-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.watch-yt-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem 1.2rem;
  background: #ff0000;
  color: #fff;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}
.watch-yt-btn:hover { background: #cc0000; transform: translateY(-2px); }
</style>