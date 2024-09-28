const database= 'BD3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

db[collection].insertMany(
[
        {
          "nome": "Smartphone XYZ",
          "valor": 1500.00,
          "quantidade_estoque": 25,
          "fabricante": "TechCorp",
          "categoria": "Eletrônicos",
          "descricao": "Smartphone com 64GB de memória, câmera dupla e tela HD."
        },
        {
          "nome": "Notebook ABC",
          "valor": 3500.00,
          "quantidade_estoque": 10,
          "fabricante": "Computech",
          "categoria": "Informática",
          "descricao": "Notebook de alto desempenho com 16GB RAM e 512GB SSD."
        },
        {
          "nome": "TV 4K Ultra HD",
          "valor": 2500.00,
          "quantidade_estoque": 15,
          "fabricante": "VisionTech",
          "categoria": "Eletrônicos",
          "descricao": "TV 4K com 55 polegadas e integração com assistente de voz."
        },
        {
          "nome": "Geladeira FrostFree",
          "valor": 1800.00,
          "quantidade_estoque": 8,
          "fabricante": "CoolHome",
          "categoria": "Eletrodomésticos",
          "descricao": "Geladeira com capacidade de 450L e sistema frost-free."
        },
        {
          "nome": "Cadeira de Escritório Ergonomica",
          "valor": 450.00,
          "quantidade_estoque": 20,
          "fabricante": "Conforto Office",
          "categoria": "Móveis",
          "descricao": "Cadeira com ajuste de altura, apoio para lombar e rodízios."
        },
        {
          "nome": "Mouse Gamer",
          "valor": 120.00,
          "quantidade_estoque": 50,
          "fabricante": "GamePro",
          "categoria": "Informática",
          "descricao": "Mouse gamer com 6 botões, DPI ajustável e iluminação RGB."
        },
        {
          "nome": "Cafeteira Elétrica",
          "valor": 200.00,
          "quantidade_estoque": 30,
          "fabricante": "CaféMax",
          "categoria": "Eletrodomésticos",
          "descricao": "Cafeteira elétrica com capacidade para 1.5L e filtro removível."
        },
        {
          "nome": "Fone de Ouvido Bluetooth",
          "valor": 300.00,
          "quantidade_estoque": 40,
          "fabricante": "SoundMax",
          "categoria": "Eletrônicos",
          "descricao": "Fone de ouvido sem fio com cancelamento de ruído ativo."
        },
        {
          "nome": "Teclado Mecânico",
          "valor": 250.00,
          "quantidade_estoque": 35,
          "fabricante": "KeyMaster",
          "categoria": "Informática",
          "descricao": "Teclado mecânico com switches azuis e iluminação RGB."
        },
        {
          "nome": "Monitor Full HD",
          "valor": 800.00,
          "quantidade_estoque": 12,
          "fabricante": "DisplayTech",
          "categoria": "Informática",
          "descricao": "Monitor de 24 polegadas com resolução Full HD e portas HDMI."
        },
        {
          "nome": "Air Fryer Digital",
          "valor": 450.00,
          "quantidade_estoque": 22,
          "fabricante": "FryKing",
          "categoria": "Eletrodomésticos",
          "descricao": "Fritadeira sem óleo com painel digital e capacidade de 4L."
        },
        {
          "nome": "Aspirador de Pó Vertical",
          "valor": 350.00,
          "quantidade_estoque": 18,
          "fabricante": "CleanHome",
          "categoria": "Eletrodomésticos",
          "descricao": "Aspirador de pó vertical com filtro HEPA e 2 níveis de sucção."
        },
        {
          "nome": "Sofá 3 Lugares",
          "valor": 1500.00,
          "quantidade_estoque": 7,
          "fabricante": "Comfort Living",
          "categoria": "Móveis",
          "descricao": "Sofá de 3 lugares com tecido resistente e assentos reclináveis."
        },
        {
          "nome": "Mesa de Jantar 6 Lugares",
          "valor": 1200.00,
          "quantidade_estoque": 5,
          "fabricante": "MadeiraFina",
          "categoria": "Móveis",
          "descricao": "Mesa de jantar de madeira para 6 pessoas, design moderno."
        },
        {
          "nome": "Ventilador de Coluna",
          "valor": 200.00,
          "quantidade_estoque": 25,
          "fabricante": "BreezeMax",
          "categoria": "Eletrodomésticos",
          "descricao": "Ventilador de coluna com ajuste de altura e 3 velocidades."
        },
        {
          "nome": "Liquidificador 800W",
          "valor": 150.00,
          "quantidade_estoque": 30,
          "fabricante": "BlenderTech",
          "categoria": "Eletrodomésticos",
          "descricao": "Liquidificador de alta potência com 5 velocidades e copo de 2L."
        },
        {
          "nome": "Tênis Esportivo",
          "valor": 300.00,
          "quantidade_estoque": 40,
          "fabricante": "RunFast",
          "categoria": "Vestuário",
          "descricao": "Tênis esportivo leve e confortável, ideal para corridas."
        },
        {
          "nome": "Jaqueta Corta-Vento",
          "valor": 350.00,
          "quantidade_estoque": 20,
          "fabricante": "WindBlock",
          "categoria": "Vestuário",
          "descricao": "Jaqueta impermeável com capuz e fechamento em zíper."
        },
        {
          "nome": "Relógio Digital",
          "valor": 500.00,
          "quantidade_estoque": 30,
          "fabricante": "TimePro",
          "categoria": "Acessórios",
          "descricao": "Relógio digital com cronômetro, alarme e resistência à água."
        },
        {
          "nome": "Mochila de Couro",
          "valor": 600.00,
          "quantidade_estoque": 15,
          "fabricante": "LeatherStyle",
          "categoria": "Acessórios",
          "descricao": "Mochila de couro legítimo com compartimentos para notebook."
        },
        {
            "nome": "Caixa de Som Bluetooth",
            "valor": 350.00,
            "quantidade_estoque": 30,
            "fabricante": "SoundPro",
            "categoria": "Eletrônicos",
            "descricao": "Caixa de som portátil com conexão Bluetooth e à prova d'água."
          },
          {
            "nome": "Smartwatch Fitness",
            "valor": 700.00,
            "quantidade_estoque": 20,
            "fabricante": "FitTech",
            "categoria": "Acessórios",
            "descricao": "Smartwatch com monitoramento de batimentos, passos e sono."
          },
          {
            "nome": "Drone com Câmera HD",
            "valor": 1200.00,
            "quantidade_estoque": 10,
            "fabricante": "SkyTech",
            "categoria": "Eletrônicos",
            "descricao": "Drone com câmera HD, controle remoto e alcance de 500 metros."
          },
          {
            "nome": "Tênis de Caminhada",
            "valor": 250.00,
            "quantidade_estoque": 35,
            "fabricante": "ComfortWalk",
            "categoria": "Vestuário",
            "descricao": "Tênis de caminhada com solado antiderrapante e amortecimento."
          },
          {
            "nome": "Bicicleta Aro 29",
            "valor": 2000.00,
            "quantidade_estoque": 12,
            "fabricante": "BikePlus",
            "categoria": "Esportes",
            "descricao": "Bicicleta aro 29 com 21 marchas e quadro de alumínio."
          },
          {
            "nome": "Barraca de Camping",
            "valor": 500.00,
            "quantidade_estoque": 20,
            "fabricante": "CampMaster",
            "categoria": "Esportes",
            "descricao": "Barraca para 4 pessoas, resistente à chuva e fácil de montar."
          },
          {
            "nome": "Patins InLine",
            "valor": 400.00,
            "quantidade_estoque": 18,
            "fabricante": "RollerMax",
            "categoria": "Esportes",
            "descricao": "Patins in-line com rodas de silicone e freio traseiro."
          },
          {
            "nome": "Camiseta Dry Fit",
            "valor": 80.00,
            "quantidade_estoque": 60,
            "fabricante": "SportWear",
            "categoria": "Vestuário",
            "descricao": "Camiseta dry fit com tecnologia de absorção de suor."
          },
          {
            "nome": "Raquete de Tênis Profissional",
            "valor": 800.00,
            "quantidade_estoque": 10,
            "fabricante": "ProRacket",
            "categoria": "Esportes",
            "descricao": "Raquete de tênis leve e resistente, com cordas de alta tensão."
          },
          {
            "nome": "Violão Acústico",
            "valor": 700.00,
            "quantidade_estoque": 15,
            "fabricante": "MusicMax",
            "categoria": "Instrumentos Musicais",
            "descricao": "Violão acústico de 6 cordas com acabamento em madeira natural."
          },
          {
            "nome": "Teclado Musical",
            "valor": 1200.00,
            "quantidade_estoque": 8,
            "fabricante": "MelodyTech",
            "categoria": "Instrumentos Musicais",
            "descricao": "Teclado musical com 61 teclas e função de gravação."
          },
          {
            "nome": "Fone de Ouvido Over-Ear",
            "valor": 250.00,
            "quantidade_estoque": 40,
            "fabricante": "SoundMax",
            "categoria": "Eletrônicos",
            "descricao": "Fone de ouvido over-ear com graves potentes e cabo removível."
          },
          {
            "nome": "Câmera Fotográfica DSLR",
            "valor": 3500.00,
            "quantidade_estoque": 5,
            "fabricante": "PhotoPro",
            "categoria": "Eletrônicos",
            "descricao": "Câmera DSLR com sensor de 24MP e lente de 18-55mm."
          },
          {
            "nome": "Lente para Câmera 50mm",
            "valor": 1200.00,
            "quantidade_estoque": 10,
            "fabricante": "LensMaster",
            "categoria": "Eletrônicos",
            "descricao": "Lente fixa 50mm para câmeras DSLR, ideal para retratos."
          },
          {
            "nome": "Impressora Multifuncional",
            "valor": 900.00,
            "quantidade_estoque": 12,
            "fabricante": "PrintTech",
            "categoria": "Informática",
            "descricao": "Impressora multifuncional com scanner e conexão Wi-Fi."
          },
          {
            "nome": "Guarda-Chuva Automático",
            "valor": 80.00,
            "quantidade_estoque": 50,
            "fabricante": "RainBlock",
            "categoria": "Acessórios",
            "descricao": "Guarda-chuva automático com abertura rápida e estrutura reforçada."
          },
          {
            "nome": "Carregador Portátil 10.000mAh",
            "valor": 150.00,
            "quantidade_estoque": 40,
            "fabricante": "PowerBank",
            "categoria": "Eletrônicos",
            "descricao": "Carregador portátil com capacidade de 10.000mAh e 2 portas USB."
          },
          {
            "nome": "Suporte para Celular Veicular",
            "valor": 50.00,
            "quantidade_estoque": 100,
            "fabricante": "AutoMount",
            "categoria": "Acessórios",
            "descricao": "Suporte para celular veicular com ajuste de ângulo e ventosa."
          },
          {
            "nome": "Garrafa Térmica Inox 1L",
            "valor": 120.00,
            "quantidade_estoque": 35,
            "fabricante": "ThermoMax",
            "categoria": "Utilidades Domésticas",
            "descricao": "Garrafa térmica de inox com capacidade de 1 litro e tampa de pressão."
          },
          {
            "nome": "Jogo de Panelas Antiaderentes",
            "valor": 400.00,
            "quantidade_estoque": 20,
            "fabricante": "CookPro",
            "categoria": "Utilidades Domésticas",
            "descricao": "Conjunto de 5 panelas antiaderentes com cabos ergonômicos."
          },
          {
            "nome": "Cadeira Gamer",
            "valor": 1100.00,
            "quantidade_estoque": 8,
            "fabricante": "GameChair",
            "categoria": "Móveis",
            "descricao": "Cadeira gamer ergonômica com ajuste de altura e inclinação."
          },
          {
            "nome": "Estante de Livros",
            "valor": 600.00,
            "quantidade_estoque": 12,
            "fabricante": "HomeDecor",
            "categoria": "Móveis",
            "descricao": "Estante de madeira para livros com 5 prateleiras e design moderno."
          },
          {
            "nome": "Cama Box Casal",
            "valor": 1800.00,
            "quantidade_estoque": 5,
            "fabricante": "ComfortSleep",
            "categoria": "Móveis",
            "descricao": "Cama box casal com colchão de molas ensacadas e pillow top."
          },
          {
            "nome": "Travesseiro de Espuma",
            "valor": 80.00,
            "quantidade_estoque": 60,
            "fabricante": "DreamPillow",
            "categoria": "Cama, Mesa e Banho",
            "descricao": "Travesseiro de espuma viscoelástica com tecnologia de ventilação."
          },
          {
            "nome": "Jogo de Lençol Queen",
            "valor": 200.00,
            "quantidade_estoque": 25,
            "fabricante": "BedComfort",
            "categoria": "Cama, Mesa e Banho",
            "descricao": "Jogo de lençol 100% algodão para cama queen size, 4 peças."
          },
          {
            "nome": "Chaleira Elétrica 1.7L",
            "valor": 150.00,
            "quantidade_estoque": 30,
            "fabricante": "KitchenTech",
            "categoria": "Eletrodomésticos",
            "descricao": "Chaleira elétrica com capacidade de 1.7L e desligamento automático."
          },
          {
            "nome": "Secador de Cabelo Profissional",
            "valor": 250.00,
            "quantidade_estoque": 20,
            "fabricante": "HairPro",
            "categoria": "Beleza",
            "descricao": "Secador de cabelo com motor de alta potência e difusor."
          }
          
      ])
      