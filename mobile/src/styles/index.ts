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
  danger: '#dc3545'
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
  },
  movieTitle: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 27,

    color: colors.white
  },
  movieYear: {
    marginBottom: 3,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,

    color: colors.warning
  },
  movieSubTitle: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,

    color: colors.white
  },
  movieSinopse: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 22,

    color: colors.mediumGray
  },
  userName: {
    marginLeft: 10,
    color: colors.white,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22
  },
  saveBtn: {
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22
  }
});

const theme = StyleSheet.create({
  loadContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary
  },
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
  },
  movieCardContainer: {
    width: '100%',
    marginBottom: 40,
    backgroundColor: colors.secondary,
    borderRadius: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  movieCardContent: {
    paddingTop: 10,
    paddingBottom: 50,
    paddingHorizontal: 15
  },
  movieCardImage: {
    width: '100%',
    height: 200,
    marginTop: 26
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: colors.primary
  },
  movieDetailsTopContent: {
    padding: 20,
    borderRadius: 10,
    width: '100%',
    backgroundColor: colors.secondary,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  movieDetailsImage: {
    width: '100%',
    height: 200
  },
  sinopseContainer: {
    marginTop: 16,
    color: colors.mediumGray,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: 10
  },
  alertDanger: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 25,
    borderRadius: 4,
    width: '100%',
    backgroundColor: colors.danger,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  movieDetailsBottomContent: {
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 4,
    width: '100%',
    backgroundColor: colors.secondary,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  movieDetailsCommentsContainer: {
    marginBottom: 14
  },
  movieDetailsIdentification: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  movieDetailsComments: {
    padding: 10,
    marginTop: 10,
    textAlign: 'justify',
    color: colors.mediumGray,
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: 4
  },
  movieDetailsCenterContent: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 25,
    borderRadius: 4,
    width: '100%',
    backgroundColor: colors.secondary,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  saveBtn: {
    width: '100%',
    height: 50,
    backgroundColor: colors.warning,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  formInput: {
    marginBottom: 20,
    width: '100%',
    height: 50,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderRadius: 4,
    padding: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 22
  }
});

const nav = StyleSheet.create({
  leftText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 33
  },
  homeBtn: {
    height: '100%',
    padding: 10,
    justifyContent: 'center'
  },
  logoutText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    textTransform: 'uppercase'
  },
  logoutBtn: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  }
});

export { colors, theme, text, nav };
