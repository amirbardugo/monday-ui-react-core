import cx from "classnames";
import React, { forwardRef, useCallback, useRef } from "react";
import { BASE_SIZES, BASE_SIZES_VALUES } from "../../constants";
import useMergeRefs from "../../hooks/useMergeRefs";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import { COLOR_STYLES, COLOR_STYLES_VALUES, CONTENT_COLORS_VALUES } from "../../utils/colors-vars-map";
import NoColor from "../Icon/Icons/components/NoColor";
import ColorPickerContent from "./components/ColorPickerContent/ColorPickerContent";
import { COLOR_SHAPES, COLOR_SHAPES_VALUES, DEFAULT_NUMBER_OF_COLORS_IN_LINE } from "./ColorPickerConstants";
import { calculateColorPickerDialogWidth } from "./services/ColorPickerStyleService";
import "./ColorPicker.scss";
import { VibeComponentProps, VibeComponent } from "../../types";
import { NOOP } from "../../utils/function-utils";
export interface ColorPickerProps extends VibeComponentProps {
  value: string | string[] | CONTENT_COLORS_VALUES | CONTENT_COLORS_VALUES[]; //TODO - make sure this is correct
  onSave: (value: CONTENT_COLORS_VALUES[] | string[]) => any; //TODO - make sure this is correct
  ColorIndicatorIcon: ({ size, className }: { size?: string; className?: string }) => JSX.Element;
  SelectedIndicatorIcon: ({ size, className }: { size?: string; className?: string }) => JSX.Element;
  NoColorIcon: ({ size, className }: { size?: string; className?: string }) => JSX.Element;
  colorStyle?: "regular" | "selected";
  noColorText?: string;
  shouldRenderIndicatorWithoutBackground: boolean;
  isBlackListMode: boolean;
  colorsList: CONTENT_COLORS_VALUES[];
  isMultiselect: boolean;
  colorSize: BASE_SIZES_VALUES;
  numberOfColorsInLine: number;
  focusOnMount: boolean;
  colorShape: COLOR_SHAPES_VALUES;
  /**
   * Used to force the component render the colorList prop as is. Usually, this flag should not be used. It's intended only for edge cases.
   * Usually, only "monday colors" will be rendered (unless blacklist mode is used). This flag will override this behavior.
   */
  forceUseRawColorList: boolean;
  /**
   * Used to enable color name tooltip on each color in the component. it's incompatible with forceUseRawColorList flag.
   * When "tooltipContentByColor" is supplied, it will override the color name tooltip.
   *
   */
  showColorNameTooltip: boolean;
}

const ColorPicker: VibeComponent<ColorPickerProps> & {
  // Backward compatibility for enum naming
  COLOR_STYLES?: COLOR_STYLES_VALUES;
  sizes?: BASE_SIZES_VALUES;
  colorStyles?: COLOR_STYLES_VALUES;
  colorSizes?: BASE_SIZES_VALUES;
  colorShapes?: COLOR_SHAPES_VALUES;
} = forwardRef(
  (
    {
      className,
      onSave = NOOP,
      value = "",
      noColorText,
      colorStyle = COLOR_STYLES.REGULAR,
      ColorIndicatorIcon,
      SelectedIndicatorIcon,
      shouldRenderIndicatorWithoutBackground,
      NoColorIcon = NoColor,
      isBlackListMode = true,
      colorsList = [],
      isMultiselect,
      colorSize = BASE_SIZES.MEDIUM,
      numberOfColorsInLine = DEFAULT_NUMBER_OF_COLORS_IN_LINE,
      focusOnMount,
      colorShape = COLOR_SHAPES.SQUARE,
      forceUseRawColorList,
      showColorNameTooltip
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const onChange = useCallback(onSave, [onSave]);

    const width = calculateColorPickerDialogWidth(colorSize, numberOfColorsInLine);

    return (
      <DialogContentContainer
        ref={mergedRef}
        className={cx("color-picker--wrapper", "color-picker-dialog-content", className)}
        ariaLabelledby="Color Picker Dialog"
        ariaDescribedby="Pick color"
        style={{ width }}
      >
        <ColorPickerContent
          onValueChange={onChange}
          value={value}
          noColorText={noColorText}
          shouldRenderIndicatorWithoutBackground={ColorIndicatorIcon && shouldRenderIndicatorWithoutBackground}
          colorStyle={colorStyle}
          ColorIndicatorIcon={ColorIndicatorIcon}
          SelectedIndicatorIcon={SelectedIndicatorIcon}
          NoColorIcon={NoColorIcon}
          colorsList={colorsList}
          isBlackListMode={isBlackListMode}
          isMultiselect={isMultiselect}
          colorSize={colorSize}
          numberOfColorsInLine={numberOfColorsInLine}
          focusOnMount={focusOnMount}
          colorShape={colorShape}
          forceUseRawColorList={forceUseRawColorList}
          showColorNameTooltip={showColorNameTooltip}
        />
      </DialogContentContainer>
    );
  }
);

Object.assign(ColorPicker, {
  // Backward compatibility for enum naming
  COLOR_STYLES: COLOR_STYLES,
  sizes: BASE_SIZES,
  colorStyles: COLOR_STYLES,
  colorSizes: BASE_SIZES,
  colorShapes: COLOR_SHAPES
});

export default ColorPicker;