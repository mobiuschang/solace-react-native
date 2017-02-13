import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { BlurView } from 'react-native-blur';
import { mapLabels, sortData } from '../../utils/chart';
import BarGraphSlides from '../../components/BarGraphSlides';


const MonthlyAverageChart = ({ personalityData, personalityLabels, toneData, toneLabels, imageId }) => {
  return (
    <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${imageId}.jpg`}} style={styles.img} >
      <BlurView blurType="light" blurAmount={50} style={styles.container}>
        <View style={styles.container}>
          <BarGraphSlides
          personalityData={personalityData}
          personalityLabels={personalityLabels}
          toneData={toneData}
          toneLabels={toneLabels}
          />
        </View>
      </BlurView>
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent'
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'cover',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});


/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ recordings, admin }) => {
  const monthlyAvgPersonalityArray = recordings.monthlyAvgRecordings.personality;
  const monthlyAvgToneArray = recordings.monthlyAvgRecordings.tone;

  const personalityData = sortData(monthlyAvgPersonalityArray);
  const toneData = sortData(monthlyAvgToneArray);
  const personalityLabels = mapLabels(monthlyAvgPersonalityArray);
  const toneLabels = mapLabels(monthlyAvgToneArray);

  return {
    personalityData,
    toneData,
    personalityLabels,
    toneLabels,
    imageId: admin.imageId
  };
};

export default connect(mapStateToProps)(MonthlyAverageChart);
