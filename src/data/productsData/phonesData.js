const phonesData = [
    {
        id: 1,
        rating: 99,
        image: "src/assets/images/phones/iPhone 16 Pro Max BlackT.jpg",
        title: "iPhone 16 Pro Max",

        configure: [
            {
                screen: '6.9" (2858x1320) OLED 120 Гц',
                ROM: 256,
                RAM: 8,
                camera: "3 камеры, основная 48 МП",
                batery: "4676 мА·ч",
                processor: "A 18 Pro",
                colors: "Black Titanium, Natural Titanium, Desert Titanium, White Titanium",
            },
        ],
        romShop: [
            {
                roms: [
                    128,
                    256,
                    512,
                    1,
                ],
            },
        ],
        colorShop: [
            {
                colors: [
                    { image: "/src/assets/images/phones/iPhone 16 Pro Max BlackT.jpg", name: "Black Titanium" },
                    { image: "/src/assets/images/phones/iPhone 16 Pro Max DesertT.jpg", name: "Desert Titanium" },
                    { image: "/src/assets/images/phones/iPhone 16 Pro Max NaturalT.jpg", name: "Natural Titanium" },
                    { image: "/src/assets/images/phones/iPhone 16 Pro Max WhiteT.jpg", name: "White Titanium" }
                ]
            }
        ],
        prices: {
            128: 140000,
            256: 155000,
            512: 175000,
            1: 210000
        },

    },
    {
        id: 2,
        rating: 96,
        image: "src/assets/images/phones/iPhone 16 Pro Max NaturalT.jpg",
        title: "iPhone 16 Pro",
        configure: [
            {
                screen: '6.9" (2858x1320) OLED 120 Гц',
                ROM: 128,
                RAM: 8,
                camera: "3 камеры, основная 48 МП",
                batery: "4676 мАч",
                processor: "A 18 Pro",
                colors: "Black Titanium, Natural Titanium, Desert Titanium, White Titanium",
            },
        ],
        romShop: [
            {
                roms: [
                    128,
                    256,
                    512,
                    1,
                ],
            },
        ],
        colorShop: [
            {
                colors: [
                    { image: "/src/assets/images/phones/iPhone 16 Pro Max NaturalT.jpg", name: "Natural Titanium" },
                    { image: "/src/assets/images/phones/iPhone 16 Pro Max BlackT.jpg", name: "Black Titanium" },
                    { image: "/src/assets/images/phones/iPhone 16 Pro Max DesertT.jpg", name: "Desert Titanium" },
                    { image: "/src/assets/images/phones/iPhone 16 Pro Max WhiteT.jpg", name: "White Titanium" }
                ],

            },
        ],
        prices: {
            128: 120000,
            256: 135000,
            512: 155000,
            1: 192000
        },

    },
    {
        id: 3,
        rating: 88,
        image: "src/assets/images/phones/iPhone 16 Plus White.jpg",
        title: "iPhone 16 Plus",
        configure: [
            {
                screen: '6.7" (2858x1320) OLED 60 Гц',
                ROM: 128,
                RAM: 8,
                camera: "двойная камера, основная 48 МП ",
                batery: "3561 мА·ч",
                processor: "A 18",
                colors: "Black, Green, Pink, White, Blue",
            },
        ],
        romShop: [
            {
                roms: [
                    128,
                    256,
                    512,
                ],
            },
        ],
        colorShop: [
            {
                colors: [
                    { image: "/src/assets/images/phones/iPhone 16 Plus White.jpg", name: "White"},
                    { image: "/src/assets/images/phones/iPhone 16 Plus Black.jpg", name: "Black"},
                    { image: "/src/assets/images/phones/iPhone 16 Plus Green.jpg", name: "Green"},
                    { image: "/src/assets/images/phones/iPhone 16 Plus Pink.jpg", name: "Pink"},
                    { image: "/src/assets/images/phones/iPhone 16 Blue.jpg", name: "Blue"}
                ],

            },
        ],
        prices: {
            128: 90000,
            256: 115000,
            512: 131000,
        },


    },
    {
        id: 4,
        rating: 85,
        image: "src/assets/images/phones/iPhone 16 Blue.jpg",
        title: "iPhone 16",
        configure: [
            {
                screen: '6.1" (2556x1179) OLED 60 Гц',
                ROM: 128,
                RAM: 8,
                camera: "двойная камера, основная 48 МП ",
                batery: "3561 мА·ч",
                processor: "A 18",
                colors: "Black, Green, Pink, White, Blue",
            },
        ],
        romShop: [
            {
                roms: [
                    128,
                    256,
                    512,
                ],
            },
        ],
        colorShop: [
            {
                colors: [
                    { image: "/src/assets/images/phones/iPhone 16 Blue.jpg", name: "Blue"},
                    { image: "/src/assets/images/phones/iPhone 16 Plus Black.jpg", name: "Black"},
                    { image: "/src/assets/images/phones/iPhone 16 Plus Green.jpg", name: "Green"},
                    { image: "/src/assets/images/phones/iPhone 16 Plus Pink.jpg", name: "Pink"},
                    { image: "/src/assets/images/phones/iPhone 16 Plus White.jpg", name: "White"}
                ],

            },
        ],
        prices: {
            128: 80000,
            256: 93000,
            512: 105000,
        },
        
    },
]

export default phonesData;