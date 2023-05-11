import React from 'react'

const LoadingBooking = () => {
     return (
          <>
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                    margin: "auto",
                    background: "none",
                    display: "block",
                    shapeRendering: "auto"
                    }}
                    width="191px"
                    height="191px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
               >
                    <circle
                         cx={50}
                         cy={50}
                         r={30}
                         strokeWidth={4}
                         stroke="#000000"
                         strokeDasharray="47.12388980384689 47.12388980384689"
                         fill="none"
                         strokeLinecap="round"
                    >
                    <animateTransform
                         attributeName="transform"
                         type="rotate"
                         dur="2.127659574468085s"
                         repeatCount="indefinite"
                         keyTimes="0;1"
                         values="0 50 50;360 50 50"
                    />
                    </circle>
                    <circle
                         cx={50}
                         cy={50}
                         r={25}
                         strokeWidth={4}
                         stroke="#000000"
                         strokeDasharray="39.269908169872416 39.269908169872416"
                         strokeDashoffset="39.269908169872416"
                         fill="none"
                         strokeLinecap="round"
                    >
                    <animateTransform
                         attributeName="transform"
                         type="rotate"
                         dur="2.127659574468085s"
                         repeatCount="indefinite"
                         keyTimes="0;1"
                         values="0 50 50;-360 50 50"
                    />
                    </circle>
               </svg>

          </>
     )
}

export default LoadingBooking
