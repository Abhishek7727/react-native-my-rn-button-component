import type { StyleProp, ViewStyle, TextStyle } from "react-native";

/**
 * Type definitions for the reusable Button component
 */
export interface ButtonProps {
  /**
   * Text to display on the button
   */
  title: string;

  /**
   * Function to call when the button is pressed
   */
  onPress?: () => void;

  /**
   * Whether the button should be disabled
   */
  disabled?: boolean;

  /**
   * Optional custom container styles
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Optional custom text style
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Background color override
   */
  backgroundColor?: string;

  /**
   * Disabled background color override
   */
  disabledBackgroundColor?: string;

  /**
   * Text color override
   */
  textColor?: string;

  /**
   * Disabled text color override
   */
  disabledTextColor?: string;
}