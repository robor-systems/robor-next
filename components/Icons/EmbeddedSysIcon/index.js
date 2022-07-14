import React, { useEffect } from "react";
import { useTheme } from "next-themes";

import THEME, { SVG_COLORS } from "constants/theme/theme.constant";

const EmbeddedSysIcon = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // * get the emsystem-icon-path class elements
    const emSystemIconPath = document.querySelectorAll(".emsystem-icon-path");

    // * apply fill color to emsystem-icon-path
    Array.from(emSystemIconPath).forEach((item) => {
      item.setAttribute(
        "fill",
        theme === THEME.DARK ? SVG_COLORS.darkPrimary : SVG_COLORS.lightPrimary
      );
    });
  }, [theme]);

  return (
    <svg
      id="cpu"
      xmlns="http://www.w3.org/2000/svg"
      width="75.113"
      height="75.113"
      viewBox="0 0 75.113 75.113"
    >
      <g id="Group_35" data-name="Group 35" transform="translate(0 8.254)">
        <g id="Group_34" data-name="Group 34">
          <path
            className="emsystem-icon-path"
            id="Path_103"
            data-name="Path 103"
            d="M13.427,56.263h-.018a5.022,5.022,0,0,0-4.927,5v7.147H1.106a1.106,1.106,0,0,0,0,2.211H8.483v5.813H1.106a1.106,1.106,0,1,0,0,2.211H8.483V84.46H1.106a1.106,1.106,0,0,0,0,2.211H8.483v5.813H1.106a1.106,1.106,0,0,0,0,2.211H8.483v5.813H1.106a1.106,1.106,0,1,0,0,2.211H8.483V106.5a1.106,1.106,0,0,0,2.211,0V61.265a2.8,2.8,0,0,1,2.749-2.792,1.1,1.1,0,0,0-.016-2.21Z"
            transform="translate(0 -56.263)"
          />
        </g>
      </g>
      <g id="Group_37" data-name="Group 37" transform="translate(8.771 61.768)">
        <g id="Group_36" data-name="Group 36">
          <path
            id="Path_104"
            data-name="Path 104"
            d="M111.191,423.46H64.5a2.784,2.784,0,0,1-2.586-1.735,1.105,1.105,0,0,0-2.046.837,4.985,4.985,0,0,0,4.632,3.109H71.42v7.605a1.106,1.106,0,0,0,2.211,0v-7.605h5.813v7.605a1.106,1.106,0,0,0,2.211,0v-7.605h5.813v7.605a1.106,1.106,0,0,0,2.211,0v-7.605h5.813v7.605a1.106,1.106,0,0,0,2.211,0v-7.605h5.813v7.605a1.106,1.106,0,0,0,2.211,0v-7.605h5.464a1.105,1.105,0,1,0,0-2.211Z"
            transform="translate(-59.788 -421.037)"
            className="emsystem-icon-path"
          />
        </g>
      </g>
      <g
        id="Group_39"
        data-name="Group 39"
        transform="translate(19.029 18.799)"
      >
        <g id="Group_38" data-name="Group 38">
          <path
            id="Path_105"
            data-name="Path 105"
            d="M163.229,128.138H133.239a3.537,3.537,0,0,0-3.533,3.533v29.991a3.537,3.537,0,0,0,3.533,3.533h29.989a3.537,3.537,0,0,0,3.533-3.533V131.671A3.537,3.537,0,0,0,163.229,128.138Zm-31.312,3.533a1.323,1.323,0,0,1,1.322-1.322h22.869V141.9a5.252,5.252,0,0,0-4.009,4.01h-8.147v-5.669a4.544,4.544,0,1,0-5.335-5.335h-6.7Zm25.3,12.318a3.021,3.021,0,1,1-3.022,3.022A3.025,3.025,0,0,1,157.214,143.989Zm-14.138-5.879a2.333,2.333,0,1,1,2.333-2.333A2.337,2.337,0,0,1,143.076,138.11ZM138.3,156.18a2.1,2.1,0,1,1,3.134-1.834A2.1,2.1,0,0,1,138.3,156.18Zm8.942,6.8h-7.417v-4.352a4.315,4.315,0,1,0-2.211-.327v4.679h-4.375a1.324,1.324,0,0,1-1.322-1.322v-24.55h6.815a4.629,4.629,0,0,0,3.009,3.009v6.89a1.106,1.106,0,0,0,1.106,1.106h4.4Zm17.308-1.322a1.324,1.324,0,0,1-1.322,1.322H149.454V158.2h15.1Zm0-5.67h-15.1v-7.876H152.1a5.233,5.233,0,1,0,6.221-6.221h0V130.349h4.909a1.323,1.323,0,0,1,1.322,1.322v24.321Z"
            transform="translate(-129.706 -128.138)"
            className="emsystem-icon-path"
          />
        </g>
      </g>
      <g id="Group_41" data-name="Group 41" transform="translate(16.744)">
        <g id="Group_40" data-name="Group 40">
          <path
            id="Path_106"
            data-name="Path 106"
            d="M171.395,30.638a1.106,1.106,0,0,0,0-2.211h-7.377V22.614h7.377a1.106,1.106,0,0,0,0-2.211h-7.377V13.256a5.009,5.009,0,0,0-5-5H152.1V1.106a1.106,1.106,0,1,0-2.211,0V8.253h-5.813V1.106a1.106,1.106,0,0,0-2.211,0V8.253h-5.813V1.106a1.106,1.106,0,1,0-2.211,0V8.253h-5.813V1.106a1.106,1.106,0,0,0-2.211,0V8.253H120V1.106a1.106,1.106,0,1,0-2.211,0V8.253h-2.554a1.106,1.106,0,1,0,0,2.211h43.778a2.8,2.8,0,0,1,2.792,2.792V61.4a2.766,2.766,0,0,1-.865,2.021,1.106,1.106,0,0,0,1.526,1.6,4.964,4.964,0,0,0,1.551-3.622V54.71H171.4a1.106,1.106,0,1,0,0-2.211h-7.377V46.686H171.4a1.106,1.106,0,1,0,0-2.211h-7.377V38.662H171.4a1.106,1.106,0,1,0,0-2.211h-7.377V30.638h7.377Z"
            transform="translate(-114.131)"
            className="emsystem-icon-path"
          />
        </g>
      </g>
    </svg>
  );
};

export default EmbeddedSysIcon;
