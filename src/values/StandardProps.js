import {StyleSheet, Platform} from 'react-native';
import styles from './StandardStyles';
import * as color from './Colors'
import * as dimens from './Dimens'

export const PROPS_MODAL_ONE_INPUT = {
  style: styles.containerModal,
  position: 'center',
  backdrop: true
};

export const PROPS_TEXT_INPUT_TITLE = {
  style: [
    styles.textInputDefault, {
      fontSize: dimens.FONT_SIZE_TITLE,
      fontWeight: 'bold'
    }
  ],
  placeholderTextColor: color.FONT_PLACE_HOLDER,
  autoCapitalize: 'words',
  ...Platform.select({
    ios: {
      borderBottomWidth: 1,
      borderBottomColor: color.BORDER
    },
    android: {
      underlineColorAndroid: color.BORDER
    }
  })
};

export const PROPS_TEXT_INPUT = {
  style: styles.textInputDefault,
  placeholderTextColor: color.FONT_PLACE_HOLDER,
  autoCapitalize: 'sentences',
  ...Platform.select({
    ios: {
      borderBottomWidth: 1,
      borderBottomColor: color.BORDER
    },
    android: {
      underlineColorAndroid: color.BORDER
    }
  })

};

export const PROPS_TEXT_INPUT_NOLINE = {
  style: [
    styles.textInputDefault, {
      width: "100%",
      textAlignVertical: 'top',
      paddingBottom: 0,
      paddingTop: 0
    }
  ],
  placeholderTextColor: color.FONT_PLACE_HOLDER,
  underlineColorAndroid: 'transparent',
  autoCapitalize: 'sentences'
};

export const PROPS_TEXT_INPUT_BUDGET = {
  style: [
    styles.textInputDefault, {
      color: color.FONT_DEBIT,
      minWidth: 39,
      fontWeight: 'bold',
      fontSize: dimens.FONT_SIZE_HEADER1,
      textAlignVertical: 'top',
      paddingBottom: 0,
      paddingTop: 0
    }
  ],
  placeholderTextColor: color.FONT_DEBIT,
  underlineColorAndroid: 'transparent',
  keyboardType: 'numeric'
};

export const PROPS_TOUCHABLE_HIGHTLIGHT_BACKGROUND = {
  style: {
    padding: dimens.PADDING_TOUCHABLE_HIGHLIGHT_BACKGROUND
  },
  underlayColor: color.HIGHLIGHT_BACKGROUND

}

export const PROPS_TOUCHABLE_HIGHTLIGHT = {
  style: {
    padding: dimens.PADDING_TOUCHABLE_HIGHLIGHT_BACKGROUND
  },
  underlayColor: color.HIGHLIGHT_ICON

}

export const PROPS_FLAT_LIST = {
  keyboardShouldPersistTaps: 'always',
  keyExtractor: (item, index) => index + ''
};

export const PROPS_DATE_PICKER = {
  mode: "date",
  format: "YYYY-MM-DD",
  confirmBtnText: "Confirm",
  cancelBtnText: "Cancel",
  customStyles: {
    dateInput: {
      borderWidth: 0,
      alignItems: 'flex-start'
    },
    dateIcon: {
      width: 0,
      height: 0
    },
    dateText: {
      color: color.FONT_DEFAULT,
      fontSize: dimens.FONT_SIZE_CAPTION,
      fontFamily: 'Helvetica'
    },
    placeholderText: {
      color: color.FONT_PLACE_HOLDER
    }
  }
};
