import { Dimensions } from 'react-native';

const REFERENCE_WIDTH = 414;
const WINDOW = Dimensions.get('window');
const SCALE = WINDOW.width / REFERENCE_WIDTH;

export function rem(unit: number): number {
  return Math.round(unit * SCALE * 2) / 2;
}
