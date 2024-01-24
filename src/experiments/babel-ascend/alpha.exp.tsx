import * as React from "react";
import styled from "styled-components";
import { dl } from "./pcf-dl";

export class DesignLanguageExperiment extends React.Component<any, any> {
  render() {
    return (
      <StyledSection>
        <h2>1 Base properties</h2>

        <h3>1.1 Fonts</h3>
        <code>dl.base.font.landing_48_600</code>
        <div style={{ font: dl.base.font.landing_48_600 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font.subheader_34_600</code>
        <div style={{ font: dl.base.font.subheader_34_600 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font.pageheader_24_600</code>
        <div style={{ font: dl.base.font.pageheader_24_600 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font.sectiontitle_20_600</code>
        <div style={{ font: dl.base.font.sectiontitle_20_600 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font.smalltitle_16_600</code>
        <div style={{ font: dl.base.font.smalltitle_16_600 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font.lrgbody_16_400</code>
        <div style={{ font: dl.base.font.lrgbody_16_400 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font.body_14_600</code>
        <div style={{ font: dl.base.font.body_14_600 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font.body_14_400</code>
        <div style={{ font: dl.base.font.body_14_400 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font.cap_12_600</code>
        <div style={{ font: dl.base.font.cap_12_600 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font.cap_12_400</code>
        <div style={{ font: dl.base.font.cap_12_400 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font.button_14_600</code>
        <div style={{ font: dl.base.font.button_14_600 }}>The quick brown fox jumps over the lazy dog</div>

        <h3>1.2 Font family</h3>
        <code>dl.base.font_family.segoe_ui</code>
        <div style={{ fontFamily: dl.base.font_family.segoe_ui }}>The quick brown fox jumps over the lazy dog</div>

        <h3>1.3 Font sizes</h3>
        <code>dl.base.font_size.px48</code>
        <div style={{ fontSize: dl.base.font_size.px48 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font_size.px34</code>
        <div style={{ fontSize: dl.base.font_size.px34 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font_size.px24</code>
        <div style={{ fontSize: dl.base.font_size.px24 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font_size.px20</code>
        <div style={{ fontSize: dl.base.font_size.px20 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font_size.px16</code>
        <div style={{ fontSize: dl.base.font_size.px16 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font_size.px14</code>
        <div style={{ fontSize: dl.base.font_size.px14 }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font_size.px12</code>
        <div style={{ fontSize: dl.base.font_size.px12 }}>The quick brown fox jumps over the lazy dog</div>

        <h3>1.4 Font weights</h3>
        <code>dl.base.font_weight.semibold</code>
        <div style={{ fontWeight: dl.base.font_weight.semibold }}>The quick brown fox jumps over the lazy dog</div>
        <code>dl.base.font_weight.normal</code>
        <div style={{ fontWeight: dl.base.font_weight.normal }}>The quick brown fox jumps over the lazy dog</div>

        <h3>1.5 Box shadows</h3>
        <code>dl.base.box_shadow.box_shadow_1</code>
        <div style={{ boxShadow: dl.base.box_shadow.box_shadow_1 }}>&nbsp;</div>
        <code>dl.base.box_shadow.box_shadow_2</code>
        <div style={{ boxShadow: dl.base.box_shadow.box_shadow_2 }}>&nbsp;</div>
        <code>dl.base.box_shadow.box_shadow_3</code>
        <div style={{ boxShadow: dl.base.box_shadow.box_shadow_3 }}>&nbsp;</div>
        <code>dl.base.box_shadow.box_shadow_4</code>
        <div style={{ boxShadow: dl.base.box_shadow.box_shadow_4 }}>&nbsp;</div>

        <h3>1.6 Colors</h3>
        <code>dl.base.color.grey_10</code>
        <div style={{ backgroundColor: dl.base.color.grey_10 }}>&nbsp;</div>
        <code>dl.base.color.grey_20</code>
        <div style={{ backgroundColor: dl.base.color.grey_20 }}>&nbsp;</div>
        <code>dl.base.color.grey_30</code>
        <div style={{ backgroundColor: dl.base.color.grey_30 }}>&nbsp;</div>
        <code>dl.base.color.grey_40</code>
        <div style={{ backgroundColor: dl.base.color.grey_40 }}>&nbsp;</div>
        <code>dl.base.color.grey_50</code>
        <div style={{ backgroundColor: dl.base.color.grey_50 }}>&nbsp;</div>
        <code>dl.base.color.grey_60</code>
        <div style={{ backgroundColor: dl.base.color.grey_60 }}>&nbsp;</div>
        <code>dl.base.color.grey_90</code>
        <div style={{ backgroundColor: dl.base.color.grey_90 }}>&nbsp;</div>
        <code>dl.base.color.grey_130</code>
        <div style={{ backgroundColor: dl.base.color.grey_130 }}>&nbsp;</div>
        <code>dl.base.color.grey_150</code>
        <div style={{ backgroundColor: dl.base.color.grey_150 }}>&nbsp;</div>
        <code>dl.base.color.grey_160</code>
        <div style={{ backgroundColor: dl.base.color.grey_160 }}>&nbsp;</div>
        <code>dl.base.color.grey_190</code>
        <div style={{ backgroundColor: dl.base.color.grey_190 }}>&nbsp;</div>

        <h2>2 Control properties</h2>
        <h3>2.1 Button</h3>
        <code>button/disabled</code>
        <div>
          <button
            style={{
              background: dl.control.button._disabled.background_color,
              border: dl.control.button.border,
              borderRadius: dl.control.button.border_radius,
              boxShadow: dl.control.button.box_shadow,
              color: dl.control.button._disabled.text_color,
              font: dl.control.button.font,
              height: dl.control.button.height,
              minWidth: dl.control.button.min_width,
              padding: dl.control.button.padding,
            }}
          >
            button
          </button>
        </div>
        <code>button/enabled/primary</code>
        <div>
          <button
            style={{
              background: dl.control.button._enabled._primary.background_color,
              border: dl.control.button.border,
              borderRadius: dl.control.button.border_radius,
              boxShadow: dl.control.button.box_shadow,
              color: dl.control.button._enabled._primary.text_color,
              cursor: dl.control.button._enabled.cursor,
              font: dl.control.button.font,
              height: dl.control.button.height,
              minWidth: dl.control.button.min_width,
              padding: dl.control.button.padding,
            }}
          >
            button
          </button>
        </div>
        <code>button/enabled/primary/hover</code>
        <div>
          <button
            style={{
              background: dl.control.button._enabled._primary._hover.background_color,
              border: dl.control.button.border,
              borderRadius: dl.control.button.border_radius,
              boxShadow: dl.control.button._enabled._hover.box_shadow,
              color: dl.control.button._enabled._primary._hover.text_color,
              cursor: dl.control.button._enabled.cursor,
              font: dl.control.button.font,
              height: dl.control.button.height,
              minWidth: dl.control.button.min_width,
              padding: dl.control.button.padding,
            }}
          >
            button
          </button>
        </div>
        <code>button/enabled/secondary</code>
        <div>
          <button
            style={{
              background: dl.control.button._enabled._secondary.background_color,
              border: dl.control.button.border,
              borderRadius: dl.control.button.border_radius,
              boxShadow: dl.control.button.box_shadow,
              color: dl.control.button._enabled._secondary.text_color,
              cursor: dl.control.button._enabled.cursor,
              font: dl.control.button.font,
              height: dl.control.button.height,
              minWidth: dl.control.button.min_width,
              padding: dl.control.button.padding,
            }}
          >
            button
          </button>
        </div>
        <code>button/enabled/secondary/hover</code>
        <div>
          <button
            style={{
              background: dl.control.button._enabled._secondary._hover.background_color,
              border: dl.control.button.border,
              borderRadius: dl.control.button.border_radius,
              boxShadow: dl.control.button._enabled._hover.box_shadow,
              color: dl.control.button._enabled._secondary._hover.text_color,
              cursor: dl.control.button._enabled.cursor,
              font: dl.control.button.font,
              height: dl.control.button.height,
              minWidth: dl.control.button.min_width,
              padding: dl.control.button.padding,
            }}
          >
            button
          </button>
        </div>

        <h3>2.2 Label</h3>
        <code>label</code>
        <div>
          <label
            style={{
              font: dl.control.label.font,
              color: dl.control.label.text_color,
            }}
          >
            Label
          </label>
        </div>
        <code>label/required</code>
        <div>
          <label
            style={{
              font: dl.control.label.font,
              color: dl.control.label.text_color,
            }}
          >
            Label<span style={{ color: dl.control.label._required.asterisk_color }}>&nbsp;*</span>
          </label>
        </div>

        <h3>2.3 Text input</h3>
        <code>text_input/disabled</code>
        <div>
          <input
            type="text"
            disabled
            placeholder="placehoder"
            style={{
              font: dl.control.text_input.font,
              boxSizing: dl.control.text_input.box_sizing,
              height: dl.control.text_input.height,
              borderRadius: dl.control.text_input.border_radius,
              borderWidth: dl.control.text_input.border_width,
              borderColor: dl.control.text_input.border_color,
              padding: dl.control.text_input.padding,
              color: dl.control.text_input._disabled.text_color,
              backgroundColor: dl.control.text_input._disabled.background_color,
            }}
          ></input>
        </div>
        <code>text_input/enabled/valid</code>
        <div>
          <input
            type="text"
            placeholder="placehoder"
            style={{
              font: dl.control.text_input.font,
              boxSizing: dl.control.text_input.box_sizing,
              height: dl.control.text_input.height,
              borderRadius: dl.control.text_input.border_radius,
              borderWidth: dl.control.text_input.border_width,
              borderColor: dl.control.text_input.border_color,
              padding: dl.control.text_input.padding,
              color: dl.control.text_input._enabled.text_color,
              backgroundColor: dl.control.text_input._enabled.background_color,
            }}
          ></input>
        </div>
        <code>text_input/enabled/valid/hover</code>
        <div>
          <input
            type="text"
            placeholder="placehoder"
            style={{
              font: dl.control.text_input.font,
              boxSizing: dl.control.text_input.box_sizing,
              height: dl.control.text_input.height,
              borderRadius: dl.control.text_input.border_radius,
              borderWidth: dl.control.text_input.border_width,
              borderColor: dl.control.text_input._enabled._valid._hover.border_color,
              padding: dl.control.text_input.padding,
              color: dl.control.text_input._enabled.text_color,
              backgroundColor: dl.control.text_input._enabled.background_color,
            }}
          ></input>
        </div>
        <code>text_input/enabled/valid/focus</code>
        <div>
          <input
            type="text"
            placeholder="placehoder"
            style={{
              font: dl.control.text_input.font,
              boxSizing: dl.control.text_input.box_sizing,
              height: dl.control.text_input.height,
              borderRadius: dl.control.text_input.border_radius,
              borderWidth: dl.control.text_input.border_width,
              borderColor: dl.control.text_input._enabled._valid._focus.border_color,
              padding: dl.control.text_input.padding,
              color: dl.control.text_input._enabled.text_color,
              backgroundColor: dl.control.text_input._enabled.background_color,
            }}
          ></input>
        </div>
        <code>text_input/enabled/valid/hover</code>
        <div>
          <input
            type="text"
            placeholder="placehoder"
            style={{
              font: dl.control.text_input.font,
              boxSizing: dl.control.text_input.box_sizing,
              height: dl.control.text_input.height,
              borderRadius: dl.control.text_input.border_radius,
              borderWidth: dl.control.text_input.border_width,
              borderColor: dl.control.text_input._enabled._valid._hover.border_color,
              padding: dl.control.text_input.padding,
              color: dl.control.text_input._enabled.text_color,
              backgroundColor: dl.control.text_input._enabled.background_color,
            }}
          ></input>
        </div>
        <code>text_input/enabled/invalid</code>
        <div>
          <input
            type="text"
            placeholder="placehoder"
            style={{
              font: dl.control.text_input.font,
              boxSizing: dl.control.text_input.box_sizing,
              height: dl.control.text_input.height,
              borderRadius: dl.control.text_input.border_radius,
              borderWidth: dl.control.text_input.border_width,
              borderColor: dl.control.text_input._enabled._invalid.border_color,
              padding: dl.control.text_input.padding,
              color: dl.control.text_input._enabled.text_color,
              backgroundColor: dl.control.text_input._enabled.background_color,
            }}
          ></input>
        </div>

        <h3>2.4 For field = Label + Text input</h3>
        <code>label/required + text_input/enabled/valid</code>
        <div>
          <label
            style={{
              font: dl.control.label.font,
              color: dl.control.label.text_color,
            }}
          >
            Label<span style={{ color: dl.control.label._required.asterisk_color }}>&nbsp;*</span>
          </label>
        </div>
        <div style={{ marginTop: dl.control.form_field.text_input_to_label_margin_top }}>
          <input
            type="text"
            placeholder="placehoder"
            style={{
              font: dl.control.text_input.font,
              boxSizing: dl.control.text_input.box_sizing,
              height: dl.control.text_input.height,
              borderRadius: dl.control.text_input.border_radius,
              borderWidth: dl.control.text_input.border_width,
              borderColor: dl.control.text_input.border_color,
              padding: dl.control.text_input.padding,
              color: dl.control.text_input._enabled.text_color,
              backgroundColor: dl.control.text_input._enabled.background_color,
            }}
          ></input>
        </div>
      </StyledSection>
    );
  }
}

const StyledSection = styled.section`
  padding: 24px;
`;

export default DesignLanguageExperiment;
