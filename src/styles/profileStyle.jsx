const {StyleSheet} = require('react-native');

const profileStyle = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    justifyContent: 'space-between',

    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '20%',
    marginHorizontal: '3%',
    width: '94%',
    height: 'auto',
  },
  headerTitle: {color: '#727682'},
  profileImg: {width: 75, height: 75, borderRadius: 75},
  messages: {
    flexDirection: 'column',
  },
  messageCount: {
    backgroundColor: '#6231AD',
    textAlign: 'center',
    marginLeft: 16,
    zIndex: 10,
    bottom: -8,
    width: 16,
    height: 16,
    borderRadius: 16,
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#FFFFFF',
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editPFPButton: {
    marginLeft: 45,
    bottom: 20,

    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#EEEAF3',
  },
  editPFP: {
    borderRadius: 20,
    borderWidth: 1,
    // for centing the icon:
    paddingLeft: 2,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowStarThing: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: -15,
    zIndex: 4,
  },
  description: {
    width: 343,
    color: '#727682',
    // fontFamily: 'Montserrat',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  logoutButton: {
    // width: 'auto',
    //  height: 'auto',
    alignItems: 'center',
    marginVertical: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  statistic: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  statsTitle: {
    flexDirection: 'column',
    textAlign: 'center',
    marginHorizontal: 10,
    color: 'black',
  },
  innerStatistic: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 10,
  },
  statsPercentage: {color: 'black', fontSize: 24, marginLeft: 10},
});

export default profileStyle;
