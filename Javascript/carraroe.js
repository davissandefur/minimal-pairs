sounds = (function() {
    const doubleLSingleL = {
        sound1: '/l̠ʲ/',
        word1: 'buille',
        source1: 'Audio/Irish/Carraroe/buille.m4a',
        sound2: '/lʲ/ ',
        word2: 'buile',
        source2: 'Audio/Irish/Carraroe/buile.m4a'
    };

    const doubleNSingleN = {
        sound1: '/n̠ʲ/',
        word1: 'cinneadh',
        source1: 'Audio/Irish/Carraroe/cinneadh.m4a',
        sound2: '/nʲ/',
        word2: 'cine',
        source2: 'Audio/Irish/Carraroe/cine.m4a'
    }

    const broadPSlenderP = {
        sound1: '/pˠ/',
        word1: 'scóp',
        source1: 'Audio/Irish/Carraroe/scóp.m4a',
        sound2: '/pʲ/',
        word2: 'scóip',
        source2: 'Audio/Irish/Carraroe/scóip.m4a'
    }

    const broadBSlenderB = {
        sound1: '/bˠ/',
        word1: 'buí',
        source1: 'Audio/Irish/Carraroe/buí.m4a',
        sound2: '/bʲ/',
        word2: 'bí',
        source2: 'Audio/Irish/Carraroe/bí.m4a'
    }

    const broadTSlenderT = {
        sound1: '/t̪ˠ/',
        word1: 'tuí',
        source1: 'Audio/Irish/Carraroe/tuí.m4a',
        sound2: '/t̠ʲ/',
        word2: 'tí',
        source2: 'Audio/Irish/Carraroe/tí.m4a'
    }

    const broadDSlenderD = {
        sound1: '/d̪ˠ/',
        word1: 'dó',
        source1: 'Audio/Irish/Carraroe/dó.m4a',
        sound2: '/d̠ʲ/',
        word2: 'deo',
        source2: 'Audio/Irish/Carraroe/deo.m4a'
    }

    const broadCSlenderC = {
        sound1: '/k/',
        word1: 'cúis',
        source1: 'Audio/Irish/Carraroe/cúis.m4a',
        sound2: '/c/',
        word2: 'ciumhais',
        source2: 'Audio/Irish/Carraroe/ciumhais.m4a'
    }

    const broadGSlenderG = {
        sound1: '/ɡ/',
        word1: "(gal)",
        source1: "Audio/Irish/Carraroe/gal.m4a",
        sound2: '/ɟ/',
        word2: '(geal)',
        source2: "Audio/Irish/Carraroe/geal.m4a"
    }

    const broadFSlenderF = {
        sound1: '/fˠ/',
        word1: "(faoi)",
        source1: 'Audio/Irish/Carraroe/faoi.m4a',
        sound2: "/fʲ/",
        word2: "(figh)",
        source2: "Audio/Irish/Carraroe/figh.m4a"
    }

    const broadBhSlenderBh = {
        sound1: '/w/',
        word1: 'bhuí',
        source1: 'Audio/Irish/Carraroe/bhuí.m4a',
        sound2: '/vʲ/',
        word2: 'bhí',
        source2: 'Audio/Irish/Carraroe/bhí.m4a'
    }

    const broadSSlenderS = {
        sound1: '/s/',
        word1: 'suí',
        source1: 'Audio/Irish/Carraroe/suí.m4a',
        sound2: '/ɕ/',
        word2: 'sí',
        source2: 'Audio/Irish/Carraroe/sí.m4a'
    }

    const broadChSlenderCh = {
        sound1: '/x/',
        word1: 'an chú',
        source1: 'Audio/Irish/Carraroe/anchú.m4a',
        sound2: '/ç/',
        word2: 'an chiú',
        source2: 'Audio/Irish/Carraroe/anchiú.m4a'
    }

    const broadGhSlenderGh = {
        sound1: '/ɣ/',
        word1: '(an-ghal)',
        source1: 'Audio/Irish/Carraroe/an-ghal.m4a',
        sound2: '/ʝ/',
        word2: '(an-gheal)',
        source2: 'Audio/Irish/Carraroe/an-gheal.m4a'
    }

    const broadMSlenderM = {
        sound1: '/mˠ/',
        word1: 'óm',
        source1: 'Audio/Irish/Carraroe/óm.m4a',
        sound2: '/mʲ/',
        word2: 'óim',
        source2: 'Audio/Irish/Carraroe/óim.m4a'
    }

    const broadNSlenderN = {
        sound1: '/n̪ˠ/',
        word1: '(naoi)',
        source1: 'Audio/Irish/Carraroe/naoi.m4a',
        sound2: '/n̠ʲ/',
        word2: '(nigh)',
        source2: 'Audio/Irish/Carraroe/nigh.m4a'
    }

    const broadNgSlenderNg = {
        sound1: '/ŋ/',
        word1: 'longa',
        source1: 'Audio/Irish/Carraroe/longa.m4a',
        sound2: '/ɲ/',
        word2: 'loinge',
        source2: 'Audio/Irish/Carraroe/loinge.m4a'
    }

    const broadRSlenderR = {
        sound1: '/ɾˠ/',
        word1: 'cur',
        source1: 'Audio/Irish/Carraroe/cur.m4a',
        sound2: '/ɾʲ/',
        word2: 'cuir',
        source2: 'Audio/Irish/Carraroe/cuir.m4a'
    }

    const broadLSlenderL = {
        sound1: '/l̪ˠ/',
        word1: 'lón',
        source1: 'Audio/Irish/Carraroe/lon.m4a',
        sound2: '/l̠ʲ/',
        word2: 'leon',
        source2: 'Audio/Irish/Carraroe/leon.m4a'
    }

    const broadPBroadB = {
        sound1: '/pˠ/',
        word1: 'pá',
        source1: 'Audio/Irish/Carraroe/pa.m4a',
        sound2: '/bˠ/',
        word2: 'bá',
        source2: 'Audio/Irish/Carraroe/ba.m4a'
    }

    const slenderPSlenderB = {
        sound1: '/pʲ/',
        word1: 'pinn',
        source1: "Audio/Irish/Carraroe/pinn.m4a",
        sound2: '/bʲ/',
        word2: 'binn',
        source2: "Audio/Irish/Carraroe/binn.m4a"
    }

    const broadTBroadD = {
        sound1: '/t̪ˠ/',
        word1: 'ghreadfadh',
        source1: 'Audio/Irish/Carraroe/ghreadfadh.m4a',
        sound2: '/d̪ˠ/',
        word2: 'ghreadadh',
        source2: 'Audio/Irish/Carraroe/ghreadadh.m4a'
    }

    const slenderTSlenderD = {
        sound1: '/t̠ʲ/',
        word1: 'chreidfeadh',
        source1: 'Audio/Irish/Carraroe/chreidfeadh.m4a',
        sound2: '/d̠ʲ/',
        word2: 'chreideadh',
        source2: 'Audio/Irish/Carraroe/chreideadh.m4a'
    }

    const broadCBroadG = {
        sound1: '/k/',
        word1: 'cá',
        source1: 'Audio/Irish/Carraroe/cá.m4a',
        sound2: '/g/',
        word2: 'gá',
        source2: 'Audio/Irish/Carraroe/gá.m4a'
    }

    const slenderCSlenderG = {
        sound1: '/c/',
        word1: 'ciall',
        source1: 'Audio/Irish/Carraroe/ciall.m4a',
        sound2: '/ɟ/',
        word2: 'giall',
        source2: 'Audio/Irish/Carraroe/giall.m4a'
    }


    const broadFandW = {
        sound1: '/fˠ/',
        word1: '(faoi)',
        source1: 'Audio/Irish/Carraroe/faoi.m4a',
        sound2: '/w/',
        word2: '(bhuí)',
        source2: 'Audio/Irish/Carraroe/bhuí.m4a'
    }

    const slenderFandV = {
        sound1: "/fʲ/",
        word1: "(figh)",
        source1: "Audio/Irish/Carraroe/figh.m4a",
        sound2: "/vʲ/",
        word2: '(bhí)',
        source2: 'Audio/Irish/Carraroe/bhí.m4a'
    }

    const broadChBroadGh = {
        sound1: '/x/',
        word1: 'an-chaol',
        source1: 'Audio/Irish/Carraroe/an-chaol.m4a',
        sound2: '/ɣ/',
        word2: 'an-ghaol',
        source2: 'Audio/Irish/Carraroe/an-ghaol.m4a'
    }

    const slenderChSlenderGh = {
        sound1: '/ç/',
        word1: 'cheal',
        source1: 'Audio/Irish/Carraroe/cheal.m4a',
        sound2: '/ʝ/',
        word2: 'gheal',
        source2: 'Audio/Irish/Carraroe/gheal.m4a'
    }

    return [broadPSlenderP, broadBSlenderB, broadTSlenderT, broadDSlenderD,
        broadCSlenderC, broadGSlenderG, broadFSlenderF, broadBhSlenderBh, broadSSlenderS, broadChSlenderCh,
        broadGhSlenderGh, broadMSlenderM, broadNSlenderN, broadNgSlenderNg, broadRSlenderR, broadLSlenderL, broadPBroadB,
        slenderPSlenderB, broadTBroadD, slenderTSlenderD, broadCBroadG, slenderCSlenderG, broadFandW, slenderFandV, broadChBroadGh, slenderChSlenderGh
    ]
}());
