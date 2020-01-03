import React from 'react'
import '../App.css';
import styled from 'styled-components';
import { Rating } from '@material-ui/lab';
import {Heart as OpenHeart} from 'styled-icons/fa-regular/Heart'
import {Heart as ClosedHeart} from 'styled-icons/fa-solid/Heart'

const ProductCard = (props) => {
    const { Name, Price, Discounted_Price, Description, Ratings, Favourite } = props.item
    const { userRating, userFavourited } = props;
    return (
             <Container>
		<Cover>
			<div className='iconParentContainer' onClick={userFavourited}>{Favourite? <RedHeart/> : <NormalHeart/>}</div>
		{/* Image */}
		<Image src={require('../assets/images/pizza.jpg')} />
		</Cover>

		<Content>
			{/* Title | Subtitle */}
            <Title>{Name}</Title>
            <Subtitle>{Description}</Subtitle>

			{/* Price Checker */}
			{Price ?  
			<PriceCaption>€ {Discounted_Price? Discounted_Price : Price}</PriceCaption> 
			: <>?</>} 
        	
			{/* Review Checker */}
			{Ratings ? 
			<Review>
                <Rating
          name="simple-controlled"
          value={Ratings}
          onChange={userRating}
          size="small"
          max={5}
        />
        	</Review> :
			null}

			{/* Upcoming Features */}
			<Extras>{props.children}</Extras>
			
		</Content>
	</Container>
    )
}

export default ProductCard;

const Container = styled.div`
	background: #fff;
	height: 260px;
	width: 150px;
	border-radius: 14px;
	margin: 18px;
	margin-top: 20px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.div`
	width: 100%;
	height: 100px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

const Image = styled.img`
	width: auto;
	height: 100%;
`;

const Content = styled.div`
    padding-left: 20px;
`;

const Title = styled.h1`
	color: #3c4560;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Arial'
}
`;
const Review = styled.span`
	padding-top: 5px;
	position: absolute;
    top: 24%;
`;

const Subtitle = styled.p`
	color : #b8b3c3;
	font-size: 12px;
	margin: 0;
	position: absolute;
    top: 19%;
`;

const RedHeart = styled(ClosedHeart)`
width: 1em;
height: 15%;
color: red
`;

const NormalHeart = styled(OpenHeart)`
width: 1em;
height: 15%;
color: white
`


const Extras = styled.div`
	padding-top: 5px;
	position: absolute;
    top: 32%;
`

const PriceCaption = styled.b`
	color: #666666;
	font-size: 15px;
    font-weight: 800;
    display: flex;
	padding-top:0px;
	top: 22%;
    position: absolute;
`;