import React from 'react'
import { SafeAreaView, Text, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components';
import { Rating } from 'react-native-ratings'
import FavR from "../assets/fav-red.png"
import FavW from "../assets/fav-white.png"




const product = (props) => {
	const {Name, Price, Discounted_Price, Description, imgUrl, Ratings, Favourite} = props.item
	const { onStartRating, handleFavClick } = props
    return (
<SafeAreaView>
  <Container>
		<Cover>
		{/* Favourite Icon */}
		<TouchableWithoutFeedback onPress={handleFavClick}>{Favourite ? <Icon source={FavR}/> : <Icon source ={FavW}/>}</TouchableWithoutFeedback>
		{/* Image */}
		<Image source={require('../assets/Images/pizza.jpg')} />
		</Cover>

		<Content>
			{/* Title | Subtitle */}
            <Title>{Name}</Title>
            <Subtitle>{Description}</Subtitle>

			{/* Price Checker */}
			{Price ?  
			<PriceCaption>€ {Discounted_Price? Discounted_Price : Price}</PriceCaption> 
			: <Text>?</Text>} 
        	
			{/* Review Checker */}
			{Ratings ? 
			<Review>
			<Rating ratingCount={5} startingValue={Ratings} imageSize={14} onStartRating={onStartRating}/>
        	</Review> :
			null}

			{/* Upcoming Features */}
			<Extras>{props.children}</Extras>
			
		</Content>
	</Container>
</SafeAreaView>
    )
}

export default product;

const Container = styled.View`
	background: #fff;
	height: 260px;
	width: 150px;
	border-radius: 14px;
	margin: 18px;
	margin-top: 20px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
	width: 100%;
	height: 120px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
`;

const Icon = styled.Image`
width: 15%;
height: 15%
position: absolute;
zIndex: 99999;
display: flex 
top: 10%;
left: 70%;
`;

const Content = styled.View`
	padding-top: 10px;
	flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
	height: 60px;
`;

const Title = styled.Text`
	color: #3c4560;
	font-size: 20px;
    font-weight: 600;
    font-family: 'Arial'
`;
const Review = styled.View`
	padding-top: 5px;
`;

const Subtitle = styled.Text`
	color : #b8b3c3;
	font-size: 12px
`;

const Extras = styled.Text`
	padding-top: 10px;
	font-weight: 300;
`
const PriceCaption = styled.Text`
	color: #666666;
	font-size: 15px;
	font-weight: 800;
	margin-top: 5px;
`;
