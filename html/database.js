const STATS = [
  {
    "name": "Chance",
    "min": -200,
    "max": 80
  },
  {
    "name": "Force",
    "min": -250,
    "max": 80
  },
  {
    "name": "Agilité",
    "min": -250,
    "max": 100
  },
  {
    "name": "Sagesse",
    "min": -23,
    "max": 60
  },
  {
    "name": "Intelligence",
    "min": -200,
    "max": 80
  },
  {
    "name": "Vitalité",
    "min": -101,
    "max": 400
  },
  {
    "name": "Prospection",
    "min": -31,
    "max": 30
  },
  {
    "name": "Dommages",
    "min": 1,
    "max": 30
  },
  {
    "name": "Résistance feu (%)",
    "min": 1,
    "max": 14
  },
  {
    "name": "Résistance terre (%)",
    "min": 1,
    "max": 14
  },
  {
    "name": "Faiblesse neutre (%)",
    "min": 1,
    "max": 10
  },
  {
    "name": "Créature invocables",
    "min": 1,
    "max": 6
  },
  {
    "name": "Coup critiques",
    "min": 1,
    "max": 10
  },
  {
    "name": "Initiative",
    "min": -500,
    "max": 2000
  },
  {
    "name": "Résistance eau",
    "min": 1,
    "max": 20
  },
  {
    "name": "Résistance air",
    "min": 1,
    "max": 20
  },
  {
    "name": "Résistance feu",
    "min": 1,
    "max": 20
  },
  {
    "name": "Portée",
    "min": -2,
    "max": 2
  },
  {
    "name": "Résistance air (%)",
    "min": 1,
    "max": 14
  },
  {
    "name": "Résistance eau (%)",
    "min": 1,
    "max": 14
  },
  {
    "name": "Soins",
    "min": 1,
    "max": 100
  },
  {
    "name": "PA",
    "min": 1,
    "max": 1
  },
  {
    "name": "Dommages (%)",
    "min": 1,
    "max": 50
  },
  {
    "name": "Faiblesse air (%)",
    "min": 1,
    "max": 10
  },
  {
    "name": "Résistance terre",
    "min": 1,
    "max": 15
  },
  {
    "name": "Résistance neutre",
    "min": 1,
    "max": 20
  },
  {
    "name": "Faiblesse eau (%)",
    "min": 1,
    "max": 15
  },
  {
    "name": "Faiblesse feu (%)",
    "min": 1,
    "max": 15
  },
  {
    "name": "Faiblesse terre (%)",
    "min": 1,
    "max": 10
  },
  {
    "name": "Résistance neutre (%)",
    "min": 1,
    "max": 15
  },
  {
    "name": "PM",
    "min": 1,
    "max": 1
  },
  {
    "name": "Echec critique",
    "min": 1,
    "max": 13
  },
  {
    "name": "Renvois de dommages",
    "min": 1,
    "max": 11
  },
  {
    "name": "PM perdu à la cible",
    "min": 1,
    "max": 2
  },
  {
    "name": "PA perdu à la cible",
    "min": 1,
    "max": 3
  },
  {
    "name": "Pods",
    "min": -1,
    "max": 800
  }
]

const ITEMS = [
  {
    "type": "Amulette",
    "level": 1,
    "name": "Amulette de l'Aventurier",
    "imageUrl": "html/img/amulette_de_laventurier.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Amulette du Petit Hibou",
    "imageUrl": "html/img/amulette_du_petit_hibou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Amulette du Petit Ours",
    "imageUrl": "html/img/amulette_du_petit_ours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Amulette du Piou Rose",
    "imageUrl": "html/img/amulette_du_piou_rose.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Amulette du Piou Rouge",
    "imageUrl": "html/img/amulette_du_piou_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Amulette du Piou Jaune",
    "imageUrl": "html/img/amulette_du_piou_jaune.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Amulette du Piou Vert",
    "imageUrl": "html/img/amulette_du_piou_vert.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Amulette du Piou Bleu",
    "imageUrl": "html/img/amulette_du_piou_bleu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Le S'Mesme",
    "imageUrl": "html/img/le_smesme.png",
    "damages": [],
    "effects": [
      {
        "stat": "Prospection",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Amulette du Piou Violet",
    "imageUrl": "html/img/amulette_du_piou_violet.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Koliet Aclou",
    "imageUrl": "html/img/koliet_aclou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Grenouillette",
    "imageUrl": "html/img/grenouillette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Petite Amulette du Hibou",
    "imageUrl": "html/img/petite_amulette_du_hibou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Petite Amulette de l'Ours",
    "imageUrl": "html/img/petite_amulette_de_lours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 1,
    "name": "Petite Amulette du Loup",
    "imageUrl": "html/img/petite_amulette_du_loup.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 2,
    "name": "Amulette du Loup",
    "imageUrl": "html/img/amulette_du_loup.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 2,
    "name": "La Larme du Bouftou",
    "imageUrl": "html/img/la_larme_du_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 2,
    "name": "Amulette de l'Ours",
    "imageUrl": "html/img/amulette_de_lours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 2,
    "name": "Pendentif du Hibou Chétif",
    "imageUrl": "html/img/pendentif_du_hibou_chetif.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -6,
        "max": -10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 2,
    "name": "Amulette du Hibou",
    "imageUrl": "html/img/amulette_du_hibou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 2,
    "name": "Amulette du Sram",
    "imageUrl": "html/img/amulette_du_sram.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 3,
    "name": "Amulette du Bouftou",
    "imageUrl": "html/img/amulette_du_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 6,
    "name": "Collier de l'Arc en Ciel",
    "imageUrl": "html/img/collier_de_larc_en_ciel.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 6,
    "name": "Belle Amulette de l'Ours",
    "imageUrl": "html/img/belle_amulette_de_lours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 6,
    "name": "Belle Amulette du Hibou",
    "imageUrl": "html/img/belle_amulette_du_hibou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 6,
    "name": "Amulette de Krokette",
    "imageUrl": "html/img/amulette_de_krokette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 6,
    "name": "Belle Amulette du Loup",
    "imageUrl": "html/img/belle_amulette_du_loup.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 8,
    "name": "Puissante Amulette du Hibou",
    "imageUrl": "html/img/puissante_amulette_du_hibou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 8,
    "name": "Puissante Amulette de l'Ours",
    "imageUrl": "html/img/puissante_amulette_de_lours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 8,
    "name": "Puissante Amulette du Loup",
    "imageUrl": "html/img/puissante_amulette_du_loup.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 10,
    "name": "Amulette des Champs",
    "imageUrl": "html/img/amulette_des_champs.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Agilité",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 10,
    "name": "Amulette Itby",
    "imageUrl": "html/img/amulette_itby.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 11,
    "name": "Amulette en Mousse",
    "imageUrl": "html/img/amulette_en_mousse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 12,
    "name": "La Destinée Dorée",
    "imageUrl": "html/img/la_destinee_doree.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 6
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 13,
    "name": "La Chaîne Nhanor Kibrill",
    "imageUrl": "html/img/la_chaine_nhanor_kibrill.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 15,
    "name": "La Lou Ptiote",
    "imageUrl": "html/img/la_lou_ptiote.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 17
      },
      {
        "stat": "Résistance feu (%)",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 15,
    "name": "Amulette du Moskito",
    "imageUrl": "html/img/amulette_du_moskito.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 15,
    "name": "La Veaux Doux",
    "imageUrl": "html/img/la_veaux_doux.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 17
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 16,
    "name": "Amulette du Bandit",
    "imageUrl": "html/img/amulette_du_bandit.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Faiblesse neutre (%)",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 17,
    "name": "Amulette Itby remaniée",
    "imageUrl": "html/img/amulette_itby_remaniee.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 20,
        "max": 20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 17,
    "name": "Omelette Amulette",
    "imageUrl": "html/img/omelette_amulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -30
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 17,
    "name": "La Gougnole",
    "imageUrl": "html/img/la_gougnole.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Intelligence",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Vitalité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 19,
    "name": "Amulette du Chafer",
    "imageUrl": "html/img/amulette_du_chafer.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Sagesse",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 20,
    "name": "Amulette Paysanne",
    "imageUrl": "html/img/amulette_paysanne.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 50
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 20,
    "name": "Amulette de l'Homme Ours",
    "imageUrl": "html/img/amulette_de_lhomme_ours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 20,
    "name": "L'Araknamu",
    "imageUrl": "html/img/laraknamu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 20,
    "name": "Amulette du Boufcoul",
    "imageUrl": "html/img/amulette_du_boufcoul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 22,
    "name": "Amulette du Tofu",
    "imageUrl": "html/img/amulette_du_tofu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 22,
    "name": "Amulette du Marin",
    "imageUrl": "html/img/amulette_du_marin.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 22,
    "name": "La Reinette",
    "imageUrl": "html/img/la_reinette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 22,
    "name": "Amulette du Bûcheron",
    "imageUrl": "html/img/amulette_du_bucheron.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 15,
        "max": 15
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 24,
    "name": "Amulette en Crabe",
    "imageUrl": "html/img/amulette_en_crabe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 26,
    "name": "Amulette du Kitsou",
    "imageUrl": "html/img/amulette_du_kitsou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 40
      },
      {
        "stat": "Initiative",
        "min": 50,
        "max": 50
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 26,
    "name": "Larvamulette",
    "imageUrl": "html/img/larvamulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 26,
    "name": "Entente",
    "imageUrl": "html/img/entente.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Agilité",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Chance",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 27,
    "name": "La Célébrité",
    "imageUrl": "html/img/la_celebrite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 28,
    "name": "La Broche Hète",
    "imageUrl": "html/img/la_broche_hete.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 29,
    "name": "Kabale",
    "imageUrl": "html/img/kabale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": 20,
        "max": 20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 29,
    "name": "Amulette de Shika",
    "imageUrl": "html/img/amulette_de_shika.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 31,
        "max": 50
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 30,
    "name": "La Bibelaw",
    "imageUrl": "html/img/la_bibelaw.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance air (%)",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance eau (%)",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu (%)",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance terre (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 31,
    "name": "Médaille Holy",
    "imageUrl": "html/img/medaille_holy.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 31,
    "name": "Médaille Lahilama",
    "imageUrl": "html/img/medaille_lahilama.png",
    "damages": [],
    "effects": [
      {
        "stat": "Soins",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 32,
    "name": "Dragolyre",
    "imageUrl": "html/img/dragolyre.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": -35,
        "max": -35
      },
      {
        "stat": "Intelligence",
        "min": -35,
        "max": -35
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": -35,
        "max": -35
      },
      {
        "stat": "Agilité",
        "min": -35,
        "max": -35
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 32,
    "name": "Amulette du Badoul",
    "imageUrl": "html/img/amulette_du_badoul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 32,
    "name": "La Bourgeonette",
    "imageUrl": "html/img/la_bourgeonette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": -16,
        "max": -25
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 33,
    "name": "Amulette Deulegarnoulle",
    "imageUrl": "html/img/amulette_deulegarnoulle.png",
    "damages": [],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 33,
    "name": "Fourbamulette",
    "imageUrl": "html/img/fourbamulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 34,
    "name": "Ambramulette Arackne",
    "imageUrl": "html/img/ambramulette_arackne.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 35,
    "name": "Amulette du Pêcheur de Somoon",
    "imageUrl": "html/img/amulette_du_pecheur_de_somoon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 12,
        "max": 41
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 37,
    "name": "Amulette de Silicate",
    "imageUrl": "html/img/amulette_de_silicate.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": -30,
        "max": -30
      },
      {
        "stat": "Vitalité",
        "min": -20,
        "max": -20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 38,
    "name": "Accord",
    "imageUrl": "html/img/accord.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Sagesse",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 39,
    "name": "Amulette du Mineur Sombre",
    "imageUrl": "html/img/amulette_du_mineur_sombre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Faiblesse eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Faiblesse feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Faiblesse terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 40,
    "name": "Ambramulette Moskito",
    "imageUrl": "html/img/ambramulette_moskito.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": -11,
        "max": -20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 40,
    "name": "La Broche Céleste",
    "imageUrl": "html/img/la_broche_celeste.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 2
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": -20,
        "max": -20
      },
      {
        "stat": "Sagesse",
        "min": -20,
        "max": -20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 40,
    "name": "Vegamu",
    "imageUrl": "html/img/vegamu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 70
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -20
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 40,
    "name": "Bambamulette",
    "imageUrl": "html/img/bambamulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 41,
    "name": "Amulette du Pirate",
    "imageUrl": "html/img/amulette_du_pirate.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 41,
    "name": "Emblème Livide",
    "imageUrl": "html/img/embleme_livide.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Force",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Sagesse",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": -20,
        "max": -20
      },
      {
        "stat": "Agilité",
        "min": -20,
        "max": -20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 41,
    "name": "Amulette Akwadala",
    "imageUrl": "html/img/amulette_akwadala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 42,
    "name": "Le foulard du Lard Fou",
    "imageUrl": "html/img/le_foulard_du_lard_fou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 42,
    "name": "Dragolyre Remaniée",
    "imageUrl": "html/img/dragolyre_remaniee.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Agilité",
        "min": -15,
        "max": -15
      },
      {
        "stat": "Chance",
        "min": -15,
        "max": -15
      },
      {
        "stat": "Force",
        "min": -15,
        "max": -15
      },
      {
        "stat": "Intelligence",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 42,
    "name": "Amukwak de Glace",
    "imageUrl": "html/img/amukwak_de_glace.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 42,
    "name": "Amukwak du Vent",
    "imageUrl": "html/img/amukwak_du_vent.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 42,
    "name": "Amukwak de Flammes",
    "imageUrl": "html/img/amukwak_de_flammes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 42,
    "name": "Amukwak de Terre",
    "imageUrl": "html/img/amukwak_de_terre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 43,
    "name": "Collier Sleump",
    "imageUrl": "html/img/collier_sleump.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 43,
    "name": "Amulette du Kam Assutra",
    "imageUrl": "html/img/amulette_du_kam_assutra.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 43,
    "name": "La Chaplivate",
    "imageUrl": "html/img/la_chaplivate.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 43,
    "name": "Tartamulette",
    "imageUrl": "html/img/tartamulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 44,
    "name": "L'Amulette du Puzzle de la Griffe",
    "imageUrl": "html/img/lamulette_du_puzzle_de_la_griffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 44,
    "name": "Chance à Mulette",
    "imageUrl": "html/img/chance_a_mulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Prospection",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 45,
    "name": "Amulette Scarabosse Doré",
    "imageUrl": "html/img/amulette_scarabosse_dore.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 45,
    "name": "Chaîne de la Liche",
    "imageUrl": "html/img/chaine_de_la_liche.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": -11,
        "max": -50
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 45,
    "name": "La Feuille d'Eté",
    "imageUrl": "html/img/la_feuille_dete.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 10
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Faiblesse feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Faiblesse terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 46,
    "name": "Craquamulette",
    "imageUrl": "html/img/craquamulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 8
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 8
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 8
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 46,
    "name": "L'Abramu",
    "imageUrl": "html/img/labramu.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -70
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -70
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -70
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -70
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 47,
    "name": "Amulette des Abîmes",
    "imageUrl": "html/img/amulette_des_abimes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 2,
        "max": 21
      },
      {
        "stat": "Chance",
        "min": 20,
        "max": 20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 47,
    "name": "Amulette Papayou",
    "imageUrl": "html/img/amulette_papayou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 47,
    "name": "Amulette du Craqueleur",
    "imageUrl": "html/img/amulette_du_craqueleur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 47,
    "name": "Harmonie",
    "imageUrl": "html/img/harmonie.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 15,
        "max": 15
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 49,
    "name": "Amulette de la Boule",
    "imageUrl": "html/img/amulette_de_la_boule.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 7
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 50,
    "name": "Amublop Griotte",
    "imageUrl": "html/img/amublop_griotte.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 50,
    "name": "Amulette Royale du Bouftou",
    "imageUrl": "html/img/amulette_royale_du_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 30
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 50,
    "name": "Amublop Coco",
    "imageUrl": "html/img/amublop_coco.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 50,
    "name": "Amublop Reinette",
    "imageUrl": "html/img/amublop_reinette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 50,
    "name": "Amublop Indigo",
    "imageUrl": "html/img/amublop_indigo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 51,
    "name": "Médaille Oly",
    "imageUrl": "html/img/medaille_oly.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 6,
        "max": 6
      },
      {
        "stat": "Force",
        "min": 20,
        "max": 20
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 52,
    "name": "Amulette de Xélor",
    "imageUrl": "html/img/amulette_de_xelor.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 52,
    "name": "Amulette du Craqueleur des Plaines",
    "imageUrl": "html/img/amulette_du_craqueleur_des_plaines.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 8
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 52,
    "name": "L'Oeil de Kanigrou",
    "imageUrl": "html/img/loeil_de_kanigrou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 55,
    "name": "Talisman du Faucheur d'Avoine",
    "imageUrl": "html/img/talisman_du_faucheur_davoine.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 57,
    "name": "Amuloumulette",
    "imageUrl": "html/img/amuloumulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 6,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 60,
    "name": "Amulette du Koalak",
    "imageUrl": "html/img/amulette_du_koalak.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 60,
    "name": "Amulette Dents de Wabbits",
    "imageUrl": "html/img/amulette_\" dents_de_wabbits\".png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 60,
    "name": "Gelamu",
    "imageUrl": "html/img/gelamu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 101,
        "max": 400
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 62,
    "name": "Amulette Aerdala",
    "imageUrl": "html/img/amulette_aerdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 62,
    "name": "Le Flan des Étoiles",
    "imageUrl": "html/img/le_flan_des_etoiles.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 63,
    "name": "Amulette Turquoise",
    "imageUrl": "html/img/amulette_turquoise.png",
    "damages": [],
    "effects": [
      {
        "stat": "Prospection",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 69,
    "name": "La Maîtrise des Poupées",
    "imageUrl": "html/img/la_maitrise_des_poupees.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 70,
    "name": "Amulette du Chef Crocodaille",
    "imageUrl": "html/img/amulette_du_chef_crocodaille.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 77,
    "name": "La Doubitch O'Boul",
    "imageUrl": "html/img/la_doubitch_oboul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 80,
    "name": "Amublop Indigo Royale",
    "imageUrl": "html/img/amublop_indigo_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 80,
    "name": "Epis de Shika",
    "imageUrl": "html/img/epis_de_shika.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 7
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 80,
    "name": "Amulette Terrdala",
    "imageUrl": "html/img/amulette_terrdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 80,
    "name": "Amublop Reinette Royale",
    "imageUrl": "html/img/amublop_reinette_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 80,
    "name": "Epis de Farle",
    "imageUrl": "html/img/epis_de_farle.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 7
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 80,
    "name": "Amublop Coco Royale",
    "imageUrl": "html/img/amublop_coco_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 80,
    "name": "Amublop Griotte Royale",
    "imageUrl": "html/img/amublop_griotte_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 82,
    "name": "Amulette Argie",
    "imageUrl": "html/img/amulette_argie.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 84,
    "name": "Amulette du Craqueleur Légendaire",
    "imageUrl": "html/img/amulette_du_craqueleur_legendaire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 84,
    "name": "Amufafah",
    "imageUrl": "html/img/amufafah.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 89,
    "name": "La Feuille d'Automne",
    "imageUrl": "html/img/la_feuille_dautomne.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Coup critiques",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 50
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Force",
        "min": -50,
        "max": -50
      },
      {
        "stat": "Intelligence",
        "min": -50,
        "max": -50
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 90,
    "name": "Amublop Multicolore Royale",
    "imageUrl": "html/img/amublop_multicolore_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Dommages (%)",
        "min": 21,
        "max": 30
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 91,
    "name": "Amulette Feudala",
    "imageUrl": "html/img/amulette_feudala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 94,
    "name": "La Résinette",
    "imageUrl": "html/img/la_resinette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 98,
    "name": "Amulette de la Bouboule",
    "imageUrl": "html/img/amulette_de_la_bouboule.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 98,
    "name": "La Feuille d'Hiver",
    "imageUrl": "html/img/la_feuille_dhiver.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Dommages (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 100,
    "name": "Collier du Dragon Cochon",
    "imageUrl": "html/img/collier_du_dragon_cochon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 100,
    "name": "Amulette du Chef Bwork",
    "imageUrl": "html/img/amulette_du_chef_bwork.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 36,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 4
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 81,
        "max": 100
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 103,
    "name": "Collier du Rat Blanc",
    "imageUrl": "html/img/collier_du_rat_blanc.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 200,
        "max": 200
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 103,
    "name": "Collier du Rat Noir",
    "imageUrl": "html/img/collier_du_rat_noir.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "+6 à 10 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "16 à 25% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 105,
    "name": "Ouassulette",
    "imageUrl": "html/img/ouassulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 110,
    "name": "Torque Ancestral",
    "imageUrl": "html/img/torque_ancestral.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 111,
    "name": "Collier du Minotoror",
    "imageUrl": "html/img/collier_du_minotoror.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 45
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 123,
    "name": "La Feuille de Printemps",
    "imageUrl": "html/img/la_feuille_de_printemps.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 124,
    "name": "Amulette du Dragoeuf",
    "imageUrl": "html/img/amulette_du_dragoeuf.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 100
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "11 à 20% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 125,
    "name": "Médaille Kido",
    "imageUrl": "html/img/medaille_kido.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 126,
    "name": "Amulette du Renouveau",
    "imageUrl": "html/img/amulette_du_renouveau.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 130,
    "name": "Plimclik",
    "imageUrl": "html/img/plimclik.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 134,
    "name": "Collier Cérémonial du Seigneur des Rats",
    "imageUrl": "html/img/collier_ceremonial_du_seigneur_des_rats.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 135,
    "name": "Talisman d'Elya Wood",
    "imageUrl": "html/img/talisman_delya_wood.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Résistance feu",
        "min": 9,
        "max": 13
      },
      {
        "stat": "Résistance terre",
        "min": 9,
        "max": 13
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 138,
    "name": "Talisman du Chêne Mou",
    "imageUrl": "html/img/talisman_du_chene_mou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 143,
    "name": "La Meulette",
    "imageUrl": "html/img/la_meulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 4
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 152,
    "name": "Collier du Tanukouï San",
    "imageUrl": "html/img/collier_du_tanukoui_san.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 401,
        "max": 700
      },
      {
        "stat": "Résistance neutre",
        "min": 8,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 8,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 158,
    "name": "Collier du Minotot",
    "imageUrl": "html/img/collier_du_minotot.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 181,
        "max": 230
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 162,
    "name": "Zothulette",
    "imageUrl": "html/img/zothulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 181,
    "name": "Ougamulette",
    "imageUrl": "html/img/ougamulette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 41,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages (%)",
        "min": 31,
        "max": 40
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 501,
        "max": 600
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 184,
    "name": "Amulette Ripage",
    "imageUrl": "html/img/amulette_ripage.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "11 à 20% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 189,
    "name": "Amunite",
    "imageUrl": "html/img/amunite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Amulette",
    "level": 194,
    "name": "Kralamansion",
    "imageUrl": "html/img/kralamansion.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 350
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Portée",
        "min": 2,
        "max": 2
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Prospection",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau du Piou Bleu",
    "imageUrl": "html/img/anneau_du_piou_bleu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau du Piou Rose",
    "imageUrl": "html/img/anneau_du_piou_rose.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau du Piou Vert",
    "imageUrl": "html/img/anneau_du_piou_vert.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau de l'Aventurier",
    "imageUrl": "html/img/anneau_de_laventurier.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau du Piou Violet",
    "imageUrl": "html/img/anneau_du_piou_violet.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau Agilesque",
    "imageUrl": "html/img/anneau_agilesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Alliance",
    "imageUrl": "html/img/alliance.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau du Piou Jaune",
    "imageUrl": "html/img/anneau_du_piou_jaune.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau du Piou Rouge",
    "imageUrl": "html/img/anneau_du_piou_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau Forcesque",
    "imageUrl": "html/img/anneau_forcesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Petit Anneau Magique",
    "imageUrl": "html/img/petit_anneau_magique.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Petit Anneau de Sagesse",
    "imageUrl": "html/img/petit_anneau_de_sagesse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Petit Anneau d'Agilité",
    "imageUrl": "html/img/petit_anneau_dagilite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Petit Anneau de Chance",
    "imageUrl": "html/img/petit_anneau_de_chance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Le Plussain",
    "imageUrl": "html/img/le_plussain.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Petit Anneau du Chanceux",
    "imageUrl": "html/img/petit_anneau_du_chanceux.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Camaïneux",
    "imageUrl": "html/img/camaineux.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 2,
        "max": 6
      },
      {
        "stat": "Chance",
        "min": -2,
        "max": -6
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Gantie Royal",
    "imageUrl": "html/img/gantie_royal.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 2,
        "max": 6
      },
      {
        "stat": "Intelligence",
        "min": -2,
        "max": -6
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau Vitalesque",
    "imageUrl": "html/img/anneau_vitalesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 1,
    "name": "Anneau Rexik",
    "imageUrl": "html/img/anneau_rexik.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 2,
        "max": 6
      },
      {
        "stat": "Chance",
        "min": -2,
        "max": -6
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 2,
    "name": "Anneau d'Agilité",
    "imageUrl": "html/img/anneau_dagilite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 2,
    "name": "Anneau de Sagesse",
    "imageUrl": "html/img/anneau_de_sagesse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 2,
    "name": "Anneau de Chance",
    "imageUrl": "html/img/anneau_de_chance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 3,
    "name": "Alliance Du Champ Champ",
    "imageUrl": "html/img/alliance_du_champ_champ.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 3,
    "name": "Anneau du Champ Champ",
    "imageUrl": "html/img/anneau_du_champ_champ.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 4,
    "name": "Anneau Thé",
    "imageUrl": "html/img/anneau_the.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Anneau",
    "level": 5,
    "name": "Araknoton",
    "imageUrl": "html/img/araknoton.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 5,
    "name": "Abranneau",
    "imageUrl": "html/img/abranneau.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Portée",
        "min": -1,
        "max": -1
      },
      {
        "stat": "Force",
        "min": -100,
        "max": -100
      },
      {
        "stat": "Intelligence",
        "min": -100,
        "max": -100
      },
      {
        "stat": "Agilité",
        "min": -100,
        "max": -100
      },
      {
        "stat": "Chance",
        "min": -100,
        "max": -100
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 5,
    "name": "Grand Anneau d'Agilité",
    "imageUrl": "html/img/grand_anneau_dagilite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 6,
    "name": "Grand Anneau de Chance",
    "imageUrl": "html/img/grand_anneau_de_chance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 6,
    "name": "Grand Anneau de Sagesse",
    "imageUrl": "html/img/grand_anneau_de_sagesse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 3,
        "max": 3
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 8,
    "name": "Puissant Anneau d'Agilité",
    "imageUrl": "html/img/puissant_anneau_dagilite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 8,
    "name": "Anneau de Satisfaction",
    "imageUrl": "html/img/anneau_de_satisfaction.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": -200,
        "max": -200
      },
      {
        "stat": "Force",
        "min": -200,
        "max": -200
      },
      {
        "stat": "Agilité",
        "min": -150,
        "max": -150
      },
      {
        "stat": "Chance",
        "min": -150,
        "max": -150
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 8,
    "name": "Puissant Anneau de Chance",
    "imageUrl": "html/img/puissant_anneau_de_chance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 8,
    "name": "Puissant Anneau de Sagesse",
    "imageUrl": "html/img/puissant_anneau_de_sagesse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 10,
    "name": "Anneau de Bouze le Clerc",
    "imageUrl": "html/img/anneau_de_bouze_le_clerc.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 10,
    "name": "Anneau Champêtre",
    "imageUrl": "html/img/anneau_champetre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Intelligence",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 10,
    "name": "Anneau en Mousse",
    "imageUrl": "html/img/anneau_en_mousse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 11,
    "name": "Anneau Fortifiant",
    "imageUrl": "html/img/anneau_fortifiant.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 12,
    "name": "Mitaines Mitées du Paysan",
    "imageUrl": "html/img/mitaines_mitees_du_paysan.png",
    "damages": [],
    "effects": [
      {
        "stat": "Soins",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 12,
    "name": "L'Anneau de Valeur",
    "imageUrl": "html/img/lanneau_de_valeur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Chance",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 14,
    "name": "Anneau du Mental",
    "imageUrl": "html/img/anneau_du_mental.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 15,
    "name": "Blessure du Sacrieur",
    "imageUrl": "html/img/blessure_du_sacrieur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 15,
    "name": "Anneau des Rocheuses",
    "imageUrl": "html/img/anneau_des_rocheuses.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Vitalité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 15,
    "name": "Le Bagueur",
    "imageUrl": "html/img/le_bagueur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 17,
    "name": "Anneau Rak",
    "imageUrl": "html/img/anneau_rak.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 8,
        "max": 8
      },
      {
        "stat": "Chance",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 17,
    "name": "Anneau du Bandit",
    "imageUrl": "html/img/anneau_du_bandit.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 18,
    "name": "Anneau Vice",
    "imageUrl": "html/img/anneau_vice.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 19,
    "name": "Anneau du Sanglier",
    "imageUrl": "html/img/anneau_du_sanglier.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 20,
    "name": "Chance d'Ecaflip",
    "imageUrl": "html/img/chance_decaflip.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 20,
    "name": "Anneau Zest",
    "imageUrl": "html/img/anneau_zest.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 20,
    "name": "Alliance de l'Homme Ours",
    "imageUrl": "html/img/alliance_de_lhomme_ours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 21,
    "name": "Anneau du Tofu",
    "imageUrl": "html/img/anneau_du_tofu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 21,
    "name": "Mos Kitano",
    "imageUrl": "html/img/mos_kitano.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 25,
    "name": "Anneau Mèr",
    "imageUrl": "html/img/anneau_mer.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": -2,
        "max": -11
      },
      {
        "stat": "Vitalité",
        "min": 2,
        "max": 61
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 26,
    "name": "Alliance de Silimelle",
    "imageUrl": "html/img/alliance_de_silimelle.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Force",
        "min": -5,
        "max": -5
      },
      {
        "stat": "Intelligence",
        "min": -5,
        "max": -5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 26,
    "name": "Fécaliseur du Magicien",
    "imageUrl": "html/img/fecaliseur_du_magicien.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 26,
    "name": "Fécaliseur du Guerrier",
    "imageUrl": "html/img/fecaliseur_du_guerrier.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 29,
    "name": "L'Ecaliseur",
    "imageUrl": "html/img/lecaliseur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Vitalité",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 30,
    "name": "Passé de Xélor",
    "imageUrl": "html/img/passe_de_xelor.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 30,
    "name": "Anneau Royal du Bouftou",
    "imageUrl": "html/img/anneau_royal_du_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 60
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 30,
    "name": "Souvenir d'Enutrof",
    "imageUrl": "html/img/souvenir_denutrof.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 31,
    "name": "Anneau Solo",
    "imageUrl": "html/img/anneau_solo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": -6,
        "max": -15
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Echec critique",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 33,
    "name": "Fourballiance",
    "imageUrl": "html/img/fourballiance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 36,
    "name": "Anneau de la mort",
    "imageUrl": "html/img/anneau_de_la_mort.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 36,
    "name": "L'Anneau Dhyn",
    "imageUrl": "html/img/lanneau_dhyn.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 2,
        "max": 4
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 4
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": -21,
        "max": -30
      },
      {
        "stat": "Force",
        "min": -21,
        "max": -30
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 37,
    "name": "Alliance Akwadala",
    "imageUrl": "html/img/alliance_akwadala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Résistance eau",
        "min": 7,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 38,
    "name": "Anneau du Boufcoul",
    "imageUrl": "html/img/anneau_du_boufcoul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 38,
    "name": "Anneau du Prespic",
    "imageUrl": "html/img/anneau_du_prespic.png",
    "damages": [],
    "effects": [
      {
        "stat": "Renvois de dommages",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 40,
    "name": "Force de Crocoburio",
    "imageUrl": "html/img/force_de_crocoburio.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 40,
    "name": "Grosse Bagouze du Parrain",
    "imageUrl": "html/img/grosse_bagouze_du_parrain.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 40,
    "name": "Anneau de l'Invocateur Satisfait",
    "imageUrl": "html/img/anneau_de_linvocateur_satisfait.png",
    "damages": [],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": -200,
        "max": -200
      },
      {
        "stat": "Force",
        "min": -200,
        "max": -200
      },
      {
        "stat": "Intelligence",
        "min": -200,
        "max": -200
      },
      {
        "stat": "Chance",
        "min": -200,
        "max": -200
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 40,
    "name": "Anobra",
    "imageUrl": "html/img/anobra.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 40,
    "name": "Jambanneau",
    "imageUrl": "html/img/jambanneau.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 42,
    "name": "Kwakanneau de Glace",
    "imageUrl": "html/img/kwakanneau_de_glace.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Dommages (%)",
        "min": 5,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 42,
    "name": "Kwakanneau de Flammes",
    "imageUrl": "html/img/kwakanneau_de_flammes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Dommages (%)",
        "min": 5,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 42,
    "name": "Kwakanneau de Vent",
    "imageUrl": "html/img/kwakanneau_de_vent.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Dommages (%)",
        "min": 5,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 42,
    "name": "Kwakanneau de Terre",
    "imageUrl": "html/img/kwakanneau_de_terre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Dommages (%)",
        "min": 5,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 43,
    "name": "Scaranneau Rouge",
    "imageUrl": "html/img/scaranneau_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 43,
    "name": "Scaranneau Bleu",
    "imageUrl": "html/img/scaranneau_bleu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 43,
    "name": "Scaranneau Vert",
    "imageUrl": "html/img/scaranneau_vert.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 43,
    "name": "Anneau du Scarabosse Doré",
    "imageUrl": "html/img/anneau_du_scarabosse_dore.png",
    "damages": [],
    "effects": [
      {
        "stat": "Soins",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 4
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 43,
    "name": "Scaranneau Blanc",
    "imageUrl": "html/img/scaranneau_blanc.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 43,
    "name": "Anneau de Slait",
    "imageUrl": "html/img/anneau_de_slait.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 44,
    "name": "Anneau Forain",
    "imageUrl": "html/img/anneau_forain.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 44,
    "name": "Anneau Hé",
    "imageUrl": "html/img/anneau_he.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 45,
    "name": "Anneau Paupayahn",
    "imageUrl": "html/img/anneau_paupayahn.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 45,
    "name": "Bracelet du Tétounik",
    "imageUrl": "html/img/bracelet_du_tetounik.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 46,
    "name": "Palmano",
    "imageUrl": "html/img/palmano.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 46,
    "name": "Abranneau Mou",
    "imageUrl": "html/img/abranneau_mou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 80
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 48,
    "name": "Scaranneau Noir",
    "imageUrl": "html/img/scaranneau_noir.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 48,
    "name": "Anneau Stradamus",
    "imageUrl": "html/img/anneau_stradamus.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 48,
    "name": "Abranneau Sombre",
    "imageUrl": "html/img/abranneau_sombre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 49,
    "name": "Anneau Rigami",
    "imageUrl": "html/img/anneau_rigami.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 50,
    "name": "Blopanneau Coco",
    "imageUrl": "html/img/blopanneau_coco.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 50,
    "name": "Anodindo",
    "imageUrl": "html/img/anodindo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 1,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 25
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 25
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 50,
    "name": "Anneau Zocomial",
    "imageUrl": "html/img/anneau_zocomial.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 50,
    "name": "Blopanneau Griotte",
    "imageUrl": "html/img/blopanneau_griotte.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 4
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 50,
    "name": "Blopanneau Indigo",
    "imageUrl": "html/img/blopanneau_indigo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 50,
    "name": "Blopanneau Reinette",
    "imageUrl": "html/img/blopanneau_reinette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 51,
    "name": "Anneau Tribal",
    "imageUrl": "html/img/anneau_tribal.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 51,
    "name": "Anneau du Mulou",
    "imageUrl": "html/img/anneau_du_mulou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 25
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 6
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 53,
    "name": "Alliance Ethnique",
    "imageUrl": "html/img/alliance_ethnique.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 53,
    "name": "Anneau du Koalak",
    "imageUrl": "html/img/anneau_du_koalak.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 54,
    "name": "Anneau Karina",
    "imageUrl": "html/img/anneau_karina.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Résistance air (%)",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance terre (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 55,
    "name": "Anneau du Kitsou",
    "imageUrl": "html/img/anneau_du_kitsou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 50
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 57,
    "name": "Alliance Aerdala",
    "imageUrl": "html/img/alliance_aerdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "+2 à 3 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 57,
    "name": "Anneau Piaume",
    "imageUrl": "html/img/anneau_piaume.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 58,
    "name": "Anneau Ha",
    "imageUrl": "html/img/anneau_ha.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "+4 à 5 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "11 à 15% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 59,
    "name": "Anneau Merta",
    "imageUrl": "html/img/anneau_merta.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 59,
    "name": "L'Enutrofion",
    "imageUrl": "html/img/lenutrofion.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 59,
    "name": "Anneau du Jeune Vald",
    "imageUrl": "html/img/anneau_du_jeune_vald.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu (%)",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance eau (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 60,
    "name": "Alliance de Corail",
    "imageUrl": "html/img/alliance_de_corail.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Prospection",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 60,
    "name": "Gelano",
    "imageUrl": "html/img/gelano.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 66,
    "name": "Anneau Poli",
    "imageUrl": "html/img/anneau_poli.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 141,
        "max": 170
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Faiblesse eau (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Faiblesse feu (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Faiblesse terre (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Faiblesse neutre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 70,
    "name": "Anneau Fioutioure",
    "imageUrl": "html/img/anneau_fioutioure.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Initiative",
        "min": 150,
        "max": 150
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 70,
    "name": "Anneau Bsène",
    "imageUrl": "html/img/anneau_bsene.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 70,
    "name": "Bracelet du Chef Crocodaille",
    "imageUrl": "html/img/bracelet_du_chef_crocodaille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 70,
    "name": "Anneau Nime",
    "imageUrl": "html/img/anneau_nime.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Initiative",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 77,
    "name": "Alliance Terrdala",
    "imageUrl": "html/img/alliance_terrdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 80,
    "name": "Blopanneau Coco Royal",
    "imageUrl": "html/img/blopanneau_coco_royal.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 80,
    "name": "Anneau de Loopine",
    "imageUrl": "html/img/anneau_de_loopine.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 4
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 80,
    "name": "Blopanneau Griotte Royal",
    "imageUrl": "html/img/blopanneau_griotte_royal.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 80,
    "name": "Blopanneau Indigo Royal",
    "imageUrl": "html/img/blopanneau_indigo_royal.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 80,
    "name": "Craquanneau Légendaire",
    "imageUrl": "html/img/craquanneau_legendaire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 80,
    "name": "Bracelet Magique de Shika",
    "imageUrl": "html/img/bracelet_magique_de_shika.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 36,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 80,
    "name": "Blopanneau Reinette Royal",
    "imageUrl": "html/img/blopanneau_reinette_royal.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 80,
    "name": "Bracelet Magique de Farle",
    "imageUrl": "html/img/bracelet_magique_de_farle.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 36,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 81,
    "name": "Alliance Feudala",
    "imageUrl": "html/img/alliance_feudala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 84,
    "name": "Anneau du Mineur Gogorifiant",
    "imageUrl": "html/img/anneau_du_mineur_gogorifiant.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 87,
    "name": "Alliance de Farle",
    "imageUrl": "html/img/alliance_de_farle.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 90,
    "name": "Anneau K'Tuelle",
    "imageUrl": "html/img/anneau_ktuelle.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 90,
    "name": "Blopanneau Multicolore Royal",
    "imageUrl": "html/img/blopanneau_multicolore_royal.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 98,
    "name": "Anneau du Rat Noir",
    "imageUrl": "html/img/anneau_du_rat_noir.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "+5 à 8 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "11 à 20% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 100,
    "name": "Bracelet du Chef Bwork",
    "imageUrl": "html/img/bracelet_du_chef_bwork.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 101,
    "name": "Gantelet du Rat Blanc",
    "imageUrl": "html/img/gantelet_du_rat_blanc.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 105,
    "name": "Anneau du Minotoror",
    "imageUrl": "html/img/anneau_du_minotoror.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 61,
        "max": 100
      },
      {
        "stat": "Prospection",
        "min": 7,
        "max": 10
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 108,
    "name": "Anneau du Dragon Cochon",
    "imageUrl": "html/img/anneau_du_dragon_cochon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 80
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 113,
    "name": "Anneau Ancestral",
    "imageUrl": "html/img/anneau_ancestral.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 81,
        "max": 130
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 120,
    "name": "Alliance d'Elya Wood",
    "imageUrl": "html/img/alliance_delya_wood.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 61,
        "max": 100
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu",
        "min": 8,
        "max": 12
      },
      {
        "stat": "Résistance terre",
        "min": 8,
        "max": 12
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 120,
    "name": "Anneau Skargo",
    "imageUrl": "html/img/anneau_skargo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 81,
        "max": 100
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 126,
    "name": "Anneau du Meulou",
    "imageUrl": "html/img/anneau_du_meulou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 100
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 128,
    "name": "Anneau du Dragoeuf",
    "imageUrl": "html/img/anneau_du_dragoeuf.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 131,
    "name": "Anneau Cérémonial du Seigneur des Rats",
    "imageUrl": "html/img/anneau_ceremonial_du_seigneur_des_rats.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 130
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 139,
    "name": "Anneau du Chêne Mou",
    "imageUrl": "html/img/anneau_du_chene_mou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Anneau Stalgik",
    "imageUrl": "html/img/anneau_stalgik.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente la portée du sort Maladresse de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Cupidité",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Clé Réductrice",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+20 aux CC sur le sort Lancer de Pelle",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Anneau Raille",
    "imageUrl": "html/img/anneau_raille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Pandatak",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 3 le délai de relance du sort Lien Spiritueux",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Anneau Pwal",
    "imageUrl": "html/img/anneau_pwal.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive le lancer en ligne du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort La Surpuissante",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Ronces Agressives",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 3 le délai de relance du sort Connaissance des Poupées",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Anneau Pitale",
    "imageUrl": "html/img/anneau_pitale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Ch&acirc",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Pied du Sacrieur de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Dérobade de 3",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Transposition de 4",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Anneau Bhli",
    "imageUrl": "html/img/anneau_bhli.png",
    "damages": [],
    "effects": [
      {
        "stat": "+30 aux CC sur le sort Flèche Explosive",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Flèche Harcelante",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Oeil de Taupe",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Ma&icirc",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Anneau Hell",
    "imageUrl": "html/img/anneau_hell.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Piège Empoisonné",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Piège d'Immobilisation",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Pulsion de Chakra",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Double de 1",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Anneau Tassion",
    "imageUrl": "html/img/anneau_tassion.png",
    "damages": [],
    "effects": [
      {
        "stat": "+30 aux CC sur le sort Armure Aqueuse",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Bouclier Féca",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Glyphe Enflammé de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Science du b&acirc de 3",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Bague Houx",
    "imageUrl": "html/img/bague_houx.png",
    "damages": [],
    "effects": [
      {
        "stat": "+20 aux CC sur le sort Griffe de Ceangal",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Contrecoup",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Roulette",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Bague Héra",
    "imageUrl": "html/img/bague_hera.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente la portée du sort Invocation de Craqueleur de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+20 aux CC sur le sort Griffe Spectrale",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Invocation de Bouftou de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Déplacement Félin",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Bague Harre",
    "imageUrl": "html/img/bague_harre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Puissance",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+25 aux CC sur le sort Epée du destin",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Anneau Zamour",
    "imageUrl": "html/img/anneau_zamour.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive le lancer en ligne du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+20 aux CC sur le sort Mot Curatif",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Mot d'Amitié de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Mot de Jouvence",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 150,
    "name": "Anneau Tilus",
    "imageUrl": "html/img/anneau_tilus.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le délai de relance du sort Dévouement",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Réduit de 5 le délai de relance du sort Téléportation",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Cadran de Xélor de 3",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 151,
    "name": "Bracelet du Minotot",
    "imageUrl": "html/img/bracelet_du_minotot.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 130
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 7
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 7
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 158,
    "name": "Sceau Souverain du Roissingue",
    "imageUrl": "html/img/sceau_souverain_du_roissingue.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 179,
    "name": "Bracelet Ventré",
    "imageUrl": "html/img/bracelet_ventre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 179,
    "name": "Anneau Bliteré",
    "imageUrl": "html/img/anneau_blitere.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 180,
    "name": "Anneau Chevelu",
    "imageUrl": "html/img/anneau_chevelu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 186,
    "name": "Alliance Boletée",
    "imageUrl": "html/img/alliance_boletee.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 188,
    "name": "Anneau Colerette",
    "imageUrl": "html/img/anneau_colerette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "+11 à 20 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 189,
    "name": "Annolamour",
    "imageUrl": "html/img/annolamour.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Initiative",
        "min": 501,
        "max": 700
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Anneau",
    "level": 199,
    "name": "Kralano",
    "imageUrl": "html/img/kralano.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Bottes de l'Aventurier",
    "imageUrl": "html/img/bottes_de_laventurier.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Bottes du Bouftou",
    "imageUrl": "html/img/bottes_du_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 3,
        "max": 3
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Les Incrustes",
    "imageUrl": "html/img/les_incrustes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Sandales Tofuesques",
    "imageUrl": "html/img/sandales_tofuesques.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Bottananas",
    "imageUrl": "html/img/bottananas.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Bottes du Petit Bouftou",
    "imageUrl": "html/img/bottes_du_petit_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Bottes Usées d'Hogmeiser",
    "imageUrl": "html/img/bottes_usees_dhogmeiser.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Sandales du Piou Rouge",
    "imageUrl": "html/img/sandales_du_piou_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Sandales du Piou Violet",
    "imageUrl": "html/img/sandales_du_piou_violet.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Sandales du Piou Rose",
    "imageUrl": "html/img/sandales_du_piou_rose.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Sandales du Piou Vert",
    "imageUrl": "html/img/sandales_du_piou_vert.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Sandales du Piou Bleu",
    "imageUrl": "html/img/sandales_du_piou_bleu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 1,
    "name": "Sandales du Piou Jaune",
    "imageUrl": "html/img/sandales_du_piou_jaune.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 2,
    "name": "Bottes du Chat Buté",
    "imageUrl": "html/img/bottes_du_chat_bute.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": -6,
        "max": -10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 2,
    "name": "Petites Bottes de Force",
    "imageUrl": "html/img/petites_bottes_de_force.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": -6,
        "max": -10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 2,
    "name": "Einekeineux",
    "imageUrl": "html/img/einekeineux.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -6,
        "max": -10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 2,
    "name": "Fecaflip",
    "imageUrl": "html/img/fecaflip.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Force",
        "min": -6,
        "max": -10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 2,
    "name": "Bottes du Grand Bouftou",
    "imageUrl": "html/img/bottes_du_grand_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Botte",
    "level": 4,
    "name": "Bottes du Puissant Bouftou",
    "imageUrl": "html/img/bottes_du_puissant_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 8,
    "name": "Bottes de Chance",
    "imageUrl": "html/img/bottes_de_chance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 8,
    "name": "Bottes Agilesques",
    "imageUrl": "html/img/bottes_agilesques.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 8,
    "name": "Bottes de Kluh",
    "imageUrl": "html/img/bottes_de_kluh.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": -11,
        "max": -20
      }
    ]
  },
  {
    "type": "Botte",
    "level": 8,
    "name": "Sandales d'Intelligence",
    "imageUrl": "html/img/sandales_dintelligence.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 10,
    "name": "Boufbottes",
    "imageUrl": "html/img/boufbottes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 35
      }
    ]
  },
  {
    "type": "Botte",
    "level": 10,
    "name": "Bottes Champêtres",
    "imageUrl": "html/img/bottes_champetres.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Intelligence",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 11,
    "name": "Bottes en Mousse",
    "imageUrl": "html/img/bottes_en_mousse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Botte",
    "level": 13,
    "name": "Petites Bottes de Klime",
    "imageUrl": "html/img/petites_bottes_de_klime.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 14,
    "name": "Gobtroteur",
    "imageUrl": "html/img/gobtroteur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      }
    ]
  },
  {
    "type": "Botte",
    "level": 17,
    "name": "Bottes de Nexus",
    "imageUrl": "html/img/bottes_de_nexus.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 30
      }
    ]
  },
  {
    "type": "Botte",
    "level": 17,
    "name": "Bottes de Klime",
    "imageUrl": "html/img/bottes_de_klime.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 17,
    "name": "Bottes de Satisfaction",
    "imageUrl": "html/img/bottes_de_satisfaction.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": -21,
        "max": -50
      },
      {
        "stat": "Agilité",
        "min": -21,
        "max": -50
      },
      {
        "stat": "Chance",
        "min": -21,
        "max": -50
      },
      {
        "stat": "Force",
        "min": -21,
        "max": -50
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 18,
    "name": "Grandes Bottes de Klime",
    "imageUrl": "html/img/grandes_bottes_de_klime.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 18,
    "name": "Bottes Paysannes",
    "imageUrl": "html/img/bottes_paysannes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 19,
    "name": "Puissantes Bottes de Klime",
    "imageUrl": "html/img/puissantes_bottes_de_klime.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 20,
    "name": "Bottes de l'Homme Ours",
    "imageUrl": "html/img/bottes_de_lhomme_ours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Botte",
    "level": 22,
    "name": "Bottes de Maîtrise",
    "imageUrl": "html/img/bottes_de_maitrise.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Force",
        "min": -6,
        "max": -15
      },
      {
        "stat": "Chance",
        "min": -6,
        "max": -15
      }
    ]
  },
  {
    "type": "Botte",
    "level": 22,
    "name": "Bottes d'Anticipation",
    "imageUrl": "html/img/bottes_danticipation.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": -6,
        "max": -15
      },
      {
        "stat": "Chance",
        "min": -6,
        "max": -15
      }
    ]
  },
  {
    "type": "Botte",
    "level": 22,
    "name": "Bottes de Puissance",
    "imageUrl": "html/img/bottes_de_puissance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": -6,
        "max": -15
      },
      {
        "stat": "Intelligence",
        "min": -6,
        "max": -15
      }
    ]
  },
  {
    "type": "Botte",
    "level": 22,
    "name": "Pieds du Sanglier",
    "imageUrl": "html/img/pieds_du_sanglier.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 22,
    "name": "Petites Bottes de Concentration",
    "imageUrl": "html/img/petites_bottes_de_concentration.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 23,
    "name": "Pantoufles du Tofu",
    "imageUrl": "html/img/pantoufles_du_tofu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Botte",
    "level": 24,
    "name": "Bottes de Concentration",
    "imageUrl": "html/img/bottes_de_concentration.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 24,
    "name": "Bottes de Faillete",
    "imageUrl": "html/img/bottes_de_faillete.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 6
      }
    ]
  },
  {
    "type": "Botte",
    "level": 26,
    "name": "Grandes Bottes de Concentration",
    "imageUrl": "html/img/grandes_bottes_de_concentration.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": 15,
        "max": 15
      }
    ]
  },
  {
    "type": "Botte",
    "level": 27,
    "name": "L'Ecrabouilleur de Iop",
    "imageUrl": "html/img/lecrabouilleur_de_iop.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 27,
    "name": "Puissantes Bottes de Concentration",
    "imageUrl": "html/img/puissantes_bottes_de_concentration.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": 20,
        "max": 20
      }
    ]
  },
  {
    "type": "Botte",
    "level": 30,
    "name": "Souliers Vernis de Porkass",
    "imageUrl": "html/img/souliers_vernis_de_porkass.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 30,
    "name": "Sandales Macien",
    "imageUrl": "html/img/sandales_macien.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Botte",
    "level": 30,
    "name": "Bottes du bois de l'est",
    "imageUrl": "html/img/bottes_du_bois_de_lest.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 31,
    "name": "Petites Bottes de Poursuite",
    "imageUrl": "html/img/petites_bottes_de_poursuite.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 33,
    "name": "Larvabottes",
    "imageUrl": "html/img/larvabottes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Soins",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Botte",
    "level": 34,
    "name": "Pantoufrelons",
    "imageUrl": "html/img/pantoufrelons.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Botte",
    "level": 34,
    "name": "Fourbabottes",
    "imageUrl": "html/img/fourbabottes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Botte",
    "level": 34,
    "name": "Bottes de Poursuite",
    "imageUrl": "html/img/bottes_de_poursuite.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 20
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 35,
    "name": "Geta Akwadala",
    "imageUrl": "html/img/geta_akwadala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 20
      }
    ]
  },
  {
    "type": "Botte",
    "level": 37,
    "name": "Grandes Bottes de Poursuite",
    "imageUrl": "html/img/grandes_bottes_de_poursuite.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 30
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 38,
    "name": "Bottes Tarsy",
    "imageUrl": "html/img/bottes_tarsy.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Portée",
        "min": -1,
        "max": -1
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": -11,
        "max": -15
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Agilité",
        "min": -11,
        "max": -15
      }
    ]
  },
  {
    "type": "Botte",
    "level": 38,
    "name": "Bottes du Boufcoul",
    "imageUrl": "html/img/bottes_du_boufcoul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 39,
    "name": "Puissantes Bottes de Poursuite",
    "imageUrl": "html/img/puissantes_bottes_de_poursuite.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 35
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 39,
    "name": "Bottes de Lymphe a Tik",
    "imageUrl": "html/img/bottes_de_lymphe_a_tik.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Faiblesse feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": -26,
        "max": -40
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 31,
        "max": 50
      }
    ]
  },
  {
    "type": "Botte",
    "level": 40,
    "name": "Kwakobottes de Flammes",
    "imageUrl": "html/img/kwakobottes_de_flammes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 40,
    "name": "Chaussures du Tétounik",
    "imageUrl": "html/img/chaussures_du_tetounik.png",
    "damages": [],
    "effects": [
      {
        "stat": "Soins",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 40,
    "name": "Kwakobottes du Vent",
    "imageUrl": "html/img/kwakobottes_du_vent.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 40,
    "name": "Souliers laqués du Parrain",
    "imageUrl": "html/img/souliers_laques_du_parrain.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Botte",
    "level": 40,
    "name": "Kwakobottes de Terre",
    "imageUrl": "html/img/kwakobottes_de_terre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 40,
    "name": "Kwakobottes de Glace",
    "imageUrl": "html/img/kwakobottes_de_glace.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 41,
    "name": "Bottes Volatiles",
    "imageUrl": "html/img/bottes_volatiles.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Portée",
        "min": -1,
        "max": -3
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 40
      }
    ]
  },
  {
    "type": "Botte",
    "level": 41,
    "name": "Surpuissantes Bottes de Klime",
    "imageUrl": "html/img/surpuissantes_bottes_de_klime.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Botte",
    "level": 42,
    "name": "Esprit de Crocoburio",
    "imageUrl": "html/img/esprit_de_crocoburio.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 42,
    "name": "Bottes Siks Won Naïne",
    "imageUrl": "html/img/bottes_siks_won_naine.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 43,
    "name": "Les Chaplures",
    "imageUrl": "html/img/les_chaplures.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 43,
    "name": "Bottes Paupayahn",
    "imageUrl": "html/img/bottes_paupayahn.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 43,
    "name": "Bottes Vioutifoule",
    "imageUrl": "html/img/bottes_vioutifoule.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 43,
    "name": "Les Sleumpettes",
    "imageUrl": "html/img/les_sleumpettes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 43,
    "name": "Bottes de Slait",
    "imageUrl": "html/img/bottes_de_slait.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Botte",
    "level": 43,
    "name": "Mégabottes",
    "imageUrl": "html/img/megabottes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 45,
    "name": "Corbottes",
    "imageUrl": "html/img/corbottes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Botte",
    "level": 45,
    "name": "L'Eni Kère",
    "imageUrl": "html/img/leni_kere.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Force",
        "min": -16,
        "max": -30
      },
      {
        "stat": "Chance",
        "min": -16,
        "max": -30
      },
      {
        "stat": "Prospection",
        "min": 2,
        "max": 6
      }
    ]
  },
  {
    "type": "Botte",
    "level": 45,
    "name": "Abrabottes",
    "imageUrl": "html/img/abrabottes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 50
      }
    ]
  },
  {
    "type": "Botte",
    "level": 47,
    "name": "Bottines du Black Wab",
    "imageUrl": "html/img/bottines_du_black_wab.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 47,
    "name": "Bottes du Craqueleur",
    "imageUrl": "html/img/bottes_du_craqueleur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 8
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 8
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 49,
    "name": "Bottes de Ragalde",
    "imageUrl": "html/img/bottes_de_ragalde.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Prospection",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Botte",
    "level": 49,
    "name": "Sandales Papayou",
    "imageUrl": "html/img/sandales_papayou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Botte",
    "level": 50,
    "name": "Bloptes Indigo",
    "imageUrl": "html/img/bloptes_indigo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 50,
    "name": "Bloptes Coco",
    "imageUrl": "html/img/bloptes_coco.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 50,
    "name": "Bloptes Griottes",
    "imageUrl": "html/img/bloptes_griottes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 50,
    "name": "Bloptes Reinette",
    "imageUrl": "html/img/bloptes_reinette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 50,
    "name": "Bottes d'Apprentissage",
    "imageUrl": "html/img/bottes_dapprentissage.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Botte",
    "level": 50,
    "name": "Boufbottes Royales",
    "imageUrl": "html/img/boufbottes_royales.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 70
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 8
      }
    ]
  },
  {
    "type": "Botte",
    "level": 50,
    "name": "Botodindo",
    "imageUrl": "html/img/botodindo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Soins",
        "min": 2,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 6
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 50,
    "name": "Bottes de Bowisse",
    "imageUrl": "html/img/bottes_de_bowisse.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": -54,
        "max": -54
      },
      {
        "stat": "Prospection",
        "min": 2,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 51,
    "name": "Bottes de l'Apprenti Invocateur",
    "imageUrl": "html/img/bottes_de_lapprenti_invocateur.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Agilité",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Intelligence",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Chance",
        "min": -11,
        "max": -20
      }
    ]
  },
  {
    "type": "Botte",
    "level": 53,
    "name": "Bottes de Céleri-Thé",
    "imageUrl": "html/img/bottes_de_celeri-the.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Force",
        "min": -20,
        "max": -20
      },
      {
        "stat": "Prospection",
        "min": 2,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 54,
    "name": "Scarabottes Dorées",
    "imageUrl": "html/img/scarabottes_dorees.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 10
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Botte",
    "level": 56,
    "name": "Sandales Ailuya",
    "imageUrl": "html/img/sandales_ailuya.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Botte",
    "level": 57,
    "name": "Geta Aerdala",
    "imageUrl": "html/img/geta_aerdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Botte",
    "level": 58,
    "name": "Sandales Koliques",
    "imageUrl": "html/img/sandales_koliques.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 60,
    "name": "Bottes du Koalak",
    "imageUrl": "html/img/bottes_du_koalak.png",
    "damages": [],
    "effects": [
      {
        "stat": "Soins",
        "min": 1,
        "max": 2
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 60,
    "name": "Carabottes",
    "imageUrl": "html/img/carabottes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 50
      }
    ]
  },
  {
    "type": "Botte",
    "level": 60,
    "name": "Gelobottes",
    "imageUrl": "html/img/gelobottes.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 15
      }
    ]
  },
  {
    "type": "Botte",
    "level": 60,
    "name": "Tongues Wabbits",
    "imageUrl": "html/img/tongues_wabbits.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 61,
    "name": "Bottines du Mulou",
    "imageUrl": "html/img/bottines_du_mulou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 62,
    "name": "Moon Boots",
    "imageUrl": "html/img/moon_boots.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 67,
    "name": "Tongues Baques",
    "imageUrl": "html/img/tongues_baques.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 68,
    "name": "Bottes de l'Eleveur de Bouftous",
    "imageUrl": "html/img/bottes_de_leleveur_de_bouftous.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Botte",
    "level": 68,
    "name": "Geta Feudala",
    "imageUrl": "html/img/geta_feudala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 70,
    "name": "Pantoufles Crochues du Chef Crocodaille",
    "imageUrl": "html/img/pantoufles_crochues_du_chef_crocodaille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 73,
    "name": "Bottes du Koulosse",
    "imageUrl": "html/img/bottes_du_koulosse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 150
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -100
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 76,
    "name": "Sandales Adin",
    "imageUrl": "html/img/sandales_adin.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 76,
    "name": "Geta Terrdala",
    "imageUrl": "html/img/geta_terrdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 76,
    "name": "Bottes d'Hogmeiser",
    "imageUrl": "html/img/bottes_dhogmeiser.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 40
      }
    ]
  },
  {
    "type": "Botte",
    "level": 77,
    "name": "Bottes Orino",
    "imageUrl": "html/img/bottes_orino.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      }
    ]
  },
  {
    "type": "Botte",
    "level": 80,
    "name": "Bloptes Coco Royales",
    "imageUrl": "html/img/bloptes_coco_royales.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 8
      }
    ]
  },
  {
    "type": "Botte",
    "level": 80,
    "name": "Bloptes Griotte Royales",
    "imageUrl": "html/img/bloptes_griotte_royales.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 8
      }
    ]
  },
  {
    "type": "Botte",
    "level": 80,
    "name": "Bloptes Reinette Royales",
    "imageUrl": "html/img/bloptes_reinette_royales.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 8
      }
    ]
  },
  {
    "type": "Botte",
    "level": 80,
    "name": "Sabots de Shika",
    "imageUrl": "html/img/sabots_de_shika.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 36,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 80,
    "name": "Bloptes Indigo Royales",
    "imageUrl": "html/img/bloptes_indigo_royales.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 8
      }
    ]
  },
  {
    "type": "Botte",
    "level": 80,
    "name": "Sabots de Farle",
    "imageUrl": "html/img/sabots_de_farle.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 36,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 83,
    "name": "Bottes du Gardien des Egoûts",
    "imageUrl": "html/img/bottes_du_gardien_des_egouts.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 86,
    "name": "Bottes Du Craqueleur Légendaire",
    "imageUrl": "html/img/bottes_du_craqueleur_legendaire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Botte",
    "level": 90,
    "name": "Bloptes Multicolores Royales",
    "imageUrl": "html/img/bloptes_multicolores_royales.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 30
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Botte",
    "level": 93,
    "name": "Mules du Dragon Cochon",
    "imageUrl": "html/img/mules_du_dragon_cochon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 46,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 94,
    "name": "Bottes Animales",
    "imageUrl": "html/img/bottes_animales.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 99,
    "name": "Bottes du Rat Blanc",
    "imageUrl": "html/img/bottes_du_rat_blanc.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Botte",
    "level": 99,
    "name": "Bottes Dorées d'Hogmeiser",
    "imageUrl": "html/img/bottes_dorees_dhogmeiser.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 36,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 7,
        "max": 8
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Résistance eau",
        "min": 10,
        "max": 12
      },
      {
        "stat": "Résistance air",
        "min": 10,
        "max": 12
      },
      {
        "stat": "Résistance feu",
        "min": 10,
        "max": 12
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Bottes Horchons",
    "imageUrl": "html/img/bottes_horchons.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Bottes Antrin",
    "imageUrl": "html/img/bottes_antrin.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 30,
        "max": 30
      },
      {
        "stat": "Rend la portée du sort 0 modifiable",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+45 aux CC sur le sort Mutilation",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Guide de Bravoure",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Bottes Antouche",
    "imageUrl": "html/img/bottes_antouche.png",
    "damages": [],
    "effects": [
      {
        "stat": "+30 aux CC sur le sort Armure Venteuse",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Immunité",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive le lancer en ligne du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Botte Hairo",
    "imageUrl": "html/img/botte_hairo.png",
    "damages": [],
    "effects": [
      {
        "stat": "+25 aux CC sur le sort Horloge",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+25 aux CC sur le sort Poussière Temporelle",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Contre de 3",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Rend la portée du sort 0 modifiable",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Botte Ulisme",
    "imageUrl": "html/img/botte_ulisme.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente la portée du sort Mot d'Envol de 4",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Soins",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Augmente la portée du sort Mot de Régénération de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Mot de Silence de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Charentaises à poils",
    "imageUrl": "html/img/charentaises_a_poils.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente la portée du sort Roue de la Fortune de 4",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Griffe Invocatrice",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Griffe Joueuse",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Perception",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Bottes Deuradi",
    "imageUrl": "html/img/bottes_deuradi.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Flèche Punitive",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Flèche Magique",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Flèche de Recul",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Flèche Persécutrice",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Chaussures Lepon-Davignon",
    "imageUrl": "html/img/chaussures_lepon-davignon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Réduit de 2 le coût en PA du sort Coffre Animé",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Maladresse de Masse",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+25 aux CC sur le sort Désinvocation",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Bottes Hox",
    "imageUrl": "html/img/bottes_hox.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente la portée du sort Attaque Mortelle de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive le lancer en ligne du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Fourvoiement",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 10,
        "max": 10
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Bottes Hanik",
    "imageUrl": "html/img/bottes_hanik.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente de 1 le nombre de lancer maximal par tour du sort Ronces Multiples",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort La Bloqueuse de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Vent Empoisonné de 3",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Sacrifice Poupesque de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Bottes Swana",
    "imageUrl": "html/img/bottes_swana.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente la portée du sort Frappe du Craqueleur de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Soins",
        "min": 30,
        "max": 30
      },
      {
        "stat": "+25 aux CC sur le sort Piqûre Motivante",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Tong Aclou",
    "imageUrl": "html/img/tong_aclou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Ch&acirc",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Absorption de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Coopération",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Epée volante",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Bottes du Chef Bwork",
    "imageUrl": "html/img/bottes_du_chef_bwork.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 36,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 100,
    "name": "Getas Bernacle",
    "imageUrl": "html/img/getas_bernacle.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+35 aux CC sur le sort Gueule de Bois",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Flasque Explosive",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Colère de Zato&iuml",
        "min": 0,
        "max": 0
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 101,
    "name": "Bottes du Rat Noir",
    "imageUrl": "html/img/bottes_du_rat_noir.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "+6 à 10 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "16 à 25% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Botte",
    "level": 110,
    "name": "Protège-Tibias Ancestraux",
    "imageUrl": "html/img/protege-tibias_ancestraux.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 81,
        "max": 130
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Botte",
    "level": 113,
    "name": "Bottes du Minotoror",
    "imageUrl": "html/img/bottes_du_minotoror.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 121,
    "name": "Sandales Humeuses",
    "imageUrl": "html/img/sandales_humeuses.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 40
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 122,
    "name": "Bottes Animales Sombres",
    "imageUrl": "html/img/bottes_animales_sombres.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 122,
    "name": "Sandales Titude",
    "imageUrl": "html/img/sandales_titude.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 175
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 7
      }
    ]
  },
  {
    "type": "Botte",
    "level": 123,
    "name": "Bottes Harry",
    "imageUrl": "html/img/bottes_harry.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 126,
        "max": 150
      },
      {
        "stat": "Agilité",
        "min": 36,
        "max": 50
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 300,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Botte",
    "level": 129,
    "name": "Bottes du Dragoeuf",
    "imageUrl": "html/img/bottes_du_dragoeuf.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 120
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Pods",
        "min": 201,
        "max": 300
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 8
      }
    ]
  },
  {
    "type": "Botte",
    "level": 131,
    "name": "Bottes du Meulou",
    "imageUrl": "html/img/bottes_du_meulou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 120
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 9
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 9
      },
      {
        "stat": "Faiblesse terre (%)",
        "min": 4,
        "max": 7
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Pods",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 8
      }
    ]
  },
  {
    "type": "Botte",
    "level": 134,
    "name": "Bottes Cérémoniales du Seigneur des Rats",
    "imageUrl": "html/img/bottes_ceremoniales_du_seigneur_des_rats.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 121,
        "max": 170
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Botte",
    "level": 136,
    "name": "Tongues du dimanche du Chêne Mou",
    "imageUrl": "html/img/tongues_du_dimanche_du_chene_mou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Botte",
    "level": 136,
    "name": "Bottines en bois d'abrakleur",
    "imageUrl": "html/img/bottines_en_bois_dabrakleur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 8
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 159,
    "name": "Sandales Hambic",
    "imageUrl": "html/img/sandales_hambic.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 6
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "+16 à 25 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Botte",
    "level": 163,
    "name": "Sandales du Minotot",
    "imageUrl": "html/img/sandales_du_minotot.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Botte",
    "level": 175,
    "name": "Bottines des sous-bois",
    "imageUrl": "html/img/bottines_des_sous-bois.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 401,
        "max": 700
      },
      {
        "stat": "Prospection",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 181,
    "name": "Chaussons Pignons",
    "imageUrl": "html/img/chaussons_pignons.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Botte",
    "level": 184,
    "name": "Bottes Répané",
    "imageUrl": "html/img/bottes_repane.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Botte",
    "level": 195,
    "name": "Sandales Circulaires du Kimbo",
    "imageUrl": "html/img/sandales_circulaires_du_kimbo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape Brâkmarienne",
    "imageUrl": "html/img/cape_brakmarienne.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape Banale",
    "imageUrl": "html/img/cape_banale.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape du Piou Bleu",
    "imageUrl": "html/img/cape_du_piou_bleu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape de l'Aventurier",
    "imageUrl": "html/img/cape_de_laventurier.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Capananas",
    "imageUrl": "html/img/capananas.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape Hivernale",
    "imageUrl": "html/img/cape_hivernale.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape Bontarienne",
    "imageUrl": "html/img/cape_bontarienne.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape du Piou Jaune",
    "imageUrl": "html/img/cape_du_piou_jaune.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape du Pirate",
    "imageUrl": "html/img/cape_du_pirate.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM perdu à la cible",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape du Piou Rouge",
    "imageUrl": "html/img/cape_du_piou_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape du Piou Vert",
    "imageUrl": "html/img/cape_du_piou_vert.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape du Piou Rose",
    "imageUrl": "html/img/cape_du_piou_rose.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Petite Cape Bleutée",
    "imageUrl": "html/img/petite_cape_bleutee.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "Cape du Piou Violet",
    "imageUrl": "html/img/cape_du_piou_violet.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 1,
    "name": "La Cape S'loque",
    "imageUrl": "html/img/la_cape_sloque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Soins",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 3,
    "name": "Cape Bleutée",
    "imageUrl": "html/img/cape_bleutee.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 6,
    "name": "Dofusteuse",
    "imageUrl": "html/img/dofusteuse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 1,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 50
      }
    ]
  },
  {
    "type": "Cape",
    "level": 6,
    "name": "Cape de Mori Arty",
    "imageUrl": "html/img/cape_de_mori_arty.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": -10,
        "max": -10
      },
      {
        "stat": "Intelligence",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 6,
    "name": "Grande Cape Bleutée",
    "imageUrl": "html/img/grande_cape_bleutee.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 15
      }
    ]
  },
  {
    "type": "Cape",
    "level": 8,
    "name": "Petite Cape Sombre",
    "imageUrl": "html/img/petite_cape_sombre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Cape",
    "level": 8,
    "name": "Petite Cape de Rougeur",
    "imageUrl": "html/img/petite_cape_de_rougeur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 9,
    "name": "Cape du Champ Champ",
    "imageUrl": "html/img/cape_du_champ_champ.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 10,
    "name": "Cape Bouffante",
    "imageUrl": "html/img/cape_bouffante.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 1,
        "max": 300
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 50
      }
    ]
  },
  {
    "type": "Cape",
    "level": 10,
    "name": "Abracape",
    "imageUrl": "html/img/abracape.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -300
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -300
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -300
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -300
      }
    ]
  },
  {
    "type": "Cape",
    "level": 10,
    "name": "Cape Pandawushu",
    "imageUrl": "html/img/cape_pandawushu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Cape",
    "level": 10,
    "name": "Cape en Mousse",
    "imageUrl": "html/img/cape_en_mousse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      }
    ]
  },
  {
    "type": "Cape",
    "level": 10,
    "name": "Capouze des Champs",
    "imageUrl": "html/img/capouze_des_champs.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Cape",
    "level": 12,
    "name": "Cape Sombre",
    "imageUrl": "html/img/cape_sombre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 13,
    "name": "Cape de Rougeur",
    "imageUrl": "html/img/cape_de_rougeur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Cape",
    "level": 14,
    "name": "Cape du Lapino Blasé",
    "imageUrl": "html/img/cape_du_lapino_blase.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Cape",
    "level": 14,
    "name": "Cape Sulcorpe",
    "imageUrl": "html/img/cape_sulcorpe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Cape",
    "level": 14,
    "name": "Cape Ulais",
    "imageUrl": "html/img/cape_ulais.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Cape",
    "level": 14,
    "name": "Cape Ellinie",
    "imageUrl": "html/img/cape_ellinie.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Cape",
    "level": 16,
    "name": "Grande Cape de Rougeur",
    "imageUrl": "html/img/grande_cape_de_rougeur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 20
      }
    ]
  },
  {
    "type": "Cape",
    "level": 17,
    "name": "Cape Abilité",
    "imageUrl": "html/img/cape_abilite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Cape",
    "level": 19,
    "name": "Grande Cape Sombre",
    "imageUrl": "html/img/grande_cape_sombre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 20,
    "name": "Cape de Bowisse",
    "imageUrl": "html/img/cape_de_bowisse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 40
      }
    ]
  },
  {
    "type": "Cape",
    "level": 20,
    "name": "Cape de l'Homme Ours",
    "imageUrl": "html/img/cape_de_lhomme_ours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Cape",
    "level": 20,
    "name": "Ailes en bois",
    "imageUrl": "html/img/ailes_en_bois.png",
    "damages": [],
    "effects": [
      {
        "stat": "Pods",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      }
    ]
  },
  {
    "type": "Cape",
    "level": 21,
    "name": "Cape Itou Lascione",
    "imageUrl": "html/img/cape_itou_lascione.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      }
    ]
  },
  {
    "type": "Cape",
    "level": 22,
    "name": "La Samoulaille",
    "imageUrl": "html/img/la_samoulaille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 22,
    "name": "Cape Edépée",
    "imageUrl": "html/img/cape_edepee.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 4
      },
      {
        "stat": "Résistance neutre",
        "min": 2,
        "max": 4
      }
    ]
  },
  {
    "type": "Cape",
    "level": 23,
    "name": "La Boufteuse",
    "imageUrl": "html/img/la_boufteuse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Cape",
    "level": 26,
    "name": "Cape du Tofu",
    "imageUrl": "html/img/cape_du_tofu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Cape",
    "level": 29,
    "name": "Cape du Vampire",
    "imageUrl": "html/img/cape_du_vampire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 7
      }
    ]
  },
  {
    "type": "Cape",
    "level": 30,
    "name": "Ailes en bois améliorées",
    "imageUrl": "html/img/ailes_en_bois_ameliorees.png",
    "damages": [],
    "effects": [
      {
        "stat": "Pods",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 200
      }
    ]
  },
  {
    "type": "Cape",
    "level": 30,
    "name": "Cape Grume",
    "imageUrl": "html/img/cape_grume.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 30,
    "name": "Cape de Bonne Espérance",
    "imageUrl": "html/img/cape_de_bonne_esperance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 30,
    "name": "Cigalocape",
    "imageUrl": "html/img/cigalocape.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 30,
    "name": "Cape du Wa Wabbit",
    "imageUrl": "html/img/cape_du_wa_wabbit.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 100
      }
    ]
  },
  {
    "type": "Cape",
    "level": 30,
    "name": "Cape du Justicier",
    "imageUrl": "html/img/cape_du_justicier.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 33,
    "name": "Cape Kifébzz",
    "imageUrl": "html/img/cape_kifebzz.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 33,
    "name": "Cape du Mulou Fou",
    "imageUrl": "html/img/cape_du_mulou_fou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 60
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Cape",
    "level": 33,
    "name": "Cape Rice",
    "imageUrl": "html/img/cape_rice.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 33,
    "name": "Poshocape",
    "imageUrl": "html/img/poshocape.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 33,
    "name": "Cape du Poolay Chogrelotant",
    "imageUrl": "html/img/cape_du_poolay_chogrelotant.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 12
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 12
      },
      {
        "stat": "PM perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 12
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 12
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 12
      }
    ]
  },
  {
    "type": "Cape",
    "level": 33,
    "name": "Fourbacapa",
    "imageUrl": "html/img/fourbacapa.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 34,
    "name": "Cape Maj'Hic",
    "imageUrl": "html/img/cape_majhic.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 34,
    "name": "Cape Hilère",
    "imageUrl": "html/img/cape_hilere.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 100
      }
    ]
  },
  {
    "type": "Cape",
    "level": 36,
    "name": "Cape du Tofu Fou",
    "imageUrl": "html/img/cape_du_tofu_fou.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Force",
        "min": -100,
        "max": -100
      },
      {
        "stat": "Intelligence",
        "min": -100,
        "max": -100
      },
      {
        "stat": "Chance",
        "min": -100,
        "max": -100
      }
    ]
  },
  {
    "type": "Cape",
    "level": 36,
    "name": "Cape Maimpa",
    "imageUrl": "html/img/cape_maimpa.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Cape",
    "level": 36,
    "name": "Cape du bois de l'est",
    "imageUrl": "html/img/cape_du_bois_de_lest.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Cape",
    "level": 37,
    "name": "Cape du Prespic",
    "imageUrl": "html/img/cape_du_prespic.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 37,
    "name": "Cape Bouchon",
    "imageUrl": "html/img/cape_bouchon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 41,
    "name": "Kwape de Flammes",
    "imageUrl": "html/img/kwape_de_flammes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 41,
    "name": "Cape de Bou",
    "imageUrl": "html/img/cape_de_bou.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 20
      }
    ]
  },
  {
    "type": "Cape",
    "level": 41,
    "name": "Kwape de Glace",
    "imageUrl": "html/img/kwape_de_glace.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 41,
    "name": "Kwape du Vent",
    "imageUrl": "html/img/kwape_du_vent.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 41,
    "name": "Cape Akwadala",
    "imageUrl": "html/img/cape_akwadala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 41,
    "name": "Kwape de Terre",
    "imageUrl": "html/img/kwape_de_terre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 42,
    "name": "Cape Siks Won Naïne",
    "imageUrl": "html/img/cape_siks_won_naine.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Cape",
    "level": 43,
    "name": "La Mokette",
    "imageUrl": "html/img/la_mokette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 3,
        "max": 7
      }
    ]
  },
  {
    "type": "Cape",
    "level": 44,
    "name": "Cape du Coq Hû",
    "imageUrl": "html/img/cape_du_coq_hu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 20
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 44,
    "name": "Cape Huccino",
    "imageUrl": "html/img/cape_huccino.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Corbacape",
    "imageUrl": "html/img/corbacape.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 7
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Scaracape Verte",
    "imageUrl": "html/img/scaracape_verte.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Scaracape Blanche",
    "imageUrl": "html/img/scaracape_blanche.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Mégacape",
    "imageUrl": "html/img/megacape.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Scaracape Rouge",
    "imageUrl": "html/img/scaracape_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Abracapa",
    "imageUrl": "html/img/abracapa.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Scaracape Bleue",
    "imageUrl": "html/img/scaracape_bleue.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Capogato",
    "imageUrl": "html/img/capogato.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Cape Vioutifoule",
    "imageUrl": "html/img/cape_vioutifoule.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Cape Paupayahn",
    "imageUrl": "html/img/cape_paupayahn.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 45,
    "name": "Cape du Corbac",
    "imageUrl": "html/img/cape_du_corbac.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 46,
    "name": "Craquelocape",
    "imageUrl": "html/img/craquelocape.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 6
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 6
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 46,
    "name": "Cape du Black Wab",
    "imageUrl": "html/img/cape_du_black_wab.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Cape",
    "level": 46,
    "name": "Cape Ricéfini",
    "imageUrl": "html/img/cape_ricefini.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 7
      }
    ]
  },
  {
    "type": "Cape",
    "level": 47,
    "name": "Cape de Slait",
    "imageUrl": "html/img/cape_de_slait.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 48,
    "name": "Cape Papayou",
    "imageUrl": "html/img/cape_papayou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 75
      }
    ]
  },
  {
    "type": "Cape",
    "level": 48,
    "name": "Cape du Parrain",
    "imageUrl": "html/img/cape_du_parrain.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Cape",
    "level": 50,
    "name": "Cape Sanguine",
    "imageUrl": "html/img/cape_sanguine.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 50,
    "name": "Cape Ouginak",
    "imageUrl": "html/img/cape_ouginak.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      }
    ]
  },
  {
    "type": "Cape",
    "level": 50,
    "name": "Cape Bouffante Royale",
    "imageUrl": "html/img/cape_bouffante_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 60
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 8
      }
    ]
  },
  {
    "type": "Cape",
    "level": 50,
    "name": "Capodindo",
    "imageUrl": "html/img/capodindo.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Cape",
    "level": 53,
    "name": "Scaracape Noire",
    "imageUrl": "html/img/scaracape_noire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 45
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 4
      },
      {
        "stat": "6 à 20% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 53,
    "name": "La Guenille",
    "imageUrl": "html/img/la_guenille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      }
    ]
  },
  {
    "type": "Cape",
    "level": 54,
    "name": "Cape de Jules Yanos",
    "imageUrl": "html/img/cape_de_jules_yanos.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Cape",
    "level": 55,
    "name": "Cape Fulgurante",
    "imageUrl": "html/img/cape_fulgurante.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 20
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Cape",
    "level": 55,
    "name": "Cape du Boufcoul",
    "imageUrl": "html/img/cape_du_boufcoul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      }
    ]
  },
  {
    "type": "Cape",
    "level": 58,
    "name": "Vegacape",
    "imageUrl": "html/img/vegacape.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 7
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 30
      }
    ]
  },
  {
    "type": "Cape",
    "level": 58,
    "name": "Scaracape Dorée",
    "imageUrl": "html/img/scaracape_doree.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 55
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 200
      }
    ]
  },
  {
    "type": "Cape",
    "level": 58,
    "name": "Cape Hôte",
    "imageUrl": "html/img/cape_hote.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 60,
    "name": "Gelocape",
    "imageUrl": "html/img/gelocape.png",
    "damages": [],
    "effects": [
      {
        "stat": "Prospection",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Cape",
    "level": 60,
    "name": "Caracape",
    "imageUrl": "html/img/caracape.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 61,
    "name": "Cape de la Meupette",
    "imageUrl": "html/img/cape_de_la_meupette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 2,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 61,
    "name": "Cape Flotteuse",
    "imageUrl": "html/img/cape_flotteuse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": -3,
        "max": -5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 61,
    "name": "Cape du Koalak",
    "imageUrl": "html/img/cape_du_koalak.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Résistance eau",
        "min": 7,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 7,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 7,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 62,
    "name": "Cape du Kitsou",
    "imageUrl": "html/img/cape_du_kitsou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 100
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 63,
    "name": "Cape Terrdala",
    "imageUrl": "html/img/cape_terrdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "+6 à 10 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 7
      }
    ]
  },
  {
    "type": "Cape",
    "level": 63,
    "name": "La Poilue",
    "imageUrl": "html/img/la_poilue.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 64,
    "name": "Cape du Mulou",
    "imageUrl": "html/img/cape_du_mulou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 8
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 65,
    "name": "Cape Aerdala",
    "imageUrl": "html/img/cape_aerdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "+3 à 4 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Cape",
    "level": 67,
    "name": "Cape du Désir O'Boul",
    "imageUrl": "html/img/cape_du_desir_oboul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 71,
    "name": "Cape Hucine",
    "imageUrl": "html/img/cape_hucine.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 100
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": -101,
        "max": -200
      },
      {
        "stat": "Chance",
        "min": -101,
        "max": -200
      },
      {
        "stat": "Force",
        "min": -101,
        "max": -200
      },
      {
        "stat": "Intelligence",
        "min": -101,
        "max": -200
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Hitton",
    "imageUrl": "html/img/cape_hitton.png",
    "damages": [],
    "effects": [
      {
        "stat": "Rend la portée du sort 0 modifiable",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Puissance Sylvestre de 4",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Augmente la portée du sort Tremblement de 3",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Hulco",
    "imageUrl": "html/img/cape_hulco.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Flèche Enflammée",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+25 aux CC sur le sort Flèche Absorbante",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Tir Critique",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Huchon",
    "imageUrl": "html/img/cape_huchon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente de 1 le nombre de lancer maximal par cible du sort Gelure",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Frappe de Xélor de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Vol du Temps de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Momification",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Haharnum",
    "imageUrl": "html/img/cape_haharnum.png",
    "damages": [],
    "effects": [
      {
        "stat": "+30 aux CC sur le sort Accélération",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Augmente la portée du sort Sac Animé de 4",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Routh",
    "imageUrl": "html/img/cape_routh.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le délai de relance du sort Invisibilité",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Piège Sournois de 3",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Poison insidieux",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Piège répulsif",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Aurale",
    "imageUrl": "html/img/cape_aurale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente la portée du sort Bond de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Compulsion",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Intimidation de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Ytale",
    "imageUrl": "html/img/cape_ytale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Ch&acirc",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Furie de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 2 le délai de relance du sort Transposition",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Transfert de Vie de 2",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Sulhit",
    "imageUrl": "html/img/cape_sulhit.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Mot de Prévention de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Mot Interdit de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Mot d'Epine de 4",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Lyne",
    "imageUrl": "html/img/cape_lyne.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente de 1 le nombre de lancer maximal par tour du sort Fouet",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Invocation de Bwork Mage",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 3 le délai de relance du sort Bénédiction Animale",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+25 aux CC sur le sort Cri de l'Ours",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape d'Elya Wood",
    "imageUrl": "html/img/cape_delya_wood.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Wéra",
    "imageUrl": "html/img/cape_wera.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Souffle Alcoolisé de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive le lancer en ligne du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 15,
        "max": 15
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Aillé",
    "imageUrl": "html/img/cape_aille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente la portée du sort Trèfle de 4",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 30,
        "max": 30
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Odorat",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape de Shika",
    "imageUrl": "html/img/cape_de_shika.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Pods",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance neutre",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape de Farle",
    "imageUrl": "html/img/cape_de_farle.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Pods",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance neutre",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 80,
    "name": "Cape Hadosse",
    "imageUrl": "html/img/cape_hadosse.png",
    "damages": [],
    "effects": [
      {
        "stat": "+30 aux CC sur le sort Armure Terrestre",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Téléportation",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Glyphe d'Aveuglement de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Bulle",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Cape",
    "level": 84,
    "name": "Craquelocape Légendaire",
    "imageUrl": "html/img/craquelocape_legendaire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Résistance air",
        "min": 5,
        "max": 6
      }
    ]
  },
  {
    "type": "Cape",
    "level": 88,
    "name": "La Brouteuse",
    "imageUrl": "html/img/la_brouteuse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu (%)",
        "min": 7,
        "max": 9
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 7,
        "max": 9
      }
    ]
  },
  {
    "type": "Cape",
    "level": 92,
    "name": "Cape Feudala",
    "imageUrl": "html/img/cape_feudala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 97,
    "name": "Cape de la Ouassingue",
    "imageUrl": "html/img/cape_de_la_ouassingue.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": -101,
        "max": -200
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 100,
    "name": "Cape du Chef Bwork",
    "imageUrl": "html/img/cape_du_chef_bwork.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 36,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 102,
    "name": "Cape du Rat Blanc",
    "imageUrl": "html/img/cape_du_rat_blanc.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Cape",
    "level": 103,
    "name": "Cape du Dragon Cochon",
    "imageUrl": "html/img/cape_du_dragon_cochon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Vitalité",
        "min": 81,
        "max": 110
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Echec critique",
        "min": 2,
        "max": 4
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 105,
    "name": "Cape du Rat Noir",
    "imageUrl": "html/img/cape_du_rat_noir.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "+6 à 8 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "11 à 20% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Cape",
    "level": 105,
    "name": "Cape Houte",
    "imageUrl": "html/img/cape_houte.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 100
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 109,
    "name": "Cape du Minotoror",
    "imageUrl": "html/img/cape_du_minotoror.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 121,
        "max": 170
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 110,
    "name": "Puissante Cape Fulgurante",
    "imageUrl": "html/img/puissante_cape_fulgurante.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Cape",
    "level": 114,
    "name": "Abracapa Ancestrale",
    "imageUrl": "html/img/abracapa_ancestrale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 121,
    "name": "Caracape Minotoris",
    "imageUrl": "html/img/caracape_minotoris.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance eau",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance terre",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Cape",
    "level": 125,
    "name": "Ortiz",
    "imageUrl": "html/img/ortiz.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Prospection",
        "min": -11,
        "max": -15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 127,
    "name": "Cape Dragoeuf",
    "imageUrl": "html/img/cape_dragoeuf.png",
    "damages": [],
    "effects": [
      {
        "stat": "Prospection",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Cape",
    "level": 127,
    "name": "Corbacape Mastralis",
    "imageUrl": "html/img/corbacape_mastralis.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 36,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 81,
        "max": 120
      },
      {
        "stat": "Portée",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 46,
        "max": 60
      }
    ]
  },
  {
    "type": "Cape",
    "level": 130,
    "name": "Cape Cérémoniale du Seigneur des Rats",
    "imageUrl": "html/img/cape_ceremoniale_du_seigneur_des_rats.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Cape",
    "level": 139,
    "name": "Cape du Meulou",
    "imageUrl": "html/img/cape_du_meulou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 142,
    "name": "Cape Usée du Chêne Mou",
    "imageUrl": "html/img/cape_usee_du_chene_mou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance terre",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance feu",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Cape",
    "level": 148,
    "name": "Cape Itaineflam",
    "imageUrl": "html/img/cape_itaineflam.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 20
      },
      {
        "stat": "11 à 15% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Faiblesse eau (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 300
      }
    ]
  },
  {
    "type": "Cape",
    "level": 152,
    "name": "Cape Souveraine du Roissingue",
    "imageUrl": "html/img/cape_souveraine_du_roissingue.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Agilité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 156,
    "name": "Cape du Minotot",
    "imageUrl": "html/img/cape_du_minotot.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 171,
    "name": "Cape du Petit Chapon Rouge",
    "imageUrl": "html/img/cape_du_petit_chapon_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 181,
    "name": "Caprin",
    "imageUrl": "html/img/caprin.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Agilité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 185,
    "name": "Cape Erforée",
    "imageUrl": "html/img/cape_erforee.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "21 à 30% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Prospection",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 190,
    "name": "Capignon",
    "imageUrl": "html/img/capignon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 500
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Cape",
    "level": 191,
    "name": "Voile d'encre",
    "imageUrl": "html/img/voile_dencre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 350
      },
      {
        "stat": "Force",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Intelligence",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Ceinture du Kobeer",
    "imageUrl": "html/img/ceinture_du_kobeer.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Agilité",
        "min": -2,
        "max": -2
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Ceinture du Piou Bleu",
    "imageUrl": "html/img/ceinture_du_piou_bleu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Ceinture de l'aventurier",
    "imageUrl": "html/img/ceinture_de_laventurier.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Ceinture de Chance",
    "imageUrl": "html/img/ceinture_de_chance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Ceinture d'Agilité",
    "imageUrl": "html/img/ceinture_dagilite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Ceinture du Piou Rose",
    "imageUrl": "html/img/ceinture_du_piou_rose.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Ceinture du Piou Jaune",
    "imageUrl": "html/img/ceinture_du_piou_jaune.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Ceinture du Piou Rouge",
    "imageUrl": "html/img/ceinture_du_piou_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Petite Ceinture Forcesque",
    "imageUrl": "html/img/petite_ceinture_forcesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Petite Ceinture Vitalesque",
    "imageUrl": "html/img/petite_ceinture_vitalesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "La Spamette",
    "imageUrl": "html/img/la_spamette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Petite Ceinture Agilesque",
    "imageUrl": "html/img/petite_ceinture_agilesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Ceinture du Piou Vert",
    "imageUrl": "html/img/ceinture_du_piou_vert.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 1,
    "name": "Ceinture du Piou Violet",
    "imageUrl": "html/img/ceinture_du_piou_violet.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 2,
    "name": "Ceinture Forcesque",
    "imageUrl": "html/img/ceinture_forcesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 2,
    "name": "Ceinture Vitalesque",
    "imageUrl": "html/img/ceinture_vitalesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 3,
    "name": "Ceinture Agilesque",
    "imageUrl": "html/img/ceinture_agilesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 6,
    "name": "Araknoture",
    "imageUrl": "html/img/araknoture.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 11,
        "max": 50
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 6,
    "name": "Grande Ceinture Agilesque",
    "imageUrl": "html/img/grande_ceinture_agilesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 6,
    "name": "Grande Ceinture Vitalesque",
    "imageUrl": "html/img/grande_ceinture_vitalesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 6,
    "name": "Grande Ceinture Forcesque",
    "imageUrl": "html/img/grande_ceinture_forcesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 8,
    "name": "Ceinture du Kwabe",
    "imageUrl": "html/img/ceinture_du_kwabe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Faiblesse feu (%)",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 8,
    "name": "Imposante Ceinture Agilesque",
    "imageUrl": "html/img/imposante_ceinture_agilesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 8,
    "name": "Imposante Ceinture Forcesque",
    "imageUrl": "html/img/imposante_ceinture_forcesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 8,
    "name": "Imposante Ceinture Vitalesque",
    "imageUrl": "html/img/imposante_ceinture_vitalesque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 10,
    "name": "Ceinture Fleurie",
    "imageUrl": "html/img/ceinture_fleurie.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Intelligence",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 10,
    "name": "Ceinture en Mousse",
    "imageUrl": "html/img/ceinture_en_mousse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Pods",
        "min": 1,
        "max": 200
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 15,
    "name": "Ceinture du Bandit",
    "imageUrl": "html/img/ceinture_du_bandit.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Faiblesse feu (%)",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Faiblesse eau (%)",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 17,
    "name": "Ceinture de Sécurité",
    "imageUrl": "html/img/ceinture_de_securite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": -5,
        "max": -5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 18,
    "name": "Sanglature",
    "imageUrl": "html/img/sanglature.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 20,
    "name": "Ceinture de Poche",
    "imageUrl": "html/img/ceinture_de_poche.png",
    "damages": [],
    "effects": [
      {
        "stat": "Pods",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 20,
    "name": "Ceinture de l'Homme Ours",
    "imageUrl": "html/img/ceinture_de_lhomme_ours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": 9,
        "max": 12
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 20,
    "name": "Ceinturemuda du Paysan",
    "imageUrl": "html/img/ceinturemuda_du_paysan.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 20,
    "name": "Ceinture du Bouftou",
    "imageUrl": "html/img/ceinture_du_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Pods",
        "min": 1,
        "max": 500
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 22,
    "name": "Ceinture du Tofu",
    "imageUrl": "html/img/ceinture_du_tofu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Pods",
        "min": 1,
        "max": 200
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 26,
    "name": "Ceinture Piquante",
    "imageUrl": "html/img/ceinture_piquante.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 27,
    "name": "Ceinture de Célérité",
    "imageUrl": "html/img/ceinture_de_celerite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": -6,
        "max": -15
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 27,
    "name": "Ceinture d'Endurance",
    "imageUrl": "html/img/ceinture_dendurance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 27,
    "name": "La Mouthmou",
    "imageUrl": "html/img/la_mouthmou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 100
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 4
      },
      {
        "stat": "PM perdu à la cible",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 28,
    "name": "La Croqueuse",
    "imageUrl": "html/img/la_croqueuse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Faiblesse neutre (%)",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 29,
    "name": "Ceinture Banisation",
    "imageUrl": "html/img/ceinture_banisation.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 30,
    "name": "Ceinture Fulgurante",
    "imageUrl": "html/img/ceinture_fulgurante.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 31,
    "name": "Ceinture de Puissance",
    "imageUrl": "html/img/ceinture_de_puissance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": -11,
        "max": -20
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 32,
    "name": "Ceinture Banisation Sauvage",
    "imageUrl": "html/img/ceinture_banisation_sauvage.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 41,
        "max": 65
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 32,
    "name": "Ceinture du bois de l'est",
    "imageUrl": "html/img/ceinture_du_bois_de_lest.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 41,
        "max": 65
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 33,
    "name": "Ceinture du Prespic",
    "imageUrl": "html/img/ceinture_du_prespic.png",
    "damages": [],
    "effects": [
      {
        "stat": "Renvois de dommages",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 33,
    "name": "Ceinture Fourbissante",
    "imageUrl": "html/img/ceinture_fourbissante.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Initiative",
        "min": 41,
        "max": 60
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 33,
    "name": "Ceinture du Tot",
    "imageUrl": "html/img/ceinture_du_tot.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Intelligence",
        "min": -11,
        "max": -30
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 34,
    "name": "Puissance de Crocoburio",
    "imageUrl": "html/img/puissance_de_crocoburio.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 80
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 37,
    "name": "Ceinture du Boufcoul",
    "imageUrl": "html/img/ceinture_du_boufcoul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Pods",
        "min": 101,
        "max": 500
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 37,
    "name": "Ramoume l'Eternelle",
    "imageUrl": "html/img/ramoume_leternelle.png",
    "damages": [],
    "effects": [
      {
        "stat": "Pods",
        "min": -1,
        "max": 300
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Faiblesse terre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 37,
    "name": "L'Ami Léhunui",
    "imageUrl": "html/img/lami_lehunui.png",
    "damages": [],
    "effects": [
      {
        "stat": "Pods",
        "min": -1,
        "max": 300
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Faiblesse feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 38,
    "name": "Ceinture du Tétounik",
    "imageUrl": "html/img/ceinture_du_tetounik.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Soins",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 39,
    "name": "Krustoture",
    "imageUrl": "html/img/krustoture.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "1 à 10% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 39,
    "name": "Ceinture Lardière",
    "imageUrl": "html/img/ceinture_lardiere.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "1 à 10% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 41,
    "name": "Ceinture Siks Won Naïne",
    "imageUrl": "html/img/ceinture_siks_won_naine.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 36,
        "max": 45
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 41,
    "name": "Kwakture de Flammes",
    "imageUrl": "html/img/kwakture_de_flammes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 41,
    "name": "Ceinture Akwadala",
    "imageUrl": "html/img/ceinture_akwadala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Pods",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 41,
    "name": "Kwakture de Glace",
    "imageUrl": "html/img/kwakture_de_glace.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 41,
    "name": "Kwakture de Vent",
    "imageUrl": "html/img/kwakture_de_vent.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 41,
    "name": "Kwakture de Terre",
    "imageUrl": "html/img/kwakture_de_terre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 41,
    "name": "La Végète Hâtif",
    "imageUrl": "html/img/la_vegete_hatif.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Faiblesse terre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 25
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 42,
    "name": "Ceinture Kokokette",
    "imageUrl": "html/img/ceinture_kokokette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 43,
    "name": "Scarature Noire",
    "imageUrl": "html/img/scarature_noire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 4
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 45,
    "name": "Abrature",
    "imageUrl": "html/img/abrature.png",
    "damages": [],
    "effects": [
      {
        "stat": "Pods",
        "min": 51,
        "max": 150
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 30
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 45,
    "name": "Beignature",
    "imageUrl": "html/img/beignature.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 45,
    "name": "Mégature",
    "imageUrl": "html/img/megature.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 45,
    "name": "Ceinture du Craqueleur",
    "imageUrl": "html/img/ceinture_du_craqueleur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Pods",
        "min": 1,
        "max": 300
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 46,
    "name": "Ceinture du Black Wab",
    "imageUrl": "html/img/ceinture_du_black_wab.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 46,
    "name": "Scarature Blanche",
    "imageUrl": "html/img/scarature_blanche.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 46,
    "name": "Ceinture Vioutifoule",
    "imageUrl": "html/img/ceinture_vioutifoule.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 46,
    "name": "Scarature Verte",
    "imageUrl": "html/img/scarature_verte.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 46,
    "name": "Scarature Bleue",
    "imageUrl": "html/img/scarature_bleue.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 46,
    "name": "Scarature Rouge",
    "imageUrl": "html/img/scarature_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 47,
    "name": "Ceinture Noire de Frank Lee Bruce",
    "imageUrl": "html/img/ceinture_noire_de_frank_lee_bruce.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "+4 à 5 de dommages aux pièges",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 48,
    "name": "Caleçon à bretelles du Parrain",
    "imageUrl": "html/img/calecon_a_bretelles_du_parrain.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 48,
    "name": "L'Adelus",
    "imageUrl": "html/img/ladelus.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 4
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 48,
    "name": "Ceinture de Flash Gorgone",
    "imageUrl": "html/img/ceinture_de_flash_gorgone.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 4
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 49,
    "name": "Tutu Rose",
    "imageUrl": "html/img/tutu_rose.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 49,
    "name": "String du Mulou",
    "imageUrl": "html/img/string_du_mulou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 49,
    "name": "Chtévu",
    "imageUrl": "html/img/chtevu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Echec critique",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 49,
    "name": "Ceinture Chafeuse",
    "imageUrl": "html/img/ceinture_chafeuse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 9
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 49,
    "name": "Ceinture Terrdala",
    "imageUrl": "html/img/ceinture_terrdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Pods",
        "min": 301,
        "max": 400
      },
      {
        "stat": "11 à 15% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 50,
    "name": "Blopture Griotte",
    "imageUrl": "html/img/blopture_griotte.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Pods",
        "min": 101,
        "max": 300
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 50,
    "name": "Blopture Indigo",
    "imageUrl": "html/img/blopture_indigo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Pods",
        "min": 101,
        "max": 300
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 50,
    "name": "Blopture Coco",
    "imageUrl": "html/img/blopture_coco.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Pods",
        "min": 101,
        "max": 300
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 50,
    "name": "Blopture Reinette",
    "imageUrl": "html/img/blopture_reinette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Pods",
        "min": 101,
        "max": 300
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 50,
    "name": "Ceinture Luthuthu",
    "imageUrl": "html/img/ceinture_luthuthu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Agilité",
        "min": -21,
        "max": -30
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 50,
    "name": "Ceinture Kolante",
    "imageUrl": "html/img/ceinture_kolante.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 7,
        "max": 11
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 51,
    "name": "Scarature Dorée",
    "imageUrl": "html/img/scarature_doree.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 55
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 52,
    "name": "Ceinture Royale du Bouftou",
    "imageUrl": "html/img/ceinture_royale_du_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Pods",
        "min": 101,
        "max": 800
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 70
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 53,
    "name": "Ceinture Bontarienne",
    "imageUrl": "html/img/ceinture_bontarienne.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 53,
    "name": "Ceinture Brâkmarienne",
    "imageUrl": "html/img/ceinture_brakmarienne.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 55,
    "name": "Ceinture du Rat",
    "imageUrl": "html/img/ceinture_du_rat.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 55,
    "name": "Ceinture du Dodu Trembleur",
    "imageUrl": "html/img/ceinture_du_dodu_trembleur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Agilité",
        "min": -31,
        "max": -50
      },
      {
        "stat": "Chance",
        "min": -31,
        "max": -50
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 60,
    "name": "Ceinture Tortue Rouge",
    "imageUrl": "html/img/ceinture_tortue_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Prospection",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 60,
    "name": "Ceinture Tortue Bleue",
    "imageUrl": "html/img/ceinture_tortue_bleue.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Prospection",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 60,
    "name": "Ceinture Tortue Jaune",
    "imageUrl": "html/img/ceinture_tortue_jaune.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Prospection",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 60,
    "name": "Ceinture Tortue Verte",
    "imageUrl": "html/img/ceinture_tortue_verte.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Prospection",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 60,
    "name": "Ceinture du Koalak",
    "imageUrl": "html/img/ceinture_du_koalak.png",
    "damages": [],
    "effects": [
      {
        "stat": "Pods",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 60,
    "name": "Slip Kangouwou du Wabbit GM",
    "imageUrl": "html/img/slip_kangouwou_du_wabbit_gm.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 9
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 60,
    "name": "Geloture",
    "imageUrl": "html/img/geloture.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 50
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 65,
    "name": "Ceinture Ouginakale",
    "imageUrl": "html/img/ceinture_ouginakale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 67,
    "name": "La Xerbo",
    "imageUrl": "html/img/la_xerbo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Pods",
        "min": 151,
        "max": 250
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 70,
    "name": "Ceinture Aerdala",
    "imageUrl": "html/img/ceinture_aerdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 70,
    "name": "Ceinture du Chef Crocodaille",
    "imageUrl": "html/img/ceinture_du_chef_crocodaille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 71,
    "name": "Ceinture d'une Femme en Or",
    "imageUrl": "html/img/ceinture_dune_femme_en_or.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Pods",
        "min": 301,
        "max": 500
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 77,
    "name": "Ceinture Dracochoune",
    "imageUrl": "html/img/ceinture_dracochoune.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 80,
    "name": "Blopture Indigo Royale",
    "imageUrl": "html/img/blopture_indigo_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Pods",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 80,
    "name": "Blopture Griotte Royale",
    "imageUrl": "html/img/blopture_griotte_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Pods",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 80,
    "name": "Blopture Reinette Royale",
    "imageUrl": "html/img/blopture_reinette_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Pods",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 80,
    "name": "Blopture Coco Royale",
    "imageUrl": "html/img/blopture_coco_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Pods",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 80,
    "name": "Shikature",
    "imageUrl": "html/img/shikature.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 80,
    "name": "Ceinture du Craqueleur Légendaire",
    "imageUrl": "html/img/ceinture_du_craqueleur_legendaire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Pods",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 80,
    "name": "Puissante Ceinture Fulgurante",
    "imageUrl": "html/img/puissante_ceinture_fulgurante.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 80,
    "name": "Farlature",
    "imageUrl": "html/img/farlature.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 81,
    "name": "Ceinture Feudala",
    "imageUrl": "html/img/ceinture_feudala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 81,
    "name": "Ceinture Mulante",
    "imageUrl": "html/img/ceinture_mulante.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 84,
    "name": "Ceinture des Vents",
    "imageUrl": "html/img/ceinture_des_vents.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 8
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 90,
    "name": "Blopture Multicolore Royale",
    "imageUrl": "html/img/blopture_multicolore_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Dommages (%)",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance terre (%)",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 92,
    "name": "Ceinture sombre en Abrakleur",
    "imageUrl": "html/img/ceinture_sombre_en_abrakleur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 98,
    "name": "Ceinture Chouqueuse",
    "imageUrl": "html/img/ceinture_chouqueuse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 80
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 100,
    "name": "Slip du Chef Bwork",
    "imageUrl": "html/img/slip_du_chef_bwork.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Faiblesse feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 101,
    "name": "Ceinture du Rat Noir",
    "imageUrl": "html/img/ceinture_du_rat_noir.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "+6 à 10 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "16 à 25% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 102,
    "name": "Ceinture du Rat Blanc",
    "imageUrl": "html/img/ceinture_du_rat_blanc.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 80
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 111,
    "name": "Abrature Ancestrale",
    "imageUrl": "html/img/abrature_ancestrale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 111,
    "name": "Ceinture du Minotoror",
    "imageUrl": "html/img/ceinture_du_minotoror.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 131,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 120,
    "name": "Ceinture Corbaquiale",
    "imageUrl": "html/img/ceinture_corbaquiale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Initiative",
        "min": 181,
        "max": 330
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 121,
    "name": "Ceinture de l'Amant d'Ha",
    "imageUrl": "html/img/ceinture_de_lamant_dha.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 100
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 9,
        "max": 13
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 124,
    "name": "Ceinture du Dragoeuf",
    "imageUrl": "html/img/ceinture_du_dragoeuf.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Pods",
        "min": 301,
        "max": 500
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 125,
    "name": "Ceinture Sula",
    "imageUrl": "html/img/ceinture_sula.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "+16 à 20 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "16 à 20% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance neutre",
        "min": 9,
        "max": 12
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 125,
    "name": "Ceinture du Meulou",
    "imageUrl": "html/img/ceinture_du_meulou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 4,
        "max": 7
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 125,
    "name": "Xénature",
    "imageUrl": "html/img/xenature.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 300,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 128,
    "name": "Ceinture Claire en Abrakleur",
    "imageUrl": "html/img/ceinture_claire_en_abrakleur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 129,
    "name": "Ceinture Meulante",
    "imageUrl": "html/img/ceinture_meulante.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 401,
        "max": 600
      },
      {
        "stat": "Résistance air",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 300
      },
      {
        "stat": "Résistance eau",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance terre",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Ceinture Lupine",
    "imageUrl": "html/img/ceinture_lupine.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive le lancer en ligne du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Sablier de Xélor",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Protection Aveuglante de 3",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente de 1 le nombre de lancer maximal par tour du sort Fuite",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Gaine Hage",
    "imageUrl": "html/img/gaine_hage.png",
    "damages": [],
    "effects": [
      {
        "stat": "+30 aux CC sur le sort Armure Incandescente",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Tr&ecirc",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Glyphe de Silence de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Retour du b&acirc de 1",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Ceinture Luthe",
    "imageUrl": "html/img/ceinture_luthe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le délai de relance du sort Ronce Insolente",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort La Gonflable de 3",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Réduit de 2 le coût en PA du sort Arbre",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Ceinture Bodiézèle",
    "imageUrl": "html/img/ceinture_bodiezele.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Invocation de Dragonnet Rouge",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Invocation de Sanglier",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+25 aux CC sur le sort Crocs du Mulou",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Ceinture Buhlent",
    "imageUrl": "html/img/ceinture_buhlent.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Esprit Félin de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Tout ou rien",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Réflexes de 4",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Ceinture Gessant",
    "imageUrl": "html/img/ceinture_gessant.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Corruption",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Pelle Massacrante",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Pelle Animée de 6",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+25 aux CC sur le sort Roulage de Pelle",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Sangle Hans",
    "imageUrl": "html/img/sangle_hans.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Ch&acirc",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Punition",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Détour de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Folie sanguinaire",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Sangle Hynère",
    "imageUrl": "html/img/sangle_hynere.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Colère de Iop",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Couper de 3",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Souffle de 3",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Amplification de 3",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Sangle Cible",
    "imageUrl": "html/img/sangle_cible.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive le lancer en ligne du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Flèche Cinglante",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Flèche Destructrice",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Tir Puissant",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Sangle Huée",
    "imageUrl": "html/img/sangle_huee.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+25 aux CC sur le sort Vague à Lame",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Souillure de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Chamrak de 1",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Sangle Holon",
    "imageUrl": "html/img/sangle_holon.png",
    "damages": [],
    "effects": [
      {
        "stat": "+35 aux CC sur le sort Mot Stimulant",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Mot Vampirique",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Soins",
        "min": 50,
        "max": 50
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Mot d'Altruisme",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 130,
    "name": "Sangle Glinglin",
    "imageUrl": "html/img/sangle_glinglin.png",
    "damages": [],
    "effects": [
      {
        "stat": "Augmente la portée du sort Peur de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive le lancer en ligne du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Arnaque de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Invisibilité d'Autrui",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 133,
    "name": "Ceinture Cérémoniale du Seigneur des Rats",
    "imageUrl": "html/img/ceinture_ceremoniale_du_seigneur_des_rats.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Pods",
        "min": 500,
        "max": 500
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 8
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 141,
    "name": "String Automnal du Chêne Mou",
    "imageUrl": "html/img/string_automnal_du_chene_mou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Pods",
        "min": 501,
        "max": 600
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 148,
    "name": "Ceinture Bitoufale de Prosper Youpla",
    "imageUrl": "html/img/ceinture_bitoufale_de_prosper_youpla.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 149,
    "name": "Ceinture du Minotot",
    "imageUrl": "html/img/ceinture_du_minotot.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 181,
        "max": 250
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Pods",
        "min": 500,
        "max": 500
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 164,
    "name": "Goldoture",
    "imageUrl": "html/img/goldoture.png",
    "damages": [],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 177,
    "name": "Ceinture Mycosine",
    "imageUrl": "html/img/ceinture_mycosine.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Vitalité",
        "min": 301,
        "max": 350
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 500
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 179,
    "name": "Tranche des Sous-bois",
    "imageUrl": "html/img/tranche_des_sous-bois.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 351,
        "max": 400
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 181,
    "name": "Ceinture Toré",
    "imageUrl": "html/img/ceinture_tore.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 182,
    "name": "Ceinture Rasboulaire du Rasboul",
    "imageUrl": "html/img/ceinture_rasboulaire_du_rasboul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 185,
    "name": "Ougature",
    "imageUrl": "html/img/ougature.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 301,
        "max": 350
      },
      {
        "stat": "Sagesse",
        "min": 41,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Ceinture",
    "level": 192,
    "name": "String Tue-Mouche",
    "imageUrl": "html/img/string_tue-mouche.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Chapeau de la Mariée",
    "imageUrl": "html/img/chapeau_de_la_mariee.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Casque amélioré",
    "imageUrl": "html/img/casque_ameliore.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Chapeau de l'Aventurier",
    "imageUrl": "html/img/chapeau_de_laventurier.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Cache Oreilles",
    "imageUrl": "html/img/cache_oreilles.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Bandeau Komintot",
    "imageUrl": "html/img/bandeau_komintot.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Bandeau de Vitalité",
    "imageUrl": "html/img/bandeau_de_vitalite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Chapeau du Piou Rose",
    "imageUrl": "html/img/chapeau_du_piou_rose.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Tête de Citwouille",
    "imageUrl": "html/img/tete_de_citwouille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Initiative",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Chapeau du Piou Bleu",
    "imageUrl": "html/img/chapeau_du_piou_bleu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Chapeau du Marié",
    "imageUrl": "html/img/chapeau_du_marie.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Lisseur",
    "imageUrl": "html/img/lisseur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Chapeau du Piou Vert",
    "imageUrl": "html/img/chapeau_du_piou_vert.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Petit Bandeau de Vitalité",
    "imageUrl": "html/img/petit_bandeau_de_vitalite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Louffeur",
    "imageUrl": "html/img/louffeur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Chapeau du Piou Violet",
    "imageUrl": "html/img/chapeau_du_piou_violet.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Maskananas",
    "imageUrl": "html/img/maskananas.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Le Floude",
    "imageUrl": "html/img/le_floude.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Chapeau du Piou Rouge",
    "imageUrl": "html/img/chapeau_du_piou_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 1,
    "name": "Coiffe du Champion",
    "imageUrl": "html/img/coiffe_du_champion.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Chapeau",
    "level": 3,
    "name": "Grand Bandeau de Vitalité",
    "imageUrl": "html/img/grand_bandeau_de_vitalite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 15
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 6,
    "name": "Chapeau du Lapino",
    "imageUrl": "html/img/chapeau_du_lapino.png",
    "damages": [],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 6,
    "name": "L'Araknacoiffe",
    "imageUrl": "html/img/laraknacoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Initiative",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Portée",
        "min": -2,
        "max": -2
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 6,
    "name": "Makroute",
    "imageUrl": "html/img/makroute.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 6,
    "name": "Pandawa",
    "imageUrl": "html/img/pandawa.png",
    "damages": [],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 9,
    "name": "Champcoiffe",
    "imageUrl": "html/img/champcoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 10,
    "name": "Coiffe Champêtre",
    "imageUrl": "html/img/coiffe_champetre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 10,
    "name": "Coiffe du Bouftou",
    "imageUrl": "html/img/coiffe_du_bouftou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 40
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 11,
    "name": "Coiffe en Mousse",
    "imageUrl": "html/img/coiffe_en_mousse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Faiblesse eau (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Faiblesse feu (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Faiblesse neutre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 15,
    "name": "Moskitogalurette",
    "imageUrl": "html/img/moskitogalurette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 17,
    "name": "Korko Klako",
    "imageUrl": "html/img/korko_klako.png",
    "damages": [],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 19,
    "name": "Bob du Paysan",
    "imageUrl": "html/img/bob_du_paysan.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 20,
    "name": "Casque",
    "imageUrl": "html/img/casque.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 20,
    "name": "Astrocoiffe",
    "imageUrl": "html/img/astrocoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 20
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 20,
    "name": "Citwouille",
    "imageUrl": "html/img/citwouille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 20,
    "name": "Coiffe de l'Homme Ours",
    "imageUrl": "html/img/coiffe_de_lhomme_ours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 20,
    "name": "La Coiffe du Ploukosse",
    "imageUrl": "html/img/la_coiffe_du_ploukosse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 20
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 20,
    "name": "Cornes de XVII",
    "imageUrl": "html/img/cornes_de_xvii.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 20
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 21,
    "name": "Chapeau Pointu",
    "imageUrl": "html/img/chapeau_pointu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 21,
    "name": "Coquille Emeraude",
    "imageUrl": "html/img/coquille_emeraude.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 22,
    "name": "Le Oiram",
    "imageUrl": "html/img/le_oiram.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 50
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 22,
    "name": "Le Troma",
    "imageUrl": "html/img/le_troma.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 50
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 22,
    "name": "Géniallissime Coiffe de Torte Hou",
    "imageUrl": "html/img/geniallissime_coiffe_de_torte_hou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 50
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 23,
    "name": "Kaskofu",
    "imageUrl": "html/img/kaskofu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 24,
    "name": "Crystal O'Boul",
    "imageUrl": "html/img/crystal_oboul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 50
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 26,
    "name": "Jouik Krampe",
    "imageUrl": "html/img/jouik_krampe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 50
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 30,
    "name": "Houde",
    "imageUrl": "html/img/houde.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 30,
    "name": "Couronne du Wa Wabbit",
    "imageUrl": "html/img/couronne_du_wa_wabbit.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 100
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 30,
    "name": "Borsitrono",
    "imageUrl": "html/img/borsitrono.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 30,
    "name": "Toady",
    "imageUrl": "html/img/toady.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 60
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 30,
    "name": "Oreilles de Lapineupe",
    "imageUrl": "html/img/oreilles_de_lapineupe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 30,
    "name": "Kritter",
    "imageUrl": "html/img/kritter.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 30,
    "name": "Coiffe de Goultard",
    "imageUrl": "html/img/coiffe_de_goultard.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 31,
    "name": "Fourbacoiffe",
    "imageUrl": "html/img/fourbacoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 200
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 33,
    "name": "Casque de Galgarion",
    "imageUrl": "html/img/casque_de_galgarion.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 33,
    "name": "Gulliver",
    "imageUrl": "html/img/gulliver.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 33,
    "name": "Cigalocoiffe",
    "imageUrl": "html/img/cigalocoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 15,
        "max": 15
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 33,
    "name": "Lapinocoiffe",
    "imageUrl": "html/img/lapinocoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 33,
    "name": "Choipo Podlard",
    "imageUrl": "html/img/choipo_podlard.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 33,
    "name": "Minotokorno",
    "imageUrl": "html/img/minotokorno.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 33,
    "name": "Coiffe de Maître Noir Jack",
    "imageUrl": "html/img/coiffe_de_maitre_noir_jack.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 34,
    "name": "Larvacoiffe",
    "imageUrl": "html/img/larvacoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "+2 à 3 de dommages aux pièges",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 34,
    "name": "Shako",
    "imageUrl": "html/img/shako.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 50
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -20
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 35,
    "name": "Coiffe de Crâ Cramé",
    "imageUrl": "html/img/coiffe_de_cra_crame.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 35,
    "name": "Le Ours",
    "imageUrl": "html/img/le_ours.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 36,
    "name": "Coiffe du Prespic",
    "imageUrl": "html/img/coiffe_du_prespic.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 36,
    "name": "Dora",
    "imageUrl": "html/img/dora.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 60
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 60
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 36,
    "name": "Chapeau de Satanusse",
    "imageUrl": "html/img/chapeau_de_satanusse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 60
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 60
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 36,
    "name": "Cochobits",
    "imageUrl": "html/img/cochobits.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 36,
    "name": "Dantgoule",
    "imageUrl": "html/img/dantgoule.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 60
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 60
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 37,
    "name": "Caskabeille",
    "imageUrl": "html/img/caskabeille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 40
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 37,
    "name": "Caskostar",
    "imageUrl": "html/img/caskostar.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 37,
    "name": "Le Chapleau",
    "imageUrl": "html/img/le_chapleau.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 37,
    "name": "Lorko Kasko",
    "imageUrl": "html/img/lorko_kasko.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 40
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 37,
    "name": "Dora Sombre de Brave",
    "imageUrl": "html/img/dora_sombre_de_brave.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 38,
    "name": "Masque Siks Won Naïne",
    "imageUrl": "html/img/masque_siks_won_naine.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 39,
    "name": "Coiffe Mulet du Tétounik",
    "imageUrl": "html/img/coiffe_mulet_du_tetounik.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Soins",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 39,
    "name": "Dragocoiffe Blanche",
    "imageUrl": "html/img/dragocoiffe_blanche.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Bonnet Toual",
    "imageUrl": "html/img/bonnet_toual.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Renvoi de Sort",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Glyphe Agressif",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Casque Keutumedi",
    "imageUrl": "html/img/casque_keutumedi.png",
    "damages": [],
    "effects": [
      {
        "stat": "+25 aux CC sur le sort Epée Divine",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Vitalité",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Pression de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Epée Destructrice",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Chapeau Leufère",
    "imageUrl": "html/img/chapeau_leufere.png",
    "damages": [],
    "effects": [
      {
        "stat": "+25 aux CC sur le sort Bluff",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+25 aux CC sur le sort Pile ou Face",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Chance d'Ecaflip",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente de 1 le nombre de lancer maximal par tour du sort Bond du Félin",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Bonnet Nufar",
    "imageUrl": "html/img/bonnet_nufar.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Flou",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Rayon Obscur",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Contre",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Est une arme de chasse",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Chapeau Lithique",
    "imageUrl": "html/img/chapeau_lithique.png",
    "damages": [],
    "effects": [
      {
        "stat": "+30 aux CC sur le sort Picole",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente de 1 le nombre de lancer maximal par cible du sort Epouvante",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Bonnet Spairance",
    "imageUrl": "html/img/bonnet_spairance.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Ch&acirc",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente de 1 le nombre de lancer maximal par cible du sort Attirance",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le délai de relance du sort Sacrifice",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Chapeau Grave",
    "imageUrl": "html/img/chapeau_grave.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Augmente la portée du sort Piège de Masse de 2",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Repérage",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 2 le délai de relance du sort Concentration de Chakra",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Capuche Apin",
    "imageUrl": "html/img/capuche_apin.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Invocation de Tofu",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 10,
        "max": 10
      },
      {
        "stat": "+30 aux CC sur le sort Crapaud",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+25 aux CC sur le sort Résistance Naturelle",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Végacoiffe",
    "imageUrl": "html/img/vegacoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Prospection",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 50
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Chapeau Taufeu",
    "imageUrl": "html/img/chapeau_taufeu.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 2 le délai de relance du sort Chance",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Soins",
        "min": 30,
        "max": 30
      },
      {
        "stat": "Augmente la portée du sort Force de l'Age de 1",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Masque Kanniboule",
    "imageUrl": "html/img/masque_kanniboule.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 3,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Coiffe de Robbie Capuche",
    "imageUrl": "html/img/coiffe_de_robbie_capuche.png",
    "damages": [],
    "effects": [
      {
        "stat": "Réduit de 1 le coût en PA du sort Tir Eloigné",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente de 1 le nombre de lancer maximal par cible du sort Flèche Glacée",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente de 1 le nombre de lancer maximal par cible du sort Flèche d'Immobilisation",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Flèche d'Expiation",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Chapeau Tyron",
    "imageUrl": "html/img/chapeau_tyron.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort La Folle de 3",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+30 aux CC sur le sort Larme",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Soins",
        "min": 100,
        "max": 100
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Sombrero de Pépitox",
    "imageUrl": "html/img/sombrero_de_pepitox.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages",
        "min": 3,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Chapeau du bois de l'est",
    "imageUrl": "html/img/chapeau_du_bois_de_lest.png",
    "damages": [],
    "effects": [
      {
        "stat": "Prospection",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 50
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 40,
    "name": "Coiffe Fère",
    "imageUrl": "html/img/coiffe_fere.png",
    "damages": [],
    "effects": [
      {
        "stat": "Désactive la ligne de vue du sort 0",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Augmente la portée du sort Mot de Frayeur de 1",
        "min": 0,
        "max": 0
      },
      {
        "stat": "+35 aux CC sur le sort Mot Drainant",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages",
        "min": 15,
        "max": 15
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 41,
    "name": "Kwakoiffe de Flammes",
    "imageUrl": "html/img/kwakoiffe_de_flammes.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 4,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 41,
    "name": "Kwakoiffe de Glace",
    "imageUrl": "html/img/kwakoiffe_de_glace.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 4,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 41,
    "name": "Kwakoiffe de Terre",
    "imageUrl": "html/img/kwakoiffe_de_terre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 4,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 41,
    "name": "Kwakoiffe du Vent",
    "imageUrl": "html/img/kwakoiffe_du_vent.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 4,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 42,
    "name": "Kaskwette",
    "imageUrl": "html/img/kaskwette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 42,
    "name": "La HmmMmmMmmm",
    "imageUrl": "html/img/la_hmmmmmmmmm.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": -42,
        "max": -42
      },
      {
        "stat": "Echec critique",
        "min": 13,
        "max": 13
      },
      {
        "stat": "Force",
        "min": 42,
        "max": 42
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 43,
    "name": "Borsalino du Parrain",
    "imageUrl": "html/img/borsalino_du_parrain.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 43,
    "name": "Chapeau Akwadala",
    "imageUrl": "html/img/chapeau_akwadala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 43,
    "name": "Champo",
    "imageUrl": "html/img/champo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 44,
    "name": "Scaracoiffe Rouge",
    "imageUrl": "html/img/scaracoiffe_rouge.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 44,
    "name": "Scaracoiffe Blanche",
    "imageUrl": "html/img/scaracoiffe_blanche.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 44,
    "name": "Caskogato",
    "imageUrl": "html/img/caskogato.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 44,
    "name": "Scaracoiffe Bleue",
    "imageUrl": "html/img/scaracoiffe_bleue.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 44,
    "name": "Chapeau Paupayahn",
    "imageUrl": "html/img/chapeau_paupayahn.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 44,
    "name": "Scaracoiffe Verte",
    "imageUrl": "html/img/scaracoiffe_verte.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 44,
    "name": "Casque Vioutifoule",
    "imageUrl": "html/img/casque_vioutifoule.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 44,
    "name": "Casque du Craqueleur",
    "imageUrl": "html/img/casque_du_craqueleur.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 6
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 6
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 44,
    "name": "Mégacoiffe",
    "imageUrl": "html/img/megacoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 45,
    "name": "Corbacoiffe",
    "imageUrl": "html/img/corbacoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Initiative",
        "min": 11,
        "max": 210
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 45,
    "name": "Abracaska",
    "imageUrl": "html/img/abracaska.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 45,
    "name": "Poshocoiffe",
    "imageUrl": "html/img/poshocoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Initiative",
        "min": 11,
        "max": 210
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 46,
    "name": "Goyave",
    "imageUrl": "html/img/goyave.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 47,
    "name": "Coiffe du Boufcoul",
    "imageUrl": "html/img/coiffe_du_boufcoul.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 47,
    "name": "Masque Tromatisant",
    "imageUrl": "html/img/masque_tromatisant.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 60
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 48,
    "name": "Bandeau Papayou",
    "imageUrl": "html/img/bandeau_papayou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 48,
    "name": "Kraignosse",
    "imageUrl": "html/img/kraignosse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 49,
    "name": "Coiffe du Black Wab",
    "imageUrl": "html/img/coiffe_du_black_wab.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 49,
    "name": "Noreilles de Slait",
    "imageUrl": "html/img/noreilles_de_slait.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 50,
    "name": "Casque du Chafer",
    "imageUrl": "html/img/casque_du_chafer.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": -21,
        "max": -70
      },
      {
        "stat": "Intelligence",
        "min": -21,
        "max": -70
      },
      {
        "stat": "Agilité",
        "min": -21,
        "max": -70
      },
      {
        "stat": "Chance",
        "min": -21,
        "max": -70
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 50,
    "name": "Boufcoiffe Royale",
    "imageUrl": "html/img/boufcoiffe_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 70
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 70
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 50,
    "name": "Clint",
    "imageUrl": "html/img/clint.png",
    "damages": [],
    "effects": [
      {
        "stat": "Portée",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 30,
        "max": 30
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 50,
    "name": "Makroute Sombre",
    "imageUrl": "html/img/makroute_sombre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 8
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 50,
    "name": "Chapodindo",
    "imageUrl": "html/img/chapodindo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 4
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 53,
    "name": "Scaracoiffe Noire",
    "imageUrl": "html/img/scaracoiffe_noire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 55,
    "name": "Kannipiou",
    "imageUrl": "html/img/kannipiou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 57,
    "name": "Dragocoiffe Dorée",
    "imageUrl": "html/img/dragocoiffe_doree.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 58,
    "name": "Scaracoiffe Dorée",
    "imageUrl": "html/img/scaracoiffe_doree.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 60,
    "name": "Coiffe du Koalak",
    "imageUrl": "html/img/coiffe_du_koalak.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 60,
    "name": "Caracoiffe",
    "imageUrl": "html/img/caracoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 80
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 60,
    "name": "Oreilles de Wabbits",
    "imageUrl": "html/img/oreilles_de_wabbits.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 8
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 60,
    "name": "Gelocoiffe",
    "imageUrl": "html/img/gelocoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Prospection",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 40
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 61,
    "name": "Coiffe du Kitsou",
    "imageUrl": "html/img/coiffe_du_kitsou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 150
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 61,
    "name": "Coiffe du Mulou",
    "imageUrl": "html/img/coiffe_du_mulou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 64,
    "name": "Chapeau Aerdala",
    "imageUrl": "html/img/chapeau_aerdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 70,
    "name": "Coiffe du Chef Crocodaille",
    "imageUrl": "html/img/coiffe_du_chef_crocodaille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 70,
    "name": "Dragocoiffe de Saphire",
    "imageUrl": "html/img/dragocoiffe_de_saphire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 72,
    "name": "Coiffe du Dragoeuf volant",
    "imageUrl": "html/img/coiffe_du_dragoeuf_volant.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 200
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 73,
    "name": "Korko Kousto",
    "imageUrl": "html/img/korko_kousto.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 75,
    "name": "Chapeau Terrdala",
    "imageUrl": "html/img/chapeau_terrdala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 77,
    "name": "Octovius",
    "imageUrl": "html/img/octovius.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 79,
    "name": "Couronne du Roi Gelax",
    "imageUrl": "html/img/couronne_du_roi_gelax.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 200,
        "max": 200
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 79,
    "name": "Chapeau de Barbroussa",
    "imageUrl": "html/img/chapeau_de_barbroussa.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 80,
    "name": "Casque du Craqueleur Légendaire",
    "imageUrl": "html/img/casque_du_craqueleur_legendaire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Résistance feu",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance air",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 80,
    "name": "Shikacoiffe",
    "imageUrl": "html/img/shikacoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 8,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 80,
    "name": "Farlacoiffe",
    "imageUrl": "html/img/farlacoiffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 8,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 81,
    "name": "La Bertheuze",
    "imageUrl": "html/img/la_bertheuze.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 81,
        "max": 110
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 82,
    "name": "Coiffe du Koulosse",
    "imageUrl": "html/img/coiffe_du_koulosse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 300
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 93,
    "name": "Dragocoiffe noire",
    "imageUrl": "html/img/dragocoiffe_noire.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 95,
    "name": "Coiffe de la Dragueuse",
    "imageUrl": "html/img/coiffe_de_la_dragueuse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 90
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 250
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 95,
    "name": "Masque de l'Abrakleur sombre",
    "imageUrl": "html/img/masque_de_labrakleur_sombre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 98,
    "name": "Chapeau Feudala",
    "imageUrl": "html/img/chapeau_feudala.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 98,
    "name": "Coiffe du Dragon Cochon",
    "imageUrl": "html/img/coiffe_du_dragon_cochon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 100,
    "name": "Billréole",
    "imageUrl": "html/img/billreole.png",
    "damages": [],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 2000
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 100,
    "name": "Casque du Chef Bwork",
    "imageUrl": "html/img/casque_du_chef_bwork.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 101,
    "name": "Kabuto",
    "imageUrl": "html/img/kabuto.png",
    "damages": [],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 100
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 102,
    "name": "Masque du Rat Noir",
    "imageUrl": "html/img/masque_du_rat_noir.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 80
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "+6 à 10 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "16 à 25% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 103,
    "name": "Chapeau du Mineur Sombre",
    "imageUrl": "html/img/chapeau_du_mineur_sombre.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 104,
    "name": "Capuche de la Ouassingue",
    "imageUrl": "html/img/capuche_de_la_ouassingue.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 120
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 105,
    "name": "Coiffe du Rat Blanc",
    "imageUrl": "html/img/coiffe_du_rat_blanc.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 106,
    "name": "Coiffe du Gaddie",
    "imageUrl": "html/img/coiffe_du_gaddie.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 108,
    "name": "Blémiche",
    "imageUrl": "html/img/blemiche.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 110,
    "name": "Coiffe du Bimd'Oule",
    "imageUrl": "html/img/coiffe_du_bimdoule.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance feu",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 111,
    "name": "La Bekille",
    "imageUrl": "html/img/la_bekille.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 8
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 113,
    "name": "Phalène",
    "imageUrl": "html/img/phalene.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 114,
    "name": "Abracaska Ancestral",
    "imageUrl": "html/img/abracaska_ancestral.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 120,
    "name": "Dora Bora",
    "imageUrl": "html/img/dora_bora.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 61,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Intelligence",
        "min": 61,
        "max": 80
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 120,
    "name": "Kanistère",
    "imageUrl": "html/img/kanistere.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 1500,
        "max": 1500
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 120,
    "name": "Solomonk",
    "imageUrl": "html/img/solomonk.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "+21 à 30 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Initiative",
        "min": 300,
        "max": 300
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 120,
    "name": "Krokop",
    "imageUrl": "html/img/krokop.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 120,
    "name": "Koloss",
    "imageUrl": "html/img/koloss.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "+11 à 15 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "11 à 15% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 122,
    "name": "Holoune",
    "imageUrl": "html/img/holoune.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 123,
    "name": "Kaskargo",
    "imageUrl": "html/img/kaskargo.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 128,
    "name": "Chapeau de la Gamine Zoth",
    "imageUrl": "html/img/chapeau_de_la_gamine_zoth.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 128,
    "name": "Casque Dragoeuf",
    "imageUrl": "html/img/casque_dragoeuf.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 13
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 13
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 13
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 13
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 13
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 128,
    "name": "Coiffe du Disciple Zoth",
    "imageUrl": "html/img/coiffe_du_disciple_zoth.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": -21,
        "max": -30
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 128,
    "name": "Couronne du Tofu Royal",
    "imageUrl": "html/img/couronne_du_tofu_royal.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Agilité",
        "min": 46,
        "max": 60
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Faiblesse terre (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 129,
    "name": "Doro le Blak",
    "imageUrl": "html/img/doro_le_blak.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Prospection",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 133,
    "name": "Bandeau Kaliptus",
    "imageUrl": "html/img/bandeau_kaliptus.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Faiblesse eau (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Faiblesse terre (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 133,
    "name": "Masque du Sergent Zoth",
    "imageUrl": "html/img/masque_du_sergent_zoth.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Faiblesse neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 133,
    "name": "Coiffe Cérémoniale du Seigneur des Rats",
    "imageUrl": "html/img/coiffe_ceremoniale_du_seigneur_des_rats.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 134,
    "name": "Casque du Guerrier Zoth",
    "imageUrl": "html/img/casque_du_guerrier_zoth.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 61,
        "max": 80
      },
      {
        "stat": "Vitalité",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Faiblesse neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 134,
    "name": "Masque de l'Abrakleur clair",
    "imageUrl": "html/img/masque_de_labrakleur_clair.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 141,
    "name": "Coiffe du Meulou",
    "imageUrl": "html/img/coiffe_du_meulou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 55
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 270
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 144,
    "name": "Casque du Bwork de Bronze",
    "imageUrl": "html/img/casque_du_bwork_de_bronze.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Résistance neutre",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Initiative",
        "min": 300,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Résistance feu",
        "min": 16,
        "max": 20
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 145,
    "name": "Coiffe du Chêne Mou",
    "imageUrl": "html/img/coiffe_du_chene_mou.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 145,
    "name": "Piruk",
    "imageUrl": "html/img/piruk.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Initiative",
        "min": 401,
        "max": 600
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 149,
    "name": "Krépite",
    "imageUrl": "html/img/krepite.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Résistance feu",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 151,
    "name": "Ruskauffe",
    "imageUrl": "html/img/ruskauffe.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 4
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Créature invocables",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 152,
    "name": "Chapblopignon",
    "imageUrl": "html/img/chapblopignon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 154,
    "name": "Casque du Bitouf Aérien",
    "imageUrl": "html/img/casque_du_bitouf_aerien.png",
    "damages": [],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 156,
    "name": "Coiffe du Maître Zoth",
    "imageUrl": "html/img/coiffe_du_maitre_zoth.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 157,
    "name": "Coiffe du Minotot",
    "imageUrl": "html/img/coiffe_du_minotot.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 270
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 158,
    "name": "Masque Vaudou Jav",
    "imageUrl": "html/img/masque_vaudou_jav.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 61,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": -101,
        "max": -150
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 500
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance eau (%)",
        "min": 9,
        "max": 14
      },
      {
        "stat": "Résistance eau",
        "min": 9,
        "max": 14
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 158,
    "name": "Masque Vaudou Archer",
    "imageUrl": "html/img/masque_vaudou_archer.png",
    "damages": [],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 61,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": -101,
        "max": -150
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 500
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu (%)",
        "min": 9,
        "max": 14
      },
      {
        "stat": "Résistance feu",
        "min": 9,
        "max": 14
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 158,
    "name": "Masque Vaudou Sarbak",
    "imageUrl": "html/img/masque_vaudou_sarbak.png",
    "damages": [],
    "effects": [
      {
        "stat": "Agilité",
        "min": 61,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": -101,
        "max": -150
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 500
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance air (%)",
        "min": 9,
        "max": 14
      },
      {
        "stat": "Résistance air",
        "min": 9,
        "max": 14
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 158,
    "name": "Masque Vaudou Thierry",
    "imageUrl": "html/img/masque_vaudou_thierry.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 61,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": -101,
        "max": -150
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 500
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance terre (%)",
        "min": 9,
        "max": 14
      },
      {
        "stat": "Résistance terre",
        "min": 9,
        "max": 14
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 160,
    "name": "Le Nahitse",
    "imageUrl": "html/img/le_nahitse.png",
    "damages": [],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Intelligence",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air",
        "min": 8,
        "max": 12
      },
      {
        "stat": "Résistance feu",
        "min": 8,
        "max": 12
      },
      {
        "stat": "Résistance air (%)",
        "min": 8,
        "max": 12
      },
      {
        "stat": "Résistance feu (%)",
        "min": 8,
        "max": 12
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 161,
    "name": "Blopronne Royale",
    "imageUrl": "html/img/blopronne_royale.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 164,
    "name": "Coiffe du Tynril",
    "imageUrl": "html/img/coiffe_du_tynril.png",
    "damages": [],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": -11,
        "max": -30
      },
      {
        "stat": "Agilité",
        "min": -11,
        "max": -30
      },
      {
        "stat": "Chance",
        "min": -11,
        "max": -30
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -30
      },
      {
        "stat": "Prospection",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 168,
    "name": "Capuche Souveraine du Roissingue",
    "imageUrl": "html/img/capuche_souveraine_du_roissingue.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Chance",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Agilité",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 172,
    "name": "Sulik",
    "imageUrl": "html/img/sulik.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Sagesse",
        "min": 41,
        "max": 50
      },
      {
        "stat": "Renvois de dommages",
        "min": 11,
        "max": 11
      },
      {
        "stat": "Chance",
        "min": 41,
        "max": 60
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 178,
    "name": "Ougalurette",
    "imageUrl": "html/img/ougalurette.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Sagesse",
        "min": 41,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 8,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 41,
        "max": 50
      },
      {
        "stat": "Prospection",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 8,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 180,
    "name": "Chapeau de Crocodaille Dandi",
    "imageUrl": "html/img/chapeau_de_crocodaille_dandi.png",
    "damages": [],
    "effects": [
      {
        "stat": "Force",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Chance",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Agilité",
        "min": -26,
        "max": -40
      },
      {
        "stat": "Intelligence",
        "min": -26,
        "max": -40
      },
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 185,
    "name": "Chapignon",
    "imageUrl": "html/img/chapignon.png",
    "damages": [],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 189,
    "name": "Casque Harnage",
    "imageUrl": "html/img/casque_harnage.png",
    "damages": [],
    "effects": [
      {
        "stat": "Chance",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Intelligence",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Chapeau",
    "level": 196,
    "name": "Le Kim",
    "imageUrl": "html/img/le_kim.png",
    "damages": [],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 7
      },
      {
        "stat": "Force",
        "min": 51,
        "max": 80
      },
      {
        "stat": "Vitalité",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 1,
    "name": "Petit Arc de Boisaille",
    "imageUrl": "html/img/petit_arc_de_boisaille.png",
    "damages": [
      "Dommages : 1 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Arc",
    "level": 1,
    "name": "Arc de l'initié",
    "imageUrl": "html/img/arc_de_linitie.png",
    "damages": [
      "Dommages : 1 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 2,
    "name": "Arc de Boisaille",
    "imageUrl": "html/img/arc_de_boisaille.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Arc",
    "level": 3,
    "name": "Grand Arc de Boisaille",
    "imageUrl": "html/img/grand_arc_de_boisaille.png",
    "damages": [
      "Dommages : 2 à 5 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Arc",
    "level": 4,
    "name": "Puissant Arc de Boisaille",
    "imageUrl": "html/img/puissant_arc_de_boisaille.png",
    "damages": [
      "Dommages : 3 à 5 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Arc",
    "level": 8,
    "name": "Arc Hade",
    "imageUrl": "html/img/arc_hade.png",
    "damages": [
      "Dommages : 3 à 5 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Arc",
    "level": 10,
    "name": "Arc de Mulic Bere",
    "imageUrl": "html/img/arc_de_mulic_bere.png",
    "damages": [
      "Dommages : 31 à 50 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": -250,
        "max": -250
      }
    ]
  },
  {
    "type": "Arc",
    "level": 10,
    "name": "Arc de Mech Riorraw",
    "imageUrl": "html/img/arc_de_mech_riorraw.png",
    "damages": [
      "Dommages : 31 à 50 (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": -250,
        "max": -250
      }
    ]
  },
  {
    "type": "Arc",
    "level": 11,
    "name": "Arc Sifflant",
    "imageUrl": "html/img/arc_sifflant.png",
    "damages": [
      "Dommages : 3 à 5 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 14,
    "name": "Petit Arc Déroutant",
    "imageUrl": "html/img/petit_arc_deroutant.png",
    "damages": [
      "Dommages : 3 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Arc",
    "level": 15,
    "name": "Arc Holic",
    "imageUrl": "html/img/arc_holic.png",
    "damages": [
      "Dommages : 5 à 14 (eau)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Arc",
    "level": 15,
    "name": "Petit Arc Buse",
    "imageUrl": "html/img/petit_arc_buse.png",
    "damages": [
      "Dommages : 4 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Chance",
        "min": -5,
        "max": -5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 16,
    "name": "Arc Déroutant",
    "imageUrl": "html/img/arc_deroutant.png",
    "damages": [
      "Dommages : 3 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Arc",
    "level": 18,
    "name": "Arc Buse",
    "imageUrl": "html/img/arc_buse.png",
    "damages": [
      "Dommages : 5 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 12,
        "max": 12
      },
      {
        "stat": "Agilité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": -5,
        "max": -5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 18,
    "name": "Grand Arc Déroutant",
    "imageUrl": "html/img/grand_arc_deroutant.png",
    "damages": [
      "Dommages : 3 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 7,
        "max": 7
      }
    ]
  },
  {
    "type": "Arc",
    "level": 18,
    "name": "Petit Arc Ecologique",
    "imageUrl": "html/img/petit_arc_ecologique.png",
    "damages": [
      "Dommages : 4 à 6 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": -5,
        "max": -5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 19,
    "name": "Puissant Arc Déroutant",
    "imageUrl": "html/img/puissant_arc_deroutant.png",
    "damages": [
      "Dommages : 3 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 20,
    "name": "Arc du Bwork Archer",
    "imageUrl": "html/img/arc_du_bwork_archer.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": -2,
        "max": -2
      }
    ]
  },
  {
    "type": "Arc",
    "level": 21,
    "name": "Grand Arc Buse",
    "imageUrl": "html/img/grand_arc_buse.png",
    "damages": [
      "Dommages : 6 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 14,
        "max": 14
      },
      {
        "stat": "Agilité",
        "min": 12,
        "max": 12
      },
      {
        "stat": "Chance",
        "min": -5,
        "max": -5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 22,
    "name": "Arc Hancihaile",
    "imageUrl": "html/img/arc_hancihaile.png",
    "damages": [
      "Dommages : 2 à 6 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Arc",
    "level": 23,
    "name": "Arc Ecologique",
    "imageUrl": "html/img/arc_ecologique.png",
    "damages": [
      "Dommages : 5 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": -7,
        "max": -7
      }
    ]
  },
  {
    "type": "Arc",
    "level": 24,
    "name": "Puissant Arc Buse",
    "imageUrl": "html/img/puissant_arc_buse.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 16
      },
      {
        "stat": "Agilité",
        "min": 14,
        "max": 14
      },
      {
        "stat": "Chance",
        "min": -5,
        "max": -5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 28,
    "name": "Nomoon",
    "imageUrl": "html/img/nomoon.png",
    "damages": [
      "Dommages : 4 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 28,
    "name": "Arc en Racine d'Abraknyde",
    "imageUrl": "html/img/arc_en_racine_dabraknyde.png",
    "damages": [
      "Dommages : 3 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 15,
        "max": 15
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": -66,
        "max": -66
      }
    ]
  },
  {
    "type": "Arc",
    "level": 28,
    "name": "Grand Arc Ecologique",
    "imageUrl": "html/img/grand_arc_ecologique.png",
    "damages": [
      "Dommages : 7 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": -9,
        "max": -9
      }
    ]
  },
  {
    "type": "Arc",
    "level": 29,
    "name": "Petit Arc en Corne de Bouftou",
    "imageUrl": "html/img/petit_arc_en_corne_de_bouftou.png",
    "damages": [
      "Dommages : 7 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 30,
    "name": "Arc du Xueluom",
    "imageUrl": "html/img/arc_du_xueluom.png",
    "damages": [
      "Dommages : 1 à 30 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 30,
    "name": "Arc de Triomphe",
    "imageUrl": "html/img/arc_de_triomphe.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": -4,
        "max": -4
      },
      {
        "stat": "Force",
        "min": -4,
        "max": -4
      }
    ]
  },
  {
    "type": "Arc",
    "level": 30,
    "name": "Arc Plass'Tik'",
    "imageUrl": "html/img/arc_plasstik.png",
    "damages": [
      "Dommages : 5 à 12 (air)"
    ],
    "effects": []
  },
  {
    "type": "Arc",
    "level": 30,
    "name": "Arc de Jeanne",
    "imageUrl": "html/img/arc_de_jeanne.png",
    "damages": [
      "Dommages : 2 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Est une arme de chasse",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Arc",
    "level": 32,
    "name": "Arc en Corne de Bouftou",
    "imageUrl": "html/img/arc_en_corne_de_bouftou.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 19,
        "max": 28
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 33,
    "name": "Célèbre Arc Ecologique",
    "imageUrl": "html/img/celebre_arc_ecologique.png",
    "damages": [
      "Dommages : 8 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 26
      },
      {
        "stat": "Agilité",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 33,
    "name": "La Corde de Yamato",
    "imageUrl": "html/img/la_corde_de_yamato.png",
    "damages": [
      "Dommages : 1 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": -14,
        "max": -14
      }
    ]
  },
  {
    "type": "Arc",
    "level": 35,
    "name": "Arc Lourd en Corne de Bouftou",
    "imageUrl": "html/img/arc_lourd_en_corne_de_bouftou.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 35,
    "name": "Arc dit Kéha, version soldée",
    "imageUrl": "html/img/arc_dit_keha,_version_soldee.png",
    "damages": [
      "Dommages : 3 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -15
      }
    ]
  },
  {
    "type": "Arc",
    "level": 36,
    "name": "Corde d'Ivan Nowé",
    "imageUrl": "html/img/corde_divan_nowe.png",
    "damages": [
      "Dommages : 4 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 38,
    "name": "Arc de Cristal Opaque",
    "imageUrl": "html/img/arc_de_cristal_opaque.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": -20,
        "max": -20
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Arc",
    "level": 38,
    "name": "Arc Royal en Corne de Bouftou",
    "imageUrl": "html/img/arc_royal_en_corne_de_bouftou.png",
    "damages": [
      "Dommages : 8 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 39,
    "name": "Arc dit Kéha, version standard",
    "imageUrl": "html/img/arc_dit_keha,_version_standard.png",
    "damages": [
      "Dommages : 3 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 42
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 22
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 22
      },
      {
        "stat": "Sagesse",
        "min": -2,
        "max": -16
      }
    ]
  },
  {
    "type": "Arc",
    "level": 39,
    "name": "Abrarc",
    "imageUrl": "html/img/abrarc.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Arc",
    "level": 40,
    "name": "Arc Hord'Eon'",
    "imageUrl": "html/img/arc_hordeon.png",
    "damages": [
      "Dommages : 8 à 15 (feu)"
    ],
    "effects": []
  },
  {
    "type": "Arc",
    "level": 40,
    "name": "Arc Hidsad",
    "imageUrl": "html/img/arc_hidsad.png",
    "damages": [
      "Dommages : 12 à 42 (air)",
      "PV rendus : 12 à 42"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": -100,
        "max": -100
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -40
      }
    ]
  },
  {
    "type": "Arc",
    "level": 41,
    "name": "Arc à Poulie Sciée",
    "imageUrl": "html/img/arc_a_poulie_sciee.png",
    "damages": [
      "Dommages : 9 à 18 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Arc",
    "level": 43,
    "name": "Arc dit Kéha, version spéciale",
    "imageUrl": "html/img/arc_dit_keha,_version_speciale.png",
    "damages": [
      "Dommages : 3 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 45
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": -3,
        "max": -17
      }
    ]
  },
  {
    "type": "Arc",
    "level": 44,
    "name": "Arc de Cristal",
    "imageUrl": "html/img/arc_de_cristal.png",
    "damages": [
      "Dommages : 9 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": -25,
        "max": -25
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Arc",
    "level": 46,
    "name": "Arc des Rivages",
    "imageUrl": "html/img/arc_des_rivages.png",
    "damages": [
      "Dommages : 1 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 30
      }
    ]
  },
  {
    "type": "Arc",
    "level": 47,
    "name": "Arc dit Kéha, nouvelle version",
    "imageUrl": "html/img/arc_dit_keha,_nouvelle_version.png",
    "damages": [
      "Dommages : 4 à 19 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": -3,
        "max": -19
      }
    ]
  },
  {
    "type": "Arc",
    "level": 50,
    "name": "Arc de Cristal Translucide",
    "imageUrl": "html/img/arc_de_cristal_translucide.png",
    "damages": [
      "Dommages : 10 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": -27,
        "max": -27
      },
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance neutre",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Arc",
    "level": 50,
    "name": "L'Arc à Hick",
    "imageUrl": "html/img/larc_a_hick.png",
    "damages": [
      "Dommages : 6 à 15 (feu)"
    ],
    "effects": [
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Sagesse",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 50,
    "name": "Arc de Boo",
    "imageUrl": "html/img/arc_de_boo.png",
    "damages": [
      "Dommages : 3 à 10 (eau)",
      "Dommages : 3 à 10 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": -1,
        "max": -25
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -25
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -25
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -25
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 25
      }
    ]
  },
  {
    "type": "Arc",
    "level": 50,
    "name": "Arc Tar'Huss'",
    "imageUrl": "html/img/arc_tarhuss.png",
    "damages": [
      "Dommages : 8 à 21 (eau)"
    ],
    "effects": []
  },
  {
    "type": "Arc",
    "level": 54,
    "name": "Petit Arc du Roi des Borins",
    "imageUrl": "html/img/petit_arc_du_roi_des_borins.png",
    "damages": [
      "Dommages : 11 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": -10,
        "max": -10
      },
      {
        "stat": "Sagesse",
        "min": -5,
        "max": -5
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 3
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 3
      }
    ]
  },
  {
    "type": "Arc",
    "level": 56,
    "name": "Arc de Cristal Pur",
    "imageUrl": "html/img/arc_de_cristal_pur.png",
    "damages": [
      "Dommages : 11 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance neutre",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Arc",
    "level": 56,
    "name": "Arc de Kuri",
    "imageUrl": "html/img/arc_de_kuri.png",
    "damages": [
      "Dommages : 1 à 30 (feu)",
      "PV rendus : 1 à 10"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Arc",
    "level": 57,
    "name": "Le Tronknydum",
    "imageUrl": "html/img/le_tronknydum.png",
    "damages": [
      "Vole 2 à 4 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 4
      }
    ]
  },
  {
    "type": "Arc",
    "level": 60,
    "name": "Arc du Roi des Borins",
    "imageUrl": "html/img/arc_du_roi_des_borins.png",
    "damages": [
      "Dommages : 12 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Arc",
    "level": 60,
    "name": "Xaveur",
    "imageUrl": "html/img/xaveur.png",
    "damages": [
      "Dommages : 16 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 60,
    "name": "Arc Heub'Huz'",
    "imageUrl": "html/img/arc_heubhuz.png",
    "damages": [
      "Dommages : 13 à 20 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Arc",
    "level": 61,
    "name": "Arc du Koalak",
    "imageUrl": "html/img/arc_du_koalak.png",
    "damages": [
      "Dommages : 6 à 15 (neutre)",
      "Vole 4 à 5 PV (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Arc",
    "level": 66,
    "name": "Elégant Arc du Roi des Borins",
    "imageUrl": "html/img/elegant_arc_du_roi_des_borins.png",
    "damages": [
      "Dommages : 13 à 23 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Arc",
    "level": 70,
    "name": "Arc du Pêcheur",
    "imageUrl": "html/img/arc_du_pecheur.png",
    "damages": [
      "Dommages : 13 à 22 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      }
    ]
  },
  {
    "type": "Arc",
    "level": 70,
    "name": "Arc Ko'Neun'",
    "imageUrl": "html/img/arc_koneun.png",
    "damages": [
      "Dommages : 1 à 4 (air)",
      "Dommages : 1 à 4 (eau)",
      "Dommages : 1 à 4 (feu)",
      "Dommages : 1 à 4 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Arc",
    "level": 72,
    "name": "Surpuissant Arc du Roi des Borins",
    "imageUrl": "html/img/surpuissant_arc_du_roi_des_borins.png",
    "damages": [
      "Dommages : 14 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 79,
    "name": "Le Kikoularc",
    "imageUrl": "html/img/le_kikoularc.png",
    "damages": [
      "Dommages : 7 à 12 (feu)",
      "Dommages : 7 à 12 (eau)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 80,
    "name": "Arc Boutant",
    "imageUrl": "html/img/arc_boutant.png",
    "damages": [
      "Dommages : 20 à 29 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 81,
    "name": "Geish'Arc",
    "imageUrl": "html/img/geisharc.png",
    "damages": [
      "Dommages : 5 à 12 (neutre)",
      "Dommages : 5 à 12 (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      }
    ]
  },
  {
    "type": "Arc",
    "level": 82,
    "name": "Arc Ange",
    "imageUrl": "html/img/arc_ange.png",
    "damages": [
      "Dommages : 17 à 31 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 87,
    "name": "Arc Chiduc",
    "imageUrl": "html/img/arc_chiduc.png",
    "damages": [
      "Dommages : 17 à 31 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 90,
    "name": "Arc du Sram Archer",
    "imageUrl": "html/img/arc_du_sram_archer.png",
    "damages": [
      "Dommages : 16 à 23 (neutre)",
      "Vole 2 à 3 PV (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Arc",
    "level": 96,
    "name": "Arc Anum",
    "imageUrl": "html/img/arc_anum.png",
    "damages": [
      "Dommages : 6 à 15 (feu)",
      "Dommages : 6 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 100
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 250
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Arc",
    "level": 107,
    "name": "Arc Assin",
    "imageUrl": "html/img/arc_assin.png",
    "damages": [
      "Dommages : 6 à 13 (feu)",
      "Dommages : 6 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 120,
    "name": "Arc Chitecte",
    "imageUrl": "html/img/arc_chitecte.png",
    "damages": [
      "Dommages : 19 à 33 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 9,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 120,
    "name": "Arc du Chafer Archer",
    "imageUrl": "html/img/arc_du_chafer_archer.png",
    "damages": [
      "Dommages : 7 à 14 (air)",
      "Dommages : 7 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Arc",
    "level": 120,
    "name": "Arc Hanne",
    "imageUrl": "html/img/arc_hanne.png",
    "damages": [
      "Dommages : 16 à 25 (neutre)",
      "Vole 2 à 3 PV (feu)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 121,
    "name": "Arc Rainier",
    "imageUrl": "html/img/arc_rainier.png",
    "damages": [
      "Dommages : 2 à 21 (neutre)",
      "Dommages : 2 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 90
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Arc",
    "level": 122,
    "name": "Arc du Dragoeuf",
    "imageUrl": "html/img/arc_du_dragoeuf.png",
    "damages": [
      "Dommages : 18 à 33 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 122,
    "name": "Kask'Arc Go",
    "imageUrl": "html/img/kaskarc_go.png",
    "damages": [
      "Dommages : 14 à 30 (neutre)",
      "Vole 2 à 3 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 124,
    "name": "Jakchir Arc",
    "imageUrl": "html/img/jakchir_arc.png",
    "damages": [
      "Vole 5 à 6 PV (eau)",
      "Vole de 1 à 5000 kamas"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      }
    ]
  },
  {
    "type": "Arc",
    "level": 124,
    "name": "Arc Huledela",
    "imageUrl": "html/img/arc_huledela.png",
    "damages": [
      "Dommages : 16 à 25 (neutre)",
      "Vole 3 à 4 PV (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Arc",
    "level": 129,
    "name": "Arc Chtelion",
    "imageUrl": "html/img/arc_chtelion.png",
    "damages": [
      "Dommages : 13 à 27 (neutre)",
      "Dommages : 5 à 7 (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 8
      }
    ]
  },
  {
    "type": "Arc",
    "level": 130,
    "name": "Arc Lavoine",
    "imageUrl": "html/img/arc_lavoine.png",
    "damages": [
      "Vole 6 à 20 PV (eau)",
      "Vole 6 à 20 PV (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Arc",
    "level": 143,
    "name": "Arc Hisedaisange",
    "imageUrl": "html/img/arc_hisedaisange.png",
    "damages": [
      "Dommages : 6 à 13 (neutre)",
      "Dommages : 6 à 13 (feu)",
      "Dommages : 6 à 13 (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 151,
    "name": "Arc à Chon",
    "imageUrl": "html/img/arc_a_chon.png",
    "damages": [
      "Dommages : 9 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Arc",
    "level": 185,
    "name": "Arc Oleptik",
    "imageUrl": "html/img/arc_oleptik.png",
    "damages": [
      "Dommages : 6 à 19 (air)",
      "Dommages : 6 à 19 (feu)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Arc",
    "level": 187,
    "name": "Arc à Lamelles",
    "imageUrl": "html/img/arc_a_lamelles.png",
    "damages": [
      "Dommages : 10 à 21 (terre)",
      "Dommages : 10 à 21 (feu)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 1,
    "name": "Baguette de l'Initié",
    "imageUrl": "html/img/baguette_de_linitie.png",
    "damages": [
      "Dommages : 1 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 2,
    "name": "Baguette de Boisaille",
    "imageUrl": "html/img/baguette_de_boisaille.png",
    "damages": [
      "Dommages : 2 à 6 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 4,
    "name": "Grande Baguette de Boisaille",
    "imageUrl": "html/img/grande_baguette_de_boisaille.png",
    "damages": [
      "Dommages : 3 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 5,
    "name": "Puissante Baguette de Boisaille",
    "imageUrl": "html/img/puissante_baguette_de_boisaille.png",
    "damages": [
      "Dommages : 4 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 11,
    "name": "Demi-Baguette",
    "imageUrl": "html/img/demi-baguette.png",
    "damages": [
      "Dommages : 2 à 6 (eau)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 13,
    "name": "Baguette de Glace",
    "imageUrl": "html/img/baguette_de_glace.png",
    "damages": [
      "Dommages : 12 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 13,
    "name": "Petite Baguette de Glace",
    "imageUrl": "html/img/petite_baguette_de_glace.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 14,
    "name": "Grande Baguette de Glace",
    "imageUrl": "html/img/grande_baguette_de_glace.png",
    "damages": [
      "Dommages : 13 à 17 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 15,
    "name": "Petite Baguette Heure",
    "imageUrl": "html/img/petite_baguette_heure.png",
    "damages": [
      "Dommages : 6 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Force",
        "min": 7,
        "max": 7
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 15,
    "name": "Puissante Baguette de Glace",
    "imageUrl": "html/img/puissante_baguette_de_glace.png",
    "damages": [
      "Dommages : 14 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 20,
    "name": "Petite Baguette de Sagesse",
    "imageUrl": "html/img/petite_baguette_de_sagesse.png",
    "damages": [
      "Dommages : 10 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Force",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 20,
    "name": "Petite Baguette d'Intelligence",
    "imageUrl": "html/img/petite_baguette_dintelligence.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 20,
    "name": "Baguette de Liriel",
    "imageUrl": "html/img/baguette_de_liriel.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Est une arme de chasse",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 20,
    "name": "Baguette de Feu Follesque",
    "imageUrl": "html/img/baguette_de_feu_follesque.png",
    "damages": [
      "Dommages : 5 à 8 (feu)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": -10,
        "max": -10
      },
      {
        "stat": "Chance",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 20,
    "name": "Baguette Heure",
    "imageUrl": "html/img/baguette_heure.png",
    "damages": [
      "Dommages : 6 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 8,
        "max": 8
      },
      {
        "stat": "Force",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 23,
    "name": "Baguette de Sagesse",
    "imageUrl": "html/img/baguette_de_sagesse.png",
    "damages": [
      "Dommages : 12 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 12,
        "max": 12
      },
      {
        "stat": "Force",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 24,
    "name": "Baguette d'Intelligence",
    "imageUrl": "html/img/baguette_dintelligence.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 25,
    "name": "Baguette du Tofu",
    "imageUrl": "html/img/baguette_du_tofu.png",
    "damages": [
      "Vole 3 à 4 PV (air)",
      "Vole 3 à 4 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Est une arme de chasse",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 25,
    "name": "Grande Baguette Heure",
    "imageUrl": "html/img/grande_baguette_heure.png",
    "damages": [
      "Dommages : 6 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 9,
        "max": 9
      },
      {
        "stat": "Intelligence",
        "min": 9,
        "max": 9
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 25,
    "name": "Grande Baguette de Sagesse",
    "imageUrl": "html/img/grande_baguette_de_sagesse.png",
    "damages": [
      "Dommages : 14 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 14,
        "max": 14
      },
      {
        "stat": "Force",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 27,
    "name": "Baguette Rangleuse",
    "imageUrl": "html/img/baguette_rangleuse.png",
    "damages": [
      "Dommages : 1 à 7 (feu)"
    ],
    "effects": [
      {
        "stat": "Soins",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 27,
    "name": "Puissante Baguette de Sagesse",
    "imageUrl": "html/img/puissante_baguette_de_sagesse.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 16
      },
      {
        "stat": "Force",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 27,
    "name": "Grande Baguette d'Intelligence",
    "imageUrl": "html/img/grande_baguette_dintelligence.png",
    "damages": [
      "Dommages : 10 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 29,
    "name": "Puissante Baguette d'Intelligence",
    "imageUrl": "html/img/puissante_baguette_dintelligence.png",
    "damages": [
      "Dommages : 12 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 30,
    "name": "Petite Baguette à Pans",
    "imageUrl": "html/img/petite_baguette_a_pans.png",
    "damages": [
      "Dommages : 7 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 30,
    "name": "Baguette Hoh'",
    "imageUrl": "html/img/baguette_hoh.png",
    "damages": [
      "Dommages : 5 à 12 (feu)"
    ],
    "effects": []
  },
  {
    "type": "Baguette",
    "level": 30,
    "name": "Terrifiante Baguette Heure",
    "imageUrl": "html/img/terrifiante_baguette_heure.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Force",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 33,
    "name": "Baguette en Racine d'Abraknyde",
    "imageUrl": "html/img/baguette_en_racine_dabraknyde.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 35,
    "name": "Baguette à Pans",
    "imageUrl": "html/img/baguette_a_pans.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 35,
    "name": "Daguette",
    "imageUrl": "html/img/daguette.png",
    "damages": [
      "Dommages : 6 à 15 (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Force",
        "min": -26,
        "max": -30
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 36,
    "name": "Petite Baguette d'Eglise",
    "imageUrl": "html/img/petite_baguette_deglise.png",
    "damages": [
      "Dommages : 5 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 40,
    "name": "Baguette Stror'Di'Ner'",
    "imageUrl": "html/img/baguette_strordiner.png",
    "damages": [
      "Dommages : 7 à 16 (eau)"
    ],
    "effects": []
  },
  {
    "type": "Baguette",
    "level": 40,
    "name": "Baguette Larvesque",
    "imageUrl": "html/img/baguette_larvesque.png",
    "damages": [
      "PV rendus : 8 à 12"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 40,
    "name": "Discrète Baguette d'Houvette",
    "imageUrl": "html/img/discrete_baguette_dhouvette.png",
    "damages": [
      "Dommages : 5 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 18,
        "max": 18
      },
      {
        "stat": "Intelligence",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -25,
        "max": -25
      },
      {
        "stat": "Chance",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 40,
    "name": "Grande Baguette à Pans",
    "imageUrl": "html/img/grande_baguette_a_pans.png",
    "damages": [
      "Dommages : 9 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 41,
    "name": "Baguette d'Eglise",
    "imageUrl": "html/img/baguette_deglise.png",
    "damages": [
      "Dommages : 5 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 43,
    "name": "Baguette Cetera",
    "imageUrl": "html/img/baguette_cetera.png",
    "damages": [
      "Dommages : 8 à 17 (neutre)"
    ],
    "effects": [
      {
        "stat": "Soins",
        "min": 2,
        "max": 4
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 43,
    "name": "Baguette Sylvien",
    "imageUrl": "html/img/baguette_sylvien.png",
    "damages": [
      "Dommages : 8 à 14 (air)"
    ],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -20
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 45,
    "name": "Baguette d'Houvette",
    "imageUrl": "html/img/baguette_dhouvette.png",
    "damages": [
      "Dommages : 5 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Vitalité",
        "min": -29,
        "max": -29
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 45,
    "name": "Indispensable Baguette à Pans",
    "imageUrl": "html/img/indispensable_baguette_a_pans.png",
    "damages": [
      "Dommages : 10 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 46,
    "name": "Lourde Baguette d'Eglise",
    "imageUrl": "html/img/lourde_baguette_deglise.png",
    "damages": [
      "Dommages : 5 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 48,
    "name": "L'Hyldegarde",
    "imageUrl": "html/img/lhyldegarde.png",
    "damages": [
      "Dommages : 11 à 23 (eau)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -60
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -60
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 50,
    "name": "Grande Baguette d'Houvette",
    "imageUrl": "html/img/grande_baguette_dhouvette.png",
    "damages": [
      "Dommages : 5 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 22,
        "max": 22
      },
      {
        "stat": "Chance",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -33,
        "max": -33
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 50,
    "name": "Baguette Han'Dar'",
    "imageUrl": "html/img/baguette_handar.png",
    "damages": [
      "Dommages : 8 à 19 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Baguette",
    "level": 50,
    "name": "Baguette Ni'Ninnin",
    "imageUrl": "html/img/baguette_nininnin.png",
    "damages": [
      "Vole 1 à 10 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": -61,
        "max": -90
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 50,
    "name": "Baguette Deuh-Pain",
    "imageUrl": "html/img/baguette_deuh-pain.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 52,
    "name": "Baguette des Cieux",
    "imageUrl": "html/img/baguette_des_cieux.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 52,
    "name": "Imposante Baguette d'Eglise",
    "imageUrl": "html/img/imposante_baguette_deglise.png",
    "damages": [
      "Dommages : 5 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 55,
    "name": "Traumatisante Baguette d'Houvette",
    "imageUrl": "html/img/traumatisante_baguette_dhouvette.png",
    "damages": [
      "Dommages : 5 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 23,
        "max": 23
      },
      {
        "stat": "Chance",
        "min": 12,
        "max": 12
      },
      {
        "stat": "Vitalité",
        "min": -40,
        "max": -40
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 56,
    "name": "Petite Baguette Meneuse",
    "imageUrl": "html/img/petite_baguette_meneuse.png",
    "damages": [
      "Dommages : 9 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 41,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -20
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 59,
    "name": "Baguette du Scarabosse Doré",
    "imageUrl": "html/img/baguette_du_scarabosse_dore.png",
    "damages": [
      "PV rendus : 11 à 30"
    ],
    "effects": [
      {
        "stat": "Soins",
        "min": 1,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 20
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 59,
    "name": "Le Tison Fûté",
    "imageUrl": "html/img/le_tison_fute.png",
    "damages": [
      "Dommages : 9 à 16 (feu)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Chance",
        "min": -6,
        "max": -25
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 60,
    "name": "Baguette Ta'Lay'",
    "imageUrl": "html/img/baguette_talay.png",
    "damages": [
      "Dommages : 8 à 21 (air)"
    ],
    "effects": []
  },
  {
    "type": "Baguette",
    "level": 61,
    "name": "Baguette Meneuse",
    "imageUrl": "html/img/baguette_meneuse.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 46,
        "max": 55
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -20
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 63,
    "name": "Balgourde des Clairettes",
    "imageUrl": "html/img/balgourde_des_clairettes.png",
    "damages": [
      "Dommages : 8 à 20 (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 63,
    "name": "Baguette Hylique",
    "imageUrl": "html/img/baguette_hylique.png",
    "damages": [
      "Dommages : 5 à 8 (neutre)",
      "Dommages : 5 à 8 (feu)"
    ],
    "effects": [
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 65,
    "name": "Pieu Vampirique",
    "imageUrl": "html/img/pieu_vampirique.png",
    "damages": [
      "Vole 6 à 15 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 66,
    "name": "Grande Baguette Meneuse",
    "imageUrl": "html/img/grande_baguette_meneuse.png",
    "damages": [
      "Dommages : 12 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 51,
        "max": 60
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 3
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 3
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 3
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -20
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 67,
    "name": "Baguette en Racine d'Abraknyde Sombre",
    "imageUrl": "html/img/baguette_en_racine_dabraknyde_sombre.png",
    "damages": [
      "Dommages : 12 à 16 (feu)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": -21,
        "max": -40
      },
      {
        "stat": "Chance",
        "min": -21,
        "max": -40
      },
      {
        "stat": "Agilité",
        "min": -21,
        "max": -40
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 70,
    "name": "Baguette Euh'Laille'Fe'",
    "imageUrl": "html/img/baguette_euhlaillefe.png",
    "damages": [
      "Dommages : 3 à 7 (air)",
      "Dommages : 3 à 7 (eau)",
      "Dommages : 3 à 7 (feu)",
      "Dommages : 3 à 7 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Baguette",
    "level": 71,
    "name": "Excellente Baguette Meneuse",
    "imageUrl": "html/img/excellente_baguette_meneuse.png",
    "damages": [
      "Dommages : 13 à 23 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 56,
        "max": 65
      },
      {
        "stat": "Force",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -20
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 72,
    "name": "Bagdette Café",
    "imageUrl": "html/img/bagdette_cafe.png",
    "damages": [
      "Dommages : 5 à 8 (eau)",
      "Dommages : 5 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 75,
    "name": "Baguette Helles",
    "imageUrl": "html/img/baguette_helles.png",
    "damages": [
      "Dommages : 11 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Prospection",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 79,
    "name": "La Bidjiz",
    "imageUrl": "html/img/la_bidjiz.png",
    "damages": [
      "Dommages : 13 à 22 (neutre)"
    ],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 80,
    "name": "Baguette Affeulante",
    "imageUrl": "html/img/baguette_affeulante.png",
    "damages": [
      "Dommages : 11 à 14 (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Force",
        "min": -40,
        "max": -40
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 80,
    "name": "Baguette de Kouartz",
    "imageUrl": "html/img/baguette_de_kouartz.png",
    "damages": [
      "Dommages : 13 à 27 (neutre)",
      "PV rendus : 9 à 23"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 81,
    "name": "Baguette Hincelle",
    "imageUrl": "html/img/baguette_hincelle.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)",
      "Vole 3 à 4 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 85,
    "name": "Baguette Molle",
    "imageUrl": "html/img/baguette_molle.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": -500,
        "max": -500
      },
      {
        "stat": "Portée",
        "min": -1,
        "max": -1
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 85,
    "name": "La Migraine",
    "imageUrl": "html/img/la_migraine.png",
    "damages": [
      "Dommages : 11 à 19 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 300
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 90,
    "name": "Baguette Irréelle",
    "imageUrl": "html/img/baguette_irreelle.png",
    "damages": [
      "Dommages : 1 à 40 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 95,
    "name": "Baguette Velue",
    "imageUrl": "html/img/baguette_velue.png",
    "damages": [
      "Dommages : 16 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 97,
    "name": "Branche de l'Abrakleur sombre",
    "imageUrl": "html/img/branche_de_labrakleur_sombre.png",
    "damages": [
      "Vole 1 à 6 PV (terre)",
      "Dommages : 6 à 30 (feu)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 46,
        "max": 70
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 105,
    "name": "Baguette Rhon",
    "imageUrl": "html/img/baguette_rhon.png",
    "damages": [
      "Dommages : 6 à 15 (neutre)",
      "Vole 1 à 10 PV (feu)",
      "PV rendus : 1 à 100"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 130
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 105,
    "name": "Baguette Nah",
    "imageUrl": "html/img/baguette_nah.png",
    "damages": [
      "Dommages : 9 à 13 (neutre)",
      "Vole 4 à 5 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance neutre",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 105,
    "name": "La Baguette des Limbes",
    "imageUrl": "html/img/la_baguette_des_limbes.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -40
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 112,
    "name": "Baguette Houffe-Craitien",
    "imageUrl": "html/img/baguette_houffe-craitien.png",
    "damages": [
      "Dommages : 1 à 5 (neutre)",
      "Vole 2 à 3 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 250
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 120,
    "name": "Amrothiline",
    "imageUrl": "html/img/amrothiline.png",
    "damages": [
      "Dommages : 11 à 23 (neutre)",
      "Vole 5 à 9 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 120,
    "name": "Baguette d'Elya Wood",
    "imageUrl": "html/img/baguette_delya_wood.png",
    "damages": [
      "Dommages : 7 à 11 (feu)",
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 124,
    "name": "Baguette du Dragoeuf",
    "imageUrl": "html/img/baguette_du_dragoeuf.png",
    "damages": [
      "Dommages : 16 à 22 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 126,
    "name": "Baguette Houalle",
    "imageUrl": "html/img/baguette_houalle.png",
    "damages": [
      "Dommages : 15 à 24 (neutre)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 127,
    "name": "Baguette Ourderie",
    "imageUrl": "html/img/baguette_ourderie.png",
    "damages": [
      "Dommages : 6 à 14 (neutre)",
      "Dommages : 6 à 14 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 6
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 6
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 128,
    "name": "Baguette Gyver",
    "imageUrl": "html/img/baguette_gyver.png",
    "damages": [
      "Dommages : 4 à 6 (feu)",
      "Dommages : 26 à 33 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 132,
    "name": "Branche de l'Abrakleur clair",
    "imageUrl": "html/img/branche_de_labrakleur_clair.png",
    "damages": [
      "Vole 4 à 6 PV (terre)",
      "Dommages : 7 à 16 (air)",
      "Dommages : 7 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 138,
    "name": "Baguette Iots",
    "imageUrl": "html/img/baguette_iots.png",
    "damages": [
      "Vole 1 à 2 PV (feu)",
      "Vole 1 à 2 PV (terre)",
      "Vole 1 à 2 PV (eau)",
      "Vole 1 à 2 PV (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 145,
    "name": "La Xyothine",
    "imageUrl": "html/img/la_xyothine.png",
    "damages": [
      "Dommages : 9 à 13 (feu)",
      "Dommages : 9 à 13 (neutre)",
      "Vole 4 à 5 PV (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 172,
    "name": "Baguette du Chêne Mou",
    "imageUrl": "html/img/baguette_du_chene_mou.png",
    "damages": [
      "Dommages : 1 à 25 (feu)",
      "Vole 1 à 15 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Soins",
        "min": 8,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 250
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 6,
        "max": 7
      },
      {
        "stat": "Faiblesse terre (%)",
        "min": 6,
        "max": 7
      }
    ]
  },
  {
    "type": "Baguette",
    "level": 184,
    "name": "Baguetterelle",
    "imageUrl": "html/img/baguetterelle.png",
    "damages": [
      "Dommages : 9 à 16 (neutre)",
      "Dommages : 9 à 16 (air)",
      "Vole 1 à 7 PV (feu)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 1,
    "name": "Bâton de l'initié",
    "imageUrl": "html/img/baton_de_linitie.png",
    "damages": [
      "Dommages : 1 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 2,
    "name": "Bâton de Boisaille",
    "imageUrl": "html/img/baton_de_boisaille.png",
    "damages": [
      "Dommages : 3 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 7,
    "name": "Grand Bâton de Boisaille",
    "imageUrl": "html/img/grand_baton_de_boisaille.png",
    "damages": [
      "Dommages : 5 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 9,
    "name": "Puissant Bâton de Boisaille",
    "imageUrl": "html/img/puissant_baton_de_boisaille.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 10,
    "name": "La Plantouze des Champs",
    "imageUrl": "html/img/la_plantouze_des_champs.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 6
      }
    ]
  },
  {
    "type": "Baton",
    "level": 12,
    "name": "Bâton de Bouftier",
    "imageUrl": "html/img/baton_de_bouftier.png",
    "damages": [
      "Dommages : 6 à 10 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 13,
    "name": "Petit Bâton Feuillu",
    "imageUrl": "html/img/petit_baton_feuillu.png",
    "damages": [
      "Dommages : 12 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 14,
    "name": "Bâton Kouyu",
    "imageUrl": "html/img/baton_kouyu.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 14,
    "name": "Bâton Feuillu",
    "imageUrl": "html/img/baton_feuillu.png",
    "damages": [
      "Dommages : 13 à 17 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 15,
    "name": "Puissant Bâton Feuillu",
    "imageUrl": "html/img/puissant_baton_feuillu.png",
    "damages": [
      "Dommages : 15 à 19 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 15,
    "name": "Grand Bâton Feuillu",
    "imageUrl": "html/img/grand_baton_feuillu.png",
    "damages": [
      "Dommages : 14 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 16,
    "name": "Bâton Spirituel",
    "imageUrl": "html/img/baton_spirituel.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Baton",
    "level": 20,
    "name": "Petit bâton de fausse magie",
    "imageUrl": "html/img/petit_baton_de_fausse_magie.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 20,
    "name": "La Canne Hête",
    "imageUrl": "html/img/la_canne_hete.png",
    "damages": [
      "Dommages : 6 à 13 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Baton",
    "level": 20,
    "name": "Bâton de l'Homme Ours",
    "imageUrl": "html/img/baton_de_lhomme_ours.png",
    "damages": [
      "Dommages : 8 à 12 (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 14
      }
    ]
  },
  {
    "type": "Baton",
    "level": 24,
    "name": "Petit Bâton Dakn",
    "imageUrl": "html/img/petit_baton_dakn.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 25,
    "name": "Bâton du Wa Wabbit",
    "imageUrl": "html/img/baton_du_wa_wabbit.png",
    "damages": [
      "Dommages : 11 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 100
      }
    ]
  },
  {
    "type": "Baton",
    "level": 25,
    "name": "Bâton de fausse magie",
    "imageUrl": "html/img/baton_de_fausse_magie.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 28,
    "name": "Petit Bâton-Boule de Voyante",
    "imageUrl": "html/img/petit_baton-boule_de_voyante.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Sagesse",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -25,
        "max": -25
      }
    ]
  },
  {
    "type": "Baton",
    "level": 29,
    "name": "La Lance à un \"110\"",
    "imageUrl": "html/img/la_lance_a_un_\" 110\".png",
    "damages": [
      "Dommages : 8 à 12 (eau)"
    ],
    "effects": [
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 29,
    "name": "Bâton Dakn",
    "imageUrl": "html/img/baton_dakn.png",
    "damages": [
      "Dommages : 13 à 17 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 28,
        "max": 28
      },
      {
        "stat": "Chance",
        "min": -12,
        "max": -12
      }
    ]
  },
  {
    "type": "Baton",
    "level": 29,
    "name": "Bâton Cornu",
    "imageUrl": "html/img/baton_cornu.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -10
      },
      {
        "stat": "Est une arme de chasse",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Baton",
    "level": 30,
    "name": "Grand bâton de fausse magie",
    "imageUrl": "html/img/grand_baton_de_fausse_magie.png",
    "damages": [
      "Dommages : 7 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 30,
    "name": "Bâton du Petit Tabi",
    "imageUrl": "html/img/baton_du_petit_tabi.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Baton",
    "level": 30,
    "name": "Bâton en Racine d'Abraknyde",
    "imageUrl": "html/img/baton_en_racine_dabraknyde.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 3
      },
      {
        "stat": "Chance",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 30,
    "name": "Bâton Bah'Pik'",
    "imageUrl": "html/img/baton_bahpik.png",
    "damages": [
      "Dommages : 7 à 15 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Baton",
    "level": 30,
    "name": "Bâton Carnivore",
    "imageUrl": "html/img/baton_carnivore.png",
    "damages": [
      "Vole 4 à 9 PV (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 30
      }
    ]
  },
  {
    "type": "Baton",
    "level": 30,
    "name": "Bâton d'Oubli",
    "imageUrl": "html/img/baton_doubli.png",
    "damages": [
      "Dommages : 6 à 15 (air)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Baton",
    "level": 32,
    "name": "Pailleton",
    "imageUrl": "html/img/pailleton.png",
    "damages": [
      "Dommages : 2 à 6 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Baton",
    "level": 32,
    "name": "Fourbasse-Ton",
    "imageUrl": "html/img/fourbasse-ton.png",
    "damages": [
      "Vole 2 à 3 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Faiblesse neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 32,
    "name": "Bâton du Grand Pa Wabbit",
    "imageUrl": "html/img/baton_du_grand_pa_wabbit.png",
    "damages": [
      "Dommages : 2 à 6 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Baton",
    "level": 33,
    "name": "Gros Bâton Dakn",
    "imageUrl": "html/img/gros_baton_dakn.png",
    "damages": [
      "Dommages : 15 à 19 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 33,
        "max": 33
      },
      {
        "stat": "Chance",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Baton",
    "level": 34,
    "name": "Bâton du Tabi",
    "imageUrl": "html/img/baton_du_tabi.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      }
    ]
  },
  {
    "type": "Baton",
    "level": 34,
    "name": "Bâton du Maître des Tabis",
    "imageUrl": "html/img/baton_du_maitre_des_tabis.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Baton",
    "level": 34,
    "name": "Abraknydi Vivitus",
    "imageUrl": "html/img/abraknydi_vivitus.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Force",
        "min": -30,
        "max": -30
      }
    ]
  },
  {
    "type": "Baton",
    "level": 35,
    "name": "Véritable bâton de fausse magie",
    "imageUrl": "html/img/veritable_baton_de_fausse_magie.png",
    "damages": [
      "Dommages : 8 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 35,
    "name": "Bâton-Boule de Voyante",
    "imageUrl": "html/img/baton-boule_de_voyante.png",
    "damages": [
      "Dommages : 9 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 13,
        "max": 13
      },
      {
        "stat": "Chance",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": -35,
        "max": -35
      }
    ]
  },
  {
    "type": "Baton",
    "level": 37,
    "name": "Enorme bâton Dakn",
    "imageUrl": "html/img/enorme_baton_dakn.png",
    "damages": [
      "Dommages : 17 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 37,
    "name": "La Chaplanne",
    "imageUrl": "html/img/la_chaplanne.png",
    "damages": [
      "Dommages : 8 à 12 (eau)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Baton",
    "level": 37,
    "name": "Bâton du Grand Tabi",
    "imageUrl": "html/img/baton_du_grand_tabi.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      }
    ]
  },
  {
    "type": "Baton",
    "level": 40,
    "name": "Bâton du Puissant Tabi",
    "imageUrl": "html/img/baton_du_puissant_tabi.png",
    "damages": [
      "Dommages : 9 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 45
      }
    ]
  },
  {
    "type": "Baton",
    "level": 40,
    "name": "Bâton de Dina, dit 'le Mythe'",
    "imageUrl": "html/img/baton_de_dina,_dit_le_mythe.png",
    "damages": [
      "Dommages : 6 à 10 (air)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 15,
        "max": 22
      },
      {
        "stat": "Résistance terre",
        "min": 5,
        "max": 9
      },
      {
        "stat": "Résistance neutre",
        "min": 5,
        "max": 9
      }
    ]
  },
  {
    "type": "Baton",
    "level": 40,
    "name": "Bâton Tont'Ata",
    "imageUrl": "html/img/baton_tontata.png",
    "damages": [
      "Dommages : 16 à 30 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": -11,
        "max": -20
      }
    ]
  },
  {
    "type": "Baton",
    "level": 40,
    "name": "Bâton Bouk'Tou'",
    "imageUrl": "html/img/baton_bouktou.png",
    "damages": [
      "Dommages : 11 à 18 (air)"
    ],
    "effects": []
  },
  {
    "type": "Baton",
    "level": 41,
    "name": "Simple Bâton des Rois",
    "imageUrl": "html/img/simple_baton_des_rois.png",
    "damages": [
      "Dommages : 7 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -60
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance eau",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance air",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance feu",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Baton",
    "level": 42,
    "name": "Grand Bâton-Boule de Voyante",
    "imageUrl": "html/img/grand_baton-boule_de_voyante.png",
    "damages": [
      "Dommages : 9 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 16
      },
      {
        "stat": "Chance",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": -45,
        "max": -45
      }
    ]
  },
  {
    "type": "Baton",
    "level": 42,
    "name": "Bâton Poupinateur",
    "imageUrl": "html/img/baton_poupinateur.png",
    "damages": [
      "Dommages : 9 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 43,
    "name": "Bâton Akwadala",
    "imageUrl": "html/img/baton_akwadala.png",
    "damages": [
      "Dommages : 5 à 13 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Baton",
    "level": 45,
    "name": "Abraton",
    "imageUrl": "html/img/abraton.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 46,
    "name": "Bâton du Shodanwa",
    "imageUrl": "html/img/baton_du_shodanwa.png",
    "damages": [
      "Dommages : 10 à 19 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Baton",
    "level": 46,
    "name": "Bâton des Rois",
    "imageUrl": "html/img/baton_des_rois.png",
    "damages": [
      "Dommages : 8 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": -1,
        "max": -60
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance neutre",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Baton",
    "level": 50,
    "name": "Omnicient bâton-boule de voyante",
    "imageUrl": "html/img/omnicient_baton-boule_de_voyante.png",
    "damages": [
      "Dommages : 10 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": -50,
        "max": -50
      }
    ]
  },
  {
    "type": "Baton",
    "level": 50,
    "name": "Bâton Boh'La'",
    "imageUrl": "html/img/baton_bohla.png",
    "damages": [
      "Dommages : 11 à 19 (feu)"
    ],
    "effects": []
  },
  {
    "type": "Baton",
    "level": 52,
    "name": "Grand Bâton des Rois",
    "imageUrl": "html/img/grand_baton_des_rois.png",
    "damages": [
      "Dommages : 9 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": -1,
        "max": -60
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance neutre",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Baton",
    "level": 54,
    "name": "Racine Sauvageonne",
    "imageUrl": "html/img/racine_sauvageonne.png",
    "damages": [
      "Dommages : 3 à 4 (neutre)",
      "Vole 1 à 2 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Baton",
    "level": 54,
    "name": "Bâton du Kanigrou",
    "imageUrl": "html/img/baton_du_kanigrou.png",
    "damages": [
      "Dommages : 11 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      }
    ]
  },
  {
    "type": "Baton",
    "level": 55,
    "name": "Hook",
    "imageUrl": "html/img/hook.png",
    "damages": [
      "Dommages : 9 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Baton",
    "level": 56,
    "name": "Bâton du Maître des Tofus",
    "imageUrl": "html/img/baton_du_maitre_des_tofus.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": -11,
        "max": -20
      }
    ]
  },
  {
    "type": "Baton",
    "level": 58,
    "name": "Bâton du Bwork Mage",
    "imageUrl": "html/img/baton_du_bwork_mage.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Prospection",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Force",
        "min": -20,
        "max": -20
      }
    ]
  },
  {
    "type": "Baton",
    "level": 59,
    "name": "Kryst O'Boul",
    "imageUrl": "html/img/kryst_oboul.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Vitalité",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Baton",
    "level": 60,
    "name": "Bâton du Wobot",
    "imageUrl": "html/img/baton_du_wobot.png",
    "damages": [
      "Dommages : 14 à 23 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Baton",
    "level": 60,
    "name": "Bâton Lav'Heur'",
    "imageUrl": "html/img/baton_lavheur.png",
    "damages": [
      "Dommages : 14 à 22 (eau)"
    ],
    "effects": []
  },
  {
    "type": "Baton",
    "level": 60,
    "name": "Excellent Bâton des Rois",
    "imageUrl": "html/img/excellent_baton_des_rois.png",
    "damages": [
      "Dommages : 10 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": -1,
        "max": -60
      },
      {
        "stat": "Intelligence",
        "min": 56,
        "max": 75
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance eau",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance air",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Résistance feu",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Baton",
    "level": 62,
    "name": "Bâton du Nidanwa",
    "imageUrl": "html/img/baton_du_nidanwa.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 67,
    "name": "God Rod",
    "imageUrl": "html/img/god_rod.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 40,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": -40,
        "max": -40
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 70,
    "name": "Bâton Lap'Louz'",
    "imageUrl": "html/img/baton_laplouz.png",
    "damages": [
      "Dommages : 4 à 7 (air)",
      "Dommages : 4 à 7 (eau)",
      "Dommages : 4 à 7 (feu)",
      "Dommages : 4 à 7 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Baton",
    "level": 75,
    "name": "Bâton du Koulosse",
    "imageUrl": "html/img/baton_du_koulosse.png",
    "damages": [
      "Vole 4 à 8 PV (air)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -100
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 150
      }
    ]
  },
  {
    "type": "Baton",
    "level": 80,
    "name": "Bâton du Sandanwa",
    "imageUrl": "html/img/baton_du_sandanwa.png",
    "damages": [
      "Dommages : 9 à 13 (air)",
      "Dommages : 9 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Initiative",
        "min": 200,
        "max": 200
      }
    ]
  },
  {
    "type": "Baton",
    "level": 80,
    "name": "Bâton de Farle",
    "imageUrl": "html/img/baton_de_farle.png",
    "damages": [
      "Dommages : 15 à 26 (neutre)",
      "Vole 2 à 3 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 31,
        "max": 40
      }
    ]
  },
  {
    "type": "Baton",
    "level": 80,
    "name": "Bâton de Shika",
    "imageUrl": "html/img/baton_de_shika.png",
    "damages": [
      "Dommages : 15 à 26 (feu)",
      "Vole 2 à 3 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Dommages (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 35
      }
    ]
  },
  {
    "type": "Baton",
    "level": 81,
    "name": "Bâton d'Aga Dou",
    "imageUrl": "html/img/baton_daga_dou.png",
    "damages": [
      "Dommages : 16 à 27 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 85,
    "name": "La Bastonneuze",
    "imageUrl": "html/img/la_bastonneuze.png",
    "damages": [
      "Dommages : 14 à 28 (neutre)"
    ],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Baton",
    "level": 85,
    "name": "Bâton du Maître des Bouftous",
    "imageUrl": "html/img/baton_du_maitre_des_bouftous.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 6
      },
      {
        "stat": "Créature invocables",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 86,
    "name": "Racine Horodon",
    "imageUrl": "html/img/racine_horodon.png",
    "damages": [
      "Dommages : 2 à 11 (neutre)",
      "Vole 2 à 3 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Soins",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Baton",
    "level": 86,
    "name": "Racine Histre",
    "imageUrl": "html/img/racine_histre.png",
    "damages": [
      "Dommages : 13 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 87,
    "name": "Abraton Sombre",
    "imageUrl": "html/img/abraton_sombre.png",
    "damages": [
      "Dommages : 15 à 29 (neutre)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Baton",
    "level": 88,
    "name": "Racine Huzohide",
    "imageUrl": "html/img/racine_huzohide.png",
    "damages": [
      "Dommages : 13 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 8
      }
    ]
  },
  {
    "type": "Baton",
    "level": 93,
    "name": "Bâton du Yondanwa",
    "imageUrl": "html/img/baton_du_yondanwa.png",
    "damages": [
      "Dommages : 18 à 27 (neutre)",
      "Vole 2 à 3 PV (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Baton",
    "level": 94,
    "name": "Bâton du Féca",
    "imageUrl": "html/img/baton_du_feca.png",
    "damages": [
      "Dommages : 21 à 37 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Résistance air (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Baton",
    "level": 98,
    "name": "Canne de Mamie Bonbon",
    "imageUrl": "html/img/canne_de_mamie_bonbon.png",
    "damages": [
      "Dommages : 1 à 40 (neutre)",
      "Vole 2 à 3 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 81,
        "max": 110
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Baton",
    "level": 103,
    "name": "Racine Hécure",
    "imageUrl": "html/img/racine_hecure.png",
    "damages": [
      "Dommages : 14 à 31 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Baton",
    "level": 103,
    "name": "Racine Hécouanone",
    "imageUrl": "html/img/racine_hecouanone.png",
    "damages": [
      "Dommages : 11 à 35 (neutre)",
      "PV rendus : 1 à 100"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 130
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 200
      }
    ]
  },
  {
    "type": "Baton",
    "level": 106,
    "name": "Racine Sémilla",
    "imageUrl": "html/img/racine_semilla.png",
    "damages": [
      "Dommages : 6 à 18 (neutre)",
      "Vole 3 à 5 PV (feu)",
      "Vole 3 à 5 PV (terre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      }
    ]
  },
  {
    "type": "Baton",
    "level": 107,
    "name": "Le Bâton Cloutay",
    "imageUrl": "html/img/le_baton_cloutay.png",
    "damages": [
      "Dommages : 9 à 13 (air)",
      "Dommages : 9 à 13 (feu)"
    ],
    "effects": [
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Baton",
    "level": 112,
    "name": "Bâton de Marie Aigue",
    "imageUrl": "html/img/baton_de_marie_aigue.png",
    "damages": [
      "Dommages : 16 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Baton",
    "level": 114,
    "name": "Bâton des Caraïbes",
    "imageUrl": "html/img/baton_des_caraibes.png",
    "damages": [
      "Vole 9 à 20 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Baton",
    "level": 119,
    "name": "Tige du Brouture",
    "imageUrl": "html/img/tige_du_brouture.png",
    "damages": [
      "Dommages : 7 à 13 (air)",
      "Dommages : 7 à 13 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 120,
    "name": "La Racine Hagogue",
    "imageUrl": "html/img/la_racine_hagogue.png",
    "damages": [
      "Dommages : 16 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 250
      }
    ]
  },
  {
    "type": "Baton",
    "level": 120,
    "name": "La Racine Cinati",
    "imageUrl": "html/img/la_racine_cinati.png",
    "damages": [
      "Dommages : 6 à 15 (terre)",
      "Dommages : 6 à 15 (feu)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 80
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Baton",
    "level": 120,
    "name": "Bâton de Sangroku",
    "imageUrl": "html/img/baton_de_sangroku.png",
    "damages": [
      "Dommages : 7 à 13 (air)",
      "Dommages : 10 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 124,
    "name": "Bâton du Dragoeuf",
    "imageUrl": "html/img/baton_du_dragoeuf.png",
    "damages": [
      "Dommages : 24 à 43 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Vitalité",
        "min": 81,
        "max": 130
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 129,
    "name": "Kelinobranche",
    "imageUrl": "html/img/kelinobranche.png",
    "damages": [
      "Dommages : 16 à 30 (neutre)",
      "Vole 3 à 6 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Baton",
    "level": 134,
    "name": "La Canne Bière",
    "imageUrl": "html/img/la_canne_biere.png",
    "damages": [
      "Dommages : 7 à 16 (neutre)",
      "Dommages : 7 à 16 (air)",
      "Vole 3 à 5 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Baton",
    "level": 138,
    "name": "Racine de Fécorce",
    "imageUrl": "html/img/racine_de_fecorce.png",
    "damages": [
      "Dommages : 9 à 16 (eau)",
      "Dommages : 9 à 16 (terre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Faiblesse air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Faiblesse terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Baton",
    "level": 143,
    "name": "Racine Cithi",
    "imageUrl": "html/img/racine_cithi.png",
    "damages": [
      "Dommages : 7 à 16 (neutre)",
      "Dommages : 7 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 20
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Baton",
    "level": 144,
    "name": "Racine de Floribonde",
    "imageUrl": "html/img/racine_de_floribonde.png",
    "damages": [
      "Vole 1 à 10 PV (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Agilité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Baton",
    "level": 151,
    "name": "Sceptre du Minotot",
    "imageUrl": "html/img/sceptre_du_minotot.png",
    "damages": [
      "Dommages : 13 à 27 (neutre)",
      "Vole 3 à 5 PV (eau)",
      "Vole 3 à 5 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 120
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Baton",
    "level": 158,
    "name": "Bâton du Maître Zoth",
    "imageUrl": "html/img/baton_du_maitre_zoth.png",
    "damages": [
      "Dommages : 21 à 40 (neutre)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Baton",
    "level": 176,
    "name": "Rod Gerse",
    "imageUrl": "html/img/rod_gerse.png",
    "damages": [
      "Dommages : 9 à 21 (feu)",
      "Dommages : 9 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Baton",
    "level": 186,
    "name": "Rhizome du Tynril",
    "imageUrl": "html/img/rhizome_du_tynril.png",
    "damages": [
      "Dommages : 13 à 21 (neutre)",
      "Dommages : 7 à 11 (terre)",
      "Vole 4 à 6 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Baton",
    "level": 191,
    "name": "Bâton Champmanique",
    "imageUrl": "html/img/baton_champmanique.png",
    "damages": [
      "Dommages : 18 à 27 (neutre)",
      "Vole 1 à 8 PV (terre)",
      "Vole 1 à 8 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Tailladeuse de Baguettes Magiques",
    "imageUrl": "html/img/tailladeuse_de_baguettes_magiques.png",
    "damages": [
      "Dommages : 1 (air)",
      "Dommages : 1 (eau)",
      "Dommages : 1 (feu)",
      "Dommages : 1 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Tailladeuse de Manche",
    "imageUrl": "html/img/tailladeuse_de_manche.png",
    "damages": [
      "Dommages : 2 à 3 (neutre)"
    ],
    "effects": []
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Tailladeuse de Baguette",
    "imageUrl": "html/img/tailladeuse_de_baguette.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Tailladeuse d'Arcs Magiques",
    "imageUrl": "html/img/tailladeuse_darcs_magiques.png",
    "damages": [
      "Dommages : 1 (air)",
      "Dommages : 1 (eau)",
      "Dommages : 1 à 0 (feu)",
      "Dommages : 1 à 0 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Tailladeuse de Bâton",
    "imageUrl": "html/img/tailladeuse_de_baton.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Tailladeuse de Bâtons Magiques",
    "imageUrl": "html/img/tailladeuse_de_batons_magiques.png",
    "damages": [
      "Dommages : 1 (air)",
      "Dommages : 1 (eau)",
      "Dommages : 1 à 0 (feu)",
      "Dommages : 1 à 0 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Coupe Cuir du Cordomage",
    "imageUrl": "html/img/coupe_cuir_du_cordomage.png",
    "damages": [
      "Dommages : 1 (air)",
      "Dommages : 1 (eau)",
      "Dommages : 1 (feu)",
      "Dommages : 1 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Tailladeuse d'Arc",
    "imageUrl": "html/img/tailladeuse_darc.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Sertisseur du Joaillomage",
    "imageUrl": "html/img/sertisseur_du_joaillomage.png",
    "damages": [
      "Dommages : 1 (air)",
      "Dommages : 1 (eau)",
      "Dommages : 1 à 0 (feu)",
      "Dommages : 1 à 0 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Coupe Cuir",
    "imageUrl": "html/img/coupe_cuir.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Sertisseur",
    "imageUrl": "html/img/sertisseur.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 1,
    "name": "Dagues de l'initié",
    "imageUrl": "html/img/dagues_de_linitie.png",
    "damages": [
      "Dommages : 1 à 3 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 2,
    "name": "Petites Dagues de Boisaille",
    "imageUrl": "html/img/petites_dagues_de_boisaille.png",
    "damages": [
      "Dommages : 1 à 3 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 4,
    "name": "Dagues de Boisaille",
    "imageUrl": "html/img/dagues_de_boisaille.png",
    "damages": [
      "Dommages : 2 à 3 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 6,
    "name": "Grandes Dagues de Boisaille",
    "imageUrl": "html/img/grandes_dagues_de_boisaille.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 7,
    "name": "Puissantes Dagues de Boisaille",
    "imageUrl": "html/img/puissantes_dagues_de_boisaille.png",
    "damages": [
      "Dommages : 3 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 10,
    "name": "Petites Dagues de Fouraille",
    "imageUrl": "html/img/petites_dagues_de_fouraille.png",
    "damages": [
      "Dommages : 4 à 6 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 10,
    "name": "Petites Dagues de Croclage",
    "imageUrl": "html/img/petites_dagues_de_croclage.png",
    "damages": [
      "Dommages : 1 à 3 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Dague",
    "level": 11,
    "name": "Dagues de Fouraille",
    "imageUrl": "html/img/dagues_de_fouraille.png",
    "damages": [
      "Dommages : 4 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 12,
    "name": "Leurnettes",
    "imageUrl": "html/img/leurnettes.png",
    "damages": [
      "Dommages : 1 à 3 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 12,
    "name": "Grandes Dagues de Fouraille",
    "imageUrl": "html/img/grandes_dagues_de_fouraille.png",
    "damages": [
      "Dommages : 5 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 12,
    "name": "Dagues du Bandit",
    "imageUrl": "html/img/dagues_du_bandit.png",
    "damages": [
      "Dommages : 3 à 5 (air)",
      "Vole de 6 à 10 kamas"
    ],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 3,
        "max": 7
      }
    ]
  },
  {
    "type": "Dague",
    "level": 13,
    "name": "Puissantes Dagues de Fouraille",
    "imageUrl": "html/img/puissantes_dagues_de_fouraille.png",
    "damages": [
      "Dommages : 5 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 13,
    "name": "Dagues de Croclage",
    "imageUrl": "html/img/dagues_de_croclage.png",
    "damages": [
      "Dommages : 1 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 4,
        "max": 4
      }
    ]
  },
  {
    "type": "Dague",
    "level": 15,
    "name": "Grandes Dagues de Croclage",
    "imageUrl": "html/img/grandes_dagues_de_croclage.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 6,
        "max": 6
      }
    ]
  },
  {
    "type": "Dague",
    "level": 17,
    "name": "Impressionantes Dagues de Croclage",
    "imageUrl": "html/img/impressionantes_dagues_de_croclage.png",
    "damages": [
      "Dommages : 2 à 5 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 8,
        "max": 8
      }
    ]
  },
  {
    "type": "Dague",
    "level": 20,
    "name": "Petites Dagues Sylvestres",
    "imageUrl": "html/img/petites_dagues_sylvestres.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Dague",
    "level": 20,
    "name": "L'Ergot Mina",
    "imageUrl": "html/img/lergot_mina.png",
    "damages": [
      "Vole 6 à 8 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": -6,
        "max": -15
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Dague",
    "level": 23,
    "name": "Dagues Sylvestres",
    "imageUrl": "html/img/dagues_sylvestres.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 13,
        "max": 17
      },
      {
        "stat": "Agilité",
        "min": 13,
        "max": 17
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Dague",
    "level": 25,
    "name": "Queues de Chatons",
    "imageUrl": "html/img/queues_de_chatons.png",
    "damages": [
      "Dommages : 1 à 7 (eau)",
      "Dommages : 1 à 7 (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": -6,
        "max": -45
      }
    ]
  },
  {
    "type": "Dague",
    "level": 25,
    "name": "Grandes Dagues Sylvestres",
    "imageUrl": "html/img/grandes_dagues_sylvestres.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 15,
        "max": 19
      },
      {
        "stat": "Agilité",
        "min": 15,
        "max": 19
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Dague",
    "level": 27,
    "name": "Puissantes Dagues Sylvestres",
    "imageUrl": "html/img/puissantes_dagues_sylvestres.png",
    "damages": [
      "Dommages : 9 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 17,
        "max": 21
      },
      {
        "stat": "Agilité",
        "min": 17,
        "max": 21
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Dague",
    "level": 29,
    "name": "Bashers",
    "imageUrl": "html/img/bashers.png",
    "damages": [
      "Dommages : 10 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 30,
    "name": "Dagues O'Bert",
    "imageUrl": "html/img/dagues_obert.png",
    "damages": [
      "Dommages : 6 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Est une arme de chasse",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Dague",
    "level": 30,
    "name": "Dague Hi'Don'",
    "imageUrl": "html/img/dague_hidon.png",
    "damages": [
      "Dommages : 5 à 12 (feu)"
    ],
    "effects": []
  },
  {
    "type": "Dague",
    "level": 30,
    "name": "Dagues Tylo",
    "imageUrl": "html/img/dagues_tylo.png",
    "damages": [
      "Dommages : 4 à 9 (terre)"
    ],
    "effects": [
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 7
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 7
      },
      {
        "stat": "Agilité",
        "min": -21,
        "max": -50
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 30,
    "name": "Petites Dagues Eguisées",
    "imageUrl": "html/img/petites_dagues_eguisees.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": -18,
        "max": -18
      }
    ]
  },
  {
    "type": "Dague",
    "level": 30,
    "name": "Le Rasoir Infernal",
    "imageUrl": "html/img/le_rasoir_infernal.png",
    "damages": [
      "Dommages : 8 à 12 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": -16,
        "max": -25
      },
      {
        "stat": "Sagesse",
        "min": -16,
        "max": -25
      },
      {
        "stat": "Intelligence",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 32,
    "name": "Petit couteau à Stek",
    "imageUrl": "html/img/petit_couteau_a_stek.png",
    "damages": [
      "Dommages : 4 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 33,
    "name": "Les Lames en Table",
    "imageUrl": "html/img/les_lames_en_table.png",
    "damages": [
      "Dommages : 1 à 15 (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 6,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": -23,
        "max": -32
      }
    ]
  },
  {
    "type": "Dague",
    "level": 33,
    "name": "Dagues Eguisées",
    "imageUrl": "html/img/dagues_eguisees.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": -18,
        "max": -18
      }
    ]
  },
  {
    "type": "Dague",
    "level": 34,
    "name": "Dagues Ancestrales",
    "imageUrl": "html/img/dagues_ancestrales.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": 41,
        "max": 50
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -30
      }
    ]
  },
  {
    "type": "Dague",
    "level": 35,
    "name": "Epée Cassée du Chevalier Malchanceux",
    "imageUrl": "html/img/epee_cassee_du_chevalier_malchanceux.png",
    "damages": [
      "Dommages : 12 à 26 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": -20,
        "max": -20
      },
      {
        "stat": "Vitalité",
        "min": 15,
        "max": 15
      }
    ]
  },
  {
    "type": "Dague",
    "level": 35,
    "name": "Couteau à Stek",
    "imageUrl": "html/img/couteau_a_stek.png",
    "damages": [
      "Dommages : 5 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 25,
        "max": 34
      },
      {
        "stat": "Vitalité",
        "min": 13,
        "max": 17
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 36,
    "name": "Grandes Dagues Eguisées",
    "imageUrl": "html/img/grandes_dagues_eguisees.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 3
      },
      {
        "stat": "Intelligence",
        "min": -18,
        "max": -18
      }
    ]
  },
  {
    "type": "Dague",
    "level": 38,
    "name": "Grand couteau à Stek",
    "imageUrl": "html/img/grand_couteau_a_stek.png",
    "damages": [
      "Dommages : 6 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 29,
        "max": 38
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 39,
    "name": "Puissantes Dagues Eguisées",
    "imageUrl": "html/img/puissantes_dagues_eguisees.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Intelligence",
        "min": -18,
        "max": -18
      }
    ]
  },
  {
    "type": "Dague",
    "level": 40,
    "name": "Dagues Eulasse",
    "imageUrl": "html/img/dagues_eulasse.png",
    "damages": [
      "Dommages : 3 à 5 (eau)",
      "Dommages : 3 à 5 (terre)"
    ],
    "effects": [
      {
        "stat": "Résistance eau",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Résistance feu",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Résistance terre",
        "min": 2,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 2,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 40,
    "name": "Scalpel de Bworknroll",
    "imageUrl": "html/img/scalpel_de_bworknroll.png",
    "damages": [
      "Dommages : 6 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": -51,
        "max": -150
      },
      {
        "stat": "Force",
        "min": -21,
        "max": -40
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 40,
    "name": "Dagues Cruelles d'Elorie Entuwan",
    "imageUrl": "html/img/dagues_cruelles_delorie_entuwan.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "PM perdu à la cible",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 40,
    "name": "Dague Hi'Bol'",
    "imageUrl": "html/img/dague_hibol.png",
    "damages": [
      "Dommages : 6 à 15 (eau)"
    ],
    "effects": []
  },
  {
    "type": "Dague",
    "level": 41,
    "name": "Large Couteau à Stek",
    "imageUrl": "html/img/large_couteau_a_stek.png",
    "damages": [
      "Dommages : 7 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 18,
        "max": 22
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 44,
    "name": "Petite Lame de Fon",
    "imageUrl": "html/img/petite_lame_de_fon.png",
    "damages": [
      "Dommages : 5 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 9,
        "max": 13
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 44,
    "name": "Dagues Aj'Deh'Là",
    "imageUrl": "html/img/dagues_ajdehla.png",
    "damages": [
      "Dommages : 6 à 10 (air)"
    ],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": -50,
        "max": -50
      }
    ]
  },
  {
    "type": "Dague",
    "level": 46,
    "name": "Dagues Eurfolles",
    "imageUrl": "html/img/dagues_eurfolles.png",
    "damages": [
      "Dommages : 5 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 46,
    "name": "Dagues Honies",
    "imageUrl": "html/img/dagues_honies.png",
    "damages": [
      "Dommages : 6 à 15 (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Dague",
    "level": 48,
    "name": "Lame de Fon",
    "imageUrl": "html/img/lame_de_fon.png",
    "damages": [
      "Dommages : 6 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 18,
        "max": 27
      },
      {
        "stat": "Chance",
        "min": 12,
        "max": 16
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 50,
    "name": "Dague Hi'Mov'",
    "imageUrl": "html/img/dague_himov.png",
    "damages": [
      "Dommages : 6 à 15 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Dague",
    "level": 52,
    "name": "Grande Lame de Fon",
    "imageUrl": "html/img/grande_lame_de_fon.png",
    "damages": [
      "Dommages : 7 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 18,
        "max": 27
      },
      {
        "stat": "Chance",
        "min": 15,
        "max": 19
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 53,
    "name": "Petite Dague Fourbesque",
    "imageUrl": "html/img/petite_dague_fourbesque.png",
    "damages": [
      "Dommages : 6 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 27,
        "max": 36
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 3
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -15
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -15
      }
    ]
  },
  {
    "type": "Dague",
    "level": 56,
    "name": "Puissante lame de Fon",
    "imageUrl": "html/img/puissante_lame_de_fon.png",
    "damages": [
      "Dommages : 8 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 18,
        "max": 27
      },
      {
        "stat": "Chance",
        "min": 20,
        "max": 24
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 58,
    "name": "Dagues Ristocrates",
    "imageUrl": "html/img/dagues_ristocrates.png",
    "damages": [],
    "effects": []
  },
  {
    "type": "Dague",
    "level": 58,
    "name": "Dague Fourbesque",
    "imageUrl": "html/img/dague_fourbesque.png",
    "damages": [
      "Dommages : 7 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 32,
        "max": 46
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 3
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -15
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -15
      }
    ]
  },
  {
    "type": "Dague",
    "level": 60,
    "name": "Dague Haih'Ri'Don'",
    "imageUrl": "html/img/dague_haihridon.png",
    "damages": [
      "Dommages : 11 à 16 (air)"
    ],
    "effects": []
  },
  {
    "type": "Dague",
    "level": 62,
    "name": "Dagues Aerdala",
    "imageUrl": "html/img/dagues_aerdala.png",
    "damages": [
      "Dommages : 11 à 16 (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 200
      }
    ]
  },
  {
    "type": "Dague",
    "level": 63,
    "name": "Superbe Dague Fourbesque",
    "imageUrl": "html/img/superbe_dague_fourbesque.png",
    "damages": [
      "Dommages : 8 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 33,
        "max": 52
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -15
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -15
      }
    ]
  },
  {
    "type": "Dague",
    "level": 64,
    "name": "Blessdags",
    "imageUrl": "html/img/blessdags.png",
    "damages": [
      "Dommages : 12 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 6
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 40
      }
    ]
  },
  {
    "type": "Dague",
    "level": 67,
    "name": "Hypnotique Dague Fourbesque",
    "imageUrl": "html/img/hypnotique_dague_fourbesque.png",
    "damages": [
      "Dommages : 9 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 4
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -15
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -15
      }
    ]
  },
  {
    "type": "Dague",
    "level": 67,
    "name": "Dagues Ruyère",
    "imageUrl": "html/img/dagues_ruyere.png",
    "damages": [
      "Vole 3 à 4 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Dague",
    "level": 69,
    "name": "Griffettes",
    "imageUrl": "html/img/griffettes.png",
    "damages": [
      "Dommages : 9 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      }
    ]
  },
  {
    "type": "Dague",
    "level": 70,
    "name": "Dague Ho'Rille'",
    "imageUrl": "html/img/dague_horille.png",
    "damages": [
      "Dommages : 3 à 5 (air)",
      "Dommages : 3 à 5 (eau)",
      "Dommages : 3 à 5 (feu)",
      "Dommages : 3 à 5 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Dague",
    "level": 73,
    "name": "Chakra Style",
    "imageUrl": "html/img/chakra_style.png",
    "damages": [
      "Dommages : 10 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 30,
        "max": 30
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 30,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": -10,
        "max": -10
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 3
      }
    ]
  },
  {
    "type": "Dague",
    "level": 80,
    "name": "Dagues Hischantes",
    "imageUrl": "html/img/dagues_hischantes.png",
    "damages": [
      "Dommages : 13 à 22 (neutre)",
      "PV rendus : 13 à 22"
    ],
    "effects": [
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Dague",
    "level": 80,
    "name": "Lames Sanglantes D'Ortimus Contrari",
    "imageUrl": "html/img/lames_sanglantes_dortimus_contrari.png",
    "damages": [
      "Dommages : 11 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 83,
    "name": "La Thor-Boyaux",
    "imageUrl": "html/img/la_thor-boyaux.png",
    "damages": [
      "Dommages : 14 à 23 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 83,
    "name": "Daguette du Captain Chafer",
    "imageUrl": "html/img/daguette_du_captain_chafer.png",
    "damages": [
      "Dommages : 15 à 22 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      }
    ]
  },
  {
    "type": "Dague",
    "level": 90,
    "name": "Dague Lutination",
    "imageUrl": "html/img/dague_lutination.png",
    "damages": [
      "Dommages : 10 à 14 (neutre)",
      "Vole 2 à 4 PV (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 95,
    "name": "Dague Rafeuse",
    "imageUrl": "html/img/dague_rafeuse.png",
    "damages": [
      "Dommages : 6 à 9 (air)",
      "Dommages : 6 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance neutre",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Dague",
    "level": 100,
    "name": "Dagues Maydhyn China",
    "imageUrl": "html/img/dagues_maydhyn_china.png",
    "damages": [
      "Dommages : 15 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Initiative",
        "min": 200,
        "max": 200
      }
    ]
  },
  {
    "type": "Dague",
    "level": 108,
    "name": "Dagues du Rat Noir",
    "imageUrl": "html/img/dagues_du_rat_noir.png",
    "damages": [
      "Dommages : 17 à 20 (air)",
      "Vole de 21 à 30 kamas"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "+6 à 10 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "21 à 30% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Initiative",
        "min": 100,
        "max": 100
      }
    ]
  },
  {
    "type": "Dague",
    "level": 113,
    "name": "Dagues de l'Apprenti Tueur de Bouftons",
    "imageUrl": "html/img/dagues_de_lapprenti_tueur_de_bouftons.png",
    "damages": [
      "Dommages : 12 à 15 (neutre)",
      "Vole 3 à 4 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 100
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 113,
    "name": "Dagues Rhumes",
    "imageUrl": "html/img/dagues_rhumes.png",
    "damages": [
      "Dommages : 13 à 18 (neutre)",
      "Vole 3 à 4 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 120,
    "name": "Dague Régah",
    "imageUrl": "html/img/dague_regah.png",
    "damages": [
      "Dommages : 11 à 20 (air)",
      "Vole 3 à 4 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 121,
    "name": "Dagues R'Hoh",
    "imageUrl": "html/img/dagues_rhoh.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)",
      "Dommages : 7 à 11 (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Dague",
    "level": 127,
    "name": "Sertisseur de Ramougre",
    "imageUrl": "html/img/sertisseur_de_ramougre.png",
    "damages": [
      "Dommages : 5 à 14 (neutre)",
      "Vole 5 à 6 PV (air)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 6
      },
      {
        "stat": "+16 à 20 de dommages aux pièges",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Dague",
    "level": 128,
    "name": "Dagues du Dragoeuf",
    "imageUrl": "html/img/dagues_du_dragoeuf.png",
    "damages": [
      "Dommages : 5 à 10 (terre)",
      "Dommages : 5 à 10 (feu)"
    ],
    "effects": [
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Résistance eau",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Dague",
    "level": 135,
    "name": "Les Dagues du Bouwin",
    "imageUrl": "html/img/les_dagues_du_bouwin.png",
    "damages": [
      "Dommages : 14 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "11 à 20% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 143,
    "name": "Dagues Réceuses",
    "imageUrl": "html/img/dagues_receuses.png",
    "damages": [
      "Dommages : 13 à 22 (neutre)",
      "Vole 4 à 5 PV (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 149,
    "name": "Kriss Toubal",
    "imageUrl": "html/img/kriss_toubal.png",
    "damages": [
      "Vole 3 à 6 PV (feu)",
      "Vole 3 à 6 PV (eau)",
      "PV rendus : 1 à 20"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 150,
    "name": "Dagues Lassay",
    "imageUrl": "html/img/dagues_lassay.png",
    "damages": [
      "Dommages : 8 à 13 (neutre)",
      "Dommages : 8 à 13 (air)"
    ],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "+16 à 20 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "16 à 25% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Initiative",
        "min": 300,
        "max": 300
      }
    ]
  },
  {
    "type": "Dague",
    "level": 158,
    "name": "Dagues Ruik",
    "imageUrl": "html/img/dagues_ruik.png",
    "damages": [
      "Dommages : 1 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "31 à 40% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 171,
    "name": "Dagues Eudin",
    "imageUrl": "html/img/dagues_eudin.png",
    "damages": [
      "Dommages : 7 à 10 (terre)",
      "Dommages : 9 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "+11 à 20 de dommages aux pièges",
        "min": 0,
        "max": 0
      },
      {
        "stat": "21 à 30% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 175,
    "name": "Dague Adou",
    "imageUrl": "html/img/dague_adou.png",
    "damages": [
      "Dommages : 8 à 13 (air)",
      "Dommages : 8 à 13 (eau)",
      "Vole 1 à 2 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "21 à 30% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 182,
    "name": "Lame Assacre",
    "imageUrl": "html/img/lame_assacre.png",
    "damages": [
      "Dommages : 8 à 17 (neutre)",
      "Dommages : 6 à 10 (eau)",
      "Dommages : 6 à 10 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Dague",
    "level": 187,
    "name": "Couteaux à Champignons",
    "imageUrl": "html/img/couteaux_a_champignons.png",
    "damages": [
      "Dommages : 8 à 14 (neutre)",
      "Dommages : 8 à 14 (air)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "31 à 50% de dommages aux pièges (%)",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 1,
    "name": "Épée de l'initié",
    "imageUrl": "html/img/epee_de_linitie.png",
    "damages": [
      "Dommages : 1 à 5 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 1,
    "name": "Epée de Yingnitié",
    "imageUrl": "html/img/epee_de_yingnitie.png",
    "damages": [
      "Dommages : 1 à 5 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 1,
    "name": "Epée de Yanguru",
    "imageUrl": "html/img/epee_de_yanguru.png",
    "damages": [
      "Dommages : 1 à 5 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 1,
    "name": "Epée de Mercenaire",
    "imageUrl": "html/img/epee_de_mercenaire.png",
    "damages": [
      "Vole 41 à 60 PV (neutre)"
    ],
    "effects": []
  },
  {
    "type": "Epée",
    "level": 2,
    "name": "Petite Epée de Boisaille",
    "imageUrl": "html/img/petite_epee_de_boisaille.png",
    "damages": [
      "Dommages : 1 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Epée",
    "level": 3,
    "name": "Epée de Boisaille",
    "imageUrl": "html/img/epee_de_boisaille.png",
    "damages": [
      "Dommages : 2 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Epée",
    "level": 6,
    "name": "Grande Epée de Boisaille",
    "imageUrl": "html/img/grande_epee_de_boisaille.png",
    "damages": [
      "Dommages : 3 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Epée",
    "level": 7,
    "name": "Puissante Epée de Boisaille",
    "imageUrl": "html/img/puissante_epee_de_boisaille.png",
    "damages": [
      "Dommages : 4 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Epée",
    "level": 12,
    "name": "Epée du Chevalier de Glace",
    "imageUrl": "html/img/epee_du_chevalier_de_glace.png",
    "damages": [
      "PV rendus : 6 à 13"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 13,
    "name": "Petite Epée Sacrée",
    "imageUrl": "html/img/petite_epee_sacree.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 8,
        "max": 12
      }
    ]
  },
  {
    "type": "Epée",
    "level": 13,
    "name": "Petite Epée de Fouraille",
    "imageUrl": "html/img/petite_epee_de_fouraille.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 11
      },
      {
        "stat": "Agilité",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 13,
    "name": "Epée de Fouraille",
    "imageUrl": "html/img/epee_de_fouraille.png",
    "damages": [
      "Dommages : 12 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 12,
        "max": 12
      },
      {
        "stat": "Agilité",
        "min": -16,
        "max": -16
      }
    ]
  },
  {
    "type": "Epée",
    "level": 13,
    "name": "Petite Epée d'Ha",
    "imageUrl": "html/img/petite_epee_dha.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": -6,
        "max": -10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 13,
    "name": "La Queue",
    "imageUrl": "html/img/la_queue.png",
    "damages": [
      "Dommages : 1 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Epée",
    "level": 14,
    "name": "Grande Epée de Fouraille",
    "imageUrl": "html/img/grande_epee_de_fouraille.png",
    "damages": [
      "Dommages : 13 à 17 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 13,
        "max": 13
      },
      {
        "stat": "Agilité",
        "min": -17,
        "max": -17
      }
    ]
  },
  {
    "type": "Epée",
    "level": 15,
    "name": "Epée Sacrée",
    "imageUrl": "html/img/epee_sacree.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 9,
        "max": 13
      }
    ]
  },
  {
    "type": "Epée",
    "level": 15,
    "name": "Puissante Epée de Fouraille",
    "imageUrl": "html/img/puissante_epee_de_fouraille.png",
    "damages": [
      "Dommages : 14 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 14,
        "max": 14
      },
      {
        "stat": "Agilité",
        "min": -18,
        "max": -18
      }
    ]
  },
  {
    "type": "Epée",
    "level": 15,
    "name": "Epée d'Ha",
    "imageUrl": "html/img/epee_dha.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 12,
        "max": 16
      },
      {
        "stat": "Intelligence",
        "min": -6,
        "max": -10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 16,
    "name": "Grande Epée Sacrée",
    "imageUrl": "html/img/grande_epee_sacree.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 10,
        "max": 14
      }
    ]
  },
  {
    "type": "Epée",
    "level": 16,
    "name": "Lame du Chevaucheur de Karne",
    "imageUrl": "html/img/lame_du_chevaucheur_de_karne.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 16
      },
      {
        "stat": "Vitalité",
        "min": -20,
        "max": -20
      }
    ]
  },
  {
    "type": "Epée",
    "level": 16,
    "name": "Grande Epée d'Ha",
    "imageUrl": "html/img/grande_epee_dha.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 13,
        "max": 17
      },
      {
        "stat": "Intelligence",
        "min": -6,
        "max": -10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 17,
    "name": "Puissante Epée d'Ha",
    "imageUrl": "html/img/puissante_epee_dha.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 14,
        "max": 18
      },
      {
        "stat": "Intelligence",
        "min": -6,
        "max": -10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 17,
    "name": "Puissante Epée Sacrée",
    "imageUrl": "html/img/puissante_epee_sacree.png",
    "damages": [
      "Dommages : 9 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 18,
    "name": "Koupe-koupe",
    "imageUrl": "html/img/koupe-koupe.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": -11,
        "max": -30
      }
    ]
  },
  {
    "type": "Epée",
    "level": 21,
    "name": "Lame du Petit Bwork",
    "imageUrl": "html/img/lame_du_petit_bwork.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -4,
        "max": -4
      }
    ]
  },
  {
    "type": "Epée",
    "level": 21,
    "name": "La Triste Lame",
    "imageUrl": "html/img/la_triste_lame.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Est une arme de chasse",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Epée",
    "level": 21,
    "name": "Epée du Petit Chevalier",
    "imageUrl": "html/img/epee_du_petit_chevalier.png",
    "damages": [
      "Dommages : 11 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -4,
        "max": -4
      }
    ]
  },
  {
    "type": "Epée",
    "level": 21,
    "name": "Petite Epée d'Alle",
    "imageUrl": "html/img/petite_epee_dalle.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -4,
        "max": -8
      }
    ]
  },
  {
    "type": "Epée",
    "level": 21,
    "name": "La Queue Infernale",
    "imageUrl": "html/img/la_queue_infernale.png",
    "damages": [
      "Dommages : 1 à 35 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": -11,
        "max": -15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 22,
    "name": "Le Tranchant Infernal",
    "imageUrl": "html/img/le_tranchant_infernal.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": -5,
        "max": -9
      }
    ]
  },
  {
    "type": "Epée",
    "level": 22,
    "name": "Epée d'Alle",
    "imageUrl": "html/img/epee_dalle.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 7,
        "max": 11
      },
      {
        "stat": "Intelligence",
        "min": 7,
        "max": 11
      },
      {
        "stat": "Vitalité",
        "min": -4,
        "max": -8
      }
    ]
  },
  {
    "type": "Epée",
    "level": 23,
    "name": "Lame du Bwork",
    "imageUrl": "html/img/lame_du_bwork.png",
    "damages": [
      "Dommages : 18 à 22 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": -9,
        "max": -9
      }
    ]
  },
  {
    "type": "Epée",
    "level": 23,
    "name": "Epée du Chevalier",
    "imageUrl": "html/img/epee_du_chevalier.png",
    "damages": [
      "Dommages : 13 à 27 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 12,
        "max": 12
      },
      {
        "stat": "Vitalité",
        "min": -4,
        "max": -4
      }
    ]
  },
  {
    "type": "Epée",
    "level": 24,
    "name": "Epée du Grand Chevalier",
    "imageUrl": "html/img/epee_du_grand_chevalier.png",
    "damages": [
      "Dommages : 15 à 29 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 14,
        "max": 14
      },
      {
        "stat": "Vitalité",
        "min": -4,
        "max": -4
      }
    ]
  },
  {
    "type": "Epée",
    "level": 24,
    "name": "Grande Epée d'Alle",
    "imageUrl": "html/img/grande_epee_dalle.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 9,
        "max": 13
      },
      {
        "stat": "Intelligence",
        "min": 9,
        "max": 13
      },
      {
        "stat": "Vitalité",
        "min": -4,
        "max": -8
      }
    ]
  },
  {
    "type": "Epée",
    "level": 24,
    "name": "Lame du Grand Bwork",
    "imageUrl": "html/img/lame_du_grand_bwork.png",
    "damages": [
      "Dommages : 20 à 24 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": -14,
        "max": -14
      }
    ]
  },
  {
    "type": "Epée",
    "level": 25,
    "name": "La Klebik",
    "imageUrl": "html/img/la_klebik.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": -16,
        "max": -20
      }
    ]
  },
  {
    "type": "Epée",
    "level": 26,
    "name": "Epée du Puissant Chevalier",
    "imageUrl": "html/img/epee_du_puissant_chevalier.png",
    "damages": [
      "Dommages : 17 à 31 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 16,
        "max": 16
      },
      {
        "stat": "Vitalité",
        "min": -4,
        "max": -4
      }
    ]
  },
  {
    "type": "Epée",
    "level": 26,
    "name": "Lame du Puissant Bwork",
    "imageUrl": "html/img/lame_du_puissant_bwork.png",
    "damages": [
      "Dommages : 22 à 26 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": -19,
        "max": -19
      }
    ]
  },
  {
    "type": "Epée",
    "level": 26,
    "name": "Puissante Epée d'Alle",
    "imageUrl": "html/img/puissante_epee_dalle.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 12,
        "max": 16
      },
      {
        "stat": "Intelligence",
        "min": 12,
        "max": 16
      },
      {
        "stat": "Vitalité",
        "min": -4,
        "max": -8
      }
    ]
  },
  {
    "type": "Epée",
    "level": 27,
    "name": "Lame du Chafer",
    "imageUrl": "html/img/lame_du_chafer.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Intelligence",
        "min": -16,
        "max": -20
      }
    ]
  },
  {
    "type": "Epée",
    "level": 30,
    "name": "Epée Ta'Rad'",
    "imageUrl": "html/img/epee_tarad.png",
    "damages": [
      "Dommages : 11 à 17 (air)"
    ],
    "effects": []
  },
  {
    "type": "Epée",
    "level": 33,
    "name": "La crinière de Badoul",
    "imageUrl": "html/img/la_criniere_de_badoul.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Epée",
    "level": 35,
    "name": "La Griffe",
    "imageUrl": "html/img/la_griffe.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 35,
    "name": "Epée de Pym",
    "imageUrl": "html/img/epee_de_pym.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Force",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 37,
    "name": "Lame du Craqueleur",
    "imageUrl": "html/img/lame_du_craqueleur.png",
    "damages": [
      "Dommages : 6 à 30 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 4
      },
      {
        "stat": "Initiative",
        "min": 1,
        "max": 100
      }
    ]
  },
  {
    "type": "Epée",
    "level": 38,
    "name": "Sabroh",
    "imageUrl": "html/img/sabroh.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 40,
    "name": "Sabre Shodanwa",
    "imageUrl": "html/img/sabre_shodanwa.png",
    "damages": [
      "Dommages : 15 à 22 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Epée",
    "level": 40,
    "name": "Petite Etoile du Soir",
    "imageUrl": "html/img/petite_etoile_du_soir.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Force",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 40,
    "name": "Epée Hi'Zan'",
    "imageUrl": "html/img/epee_hizan.png",
    "damages": [
      "Dommages : 13 à 24 (feu)"
    ],
    "effects": []
  },
  {
    "type": "Epée",
    "level": 40,
    "name": "Goultard",
    "imageUrl": "html/img/goultard.png",
    "damages": [
      "Dommages : 26 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 30,
        "max": 30
      },
      {
        "stat": "Force",
        "min": 30,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 30,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": -30,
        "max": -30
      }
    ]
  },
  {
    "type": "Epée",
    "level": 41,
    "name": "Kwaklame de Terre",
    "imageUrl": "html/img/kwaklame_de_terre.png",
    "damages": [
      "Dommages : 16 à 25 (terre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Epée",
    "level": 41,
    "name": "Kwaklame du Vent",
    "imageUrl": "html/img/kwaklame_du_vent.png",
    "damages": [
      "Dommages : 16 à 25 (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Epée",
    "level": 41,
    "name": "Kwaklame de Flammes",
    "imageUrl": "html/img/kwaklame_de_flammes.png",
    "damages": [
      "Dommages : 16 à 25 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Epée",
    "level": 41,
    "name": "Kwaklame de Glace",
    "imageUrl": "html/img/kwaklame_de_glace.png",
    "damages": [
      "Dommages : 16 à 25 (eau)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Epée",
    "level": 44,
    "name": "Etoile du Soir",
    "imageUrl": "html/img/etoile_du_soir.png",
    "damages": [
      "Dommages : 13 à 22 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 17,
        "max": 17
      },
      {
        "stat": "Vitalité",
        "min": 17,
        "max": 17
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 11
      },
      {
        "stat": "Force",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 45,
    "name": "Lame d'Ogralimde",
    "imageUrl": "html/img/lame_dogralimde.png",
    "damages": [
      "Dommages : 11 à 28 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Epée",
    "level": 45,
    "name": "Corbalame",
    "imageUrl": "html/img/corbalame.png",
    "damages": [
      "Dommages : 11 à 50 (neutre)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "PM perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Epée",
    "level": 46,
    "name": "Le petit Cutter",
    "imageUrl": "html/img/le_petit_cutter.png",
    "damages": [
      "Dommages : 11 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -25
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -7
      }
    ]
  },
  {
    "type": "Epée",
    "level": 48,
    "name": "Brillante Etoile du soir",
    "imageUrl": "html/img/brillante_etoile_du_soir.png",
    "damages": [
      "Dommages : 15 à 24 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Sagesse",
        "min": 12,
        "max": 12
      },
      {
        "stat": "Force",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 50,
    "name": "Epée Dal'Douss'",
    "imageUrl": "html/img/epee_daldouss.png",
    "damages": [
      "Dommages : 14 à 33 (eau)"
    ],
    "effects": []
  },
  {
    "type": "Epée",
    "level": 52,
    "name": "Immortelle Etoile du soir",
    "imageUrl": "html/img/immortelle_etoile_du_soir.png",
    "damages": [
      "Dommages : 17 à 26 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 22,
        "max": 22
      },
      {
        "stat": "Vitalité",
        "min": 22,
        "max": 22
      },
      {
        "stat": "Sagesse",
        "min": 13,
        "max": 13
      },
      {
        "stat": "Force",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 52,
    "name": "Le Cutter",
    "imageUrl": "html/img/le_cutter.png",
    "damages": [
      "Dommages : 13 à 33 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -20
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Epée",
    "level": 52,
    "name": "Razielle",
    "imageUrl": "html/img/razielle.png",
    "damages": [
      "Dommages : 26 à 40 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 30,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 40,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 40,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": -10,
        "max": -10
      },
      {
        "stat": "Sagesse",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 58,
    "name": "Le Grand Cutter",
    "imageUrl": "html/img/le_grand_cutter.png",
    "damages": [
      "Dommages : 15 à 36 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 60,
    "name": "Découpeuse de Yench",
    "imageUrl": "html/img/decoupeuse_de_yench.png",
    "damages": [
      "Dommages : 26 à 35 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": -11,
        "max": -40
      },
      {
        "stat": "Agilité",
        "min": -11,
        "max": -40
      }
    ]
  },
  {
    "type": "Epée",
    "level": 60,
    "name": "La Zulie Lame",
    "imageUrl": "html/img/la_zulie_lame.png",
    "damages": [
      "Dommages : 17 à 31 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 60,
    "name": "Epée Rnoh'Hel'",
    "imageUrl": "html/img/epee_rnohhel.png",
    "damages": [
      "Dommages : 16 à 35 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Epée",
    "level": 61,
    "name": "Découpeuse de Kralamoure",
    "imageUrl": "html/img/decoupeuse_de_kralamoure.png",
    "damages": [
      "Dommages : 31 à 45 (neutre)"
    ],
    "effects": [
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Epée",
    "level": 64,
    "name": "Le Cutter Sanglant",
    "imageUrl": "html/img/le_cutter_sanglant.png",
    "damages": [
      "Dommages : 17 à 39 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 36,
        "max": 45
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -35
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 66,
    "name": "Sabre Nidanwa",
    "imageUrl": "html/img/sabre_nidanwa.png",
    "damages": [
      "Dommages : 26 à 37 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Epée",
    "level": 68,
    "name": "La Griffe Aiguisée",
    "imageUrl": "html/img/la_griffe_aiguisee.png",
    "damages": [
      "Dommages : 16 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      }
    ]
  },
  {
    "type": "Epée",
    "level": 70,
    "name": "Epée Royale du Bouftou",
    "imageUrl": "html/img/epee_royale_du_bouftou.png",
    "damages": [
      "Dommages : 4 à 8 (air)",
      "Dommages : 4 à 8 (eau)",
      "Dommages : 4 à 8 (feu)",
      "Dommages : 4 à 8 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": -11,
        "max": -60
      },
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 70,
    "name": "Epée Cerp'Teurh'",
    "imageUrl": "html/img/epee_cerpteurh.png",
    "damages": [
      "Dommages : 4 à 8 (air)",
      "Dommages : 4 à 8 (eau)",
      "Dommages : 4 à 8 (feu)",
      "Dommages : 4 à 8 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Epée",
    "level": 70,
    "name": "Lame du Chef Crocodaille",
    "imageUrl": "html/img/lame_du_chef_crocodaille.png",
    "damages": [
      "Dommages : 21 à 40 (neutre)",
      "Vole 1 à 2 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Epée",
    "level": 73,
    "name": "Epée Zervatif",
    "imageUrl": "html/img/epee_zervatif.png",
    "damages": [
      "Dommages : 15 à 22 (neutre)",
      "Dommages : 6 à 10 (air)",
      "Dommages : 6 à 10 (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Force",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      }
    ]
  },
  {
    "type": "Epée",
    "level": 75,
    "name": "Eventail Tranchant",
    "imageUrl": "html/img/eventail_tranchant.png",
    "damages": [
      "Dommages : 26 à 40 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Prospection",
        "min": -31,
        "max": -40
      }
    ]
  },
  {
    "type": "Epée",
    "level": 76,
    "name": "Sabre Feudala",
    "imageUrl": "html/img/sabre_feudala.png",
    "damages": [
      "Dommages : 11 à 30 (feu)",
      "Vole 2 à 3 PV (feu)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Epée",
    "level": 80,
    "name": "Neuf Queues",
    "imageUrl": "html/img/neuf_queues.png",
    "damages": [
      "Dommages : 9 à 99 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 9,
        "max": 9
      },
      {
        "stat": "Force",
        "min": 9,
        "max": 9
      }
    ]
  },
  {
    "type": "Epée",
    "level": 83,
    "name": "Sabre Sandanwa",
    "imageUrl": "html/img/sabre_sandanwa.png",
    "damages": [
      "Dommages : 28 à 41 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 6
      }
    ]
  },
  {
    "type": "Epée",
    "level": 85,
    "name": "Pic à Glace",
    "imageUrl": "html/img/pic_a_glace.png",
    "damages": [
      "Dommages : 26 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Faiblesse eau (%)",
        "min": 10,
        "max": 15
      }
    ]
  },
  {
    "type": "Epée",
    "level": 93,
    "name": "Sabre Yondanwa",
    "imageUrl": "html/img/sabre_yondanwa.png",
    "damages": [
      "Dommages : 21 à 40 (neutre)",
      "Vole 3 à 4 PV (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Epée",
    "level": 95,
    "name": "Fausse Griffe de Ceangal",
    "imageUrl": "html/img/fausse_griffe_de_ceangal.png",
    "damages": [
      "Dommages : 21 à 40 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Prospection",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Epée",
    "level": 95,
    "name": "Epée qui Pète",
    "imageUrl": "html/img/epee_qui_pete.png",
    "damages": [
      "Dommages : 21 à 40 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Prospection",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 4 à 23 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 12 à 31 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 6 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip Parfaite",
    "imageUrl": "html/img/patte_decaflip_parfaite.png",
    "damages": [
      "Dommages : 31 à 50 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 20 à 39 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 16 à 35 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 14 à 33 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 18 à 37 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Griffe Rose",
    "imageUrl": "html/img/griffe_rose.png",
    "damages": [
      "Dommages : 31 à 50 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 2 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 8 à 27 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 22 à 41 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Patte d'Ecaflip",
    "imageUrl": "html/img/patte_decaflip.png",
    "damages": [
      "Dommages : 10 à 29 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Epée Doncule",
    "imageUrl": "html/img/epee_doncule.png",
    "damages": [
      "Dommages : 46 à 65 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": -31,
        "max": -50
      },
      {
        "stat": "Chance",
        "min": -31,
        "max": -50
      },
      {
        "stat": "Agilité",
        "min": -31,
        "max": -50
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Epée",
    "level": 100,
    "name": "Lame du Chef Bwork",
    "imageUrl": "html/img/lame_du_chef_bwork.png",
    "damages": [
      "Dommages : 23 à 57 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Epée",
    "level": 106,
    "name": "Razoir du Soir",
    "imageUrl": "html/img/razoir_du_soir.png",
    "damages": [
      "Dommages : 23 à 37 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      }
    ]
  },
  {
    "type": "Epée",
    "level": 109,
    "name": "Epée du Rat Blanc",
    "imageUrl": "html/img/epee_du_rat_blanc.png",
    "damages": [
      "Dommages : 23 à 38 (air)",
      "Vole 3 à 5 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Epée",
    "level": 111,
    "name": "Griffe de Grizmine",
    "imageUrl": "html/img/griffe_de_grizmine.png",
    "damages": [
      "Dommages : 31 à 48 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Epée",
    "level": 126,
    "name": "Epée du Dark Vlad",
    "imageUrl": "html/img/epee_du_dark_vlad.png",
    "damages": [
      "Dommages : 18 à 32 (feu)",
      "Dommages : 11 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Epée",
    "level": 127,
    "name": "Epée du Dragoeuf",
    "imageUrl": "html/img/epee_du_dragoeuf.png",
    "damages": [
      "Dommages : 16 à 25 (terre)",
      "Dommages : 16 à 25 (air)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 100
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 8
      }
    ]
  },
  {
    "type": "Epée",
    "level": 135,
    "name": "Glaive Icération",
    "imageUrl": "html/img/glaive_iceration.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)",
      "Dommages : 11 à 20 (air)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 300,
        "max": 300
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Epée",
    "level": 143,
    "name": "Le Sabre Ayassalama",
    "imageUrl": "html/img/le_sabre_ayassalama.png",
    "damages": [
      "Dommages : 26 à 40 (neutre)",
      "Vole 4 à 6 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 145,
    "name": "Griffe Pourpre",
    "imageUrl": "html/img/griffe_pourpre.png",
    "damages": [
      "Dommages : 36 à 60 (neutre)",
      "Vole 3 à 5 PV (terre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Dommages (%)",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Epée",
    "level": 158,
    "name": "Karnak",
    "imageUrl": "html/img/karnak.png",
    "damages": [
      "Dommages : 29 à 47 (neutre)",
      "Vole 4 à 6 PV (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Epée",
    "level": 163,
    "name": "Fuschia",
    "imageUrl": "html/img/fuschia.png",
    "damages": [
      "Dommages : 16 à 28 (air)",
      "Dommages : 16 à 28 (feu)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Soins",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Epée",
    "level": 169,
    "name": "L'Epée Rilleuse",
    "imageUrl": "html/img/lepee_rilleuse.png",
    "damages": [
      "Dommages : 26 à 50 (neutre)",
      "Vole 3 à 4 PV (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Epée",
    "level": 177,
    "name": "L'Épée Nice",
    "imageUrl": "html/img/lepee_nice.png",
    "damages": [
      "Dommages : 16 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 6
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 200,
        "max": 200
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Epée",
    "level": 179,
    "name": "Kukri Kura",
    "imageUrl": "html/img/kukri_kura.png",
    "damages": [
      "Dommages : 10 à 21 (neutre)",
      "Dommages : 10 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Initiative",
        "min": 301,
        "max": 500
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 184,
    "name": "Epée Loponèze",
    "imageUrl": "html/img/epee_loponeze.png",
    "damages": [
      "Dommages : 6 à 28 (eau)",
      "Dommages : 6 à 28 (air)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Initiative",
        "min": 401,
        "max": 700
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Epée",
    "level": 186,
    "name": "Az'tech",
    "imageUrl": "html/img/aztech.png",
    "damages": [
      "Dommages : 31 à 50 (neutre)",
      "Vole 6 à 8 PV (air)",
      "Vole 6 à 8 PV (eau)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Epée",
    "level": 200,
    "name": "Epée Maudite du Saigneur Guerrier",
    "imageUrl": "html/img/epee_maudite_du_saigneur_guerrier.png",
    "damages": [
      "Dommages : 9 à 18 (air)",
      "Dommages : 9 à 18 (eau)",
      "Dommages : 9 à 18 (feu)",
      "Dommages : 9 à 18 (neutre)",
      "Dommages : 9 à 18 (terre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Force",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 165
      },
      {
        "stat": "Résistance air (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance terre (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Marteau de Moon",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Cawotte",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Boomerang perfide",
        "min": 0,
        "max": 0
      },
      {
        "stat": "Réduit de 1 le coût en PA du sort Foudroiement",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Hache",
    "level": 1,
    "name": "Hache de Bûcheron",
    "imageUrl": "html/img/hache_de_bucheron.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Hache",
    "level": 1,
    "name": "Hache Hémal",
    "imageUrl": "html/img/hache_hemal.png",
    "damages": [
      "Dommages : 6 à 10 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Hache",
    "level": 1,
    "name": "Hache de l'apprenti bûcheron",
    "imageUrl": "html/img/hache_de_lapprenti_bucheron.png",
    "damages": [
      "Dommages : 1 à 3 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Hache",
    "level": 3,
    "name": "Hachette de Bûcheron",
    "imageUrl": "html/img/hachette_de_bucheron.png",
    "damages": [
      "Dommages : 4 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Hache",
    "level": 6,
    "name": "Hachette Hévlalav",
    "imageUrl": "html/img/hachette_hevlalav.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Force",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Hache",
    "level": 8,
    "name": "La Trancheuse d'Arakne",
    "imageUrl": "html/img/la_trancheuse_darakne.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Hache",
    "level": 8,
    "name": "Mangeuse de Châtaignier",
    "imageUrl": "html/img/mangeuse_de_chataignier.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 3,
        "max": 3
      },
      {
        "stat": "Intelligence",
        "min": -5,
        "max": -5
      }
    ]
  },
  {
    "type": "Hache",
    "level": 8,
    "name": "Mangeuse de Frêne",
    "imageUrl": "html/img/mangeuse_de_frene.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Sagesse",
        "min": -7,
        "max": -7
      }
    ]
  },
  {
    "type": "Hache",
    "level": 12,
    "name": "Hache Vôr'Om",
    "imageUrl": "html/img/hache_vorom.png",
    "damages": [
      "Dommages : 10 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Hache",
    "level": 15,
    "name": "Hache Térophyle",
    "imageUrl": "html/img/hache_terophyle.png",
    "damages": [
      "Dommages : 3 à 7 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 70
      },
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Hache",
    "level": 17,
    "name": "Trancheuse d'If",
    "imageUrl": "html/img/trancheuse_dif.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Hache",
    "level": 21,
    "name": "Trancheuse de Noyer",
    "imageUrl": "html/img/trancheuse_de_noyer.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": -5,
        "max": -5
      },
      {
        "stat": "Force",
        "min": -5,
        "max": -5
      }
    ]
  },
  {
    "type": "Hache",
    "level": 22,
    "name": "Hache Huré",
    "imageUrl": "html/img/hache_hure.png",
    "damages": [
      "Dommages : 7 à 11 (eau)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Est une arme de chasse",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Hache",
    "level": 25,
    "name": "Mangeuse d'Erable",
    "imageUrl": "html/img/mangeuse_derable.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Hache",
    "level": 26,
    "name": "La Trancheuse de Bambou",
    "imageUrl": "html/img/la_trancheuse_de_bambou.png",
    "damages": [
      "Dommages : 11 à 20 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Hache",
    "level": 27,
    "name": "Agride",
    "imageUrl": "html/img/agride.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Hache",
    "level": 28,
    "name": "Francisque à Brêles",
    "imageUrl": "html/img/francisque_a_breles.png",
    "damages": [
      "Dommages : 11 à 15 (air)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Hache",
    "level": 30,
    "name": "Hache Hich'Ke'Bab'",
    "imageUrl": "html/img/hache_hichkebab.png",
    "damages": [
      "Dommages : 8 à 20 (eau)"
    ],
    "effects": []
  },
  {
    "type": "Hache",
    "level": 32,
    "name": "Fendeuse de Merisier",
    "imageUrl": "html/img/fendeuse_de_merisier.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Hache",
    "level": 33,
    "name": "Tueuse de Chênes",
    "imageUrl": "html/img/tueuse_de_chenes.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": -6,
        "max": -15
      }
    ]
  },
  {
    "type": "Hache",
    "level": 35,
    "name": "Hache Heuvante",
    "imageUrl": "html/img/hache_heuvante.png",
    "damages": [
      "Dommages : 9 à 18 (feu)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": -51,
        "max": -80
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Hache",
    "level": 36,
    "name": "Hache du Shodanwa",
    "imageUrl": "html/img/hache_du_shodanwa.png",
    "damages": [
      "Dommages : 6 à 30 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Hache",
    "level": 39,
    "name": "Coupeuse de Bombu",
    "imageUrl": "html/img/coupeuse_de_bombu.png",
    "damages": [
      "Dommages : 15 à 24 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 15
      }
    ]
  },
  {
    "type": "Hache",
    "level": 40,
    "name": "Hache Pira'Teur'",
    "imageUrl": "html/img/hache_pirateur.png",
    "damages": [
      "Dommages : 14 à 23 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Hache",
    "level": 42,
    "name": "Elagueuse d'Oliviolet",
    "imageUrl": "html/img/elagueuse_doliviolet.png",
    "damages": [
      "Dommages : 16 à 22 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": -6,
        "max": -15
      },
      {
        "stat": "Force",
        "min": -6,
        "max": -15
      }
    ]
  },
  {
    "type": "Hache",
    "level": 47,
    "name": "Elagueuse de Charme",
    "imageUrl": "html/img/elagueuse_de_charme.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Force",
        "min": -16,
        "max": -25
      }
    ]
  },
  {
    "type": "Hache",
    "level": 50,
    "name": "Hache Pi'Veuh'Nin'",
    "imageUrl": "html/img/hache_piveuhnin.png",
    "damages": [
      "Dommages : 19 à 28 (air)"
    ],
    "effects": []
  },
  {
    "type": "Hache",
    "level": 51,
    "name": "Hache de Pierre",
    "imageUrl": "html/img/hache_de_pierre.png",
    "damages": [
      "Dommages : 16 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 20
      },
      {
        "stat": "Initiative",
        "min": 50,
        "max": 50
      }
    ]
  },
  {
    "type": "Hache",
    "level": 54,
    "name": "Hache de Brèche",
    "imageUrl": "html/img/hache_de_breche.png",
    "damages": [
      "Dommages : 21 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      }
    ]
  },
  {
    "type": "Hache",
    "level": 55,
    "name": "Hache du Mulou",
    "imageUrl": "html/img/hache_du_mulou.png",
    "damages": [
      "Dommages : 16 à 35 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 55
      },
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 15
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Hache",
    "level": 57,
    "name": "Hache Darsson",
    "imageUrl": "html/img/hache_darsson.png",
    "damages": [
      "Dommages : 18 à 27 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Initiative",
        "min": -100,
        "max": -100
      },
      {
        "stat": "Sagesse",
        "min": -6,
        "max": -15
      }
    ]
  },
  {
    "type": "Hache",
    "level": 59,
    "name": "Hache du Nidanwa",
    "imageUrl": "html/img/hache_du_nidanwa.png",
    "damages": [
      "Dommages : 13 à 37 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Hache",
    "level": 60,
    "name": "Hache Hev'Leu'",
    "imageUrl": "html/img/hache_hevleu.png",
    "damages": [
      "Dommages : 21 à 30 (feu)"
    ],
    "effects": []
  },
  {
    "type": "Hache",
    "level": 62,
    "name": "Boulgourde des Clairières",
    "imageUrl": "html/img/boulgourde_des_clairieres.png",
    "damages": [
      "Dommages : 31 à 45 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Hache",
    "level": 62,
    "name": "Hache Ebbah",
    "imageUrl": "html/img/hache_ebbah.png",
    "damages": [
      "Dommages : 23 à 28 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      }
    ]
  },
  {
    "type": "Hache",
    "level": 66,
    "name": "Coupeuse de Sifflet",
    "imageUrl": "html/img/coupeuse_de_sifflet.png",
    "damages": [
      "Dommages : 21 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 20
      }
    ]
  },
  {
    "type": "Hache",
    "level": 66,
    "name": "Trancheuse de Partie",
    "imageUrl": "html/img/trancheuse_de_partie.png",
    "damages": [
      "Dommages : 21 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Portée",
        "min": -2,
        "max": -3
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      }
    ]
  },
  {
    "type": "Hache",
    "level": 70,
    "name": "Hache Per'Ge'",
    "imageUrl": "html/img/hache_perge.png",
    "damages": [
      "Dommages : 4 à 8 (air)",
      "Dommages : 4 à 8 (eau)",
      "Dommages : 4 à 8 (feu)",
      "Dommages : 4 à 8 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Hache",
    "level": 74,
    "name": "Fendeuse d'Abraknyde",
    "imageUrl": "html/img/fendeuse_dabraknyde.png",
    "damages": [
      "Dommages : 21 à 35 (neutre)"
    ],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Hache",
    "level": 78,
    "name": "Bardiche du Milicien",
    "imageUrl": "html/img/bardiche_du_milicien.png",
    "damages": [
      "Dommages : 26 à 32 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": -21,
        "max": -50
      }
    ]
  },
  {
    "type": "Hache",
    "level": 80,
    "name": "Hache Eulouh",
    "imageUrl": "html/img/hache_eulouh.png",
    "damages": [
      "Dommages : 11 à 17 (neutre)",
      "Dommages : 11 à 17 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      }
    ]
  },
  {
    "type": "Hache",
    "level": 81,
    "name": "Hachette Savante",
    "imageUrl": "html/img/hachette_savante.png",
    "damages": [
      "Dommages : 23 à 29 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Initiative",
        "min": -101,
        "max": -200
      },
      {
        "stat": "Force",
        "min": -21,
        "max": -50
      }
    ]
  },
  {
    "type": "Hache",
    "level": 83,
    "name": "Hache Terrdala",
    "imageUrl": "html/img/hache_terrdala.png",
    "damages": [
      "Dommages : 11 à 35 (terre)",
      "Vole 3 à 4 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Hache",
    "level": 83,
    "name": "Hache du Sandanwa",
    "imageUrl": "html/img/hache_du_sandanwa.png",
    "damages": [
      "Dommages : 11 à 45 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Initiative",
        "min": 100,
        "max": 100
      }
    ]
  },
  {
    "type": "Hache",
    "level": 84,
    "name": "Francique Basquaise",
    "imageUrl": "html/img/francique_basquaise.png",
    "damages": [
      "Dommages : 28 à 32 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      }
    ]
  },
  {
    "type": "Hache",
    "level": 87,
    "name": "Vouge à Poisson",
    "imageUrl": "html/img/vouge_a_poisson.png",
    "damages": [
      "Dommages : 31 à 35 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": -6,
        "max": -25
      }
    ]
  },
  {
    "type": "Hache",
    "level": 90,
    "name": "Hache de Dame Oise",
    "imageUrl": "html/img/hache_de_dame_oise.png",
    "damages": [
      "Dommages : 31 à 35 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 70
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 70
      },
      {
        "stat": "Initiative",
        "min": -500,
        "max": -500
      }
    ]
  },
  {
    "type": "Hache",
    "level": 93,
    "name": "Fendeuse d'Abraknyde Ancestral",
    "imageUrl": "html/img/fendeuse_dabraknyde_ancestral.png",
    "damages": [
      "Dommages : 21 à 35 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Force",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Dommages (%)",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Sagesse",
        "min": -6,
        "max": -15
      }
    ]
  },
  {
    "type": "Hache",
    "level": 96,
    "name": "Hache de Lookabeer",
    "imageUrl": "html/img/hache_de_lookabeer.png",
    "damages": [
      "Dommages : 31 à 37 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Hache",
    "level": 98,
    "name": "Hache du Yondanwa",
    "imageUrl": "html/img/hache_du_yondanwa.png",
    "damages": [
      "Dommages : 6 à 25 (neutre)",
      "Dommages : 6 à 25 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 6
      }
    ]
  },
  {
    "type": "Hache",
    "level": 99,
    "name": "Halle de Barde",
    "imageUrl": "html/img/halle_de_barde.png",
    "damages": [
      "Dommages : 36 à 40 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 51,
        "max": 60
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 60
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Hache",
    "level": 109,
    "name": "Hache du Minotoror",
    "imageUrl": "html/img/hache_du_minotoror.png",
    "damages": [
      "Dommages : 21 à 40 (neutre)",
      "Vole 3 à 5 PV (terre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      }
    ]
  },
  {
    "type": "Hache",
    "level": 112,
    "name": "La Hache Ticot",
    "imageUrl": "html/img/la_hache_ticot.png",
    "damages": [
      "Dommages : 9 à 19 (neutre)",
      "Dommages : 9 à 19 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 100
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Hache",
    "level": 116,
    "name": "La Hache Menbien",
    "imageUrl": "html/img/la_hache_menbien.png",
    "damages": [
      "Dommages : 21 à 32 (neutre)",
      "Dommages : 7 à 16 (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance air",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Hache",
    "level": 126,
    "name": "Hache du Dragoeuf",
    "imageUrl": "html/img/hache_du_dragoeuf.png",
    "damages": [
      "Dommages : 23 à 37 (neutre)",
      "Vole 4 à 6 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 80
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Résistance air",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Hache",
    "level": 128,
    "name": "Le Fendoir Tichaud",
    "imageUrl": "html/img/le_fendoir_tichaud.png",
    "damages": [
      "Dommages : 24 à 42 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Hache",
    "level": 137,
    "name": "Poolache",
    "imageUrl": "html/img/poolache.png",
    "damages": [
      "Dommages : 14 à 22 (terre)",
      "Dommages : 14 à 22 (feu)",
      "Vole 3 à 4 PV (terre)",
      "Vole 3 à 4 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Hache",
    "level": 139,
    "name": "Hache du Guerrier Zoth",
    "imageUrl": "html/img/hache_du_guerrier_zoth.png",
    "damages": [
      "Dommages : 7 à 13 (air)",
      "Dommages : 7 à 13 (eau)",
      "Dommages : 7 à 13 (feu)",
      "Dommages : 7 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Hache",
    "level": 158,
    "name": "Hache Harnée",
    "imageUrl": "html/img/hache_harnee.png",
    "damages": [
      "Dommages : 13 à 19 (air)",
      "Dommages : 13 à 19 (feu)",
      "Dommages : 13 à 19 (eau)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance eau (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Hache",
    "level": 162,
    "name": "Hache Sueur Rance",
    "imageUrl": "html/img/hache_sueur_rance.png",
    "damages": [
      "Vole 10 PV (terre)",
      "Dommages : 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Hache",
    "level": 176,
    "name": "Hache à Lamelles",
    "imageUrl": "html/img/hache_a_lamelles.png",
    "damages": [
      "Dommages : 11 à 23 (eau)",
      "Dommages : 11 à 23 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau du Forgeur de Boucliers",
    "imageUrl": "html/img/marteau_du_forgeur_de_boucliers.png",
    "damages": [
      "Dommages : 2 à 3 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Petit Marteau de Boisaille",
    "imageUrl": "html/img/petit_marteau_de_boisaille.png",
    "damages": [
      "Dommages : 1 à 5 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau du Forgeur de Haches",
    "imageUrl": "html/img/marteau_du_forgeur_de_haches.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau du Forgemage de Haches",
    "imageUrl": "html/img/marteau_du_forgemage_de_haches.png",
    "damages": [
      "Dommages : 1 (air)",
      "Dommages : 1 (eau)",
      "Dommages : 1 à 0 (feu)",
      "Dommages : 1 à 0 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau du Forgemage d'Epées",
    "imageUrl": "html/img/marteau_du_forgemage_depees.png",
    "damages": [
      "Dommages : 1 (air)",
      "Dommages : 1 (eau)",
      "Dommages : 1 à 0 (feu)",
      "Dommages : 1 à 0 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau du Forgemage de Pelles",
    "imageUrl": "html/img/marteau_du_forgemage_de_pelles.png",
    "damages": [
      "Dommages : 1 (air)",
      "Dommages : 1 (eau)",
      "Dommages : 1 à 0 (feu)",
      "Dommages : 1 à 0 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau du Forgemage de Dagues",
    "imageUrl": "html/img/marteau_du_forgemage_de_dagues.png",
    "damages": [
      "Dommages : 1 (air)",
      "Dommages : 1 (eau)",
      "Dommages : 1 à 0 (feu)",
      "Dommages : 1 à 0 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau du Forgemage de Marteaux",
    "imageUrl": "html/img/marteau_du_forgemage_de_marteaux.png",
    "damages": [
      "Dommages : 1 (air)",
      "Dommages : 1 (eau)",
      "Dommages : 1 à 0 (feu)",
      "Dommages : 1 à 0 (terre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 1,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau de Forgeur d'Epées",
    "imageUrl": "html/img/marteau_de_forgeur_depees.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau de Forgeur de Pelles",
    "imageUrl": "html/img/marteau_de_forgeur_de_pelles.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau de Forgeur de Grattoir",
    "imageUrl": "html/img/marteau_de_forgeur_de_grattoir.png",
    "damages": [
      "Dommages : 2 à 3 (neutre)"
    ],
    "effects": []
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau Martel",
    "imageUrl": "html/img/marteau_martel.png",
    "damages": [
      "Dommages : 1 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": -10,
        "max": -10
      },
      {
        "stat": "Echec critique",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Force",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau de l'initié",
    "imageUrl": "html/img/marteau_de_linitie.png",
    "damages": [
      "Dommages : 1 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau de Forgeur de Dagues",
    "imageUrl": "html/img/marteau_de_forgeur_de_dagues.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau du Bricoleur",
    "imageUrl": "html/img/marteau_du_bricoleur.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 1,
    "name": "Marteau de Forgeur de Marteaux",
    "imageUrl": "html/img/marteau_de_forgeur_de_marteaux.png",
    "damages": [
      "Dommages : 2 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 2,
    "name": "Marteau de Boisaille",
    "imageUrl": "html/img/marteau_de_boisaille.png",
    "damages": [
      "Dommages : 2 à 6 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 4,
    "name": "Grand Marteau de Boisaille",
    "imageUrl": "html/img/grand_marteau_de_boisaille.png",
    "damages": [
      "Dommages : 3 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 6,
    "name": "Puissant Marteau de Boisaille",
    "imageUrl": "html/img/puissant_marteau_de_boisaille.png",
    "damages": [
      "Dommages : 4 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 10,
    "name": "Marteau du Bouftou",
    "imageUrl": "html/img/marteau_du_bouftou.png",
    "damages": [
      "Dommages : 4 à 8 (feu)",
      "Dommages : 4 à 8 (terre)"
    ],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 13,
    "name": "Marteau de Raclage",
    "imageUrl": "html/img/marteau_de_raclage.png",
    "damages": [
      "Dommages : 12 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 13,
    "name": "Petit Marteau de Raclage",
    "imageUrl": "html/img/petit_marteau_de_raclage.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 13,
    "name": "Petit Marteau d'Ivoire",
    "imageUrl": "html/img/petit_marteau_divoire.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Agilité",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 14,
    "name": "Grand Marteau de Raclage",
    "imageUrl": "html/img/grand_marteau_de_raclage.png",
    "damages": [
      "Dommages : 13 à 17 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 15,
    "name": "Puissant Marteau de Raclage",
    "imageUrl": "html/img/puissant_marteau_de_raclage.png",
    "damages": [
      "Dommages : 14 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 15,
    "name": "Marteau d'Ivoire",
    "imageUrl": "html/img/marteau_divoire.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Agilité",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 15,
    "name": "Maillet Aclou",
    "imageUrl": "html/img/maillet_aclou.png",
    "damages": [
      "Dommages : 8 à 12 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": -51,
        "max": -100
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 3
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 16,
    "name": "Cerberus",
    "imageUrl": "html/img/cerberus.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 18,
    "name": "Grand Marteau d'Ivoire",
    "imageUrl": "html/img/grand_marteau_divoire.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 9,
        "max": 9
      },
      {
        "stat": "Agilité",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 18,
    "name": "Petite Masse d'Ha",
    "imageUrl": "html/img/petite_masse_dha.png",
    "damages": [
      "Dommages : 11 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Chance",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 18,
    "name": "Marteau Pickeur",
    "imageUrl": "html/img/marteau_pickeur.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 19,
    "name": "Puissant Marteau d'Ivoire",
    "imageUrl": "html/img/puissant_marteau_divoire.png",
    "damages": [
      "Dommages : 9 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 11
      },
      {
        "stat": "Agilité",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 20,
    "name": "Masse d'Ha",
    "imageUrl": "html/img/masse_dha.png",
    "damages": [
      "Dommages : 12 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 12,
        "max": 12
      },
      {
        "stat": "Chance",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 21,
    "name": "Petit Marteau R'unique",
    "imageUrl": "html/img/petit_marteau_runique.png",
    "damages": [
      "Dommages : 9 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 14,
        "max": 14
      },
      {
        "stat": "Vitalité",
        "min": 12,
        "max": 12
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 21,
    "name": "Le Marteau du Chafer",
    "imageUrl": "html/img/le_marteau_du_chafer.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Est une arme de chasse",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 22,
    "name": "Solide Masse d'Ha",
    "imageUrl": "html/img/solide_masse_dha.png",
    "damages": [
      "Dommages : 14 à 17 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 14,
        "max": 14
      },
      {
        "stat": "Chance",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 23,
    "name": "Marteau Tau",
    "imageUrl": "html/img/marteau_tau.png",
    "damages": [
      "Dommages : 6 à 17 (air)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": -21,
        "max": -40
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 23,
    "name": "Barabas",
    "imageUrl": "html/img/barabas.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 24,
    "name": "Marteau R'unique",
    "imageUrl": "html/img/marteau_runique.png",
    "damages": [
      "Dommages : 9 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 16
      },
      {
        "stat": "Vitalité",
        "min": 12,
        "max": 12
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 24,
    "name": "Incassable Masse d'Ha",
    "imageUrl": "html/img/incassable_masse_dha.png",
    "damages": [
      "Dommages : 16 à 19 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 16
      },
      {
        "stat": "Chance",
        "min": 5,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 26,
    "name": "Marteau de l'Aurore",
    "imageUrl": "html/img/marteau_de_laurore.png",
    "damages": [
      "Dommages : 3 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Force",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Agilité",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 27,
    "name": "Grand Marteau R'unique",
    "imageUrl": "html/img/grand_marteau_runique.png",
    "damages": [
      "Dommages : 9 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 18,
        "max": 18
      },
      {
        "stat": "Vitalité",
        "min": 14,
        "max": 14
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 27,
    "name": "Sargasse",
    "imageUrl": "html/img/sargasse.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 27,
    "name": "Masse O'dard",
    "imageUrl": "html/img/masse_odard.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 30,
    "name": "Marteau Le'Stoye'",
    "imageUrl": "html/img/marteau_lestoye.png",
    "damages": [
      "Dommages : 8 à 13 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Marteau",
    "level": 30,
    "name": "Imposant Marteau R'unique",
    "imageUrl": "html/img/imposant_marteau_runique.png",
    "damages": [
      "Dommages : 9 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": 15,
        "max": 15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 34,
    "name": "Petite Masse Tmosfer",
    "imageUrl": "html/img/petite_masse_tmosfer.png",
    "damages": [
      "Dommages : 13 à 17 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 8,
        "max": 8
      },
      {
        "stat": "Vitalité",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 35,
    "name": "Marteau Toh'Lo",
    "imageUrl": "html/img/marteau_tohlo.png",
    "damages": [
      "Dommages : 16 à 20 (feu)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": -31,
        "max": -80
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 35,
    "name": "Le Scrounnchhh",
    "imageUrl": "html/img/le_scrounnchhh.png",
    "damages": [
      "Dommages : 11 à 25 (terre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": -11,
        "max": -40
      },
      {
        "stat": "Sagesse",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 36,
    "name": "Petit marteau Outar",
    "imageUrl": "html/img/petit_marteau_outar.png",
    "damages": [
      "Dommages : 17 à 24 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 37,
    "name": "Masse Tmosfer",
    "imageUrl": "html/img/masse_tmosfer.png",
    "damages": [
      "Dommages : 14 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 8,
        "max": 8
      },
      {
        "stat": "Vitalité",
        "min": 17,
        "max": 17
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 39,
    "name": "Petite Masse Aj Taye",
    "imageUrl": "html/img/petite_masse_aj_taye.png",
    "damages": [
      "Dommages : 11 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 40,
    "name": "Marteau Outar",
    "imageUrl": "html/img/marteau_outar.png",
    "damages": [
      "Dommages : 18 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 40,
    "name": "Marteau Mah'Turj'",
    "imageUrl": "html/img/marteau_mahturj.png",
    "damages": [
      "Dommages : 10 à 15 (air)"
    ],
    "effects": []
  },
  {
    "type": "Marteau",
    "level": 40,
    "name": "Longue Masse Tmosfer",
    "imageUrl": "html/img/longue_masse_tmosfer.png",
    "damages": [
      "Dommages : 15 à 19 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 9,
        "max": 9
      },
      {
        "stat": "Vitalité",
        "min": 19,
        "max": 19
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 41,
    "name": "Marteau du Boufcoul",
    "imageUrl": "html/img/marteau_du_boufcoul.png",
    "damages": [
      "Dommages : 5 à 12 (air)",
      "Dommages : 5 à 12 (eau)"
    ],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 43,
    "name": "Redoutable Masse Tmosfer",
    "imageUrl": "html/img/redoutable_masse_tmosfer.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 21
      },
      {
        "stat": "Résistance terre",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Résistance neutre",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Chance",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 43,
    "name": "Masse Aj Taye",
    "imageUrl": "html/img/masse_aj_taye.png",
    "damages": [
      "Dommages : 11 à 19 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 23,
        "max": 32
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 44,
    "name": "Grand Marteau Outar",
    "imageUrl": "html/img/grand_marteau_outar.png",
    "damages": [
      "Dommages : 19 à 27 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 46,
    "name": "Le Twote en Carton",
    "imageUrl": "html/img/le_twote_en_carton.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 30
      },
      {
        "stat": "Agilité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Force",
        "min": -11,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 47,
    "name": "Grande Masse Aj Taye",
    "imageUrl": "html/img/grande_masse_aj_taye.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 25,
        "max": 34
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 48,
    "name": "Imposant Marteau Outar",
    "imageUrl": "html/img/imposant_marteau_outar.png",
    "damages": [
      "Dommages : 21 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 49,
    "name": "Marteau Tape Doigts",
    "imageUrl": "html/img/marteau_tape_doigts.png",
    "damages": [
      "Dommages : 16 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages (%)",
        "min": 1,
        "max": 5
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 50,
    "name": "Marteau Reuh'Deuh'Piz'",
    "imageUrl": "html/img/marteau_reuhdeuhpiz.png",
    "damages": [
      "Dommages : 9 à 18 (feu)"
    ],
    "effects": []
  },
  {
    "type": "Marteau",
    "level": 50,
    "name": "Marteau Pinambour",
    "imageUrl": "html/img/marteau_pinambour.png",
    "damages": [
      "Vole 3 à 7 PV (feu)",
      "PV rendus : 7 à 11"
    ],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 25
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 51,
    "name": "Puissante Masse Aj Taye",
    "imageUrl": "html/img/puissante_masse_aj_taye.png",
    "damages": [
      "Dommages : 11 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 27,
        "max": 36
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 54,
    "name": "Le Matronome",
    "imageUrl": "html/img/le_matronome.png",
    "damages": [
      "Dommages : 10 à 13 (air)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Intelligence",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 55,
    "name": "Petit Marteau Pospodrol",
    "imageUrl": "html/img/petit_marteau_pospodrol.png",
    "damages": [
      "Dommages : 21 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Force",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 25,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": -5,
        "max": -5
      },
      {
        "stat": "Sagesse",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 55,
    "name": "Marteau Réfacteur",
    "imageUrl": "html/img/marteau_refacteur.png",
    "damages": [
      "Vole 2 à 4 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 55,
    "name": "Marteau Re'Thu",
    "imageUrl": "html/img/marteau_rethu.png",
    "damages": [
      "Dommages : 16 à 30 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Force",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 15
      },
      {
        "stat": "PM perdu à la cible",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 57,
    "name": "Marteau Polpoulette",
    "imageUrl": "html/img/marteau_polpoulette.png",
    "damages": [
      "Dommages : 5 à 9 (feu)",
      "Dommages : 5 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 3,
        "max": 7
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Initiative",
        "min": 51,
        "max": 100
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 60,
    "name": "Marteau Pospodrol",
    "imageUrl": "html/img/marteau_pospodrol.png",
    "damages": [
      "Dommages : 22 à 27 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 17,
        "max": 33
      },
      {
        "stat": "Force",
        "min": 17,
        "max": 33
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 26
      },
      {
        "stat": "Chance",
        "min": -5,
        "max": -5
      },
      {
        "stat": "Sagesse",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 60,
    "name": "Marteau Bo'Gan'",
    "imageUrl": "html/img/marteau_bogan.png",
    "damages": [
      "Dommages : 13 à 22 (eau)"
    ],
    "effects": []
  },
  {
    "type": "Marteau",
    "level": 65,
    "name": "Grand Marteau Pospodrol",
    "imageUrl": "html/img/grand_marteau_pospodrol.png",
    "damages": [
      "Dommages : 23 à 29 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 19,
        "max": 36
      },
      {
        "stat": "Force",
        "min": 19,
        "max": 36
      },
      {
        "stat": "Vitalité",
        "min": 28,
        "max": 28
      },
      {
        "stat": "Chance",
        "min": -5,
        "max": -5
      },
      {
        "stat": "Sagesse",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 66,
    "name": "Ragnarok",
    "imageUrl": "html/img/ragnarok.png",
    "damages": [
      "Dommages : 16 à 23 (neutre)"
    ],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": 36,
        "max": 45
      },
      {
        "stat": "Sagesse",
        "min": 36,
        "max": 45
      },
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 70,
    "name": "Puissant marteau Pospodrol",
    "imageUrl": "html/img/puissant_marteau_pospodrol.png",
    "damages": [
      "Dommages : 24 à 31 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 30,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": -15,
        "max": -15
      },
      {
        "stat": "Chance",
        "min": -5,
        "max": -5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 70,
    "name": "Marteau Ni'Hok'",
    "imageUrl": "html/img/marteau_nihok.png",
    "damages": [
      "Dommages : 2 à 5 (air)",
      "Dommages : 2 à 5 (eau)",
      "Dommages : 2 à 5 (feu)",
      "Dommages : 2 à 5 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Marteau",
    "level": 79,
    "name": "Marteau des Falistos",
    "imageUrl": "html/img/marteau_des_falistos.png",
    "damages": [
      "Dommages : 31 à 50 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 41,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Portée",
        "min": -1,
        "max": -2
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 79,
    "name": "Kidorteau",
    "imageUrl": "html/img/kidorteau.png",
    "damages": [
      "Dommages : 7 à 12 (air)",
      "Dommages : 7 à 12 (eau)",
      "Dommages : 7 à 12 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 81,
    "name": "Marteau Fantal",
    "imageUrl": "html/img/marteau_fantal.png",
    "damages": [
      "Dommages : 21 à 38 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Prospection",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 81,
    "name": "Marteau à Torts",
    "imageUrl": "html/img/marteau_a_torts.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": -11,
        "max": -40
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 81,
    "name": "Marteau du Craqueleur Légendaire",
    "imageUrl": "html/img/marteau_du_craqueleur_legendaire.png",
    "damages": [
      "Dommages : 13 à 24 (air)",
      "Dommages : 9 à 14 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Agilité",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 82,
    "name": "Marteau Nitruhant",
    "imageUrl": "html/img/marteau_nitruhant.png",
    "damages": [
      "Dommages : 19 à 38 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 4
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 82,
    "name": "Kaiser",
    "imageUrl": "html/img/kaiser.png",
    "damages": [
      "Dommages : 16 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 70
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 83,
    "name": "Marteau Mato",
    "imageUrl": "html/img/marteau_mato.png",
    "damages": [
      "Dommages : 7 à 14 (neutre)",
      "Dommages : 7 à 14 (feu)"
    ],
    "effects": [
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Soins",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 85,
    "name": "Masse du Corailleur",
    "imageUrl": "html/img/masse_du_corailleur.png",
    "damages": [
      "Dommages : 8 à 16 (eau)",
      "Dommages : 8 à 16 (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 70
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 90,
    "name": "Marteau de la Terps",
    "imageUrl": "html/img/marteau_de_la_terps.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)",
      "Dommages : 6 à 10 (feu)",
      "Vole 2 à 6 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Sagesse",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 100,
    "name": "Marteau Réhadaure",
    "imageUrl": "html/img/marteau_rehadaure.png",
    "damages": [
      "Dommages : 11 à 15 (feu)",
      "Dommages : 11 à 15 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 107,
    "name": "Marteau Ronto",
    "imageUrl": "html/img/marteau_ronto.png",
    "damages": [
      "Dommages : 1 à 20 (neutre)",
      "PV rendus : 1 à 80"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 107,
    "name": "Marteau M'Pouce",
    "imageUrl": "html/img/marteau_mpouce.png",
    "damages": [
      "Dommages : 9 à 17 (neutre)",
      "Dommages : 9 à 17 (feu)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 113,
    "name": "Marteau Nairedeubrest",
    "imageUrl": "html/img/marteau_nairedeubrest.png",
    "damages": [
      "Dommages : 6 à 15 (neutre)",
      "Vole 3 à 4 PV (feu)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 120,
    "name": "Marteau R'Ticolis",
    "imageUrl": "html/img/marteau_rticolis.png",
    "damages": [
      "Dommages : 25 à 42 (neutre)",
      "Vole 4 à 6 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 9
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 3
      },
      {
        "stat": "Prospection",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 120,
    "name": "Marteau Kahr",
    "imageUrl": "html/img/marteau_kahr.png",
    "damages": [
      "Dommages : 25 à 42 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 60
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance eau",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance air",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance feu",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 120,
    "name": "Marteau Ridhe",
    "imageUrl": "html/img/marteau_ridhe.png",
    "damages": [
      "Dommages : 21 à 46 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance neutre",
        "min": 4,
        "max": 8
      },
      {
        "stat": "Résistance feu (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Résistance eau (%)",
        "min": 3,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 123,
    "name": "Marteau du Dragoeuf",
    "imageUrl": "html/img/marteau_du_dragoeuf.png",
    "damages": [
      "Dommages : 21 à 35 (neutre)",
      "Vole 3 à 5 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Résistance feu",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 124,
    "name": "Marteau Ksain",
    "imageUrl": "html/img/marteau_ksain.png",
    "damages": [
      "Dommages : 10 à 22 (neutre)",
      "Dommages : 10 à 22 (feu)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Résistance neutre",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance feu",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance feu (%)",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 125,
    "name": "Masse du Corailleur Magistral",
    "imageUrl": "html/img/masse_du_corailleur_magistral.png",
    "damages": [
      "Dommages : 21 à 35 (neutre)",
      "Vole 1 à 8 PV (air)",
      "Vole 1 à 8 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 51,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 126,
    "name": "Marteau Hubohu",
    "imageUrl": "html/img/marteau_hubohu.png",
    "damages": [
      "Dommages : 16 à 30 (neutre)",
      "Vole 6 à 10 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 129,
    "name": "Marteau Xiko",
    "imageUrl": "html/img/marteau_xiko.png",
    "damages": [
      "Dommages : 21 à 32 (terre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 200
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 132,
    "name": "Marteau de la Gamine Zoth",
    "imageUrl": "html/img/marteau_de_la_gamine_zoth.png",
    "damages": [
      "Dommages : 11 à 18 (air)",
      "Dommages : 11 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 91,
        "max": 120
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 135,
    "name": "Marteau Pinière",
    "imageUrl": "html/img/marteau_piniere.png",
    "damages": [
      "Dommages : 13 à 21 (neutre)",
      "Dommages : 13 à 21 (eau)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Résistance neutre",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 140,
    "name": "Marteau Mawoque",
    "imageUrl": "html/img/marteau_mawoque.png",
    "damages": [
      "Dommages : 14 à 23 (feu)",
      "Dommages : 14 à 23 (eau)"
    ],
    "effects": [
      {
        "stat": "Dommages (%)",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 143,
    "name": "Marteau Lahre",
    "imageUrl": "html/img/marteau_lahre.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)",
      "Dommages : 11 à 20 (air)",
      "Vole 5 à 7 PV (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Agilité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 150,
    "name": "Marteau Bleuronne",
    "imageUrl": "html/img/marteau_bleuronne.png",
    "damages": [
      "Dommages : 18 à 36 (neutre)",
      "Vole 5 à 8 PV (feu)"
    ],
    "effects": [
      {
        "stat": "PA perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": 41,
        "max": 50
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 178,
    "name": "Marteau Minokers",
    "imageUrl": "html/img/marteau_minokers.png",
    "damages": [
      "Dommages : 27 à 43 (neutre)",
      "Vole 4 à 6 PV (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 201,
        "max": 250
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Marteau",
    "level": 180,
    "name": "Ougarteau",
    "imageUrl": "html/img/ougarteau.png",
    "damages": [
      "Dommages : 19 à 35 (neutre)",
      "Vole 2 à 7 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 301,
        "max": 400
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 1,
    "name": "Pelle de l'Initié",
    "imageUrl": "html/img/pelle_de_linitie.png",
    "damages": [
      "Dommages : 1 à 4 (neutre)"
    ],
    "effects": [
      {
        "stat": "Initiative",
        "min": 10,
        "max": 10
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 1,
    "name": "Petite Pelle de Boisaille",
    "imageUrl": "html/img/petite_pelle_de_boisaille.png",
    "damages": [
      "Dommages : 1 à 5 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 2,
    "name": "Pelle de Boisaille",
    "imageUrl": "html/img/pelle_de_boisaille.png",
    "damages": [
      "Dommages : 2 à 6 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 4,
    "name": "Grande Pelle de Boisaille",
    "imageUrl": "html/img/grande_pelle_de_boisaille.png",
    "damages": [
      "Dommages : 3 à 7 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 6,
    "name": "Puissante Pelle de Boisaille",
    "imageUrl": "html/img/puissante_pelle_de_boisaille.png",
    "damages": [
      "Dommages : 4 à 8 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 10,
    "name": "Pelle en Mousse",
    "imageUrl": "html/img/pelle_en_mousse.png",
    "damages": [
      "Dommages : 1 à 18 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 10
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 13,
    "name": "Petite Pelle de Crapouille",
    "imageUrl": "html/img/petite_pelle_de_crapouille.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Agilité",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 13,
    "name": "Petite Pelle de Rapage",
    "imageUrl": "html/img/petite_pelle_de_rapage.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 15,
    "name": "Pelle des Champs",
    "imageUrl": "html/img/pelle_des_champs.png",
    "damages": [
      "Dommages : 5 à 9 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Sagesse",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Vitalité",
        "min": -10,
        "max": -10
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 15,
    "name": "Pelle de Rapage",
    "imageUrl": "html/img/pelle_de_rapage.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Intelligence",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 15,
    "name": "Pelle de Crapouille",
    "imageUrl": "html/img/pelle_de_crapouille.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Agilité",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 16,
    "name": "Grande Pelle de Crapouille",
    "imageUrl": "html/img/grande_pelle_de_crapouille.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 9,
        "max": 9
      },
      {
        "stat": "Agilité",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 17,
    "name": "Grande Pelle de Rapage",
    "imageUrl": "html/img/grande_pelle_de_rapage.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 9,
        "max": 9
      },
      {
        "stat": "Intelligence",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 17,
    "name": "Puissante Pelle de Crapouille",
    "imageUrl": "html/img/puissante_pelle_de_crapouille.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 11,
        "max": 11
      },
      {
        "stat": "Agilité",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 19,
    "name": "Puissante Pelle de Rapage",
    "imageUrl": "html/img/puissante_pelle_de_rapage.png",
    "damages": [
      "Dommages : 9 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 11,
        "max": 11
      },
      {
        "stat": "Intelligence",
        "min": -3,
        "max": -3
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 20,
    "name": "Barbe Grise",
    "imageUrl": "html/img/barbe_grise.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Sagesse",
        "min": -2,
        "max": -2
      },
      {
        "stat": "Est une arme de chasse",
        "min": 0,
        "max": 0
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 20,
    "name": "Petite Pelle du Craqueleur",
    "imageUrl": "html/img/petite_pelle_du_craqueleur.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Agilité",
        "min": 5,
        "max": 5
      },
      {
        "stat": "Intelligence",
        "min": -9,
        "max": -9
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 21,
    "name": "Pelle Houze",
    "imageUrl": "html/img/pelle_houze.png",
    "damages": [
      "Dommages : 11 à 16 (terre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": -16,
        "max": -35
      },
      {
        "stat": "Force",
        "min": 6,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 23,
    "name": "Pelle du Craqueleur",
    "imageUrl": "html/img/pelle_du_craqueleur.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Agilité",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Intelligence",
        "min": -9,
        "max": -9
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 24,
    "name": "Pelle à Thart'",
    "imageUrl": "html/img/pelle_a_thart.png",
    "damages": [
      "Dommages : 11 à 15 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 1,
        "max": 24
      },
      {
        "stat": "Intelligence",
        "min": -16,
        "max": -30
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 25,
    "name": "Petite Pelle Teuze",
    "imageUrl": "html/img/petite_pelle_teuze.png",
    "damages": [
      "Dommages : 11 à 15 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 25,
    "name": "Petite Pelle de Koutoulou",
    "imageUrl": "html/img/petite_pelle_de_koutoulou.png",
    "damages": [
      "Dommages : 7 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 7,
        "max": 7
      },
      {
        "stat": "Force",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 26,
    "name": "Grande Pelle du Craqueleur",
    "imageUrl": "html/img/grande_pelle_du_craqueleur.png",
    "damages": [
      "Dommages : 8 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 9,
        "max": 9
      },
      {
        "stat": "Agilité",
        "min": 9,
        "max": 9
      },
      {
        "stat": "Intelligence",
        "min": -9,
        "max": -9
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 27,
    "name": "Pelle Teuze",
    "imageUrl": "html/img/pelle_teuze.png",
    "damages": [
      "Dommages : 12 à 16 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 28,
    "name": "Pelle de Koutoulou",
    "imageUrl": "html/img/pelle_de_koutoulou.png",
    "damages": [
      "Dommages : 6 à 11 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 18,
        "max": 18
      },
      {
        "stat": "Sagesse",
        "min": 9,
        "max": 9
      },
      {
        "stat": "Force",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 29,
    "name": "Grande Pelle Teuze",
    "imageUrl": "html/img/grande_pelle_teuze.png",
    "damages": [
      "Dommages : 13 à 17 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 25
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 29,
    "name": "Puissante Pelle du craqueleur",
    "imageUrl": "html/img/puissante_pelle_du_craqueleur.png",
    "damages": [
      "Dommages : 9 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 11
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 11
      },
      {
        "stat": "Intelligence",
        "min": -9,
        "max": -9
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 30,
    "name": "Pelle Rin'",
    "imageUrl": "html/img/pelle_rin.png",
    "damages": [
      "Dommages : 9 à 15 (eau)"
    ],
    "effects": []
  },
  {
    "type": "Pelle",
    "level": 30,
    "name": "Petite Pelle Mechba",
    "imageUrl": "html/img/petite_pelle_mechba.png",
    "damages": [
      "Dommages : 7 à 15 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 7,
        "max": 9
      },
      {
        "stat": "Intelligence",
        "min": 7,
        "max": 9
      },
      {
        "stat": "Vitalité",
        "min": -13,
        "max": -15
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 31,
    "name": "Grande Pelle de Koutoulou",
    "imageUrl": "html/img/grande_pelle_de_koutoulou.png",
    "damages": [
      "Dommages : 6 à 12 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 21
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 11
      },
      {
        "stat": "Force",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 31,
    "name": "Puissante Pelle Teuze",
    "imageUrl": "html/img/puissante_pelle_teuze.png",
    "damages": [
      "Dommages : 14 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Coup critiques",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -5
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 34,
    "name": "Effrayante Pelle de Koutoulou",
    "imageUrl": "html/img/effrayante_pelle_de_koutoulou.png",
    "damages": [
      "Dommages : 6 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 24,
        "max": 24
      },
      {
        "stat": "Sagesse",
        "min": 13,
        "max": 13
      },
      {
        "stat": "Force",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 34,
    "name": "Petite Pelle de Bois Dormant",
    "imageUrl": "html/img/petite_pelle_de_bois_dormant.png",
    "damages": [
      "Dommages : 14 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 10,
        "max": 10
      },
      {
        "stat": "Vitalité",
        "min": 20,
        "max": 20
      },
      {
        "stat": "Agilité",
        "min": -15,
        "max": -15
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 37,
    "name": "Pelle de Bois Dormant",
    "imageUrl": "html/img/pelle_de_bois_dormant.png",
    "damages": [
      "Dommages : 14 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 11
      },
      {
        "stat": "Vitalité",
        "min": 22,
        "max": 22
      },
      {
        "stat": "Agilité",
        "min": -20,
        "max": -20
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 38,
    "name": "Petite Pelle Melle",
    "imageUrl": "html/img/petite_pelle_melle.png",
    "damages": [
      "Dommages : 14 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 40,
    "name": "Rhizome Doré",
    "imageUrl": "html/img/rhizome_dore.png",
    "damages": [
      "Dommages : 16 à 20 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -20
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 40,
    "name": "Grande Pelle de Bois Dormant",
    "imageUrl": "html/img/grande_pelle_de_bois_dormant.png",
    "damages": [
      "Dommages : 14 à 22 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 13,
        "max": 13
      },
      {
        "stat": "Vitalité",
        "min": 24,
        "max": 24
      },
      {
        "stat": "Agilité",
        "min": -20,
        "max": -20
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 40,
    "name": "Pelle Ass'Tik'",
    "imageUrl": "html/img/pelle_asstik.png",
    "damages": [
      "Dommages : 14 à 20 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Pelle",
    "level": 42,
    "name": "Pelle Melle",
    "imageUrl": "html/img/pelle_melle.png",
    "damages": [
      "Dommages : 15 à 21 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 23,
        "max": 32
      },
      {
        "stat": "Chance",
        "min": 13,
        "max": 22
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 43,
    "name": "Magnifique Pelle de Bois Dormant",
    "imageUrl": "html/img/magnifique_pelle_de_bois_dormant.png",
    "damages": [
      "Dommages : 14 à 23 (neutre)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 15,
        "max": 15
      },
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 26
      },
      {
        "stat": "Agilité",
        "min": -20,
        "max": -20
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 45,
    "name": "Pelle Mechba",
    "imageUrl": "html/img/pelle_mechba.png",
    "damages": [
      "Dommages : 14 à 18 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 13
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 13
      },
      {
        "stat": "Vitalité",
        "min": -13,
        "max": -15
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 46,
    "name": "Grande Pelle Melle",
    "imageUrl": "html/img/grande_pelle_melle.png",
    "damages": [
      "Dommages : 16 à 22 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 25,
        "max": 34
      },
      {
        "stat": "Chance",
        "min": 15,
        "max": 24
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 49,
    "name": "Petite Pelle Woukuis",
    "imageUrl": "html/img/petite_pelle_woukuis.png",
    "damages": [
      "Dommages : 16 à 25 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Force",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -35
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 50,
    "name": "Pelle Ag'Heuze'",
    "imageUrl": "html/img/pelle_agheuze.png",
    "damages": [
      "Dommages : 19 à 25 (air)"
    ],
    "effects": []
  },
  {
    "type": "Pelle",
    "level": 50,
    "name": "Puissante Pelle Melle",
    "imageUrl": "html/img/puissante_pelle_melle.png",
    "damages": [
      "Dommages : 17 à 23 (neutre)"
    ],
    "effects": [
      {
        "stat": "Force",
        "min": 27,
        "max": 36
      },
      {
        "stat": "Chance",
        "min": 17,
        "max": 26
      },
      {
        "stat": "Intelligence",
        "min": -1,
        "max": -30
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 1
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 50,
    "name": "Pelle Ikan",
    "imageUrl": "html/img/pelle_ikan.png",
    "damages": [
      "Dommages : 2 à 20 (air)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 13,
        "max": 22
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Vitalité",
        "min": -29,
        "max": -33
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 52,
    "name": "Pelle Doudesque",
    "imageUrl": "html/img/pelle_doudesque.png",
    "damages": [
      "Dommages : 11 à 30 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 35
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 52,
    "name": "Pelle Musicale",
    "imageUrl": "html/img/pelle_musicale.png",
    "damages": [
      "Dommages : 18 à 29 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 30
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 53,
    "name": "Cruelle Pelle-Truelle",
    "imageUrl": "html/img/cruelle_pelle-truelle.png",
    "damages": [
      "Dommages : 6 à 10 (neutre)"
    ],
    "effects": [
      {
        "stat": "PM",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Force",
        "min": -41,
        "max": -60
      },
      {
        "stat": "Intelligence",
        "min": -41,
        "max": -60
      },
      {
        "stat": "Agilité",
        "min": 11,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 1,
        "max": 2
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 54,
    "name": "Pelle Woukuis",
    "imageUrl": "html/img/pelle_woukuis.png",
    "damages": [
      "Dommages : 16 à 27 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 28,
        "max": 37
      },
      {
        "stat": "Force",
        "min": 28,
        "max": 37
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -35
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 55,
    "name": "Pelle Zébuth",
    "imageUrl": "html/img/pelle_zebuth.png",
    "damages": [
      "Dommages : 16 à 35 (eau)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Vitalité",
        "min": -11,
        "max": -20
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 50
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 59,
    "name": "Grande Pelle Woukuis",
    "imageUrl": "html/img/grande_pelle_woukuis.png",
    "damages": [
      "Dommages : 16 à 29 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 30,
        "max": 39
      },
      {
        "stat": "Force",
        "min": 30,
        "max": 39
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -35
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 60,
    "name": "Grande Pelle Mechba",
    "imageUrl": "html/img/grande_pelle_mechba.png",
    "damages": [
      "Dommages : 20 à 23 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 11,
        "max": 25
      },
      {
        "stat": "Intelligence",
        "min": 11,
        "max": 25
      },
      {
        "stat": "Vitalité",
        "min": -21,
        "max": -40
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 60,
    "name": "Pelle Sécutrice",
    "imageUrl": "html/img/pelle_secutrice.png",
    "damages": [
      "Dommages : 19 à 26 (air)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 60
      },
      {
        "stat": "PM perdu à la cible",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Sagesse",
        "min": -1,
        "max": -10
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 60,
    "name": "Pelle Rail'Zeur'",
    "imageUrl": "html/img/pelle_railzeur.png",
    "damages": [
      "Dommages : 20 à 26 (feu)"
    ],
    "effects": []
  },
  {
    "type": "Pelle",
    "level": 64,
    "name": "Imposante Pelle Woukuis",
    "imageUrl": "html/img/imposante_pelle_woukuis.png",
    "damages": [
      "Dommages : 16 à 31 (neutre)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 32,
        "max": 41
      },
      {
        "stat": "Force",
        "min": 32,
        "max": 41
      },
      {
        "stat": "Coup critiques",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Vitalité",
        "min": -1,
        "max": -35
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 66,
    "name": "Pelle Ripe",
    "imageUrl": "html/img/pelle_ripe.png",
    "damages": [
      "Dommages : 6 à 12 (neutre)",
      "Dommages : 6 à 12 (feu)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 35
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 4
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 70,
    "name": "Pelle Hi'Sé'Moun'",
    "imageUrl": "html/img/pelle_hisemoun.png",
    "damages": [
      "Dommages : 5 à 7 (air)",
      "Dommages : 5 à 7 (eau)",
      "Dommages : 5 à 7 (feu)",
      "Dommages : 5 à 7 (terre)"
    ],
    "effects": []
  },
  {
    "type": "Pelle",
    "level": 70,
    "name": "Pelle Minstère",
    "imageUrl": "html/img/pelle_minstere.png",
    "damages": [
      "Dommages : 16 à 24 (neutre)",
      "Vole 2 à 3 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 6
      },
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 71,
    "name": "Pelle Gicque",
    "imageUrl": "html/img/pelle_gicque.png",
    "damages": [
      "Dommages : 21 à 40 (neutre)",
      "PV rendus : 1 à 80"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 72,
    "name": "Ares",
    "imageUrl": "html/img/ares.png",
    "damages": [
      "Dommages : 7 à 13 (eau)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 3,
        "max": 5
      },
      {
        "stat": "PA",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Chance",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Dommages",
        "min": 2,
        "max": 3
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 80,
    "name": "La Pelle du Large",
    "imageUrl": "html/img/la_pelle_du_large.png",
    "damages": [
      "Dommages : 26 à 35 (feu)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": -31,
        "max": -60
      },
      {
        "stat": "Intelligence",
        "min": 26,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 11,
        "max": 20
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 84,
    "name": "Pelle Vaidaire",
    "imageUrl": "html/img/pelle_vaidaire.png",
    "damages": [
      "Dommages : 6 à 13 (eau)",
      "Dommages : 6 à 13 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 3,
        "max": 6
      },
      {
        "stat": "Portée",
        "min": 2,
        "max": 2
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 87,
    "name": "La Pelle Hélabète",
    "imageUrl": "html/img/la_pelle_helabete.png",
    "damages": [
      "Dommages : 18 à 37 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 35
      },
      {
        "stat": "Initiative",
        "min": 151,
        "max": 250
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance terre",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Résistance neutre",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 88,
    "name": "Pelle Mairhe",
    "imageUrl": "html/img/pelle_mairhe.png",
    "damages": [
      "Dommages : 11 à 20 (neutre)",
      "Vole 1 à 8 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Agilité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Créature invocables",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 88,
    "name": "Pelle Rinage",
    "imageUrl": "html/img/pelle_rinage.png",
    "damages": [
      "Dommages : 11 à 16 (neutre)",
      "Vole 3 à 6 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Sagesse",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Intelligence",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 94,
    "name": "Pelle Hébuse",
    "imageUrl": "html/img/pelle_hebuse.png",
    "damages": [
      "Dommages : 24 à 41 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 6,
        "max": 10
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 115,
    "name": "Pelle Moh",
    "imageUrl": "html/img/pelle_moh.png",
    "damages": [
      "Vole 9 à 15 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 30
      },
      {
        "stat": "Initiative",
        "min": 101,
        "max": 150
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 120,
    "name": "Pelle du Mineur Sombre",
    "imageUrl": "html/img/pelle_du_mineur_sombre.png",
    "damages": [
      "Dommages : 12 à 21 (neutre)",
      "Dommages : 12 à 21 (eau)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Coup critiques",
        "min": 5,
        "max": 8
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 400
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 121,
    "name": "Pelle Hikule",
    "imageUrl": "html/img/pelle_hikule.png",
    "damages": [
      "Dommages : 24 à 43 (neutre)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 41,
        "max": 80
      },
      {
        "stat": "Sagesse",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 127,
    "name": "Pelle Dragoeuf",
    "imageUrl": "html/img/pelle_dragoeuf.png",
    "damages": [
      "Dommages : 18 à 33 (neutre)",
      "Vole 4 à 6 PV (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Sagesse",
        "min": 16,
        "max": 25
      },
      {
        "stat": "Dommages",
        "min": 5,
        "max": 8
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 131,
    "name": "Pelle à Gâteau",
    "imageUrl": "html/img/pelle_a_gateau.png",
    "damages": [
      "Dommages : 6 à 14 (neutre)",
      "Dommages : 6 à 8 (eau)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Force",
        "min": 21,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Résistance air",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance eau",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Faiblesse feu (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Faiblesse neutre (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 137,
    "name": "Pelle Shattkitou",
    "imageUrl": "html/img/pelle_shattkitou.png",
    "damages": [
      "Dommages : 20 à 34 (neutre)",
      "Vole 4 à 6 PV (air)"
    ],
    "effects": [
      {
        "stat": "Agilité",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 71,
        "max": 100
      },
      {
        "stat": "Coup critiques",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages",
        "min": 4,
        "max": 5
      },
      {
        "stat": "Dommages (%)",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance air",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance air (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 142,
    "name": "Pelle Rhon",
    "imageUrl": "html/img/pelle_rhon.png",
    "damages": [
      "Dommages : 24 à 43 (neutre)",
      "Vole 5 à 7 PV (eau)"
    ],
    "effects": [
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 45
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Dommages (%)",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Prospection",
        "min": 16,
        "max": 20
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 156,
    "name": "Pelle Aigante",
    "imageUrl": "html/img/pelle_aigante.png",
    "damages": [
      "Dommages : 16 à 27 (feu)",
      "Dommages : 16 à 27 (terre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Force",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Vitalité",
        "min": 151,
        "max": 200
      },
      {
        "stat": "Soins",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Créature invocables",
        "min": 2,
        "max": 2
      },
      {
        "stat": "Initiative",
        "min": 201,
        "max": 300
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 20
      },
      {
        "stat": "Résistance feu (%)",
        "min": 5,
        "max": 7
      },
      {
        "stat": "Résistance terre (%)",
        "min": 5,
        "max": 7
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 176,
    "name": "la Bêche à Mel",
    "imageUrl": "html/img/la_beche_a_mel.png",
    "damages": [
      "Dommages : 6 à 10 (feu)",
      "Dommages : 16 à 30 (eau)"
    ],
    "effects": [
      {
        "stat": "Intelligence",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Chance",
        "min": 31,
        "max": 50
      },
      {
        "stat": "Sagesse",
        "min": 26,
        "max": 40
      },
      {
        "stat": "Vitalité",
        "min": 101,
        "max": 150
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Portée",
        "min": 1,
        "max": 1
      },
      {
        "stat": "Prospection",
        "min": 11,
        "max": 15
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 8
      },
      {
        "stat": "Résistance eau (%)",
        "min": 6,
        "max": 8
      }
    ]
  },
  {
    "type": "Pelle",
    "level": 191,
    "name": "Pelle Emélaka",
    "imageUrl": "html/img/pelle_emelaka.png",
    "damages": [
      "Dommages : 12 à 26 (eau)",
      "Dommages : 8 à 18 (neutre)"
    ],
    "effects": [
      {
        "stat": "Chance",
        "min": 41,
        "max": 60
      },
      {
        "stat": "Vitalité",
        "min": 251,
        "max": 300
      },
      {
        "stat": "Sagesse",
        "min": 31,
        "max": 40
      },
      {
        "stat": "Dommages",
        "min": 6,
        "max": 10
      },
      {
        "stat": "Prospection",
        "min": 21,
        "max": 30
      },
      {
        "stat": "Résistance feu (%)",
        "min": 6,
        "max": 10
      }
    ]
  }
];