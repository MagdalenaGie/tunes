import reducer from './reducer';

test('SEARCH_FOR_ALBUMS', () => {
  let state;
  state = reducer({results:[],songs:[],resErr:'',songErr:''}, {type:'SEARCH_FOR_ALBUMS',results:[{wrapperType:'collection',collectionType:'Album',artistId:990251418,collectionId:1440654210,amgArtistId:3084392,artistName:'The Monks of Norcia',collectionName:'BENEDICTA: Marian Chant from Norcia',collectionCensoredName:'BENEDICTA: Marian Chant from Norcia',artistViewUrl:'https://music.apple.com/us/artist/the-monks-of-norcia/990251418?uo=4',collectionViewUrl:'https://music.apple.com/us/album/benedicta-marian-chant-from-norcia/1440654210?uo=4',artworkUrl60:'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/90/ea/cf/90eacf27-018f-8a95-8099-1b87a85367fc/source/60x60bb.jpg',artworkUrl100:'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/90/ea/cf/90eacf27-018f-8a95-8099-1b87a85367fc/source/100x100bb.jpg',collectionPrice:11.99,collectionExplicitness:'notExplicit',trackCount:34,copyright:'℗ 2015 De Montfort Music, De Montfort Music',country:'USA',currency:'USD',releaseDate:'2015-06-02T07:00:00Z',primaryGenreName:'Classical'}]});
  expect(state).toEqual({results:[{wrapperType:'collection',collectionType:'Album',artistId:990251418,collectionId:1440654210,amgArtistId:3084392,artistName:'The Monks of Norcia',collectionName:'BENEDICTA: Marian Chant from Norcia',collectionCensoredName:'BENEDICTA: Marian Chant from Norcia',artistViewUrl:'https://music.apple.com/us/artist/the-monks-of-norcia/990251418?uo=4',collectionViewUrl:'https://music.apple.com/us/album/benedicta-marian-chant-from-norcia/1440654210?uo=4',artworkUrl60:'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/90/ea/cf/90eacf27-018f-8a95-8099-1b87a85367fc/source/60x60bb.jpg',artworkUrl100:'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/90/ea/cf/90eacf27-018f-8a95-8099-1b87a85367fc/source/100x100bb.jpg',collectionPrice:11.99,collectionExplicitness:'notExplicit',trackCount:34,copyright:'℗ 2015 De Montfort Music, De Montfort Music',country:'USA',currency:'USD',releaseDate:'2015-06-02T07:00:00Z',primaryGenreName:'Classical'}],songs:[],resErr:'',songErr:''});
});

test('ALBUMS_ERR', () => {
    let state;
    state = reducer({results:[],songs:[],resErr:'',songErr:''}, {type:'ALBUMS_ERR',err:'No albums connected to the term  were found. Please try again with different parameter.'});
    expect(state).toEqual({results:[],songs:[],resErr:'No albums connected to the term  were found. Please try again with different parameter.',songErr:''});
});

test('GET_SONGS_FROM_ALBUM', () => {
    let state;
    state = reducer({results:[{wrapperType:'collection',collectionType:'Album',artistId:183313439,collectionId:1323176986,amgArtistId:2342870,artistName:'Ed Sheeran & Andrea Bocelli',collectionName:'Perfect Symphony - Single',collectionCensoredName:'Perfect Symphony - Single',artistViewUrl:'https://music.apple.com/us/artist/ed-sheeran/183313439?uo=4',collectionViewUrl:'https://music.apple.com/us/album/perfect-symphony-single/1323176986?uo=4',artworkUrl60:'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/5d/97/c8/5d97c8dd-a19c-672c-34cc-a5e12646d2e8/source/60x60bb.jpg',artworkUrl100:'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/5d/97/c8/5d97c8dd-a19c-672c-34cc-a5e12646d2e8/source/100x100bb.jpg',collectionPrice:1.29,collectionExplicitness:'notExplicit',trackCount:1,copyright:'℗ 2017 Asylum Records UK, a division of Atlantic Records UK, a Warner Music Group company.',country:'USA',currency:'USD',releaseDate:'2017-12-15T08:00:00Z',primaryGenreName:'Classical Crossover'},{wrapperType:'collection',collectionType:'Album',artistId:183313439,collectionId:1469522641,amgArtistId:2342870,artistName:'Ed Sheeran & Justin Bieber',collectionName:'I Don\'t Care (Chronixx & Koffee Remix) - Single',collectionCensoredName:'I Don\'t Care (Chronixx & Koffee Remix) - Single',artistViewUrl:'https://music.apple.com/us/artist/ed-sheeran/183313439?uo=4',collectionViewUrl:'https://music.apple.com/us/album/i-dont-care-chronixx-koffee-remix-single/1469522641?uo=4',artworkUrl60:'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/92/17/2d/92172d0c-1bc1-d523-dc7c-e3959867b132/source/60x60bb.jpg',artworkUrl100:'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/92/17/2d/92172d0c-1bc1-d523-dc7c-e3959867b132/source/100x100bb.jpg',collectionPrice:1.29,collectionExplicitness:'notExplicit',trackCount:1,copyright:'2019 An Asylum Records UK release, a division of Atlantic Records UK ℗ 2019 Warner Music UK Limited / Def Jam Recordings, a division of UMG Recordings, Inc',country:'USA',currency:'USD',releaseDate:'2019-06-25T07:00:00Z',primaryGenreName:'Pop'},{wrapperType:'collection',collectionType:'Album',artistId:183313439,collectionId:518120627,amgArtistId:2342870,artistName:'Ed Sheeran & Yelawolf',collectionName:'The Slumdon Bridge - EP',collectionCensoredName:'The Slumdon Bridge - EP',artistViewUrl:'https://music.apple.com/us/artist/ed-sheeran/183313439?uo=4',collectionViewUrl:'https://music.apple.com/us/album/the-slumdon-bridge-ep/518120627?uo=4',artworkUrl60:'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/45/ae/af/45aeaf63-180a-c3ae-6d38-f9a0e64992fc/source/60x60bb.jpg',artworkUrl100:'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/45/ae/af/45aeaf63-180a-c3ae-6d38-f9a0e64992fc/source/100x100bb.jpg',collectionPrice:3.99,collectionExplicitness:'explicit',contentAdvisoryRating:'Explicit',trackCount:4,copyright:'℗ 2012 Warner Music UK Limited',country:'USA',currency:'USD',releaseDate:'2011-09-09T07:00:00Z',primaryGenreName:'Singer/Songwriter'}],songs:[],resErr:'',songErr:''}, {type:'SEARCH_FOR_ALBUMS',results:[{wrapperType:'collection',collectionType:'Album',artistId:183313439,collectionId:1323176986,amgArtistId:2342870,artistName:'Ed Sheeran & Andrea Bocelli',collectionName:'Perfect Symphony - Single',collectionCensoredName:'Perfect Symphony - Single',artistViewUrl:'https://music.apple.com/us/artist/ed-sheeran/183313439?uo=4',collectionViewUrl:'https://music.apple.com/us/album/perfect-symphony-single/1323176986?uo=4',artworkUrl60:'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/5d/97/c8/5d97c8dd-a19c-672c-34cc-a5e12646d2e8/source/60x60bb.jpg',artworkUrl100:'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/5d/97/c8/5d97c8dd-a19c-672c-34cc-a5e12646d2e8/source/100x100bb.jpg',collectionPrice:1.29,collectionExplicitness:'notExplicit',trackCount:1,copyright:'℗ 2017 Asylum Records UK, a division of Atlantic Records UK, a Warner Music Group company.',country:'USA',currency:'USD',releaseDate:'2017-12-15T08:00:00Z',primaryGenreName:'Classical Crossover'}]});
    expect(state).toEqual({results:[{wrapperType:'collection',collectionType:'Album',artistId:183313439,collectionId:1323176986,amgArtistId:2342870,artistName:'Ed Sheeran & Andrea Bocelli',collectionName:'Perfect Symphony - Single',collectionCensoredName:'Perfect Symphony - Single',artistViewUrl:'https://music.apple.com/us/artist/ed-sheeran/183313439?uo=4',collectionViewUrl:'https://music.apple.com/us/album/perfect-symphony-single/1323176986?uo=4',artworkUrl60:'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/5d/97/c8/5d97c8dd-a19c-672c-34cc-a5e12646d2e8/source/60x60bb.jpg',artworkUrl100:'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/5d/97/c8/5d97c8dd-a19c-672c-34cc-a5e12646d2e8/source/100x100bb.jpg',collectionPrice:1.29,collectionExplicitness:'notExplicit',trackCount:1,copyright:'℗ 2017 Asylum Records UK, a division of Atlantic Records UK, a Warner Music Group company.',country:'USA',currency:'USD',releaseDate:'2017-12-15T08:00:00Z',primaryGenreName:'Classical Crossover'}],songs:[],resErr:'',songErr:''});
});

