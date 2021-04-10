import React from "react";
import Chip from "@material-ui/core/Chip";
import type from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import FlagIcon from "@material-ui/icons/Flag";
import theme from "../styles/theme";

const inlineStyles = {
  chip: {
    display: "inline-flex",
    height: "25px",
    justifyContent: "center",
    flexWrap: "nowrap",
    alignItems: "center",
    verticalAlign: "middle",
    marginBottom: "8px",
    marginRight: "2px"
  },
  text: {
    fontSize: "12px",
    fontWeight: "900",
    color: "#212121"
  },
  icon: {
    width: "16px",
    height: "16px",
    verticalAlign: "middle",
    marginLeft: "10px"
  }
};

export const TagChip = props => (
  <Chip
    style={{
      ...inlineStyles.chip,
      backgroundColor: props.backgroundColor || theme.colors.lightYellow,
      ...(props.style ? props.style : {})
    }}
    label={props.text}
    avatar={
      <Avatar
        style={{
          ...inlineStyles.icon,
          backgroundColor: props.backgroundColor || theme.colors.lightYellow
        }}
      >
        {props.icon || <FlagIcon fontSize="small" />}
      </Avatar>
    }
  />
);

TagChip.propTypes = {
  text: type.string,
  icon: type.element,
  backgroundColor: type.string
};

export default TagChip;
