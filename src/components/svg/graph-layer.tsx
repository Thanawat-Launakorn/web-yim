import * as React from "react";
import { SVGProps } from "react";
const GraphLayer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={92.813}
    height={189.426}
    data-name="Group 21802"
  >
    <defs>
      <clipPath id="b">
        <path
          fill="url(#a)"
          d="M0 0h92.813v189.426H0z"
          data-name="Rectangle 21880"
        />
      </clipPath>
      <clipPath id="c">
        <path
          fill="url(#a)"
          d="M0 0h92.813v189.427H0z"
          data-name="Rectangle 21874"
        />
      </clipPath>
      <clipPath id="d">
        <path
          fill="url(#a)"
          d="M0 0h58.686v16.213H0z"
          data-name="Rectangle 21857"
        />
      </clipPath>
      <clipPath id="e">
        <path
          fill="url(#a)"
          d="M0 0h24.931v48.433H0z"
          data-name="Rectangle 21858"
        />
      </clipPath>
      <clipPath id="f">
        <path
          fill="url(#a)"
          d="M0 0h58.576v51.656H0z"
          data-name="Rectangle 21859"
        />
      </clipPath>
      <clipPath id="g">
        <path
          fill="url(#a)"
          d="M0 0h67.689v73.004H0z"
          data-name="Rectangle 21860"
        />
      </clipPath>
      <clipPath id="h">
        <path
          fill="url(#a)"
          d="M0 0h58.576v51.676H0z"
          data-name="Rectangle 21863"
        />
      </clipPath>
      <clipPath id="i">
        <path
          fill="url(#a)"
          d="M0 0h67.689v73.024H0z"
          data-name="Rectangle 21864"
        />
      </clipPath>
      <clipPath id="j">
        <path
          fill="url(#a)"
          d="M0 0h67.689v72.993H0z"
          data-name="Rectangle 21866"
        />
      </clipPath>
      <clipPath id="k">
        <path
          fill="url(#a)"
          d="M0 0h24.932v48.433H0z"
          data-name="Rectangle 21867"
        />
      </clipPath>
      <clipPath id="l">
        <path
          fill="url(#a)"
          d="M0 0h58.577v51.645H0z"
          data-name="Rectangle 21868"
        />
      </clipPath>
      <clipPath id="m">
        <path
          fill="url(#a)"
          d="M0 0h24.931v48.443H0z"
          data-name="Rectangle 21870"
        />
      </clipPath>
      <clipPath id="n">
        <path
          fill="url(#a)"
          d="M0 0h67.689v73.034H0z"
          data-name="Rectangle 21872"
        />
      </clipPath>
      <clipPath id="o">
        <path
          fill="url(#a)"
          d="M0 0h24.931v150.402H0z"
          data-name="Rectangle 21876"
        />
      </clipPath>
      <clipPath id="p">
        <path
          fill="url(#a)"
          d="M80.833 182.676 56 168.244l-.1-135.97 24.837 14.432Z"
          data-name="Path 25355"
          transform="translate(-55.901 -32.274)"
        />
      </clipPath>
      <clipPath id="r">
        <path
          fill="url(#a)"
          d="M0 0h67.978v174.993H0z"
          data-name="Rectangle 21878"
        />
      </clipPath>
      <clipPath id="s">
        <path
          fill="url(#a)"
          d="m67.881 113.925-.1-34h-.021l-.071-33.982-.1-34.009-33.851 1.78L0 50.96l.1 34.01.1 45.84.034-.036.055 22.156.1 34 33.741-37.244 33.848-1.786Z"
          data-name="Path 25356"
          transform="translate(0 -11.936)"
        />
      </clipPath>
      <pattern
        id="q"
        width={1}
        height={1}
        patternTransform="matrix(-1 0 0 1 94.313 0)"
        viewBox="0 0 47.156 154.769"
      >
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAACACAYAAACIunBjAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAJ6ADAAQAAAABAAAAgAAAAADf+6MUAAAFDklEQVR4AeWcTVLcMBSEZyhOMdwkyxwguUCyCGSVLIFULpAVsEm2AYoLcIHscxPmGhP3jJ6RrCfp/dieCahKyJbV6s8ty3EVVJabzWbhLZ9v1m+0c/w+X/1taY7jARaTSL+Mjkc5PGaAPCYebXZDSI6bkOvLxIUOjzaZsgSHQWaT7ik2a2O6IpzTYBy4BoTHxKPdBlhMLorXY+LRLo7Cs4VJShWcpWut/qL27Gb9FhdrRZIc6QFiLSbti4FDaqYEQtxqrSY5WlK1CQm1N2eBg9csgEe356s/wQyG0kqA0vHxuFiL42JBcigQa4tFQx4irQcORiITIhq0Ta0Xzgs44E1PCc5nsnElmBJFZwS3i9hn0lymyFd0uIN7hvIYeLQsbJrcbojHxKPNAPFVgoJJqQ7PqV/SqrRn1+v3EJQKlxyNBYy1eLS9Zw0OgzwmHu0WcEo4780tWnBeA1d6Eri9AW536+3F6rEjwF2WKgGWrtf6W1pcZwslh4swaBXJmNIcau2ccIBWAWrh1AaDGCeHmw3QkhyFoUqBRKEVaT1wkyfohZsUkL5KyARxz1q7L5OPMOfKGMlhXtEzxAHUtDHcZCYFqGZ3DEd3T21TzAzwaLPpODgM8ph4tAngQcP1u7X7MnkIidGdo7VU3L1WB01W4uRwkcBo4PCc+iWtR7udvwWHQR4Tj7b/TKckSpOV+klXa81aSXIwNht4tFK4vQBq4FyAjd8UYe6saOEWFpPIVfV4JHAKY5VJBIdDsbZ/CYcJIJy9nl6vvwb/pEmSC2DJgMqJOAFmDpHWAwdPkQkDJ9J64UQmBbimdgy4pkkFrqo9aLhkt95drH52t2LZrZSAR5sFPEyOTLKBwg7PBsksOLiDAeTg6O6pze5I0OHR9tP/t3B7X95achSvZ4k82uwzvZSWx8SsTd5zISpMNqwEPeyXnIu03ZfJ9+DfN5JlpcEA8RS1XgMHMLVBdDdqrRZuVkAL3GyAVjgf4GYjWuJst3ZfJj86Z4jrFX/CCxNLxa3x8++uhJ9ccjvTZFjxRJRAQd3U8nC6Xdk0KcChu6odA65pUoGraseCq5o04IraMeGKJgI4Vvuq4NgEhMllw7L3XDQCO8lSMYVFtzy9esI7ti+tZa1u9X4W/sCj3c7YgsMgj4lHy34JD4E8Bh6tCG4Ii3NNMQNKlpVAzCbdBCYtu1vvLk/wPY8J4wrI+FxzrNFi7LaUksNFmHOl1M+NHfaptC8ODmmoEhjEJ9ZakiMvsQkJolak9cDBS2QSQcWHTa0XblLAvcK1fmPEvudC9ohdUre/D4ORtnI+n66efoX+4j9fll/ANZ8hMmVaVjvGssZerEk8oHKcaceGg3dmUgEaXkq0rw5utPSKu/X+8uRLWCJEra0EqNWJlxUGKIlg1yX+6dGWXyXBnianVkwVDTRraxsC89PE1Eae4kOzVgoXg4qpooEmQA3c7IBauFkBLXCzAe4DTnxzxZcwZugKHmSu1q5x41V93WfTAwysyUGLAlNraWq9cABrmlToq9ox4CYDHAtuEsCDhqvu1u6z6UN4pvBstCql1xrHXee0zd1KIrTSAnNrSbStZYVJIhC6WjQ0da+dCs56Uwngq4XzpifaEF6T/hmiNZO2mmU1m3QwJq0GbtYEuy+Tx4OFQxJaOF96z/9fAOZpFgtc9wcKtmco0IifvzZcGURswkS0vP928o7pT7racPWdJjJJHBUn/wDTxXMoo2msAgAAAABJRU5ErkJggg=="
          width={47.156}
          height={154.769}
          preserveAspectRatio="none"
        />
      </pattern>
      <pattern
        id="t"
        width={1}
        height={1}
        patternTransform="matrix(-1 0 0 1 270.846 0)"
        viewBox="0 0 135.423 201.926"
      >
        <image
          xlinkHref="data:image/png;base64,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"
          width={135.423}
          height={201.926}
          preserveAspectRatio="none"
        />
      </pattern>
      <linearGradient
        id="a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#3a0c79" />
        <stop offset={1} stopColor="#ae37f4" />
      </linearGradient>
    </defs>
    <g clipPath="url(#b)" data-name="Group 22199">
      <g data-name="Group 22198">
        <g clipPath="url(#b)" data-name="Group 22197">
          <g data-name="Group 22186">
            <g data-name="Group 22185">
              <g
                clipPath="url(#c)"
                data-name="Group 22184"
                transform="translate(0 -.001)"
              >
                <g
                  data-name="Group 22183"
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <g data-name="Group 22182">
                    <g clipPath="url(#c)" data-name="Group 22181">
                      <g data-name="Group 22135">
                        <g data-name="Group 22134">
                          <g
                            clipPath="url(#d)"
                            data-name="Group 22133"
                            transform="translate(34.031 101.99)"
                          >
                            <path
                              fill="url(#a)"
                              d="M24.914 100.562.08 86.13l33.85-1.781 24.835 14.432Z"
                              data-name="Path 25339"
                              transform="translate(-.079 -84.349)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22138">
                        <g data-name="Group 22137">
                          <g
                            clipPath="url(#e)"
                            data-name="Group 22136"
                            transform="translate(.289 140.994)"
                          >
                            <path
                              fill="url(#a)"
                              d="M80.832 165.039 56 150.607l-.1-34 24.834 14.433Z"
                              data-name="Path 25340"
                              transform="translate(-55.901 -116.606)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22141">
                        <g data-name="Group 22140">
                          <g
                            clipPath="url(#f)"
                            data-name="Group 22139"
                            transform="translate(.289 103.771)"
                          >
                            <path
                              fill="url(#a)"
                              d="m52.911 137.477-24.835-14.432 33.741-37.223 24.834 14.432Z"
                              data-name="Path 25341"
                              transform="translate(-28.076 -85.821)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22144">
                        <g data-name="Group 22143">
                          <g
                            clipPath="url(#g)"
                            data-name="Group 22142"
                            transform="translate(25.124 116.423)"
                          >
                            <path
                              fill="url(#a)"
                              d="m33.741 98.066 33.851-1.781.1 33.98-33.851 1.78L.1 169.289l-.1-34Z"
                              data-name="Path 25342"
                              transform="translate(.001 -96.285)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22147">
                        <g data-name="Group 22146">
                          <g
                            clipPath="url(#d)"
                            data-name="Group 22145"
                            transform="translate(33.934 67.991)"
                          >
                            <path
                              fill="url(#a)"
                              d="M24.994 72.443.159 58.01l33.85-1.781 24.836 14.433Z"
                              data-name="Path 25343"
                              transform="translate(-.159 -56.23)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22150">
                        <g data-name="Group 22149">
                          <g
                            clipPath="url(#e)"
                            data-name="Group 22148"
                            transform="translate(.193 107.015)"
                          >
                            <path
                              fill="url(#a)"
                              d="M80.912 136.937 56.077 122.5l-.1-34 24.834 14.433Z"
                              data-name="Path 25344"
                              transform="translate(-55.981 -88.504)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22153">
                        <g data-name="Group 22152">
                          <g
                            clipPath="url(#h)"
                            data-name="Group 22151"
                            transform="translate(.193 69.771)"
                          >
                            <path
                              fill="url(#a)"
                              d="M52.991 109.378 28.156 94.946 61.9 57.7l24.832 14.435Z"
                              data-name="Path 25345"
                              transform="translate(-28.156 -57.702)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22156">
                        <g data-name="Group 22155">
                          <g
                            clipPath="url(#i)"
                            data-name="Group 22154"
                            transform="translate(25.028 82.423)"
                          >
                            <path
                              fill="url(#a)"
                              d="m33.82 69.946 33.851-1.781.1 34-33.851 1.78L.175 141.19l-.1-34Z"
                              data-name="Path 25346"
                              transform="translate(-.079 -68.166)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22159">
                        <g data-name="Group 22158">
                          <g
                            clipPath="url(#d)"
                            data-name="Group 22157"
                            transform="translate(33.838 34.011)"
                          >
                            <path
                              fill="url(#a)"
                              d="M25.075 44.34.239 29.908l33.851-1.781 24.836 14.432Z"
                              data-name="Path 25347"
                              transform="translate(-.24 -28.127)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22162">
                        <g data-name="Group 22161">
                          <g
                            clipPath="url(#j)"
                            data-name="Group 22160"
                            transform="translate(24.931 48.444)"
                          >
                            <path
                              fill="url(#a)"
                              d="m33.9 41.844 33.851-1.781.1 33.969L34 75.814.256 113.058l-.1-34Z"
                              data-name="Path 25348"
                              transform="translate(-.16 -40.064)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22165">
                        <g data-name="Group 22164">
                          <g
                            clipPath="url(#k)"
                            data-name="Group 22163"
                            transform="translate(.096 73.004)"
                          >
                            <path
                              fill="url(#a)"
                              d="M80.992 108.809 56.156 94.377l-.1-34L80.9 74.809Z"
                              data-name="Path 25349"
                              transform="translate(-56.06 -60.376)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22168">
                        <g data-name="Group 22167">
                          <g
                            clipPath="url(#l)"
                            data-name="Group 22166"
                            transform="translate(.096 35.792)"
                          >
                            <path
                              fill="url(#a)"
                              d="M53.07 81.245 28.234 66.813 61.977 29.6l24.835 14.433Z"
                              data-name="Path 25350"
                              transform="translate(-28.235 -29.6)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22171">
                        <g data-name="Group 22170">
                          <g
                            clipPath="url(#d)"
                            data-name="Group 22169"
                            transform="translate(33.741)"
                          >
                            <path
                              fill="url(#a)"
                              d="M25.153 16.213.319 1.78 34.169 0 59 14.432Z"
                              data-name="Path 25351"
                              transform="translate(-.318 .001)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22174">
                        <g data-name="Group 22173">
                          <g
                            clipPath="url(#m)"
                            data-name="Group 22172"
                            transform="translate(0 39.025)"
                          >
                            <path
                              fill="url(#a)"
                              d="M81.072 80.717 56.236 66.285l-.1-34.011 24.839 14.432Z"
                              data-name="Path 25352"
                              transform="translate(-56.14 -32.274)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22177">
                        <g data-name="Group 22176">
                          <g
                            clipPath="url(#h)"
                            data-name="Group 22175"
                            transform="translate(0 1.781)"
                          >
                            <path
                              fill="url(#a)"
                              d="M53.15 53.148 28.315 38.716 62.056 1.472 86.89 15.9Z"
                              data-name="Path 25353"
                              transform="translate(-28.314 -1.472)"
                            />
                          </g>
                        </g>
                      </g>
                      <g data-name="Group 22180">
                        <g data-name="Group 22179">
                          <g
                            clipPath="url(#n)"
                            data-name="Group 22178"
                            transform="translate(24.835 14.433)"
                          >
                            <path
                              fill="url(#a)"
                              d="m33.98 13.716 33.851-1.781.1 34.011-33.855 1.781L.334 84.971.239 50.96Z"
                              data-name="Path 25354"
                              transform="translate(-.238 -11.936)"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g
            data-name="Group 22191"
            opacity={0.67}
            style={{
              mixBlendMode: "multiply",
              isolation: "isolate",
            }}
          >
            <g data-name="Group 22190">
              <g
                clipPath="url(#o)"
                data-name="Group 22189"
                transform="translate(.29 39.024)"
              >
                <g data-name="Group 22188">
                  <g
                    clipPath="url(#p)"
                    data-name="Group 22187"
                    transform="translate(-.001)"
                  >
                    <path
                      fill="url(#q)"
                      d="M0 0h47.156v154.769H0z"
                      data-name="Rectangle 21875"
                      transform="translate(-11.461 -1.949)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g
            data-name="Group 22196"
            opacity={0.6}
            style={{
              mixBlendMode: "screen",
              isolation: "isolate",
            }}
          >
            <g data-name="Group 22195">
              <g
                clipPath="url(#r)"
                data-name="Group 22194"
                transform="translate(24.836 14.432)"
              >
                <g data-name="Group 22193">
                  <g clipPath="url(#s)" data-name="Group 22192">
                    <path
                      fill="url(#t)"
                      d="M0 0h135.423v201.926H0z"
                      data-name="Rectangle 21877"
                      transform="translate(-33.59 -13.632)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
export default GraphLayer;
