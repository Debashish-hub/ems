const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export enum ColorDao {
  topPrimaryGradient = '#E31937',
  bottomPrimaryGradient = '#F49332',
  topBackgroundGradient = '#1A1F24',
  bottomBackgroundGradient = '#5E6166',
}
