import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  selectCont: {
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  mainContainer: {
    flex: 1,
    padding: 8,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginVertical: 5,
  },
  picker: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 4,
    borderRadius: 4,
  },
  cardView: {
    minHeight: 60,
    marginVertical: 2,
    padding: 8,
    elevation: 0.1,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 4,
    flexGrow: 1,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
  },
  growCenterCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
