import {StyleSheet, Platform, Dimensions} from 'react-native';
import * as color from './Colors'
import * as dimens from './Dimens'

var screen = Dimensions.get('window');
export default StyleSheet.create({
  toolbar: {
    backgroundColor: color.TOOLBAR
  },
  containerParent: {
    backgroundColor: color.CONTAINER_PARENT,
    flexDirection: 'column',
    flex: 1,
    padding: dimens.PADDING_CONTAINER_PARENT
  },
  containerSubParent: {
    backgroundColor: color.CONTAINER_SUB_PARENT,
    flexDirection: 'column',
    padding: dimens.PADDING_CONTAINER_PARENT
  },
  containerBottomBorder: {
    backgroundColor: color.CONTAINER_MAIN,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: color.BORDER
  },
  containerModal: {
    justifyContent: 'center',
    borderRadius: dimens.RADIUS_CONTAINER_BODY,
    shadowRadius: dimens.RADIUS_CONTAINER_BODY,
    width: screen.width - 80,
    height: null
  },
  itemBottomBorder: {
    backgroundColor: color.TRANSPARENT,
    flexDirection: 'column',
    padding: dimens.PADDING_ITEM_TODO,
    borderBottomWidth: 2,
    borderBottomColor: color.TOOLBAR
  },
  itemNoBorder: {
    backgroundColor: color.TRANSPARENT,
    flexDirection: 'column',
    alignItems: 'center'
  },
  textTitle: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    color: color.FONT_DEFAULT
  },
  textHeader1: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: dimens.FONT_SIZE_HEADER1,
    color: color.FONT_DEFAULT
  },
  textCaption: {
    fontFamily: 'Helvetica',
    fontSize: dimens.FONT_SIZE_CAPTION,
    color: color.FONT_DEFAULT
  },
  textCaptionBold: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: dimens.FONT_SIZE_CAPTION,
    color: color.FONT_DEFAULT
  },

  textCaptionGreen: {
    fontFamily: 'Helvetica',
    fontSize: dimens.FONT_SIZE_CAPTION,
    color: color.FONT_DEFAULT
  },
  textCaptionRed: {
    fontFamily: 'Helvetica',
    fontSize: dimens.FONT_SIZE_CAPTION,
    color: color.FONT_DEFAULT
  },
  textInputDefault: {
    fontFamily: 'Helvetica',
    fontSize: dimens.FONT_SIZE_CAPTION,
    color: color.FONT_DEFAULT,
    paddingBottom: Platform.OS === 'ios'
      ? 3
      : 11
  }
});
