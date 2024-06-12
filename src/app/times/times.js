const teams = [
  {
    name: 'Athletico', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/c7/Club_Athletico_Paranaense_2019.png/180px-Club_Athletico_Paranaense_2019.png', fundacao: '1924', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 0 },
      { name: 'Campeonato Brasileiro', count: 1 },
      { name: 'Copa do Brasil', count: 1 },
    ], artilheiros: [
      { nome: "Sicupira", gols: 157 },
      { nome: "Jackson", gols: 143 },
      { nome: "Kleber Pereira", gols: 124 },
      { nome: "Marreco", gols: 115 },
      { nome: "Cireno", gols: 114 },
      { nome: "Valter", gols: 106 },
      { nome: "Paulo Rink", gols: 80 },
      { nome: "Guará", gols: 76 },
      { nome: "Pablo", gols: 66 },
      { nome: "Alex Mineiro", gols: 65 },
      { nome: "Adriano Gabiru", gols: 65 },
    ]
  },
  {
    name: 'Atlético-GO', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Atl%C3%A9tico_Goianiense.svg/150px-Atl%C3%A9tico_Goianiense.svg.png', fundacao: '1937', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 0 },
      { name: 'Campeonato Brasileiro', count: 0 },
      { name: 'Copa do Brasil', count: 0 },
    ]
  },
  {
    name: 'Atlético-MG', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atletico_mineiro_galo.png/800px-Atletico_mineiro_galo.png', fundacao: '1908', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 1 },
      { name: 'Campeonato Brasileiro', count: 3 },
      { name: 'Copa do Brasil', count: 2 },
    ], artilheiros: [
      { nome: "Reinaldo", gols: 255 },
      { nome: "Dadá Maravilha", gols: 211 },
      { nome: "Mário de Castro", gols: 195 },
      { nome: "Guará", gols: 168 },
      { nome: "Lucas Miranda", gols: 152 },
      { nome: "Said", gols: 142 },
      { nome: "Guilherme", gols: 139 },
      { nome: "Ubaldo", gols: 135 },
      { nome: "Marques", gols: 133 },
      { nome: "Nívio", gols: 126 }
    ]

  },
  {
    name: 'Bahia', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/ECBahia.png/195px-ECBahia.png', fundacao: '1931', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 0 },
      { name: 'Campeonato Brasileiro', count: 2 },
      { name: 'Copa do Brasil', count: 0 },
    ], artilheiros: [
      { nome: "Carlito", gols: 253 },
      { nome: "Douglas", gols: 211 },
      { nome: "Hamilton", gols: 154 },
      { nome: "Uéslei", gols: 140 },
      { nome: "Osni", gols: 138 },
      { nome: "Marcelo Ramos", gols: 128 },
      { nome: "Nonato", gols: 125 },
      { nome: "Vareta", gols: 121 },
      { nome: "Alencar", gols: 116 },
      { nome: "Biriba", gols: 113 }
    ]

  },
  {
    name: 'Botafogo', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/180px-Botafogo_de_Futebol_e_Regatas_logo.svg.png', fundacao: '1894', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 0 },
      { name: 'Campeonato Brasileiro', count: 2 },
      { name: 'Copa do Brasil', count: 0 },
    ], artilheiros: [
      { "nome": "Quarentinha", "gols": 313 },
      { "nome": "Carvalho Leite", "gols": 261 },
      { "nome": "Garrincha", "gols": 245 },
      { "nome": "Heleno de Freitas", "gols": 209 },
      { "nome": "Nilo", "gols": 190 },
      { "nome": "Jairzinho", "gols": 189 },
      { "nome": "Octávio Moraes", "gols": 171 },
      { "nome": "Túlio Maravilha", "gols": 167 },
      { "nome": "Roberto Miranda", "gols": 154 },
      { "nome": "Dino da Costa", "gols": 144 }
    ],
  },
  {
    name: 'Bragantino', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9e/RedBullBragantino.png/210px-RedBullBragantino.png', fundacao: '1928', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 0 },
      { name: 'Campeonato Brasileiro', count: 0 },
      { name: 'Copa do Brasil', count: 0 },
    ], artilheiros: [
      { nome: "Lincom", gols: 73 },
      { nome: "Ytalo", gols: 50 },
      { nome: "Artur", gols: 38 },
      { nome: "Claudinho", gols: 33 },
      { nome: "Léo Jaime", gols: 27 },
      { nome: "Alerrandro", gols: 26 },
      { nome: "Helinho", gols: 20 },
      { nome: "Luan Cândido", gols: 17 },
      { nome: "Alan Mineiro", gols: 13 },
      { nome: "Jobinho", gols: 12 }
    ]

  },
  {
    name: 'Corinthians', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b4/Corinthians_simbolo.png/180px-Corinthians_simbolo.png', fundacao: '1910', titles: [
      { name: 'Mundial', count: 2 },
      { name: 'Libertadores', count: 1 },
      { name: 'Campeonato Brasileiro', count: 7 },
      { name: 'Copa do Brasil', count: 3 },
    ], artilheiros: [
      { nome: "Cláudio Christóvam", gols: 306 },
      { nome: "Baltazar", gols: 270 },
      { nome: "Teleco", gols: 257 },
      { nome: "Neco", gols: 242 },
      { nome: "Marcelinho Carioca", gols: 206 },
      { nome: "Servílio", gols: 200 },
      { nome: "Luizinho", gols: 174 },
      { nome: "Sócrates", gols: 172 },
      { nome: "Flávio", gols: 170 },
      { nome: "Paulo", gols: 147 }
    ]
  },
  {
    name: 'Criciúma', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/EscudoCriciumaEC.svg/180px-EscudoCriciumaEC.svg.png', fundacao: '1947', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 0 },
      { name: 'Campeonato Brasileiro', count: 0 },
      { name: 'Copa do Brasil', count: 1 },
    ]
  },
  {
    name: 'Cruzeiro', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/180px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png', fundacao: '1921', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 2 },
      { name: 'Campeonato Brasileiro', count: 4 },
      { name: 'Copa do Brasil', count: 6 },
    ], artilheiros: [
      { nome: "Tostão", gols: 242 },
      { nome: "Dirceu Lopes", gols: 223 },
      { nome: "Niginho", gols: 208 },
      { nome: "Bengala", gols: 172 },
      { nome: "Marcelo Ramos", gols: 162 },
      { nome: "Ninão", gols: 158 },
      { nome: "Palhinha", gols: 145 },
      { nome: "Alcides", gols: 144 },
      { nome: "Joãozinho", gols: 118 },
      { nome: "Raimundinho", gols: 110 }]
  },
  {
    name: 'Cuiabá', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/20/Cuiab%C3%A1EC2020.png/180px-Cuiab%C3%A1EC2020.png', fundacao: '2001', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 0 },
      { name: 'Campeonato Brasileiro', count: 0 },
      { name: 'Copa do Brasil', count: 0 },
    ], artilheiros: [
      { nome: "Fernando", gols: 54 },
      { nome: "Elton", gols: 36 },
      { nome: "Deyverson", gols: 31 },
      { nome: "Moreno", gols: 31 },
      { nome: "Robinho", gols: 29 },
      { nome: "Jenison", gols: 26 }
    ]
  },
  {
    name: 'Flamengo', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/180px-Flamengo_braz_logo.svg.png', fundacao: '1895', titles: [
      { name: 'Mundial', count: 1 },
      { name: 'Libertadores', count: 3 },
      { name: 'Campeonato Brasileiro', count: 7 },
      { name: 'Copa do Brasil', count: 4 },
    ], artilheiros: [{ "nome": "Zico", "gols": 509 }, { "nome": "Dida", "gols": 264 }, { "nome": "Henrique Frade", "gols": 216 }, { "nome": "Pirillo", "gols": 204 }, { "nome": "Romário", "gols": 204 }, { "nome": "Gabigol", "gols": 156 }, { "nome": "Jarbas", "gols": 154 }, { "nome": "Leônidas", "gols": 153 }, { "nome": "Bebeto", "gols": 151 }, { "nome": "Zizinho", "gols": 148 }]
  },
  {
    name: 'Fluminense', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FFC_crest.svg/195px-FFC_crest.svg.png', fundacao: '1902', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 1 },
      { name: 'Campeonato Brasileiro', count: 4 },
      { name: 'Copa do Brasil', count: 1 },
    ], artilheiros: [
      { "nome": "Waldo", "gols": 319 },
      { "nome": "Fred", "gols": 199 },
      { "nome": "Orlando Pingo de Ouro", "gols": 184 },
      { "nome": "Hércules", "gols": 165 },
      { "nome": "Telê Santana", "gols": 164 },
      { "nome": "Welfare", "gols": 161 },
      { "nome": "Russo", "gols": 149 },
      { "nome": "Preguinho", "gols": 128 },
      { "nome": "Washington", "gols": 124 },
      { "nome": "Magno Alves", "gols": 124 }
    ]
  },
  {
    name: 'Fortaleza', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Fortaleza_EC_2018.png/180px-Fortaleza_EC_2018.png', fundacao: '1918', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 0 },
      { name: 'Campeonato Brasileiro', count: 0 },
      { name: 'Copa do Brasil', count: 0 },
    ], artilheiros: [
      { nome: "Pikachu", gols: 52 },
      { nome: "Wellington Paulista", gols: 40 },
      { nome: "Juan Martín Lucero", gols: 39 },
      { nome: "Moisés", gols: 31 },
      { nome: "Rinaldo", gols: 27 },
      { nome: "Thiago Galhardo", gols: 27 },
      { nome: "David", gols: 25 },
      { nome: "Silvio Romero", gols: 23 },
      { nome: "Robson", gols: 21 },
      { nome: "Romarinho", gols: 21 }
    ]
  },
  {
    name: 'Grêmio', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gremio_logo.svg/180px-Gremio_logo.svg.png', fundacao: '1903', titles: [
      { name: 'Mundial', count: 1 },
      { name: 'Libertadores', count: 3 },
      { name: 'Campeonato Brasileiro', count: 2 },
      { name: 'Copa do Brasil', count: 5 },
    ], artilheiros: [
      { nome: "Alcindo", gols: 229 },
      { nome: "Tarciso", gols: 228 },
      { nome: "Gessy", gols: 208 },
      { nome: "Juarez", gols: 204 },
      { nome: "Luiz Carvalho", gols: 171 },
      { nome: "Joãozinho", gols: 135 },
      { nome: "Baltazar", gols: 131 },
      { nome: "Milton Kuelle", gols: 129 },
      { nome: "Foguinho", gols: 127 },
      { nome: "Marino", gols: 117 }
    ]

  },
  {
    name: 'Internacional', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/240px-Escudo_do_Sport_Club_Internacional.svg.png', fundacao: '1909', titles: [
      { name: 'Mundial', count: 1 },
      { name: 'Libertadores', count: 2 },
      { name: 'Campeonato Brasileiro', count: 3 },
      { name: 'Copa do Brasil', count: 1 },
    ], artilheiros: [
      { nome: "Carlitos", gols: 326 },
      { nome: "Bodinho", gols: 233 },
      { nome: "Claudiomiro", gols: 204 },
      { nome: "Valdomiro", gols: 190 },
      { nome: "Larry", gols: 180 },
      { nome: "Tesourinha", gols: 178 },
      { nome: "Villalba", gols: 148 },
      { nome: "Ivo Diogo", gols: 122 },
      { nome: "Jair", gols: 118 },
      { nome: "Adãozinho", gols: 113 }
    ]
  },
  {
    name: 'Juventude', shield: 'https://upload.wikimedia.org/wikipedia/pt/8/8c/EC_Juventude.png', fundacao: '1913', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 0 },
      { name: 'Campeonato Brasileiro', count: 0 },
      { name: 'Copa do Brasil', count: 1 },
    ]
  },
  {
    name: 'Palmeiras', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/180px-Palmeiras_logo.svg.png', fundacao: '1914', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 3 },
      { name: 'Campeonato Brasileiro', count: 12 },
      { name: 'Copa do Brasil', count: 4 },
    ], artilheiros: [
      { "nome": "Heitor", "gols": 323 },
      { "nome": "César Maluco", "gols": 182 },
      { "nome": "Ademir da Guia", "gols": 155 },
      { "nome": "Lima", "gols": 149 },
      { "nome": "Servílio", "gols": 139 },
      { "nome": "Rodrigues Tatu", "gols": 131 },
      { "nome": "Humberto Tozzi", "gols": 127 },
      { "nome": "Evair", "gols": 126 },
      { "nome": "Luizinho Tupãzinho", "gols": 122 }
    ],
  },
  {
    name: 'São Paulo', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/S%C3%A3o_Paulo_Futebol_Clube.png/180px-S%C3%A3o_Paulo_Futebol_Clube.png', fundacao: '1930', titles: [
      { name: 'Mundial', count: 3 },
      { name: 'Libertadores', count: 3 },
      { name: 'Campeonato Brasileiro', count: 6 },
      { name: 'Copa do Brasil', count: 1 },
    ], artilheiros: [
      {
        nome: "Serginho Chulapa",
        gols: 242
      },
      {
        nome: "Gino Orlando",
        gols: 233
      },
      {
        nome: "Luis Fabiano",
        gols: 212
      },
      {
        nome: "Teixeirinha",
        gols: 188
      },
      {
        nome: "França",
        gols: 182
      },
      {
        nome: "Luizinho",
        gols: 173
      },
      {
        nome: "Müller",
        gols: 160
      },
      {
        nome: "Leônidas",
        gols: 144
      },
      {
        nome: "Maurinho",
        gols: 136
      },
      {
        nome: "Rogério Ceni",
        gols: 131
      }
    ]
  },
  {
    name: 'Vasco', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ac/CRVascodaGama.png/180px-CRVascodaGama.png', fundacao: '1898', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 1 },
      { name: 'Campeonato Brasileiro', count: 4 },
      { name: 'Copa do Brasil', count: 1 },
    ], artilheiros: [
      { "nome": "Roberto Dinamite", "gols": 708 },
      { "nome": "Romário", "gols": 326 },
      { "nome": "Ademir de Menezes", "gols": 301 },
      { "nome": "Pinga", "gols": 250 },
      { "nome": "Russinho", "gols": 230 },
      { "nome": "Ipojucan", "gols": 225 },
      { "nome": "Vavá", "gols": 191 },
      { "nome": "Sabará", "gols": 165 },
      { "nome": "Lelé", "gols": 147 },
      { "nome": "Valdir Bigode", "gols": 144 }
    ]

  },
  {
    name: 'Vitória', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/34/Esporte_Clube_Vit%C3%B3ria_logo.png/180px-Esporte_Clube_Vit%C3%B3ria_logo.png', fundacao: '1899', titles: [
      { name: 'Mundial', count: 0 },
      { name: 'Libertadores', count: 0 },
      { name: 'Campeonato Brasileiro', count: 0 },
      { name: 'Copa do Brasil', count: 0 },
    ], artilheiros: [
      { "nome": "Dinei", "gols": 37 },
      { "nome": "Marquinhos", "gols": 33 },
      { "nome": "Léo Ceará", "gols": 25 },
      { "nome": "Neto Baiano", "gols": 24 },
      { "nome": "Santiago Tréllez", "gols": 22 },
      { "nome": "Élton", "gols": 21 }
    ]

  }
];

export default teams;
