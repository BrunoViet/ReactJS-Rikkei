const initialState = {
    products: [
        {
            id: 1, name: 'Air Pods Pro',
            description: 'Pellentesque habitant morbi tristiqu egestas. Vestibulum tortor qdasd asdn iqw ua uaksd qasdbksi qowdha s iahsd iqw aiohandskjoq aoishadsbhqw ipjasdbbyqf uiakjsdnbqf r, facilisis luctus, metus',
            price: '12',
            imgUrl: 'https://th.bing.com/th/id/OIP.vWZHHanuMmVfFVwMlg_BVAHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7'
        },
        {
            id: 2,
            name: 'Macbook',
            description: 'Pellentesque habitant morbi tristiqu egestas. Vestibulum tortor qdasd asdn iqw ua uaksd qasdbksi qowdha s iahsd iqw aiohandskjoq aoishadsbhqw ipjasdbbyqf uiakjsdnbqf r, facilisis luctus, metus',
            price: '50',
            imgUrl: 'https://vcdn1-sohoa.vnecdn.net/2021/10/27/macbook-pro-2021-cnet-review-10-1635310578.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=blFE7QYIQZJpBywMOJE88Q'
        },
        {
            id: 3,
            name: 'Iphone 14 Promax',
            description: 'Pellentesque habitant morbi tristiqu egestas. Vestibulum tortor qdasd asdn iqw ua uaksd qasdbksi qowdha s iahsd iqw aiohandskjoq aoishadsbhqw ipjasdbbyqf uiakjsdnbqf r, facilisis luctus, metus',
            price: '25',
            imgUrl: 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-den-thumb-600x600.jpg'
        },
        {
            id: 4,
            name: 'Sam Sung Galaxy S22 Ultra',
            description: 'Pellentesque habitant morbi tristiqu egestas. Vestibulum tortor qdasd asdn iqw ua uaksd qasdbksi qowdha s iahsd iqw aiohandskjoq aoishadsbhqw ipjasdbbyqf uiakjsdnbqf r, facilisis luctus, metus',
            price: '20',
            imgUrl: 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_phantomblack_211119.jpg'
        }
    ]
}

export const listProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state
    }
}