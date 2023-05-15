import { useTheme } from "@emotion/react";
import { Link } from "@mui/material";

/**
 *
 * @param {Object[]} linkData - str displayed on header
 * @param {string} linkData[].name - str displayed on header
 * @param {string} linkData[].link - where does the link go to
 * @returns
 */
export default function LinkTags({ linkData }) {
  const theme = useTheme();

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    margin: "20px 0",
  };

  // App.css has more styling for link tag <a></a>
  const linkStyle = {
    color: theme.palette.text.primary,
    margin: "0 15px",
  };

  return (
    <div style={containerStyle}>
      {linkData.map((aLink) => (
        <a href={aLink.link} class="header-link" style={linkStyle}>
          {aLink.name}
        </a>
      ))}
    </div>
  );
}
