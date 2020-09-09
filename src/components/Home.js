import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_img' 
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg' 
                alt=''/>
                <div className='home_row'>
                    <Product 
                        id='1'
                        title='Nintendo Switch 32GB Console Video Games' 
                        price={448.99} 
                        rating={4} 
                        image='https://images-na.ssl-images-amazon.com/images/I/417kf2GJBuL._AC_US218_.jpg'
                    />
                    <Product 
                        id='2'
                        title='Super Smash Bros. Ultimate - Nintendo Switch' 
                        price={42} 
                        rating={5} 
                        image='https://images-na.ssl-images-amazon.com/images/I/513ttWDr7eL._AC_US218_.jpg'
                    />
                </div>
                <div className='home_row'>
                    <Product 
                        id='3'
                        title='The Legend of Zelda: Breath of the Wild - Nintendo Switch' 
                        price={59.99} 
                        rating={5} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51N9KXLFicL._AC_US218_.jpg'
                    />
                    <Product 
                        id='4'
                        title='Animal Crossing: New Horizons - Nintendo Switch' 
                        price={42.69} 
                        rating={5} 
                        image='https://images-na.ssl-images-amazon.com/images/I/511zIZkX7CL._AC_US218_.jpg'
                    />
                    <Product 
                        id='5'
                        title='Mario Kart 8 Deluxe - Nintendo Switch' 
                        price={43} 
                        rating={5} 
                        image='https://images-na.ssl-images-amazon.com/images/I/515IAQsQGjL._AC_US218_.jpg'
                    />
                </div>
                <div className='home_row'>
                    <Product 
                        id='6'
                        title='Ring Fit Adventure - Nintendo Switch' 
                        price={79.99} 
                        rating={5} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51ZIQxjxTxL._AC_US218_.jpg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
