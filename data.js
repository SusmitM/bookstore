const data = {
    players: [{
            id: 1,
            name: 'MARC-ANDRE TER STEGEN',
            position: 'Goalkeeper',
            appearances: 370,
            saves: 846,
            cleanSheets: 153,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/d57390d3-5cd5-426f-a1b2-e4cefb1a3d9a/01-MARC-ANDRE_TER_STEGEN.jpg?width=470&height=470',
            

        },
        {
            id: 2,
            name: 'INAKI PENA',
            position: 'Goalkeeper',
            appearances: 3,
            saves: 2,
            cleanSheets: 1,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/b17b8c7c-8385-4911-9629-39cffc9773d2/26-INAKI_PENA.jpg?width=470&height=470',
            

        },
        {
            id: 3,
            name: 'MARCOS ALONSO',
            position: 'Defender',
            appearances: 31,
            assists: 0,
            goals: 3,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/9c8408ec-43fe-4708-8d02-2340a2123a51/17-MARCOS_ALONSO.jpg?width=470&height=470',
           

        },
        {
            id: 4,
            name: 'RONALD ARAUJO',
            position: 'Defender',
            appearances: 110,
            assists: 3,
            goals: 7,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/04daeacd-0023-4927-a9df-417a942806ba/04-RONALD_ARAUJO_.jpg?width=470&height=470',
           

        },
        {
            id: 5,
            name: 'ANDREAS CHRISTENSEN',
            position: 'Defender',
            appearances: 25,
            assists: 0,
            goals: 0,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/cc2d00ce-8334-4349-b3c5-e8577c5ef066/15-ANDREAS_CHRISTENSEN.jpg?width=470&height=470',
            

        },
        {
            id: 6,
            name: 'JORDI ALBA',
            position: 'Defender',
            appearances: 455,
            assists: 91,
            goals: 26,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/d29a8a79-5eab-45ff-8697-a15f683b1346/18-JORDI_ALBA.jpg?width=470&height=470',
            

        },
        {
            id: 7,
            name: 'JULES KOUNDE',
            position: 'Defender',
            appearances: 34,
            assists: 0,
            goals: 0,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/6ed69443-89a7-43ae-9646-6231934568f6/23-JULES_KOUNDE.jpg?width=470&height=470',
            

        },
        {
            id: 8,
            name: 'ERIC GARCIA',
            position: 'Defender',
            appearances: 63,
            assists: 2,
            goals: 1,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/6aa34af9-1a56-41c0-9fa3-024253fa297c/24-ERIC_GARCIA.jpg?width=470&height=470',
            

        },
        {
            id: 9,
            name: 'SERGIO BUSQUETS',
            position: 'Midfielder',
            appearances: 717,
            assists: 39,
            goals: 19,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/29bf33ee-2d59-4f81-9c51-992d7c5546cf/05-SERGIO_.jpg?width=470&height=470',
           

        },
        {
            id: 10,
            name: 'PEDRI',
            position: 'Midfielder',
            appearances: 106,
            assists: 7,
            goals: 16,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/a4065cd7-9b67-4073-b957-80679c96e6c0/08-PEDRI.jpg?width=470&height=470',
            

        },
        {
            id: 11,
            name: 'FRANCK KESSIE',
            position: 'Midfielder',
            appearances: 38,
            assists: 3,
            goals: 3,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/ba2470f2-b5c7-44ef-a058-0dbb8b6cc2ed/19-FRANCK_KESSIE.jpg?width=470&height=470',
           

        },
        {
            id: 12,
            name: 'GAVI',
            position: 'Midfielder',
            appearances: 90,
            assists: 10,
            goals: 4,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/68339d90-282b-4e03-98fa-54395765867c/30-GAVI_.jpg?width=470&height=470',
            

        },
        {
            id: 13,
            name: 'SERGI ROBERTO',
            position: 'Midfielder',
            appearances: 346,
            assists: 40,
            goals: 16,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/79dfee0c-5078-4d90-996b-74f49d6a9531/20-S_ROBERTO.jpg?width=470&height=470',
            

        },
        {
            id: 14,
            name: 'FRENKIE DE JONG',
            position: 'Midfielder',
            appearances: 176,
            assists: 16,
            goals: 15,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/87c170bf-189d-448c-87d9-9f6c84838f40/21-FRENKIE_DE_JONG.jpg?width=470&height=470',
            

        },
        {
            id: 15,
            name: 'OUSMANE DEMBELE',
            position: 'Forward',
            appearances: 178,
            assists: 40,
            goals: 40,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/c065cb6b-56a0-42e5-b303-2e128eb6171f/07-OUSMANE_DEMBELE.jpg?width=470&height=470',
           

        },
        {
            id: 16,
            name: 'ROBERT LEWANDOWSKI',
            position: 'Forward',
            appearances: 39,
            assists: 7,
            goals: 28,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/85247947-27dc-488c-a6cb-d81c5e391559/09-ROBERT_LEWANDOWSKI.jpg?width=470&height=470',
            

        },
        {
            id: 17,
            name: 'ANSU FATI',
            position: 'Forward',
            appearances: 102,
            assists: 6,
            goals: 26,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/65cc4f69-2c91-4ab9-8576-d5596431eb49/10-ANSU_FATI.jpg?width=470&height=470',
           

        },
        {
            id: 18,
            name: 'FERRAN TORRES',
            position: 'Forward',
            appearances: 66,
            assists: 8,
            goals: 14,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/165df284-c70a-4990-891e-60b70dcc5c74/11-FERRAN_TORRES.jpg?width=470&height=470',
            

        },
        {
            id: 19,
            name: 'RAPHINHA',
            position: 'Forward',
            appearances: 43,
            assists: 10,
            goals: 9,
            image: 'https://www.fcbarcelona.com/photo-resources/2022/11/02/a1edb34c-bc71-488e-acc1-0b33289e9443/22-RAPHINHA.jpg?width=470&height=470',
           

        }

    ],
    formations: [{
        type: 433,
        img: 'https://quickstartsoccer.com/wp-content/uploads/2022/12/4-3-3-Formation-In-Soccer-768x559.png?ezimgfmt=ng:webp/ngcb43',
    },
    {
        type: 442,
        img: 'https://quickstartsoccer.com/wp-content/uploads/2022/12/4-4-2-Diamond-Formation-768x559.png?ezimgfmt=ng:webp/ngcb43',
    }]
}