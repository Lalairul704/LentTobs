const chalk = require('chalk')
const fs = require('fs')

exports.prefix = (prefix) => {
  return prefix
}

global.tampilanmenu = (prefix) => {
  return `

━━━━━━━━〔 *DOMPET* 〕
• ${prefix}topbalance
• ${prefix}buylimit
• ${prefix}transfer
• ${prefix}checklimit
• ${prefix}balance

━━━━━━ 〔 *AUTORES* 〕

• ${prefix}autorespon

━━━━━━〔 *IMAGEPROSES* 〕

・${prefix}prompt
・${prefix}imagetopixel
・${prefix}imagetopencil
・${prefix}cembung
・${prefix}mendeteksiwajah
・${prefix}deteksiumur

━━━━━━ 〔 *KALKULATOR* 〕

・${prefix}tambah
・${prefix}kali
・${prefix}kurang
・${prefix}bagi

━━━━━━ 〔 *QC* 〕

・${prefix}qcred
・${prefix}qcgreen
・${prefix}qcblue
・${prefix}qcpurple
・${prefix}qcaquamarine
・${prefix}qcazure
・${prefix}qcantiquewhite
・${prefix}qcaliceblue
・${prefix}qcblueviolet
・${prefix}qcbrown
・${prefix}qcchartreuse
・${prefix}qccoral

━━━━━━ 〔 *GRUB* 〕

・${prefix}gclink
・${prefix}listadmin
・${prefix}group close
・${prefix}group open
・${prefix}ephemeral
・${prefix}setgcpp
・${prefix}setname
・${prefix}setdesc
・${prefix}group
・${prefix}id
・${prefix}resetgrouplink
・${prefix}editinfo
・${prefix}add
・${prefix}kick
・${prefix}hidetag
・${prefix}tagall
・${prefix}antilink
・${prefix}sider
・${prefix}antiwame
・${prefix}promote
・${prefix}demote
・${prefix}react
・${prefix}vote
・${prefix}devote
・${prefix}upvote
・${prefix}checkvote
・${prefix}delvote
・${prefix}colongpp
・${prefix}listonline
・${prefix}sider

━━━━━━ 〔 *ANON* 〕

・${prefix}anonymous
・${prefix}mulai
・${prefix}next
・${prefix}keluar
│┝›〔 *MENFES* 〕
・${prefix}menfes
・${prefix}balas
・${prefix}leave

━━━━━━ 〔 *AI* 〕

・${prefix}openai
・${prefix}openai2
・${prefix}ai
・${prefix}ai2
・${prefix}mbah
・${prefix}dokter
・${prefix}imageai
・${prefix}stablediff
・${prefix}jadianime
・${prefix}jadianime2
・${prefix}animestablediff
・${prefix}diffusion
・${prefix}difusion2
・${prefix}whatthisanime
・${prefix}mendeteksiwajah
・${prefix}deteksiumur
・${prefix}nsfwcek
・${prefix}prompt
・${prefix}lexica
・${prefix}remini2
・${prefix}dalle
・${prefix}dalle2
・${prefix}dalleanime
・${prefix}aidraw
・${prefix}warnain
・${prefix}remini
・${prefix}remini2


━━━━━━ 〔 *CRT* 〕

・${prefix}jadianime
・${prefix}imagetopixel 
・${prefix}imagetopencil 
・${prefix}cembung
・${prefix}jadiskul
・${prefix}invoice1
・${prefix}jadianime2
・${prefix}jadianime3
・${prefix}jadizombie
・${prefix}toart
・${prefix}warnain
・${prefix}diffusion
・${prefix}diffusion2
・${prefix}remini
・${prefix}remini2
・${prefix}imgtohoror1
・${prefix}imgtohoror2
・${prefix}imgtohoror3
・${prefix}yasuo
・${prefix}blurfilter
・${prefix}renaissance

━━━━━━ 〔 *WALLPAPER* 〕

・${prefix}aesthetic
・${prefix}blackpink
・${prefix}bike
・${prefix}boneka
・${prefix}car
・${prefix}chinese
・${prefix}cosplay
・${prefix}coffee
・${prefix}couplepicture
・${prefix}doggo
・${prefix}gamer
・${prefix}hacking
・${prefix}hijab
・${prefix}japanese
・${prefix}indo
・${prefix}kayes
・${prefix}korean
・${prefix}kpop
・${prefix}lizard
・${prefix}malay
・${prefix}kpop
・${prefix}meow
・${prefix}notnot
・${prefix}ppcouple2
・${prefix}profilepicture
・${prefix}pubg
・${prefix}randomboy
・${prefix}randomgirl
・${prefix}rose
・${prefix}ryujin
・${prefix}teknologi
・${prefix}thai
・${prefix}ulzzangboy
・${prefix}ulzzanggirl
・${prefix}wallml
・${prefix}wallpapercyber
・${prefix}wallpaperanimex
・${prefix}wallpaperislami
・${prefix}wallpapermeme
・${prefix}wallpapergamer
・${prefix}wallphone
・${prefix}woof
・${prefix}bts
・${prefix}exo
・${prefix}elf
・${prefix}loli
・${prefix}neko
・${prefix}waifu
・${prefix}anim shota
・${prefix}anim husbu
・${prefix}anim sagiri
・${prefix}anim shinobi
・${prefix}anim husbu
・${prefix}anim shinobu
・${prefix}anim mehumin
・${prefix}anim wallanime 

━━━━━━ 〔 *MAKER* 〕

・${prefix}attp < text >
・${prefix}attp2 < text >
・${prefix}ttp1 < text >
・${prefix}ttp2 < text >
・${prefix}ttp3 < text >
・${prefix}ttp4 < text >
・${prefix}tpp5 < text >
・${prefix}ttp6 < text >

━━━━━━ 〔 *WALL ANIME* 〕

・${prefix}animawall 
・${prefix}animawall2 
・${prefix}bite
・${prefix}blush
・${prefix}bonk
・${prefix}bully
・${prefix}cringe
・${prefix}cry
・${prefix}cuddle
・${prefix}dance
・${prefix}awoo
・${prefix}cuddle
・${prefix}cry
・${prefix}glomp
・${prefix}handhold
・${prefix}happy
・${prefix}highfive
・${prefix}kiss
・${prefix}lick
・${prefix}megumin
・${prefix}neko
・${prefix}nom
・${prefix}pat
・${prefix}poke
・${prefix}slap
・${prefix}smile
・${prefix}smug
・${prefix}lap
・${prefix}smug
・${prefix}wave
・${prefix}wlp
・${prefix}wink
・${prefix}yeet
・${prefix}avatar
・${prefix}awoo
・${prefix}bully
・${prefix}couplepp
・${prefix}cringe
・${prefix}cry
・${prefix}dance
・${prefix}feed
・${prefix}foxgirl
・${prefix}gecg
・${prefix}gura
・${prefix}handhold
・${prefix}happy
・${prefix}highfive
・${prefix}hug
・${prefix}husbu
・${prefix}kiss
・${prefix}lick
・${prefix}loli-waifu
・${prefix}neko
・${prefix}neko2
・${prefix}nom
・${prefix}pat
・${prefix}randomanime
・${prefix}randomart
・${prefix}randomloli
・${prefix}randombite
・${prefix}randombts
・${prefix}randombully
・${prefix}shinobu
・${prefix}shota
・${prefix}slap
・${prefix}smile
・${prefix}smug
・${prefix}tickle
・${prefix}waifu
・${prefix}waifu2
・${prefix}wave

━━━━━━ 〔 *CERPEN* 〕

・${prefix}ceritahoror
・${prefix}cerpen-sejarah
・${prefix}cerpen-sedih
・${prefix}cerpen-sastra
・${prefix}cerpen-romantis
・${prefix}cerpen-rohani
・${prefix}cerpen-rindu
・${prefix}cerpen-remaja
・${prefix}cerpen-ramadhan
・${prefix}cerpen-petualangan
・${prefix}cerpen-persahabatan
・${prefix}cerpen-perpisahan
・${prefix}cerpen-perjuangan
・${prefix}cerpen-penyesalan
・${prefix}cerpen-pengorbanan
・${prefix}cerpen-pengalaman
・${prefix}cerpen-pendidikan
・${prefix}cerpen-penantian
・${prefix}cerpen-patahhati
・${prefix}cerpen-olahraga
・${prefix}cerpen-nasionalisme
・${prefix}cerpen-nasihat
・${prefix}cerpen-motifasi
・${prefix}cerpen-misteri
・${prefix}cerpen-mengharukan
・${prefix}cerpen-malaysia
・${prefix}cerpen-liburan
・${prefix}cerpen-kristen
・${prefix}cerpen-korea
・${prefix}cerpen-kisahnyata
・${prefix}cerpen-keluarga
・${prefix}cerpen-kehidupan
・${prefix}cerpen-jepang 
・${prefix}cerpen-inspirstif
・${prefix}cerpen-gokil
・${prefix}cerpen-galau
・${prefix}cerpen-cintasejati
・${prefix}cerpen-cintasegitiga
・${prefix}cerpen-cintasedih
・${prefix}cerpen-cintaromantis
・${prefix}cerpen-cintapertama
・${prefix}cerpen-cintaislami
・${prefix}cerpen-cinta
・${prefix}cerpen-budaya
・${prefix}cerpen-bahasajawa
・${prefix}cerpen-bahasasunda
・${prefix}cerpen-bahasainggris
・${prefix}cerpen-bahasadaerah
・${prefix}cerpen-anak

━━━━━━ 〔 *FUN GAME* 〕

・${prefix}artinama
・${prefix}piatu
・${prefix}jadian
・${prefix}jodohku
・${prefix}delttt
・${prefix}tictactoe
・${prefix}family100
・${prefix}tebak lagu
・${prefix}tebak gambar
・${prefix}tebak caklontong
・${prefix}tebak kalimat
・${prefix}math [mode]
・${prefix}suitpvp [@tag]
・${prefix}casino
・${prefix}delcasino
・${prefix}adunasib
・${prefix}tebaklirik
・${prefix}cekmati
・${prefix}suitwithbot
・${prefix}puisi
・${prefix}namarandom
・${prefix}quotesimage
・${prefix}quotesanimebijak
・${prefix}truth
・${prefix}dare
・${prefix}tictactoe
・${prefix}math [mode]
・${prefix}say [text]
・${prefix}goblokcek 
・${prefix}jelekcek 
・${prefix}rate
・${prefix}haram
・${prefix}gaycek
・${prefix}lesbicek
・${prefix}gantengcek 
・${prefix}cantikcek
・${prefix}begocek 
・${prefix}suhucek
・${prefix}pintercek
・${prefix}jagocek
・${prefix}nolepcek
・${prefix}babicek
・${prefix}bebancek
・${prefix}baikcek
・${prefix}jahatcek
・${prefix}anjingcek
・${prefix}haramcek
・${prefix}pakboycek
・${prefix}pakgirlcek
・${prefix}sangecek 
・${prefix}bapercek
・${prefix}fakboycek
・${prefix}alimcek
・${prefix}suhucek
・${prefix}fakgirlcek
・${prefix}kerencek
・${prefix}wibucek
・${prefix}pasarkascek
・${prefix}charactercheck [tag]
・${prefix}cerhantu
・${prefix}lovelycheck [tag]
・${prefix}couple
・${prefix}soulmate
・${prefix}hot
・${prefix}sexy
・${prefix}kind
・${prefix}idiot
・${prefix}handsome
・${prefix}beautiful
・${prefix}cute
・${prefix}pretty
・${prefix}lesbian
・${prefix}noob
・${prefix}bastard
・${prefix}foolish
・${prefix}halah
・${prefix}hilih
・${prefix}huluh
・${prefix}heleh
・${prefix}holoh
・${prefix}nerd
・${prefix}asshole
・${prefix}gay
・${prefix}smart
・${prefix}stubble
・${prefix}dog
・${prefix}horny
・${prefix}cunt
・${prefix}wibu
・${prefix}noobra
・${prefix}nibba
・${prefix}nibbi
・${prefix}comrade
・${prefix}mumu
・${prefix}rascal
・${prefix}scumbag
・${prefix}nuts
・${prefix}fagot
・${prefix}scoundrel
・${prefix}ditch
・${prefix}dope
・${prefix}gucci
・${prefix}lit
・${prefix}dumbass
・${prefix}crackhead
・${prefix}mf
・${prefix}motherfucker
・${prefix}sucker
・${prefix}fuckboy
・${prefix}playboy
・${prefix}fuckgirl
・${prefix}playgirl
・${prefix}quot1

━━━━━━ 〔 *INFO* 〕

・${prefix}jalantikus
・${prefix}infogempa
・${prefix}weather
・${prefix}myapikey
・${prefix}cekapikey
・${prefix}infokota
・${prefix}hexcode
・${prefix}cekresi
・${prefix}drakorongoing
・${prefix}lk21
・${prefix}wattpad
・${prefix}wattpadsearch
・${prefix}pixiv
・${prefix}pixivdl

━━━━━━ 〔 *ISLAMIC* 〕

・${prefix}alquran
・${prefix}alquranaudio
・${prefix}kisahnabi
・${prefix}jadwalsholat
・${prefix}asmaulhusna

━━━━━━ 〔 *SHORT* 〕

・${prefix}shortlink1
・${prefix}shortlink2
・${prefix}shortlink3
・${prefix}shortlink4
・${prefix}ouolink    

━━━━━━ 〔 *PRIMBON* 〕

・${prefix}nomorhoki
・${prefix}artimimpi
・${prefix}ramalanjodoh
・${prefix}ramalanjodohbali
・${prefix}ramalancinta
・${prefix}ramalannasib
・${prefix}suamiistri
・${prefix}kecocokannama
・${prefix}kecocokanpasangan
・${prefix}artinama2
・${prefix}jadianpernikahan
・${prefix}sifatusaha
・${prefix}pekerjaan
・${prefix}rejeki
・${prefix}penyakit
・${prefix}tarot
・${prefix}fengshui 
・${prefix}haribaik
・${prefix}harikeren
・${prefix}harisial
・${prefix}harinaga
・${prefix}arahrejeki
・${prefix}peruntungan
・${prefix}wetonjawa
・${prefix}sifat
・${prefix}keberuntungan
・${prefix}memancing
・${prefix}masasubur
・${prefix}zodiak
・${prefix}shio

━━━━━━ 〔 *TTOVOICE* 〕

・${prefix}ttsinglish
・${prefix}ttsind
・${prefix}ttsjpn    

━━━━━━ 〔 *OWNER PREM* 〕

・${prefix}!premium add <tag>30day
・${prefix}!premium del <tag>
・${prefix}!resetlimit
・${prefix}listpremiun
・${prefix}checkpremium
・${prefix}setpp 
・${prefix}self
・${prefix}pushkontak [perbaikan]
・${prefix}public
・${prefix}join [link]
・${prefix}leavegc
・${prefix}setpp [image]
・${prefix}block [tag/number]
・${prefix}unblock [tag/number]

━━━━━━ 〔 *DOWNLOAD PCTRS* 〕

・${prefix}videohentai
・${prefix}xnxxsearch
・${prefix}unsplash [query]
・${prefix}xnxxdl
・${prefix}pixiv
・${prefix}pixivsearch
・${prefix}jooxplay
・${prefix}fotocp (New)
・${prefix}tiktok [url]
・${prefix}tiktokaudio [url]
・${prefix}instagram [url]
・${prefix}spotify [url]
・${prefix}mediafire [url]
・${prefix}ytmp3 [url|quality]
・${prefix}ytmp4 [url|quality]
・${prefix}play [query]
・${prefix}gitclone [repo link]
・${prefix}song [query]
・${prefix}yts [query]
・${prefix}lyrics [query]
・${prefix}gimage [query]
・${prefix}google [query]
・${prefix}anime [query]
・${prefix}pinterest [query]
・${prefix}image [query]
・${prefix}wallpaper [query]
・${prefix}searchno [number]
・${prefix}horoscope [query]
・${prefix}imdb [movie name]
・${prefix}weather [loc name]
・${prefix}genshin [char name]
・${prefix}wikimedia [query]
・${prefix}ytsearch [query]

━━━━━━ 〔 *VCNGERS* 〕

・${prefix}ringtone [query]
・${prefix}tourl[reply image/video]
・${prefix}toqr [reply text]
・${prefix}toimage [reply stick]
・${prefix}sticker [reply img|gif]
・${prefix}take [reply img|gif|stik]
・${prefix}smeme [reply img]
・${prefix}emoji [emoji]
・${prefix}tovideo [reply img]
・${prefix}togif [reply stick]
・${prefix}tovn [reply aud]
・${prefix}tomp3 [reply vn]
・${prefix}toaudio [reply vid]
・${prefix}ebinary [reply txt]
・${prefix}dbinary [reply txt]
・${prefix}tinyurl [link]
・${prefix}styletext [text]
・${prefix}volume [reply aud]
・${prefix}bass [reply aud]
・${prefix}blown [reply aud]
・${prefix}deep [reply aud]
・${prefix}earrape [reply aud]
・${prefix}fast [reply aud]
・${prefix}fat [reply aud]
・${prefix}nightcore [reply aud]
・${prefix}reverse [reply aud]
・${prefix}robot [reply aud]
・${prefix}slow [reply aud]
・${prefix}smooth [reply aud]
・${prefix}squirrel [reply aud]
・${prefix}afk
・${prefix}id
・${prefix}toqr [link]
・${prefix}repeat
・${prefix}readmore [text]
・${prefix}toviewonce
・${prefix}fliptext [text]]
・${prefix}chatinfo
・${prefix}alive
・${prefix}ping
・${prefix}owner
・${prefix}menu
・${prefix}delete
・${prefix}quoted
・${prefix}listpc
・${prefix}listgc
・${prefix}donate
・${prefix}chord
・${prefix}ssweb
・${prefix}myip
・${prefix}request
・${prefix}report [bug]
・${prefix}removebg [reply img]

━━━━━━ 〔 *ASUPAN* 〕

・${prefix}tiktokgirl	
・${prefix}tiktoknukhty
・${prefix}tiktokpanrika
・${prefix}tiktokkayes
・${prefix}tiktoknotnot
・${prefix}tiktokghea
・${prefix}tiktoksantuy
・${prefix}tiktokbocil

━━━━━━ 〔 *EMOJI* 〕

・${prefix}facebookemoji
・${prefix}iphoneemoji
・${prefix}samsungemoji
・${prefix}joyemoji
・${prefix}skypeemoji
・${prefix}twitteremoji
・${prefix}whatsappemoji
・${prefix}microsoftemoji
・${prefix}googleemoji
・${prefix}pediaemoji
・${prefix}microsoftemoji

━━━━━━ 〔 *MEME* 〕

・${prefix}darkjoke
・${prefix}memeindo
・${prefix}randommeme

━━━━━━ 〔 *GGOGLE* 〕

・${prefix}google < Query >
・${prefix}gimage < Query >
・${prefix}googleimage < Query >
・${prefix}googleimage2 < Query >

━━━━━━ 〔 *STALKING* 〕

・${prefix}stalknickaov
・${prefix}stalknickchess
・${prefix}stalkbigo
・${prefix}stalkcocofun
・${prefix}stalkig
・${prefix}stalkgithub
・${prefix}stalktwitter
・${prefix}stalktiktok

━━━━━━ 〔 *ENCRYPT* 〕

・${prefix}binary < Query >
・${prefix}encodebinary < Query>
・${prefix}ebinary < Query >
・${prefix}dbinary < Query >
・${prefix}codemorse < Query ><

━━━━━━ 〔 *INTERNET* 〕

・${prefix}taugaksih
・${prefix}faktaunik
・${prefix}motivasi
・${prefix}katabijak

━━━━━━ 〔 *WEBSITE* 〕

・${prefix}webultah
・${prefix}webdeface
・${prefix}websad
・${prefix}websad1

━━━━━━ 〔 *FILTER* 〕

・${prefix}pkifilter < reply img >
・${prefix}circlefilter < reply img >
・${prefix}brightfilter < replyimg >
・${prefix}blurfilter < replyimg >
・${prefix}cardfilter < replyimg >
・${prefix}grayscale < replyimg >
・${prefix}gayfilter < replyimg >
・${prefix}contrasfilter < replyimg >
・${prefix}xprofilter < replyimg >
・${prefix}willowfilter < replyimg >
・${prefix}waldenfilter < replyimg >
・${prefix}valenciafilter < replyimg >
・${prefix}toasterfilter < replyimg >
・${prefix}stinsonfilter < replyimg >
・${prefix}slumberfilter < replyimg >
・${prefix}reyesfilter < replyimg >
・${prefix}perpetuafilter < replyimg >
・${prefix}vilefilter < replyimg >
・${prefix}moonfilter < replyimg >
・${prefix}mayfairfilter < replyimg >
・${prefix}kelvinfilter < replyimg >
・${prefix}inkwellfilter < replyimg >
・${prefix}hudsonfilter < replyimg >
・${prefix}brannanfilter < replyimg >
・${prefix}deepfryfilter < replyimg >
・${prefix}facepalmfilter < replyimg >
・${prefix}1977filter < replyimg >
・${prefix}adenfilter < replyimg >
・${prefix}broklinfilter < replyimg >
・${prefix}earlybirdfilter < replyimg >
・${prefix}ginghamfilter < replyimg >
・${prefix}larkfilter < replyimg >
・${prefix}lofifilter < replyimg >
・${prefix}mavenfilter < replyimg >
・${prefix}risefilter < replyimg >

━━━━━━ 〔 *TEXTPRO* 〕

・${prefix}blackpink text
・${prefix}neon text
・${prefix}greenneon text
・${prefix}advanceglow text
・${prefix}futureneon text
・${prefix}sandwriting text
・${prefix}sandsummer text
・${prefix}sandengraved text
・${prefix}metaldark text
・${prefix}neonlight text
・${prefix}holographic text
・${prefix}text1917 text
・${prefix}minion text
・${prefix}deluxesilver text
・${prefix}newyearcard text
・${prefix}bloodfrosted text
・${prefix}halloween text
・${prefix}jokerlogo text
・${prefix}fireworksparkle text
・${prefix}natureleaves text
・${prefix}bokeh text
・${prefix}toxic text
・${prefix}strawberry text
・${prefix}box3d text
・${prefix}roadwarning text
・${prefix}breakwall text
・${prefix}icecold text
・${prefix}luxury text
・${prefix}cloud text
・${prefix}summersand text
・${prefix}horrorblood text
・${prefix}thunder text
・${prefix}pornhub text1 text2
・${prefix}glitch text1 text2
・${prefix}avenger text1 text2
・${prefix}space text1 text2
・${prefix}ninjalogo text1 text2
・${prefix}marvelstudio text1 text2
・${prefix}lionlogo text1 text2
・${prefix}wolflogo text1 text2
・${prefix}steel3d text1 text2
・${prefix}wallgravity text1 text2

━━━━━━ 〔 *POXXY* 〕

・${prefix}shadow text
・${prefix}cup text
・${prefix}cup1 text
・${prefix}romance text
・${prefix}smoke text
・${prefix}burnpaper text
・${prefix}lovemessage text
・${prefix}undergrass text
・${prefix}love text
・${prefix}coffe text
・${prefix}woodheart text
・${prefix}woodenboard text
・${prefix}summer3d text
・${prefix}wolfmetal text
・${prefix}nature3d text
・${prefix}underwater text
・${prefix}goldenrose text
・${prefix}summernature text
・${prefix}letterleaves text
・${prefix}glowingneon text
・${prefix}fallleaves text
・${prefix}flamming text
・${prefix}harrypotter text
・${prefix}carvedwood text
・${prefix}tiktok text1 text2
・${prefix}arcade8bit text1 text2
・${prefix}battlefield4 text1 text2
・${prefix}pubg text1 text2

━━━━━━ 〔 *P360* 〕

・${prefix}wetglass text
・${prefix}multicolor3d text
・${prefix}watercolor text
・${prefix}luxurygold text
・${prefix}galaxywallpaper text
・${prefix}lighttext text
・${prefix}beautifulflower text
・${prefix}puppycute text
・${prefix}royaltext text
・${prefix}heartshaped text
・${prefix}birthdaycake text
・${prefix}galaxystyle text
・${prefix}hologram3d text
・${prefix}greenneon text
・${prefix}glossychrome text
・${prefix}greenbush text
・${prefix}metallogo text
・${prefix}noeltext text
・${prefix}glittergold text
・${prefix}textcake text
・${prefix}starsnight text
・${prefix}wooden3d text
・${prefix}textbyname text
・${prefix}writegalacy text
・${prefix}galaxybat text
・${prefix}snow3d text
・${prefix}birthdayday text
・${prefix}goldplaybutton text
・${prefix}silverplaybutton text
・${prefix}freefire text

━━━━━━ 〔 *NSF+LOLI* 〕

・${prefix}nsfwechi
・${prefix}nsfwechi2
・${prefix}nsfwcum
・${prefix}nsfwclasic
・${prefix}nsfwbj1
・${prefix}nsfwbj2
・${prefix}nsfwbj3
・${prefix}nsfwbj4
・${prefix}nsfwsusugede
・${prefix}nsfwavatar
・${prefix}chiisaihentai
・${prefix}trap
・${prefix}blowjob
・${prefix}yaoi
・${prefix}ecchi
・${prefix}hentai
・${prefix}ahegao
・${prefix}hololewd
・${prefix}sideoppai
・${prefix}animefeets
・${prefix}animebooty
・${prefix}animethighss
・${prefix}hentaiparadise
・${prefix}animearmpits
・${prefix}hentaifemdom
・${prefix}lewdanimegirls
・${prefix}biganimetiddies
・${prefix}animebellybutton
・${prefix}hentai4everyone
・${prefix}nsfwthigh
・${prefix}nsfwfetis
・${prefix}nsfwahageo
・${prefix}nsfwanal
・${prefix}nsfwbooty
・${prefix}nsfwarmpits
・${prefix}bokeps (prem)
・${prefix}gifhentai
・${prefix}gifblowjob
・${prefix}hentaivideo
・${prefix}hneko
・${prefix}nwaifu
・${prefix}animespank
・${prefix}trap
・${prefix}gasm
・${prefix}ahegao
・${prefix}ass
・${prefix}bdsm
・${prefix}blowjob
・${prefix}cuckold
・${prefix}cum
・${prefix}milf
・${prefix}eba
・${prefix}ero
・${prefix}femdom
・${prefix}foot
・${prefix}gangbang
・${prefix}glasses
・${prefix}hentai
・${prefix}jahy
・${prefix}manga
・${prefix}masturbation
・${prefix}neko-hentai
・${prefix}neko-hentai2
・${prefix}nsfwloli
・${prefix}orgy
・${prefix}panties
・${prefix}pussy
・${prefix}tentacles
・${prefix}thights
・${prefix}yuri
・${prefix}zettai
・${prefix}eroholo
・${prefix}eroyuri
・${prefix}erokemo
・${prefix}femdom2   

━━━━━━ 〔 *DATABASE* 〕

・${prefix}setcmd
・${prefix}listcmd
・${prefix}delcmd
・${prefix}lockcmd
・${prefix}addmsg
・${prefix}listmsg
・${prefix}getmsg
・${prefix}delmsg
・${prefix}dashboard

━━━━━━ 〔 *MAKERSERTI* 〕

・${prefix}makequotes1
・${prefix}makequotes2
・${prefix}botcommand
・${prefix}changemymind
・${prefix}ytcomment
・${prefix}tweetcomment
・${prefix}trumpcomment
・${prefix}qc < reply text ~ text>
・${prefix}qc2 < img color text >
・${prefix}badboyserti
・${prefix}badgirlserti
・${prefix}bucinserti
・${prefix}fuckboyserti
・${prefix}fuckgirlserti
・${prefix}goodboyserti
・${prefix}goodgirlserti
・${prefix}pacarserti
・${prefix}maidoserti
・${prefix}lt3putriserti
・${prefix}lt3putraserti
・${prefix}piagamserti

━━━━━━ 〔 *EDUKASI* 〕
・${prefix}brainly
・${prefix}roboguru
・${prefix}kbbi
・${prefix}wikipedia 

━━━━━━ 〔 *WIBU* 〕
・${prefix}character
・${prefix}manga
・${prefix}animelist
・${prefix}otakudesu
・${prefix}otakudesu
・${prefix}manga
・${prefix}anime 
・${prefix}videoanime
・${prefix}anim husbu
・${prefix}anim waifu
・${prefix}anim milf
・${prefix}anim neko
・${prefix}anim kanna
・${prefix}anim sagiri
・${prefix}hentai
・${prefix}cosplay
・${prefix}anim wallpaperanime
・${prefix}kusonime
・${prefix}anim megumin
・${prefix}otakudesu
・${prefix}doujindesu
・${prefix}storyanime
・${prefix}anim nakanomiku
・${prefix}anim nakanonino
・${prefix}anim nakanoitsuki
・${prefix}otakuongoing
・${prefix}nhentai *code*
・${prefix}nekopoi *link*
・${prefix}nekopoisearch
・${prefix}nekosearch [query]
・${prefix}nekodl [id]
━━━━━━━━━━━
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})