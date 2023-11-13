const {StyleSheet} = require('react-native');

const profileStyle = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '10%',
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
    borderWidth: 2,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default profileStyle;
