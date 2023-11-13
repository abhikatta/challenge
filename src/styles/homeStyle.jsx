const {StyleSheet} = require('react-native');

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    // converted opacity + bg color to rgba since opactity directly affects whole content too
    backgroundColor: 'rgba(98, 49, 173, 0.06)',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    opacity: 10,
    backgroundColor: '#FFF',
    width: 343,
    height: 105,
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#EEEAF3',
    borderWidth: 1,
    borderRadius: 5,
  },
  acheivementsTitle: {
    color: `#333`,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  acheivementsContent: {
    textAlign: 'left',
    width: '90%',
    color: 'black',
  },
  cardTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
  },
});

export default homeStyle;
