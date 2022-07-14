import React, { useEffect } from "react";
import { useTheme } from "next-themes";

import THEME from "constants/theme/theme.constant";

const RoborLogo = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const TREE_BODY = theme === THEME.DARK ? "#fefefe" : "#284243";
    const TREE_LEAVES = theme === THEME.DARK ? "#00b7bf" : "#00747a";

    // * get the tree-body elements
    const treeBody = document.querySelectorAll(".tree-body");
    Array.from(treeBody).forEach((element) => {
      element.style.fill = TREE_BODY;
    });

    // * get the tree-leaves elements
    const treeLeaves = document.querySelectorAll(".tree-leaves");
    Array.from(treeLeaves).forEach((element) => {
      element.style.fill = TREE_LEAVES;
    });
  }, [theme]);

  return (
    <svg
      id="roborLogoSVG"
      xmlns="http://www.w3.org/2000/svg"
      width="84.503"
      height="80"
      viewBox="0 0 84.503 80"
      className="w-16 h-16"
    >
      <g id="Layer_1" data-name="Layer 1" transform="translate(0)">
        <path
          className="tree-body"
          id="Path_342"
          data-name="Path 342"
          d="M140.966,355.267a27.725,27.725,0,0,0-6.275-1.786c-3.9-.915-7.09-2.555-8.751-6.406A30.343,30.343,0,0,1,123.8,334.56a7.163,7.163,0,0,0-2.322,1.678c-.2,1.721-.186,3.484-1.1,5a30.545,30.545,0,0,1-7.9,8.76c-.041.018-.081.044-.122.061l-.143.14a36.372,36.372,0,0,1-3.508,2.288,19.312,19.312,0,0,1-3.115.988,27.767,27.767,0,0,0-6.277,1.786c-1.812.915-3.375,2.232-5.105,3.281,3.719-2.257,12.237-3.2,15.142-3.467.073.09.153.178.223.268a19.742,19.742,0,0,0-3.508,2.875c-2.468,2.405-6.963,2.2-10.067,1.541a5.845,5.845,0,0,0,4.492,2.8,9.967,9.967,0,0,0,5.328-1.075,40.288,40.288,0,0,0,5.609-3.737c.035.047.072.095.107.143l.224-.172q.384-.279.786-.538c.288-.185.583-.362.883-.526s.641-.339.972-.487.694-.3,1.049-.418a10.574,10.574,0,0,1,1.121-.32,16.879,16.879,0,0,1,7.932.139c.371.105.737.232,1.1.374s.688.291,1.02.458.63.332.935.514c2.389,1.428,4.335,3.363,6.9,4.576a10.024,10.024,0,0,0,5.326,1.075,5.836,5.836,0,0,0,4.492-2.8c-3.109.656-7.6.865-10.067-1.54-3.147-3.066-4.271-3.228-4.271-3.228s11.617.807,16.135,3.551C144.343,357.507,142.779,356.18,140.966,355.267Z"
          transform="translate(-79.411 -282.617)"
        />
        <path
          className="tree-body"
          id="Path_343"
          data-name="Path 343"
          d="M258.383,123.6c-2.268.735-3.8,3.186-4.6,5.454-.529,1.509-.828,3.217-1.937,4.44-1.582,1.745-4.484,1.626-6.484.75-1.905-.834-3.051-2.5-5.14-3.086a14.49,14.49,0,0,0-4.947-.45,14.67,14.67,0,0,0-9.622,5.535s2.206-7.251,9.928-7.314c0,0,9.683-.429,9.071-9.867,0,0,5.5-5,5.169-10.2,0,0-2.561,6.693-6.864,6.031s-7.189-6.2-2.479-11.484c0,0-4.379,1.068-4.71,7.6a10.112,10.112,0,0,0,5.076,8.263c.61.372-.8,3.145-1.042,3.458-1.167,1.525-3.22,1.914-4.991,2.273a18.206,18.206,0,0,0-5.932,2.36c-7.26,4.411-10.015,13.744-8.252,21.854a14.585,14.585,0,0,0,3.3-2.8l.046-.05.082-.1c.152-.18.305-.366.445-.557a9.353,9.353,0,0,0,2.006-5.255,20.808,20.808,0,0,1,4.728-4.423,8.044,8.044,0,0,1,6.376-1.081c2.288.436,4.225,1.565,6.357,2.421a9.7,9.7,0,0,0,6.814.1,7.683,7.683,0,0,0,4.9-6.643,8.339,8.339,0,0,1,5.392-7.227S260.651,122.871,258.383,123.6Z"
          transform="translate(-185.577 -87.204)"
        />
        <path
          id="Path_344"
          data-name="Path 344"
          d="M26.374,91.685c1.059-.153,5.139-2,5.433.1a9.515,9.515,0,0,0,3.74,6.269,21.827,21.827,0,0,1,1.644-2.189,8.457,8.457,0,0,1,2.643-2.079c-1.167.54-3.635-2.706-3.99-3.411-2.968-5.872,1.75-13.342,7.114-15.929,0,0-7.814,1.321-10.125,10.566,0,0-2.195,4.437-6.316,3.612A6.924,6.924,0,0,1,20.747,81a8.817,8.817,0,0,1,.944-3.769c1.287-2.259,3.813-3.411,5.209-5.576,1.129-1.748,2.367-5.319,1.06-7.28.284.426-.673,2.511-.831,2.912a13.758,13.758,0,0,1-3.4,4.594c-1.235,1.22-2.45,2.663-4.155,3.2,0,0-4.259.619-4.741-6.319a7.038,7.038,0,0,0-.549,4.881,6.647,6.647,0,0,0,3.572,3.984s-1.923,5.427.275,7.9c0,0-14.49-4.4-18.136,5.015,0,0,4.947-4.947,9.137-3.641,0,0-3.3,2.617-2.061,6.324-.2-.59,1.678-2.593,2.007-2.968a6.45,6.45,0,0,1,5.033-2.379,15.567,15.567,0,0,1,5.432,1.344C21.876,90.205,23.657,92.074,26.374,91.685Z"
          transform="translate(0 -54.552)"
          className="tree-body"
        />
        <rect
          id="Rectangle_121"
          data-name="Rectangle 121"
          width="6.875"
          height="6.875"
          transform="translate(23.774 41.115)"
          className="tree-leaves"
        />
        <rect
          id="Rectangle_122"
          data-name="Rectangle 122"
          width="3.891"
          height="3.891"
          transform="translate(6.615 41.095)"
          className="tree-body"
        />
        <rect
          id="Rectangle_123"
          data-name="Rectangle 123"
          width="5.903"
          height="5.903"
          transform="translate(1.167 21.801)"
          className="tree-leaves"
        />
        <rect
          id="Rectangle_124"
          data-name="Rectangle 124"
          width="4.346"
          height="4.346"
          transform="translate(52.516 1.257)"
          className="tree-leaves"
        />
        <rect
          id="Rectangle_125"
          data-name="Rectangle 125"
          width="3.708"
          height="3.708"
          transform="translate(17.986 6.356)"
          className="tree-body"
        />
        <rect
          id="Rectangle_126"
          data-name="Rectangle 126"
          width="7.242"
          height="7.242"
          transform="translate(26.666)"
          className="tree-leaves"
        />
        <rect
          id="Rectangle_127"
          data-name="Rectangle 127"
          width="6.377"
          height="6.377"
          transform="translate(37.037 11.804)"
          className="tree-leaves"
        />
        <rect
          id="Rectangle_128"
          data-name="Rectangle 128"
          width="5.967"
          height="5.967"
          transform="translate(64.167 13.218)"
          className="tree-leaves"
        />
        <rect
          id="Rectangle_129"
          data-name="Rectangle 129"
          width="3.453"
          height="3.453"
          transform="translate(72.049 10.064)"
          className="tree-body"
        />
        <rect
          id="Rectangle_130"
          data-name="Rectangle 130"
          width="4.622"
          height="4.622"
          transform="translate(70.883 26.988)"
          className="tree-body"
        />
        <rect
          id="Rectangle_131"
          data-name="Rectangle 131"
          width="5.967"
          height="5.967"
          transform="translate(78.536 32.834)"
          className="tree-leaves"
        />
        <rect
          id="Rectangle_132"
          data-name="Rectangle 132"
          width="2.709"
          height="2.709"
          transform="translate(58.982 10.808)"
          className="tree-body"
        />
        <rect
          id="Rectangle_133"
          data-name="Rectangle 133"
          width="2.983"
          height="2.983"
          transform="translate(78.536 23.444)"
          className="tree-body"
        />
        <rect
          id="Rectangle_134"
          data-name="Rectangle 134"
          width="5.869"
          height="5.869"
          transform="translate(40.791 28.429)"
          className="tree-leaves"
        />
        <rect
          id="Rectangle_135"
          data-name="Rectangle 135"
          width="2.778"
          height="2.778"
          transform="translate(26.647 24.953)"
          className="tree-body"
        />
        <rect
          id="Rectangle_136"
          data-name="Rectangle 136"
          width="2.758"
          height="2.758"
          transform="translate(14.531 36.668)"
          className="tree-body"
        />
        <rect
          id="Rectangle_137"
          data-name="Rectangle 137"
          width="3.947"
          height="3.947"
          transform="translate(5.374 13.681)"
          className="tree-body"
        />
        <rect
          id="Rectangle_138"
          data-name="Rectangle 138"
          width="2.927"
          height="2.927"
          transform="translate(38.797 3.43)"
          className="tree-body"
        />
        <rect
          id="Rectangle_139"
          data-name="Rectangle 139"
          width="2.988"
          height="2.988"
          transform="translate(61.727 38.065)"
          className="tree-body"
        />
        <rect
          id="Rectangle_140"
          data-name="Rectangle 140"
          width="3.093"
          height="3.093"
          transform="translate(20.172 49.774)"
          className="tree-body"
        />
      </g>
    </svg>
  );
};

export default RoborLogo;