import {StyleSheet} from 'react-native';
const screen1Style = StyleSheet.create({
  cardContainer: {
    width: 343,
    height: 389,
    marginHorizontal: 16,
    marginTop: 51,
    position: 'absolute',
    marginBottom: 385,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEEAF3',
    elevation: 5,
    borderRadius: 5,
  },

  cardTitle: {
    color: '#333',
    marginLeft: 16,
    marginTop: 13,
    width: 'auto',
    height: 22,
    marginRight: 248,
    marginBottom: 790,
    // font-family: Avenir Next,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  headerCardContainer: {
    //     border-radius: 4px 4px 0px 0px;
    // background: linear-gradient(90deg, #6231AD 68.33%, #FE4190 145.75%);
    borderTopLeftRadius: 4,

    width: 341,
    height: 104,
    borderTopRightRadius: 4,
  },
});
export default screen1Style;
