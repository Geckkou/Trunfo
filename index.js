var cartaRengar = {
    nome: "Rengar",
    image: "https://64.media.tumblr.com/31b7b3c429930b121cfffbd1fcd1f28a/tumblr_nemywiWLeI" +
            "1tvo2c3o1_500.gifv",
    atributos: {
        DanoFísico: 409,
        PoderMágico: 20,
        Armadura: 70
    }
}

var cartaVolibear = {
    nome: "Volibear",
    image: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_" +
            "auto,g_auto/shape/cover/sport/dataimagejpegbase649j7AARRHVja3kAAQAEAAAAUQAA4AD" +
            "kF-e5dddad28012d6714f03a8d65d4d536c.jpg",
    atributos: {
        DanoFísico: 301,
        PoderMágico: 40,
        Armadura: 210
    }
}

var cartaLucian = {
    nome: "Lucian",
    image: "https://64.media.tumblr.com/de1e84fe20f95b0f02fbf826f54b4228/58e64215691e4840-" +
            "a5/s400x600/a14b30b179d2b0e27e0b6ec62393eec03e088887.gifv",
    atributos: {
        DanoFísico: 480,
        PoderMágico: 0,
        Armadura: 35
    }
}

var cartaZed = {
    nome: "Zed",
    image: "https://pa1.narvii.com/6540/7ca09a8819bf911cd1063deb1d884ee61c8f8819_hq.gif",
    atributos: {
        DanoFísico: 510,
        PoderMágico: 10,
        Armadura: 40
    }
}

var cartaLulu = {
    nome: "Lulu",
    image: "https://thumbs.gfycat.com/FarflungDetailedCub-size_restricted.gif",
    atributos: {
        DanoFísico: 60,
        PoderMágico: 80,
        Armadura: 65
    }
}

var cartaEkko = {
    nome: "Ekko",
    image: "https://i.pinimg.com/originals/02/2a/08/022a0830343617c7164d899db33139bc.gif",
    atributos: {
        DanoFísico: 60,
        PoderMágico: 410,
        Armadura: 69
    }
}

var cartaKayn = {
    nome: "Kayn",
    image: "http://pa1.narvii.com/6701/f0975fb046af458f88146a03e587fb2df92ca178_00.gif",
    atributos: {
        DanoFísico: 310,
        PoderMágico: 10,
        Armadura: 80
    }
}

var cartaKennen = {
    nome: "Kennen",
    image: "https://pa1.narvii.com/5800/a1d1ba413499fb12f7ea5b6dffa9b1a95d2d82ab_hq.gif",
    atributos: {
        DanoFísico: 50,
        PoderMágico: 239,
        Armadura: 45
    }
}

var cartaKindred = {
    nome: "Kindred",
    image: "https://j.gifs.com/vq4ZxM.gif",
    atributos: {
        DanoFísico: 320,
        PoderMágico: 25,
        Armadura: 25
    }
}

var cartaYone = {
    nome: "Yone",
    image: "https://i.ytimg.com/vi/KZA1RGZM-2I/maxresdefault.jpg",
    atributos: {
        DanoFísico: 420,
        PoderMágico: 32,
        Armadura: 62
    }
}

var cartaYasuo = {
    nome: "Yasuo",
    image: "https://pa1.narvii.com/7300/1fba6b44132b17d9cceb4d9f417e5ed8ccc082a6r1-480-270" +
            "_hq.gif",
    atributos: {
        DanoFísico: 415,
        PoderMágico: 13,
        Armadura: 60
    }
}

var cartaRekSai = {
    nome: "Rek'sai",
    image: "https://pa1.narvii.com/7201/5d52297cee2ff5d0d001c1276c708b5b6f6e757br1-455-262" +
            "_hq.gif",
    atributos: {
        DanoFísico: 320,
        PoderMágico: 25,
        Armadura: 75
    }
}

var cartaSuperTrunfo = {
    nome: "Teemo",
    image: "https://thumbs.gfycat.com/SpeedySpecificCrocodileskink-size_restricted.gif",
    atributos: {
        DanoFísico: 1000,
        PoderMágico: 1000,
        Armadura: 1000
    }
}

var cartaAkali = {
    nome: "Akali",
    image: "https://64.media.tumblr.com/ed602a2868d3eb321ab233bdff7c7683/tumblr_nkeh4uJ2iu" +
            "1rgj7ubo1_500.gifv",
    atributos: {
        DanoFísico: 120,
        PoderMágico: 312,
        Armadura: 35
    }
}

var cartaJogador
var cartaMaquina
var rodada = 0
var cartas = [
    cartaRengar,
    cartaVolibear,
    cartaLucian,
    cartaZed,
    cartaLulu,
    cartaEkko,
    cartaKayn,
    cartaKennen,
    cartaKindred,
    cartaYone,
    cartaYasuo,
    cartaRekSai,
    cartaSuperTrunfo,
    cartaAkali
]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document
        .getElementById('btnSortear')
        .disabled = true
    document
        .getElementById('btnJogar')
        .disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-tru' +
            'nfo-transparent-ajustado.png" style=" width: inherit; height: inherit; positio' +
            'n: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.image})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" +
                atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id = 'opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    if (rodada % 2 != 0) {
        for (var i = 0; i < radioAtributo.length; i++) {
            if (radioAtributo[i].checked) {
                return radioAtributo[i].value
            }
        }
    } else {
        var atributoia = ['DanoFísico', 'PoderMágico', 'Armadura']
        var ia = parseInt(Math.random() * 3)
        radioAtributo = atributoia[ia]
        return radioAtributo
    }
}

function jogar() {
    var divResultado = document.getElementById('resultado')
    var atributoSelecionado = obtemAtributoSelecionado()
    var atributoMaquina = document.getElementById("atributoEscolhidoMaquina")

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++

    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document
            .getElementById('btnProximaRodada')
            .disabled = false
    }

    if (rodada % 2 == 0) {
        atributoMaquina.innerHTML = atributoSelecionado
    }

    divResultado.innerHTML = htmlResultado
    document
        .getElementById('btnJogar')
        .disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-tru' +
            'nfo-transparent-ajustado.png" style=" width: inherit; height: inherit; positio' +
            'n: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.image})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " +
                cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id ="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document
        .getElementById('btnSortear')
        .disabled = false
    document
        .getElementById('btnJogar')
        .disabled = true
    document
        .getElementById('btnProximaRodada')
        .disabled = true

    var divResultado = document.getElementById('resultado')

    divResultado.innerHTML = ""
}