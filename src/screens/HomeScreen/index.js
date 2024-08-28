import React, {  useRef, useState } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native'
import styles from './style'
import { bank, banner, casinoImage, game1, game2, gpay, paytm, phonepe, tabLeftIcon, teenPati, upi } from '../../assets/images'
import CustomStatusBar from '../../components/CustomStatusBar'
import CustomHeader from '../../components/CustomHeader'
import ModelView from '../../components/ModelView'
import IndianCasinoCard from '../../components/IndianCasinoCard'
import GamePlayCard from '../../components/GamePlayCard'
import GameList from '../../components/GameList'




const HomeScreen = () => {

  const casinowords = ['Casino Home', 'Slots', 'Live Casion', 'New Release', 'Recommended', 'Table Game', 'Black Jack', 'Roule',];
  const sportData = ['Sports Home', 'Live', 'Rules', 'Sport Betting']
  const aboutData = ['News', 'Work with us', 'Business Contacts', 'Help Desk', 'Verify Representative']
  const bankOptions = [upi, phonepe, paytm, gpay, bank]
  const gameOptions = [game1, game2,game1, game1, game2,game1,game1, game2,game1,game2,game1,game1, game2,game1]
  const tabData = ['LIVE', 'SPORTS', 'CASINO', 'LIVE CASINO', 'EURO 24', 'AVIATOR',];

  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToNext = () => {
    if (currentIndex < sportData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const itemWidth = Dimensions.get('window').width / 4; // assuming 4 items are fully visible at once
    const index = Math.floor(offsetX / itemWidth);
    setCurrentIndex(index);
  };

  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const casino = chunkArray(casinowords, 4);
  const sport = chunkArray(sportData, 4);
  const bankOptionData = chunkArray(bankOptions, 5);
  const about = chunkArray(aboutData, 3);
  const gameOption =  chunkArray(gameOptions,5) 

  const renderTabItem = ({ item }) => (
    <View style={styles.tabContainer}>
      <Text style={styles.word}>{item}</Text>
    </View>
  );

  const renderTabItemFlatlist = () => {
    return (
      <View style={styles.viewContainer}>
        <FlatList
          ref={flatListRef}
          data={tabData}
          renderItem={renderTabItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          getItemLayout={(data, index) => (
            { length: Dimensions.get('window').width / 4, offset: (Dimensions.get('window').width / 4) * index, index }
          )}
          style={styles.list}
        />
        {currentIndex < sportData.length - 1 && (
          <TouchableOpacity style={styles.arrowButton} onPress={scrollToNext}>
            <Image style={styles.tabArrowIcon} source={tabLeftIcon} />
          </TouchableOpacity>
        )}
      </View>
    )
  }
  const renderHeader = () => {
    return (
      <View>
        <CustomHeader />
      </View>
    )
  }
  const renderAdsBanner = () => {
    return (
      <View style={styles.bannerView}>
        <Image style={styles.bannerStyle} source={banner} />
      </View>
    )
  }


  const renderCategoryInsideGame = () => {
    return (
      <View style={styles.categoryContainer}>
        <View style={styles.rowLayout}>
          <Image
            source={casinoImage}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Live Casino</Text>
            <Text style={styles.subTitle}>1254 Games</Text>
          </View>
        </View>
      </View>
    )
  }



  const renderFeatureGame=()=>{
    return(
      <View style={styles.featureGameContainer}>
      <Text style={styles.playTextStyle}>PLAY OUR</Text>
      <Text style={styles.featuredTextStyle}>FEATURED GAME</Text>
      {gameOption.map((item, index) => (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View key={index} style={styles.rowGameLayout}>
          {item.map((item, i) => (
            <Image key={i} style={styles.imgeStyle} source={item} />
          ))}
        </View>
        </ScrollView>
      ))}
    </View>
    )
  }

  const renderGameList = () => {
    return(
      <GameList />
    )
  }

  const renderModel = () => {
    return (
      <ModelView />
    )
  }

  const renderGameCard=()=>{
    return(
      <GamePlayCard/>
    )
  }

  const renderCasinoCard = () => {
    return (
      <IndianCasinoCard />
    )
  }

 
  const renderCasino = () => {
    return (
      <View style={styles.wordContainer}>
        <Text style={styles.casinoTitle}>Casino</Text>
        {casino.map((item, index) => (
          <View key={index} style={styles.row}>
            {item.map((word, i) => (
              <Text key={i} style={styles.word}>
                {word}
              </Text>
            ))}
          </View>
        ))}
      </View>
    )
  }

  const renderSports = () => {
    return (
      <View style={styles.wordContainer}>
        <Text style={styles.casinoTitle}>Sports</Text>
        {sport.map((item, index) => (
          <View key={index} style={styles.row}>
            {item.map((word, i) => (
              <Text key={i} style={styles.word}>
                {word}
              </Text>
            ))}
          </View>
        ))}
      </View>
    )
  }

  const renderBank = () => {
    return (
      <View style={styles.wordContainer}>
        <Text style={styles.casinoTitle}>Easy Payment Options</Text>
        {bankOptionData.map((item, index) => (
          <View key={index} style={styles.row}>
            {item.map((item, i) => (
              <Image key={i} style={styles.imageContainer} source={item} />
            ))}
          </View>
        ))}
      </View>
    )
  }

  const renderAbout = () => {
    return (
      <View style={styles.wordContainer}>
        <Text style={styles.casinoTitle}>About Us</Text>
        {about.map((item, index) => (
          <View key={index} style={styles.row}>
            {item.map((word, i) => (
              <Text key={i} style={styles.word}>
                {word}
              </Text>
            ))}
          </View>
        ))}
      </View>
    )
  }

  const renderCopyRightText = () => {
    return (
      <View>
        <Text style={styles.buttonText}>Welcome to Brandname, the ultimate destination for safe, exciting, and profitable online betting! At Brandna,e, we are committed to providing our users with the highest level of security, ensuring your personal information and funds are always protected with state-of-the-art encryption technology.</Text>
        <Text style={styles.copyRightText}>Copyright ©2024 BRANDNAME. ALL RIGHTS RESERVED</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomStatusBar />
        {renderHeader()}
        {renderTabItemFlatlist()}
        {renderAdsBanner()}
        {renderCategoryInsideGame()}
        {renderFeatureGame()}
        {renderGameList()}
        {renderModel()}
        {renderGameCard()}
        {renderCasinoCard()}
        {renderCasino()}
        {renderSports()}
        {renderBank()}
        {renderAbout()}
        {renderCopyRightText()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen



