const laptopsData = [
    {
        id: 1,
        rating: 99,
        image: "/src/assets/images/laptops/MacBook Space Black.jpg",
        title: "Apple MacBook Pro 16",

        configure: [
            {
                screen: '16.2" (3456×2234) Liquid Retina XDR 120 Гц',
                ROM: 1,
                RAM: 48,
                videocard: "Apple graphics 40-core, SMA",
                processor: "Apple M3 Max",
                colors: "Space Black, Space Gray",
                weight: "2.15 кг"
            },
        ],
        romShop: [
            {
                roms: [

                    1,
                ],
            },
        ],
        colorShop: [
            {
                colors: [
                    { image: "/src/assets/images/laptops/MacBook Space Black.jpg", name: "Space Black" },
                    { image: "/src/assets/images/laptops/MacBook Space Gray.jpg", name: "Space Gray" },
                ]
            }
        ],
        prices: {
            1: 550000
        },


    },
    {
        id: 2,
        rating: 99,
        image: "/src/assets/images/laptops/Asus ROG zephyrus .jpg",
        title: "Asus ROG Zephyrus ",

        configure: [
            {
                screen: '14" (2560x1600) IPS 165 Гц',
                ROM: 1,
                RAM: 32,
                videocard: "RTX 4090, 8 ГБ",
                processor: "AMD Ryzen 9 7940HS",
                colors: "White",
                weight: "1.75 кг"
            },
        ],
        romShop: [
            {
                roms: [
                    1,
                ],
            },
        ],
        colorShop: [
            {
                colors: [
                    { image: "/src/assets/images/laptops/Asus ROG zephyrus .jpg", name: "White" },
                ]
            }
        ],
        prices: {
            1: 462000
        },

        
    },
    {
        id: 3,
        rating: 78,
        image: "/src/assets/images/laptops/MacBook Air 13 Space Gray.jpg",
        title: "MacBook Air 13",

        configure: [
            {
                screen: '13.3 " (2560x1600) IPS 60 Гц',
                ROM: 256,
                RAM: 8,
                videocard: "Встроенная",
                processor: "Apple M1",
                colors: "Space Gray",
                weight: "1.29 кг"
            },
        ],
        romShop: [
            {
                roms: [
                    256,
                ],
            },
        ],
        colorShop: [
            {
                colors: [
                    { image: "/src/assets/images/laptops/MacBook Air 13 Space Gray.jpg", name: "Space Gray" },
                ]
            }
        ],
        prices: {
            256: 78000,
        },
    },
    {
        id: 4,
        rating: 84,
        image: "/src/assets/images/laptops/Redmi Book Pro 14.jpg",
        title: "RedmiBook Pro 14",

        configure: [
            {
                screen: '16 " (2560x1600) IPS 120 Гц',
                ROM: 1,
                RAM: 16,
                videocard: "Intel Iris Xe Graphics, SMA",
                processor: "Intel Core i5 13500H",
                colors: "Gray",
                weight: "1.68 кг"
            },
        ],
        romShop: [
            {
                roms: [
                    1,
                ],
            },
        ],
        colorShop: [
            {
                colors: [
                    { image: "/src/assets/images/laptops/Redmi Book Pro 14.jpg", name: "Gray" },
                ]
            }
        ],
        prices: {
            1: 88000,
        },
    },
    {
        id: 5,
        rating: 71,
        image: "/src/assets/images/laptops/Honor MagicBook x16.jpg",
        title: "Honor MagicBook x16",

        configure: [
            {
                screen: '16 " (1920x1200) IPS 60 Гц',
                ROM: 1,
                RAM: 16,
                videocard: "Intel Iris Xe Graphics, SMA",
                processor: "Intel Core i5 12450H",
                colors: "Gray",
                weight: "1.68 кг"
            },
        ],
        romShop: [
            {
                roms: [
                    512,
                    1,
                    2, 
                ],
            },
        ],
        colorShop: [
            {
                colors: [
                    { image: "/src/assets/images/laptops/Honor MagicBook x16.jpg", name: "Gray" },
                ]
            }
        ],
        prices: {
            512: 66000,
            1: 70000,
            2: 80000
        },
    },
]



export default laptopsData
