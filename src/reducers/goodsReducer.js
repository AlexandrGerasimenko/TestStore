


 function GoodsReducer(state, action) {
    if (!state)
        return {
           Apple:  [
                {
                    name: "IPhone",
                    model: "IPhone xs max",
                    price: "1000$",
                    image: "https://hotline.ua/img/tx/178/178801055_s265.jpg"
                },{
                    name: 'IPad',
                    model: 'ipad 2019 pro',
                    price: '1200$',
                    image: 'https://hotline.ua/img/tx/182/182111387_s265.jpg'
                },
            ]
        }

   
    return state;
}

export default GoodsReducer