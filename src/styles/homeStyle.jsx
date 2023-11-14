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
    marginVertical: 16,
    backgroundColor: '#FFF',
    width: 343,
    height: 105,
    alignItems: 'center',
    borderColor: '#EEEAF3',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  acheivementsTitle: {
    color: `#333`,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    marginBottom: 8,
    marginRight: 4,
  },
  acheivementTimesAchieved: {
    color: '#FFA600',
    // font-family: Montserrat;
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  acheivementsContent: {
    textAlign: 'left',
    color: '#727682',
    // add later:
    // font-family: Montserrat;
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  cardTextContainer: {
    width: 235,
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'left',
  },
});

export default homeStyle;
