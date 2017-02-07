sounds = (function() {
    const doubleLSingleL = {
        sound1: '/l̠ʲ/',
        word1: 'buille',
        source1: 'Audio/Irish/Carraroe/buille.ogg',
        sound2: '/lʲ/ ',
        word2: 'buile',
        source2: 'Audio/Irish/Carraroe/buile.ogg'
    };

    const doubleNSingleN = {
        sound1: '/n̠ʲ/',
        word1: 'cinneadh',
        source1: 'Audio/Irish/Carraroe/cinneadh.ogg',
        sound2: '/nʲ/',
        word2: 'cine',
        source2: 'Audio/Irish/Carraroe/cine.ogg'
    }

    const broadPSlenderP = {
        sound1: '/pˠ/',
        word1: 'scóp',
        source1: 'Audio/Irish/Carraroe/scóp.ogg',
        sound2: '/pʲ/',
        word2: 'scóip',
        source2: 'Audio/Irish/Carraroe/scóip.ogg'
    }

    const broadBSlenderB = {
        sound1: '/bˠ/',
        word1: 'buí',
        source1: 'Audio/Irish/Carraroe/buí.ogg',
        sound2: '/bʲ/',
        word2: 'bí',
        source2: 'Audio/Irish/Carraroe/bí.ogg'
    }

    const broadTSlenderT = {
        sound1: '/t̪ˠ/',
        word1: 'tuí',
        source1: 'Audio/Irish/Carraroe/tuí.ogg',
        sound2: '/t̠ʲ/',
        word2: 'tí',
        source2: 'Audio/Irish/Carraroe/tí.ogg'
    }

    const broadDSlenderD = {
        sound1: '/d̪ˠ/',
        word1: 'dó',
        source1: 'Audio/Irish/Carraroe/dó.ogg',
        sound2: '/d̠ʲ/',
        word2: 'deo',
        source2: 'Audio/Irish/Carraroe/deo.ogg'
    }

    const broadCSlenderC = {
        sound1: '/k/',
        word1: 'cúis',
        source1: 'Audio/Irish/Carraroe/cúis.ogg',
        sound2: '/c/',
        word2: 'ciumhais',
        source2: 'Audio/Irish/Carraroe/ciumhais.ogg'
    }

    const broadGSlenderG = {
        sound1: '/ɡ/',
        word1: "(gal)",
        source1: "Audio/Irish/Carraroe/gal.ogg",
        sound2: '/ɟ/',
        word2: '(geal)',
        source2: "Audio/Irish/Carraroe/geal.ogg"
    }

    const broadFSlenderF = {
        sound1: '/fˠ/',
        word1: "(faoi)",
        source1: 'Audio/Irish/Carraroe/faoi.ogg',
        sound2: "/fʲ/",
        word2: "(figh)",
        source2: "Audio/Irish/Carraroe/figh.ogg"
    }

    const broadBhSlenderBh = {
        sound1: '/w/',
        word1: 'bhuí',
        source1: 'Audio/Irish/Carraroe/bhuí.ogg',
        sound2: '/vʲ/',
        word2: 'bhí',
        source2: 'Audio/Irish/Carraroe/bhí.ogg'
    }

    const broadSSlenderS = {
        sound1: '/s/',
        word1: 'suí',
        source1: 'Audio/Irish/Carraroe/suí.ogg',
        sound2: '/ɕ/',
        word2: 'sí',
        source2: 'Audio/Irish/Carraroe/sí.ogg'
    }

    const broadChSlenderCh = {
        sound1: '/x/',
        word1: 'an chú',
        source1: 'Audio/Irish/Carraroe/anchú.ogg',
        sound2: '/ç/',
        word2: 'an chiú',
        source2: 'Audio/Irish/Carraroe/anchiú.ogg'
    }

    const broadGhSlenderGh = {
        sound1: '/ɣ/',
        word1: '(an-ghal)',
        source1: 'Audio/Irish/Carraroe/an-ghal.ogg',
        sound2: '/ʝ/',
        word2: '(an-gheal)',
        source2: 'Audio/Irish/Carraroe/an-gheal.ogg'
    }

    const broadMSlenderM = {
        sound1: '/mˠ/',
        word1: 'óm',
        source1: 'Audio/Irish/Carraroe/óm.ogg',
        sound2: '/mʲ/',
        word2: 'óim',
        source2: 'Audio/Irish/Carraroe/óim.ogg'
    }

    const broadNSlenderN = {
        sound1: '/n̪ˠ/',
        word1: '(naoi)',
        source1: 'Audio/Irish/Carraroe/naoi.ogg',
        sound2: '/n̠ʲ/',
        word2: '(nigh)',
        source2: 'Audio/Irish/Carraroe/nigh.ogg'
    }

    const broadNgSlenderNg = {
        sound1: '/ŋ/',
        word1: 'longa',
        source1: 'Audio/Irish/Carraroe/longa.ogg',
        sound2: '/ɲ/',
        word2: 'loinge',
        source2: 'Audio/Irish/Carraroe/loinge.ogg'
    }

    const broadRSlenderR = {
        sound1: '/ɾˠ/',
        word1: 'cur',
        source1: 'Audio/Irish/Carraroe/cur.ogg',
        sound2: '/ɾʲ/',
        word2: 'cuir',
        source2: 'Audio/Irish/Carraroe/cuir.ogg'
    }

    const broadLSlenderL = {
        sound1: '/l̪ˠ/',
        word1: 'lón',
        source1: 'Audio/Irish/Carraroe/lon.ogg',
        sound2: '/l̠ʲ/',
        word2: 'leon',
        source2: 'Audio/Irish/Carraroe/leon.ogg'
    }

    const broadPBroadB = {
        sound1: '/pˠ/',
        word1: 'pá',
        source1: 'Audio/Irish/Carraroe/pa.ogg',
        sound2: '/bˠ/',
        word2: 'bá',
        source2: 'Audio/Irish/Carraroe/ba.ogg'
    }

    const slenderPSlenderB = {
        sound1: '/pʲ/',
        word1: 'pinn',
        source1: "Audio/Irish/Carraroe/pinn.ogg",
        sound2: '/bʲ/',
        word2: 'binn',
        source2: "Audio/Irish/Carraroe/binn.ogg"
    }

    const broadTBroadD = {
        sound1: '/t̪ˠ/',
        word1: 'ghreadfadh',
        source1: 'Audio/Irish/Carraroe/ghreadfadh.ogg',
        sound2: '/d̪ˠ/',
        word2: 'ghreadadh',
        source2: 'Audio/Irish/Carraroe/ghreadadh.ogg'
    }

    const slenderTSlenderD = {
        sound1: '/t̠ʲ/',
        word1: 'chreidfeadh',
        source1: 'Audio/Irish/Carraroe/chreidfeadh.ogg',
        sound2: '/d̠ʲ/',
        word2: 'chreideadh',
        source2: 'Audio/Irish/Carraroe/chreideadh.ogg'
    }

    const broadCBroadG = {
        sound1: '/k/',
        word1: 'cá',
        source1: 'Audio/Irish/Carraroe/cá.ogg',
        sound2: '/g/',
        word2: 'gá',
        source2: 'Audio/Irish/Carraroe/gá.ogg'
    }

    const slenderCSlenderG = {
        sound1: '/c/',
        word1: 'ciall',
        source1: 'Audio/Irish/Carraroe/ciall.ogg',
        sound2: '/ɟ/',
        word2: 'giall',
        source2: 'Audio/Irish/Carraroe/giall.ogg'
    }


    const broadFandW = {
        sound1: '/fˠ/',
        word1: '(faoi)',
        source1: 'Audio/Irish/Carraroe/faoi.ogg',
        sound2: '/w/',
        word2: '(bhuí)',
        source2: 'Audio/Irish/Carraroe/bhuí.ogg'
    }

    const slenderFandV = {
        sound1: "/fʲ/",
        word1: "(figh)",
        source1: "Audio/Irish/Carraroe/figh.ogg",
        sound2: "/vʲ/",
        word2: '(bhí)',
        source2: 'Audio/Irish/Carraroe/bhí.ogg'
    }

    const broadChBroadGh = {
        sound1: '/x/',
        word1: 'an-chaol',
        source1: 'Audio/Irish/Carraroe/an-chaol.ogg',
        sound2: '/ɣ/',
        word2: 'an-ghaol',
        source2: 'Audio/Irish/Carraroe/an-ghaol.ogg'
    }

    const slenderChSlenderGh = {
        sound1: '/ç/',
        word1: 'cheal',
        source1: 'Audio/Irish/Carraroe/cheal.ogg',
        sound2: '/ʝ/',
        word2: 'gheal',
        source2: 'Audio/Irish/Carraroe/gheal.ogg'
    }

    return [broadPSlenderP, broadBSlenderB, broadTSlenderT, broadDSlenderD,
        broadCSlenderC, broadGSlenderG, broadFSlenderF, broadBhSlenderBh, broadSSlenderS, broadChSlenderCh,
        broadGhSlenderGh, broadMSlenderM, broadNSlenderN, broadNgSlenderNg, broadRSlenderR, broadLSlenderL, broadPBroadB,
        slenderPSlenderB, broadTBroadD, slenderTSlenderD, broadCBroadG, slenderCSlenderG, broadFandW, slenderFandV, broadChBroadGh, slenderChSlenderGh
    ]
}());
