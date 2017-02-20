sounds = (function() {

    const broadPSlenderP = {
        sound1: '/pˠ/',
        word1: 'scóp',
        source1: 'Audio/Irish/CorcaDhuibhne/scóp.mp3',
        sound2: '/pʲ/',
        word2: 'scóip',
        source2: 'Audio/Irish/CorcaDhuibhne/scóip.mp3'
    }

    const broadBSlenderB = {
        sound1: '/bˠ/',
        word1: 'buí',
        source1: 'Audio/Irish/CorcaDhuibhne/buí.mp3',
        sound2: '/bʲ/',
        word2: 'bí',
        source2: 'Audio/Irish/CorcaDhuibhne/bí.mp3'
    }

    const broadTSlenderT = {
        sound1: '/t̪ˠ/',
        word1: 'tuí',
        source1: 'Audio/Irish/CorcaDhuibhne/tuí.mp3',
        sound2: '/tʲ/',
        word2: 'tí',
        source2: 'Audio/Irish/CorcaDhuibhne/tí.mp3'
    }

    const broadDSlenderD = {
        sound1: '/d̪ˠ/',
        word1: 'dó',
        source1: 'Audio/Irish/CorcaDhuibhne/dó.mp3',
        sound2: '/dʲ/',
        word2: 'deo',
        source2: 'Audio/Irish/CorcaDhuibhne/deo.mp3'
    }

    const broadCSlenderC = {
        sound1: '/k/',
        word1: 'cúis',
        source1: 'Audio/Irish/CorcaDhuibhne/cúis.mp3',
        sound2: '/c/',
        word2: 'ciumhais',
        source2: 'Audio/Irish/CorcaDhuibhne/ciumhais.mp3'
    }

    const broadGSlenderG = {
        sound1: '/ɡ/',
        word1: "gal",
        source1: "Audio/Irish/CorcaDhuibhne/gal.mp3",
        sound2: '/ɟ/',
        word2: 'geal',
        source2: "Audio/Irish/CorcaDhuibhne/geal.mp3"
    }

    const broadFSlenderF = {
        sound1: '/fˠ/',
        word1: "fóill",
        source1: 'Audio/Irish/CorcaDhuibhne/fóill.mp3',
        sound2: "/fʲ/",
        word2: "feoil",
        source2: "Audio/Irish/CorcaDhuibhne/feoil.mp3"
    }

    const broadBhSlenderBh = {
        sound1: '/vˠ/',
        word1: 'bhuí',
        source1: 'Audio/Irish/CorcaDhuibhne/bhuí.mp3',
        sound2: '/vʲ/',
        word2: 'bhí',
        source2: 'Audio/Irish/CorcaDhuibhne/bhí.mp3'
    }

    const broadSSlenderS = {
        sound1: '/s/',
        word1: 'suí',
        source1: 'Audio/Irish/CorcaDhuibhne/suí.mp3',
        sound2: '/ɕ/',
        word2: 'sí',
        source2: 'Audio/Irish/CorcaDhuibhne/sí.mp3'
    }

    const broadChSlenderCh = {
        sound1: '/x/',
        word1: 'an chú',
        source1: 'Audio/Irish/CorcaDhuibhne/anchú.mp3',
        sound2: '/ç/',
        word2: 'an chiú',
        source2: 'Audio/Irish/CorcaDhuibhne/anchiú.mp3'
    }

    const broadGhSlenderGh = {
        sound1: '/ɣ/',
        word1: 'an-ghal',
        source1: 'Audio/Irish/CorcaDhuibhne/an-ghal.mp3',
        sound2: '/ʝ/',
        word2: 'an-gheal',
        source2: 'Audio/Irish/CorcaDhuibhne/an-gheal.mp3'
    }

    const broadMSlenderM = {
        sound1: '/mˠ/',
        word1: 'óm',
        source1: 'Audio/Irish/CorcaDhuibhne/óm.mp3',
        sound2: '/mʲ/',
        word2: 'óim',
        source2: 'Audio/Irish/CorcaDhuibhne/óim.mp3'
    }

    const broadNSlenderN = {
        sound1: '/n̪ˠ/',
        word1: '(naoi)',
        source1: 'Audio/Irish/CorcaDhuibhne/naoi.mp3',
        sound2: '/nʲ/',
        word2: '(néal)',
        source2: 'Audio/Irish/CorcaDhuibhne/néal.mp3'
    }

    const broadNgSlenderNg = {
        sound1: '/ŋ/',
        word1: 'longa',
        source1: 'Audio/Irish/CorcaDhuibhne/longa.mp3',
        sound2: '/ɲ/',
        word2: 'loinge',
        source2: 'Audio/Irish/CorcaDhuibhne/loinge.mp3'
    }

    const broadRSlenderR = {
        sound1: '/ɾˠ/',
        word1: 'cur',
        source1: 'Audio/Irish/CorcaDhuibhne/cur.mp3',
        sound2: '/ɾʲ/',
        word2: 'cuir',
        source2: 'Audio/Irish/CorcaDhuibhne/cuir.mp3'
    }

    const broadLSlenderL = {
        sound1: '/l̪ˠ/',
        word1: 'lón',
        source1: 'Audio/Irish/CorcaDhuibhne/lón.mp3',
        sound2: '/lʲ/',
        word2: 'leon',
        source2: 'Audio/Irish/CorcaDhuibhne/leon.mp3'
    }

    const broadPBroadB = {
        sound1: '/pˠ/',
        word1: 'pá',
        source1: 'Audio/Irish/CorcaDhuibhne/pá.mp3',
        sound2: '/bˠ/',
        word2: 'bá',
        source2: 'Audio/Irish/CorcaDhuibhne/bá.mp3'
    }

    const slenderPSlenderB = {
        sound1: '/pʲ/',
        word1: 'pinn',
        source1: "Audio/Irish/CorcaDhuibhne/pinn.mp3",
        sound2: '/bʲ/',
        word2: 'binn',
        source2: "Audio/Irish/CorcaDhuibhne/binn.mp3"
    }

    const broadTBroadD = {
        sound1: '/t̪ˠ/',
        word1: 'ghreadfadh',
        source1: 'Audio/Irish/CorcaDhuibhne/ghreadfadh.mp3',
        sound2: '/d̪ˠ/',
        word2: 'ghreadadh',
        source2: 'Audio/Irish/CorcaDhuibhne/ghreadadh.mp3'
    }

    const slenderTSlenderD = {
        sound1: '/tʲ/',
        word1: 'chreidfeadh',
        source1: 'Audio/Irish/CorcaDhuibhne/chreidfeadh.mp3',
        sound2: '/dʲ/',
        word2: 'chreideadh',
        source2: 'Audio/Irish/CorcaDhuibhne/chreideadh.mp3'
    }

    const broadCBroadG = {
        sound1: '/k/',
        word1: 'cad',
        source1: 'Audio/Irish/CorcaDhuibhne/cad.mp3',
        sound2: '/g/',
        word2: 'gad',
        source2: 'Audio/Irish/CorcaDhuibhne/gad.mp3'
    }

    const slenderCSlenderG = {
        sound1: '/c/',
        word1: 'ciall',
        source1: 'Audio/Irish/CorcaDhuibhne/ciall.mp3',
        sound2: '/ɟ/',
        word2: 'giall',
        source2: 'Audio/Irish/CorcaDhuibhne/giall.mp3'
    }


    const broadFandW = {
        sound1: '/fˠ/',
        word1: 'fóta',
        source1: 'Audio/Irish/CorcaDhuibhne/fóta.mp3',
        sound2: '/vˠ/',
        word2: 'vóta',
        source2: 'Audio/Irish/CorcaDhuibhne/vóta.mp3'
    }

    const slenderFandV = {
        sound1: "/fʲ/",
        word1: "(figh)",
        source1: "Audio/Irish/CorcaDhuibhne/figh.mp3",
        sound2: "/vʲ/",
        word2: '(bhí)',
        source2: 'Audio/Irish/CorcaDhuibhne/bhí.mp3'
    }

    const broadChBroadGh = {
        sound1: '/x/',
        word1: 'an-chaol',
        source1: 'Audio/Irish/CorcaDhuibhne/an-chaol.mp3',
        sound2: '/ɣ/',
        word2: 'an-ghaol',
        source2: 'Audio/Irish/CorcaDhuibhne/an-ghaol.mp3'
    }

    const slenderChSlenderGh = {
        sound1: '/ç/',
        word1: 'cheal',
        source1: 'Audio/Irish/CorcaDhuibhne/cheal.mp3',
        sound2: '/ʝ/',
        word2: 'gheal',
        source2: 'Audio/Irish/CorcaDhuibhne/gheal.mp3'
    }

    return [broadPSlenderP, broadBSlenderB,broadTSlenderT,broadDSlenderD,
            broadCSlenderC, broadGSlenderG, broadFSlenderF, broadBhSlenderBh,
            broadSSlenderS, broadChSlenderCh, broadGhSlenderGh, broadMSlenderM,
            broadNSlenderN, broadNgSlenderNg, broadRSlenderR, broadLSlenderL,
            broadPBroadB, slenderPSlenderB, broadTBroadD, slenderTSlenderD,
            broadCBroadG, slenderCSlenderG, broadFandW, slenderFandV,
            broadChBroadGh, slenderChSlenderGh];
}());
