import { StyleSheet } from 'react-native';

const colors = {
  white: '#FFFFFF',
  lightGray: '#FEFEFE',
  borderGray: '#E1E1E1',
  mediumGray: '#9E9E9E',
  darkGray: '#263238',
  black: '#000000',
  primary: '#525252',
  secondary: '#6C6C6C',
  warning: '#FFC700',
  bluePill: '#407B61',
  red: 'DF5753'
};

const text = StyleSheet.create({
  regular: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.mediumGray
  },
  bold: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: colors.darkGray
  },
  primaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.black
  },
  loginTitle: {
    fontSize: 36,
    color: colors.white,
    textTransform: 'uppercase',
    marginBottom: 50,
    fontWeight: '400'
  }
});

const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: colors.primary
  },
  primaryButton: {
    width: '100%',
    height: 50,
    backgroundColor: colors.warning,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  loginCard: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.secondary,
    borderRadius: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  passwordGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    minWidth: '100%'
  },
  textInput: {
    minWidth: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 4,
    padding: 10,
    backgroundColor: colors.lightGray,
    fontSize: 16
  },
  toggler: {
    margin: -40
  },
  eyes: {
    width: 30,
    height: 30
  }
});

export { colors, theme, text };
