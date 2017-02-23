sounds = (function() {

    const broadPSlenderP = {
        sound1: '/pˠ/',
        word1: 'scóp',
        source1: 'Audio/Irish/Gweedore/scop.mp3',
        sound2: '/pʲ/',
        word2: 'scóip',
        source2: 'Audio/Irish/Gweedore/scoip.mp3'
    }

    const broadBSlenderB = {
        sound1: '/bˠ/',
        word1: '(buí)',
        source1: 'Audio/Irish/Gweedore/buí.mp3',
        sound2: '/bʲ/',
        word2: '(bí)',
        source2: 'Audio/Irish/Gweedore/bí.mp3'
    }

    const broadTSlenderT = {
        sound1: '/t̪ˠ/',
        word1: 'tuí',
        source1: 'Audio/Irish/Gweedore/tuí.mp3',
        sound2: '/ʧ/',
        word2: 'tí',
        source2: 'Audio/Irish/Gweedore/tí.mp3'
    }

    const broadDSlenderD = {
        sound1: '/d̪ˠ/',
        word1: 'dó',
        source1: 'Audio/Irish/Gweedore/dó.mp3',
        sound2: '/ʤ/',
        word2: 'deo',
        source2: 'Audio/Irish/Gweedore/deo.mp3'
    }

    const broadCSlenderC = {
        sound1: '/k/',
        word1: 'cúis',
        source1: 'Audio/Irish/Gweedore/cúis.mp3',
        sound2: '/c/',
        word2: 'ciumhais',
        source2: 'Audio/Irish/Gweedore/ciumhais.mp3'
    }

    const broadGSlenderG = {
        sound1: '/ɡ/',
        word1: "gal",
        source1: "Audio/Irish/Gweedore/gal.mp3",
        sound2: '/ɟ/',
        word2: 'geal',
        source2: "Audio/Irish/Gweedore/geal.mp3"
    }

    const broadFSlenderF = {
        sound1: '/fˠ/',
        word1: "faoi",
        source1: 'Audio/Irish/Gweedore/faoi.mp3',
        sound2: "/fʲ/",
        word2: "figh",
        source2: "Audio/Irish/Gweedore/figh.mp3"
    }

    const broadBhSlenderBh = {
        sound1: '/w/',
        word1: '(bhuí)',
        source1: 'Audio/Irish/Gweedore/bhuí.mp3',
        sound2: '/vʲ/',
        word2: '(bhí)',
        source2: 'Audio/Irish/Gweedore/bhí.mp3'
    }

    const broadSSlenderS = {
        sound1: '/s/',
        word1: 'suí',
        source1: 'Audio/Irish/Gweedore/suí.mp3',
        sound2: '/ɕ/',
        word2: 'sí',
        source2: 'Audio/Irish/Gweedore/sí.mp3'
    }

    const broadChSlenderCh = {
        sound1: '/x/',
        word1: 'an chú',
        source1: 'Audio/Irish/Gweedore/anchú.mp3',
        sound2: '/ç/',
        word2: 'an chiú',
        source2: 'Audio/Irish/Gweedore/anchiú.mp3'
    }

    const broadGhSlenderGh = {
        sound1: '/ɣ/',
        word1: 'an-ghal',
        source1: 'Audio/Irish/Gweedore/an-ghal.mp3',
        sound2: '/j/',
        word2: 'an-gheal',
        source2: 'Audio/Irish/Gweedore/an-gheal.mp3'
    }

    const broadMSlenderM = {
        sound1: '/mˠ/',
        word1: 'óm',
        source1: 'Audio/Irish/Gweedore/óm.mp3',
        sound2: '/mʲ/',
        word2: 'óim',
        source2: 'Audio/Irish/Gweedore/óim.mp3'
    }

    const broadNSlenderN = {
        sound1: '/n̪ˠ/',
        word1: 'naoi',
        source1: 'Audio/Irish/Gweedore/naoi.mp3',
        sound2: '/n̠ʲ/',
        word2: 'nigh',
        source2: 'Audio/Irish/Gweedore/nigh.mp3'
    }

    const broadNgSlenderNg = {
        sound1: '/ŋ/',
        word1: 'longa',
        source1: 'Audio/Irish/Gweedore/longa.mp3',
        sound2: '/ɲ/',
        word2: 'loinge',
        source2: 'Audio/Irish/Gweedore/loinge.mp3'
    }

    const broadRSlenderR = {
        sound1: '/ɾˠ/',
        word1: 'cur',
        source1: 'Audio/Irish/Gweedore/cur.mp3',
        sound2: '/ɾʲ/',
        word2: 'cuir',
        source2: 'Audio/Irish/Gweedore/cuir.mp3'
    }

    const broadL1SlenderL = {
        sound1: '/l̪ˠ/',
        word1: 'lón',
        source1: 'Audio/Irish/Gweedore/lón.mp3',
        sound2: '/l̠ʲ/',
        word2: 'leon',
        source2: 'Audio/Irish/Gweedore/leon.mp3'
    }

    const broadL2SlenderL = {
      sound1: 'l',
      word1: 'tuil',
      source1:'Audio/Irish/Gweedore/tuil.mp3',
      sound2: '/l̠ʲ',
      word2: 'tuill',
      source2: 'Audio/Irish/Gweedore/tuill.mp3'
    }

    const broadPBroadB = {
        sound1: '/pˠ/',
        word1: 'páistí',
        source1: 'Audio/Irish/Gweedore/páistí.mp3',
        sound2: '/bˠ/',
        word2: 'báistí',
        source2: 'Audio/Irish/Gweedore/báistí.mp3'
    }

    const slenderPSlenderB = {
        sound1: '/pʲ/',
        word1: 'pinn',
        source1: "Audio/Irish/Gweedore/pinn.mp3",
        sound2: '/bʲ/',
        word2: 'binn',
        source2: "Audio/Irish/Gweedore/binn.mp3"
    }

    const broadTBroadD = {
        sound1: '/t̪ˠ/',
        word1: 'ghreadfadh',
        source1: 'Audio/Irish/Gweedore/ghreadfadh.mp3',
        sound2: '/d̪ˠ/',
        word2: 'ghreadadh',
        source2: 'Audio/Irish/Gweedore/ghreadadh.mp3'
    }

    const slenderTSlenderD = {
        sound1: '/ʧ/',
        word1: 'chreidfeadh',
        source1: 'Audio/Irish/Gweedore/chreidfeadh.mp3',
        sound2: '/ʤ/',
        word2: 'chreideadh',
        source2: 'Audio/Irish/Gweedore/chreideadh.mp3'
    }

    const broadCBroadG = {
        sound1: '/k/',
        word1: 'cad',
        source1: 'Audio/Irish/Gweedore/cad.mp3',
        sound2: '/g/',
        word2: 'gad',
        source2: 'Audio/Irish/Gweedore/gad.mp3'
    }

    const slenderCSlenderG = {
        sound1: '/c/',
        word1: 'ciall',
        source1: 'Audio/Irish/Gweedore/ciall.mp3',
        sound2: '/ɟ/',
        word2: 'giall',
        source2: 'Audio/Irish/Gweedore/giall.mp3'
    }


    const broadFandW = {
        sound1: '/fˠ/',
        word1: '(faoi)',
        source1: 'Audio/Irish/Gweedore/faoi.mp3',
        sound2: '/w/',
        word2: '(bhuí)',
        source2: 'Audio/Irish/Gweedore/bhuí.mp3'
    }

    const slenderFandV = {
        sound1: "/fʲ/",
        word1: "figh",
        source1: "Audio/Irish/Gweedore/figh.mp3",
        sound2: "/vʲ/",
        word2: 'bhí',
        source2: 'Audio/Irish/Gweedore/bhí.mp3'
    }

    const broadChBroadGh = {
        sound1: '/x/',
        word1: 'an-chaol',
        source1: 'Audio/Irish/Gweedore/an-chaol.mp3',
        sound2: '/ɣ/',
        word2: 'an-ghaol',
        source2: 'Audio/Irish/Gweedore/an-ghaol.mp3'
    }

    const slenderChSlenderGh = {
        sound1: '/ç/',
        word1: 'cheal',
        source1: 'Audio/Irish/Gweedore/cheal.mp3',
        sound2: '/j/',
        word2: 'gheal',
        source2: 'Audio/Irish/Gweedore/gheal.mp3'
    }

    return [broadPSlenderP, broadBSlenderB, broadTSlenderT, broadDSlenderD,
    broadCSlenderC, broadGSlenderG, broadFSlenderF, broadBhSlenderBh,
    broadSSlenderS, broadChSlenderCh, broadGhSlenderGh, broadMSlenderM,
    broadNSlenderN, broadNgSlenderNg, broadRSlenderR, broadL1SlenderL,
    broadL2SlenderL, broadPBroadB, slenderPSlenderB, slenderTSlenderD,
    broadTBroadD, broadCBroadG, slenderCSlenderG, broadFandW, slenderFandV,
    broadChBroadGh, slenderChSlenderGh];

}());
