import {StyleSheet} from 'react-native';

const popUpComponentStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: '100%',
  },
  title: {
    top: 14,
    color: '#333',
    left: 16,
    right: 158,
    bottom: 404,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
  },
  entryTickets: {
    top: 14,
    color: '#727682',
    left: 16,
    right: 158,
    bottom: 404,
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '600',
  },
  ticketContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticket: {
    fontFamily: 'Montserrat',
    paddingVertical: 8,
    paddingBottom: -10,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  middleTicketContainer: {
    height: 36,
    width: 343,
    marginVertical: 100,
    position: 'absolute',
    backgroundColor: 'rgba(98, 49, 173, 0.1)',
  },
  submitButton: {
    borderRadius: 33,
    height: 40,
    width: 343,
    bottom: 40,
    justifyContent: 'center',
    backgroundColor: '#6231AD',
  },
});

export default popUpComponentStyle;
